import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "تحلیل پوست با هوش مصنوعی",
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
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        h-full
        antialiased
      `}
    >


      <body
        className="
          min-h-full
          flex
          flex-col
        "
      >


        <main className="flex-1">
          {children}
        </main>



        <footer
  className="
    bg-gray-900
    text-white
    p-8
    text-center
  "
>

  <h3 className="text-xl font-bold">
    ارتباط با ما
  </h3>


  <p className="mt-3 text-gray-300">
    برای همکاری، پیشنهاد یا پشتیبانی با ما در تماس باشید.
  </p>


  <p className="mt-3 text-gray-300">
    ایمیل:
    {" "}
    <a
      href="mailto:Ahmad.sadegh@gmail.com"
      className="underline hover:text-white"
    >
      Ahmad.sadegh@gmail.com
    </a>
  </p>


  <div
    className="
      mt-5
      flex
      justify-center
      gap-4
    "
  >

    <a
      href="https://wa.me/989xxxxxxxxx"
      target="_blank"
      className="
        bg-green-600
        px-5
        py-2
        rounded-xl
      "
    >
      WhatsApp
    </a>


    <a
      href="#"
      className="
        bg-blue-600
        px-5
        py-2
        rounded-xl
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