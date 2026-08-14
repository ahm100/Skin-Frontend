import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Home, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Surenmah | تحلیل پوست با هوش مصنوعی",
  description:
    "تحلیل پوست با AI و پیشنهاد محصولات مناسب",
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
        "
      >

        {/* Header */}

        <header
          className="
            sticky
            top-0
            z-50
            w-full
            border-b
            border-purple-200/40
            bg-gradient-to-r
            from-violet-200/80
            via-pink-100/80
            to-rose-200/80
            backdrop-blur-xl
            shadow-md
            shadow-purple-200/30
          "
        >

          <div
            className="
              w-full
              max-w-6xl
              mx-auto
              px-4
              sm:px-6
              lg:px-8
              py-3
              sm:py-4
              flex
              items-center
              justify-between
              gap-3
              min-w-0
            "
          >

            {/* Right menu */}

            <nav
              className="
                flex
                items-center
                gap-2
                sm:gap-4
                md:gap-6
                text-gray-700
                min-w-0
                shrink
              "
            >

              {/* Home */}

              <Link
                href="/"
                className="
                  flex
                  items-center
                  gap-1.5
                  sm:gap-2
                  hover:text-purple-700
                  transition
                  whitespace-nowrap
                  shrink-0
                  text-sm
                  sm:text-base
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


              {/* Blog */}

              <Link
                href="/blog"
                className="
                  flex
                  items-center
                  gap-1.5
                  sm:gap-2
                  hover:text-purple-700
                  transition
                  whitespace-nowrap
                  shrink-0
                  text-sm
                  sm:text-base
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


              {/* Analyze */}

              <Link
                href="/analyze"
                className="
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-500
                  via-purple-400
                  to-pink-400

                  px-2.5
                  py-1.5

                  sm:px-4
                  sm:py-2

                  md:px-5
                  md:py-2.5

                  text-xs
                  sm:text-sm
                  md:text-base

                  text-gray-800
                  font-medium
                  shadow-md
                  shadow-purple-200/50

                  hover:opacity-90
                  transition

                  whitespace-nowrap
                  shrink-0
                "
              >
                تحلیل پوست
              </Link>

            </nav>


            {/* Logo */}

            <Link
              href="/"
              dir="ltr"
              className="
                shrink-0
                whitespace-nowrap
                text-xl
                sm:text-2xl
                md:text-3xl
                font-extrabold
                tracking-wide

                bg-gradient-to-r
                from-violet-500
                via-purple-400
                to-pink-400

                bg-clip-text
                text-transparent
              "
            >
              Surenmah
            </Link>

          </div>

        </header>


        {/* Page */}

        <main
          className="
            flex-1
            w-full
            min-w-0
          "
        >
          {children}
        </main>


        {/* Footer */}

        <footer
          className="
            mt-10
            w-full
            bg-gradient-to-r
            from-purple-200
            via-pink-100
            to-rose-200
            text-gray-800
            p-6
            sm:p-8
            text-center
            border-t
            border-white/60
            shadow-inner
          "
        >

          <h3
            className="
              text-xl
              sm:text-2xl
              font-extrabold
              text-purple-900
            "
          >
            ارتباط با ما
          </h3>


          <p
            className="
              mt-3
              text-sm
              sm:text-base
              text-gray-700
            "
          >
            برای همکاری، پیشنهاد یا پشتیبانی با ما در تماس باشید.
          </p>


          <p
            className="
              mt-3
              text-sm
              sm:text-base
              text-gray-700
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
                text-purple-800
                hover:text-purple-950
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

            <a
              href="https://wa.me/989xxxxxxxxx"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-green-500
                hover:bg-green-600
                px-4
                sm:px-5
                py-2
                rounded-xl
                text-sm
                sm:text-base
                text-gray-800
                font-medium
                shadow-md
                transition
              "
            >
              WhatsApp
            </a>


            <a
              href="#"
              className="
                bg-blue-500
                hover:bg-blue-600
                px-4
                sm:px-5
                py-2
                rounded-xl
                text-sm
                sm:text-base
                text-gray-800
                font-medium
                shadow-md
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
              text-gray-600
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