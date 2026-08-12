import type { Metadata } from "next";
import "./globals.css";
import { Home } from "lucide-react";


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

    <html
      lang="fa"
      dir="rtl"
    >

      <body
        className="
          min-h-screen
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
              max-w-6xl
              mx-auto
              px-4
              sm:px-6
              py-4
              flex
              items-center
              justify-between
            "
          >


            {/* Right menu */}

            <nav
              className="
                flex
                items-center
                gap-4
                sm:gap-6
                text-gray-700
              "
            >

              <a
                href="/"
                className="
                  flex
                  items-center
                  gap-2
                  hover:text-purple-700
                  transition
                "
              >

                <Home
                  size={20}
                  strokeWidth={1.8}
                />

                <span>
                  خانه
                </span>

              </a>



              <a
                href="/analyze"
                className="
                  rounded-xl
                  bg-gradient-to-r
                  from-purple-500/90
                  from-violet-500
                  via-purple-400
                  to-pink-400
                  px-3
                  py-2
                  sm:px-5
                  sm:py-2.5
                  text-sm
                  sm:text-base
                  text-gray-800
                  font-medium
                  shadow-md
                  shadow-purple-200/50
                  hover:opacity-90
                  transition
                  whitespace-nowrap
                "
              >
                تحلیل پوست
              </a>


            </nav>




            {/* Logo */}

            <a
              href="/"
              dir="ltr"
              className="
                text-2xl
                sm:text-3xl
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
            </a>


          </div>

        </header>




        {/* Page */}

        <main className="flex-1">
          {children}
        </main>





        {/* Footer */}

        <footer
          className="
    mt-10
    bg-gradient-to-r
    from-purple-200
    via-pink-100
    to-rose-200
    text-gray-800
    p-8
    text-center
    border-t
    border-white/60
    shadow-inner
  "
        >

          <h3
            className="
      text-2xl
      font-extrabold
      text-purple-900
    "
          >
            ارتباط با ما
          </h3>


          <p
            className="
      mt-3
      text-gray-700
    "
          >
            برای همکاری، پیشنهاد یا پشتیبانی با ما در تماس باشید.
          </p>



          <p
            className="
      mt-3
      text-gray-700
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
      gap-4
      flex-wrap
    "
          >


            <a
              href="https://wa.me/989xxxxxxxxx"
              target="_blank"
              className="
        bg-green-500
        hover:bg-green-600
        px-5
        py-2
        rounded-xl
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
        px-5
        py-2
        rounded-xl
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
      text-sm
      text-gray-600
    "
          >
            © {new Date().getFullYear()} Surenmah. All rights reserved.
          </p>


        </footer>

      </body>

    </html>

  );
}