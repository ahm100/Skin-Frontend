"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Home,
  BookOpen,
  Sparkles,
  Menu,
  X,
} from "lucide-react";
import AuthButton from "@/components/AuthButton";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="relative md:hidden">
      {/* =====================================================
          MENU BUTTON
          ===================================================== */}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={
          open
            ? "بستن منو"
            : "باز کردن منو"
        }
        aria-expanded={open}
        className="
          flex
          h-10
          w-10
          cursor-pointer
          items-center
          justify-center
          rounded-full
          bg-coral
          text-white
          shadow-md
          shadow-coral/20
          transition
          hover:bg-[#D95C43]
        "
      >
        {open ? (
          <X
            size={22}
            strokeWidth={2}
          />
        ) : (
          <Menu
            size={22}
            strokeWidth={2}
          />
        )}
      </button>

      {/* =====================================================
          MENU
          ===================================================== */}

      {open && (
        <div
          dir="rtl"
          className="
            absolute
            right-0
            top-12
            z-50
            w-64
            overflow-hidden
            rounded-2xl
            border
            border-coral/10
            bg-white
            shadow-xl
          "
        >
          <div className="p-3">

            {/* =================================================
                HOME
                ================================================= */}

            <Link
              href="/"
              onClick={closeMenu}
              className="
                flex
                items-center
                gap-3
                rounded-xl
                px-3
                py-3
                text-petrol
                hover:bg-coral/10
                transition
              "
            >
              <Home size={19} />

              <span>
                خانه
              </span>
            </Link>

            {/* =================================================
                BLOG
                ================================================= */}

            <Link
              href="/blog"
              onClick={closeMenu}
              className="
                flex
                items-center
                gap-3
                rounded-xl
                px-3
                py-3
                text-petrol
                hover:bg-coral/10
                transition
              "
            >
              <BookOpen size={19} />

              <span>
                مقالات
              </span>
            </Link>

            {/* =================================================
                SKIN JOURNEY
                ALWAYS VISIBLE
                ================================================= */}

            <Link
              href="/journey"
              onClick={closeMenu}
              className="
                flex
                items-center
                gap-3
                rounded-xl
                px-3
                py-3
                font-bold
                text-petrol
                hover:bg-coral/10
                hover:text-coral
                transition
              "
            >
              <Sparkles size={19} />

              <span>
                سفر پوست
              </span>
            </Link>

            {/* =================================================
                ANALYZE
                ================================================= */}

            <Link
              href="/analyze"
              onClick={closeMenu}
              className="
                mt-2
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
                hover:bg-[#D95C43]
                transition
              "
            >
              تحلیل پوست
            </Link>

            {/* =================================================
                ACCOUNT
                ================================================= */}

            <div
              className="
                mt-3
                border-t
                border-gray-100
                pt-3
              "
            >
              <AuthButton
                mobile
                onNavigate={closeMenu}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
