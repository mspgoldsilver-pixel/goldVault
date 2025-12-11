import { useEffect, useState } from "react";
import { AdminLayout } from "../layout/AdminLayout";
import { useWebSocket } from "../../hooks/useWebSocket";

type RateCardProps = {
  label: string;
  value: string;
};

const RateCard = ({ label, value }: RateCardProps) => {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 md:p-6">
      <p className="text-neutral-400 text-sm">{label}</p>
      <p className="text-2xl md:text-4xl font-bold text-white mt-1">{value}</p>
    </div>
  );
};

function formatINR(value: number | null, unit = ""): string {
  if (value === null) return "—";
  return `₹${value.toLocaleString("en-IN")}${unit}`;
}

export const LiveRates = () => {
  const { connected, message } = useWebSocket("wss://mspgold-backend.onrender.com");

  const [goldPer10Gram, setGoldPer10Gram] = useState<number | null>(null);

  const [silverPerGram, setSilverPerGram] = useState<number | null>(null);
  const [silverPerKg, setSilverPerKg] = useState<number | null>(null);

  const [lastUpdated, setLastUpdated] = useState<string>("—");

  useEffect(() => {
    if (!message) return;

    if (message.type === "snapshot" || message.type === "update") {
      const data = message.data;

      setGoldPer10Gram(
        typeof data.gold24kPer10g === "number" ? data.gold24kPer10g : null
      );

      setSilverPerGram(
        typeof data.silverPerGram === "number" ? data.silverPerGram : null
      );

      setSilverPerKg(
        typeof data.silverPerKg === "number" ? data.silverPerKg : null
      );

      const tsFormatted =
        typeof data.timestamp === "string"
          ? new Date(data.timestamp).toLocaleString()
          : new Date().toLocaleString();

      setLastUpdated(tsFormatted);
    }
  }, [message]);

  return (
    <AdminLayout>
      {/* PAGE HEADINGS */}
      <h1 className="text-3xl md:text-4xl font-bold mb-3">
        Live Gold & Silver Rates
      </h1>
      <p className="text-neutral-400 mb-6 md:mb-8">
        Real-time bullion price tracking
      </p>

      {/* STATUS BOX */}
      <div
        className="
          bg-neutral-900 border border-neutral-800 rounded-xl p-4 mb-8 
          flex flex-col md:flex-row md:items-center md:justify-between 
          gap-2 md:gap-0
        "
      >
        <p className="text-[#E9B020] font-semibold text-base md:text-lg">
          Last Update: {lastUpdated}
        </p>
        <p className="text-sm text-neutral-400 text-left md:text-right">
          {connected ? "Connected" : "Disconnected"}
        </p>
      </div>

      {/* GOLD SECTION */}
      <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
        Gold Rates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
        <RateCard
          label="Gold Price (per 10 gram)"
         value={formatINR(goldPer10Gram !== null ? (goldPer10Gram / 10) * 1.03 : null, "/10g")}

        />
      </div>

      {/* SILVER SECTION */}
      <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
        Silver Rates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
        <RateCard
          label="Silver Price (per gram)"
          value={formatINR(silverPerGram, "/g")}
        />
        <RateCard
          label="Silver Price (per kg)"
          value={formatINR(silverPerKg, "/kg")}
        />
      </div>
    </AdminLayout>
  );
};
