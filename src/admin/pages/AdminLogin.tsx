// src/pages/LoginPage.tsx
// Updated: fixes the left mask/gap issue by ensuring overlays start flush at the image's left edge.
// Single-file React + TypeScript + Tailwind component (dark theme for Gold Vault Admin).
// Paste into src/pages/LoginPage.tsx (or your components/pages folder).

import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

type FormState = {
  email: string;
  password: string;
  remember: boolean;
};

type LoginPayload = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
  email?: string;
  role?: string;
};

const sideImageSrc =
  "https://images.unsplash.com/photo-1643656350988-a39ad266a178?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const GOLD_HSL = "hsl(43 82% 52%)";
const DARK_HSL = "hsl(0 0% 5%)";
const NEAR_BLACK = "#050505";
const NEAR_WHITE = "#f8f6f5";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
    remember: false,
  });

  const [error, setError] = useState<{ email?: string; password?: string }>({});

  function validate(): boolean {
    const e: { email?: string; password?: string } = {};
    if (!form.email) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";

    if (!form.password) e.password = "Password is required";
    else if (form.password.length < 6) e.password = "Password must be at least 6 characters";

    setError(e);
    return Object.keys(e).length === 0;
  }

  const handleChange =
    (key: keyof FormState) =>
    (ev: React.ChangeEvent<HTMLInputElement>) =>
      setForm((s) => ({ ...s, [key]: key === "remember" ? ev.target.checked : ev.target.value }));

  // React Query v5 mutation (typed)
 const loginMutation = useMutation<LoginResponse, AxiosError, LoginPayload>({
  mutationFn: async (payload: LoginPayload) => {
    const res = await api.post("/api/v1/auth/login", payload);
    console.log("LOGIN RESPONSE:", res.data);

    // FIX: actual token path
    return res.data.data;
  },

  onSuccess: (data) => {
    console.log("TOKEN FROM BACKEND:", data.token);

    if (form.remember) {
      localStorage.setItem("admin_token", data.token);
    } else {
      sessionStorage.setItem("admin_token", data.token);
    }

    navigate("/admin/dashboard");
  },

  onError: (err) => {
    console.log("LOGIN ERROR:", err);
    setError({ password: "Login failed. Check credentials." });
  },
});


  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    loginMutation.mutate({
      email: form.email.trim(),
      password: form.password,
    });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ background: NEAR_BLACK }}
    >
      <div
        className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2"
        style={{
          border: `1px solid rgba(255,255,255,0.04)`,
          background: DARK_HSL,
        }}
      >
        {/* LEFT: FORM */}
        <div className="px-10 py-12 flex flex-col justify-center">
          {/* top-left branding */}
          <div className="mb-6 flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
              style={{
                background: GOLD_HSL,
                color: NEAR_BLACK,
                boxShadow: `0 8px 30px rgba(241,183,30,0.18)`,
              }}
              aria-hidden
            >
              GV
            </div>
            <div className="text-lg font-semibold" style={{ color: NEAR_WHITE }}>
              Gold Vault Admin
            </div>
          </div>

          <header className="mb-8">
            <h1 className="text-4xl font-serif font-bold leading-tight" style={{ color: NEAR_WHITE }}>
              Admin Sign In
            </h1>
            <p className="mt-2 text-sm" style={{ color: "rgba(248,246,245,0.65)" }}>
              Secure access to the Gold Vault control panel
            </p>
          </header>

          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: NEAR_WHITE }}>
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  className="w-full px-4 py-3 rounded-md text-sm bg-transparent"
                  placeholder="admin@yourdomain.com"
                  style={{
                    border: `1px solid rgba(255,255,255,0.06)`,
                    color: NEAR_WHITE,
                    outline: "none",
                    boxShadow: error.email ? `0 0 0 6px rgba(241,183,30,0.08)` : undefined,
                  }}
                />
                {error.email && <p className="mt-1 text-xs" style={{ color: "#ff6b6b" }}>{error.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: NEAR_WHITE }}>
                  Password
                </label>
                <input
                  type="password"
                  value={form.password}
                  onChange={handleChange("password")}
                  className="w-full px-4 py-3 rounded-md text-sm bg-transparent"
                  placeholder="********"
                  style={{
                    border: `1px solid rgba(255,255,255,0.06)`,
                    color: NEAR_WHITE,
                    outline: "none",
                    boxShadow: error.password ? `0 0 0 6px rgba(241,183,30,0.08)` : undefined,
                  }}
                />
                {error.password && <p className="mt-1 text-xs" style={{ color: "#ff6b6b" }}>{error.password}</p>}
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="inline-flex items-center space-x-2 text-sm" style={{ color: "rgba(248,246,245,0.75)" }}>
                  <input
                    type="checkbox"
                    checked={form.remember}
                    onChange={handleChange("remember")}
                    className="h-4 w-4 rounded border-gray-300"
                    style={{ accentColor: GOLD_HSL }}
                  />
                  <span>Remember me</span>
                </label>

                <a href="#" className="text-sm" style={{ color: "rgba(248,246,245,0.75)", textDecoration: "underline dotted" }}>
                  Forgot Password
                </a>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loginMutation.isPending}
                  className="w-full py-3 rounded-md font-medium text-black shadow-sm"
                  style={{
                    background: `linear-gradient(90deg, ${GOLD_HSL} 0%, rgba(241,183,30,0.9) 60%)`,
                    boxShadow: `0 12px 40px rgba(241,183,30,0.20), 0 2px 6px rgba(0,0,0,0.45)`,
                    opacity: loginMutation.isPending ? 0.8 : 1,
                    border: `1px solid rgba(255,255,255,0.03)`,
                  }}
                >
                  {loginMutation.isPending ? "Signing in..." : "Sign In"}
                </button>
              </div>
            </div>
          </form>

          <div className="mt-8 text-xs" style={{ color: "rgba(248,246,245,0.45)" }}>
            Access is restricted to authorized administrators only.
          </div>

          <div className="mt-6 text-xs" style={{ color: "rgba(248,246,245,0.30)" }}>
            Last login: — {/* optionally populate dynamically */}
          </div>
        </div>

        {/* RIGHT: IMAGE + OVERLAYS */}
        <div className="relative hidden lg:block">
          {/* background image - keep it covering fully without transform to avoid shifting gaps */}
          <img
            src={sideImageSrc}
            alt="Side visual"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: "center right",
            }}
          />

          {/* main gradient overlay (covers entire image area flush to edges) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(5,5,5,0.86) 0%, rgba(5,5,5,0.6) 18%, rgba(5,5,5,0.18) 60%, rgba(5,5,5,0.04) 100%)",
              mixBlendMode: "multiply",
              zIndex: 10,
            }}
          />

          {/* corrected left translucent strip (made to start slightly before edge to close any 5-10px gap) */}
          <div
            className="absolute top-0 bottom-0"
            style={{
              left: "-2px",
              width: "calc(6% + 2px)",
              background: "rgba(255,255,255,0.88)",
              mixBlendMode: "overlay",
              zIndex: 20,
            }}
          />

          {/* top-right small label */}
          <div className="absolute right-8 top-8" style={{ zIndex: 30 }}>
            <div
              className="text-sm font-semibold"
              style={{ color: "rgba(255,255,255,0.9)", letterSpacing: 0.6 }}
            >
              Gold Vault
            </div>
          </div>

          {/* bottom-left caption card (admin portal description) */}
          <div
            className="absolute left-10 bottom-10 p-6 rounded-xl max-w-xs"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))",
              backdropFilter: "blur(6px)",
              color: "#fff",
              boxShadow: "0 20px 60px rgba(0,0,0,0.55)",
              border: "1px solid rgba(255,255,255,0.03)",
              zIndex: 30,
            }}
          >
            <h2 className="font-serif text-2xl leading-tight" style={{ color: NEAR_WHITE }}>
              Secure Admin Portal
            </h2>
            <p className="mt-2 text-sm" style={{ color: "rgba(248,246,245,0.9)" }}>
              Monitor vault activity, manage users and approvals. Authorized personnel only.
            </p>
          </div>

          {/* gold radial glow */}
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
              width: 420,
              height: 420,
              background: "radial-gradient(circle at 30% 30%, rgba(241,183,30,0.12), transparent 35%)",
              filter: "blur(88px)",
              zIndex: 15,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
