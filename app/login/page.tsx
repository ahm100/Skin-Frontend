"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { API_BASE } from "@/lib/api";

export default function LoginPage() {
  const searchParams = useSearchParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // =========================
  // Return URL
  // =========================

  const returnUrl = searchParams.get("returnUrl");

  const destination =
    returnUrl && returnUrl.startsWith("/")
      ? returnUrl
      : "/";

  // =========================
  // Already Logged In
  // =========================

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      window.location.href = destination;
    }
  }, [destination]);

  // =========================
  // Login
  // =========================

  async function login() {
    setError("");

    if (!email || !password) {
      setError("ایمیل و رمز عبور را وارد کنید.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${API_BASE}/api/Auth/login`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();

        console.error(
          "Login error:",
          errorText
        );

        setError(
          "ایمیل یا رمز عبور اشتباه است."
        );

        return;
      }

      const data = await response.json();

      // =========================
      // Save JWT
      // =========================

      localStorage.setItem(
        "token",
        data.token
      );

      // =========================
      // Redirect
      // =========================
      //
      // We intentionally use
      // window.location.href instead of
      // router.push().
      //
      // This causes a full page reload,
      // so AuthButton mounts again,
      // reads the new token and calls
      // /api/Auth/me.
      //

      window.location.href = destination;

    } catch (error) {
      console.error(
        "Login request failed:",
        error
      );

      setError(
        "ارتباط با سرور برقرار نشد."
      );
    } finally {
      setLoading(false);
    }
  }

  // =========================
  // UI
  // =========================

  return (
    <main
      className="
        min-h-screen
        flex
        items-center
        justify-center
        p-6
      "
    >
      <div className="w-full max-w-md">

        <h1
          className="
            text-3xl
            font-bold
            text-petrol
            text-center
          "
        >
          ورود
        </h1>

        <div className="mt-8 space-y-4">

          {/* EMAIL */}

          <input
            type="email"
            placeholder="ایمیل"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              p-3
            "
          />

          {/* PASSWORD */}

          <input
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              p-3
            "
          />

          {/* ERROR */}

          {error && (
            <p
              className="
                text-sm
                text-red-600
                text-center
              "
            >
              {error}
            </p>
          )}

          {/* LOGIN BUTTON */}

          <button
            type="button"
            onClick={login}
            disabled={loading}
            className="
              w-full
              rounded-xl

              bg-gradient-to-l
              from-coral
              via-[#E97861]
              to-[#F4A896]

              px-8
              py-3

              text-white
              font-medium

              disabled:opacity-40
            "
          >
            {loading
              ? "در حال ورود..."
              : "ورود"}
          </button>

        </div>
      </div>
    </main>
  );
}