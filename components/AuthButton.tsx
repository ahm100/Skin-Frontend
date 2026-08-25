"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { API_BASE } from "@/lib/api";

type User = {
  userId: string;
  email: string;
  displayName: string | null;
};

export default function AuthButton() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("token");

      // کاربر لاگین نیست
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

        // Token نامعتبر یا منقضی شده
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

  // تا وقتی وضعیت authentication مشخص نشده
  if (loading) {
    return null;
  }

  // =========================
  // کاربر لاگین نیست
  // =========================

  if (!user) {
    return (
      <div
        className="
          flex
          items-center

          gap-2
          sm:gap-3

          shrink-0
        "
      >
        {/* ثبت‌نام */}

        <Link
          href="/register"
          className="
            rounded-full

            border
            border-coral

            px-3
            py-1.5

            sm:px-4
            sm:py-2

            text-xs
            sm:text-sm

            font-medium

            text-coral

            hover:bg-coral
            hover:text-white

            transition

            whitespace-nowrap
            shrink-0
          "
        >
          ثبت‌نام
        </Link>

        {/* ورود */}

        <Link
          href="/login"
          className="
            rounded-full

            bg-coral

            px-3
            py-1.5

            sm:px-4
            sm:py-2

            text-xs
            sm:text-sm

            font-medium

            text-white

            hover:opacity-90

            transition

            whitespace-nowrap
            shrink-0
          "
        >
          ورود
        </Link>
      </div>
    );
  }

  // =========================
  // کاربر لاگین است
  // =========================

  return (
    <div
      className="
        flex
        items-center

        gap-2
        sm:gap-3

        shrink-0
      "
    >
      {/* نام کاربر */}

      <span
        className="
          max-w-[120px]
          sm:max-w-[180px]

          truncate

          text-xs
          sm:text-sm

          font-medium

          text-petrol

          whitespace-nowrap
        "
        title={
          user.displayName ||
          user.email
        }
      >
        {user.displayName || "کاربر"}
      </span>

      {/* خروج */}

      <button
        type="button"
        onClick={logout}
        className="
          rounded-full

          border
          border-coral

          px-3
          py-1.5

          sm:px-4
          sm:py-2

          text-xs
          sm:text-sm

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
