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
      <Link
        href="/login"
        className="
          rounded-full
          bg-coral
          hover:bg-[#D95C43]
          px-3
          py-1.5
          sm:px-4
          sm:py-2
          text-xs
          sm:text-sm
          font-bold
          text-white
          shadow-sm
          transition
          whitespace-nowrap
          shrink-0
        "
      >
        ورود
      </Link>
    );
  }

  // =========================
  // کاربر لاگین است
  // =========================

  return (
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
        shrink-0
      "
    >
      خروج
    </button>
  );
}
