import { useCallback, useEffect, useRef, useState } from "react";

type CleanPriceData = {
  gold24kPer10g: number | null;
  silverPerGram: number | null;
  silverPerKg: number | null;
  timestamp: string;
  error?: string;
};

type WSSnapshot = { type: "snapshot"; data: CleanPriceData };
type WSUpdate = { type: "update"; ts: string; data: CleanPriceData };
type WSError = { type: "error"; message: string };

export type WSMessage = WSSnapshot | WSUpdate | WSError;

export function useWebSocket(url: string) {
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimerRef = useRef<number | null>(null);
  const attemptsRef = useRef<number>(0);
  const mountedRef = useRef<boolean>(false);

  const [connected, setConnected] = useState<boolean>(false);
  const [message, setMessage] = useState<WSMessage | null>(null);
  const [readyState, setReadyState] = useState<number>(WebSocket.CLOSED);

  const BASE_RECONNECT_MS = 1000;
  const MAX_RECONNECT_MS = 30000;
  const MAX_ATTEMPTS = 10;

  const clearReconnectTimer = () => {
    if (reconnectTimerRef.current !== null) {
      clearTimeout(reconnectTimerRef.current);
      reconnectTimerRef.current = null;
    }
  };

  // ---------------------------------------------------------------------
  // SAFE JSON PARSER FOR NEW BACKEND FORMAT
  // ---------------------------------------------------------------------
  const safeParse = (raw: string): WSMessage | null => {
    try {
      const parsed = JSON.parse(raw);

      if (!parsed || typeof parsed !== "object" || !("type" in parsed)) {
        return null;
      }

      if (parsed.type === "error") {
        return { type: "error", message: String(parsed.message ?? "") };
      }

      if (parsed.type === "snapshot" || parsed.type === "update") {
        const d = parsed.data;

        const clean: CleanPriceData = {
          gold24kPer10g:
            typeof d?.gold24kPer10g === "number" ? d.gold24kPer10g : null,
          silverPerGram:
            typeof d?.silverPerGram === "number" ? d.silverPerGram : null,
          silverPerKg:
            typeof d?.silverPerKg === "number" ? d.silverPerKg : null,
          timestamp: typeof d?.timestamp === "string" ? d.timestamp : "",
          error: typeof d?.error === "string" ? d.error : undefined,
        };

        if (parsed.type === "snapshot") {
          return { type: "snapshot", data: clean };
        }

        return {
          type: "update",
          ts: typeof parsed.ts === "string" ? parsed.ts : "",
          data: clean,
        };
      }

      return null;
    } catch {
      return null;
    }
  };

  // ---------------------------------------------------------------------
  // CONNECT FUNCTION WITH AUTO RECONNECT
  // ---------------------------------------------------------------------
  const connect = useCallback(() => {
    if (
      wsRef.current &&
      (wsRef.current.readyState === WebSocket.OPEN ||
        wsRef.current.readyState === WebSocket.CONNECTING)
    ) {
      return;
    }

    try {
      const ws = new WebSocket(url);
      wsRef.current = ws;
      setReadyState(ws.readyState);

      ws.onopen = () => {
        attemptsRef.current = 0;
        clearReconnectTimer();
        setConnected(true);
        setReadyState(WebSocket.OPEN);
      };

      ws.onmessage = (ev: MessageEvent) => {
        if (typeof ev.data === "string") {
          const parsed = safeParse(ev.data);
          if (parsed) setMessage(parsed);
        }
      };

      ws.onerror = () => {
        setConnected(false);
      };

      ws.onclose = () => {
        setConnected(false);
        setReadyState(WebSocket.CLOSED);

        if (!mountedRef.current) return;
        if (attemptsRef.current >= MAX_ATTEMPTS) return;

        attemptsRef.current += 1;

        const delay = Math.min(
          BASE_RECONNECT_MS * 2 ** (attemptsRef.current - 1),
          MAX_RECONNECT_MS
        );

        clearReconnectTimer();
        reconnectTimerRef.current = window.setTimeout(() => {
          connect();
        }, delay) as unknown as number;
      };
    } catch {
      if (!mountedRef.current) return;

      attemptsRef.current += 1;

      const delay = Math.min(
        BASE_RECONNECT_MS * 2 ** (attemptsRef.current - 1),
        MAX_RECONNECT_MS
      );

      clearReconnectTimer();
      reconnectTimerRef.current = window.setTimeout(() => {
        connect();
      }, delay) as unknown as number;
    }
  }, [url]);

  // ---------------------------------------------------------------------
  // INIT + CLEANUP
  // ---------------------------------------------------------------------
  useEffect(() => {
    mountedRef.current = true;
    connect();

    return () => {
      mountedRef.current = false;
      clearReconnectTimer();
      if (wsRef.current) {
        try {
          wsRef.current.onopen = null;
          wsRef.current.onmessage = null;
          wsRef.current.onerror = null;
          wsRef.current.onclose = null;
          wsRef.current.close();
        } catch {}
        wsRef.current = null;
      }
    };
  }, [connect]);

  // ---------------------------------------------------------------------
  // SEND FUNCTION
  // ---------------------------------------------------------------------
  const send = useCallback((payload: unknown): boolean => {
    const socket = wsRef.current;
    if (!socket || socket.readyState !== WebSocket.OPEN) return false;

    try {
      const data =
        typeof payload === "string" ? payload : JSON.stringify(payload);
      socket.send(data);
      return true;
    } catch {
      return false;
    }
  }, []);

  return {
    connected,
    readyState,
    message,
    send,
    ws: wsRef.current,
  } as const;
}
