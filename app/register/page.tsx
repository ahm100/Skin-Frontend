"use client";

import { useState } from "react";
import { API_BASE } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function register() {
    setError("");

    if (!email || !password) {
      setError("ایمیل و رمز عبور را وارد کنید.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${API_BASE}/api/Auth/register`,
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
        const data = await response.json().catch(() => null);

        setError(
          Array.isArray(data)
            ? data.join(" ")
            : data || "ثبت‌نام انجام نشد."
        );

        return;
      }

      router.push("/login");
    } catch {
      setError(
        "ارتباط با سرور برقرار نشد."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-petrol text-center">
          ثبت‌نام
        </h1>

        <div className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="ایمیل"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border p-3"
          />

          <input
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full rounded-xl border p-3"
          />

          {error && (
            <p className="text-sm text-red-600 text-center">
              {error}
            </p>
          )}

          <button
            type="button"
            onClick={register}
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
            {loading ? "در حال ثبت‌ نام..." : "ثبت‌ نام"}
          </button>
        </div>
      </div>
    </main>
  );
}