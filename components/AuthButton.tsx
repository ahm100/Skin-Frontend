"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { API_BASE } from "@/lib/api";

type User = {
  userId: string;
  email: string;
};

export default function AuthButton() {
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
          // Token invalid / expired
          localStorage.removeItem("token");
          setUser(null);
          return;
        }

        const data = await response.json();

        setUser({
          userId: data.userId,
          email: data.email,
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

  // تا زمانی که وضعیت Login مشخص نشده
  if (loading) {
    return null;
  }

  // کاربر Login نکرده
  if (!user) {
    return (
      <Link
        href="/login"
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
        ورود
      </Link>
    );
  }

  // کاربر Login کرده
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

      {/* User Email */}

      <span
        className="
          max-w-[150px]
          sm:max-w-[220px]

          truncate

          text-xs
          sm:text-sm

          font-medium

          text-petrol

          whitespace-nowrap
        "
        title={user.email}
      >
        {user.email}
      </span>


      {/* Logout */}

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
