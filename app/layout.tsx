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
                  from-violet-500/90
                  via-purple-500/90
                  to-pink-500/90
                  px-3
                  py-2
                  sm:px-5
                  sm:py-2.5
                  text-sm
                  sm:text-base
                  text-white
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
                from-violet-700
                via-purple-600
                to-pink-600
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
            border-t
            border-white/50
            bg-gradient-to-r
            from-violet-50
            via-pink-50
            to-purple-50
            backdrop-blur-xl
            p-8
            sm:p-10
            text-center
            text-gray-700
          "
        >

          <h3
            className="
              text-2xl
              font-bold
              bg-gradient-to-r
              from-violet-700
              to-pink-600
              bg-clip-text
              text-transparent
            "
          >
            Surenmah
          </h3>


          <p
            className="
              mt-4
              text-gray-600
              max-w-xl
              mx-auto
            "
          >
            تحلیل هوشمند پوست و پیشنهاد محصولات مناسب
            با کمک هوش مصنوعی
          </p>



          <p
            className="
              mt-4
              text-gray-600
            "
          >

            ایمیل:
            {" "}

            <a
              href="mailto:Ahmad.sadegh@gmail.com"
              className="
                text-purple-700
                underline
                hover:text-purple-900
              "
            >
              Ahmad.sadegh@gmail.com
            </a>

          </p>




          <div
            className="
              mt-6
              flex
              justify-center
              gap-4
            "
          >

            <a
              href="https://wa.me/989xxxxxxxxx"
              target="_blank"
              className="
                rounded-xl
                bg-emerald-500/90
                px-5
                py-2
                text-white
                shadow-md
                hover:bg-emerald-600
                transition
              "
            >
              WhatsApp
            </a>



            <a
              href="#"
              className="
                rounded-xl
                bg-purple-500/90
                px-5
                py-2
                text-white
                shadow-md
                hover:bg-purple-600
                transition
              "
            >
              Bale (به‌زودی)
            </a>


          </div>


        </footer>


      </body>

    </html>

  );
}