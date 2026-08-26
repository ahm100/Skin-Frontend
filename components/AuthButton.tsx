"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  User,
  LogOut,
  LogIn,
  UserPlus,
  Sparkles,
} from "lucide-react";
import { API_BASE } from "@/lib/api";

type UserData = {
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
  const [user, setUser] =
    useState<UserData | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [authOpen, setAuthOpen] =
    useState(false);

  useEffect(() => {
    async function loadUser() {
      const token =
        localStorage.getItem("token");

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

        if (!response.ok) {
          localStorage.removeItem("token");
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

  function logout() {
    localStorage.removeItem("token");

    setUser(null);
    setMenuOpen(false);

    window.location.href = "/";
  }

  if (loading) {
    return null;
  }

  // =========================================================
  // DESKTOP
  // =========================================================

  if (!mobile) {
    // Not logged in
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
              lg:px-4

              py-1.5
              lg:py-2

              text-xs
              lg:text-sm

              font-medium

              text-coral

              hover:bg-coral
              hover:text-white

              transition

              whitespace-nowrap
            "
          >
            ورود / ثبت‌نام
          </Link>
        </div>
      );
    }

    // Logged in
    return (
      <div
        className="
          flex
          items-center

          gap-2
          lg:gap-3
        "
      >
        <span
          className="
            max-w-[120px]
            lg:max-w-[180px]

            truncate

            text-xs
            lg:text-sm

            font-medium

            text-petrol

            whitespace-nowrap
          "
          title={
            user.displayName ||
            user.email
          }
        >
          {user.displayName ||
            "کاربر"}
        </span>

        <button
          type="button"
          onClick={logout}
          className="
            rounded-full

            border
            border-coral

            px-3
            lg:px-4

            py-1.5
            lg:py-2

            text-xs
            lg:text-sm

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

  // =========================================================
  // MOBILE
  // =========================================================

  return (
    <div className="relative">
      {/* =====================================================
          HAMBURGER BUTTON
          ===================================================== */}

      <button
        type="button"
        onClick={() =>
          setMenuOpen((value) => !value)
        }
        aria-label="باز کردن منو"
        aria-expanded={menuOpen}
        className="
          flex
          items-center
          justify-center

          h-11
          w-11

          rounded-xl

          bg-coral

          text-white

          shadow-md
          shadow-coral/20

          transition

          hover:bg-[#D95C43]
        "
      >
        {menuOpen ? (
          <X size={22} />
        ) : (
          <Menu size={22} />
        )}
      </button>

      {/* =====================================================
          MOBILE MENU
          ===================================================== */}

      {menuOpen && (
        <div
          className="
            absolute
            top-14
            left-0

            z-50

            w-64
            max-w-[calc(100vw-2rem)]

            rounded-2xl

            border
            border-coral/10

            bg-white/95

            backdrop-blur-xl

            shadow-xl
            shadow-petrol/10

            p-3

            text-right
          "
        >
          {/* HOME */}

          <Link
            href="/"
            onClick={() =>
              setMenuOpen(false)
            }
            className="
              flex
              items-center
              gap-3

              rounded-xl

              px-4
              py-3

              text-petrol

              hover:bg-coral/10

              transition
            "
          >
            <User
              size={20}
              className="text-coral"
            />

            خانه
          </Link>

          {/* BLOG */}

          <Link
            href="/blog"
            onClick={() =>
              setMenuOpen(false)
            }
            className="
              flex
              items-center
              gap-3

              rounded-xl

              px-4
              py-3

              text-petrol

              hover:bg-coral/10

              transition
            "
          >
            <BookOpenIcon />

            مقالات
          </Link>

          {/* SKIN JOURNEY */}

          <Link
            href="/journey"
            onClick={() =>
              setMenuOpen(false)
            }
            className="
              flex
              items-center
              gap-3

              rounded-xl

              bg-coral/10

              px-4
              py-3

              text-coral

              font-bold

              hover:bg-coral/20

              transition
            "
          >
            <Sparkles
              size={20}
            />

            <span>
              سفر پوست
            </span>

            <span
              className="
                mr-auto

                rounded-full

                bg-coral

                px-2
                py-0.5

                text-[10px]

                text-white
              "
            >
              جدید
            </span>
          </Link>

          {/* ANALYZE */}

          <Link
            href="/analyze"
            onClick={() =>
              setMenuOpen(false)
            }
            className="
              mt-1

              flex
              items-center
              justify-center

              rounded-xl

              bg-coral

              px-4
              py-3

              text-white

              font-bold

              shadow-md
              shadow-coral/20
            "
          >
            تحلیل پوست
          </Link>

          {/* DIVIDER */}

          <div
            className="
              my-3
              border-t
              border-gray-200
            "
          />

          {/* =================================================
              AUTH
              ================================================= */}

          {!user ? (
            <>
              <button
                type="button"
                onClick={() =>
                  setAuthOpen(
                    (value) => !value
                  )
                }
                className="
                  w-full

                  flex
                  items-center
                  justify-between

                  rounded-xl

                  px-4
                  py-3

                  text-petrol

                  hover:bg-coral/10

                  transition
                "
              >
                <span
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <User
                    size={20}
                    className="text-coral"
                  />

                  ورود / ثبت‌نام
                </span>

                <span className="text-coral">
                  {authOpen ? "−" : "+"}
                </span>
              </button>

              {authOpen && (
                <div
                  className="
                    mt-1
                    space-y-1

                    rounded-xl

                    bg-gray-50

                    p-2
                  "
                >
                  <Link
                    href="/login"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className="
                      flex
                      items-center
                      gap-3

                      rounded-lg

                      px-3
                      py-2.5

                      text-petrol

                      hover:bg-white
                    "
                  >
                    <LogIn
                      size={18}
                      className="text-coral"
                    />

                    ورود
                  </Link>

                  <Link
                    href="/register"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className="
                      flex
                      items-center
                      gap-3

                      rounded-lg

                      px-3
                      py-2.5

                      text-petrol

                      hover:bg-white
                    "
                  >
                    <UserPlus
                      size={18}
                      className="text-coral"
                    />

                    ثبت‌نام
                  </Link>
                </div>
              )}
            </>
          ) : (
            <>
              {/* USER */}

              <div
                className="
                  flex
                  items-center
                  gap-3

                  px-4
                  py-3

                  text-petrol
                "
              >
                <User
                  size={20}
                  className="text-coral"
                />

                <div className="min-w-0">
                  <p
                    className="
                      font-bold
                      truncate
                    "
                  >
                    {user.displayName ||
                      "کاربر"}
                  </p>

                  <p
                    className="
                      text-xs
                      text-petrol-soft
                      truncate
                    "
                  >
                    {user.email}
                  </p>
                </div>
              </div>

              {/* LOGOUT */}

              <button
                type="button"
                onClick={logout}
                className="
                  w-full

                  flex
                  items-center
                  gap-3

                  rounded-xl

                  px-4
                  py-3

                  text-coral

                  hover:bg-coral/10

                  transition
                "
              >
                <LogOut size={20} />

                خروج
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}


// =========================================================
// Small Blog Icon
// =========================================================

function BookOpenIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-coral"
    >
      <path d="M2 4.5A2.5 2.5 0 0 1 4.5 2H11v18H4.5A2.5 2.5 0 0 0 2 22V4.5Z" />
      <path d="M22 4.5A2.5 2.5 0 0 0 19.5 2H13v18h6.5A2.5 2.5 0 0 1 22 22V4.5Z" />
    </svg>
  );
}