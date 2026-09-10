"use client";

import {
  Suspense,
  useEffect,
  useState,
} from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { API_BASE } from "@/lib/api";

function LoginForm() {
  const searchParams = useSearchParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // =========================
  // Destination
  // =========================

  function getDestination() {
    const returnUrl =
      searchParams.get("returnUrl");

    // Only allow internal routes.
    // Prevent values such as //evil-site.com
    if (
      returnUrl &&
      returnUrl.startsWith("/") &&
      !returnUrl.startsWith("//")
    ) {
      return returnUrl;
    }

    return "/";
  }

  // =========================
  // Already Logged In
  // =========================

  useEffect(() => {
    const token =
      localStorage.getItem("token");

    if (!token) {
      return;
    }

    const destination =
      getDestination();

    // Full browser navigation is intentional.
    // This makes AuthButton reload its authentication state.
    window.location.href =
      destination;
  }, [searchParams]);

  // =========================
  // Login
  // =========================

  async function login() {
    setError("");

    if (!email || !password) {
      setError(
        "ایمیل و رمز عبور را وارد کنید."
      );

      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${API_BASE}/api/Auth/login`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      if (!response.ok) {
        const errorText =
          await response.text();

        console.error(
          "Login error:",
          response.status,
          errorText
        );

        setError(
          "ایمیل یا رمز عبور اشتباه است."
        );

        return;
      }

      const data =
        await response.json();

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

      const destination =
        getDestination();

      // Full navigation intentionally used
      // so Header/AuthButton reloads and
      // immediately recognizes the user.
      window.location.href =
        destination;

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
        min-h-[calc(100vh-80px)]

        flex
        items-start
        justify-center

        px-6
        pt-10
        sm:pt-14
        pb-16
      "
    >
      <div
        className="
          w-full
          max-w-md
        "
      >
        {/* Title */}

        <h1
          className="
            text-3xl
            sm:text-4xl

            font-bold

            text-petrol
            text-center
          "
        >
          ورود
        </h1>

        {/* Form */}

        <div
          className="
            mt-6
            sm:mt-8

            space-y-4
          "
        >
          {/* Email */}

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

              outline-none

              focus:border-coral

              transition
            "
          />

          {/* Password */}

          <input
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                login();
              }
            }}
            className="
              w-full
              rounded-xl

              border
              border-gray-300

              p-3

              outline-none

              focus:border-coral

              transition
            "
          />

          {/* Error */}

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

          {/* Login */}

          <button
            type="button"
            onClick={login}
            disabled={loading}
            className="
            btn-base
            w-full
            rounded-xl
            bg-button-pink
            px-8
            py-3
            text-white
            font-medium
            disabled:opacity-40
            disabled:cursor-not-allowed
            hover:bg-button-pink-hover
            transition
          "
          >
            {loading
              ? "در حال ورود..."
              : "ورود"}
          </button>

          {/* Register */}

          <div
            className="
              pt-1

              text-center

              text-sm
              text-petrol-soft
            "
          >
            حساب کاربری ندارید؟{" "}

            <Link
              href="/register"
              className="
                font-bold
                text-coral

                hover:underline

                transition
              "
            >
              ثبت‌نام کنید
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}


// =====================================================
// Login Page
// =====================================================

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <main
          className="
            min-h-[calc(100vh-80px)]

            flex
            items-start
            justify-center

            p-6
            pt-10
            sm:pt-14
          "
        >
          <p className="text-petrol">
            در حال بارگذاری...
          </p>
        </main>
      }
    >
      <LoginForm />
    </Suspense>
  );
}