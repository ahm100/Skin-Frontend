"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { API_BASE } from "@/lib/api";

type User = {
  userId: string;
  email: string;
  displayName: string | null;
};

type AuthButtonProps = {
  mobile?: boolean;
};

export default function AuthButton({
  mobile = false,
}: AuthButtonProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `${API_BASE}/api/Auth/me`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          localStorage.removeItem("token");
          setUser(null);
          return;
        }

        const data = await response.json();

        setUser({
          userId: data.userId,
          email: data.email,
          displayName: data.displayName,
        });
      } catch (error) {
        console.error(
          "Failed to load current user:",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/";
  }

  if (loading) {
    return null;
  }

  // =====================================================
  // MOBILE
  // =====================================================

  if (mobile) {
    if (!user) {
      return (
        <div className="space-y-2">
          <Link
            href="/login"
            className="
              flex
              w-full
              items-center
              justify-center
              rounded-xl
              bg-coral
              px-4
              py-3
              text-white
              font-semibold
              hover:bg-[#D95C43]
              transition
            "
          >
            ورود
          </Link>

          <Link
            href="/register"
            className="
              flex
              w-full
              items-center
              justify-center
              rounded-xl
              border
              border-coral
              px-4
              py-3
              text-coral
              font-semibold
              hover:bg-coral
              hover:text-white
              transition
            "
          >
            ثبت‌نام
          </Link>
        </div>
      );
    }

    return (
      <div className="space-y-2">
        <div
          className="
            rounded-xl
            bg-porcelain
            px-4
            py-3
            text-center
            text-sm
            font-medium
            text-petrol
          "
        >
          {user.displayName || "کاربر"}
        </div>

        <button
          type="button"
          onClick={logout}
          className="
            flex
            w-full
            items-center
            justify-center
            rounded-xl
            border
            border-coral
            px-4
            py-3
            text-coral
            font-semibold
            hover:bg-coral
            hover:text-white
            transition
          "
        >
          خروج
        </button>
      </div>
    );
  }

  // =====================================================
  // DESKTOP
  // =====================================================

  if (!user) {
    return (
      <div
        className="
          flex
          items-center
          gap-2
        "
      >
        <Link
          href="/login"
          className="
            rounded-full
            border
            border-coral
            px-3
            py-2
            text-sm
            font-medium
            text-coral
            hover:bg-coral
            hover:text-white
            transition
            whitespace-nowrap
          "
        >
          ورود
        </Link>

        <Link
          href="/register"
          className="
            rounded-full
            bg-coral
            px-3
            py-2
            text-sm
            font-medium
            text-white
            hover:bg-[#D95C43]
            transition
            whitespace-nowrap
          "
        >
          ثبت‌نام
        </Link>
      </div>
    );
  }

  return (
    <div
      className="
        flex
        items-center
        gap-3
      "
    >
      <span
        className="
          max-w-[140px]
          truncate
          whitespace-nowrap
          text-sm
          font-medium
          text-petrol
        "
        title={
          user.displayName ||
          user.email
        }
      >
        {user.displayName || "کاربر"}
      </span>

      <button
        type="button"
        onClick={logout}
        className="
          rounded-full
          border
          border-coral
          px-3
          py-2
          text-sm
          font-medium
          text-coral
          hover:bg-coral
          hover:text-white
          transition
          whitespace-nowrap
        "
      >
        خروج
      </button>
    </div>
  );
}
