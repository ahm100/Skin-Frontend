import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Home, BookOpen, Sparkles } from "lucide-react";
import AuthButton from "@/components/AuthButton";

export const metadata: Metadata = {
  title: "Surenmah | تحلیل پوست با هوش مصنوعی",
  description:
    "تحلیل پوست با هوش مصنوعی و پیشنهاد محصولات مناسب برای پوست شما.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className="
          min-h-screen
          w-full
          overflow-x-hidden
          flex
          flex-col
          bg-porcelain
          text-petrol
        "
      >

        {/* =====================================================
            HEADER
            ===================================================== */}

        <header
          className="
            sticky
            top-0
            z-50
            w-full

            border-b
            border-coral/10

            bg-gradient-to-l
            from-coral/20
            via-blush/20
            to-[#F5E6D3]/70

            backdrop-blur-xl

            shadow-sm
            shadow-coral/10
          "
        >
          <div
            dir="ltr"
            className="
              w-full
            

              px-4
              sm:px-6
              lg:px-8

              py-3
              sm:py-4

              flex
              items-center
              justify-between

              gap-2
              sm:gap-3

              min-w-0
            "
          >

            {/* =================================================
                LOGO - LEFT
                ================================================= */}

            <Link
  href="/"
  dir="ltr"
  className="
    flex
    items-center
    gap-1

    shrink-0
    whitespace-nowrap

    text-lg
    sm:text-2xl
    md:text-3xl

    font-extrabold
    tracking-wide

    text-petrol

    hover:text-coral

    transition-colors
  "
>
  {/* Logo - hidden on mobile */}
  <span className="hidden sm:inline-block">
    <span
      className="
        inline-block
        h-2.5
        w-2.5
        rounded-full
        bg-coral
        shrink-0
        mr-1
      "
    />

    Surenmah
  </span>
</Link>

            {/* =================================================
                RIGHT MENU
                ================================================= */}

            <nav
              dir="rtl"
              className="
                flex
                items-center

                gap-1
                sm:gap-4
                md:gap-6

                text-petrol

                min-w-0
                shrink
              "
            >

              {/* HOME */}

              <Link
                href="/"
                className="
                  flex
                  items-center

                  gap-1
                  sm:gap-2

                  whitespace-nowrap
                  shrink-0

                  text-sm
                  sm:text-base

                  font-medium

                  text-petrol

                  hover:text-coral

                  transition-colors
                "
              >
                <Home
                  size={18}
                  strokeWidth={1.8}
                  className="sm:w-5 sm:h-5"
                />

                <span>
                  خانه
                </span>
              </Link>


              {/* BLOG */}

              <Link
                href="/blog"
                className="
                  flex
                  items-center

                  gap-1
                  sm:gap-2

                  whitespace-nowrap
                  shrink-0

                  text-sm
                  sm:text-base

                  font-medium

                  text-petrol

                  hover:text-coral

                  transition-colors
                "
              >
                <BookOpen
                  size={18}
                  strokeWidth={1.8}
                  className="sm:w-5 sm:h-5"
                />

                <span>
                  مقالات
                </span>
              </Link>

              {/* SKIN JOURNEY */}

              <Link
                href="/journey"
                className="
    flex
    items-center

    gap-1
    sm:gap-2

    whitespace-nowrap
    shrink-0

    text-sm
    sm:text-base

    font-medium

    text-petrol

    hover:text-coral

    transition-colors
  "
              >
                <Sparkles
                  size={18}
                  strokeWidth={1.8}
                  className="sm:w-5 sm:h-5"
                />

                <span>
                  سفر پوست
                </span>
              </Link>

              {/* ANALYZE */}

              <Link
                href="/analyze"
                className="
                  rounded-full

                  bg-coral
                  hover:bg-[#D95C43]

                  px-3
                  py-1.5

                  sm:px-5
                  sm:py-2.5

                  text-xs
                  sm:text-sm
                  md:text-base

                  text-white
                  font-bold

                  shadow-md
                  shadow-coral/25

                  hover:-translate-y-0.5

                  transition

                  whitespace-nowrap
                  shrink-0
                "
              >
                تحلیل پوست
              </Link>


              {/* AUTH */}

              <AuthButton />

            </nav>

          </div>
        </header>


        {/* =====================================================
            PAGE CONTENT
            ===================================================== */}

        <main
          className="
            flex-1
            w-full
            min-w-0
            bg-porcelain
          "
        >
          {children}
        </main>


        {/* =====================================================
            FOOTER
            ===================================================== */}

        <footer
          className="
            mt-10
            w-full

            bg-gradient-to-l
            from-coral/30
            via-blush/30
            to-[#F5E6D3]

            text-petrol

            p-6
            sm:p-8

            text-center

            border-t
            border-coral/15

            shadow-inner
            shadow-coral/10
          "
        >

          <h3
            className="
              text-xl
              sm:text-2xl

              font-extrabold

              text-petrol
            "
          >
            ارتباط با ما
          </h3>


          <p
            className="
              mt-3

              text-sm
              sm:text-base

              text-petrol-soft

              leading-7
            "
          >
            برای همکاری، پیشنهاد یا پشتیبانی با ما در تماس باشید.
          </p>


          <p
            className="
              mt-3

              text-sm
              sm:text-base

              text-petrol-soft

              break-all
            "
          >
            ایمیل:
            {" "}

            <a
              href="mailto:Ahmad.sadegh@gmail.com"
              className="
                font-medium
                underline

                text-petrol

                hover:text-coral

                transition-colors
              "
            >
              ahmad.sadegh@gmail.com
            </a>
          </p>


          <div
            className="
              mt-5

              flex
              justify-center

              gap-3
              sm:gap-4

              flex-wrap
            "
          >

            {/* WHATSAPP */}

            <a
              href="https://wa.me/989xxxxxxxxx"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-xl

                bg-petrol
                hover:bg-petrol-soft

                px-4
                sm:px-5

                py-2

                text-sm
                sm:text-base

                text-white
                font-medium

                shadow-md
                shadow-petrol/15

                hover:-translate-y-0.5

                transition
              "
            >
              WhatsApp
            </a>


            {/* BALE */}

            <a
              href="#"
              className="
                rounded-xl

                bg-coral
                hover:bg-[#D95C43]

                px-4
                sm:px-5

                py-2

                text-sm
                sm:text-base

                text-white
                font-medium

                shadow-md
                shadow-coral/15

                hover:-translate-y-0.5

                transition
              "
            >
              Bale (به‌زودی)
            </a>

          </div>


          <p
            className="
              mt-6

              text-xs
              sm:text-sm

              text-petrol-soft
            "
          >
            © {new Date().getFullYear()} Surenmah.
            {" "}
            All rights reserved.
          </p>

        </footer>

      </body>
    </html>
  );
}