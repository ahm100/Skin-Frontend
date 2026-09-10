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
onNavigate?: () => void;
};

export default function AuthButton({
mobile = false,
onNavigate,
}: AuthButtonProps) {
const [user, setUser] =
useState<User | null>(null);

const [loading, setLoading] =
useState(true);

useEffect(() => {
async function loadUser() {
const token =
localStorage.getItem("token");


  // =====================================================
  // NOT LOGGED IN
  // =====================================================

  if (!token) {
    setLoading(false);
    return;
  }

  try {
    const response =
      await fetch(
        `${API_BASE}/api/Auth/me`,
        {
          method: "GET",
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    // ===================================================
    // INVALID / EXPIRED TOKEN
    // ===================================================

    if (!response.ok) {
      localStorage.removeItem(
        "token"
      );

      setUser(null);

      return;
    }

    const data =
      await response.json();

    setUser({
      userId: data.userId,
      email: data.email,
      displayName:
        data.displayName,
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

// =====================================================
// LOGOUT
// =====================================================

function logout() {
onNavigate?.();


localStorage.removeItem(
  "token"
);

setUser(null);

window.location.href = "/";


}

// =====================================================
// AUTH CHECK LOADING
// =====================================================

if (loading) {
return null;
}

// =====================================================
// MOBILE
// =====================================================

if (mobile) {


// -----------------------------------------------------
// MOBILE - NOT LOGGED IN
// -----------------------------------------------------

if (!user) {
  return (
    <div className="space-y-2">

      {/* LOGIN */}

      <Link
        href="/login"
        onClick={onNavigate}
        className="
          btn-base
          flex
          w-full
          items-center
          justify-center
          rounded-xl
          bg-button-pink
          px-4
          py-3
          text-white
          font-semibold
          hover:bg-button-pink-hover
          transition
        "
      >
        ورود
      </Link>

      {/* REGISTER */}

      <Link
        href="/register"
        onClick={onNavigate}
        className="
          btn-base
          flex
          w-full
          items-center
          justify-center
          rounded-xl
          border
          border-button-pink
          px-4
          py-3
          text-button-pink
          font-semibold
          hover:bg-button-pink
          hover:text-white
          transition
        "
      >
        ثبت‌نام
      </Link>

    </div>
  );
}

// -----------------------------------------------------
// MOBILE - LOGGED IN
// -----------------------------------------------------

return (
  <div className="space-y-2">

    {/* USER */}

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
      {user.displayName ||
        "کاربر"}
    </div>

    {/* LOGOUT */}

    <button
      type="button"
      onClick={logout}
      className="
        btn-base
        flex
        w-full
        items-center
        justify-center
        rounded-xl
        border
        border-button-pink
        px-4
        py-3
        text-button-pink
        font-semibold
        hover:bg-button-pink
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

// -----------------------------------------------------
// DESKTOP - NOT LOGGED IN
// -----------------------------------------------------

if (!user) {
return ( <div
     className="
       flex
       items-center
       gap-2
     "
   >
{/* LOGIN */}


    <Link
      href="/login"
      className="
        btn-base
        rounded-full
        border
        border-button-pink
        px-3
        py-2
        text-sm
        font-medium
        text-button-pink
        hover:bg-button-pink
        hover:text-white
        transition
        whitespace-nowrap
      "
    >
      ورود
    </Link>

    {/* REGISTER */}

    <Link
      href="/register"
      className="
        btn-base
        rounded-full
        bg-button-pink
        px-3
        py-2
        text-sm
        font-medium
        text-white
        hover:bg-button-pink-hover
        transition
        whitespace-nowrap
      "
    >
      ثبت‌نام
    </Link>
  </div>
);


}

// -----------------------------------------------------
// DESKTOP - LOGGED IN
// -----------------------------------------------------

return ( <div
   className="
     flex
     items-center
     gap-3
   "
 >
{/* USER */}


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
    {user.displayName ||
      "کاربر"}
  </span>

  {/* LOGOUT */}

  <button
    type="button"
    onClick={logout}
    className="
      btn-base
      rounded-full
      border
      border-button-pink
      px-3
      py-2
      text-sm
      font-medium
      text-button-pink
      hover:bg-button-pink
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
