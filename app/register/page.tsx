"use client";

import { useState } from "react";
import { API_BASE } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function register() {
    setError("");
    setSuccess("");

    if (!displayName || !email || !password) {
      setError("نام نمایشی، ایمیل و رمز عبور را وارد کنید.");
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
            displayName,
            email,
            password,
          }),
        }
      );

      if (!response.ok) {
        const data = await response.json().catch(() => null);

        if (data?.errors) {
          const messages = Object.values(data.errors)
            .flat()
            .join(" ");

          setError(messages || "ثبت‌نام انجام نشد.");
        } else {
          setError(
            typeof data === "string"
              ? data
              : data?.title || "ثبت‌نام انجام نشد."
          );
        }

        return;
      }

      setSuccess("ثبت‌نام با موفقیت انجام شد.");

      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch {
      setError("ارتباط با سرور برقرار نشد.");
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
            type="text"
            placeholder="نام نمایشی"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full rounded-xl border p-3"
          />

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
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border p-3"
          />

          {error && (
            <p className="text-sm text-red-600 text-center">
              {error}
            </p>
          )}

          {success && (
            <p className="text-sm text-green-600 text-center">
              {success}
            </p>
          )}

          <button
            type="button"
            onClick={register}
            disabled={loading || !!success}
           className="
  btn-base
  w-full
  rounded-xl
  bg-button-pink
  px-8
  py-3
  text-white
  font-medium
  shadow-md
  shadow-coral/25
  hover:bg-button-pink-hover
  disabled:opacity-40
  transition
"
          >
            {loading
              ? "در حال ثبت‌ نام..."
              : success
                ? "ثبت‌نام انجام شد"
                : "ثبت‌ نام"}
          </button>
        </div>
      </div>
    </main>
  );
}
