"use client";
// chon layout use client nadare va az localstroage khabar nadare va server base hast

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AuthButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  function logout() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/";
  }

  if (isLoggedIn) {
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
        "
      >
        خروج
      </button>
    );
  }

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
      "
    >
      ورود
    </Link>
  );
}