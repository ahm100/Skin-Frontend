export default function Home() {
  return (
    <main className="min-h-screen">


      <section
        className="
          min-h-screen
          flex
          flex-col
          items-center
          justify-center
          text-center
          p-10
        "
      >

        <h1 className="text-5xl font-bold">
          پوستت را با هوش مصنوعی بشناس
        </h1>


        <p
          className="
            mt-6
            text-xl
            text-gray-600
            max-w-2xl
          "
        >
          با یک تصویر ساده، نوع پوست و مشکلات احتمالی
          پوست خود را تحلیل کن و محصولات مناسب دریافت کن.
        </p>


        <a
          href="/analyze"
          className="
            mt-10
            bg-black
            text-white
            px-10
            py-4
            rounded-xl
            text-lg
            hover:bg-gray-800
          "
        >
          شروع تحلیل رایگان
        </a>


      </section>



      <section className="bg-gray-50 p-10">


        <h2
          className="
            text-3xl
            font-bold
            text-center
          "
        >
          چگونه کار می‌کند؟
        </h2>



        <div
          className="
            mt-10
            grid
            md:grid-cols-3
            gap-6
          "
        >


          <div className="bg-white border rounded-xl p-6">

            <h3 className="text-xl font-bold">
              📷 آپلود تصویر
            </h3>

            <p className="mt-3 text-gray-600">
              یک تصویر از پوست خود ارسال کنید.
            </p>

          </div>



          <div className="bg-white border rounded-xl p-6">

            <h3 className="text-xl font-bold">
              🤖 تحلیل AI
            </h3>

            <p className="mt-3 text-gray-600">
              هوش مصنوعی نوع پوست و شرایط احتمالی را بررسی می‌کند.
            </p>

          </div>



          <div className="bg-white border rounded-xl p-6">

            <h3 className="text-xl font-bold">
              🧴 پیشنهاد محصول
            </h3>

            <p className="mt-3 text-gray-600">
              محصولات مناسب پوست شما پیشنهاد می‌شود.
            </p>

          </div>


        </div>


      </section>




      <section className="p-10 text-center">

        <h2 className="text-3xl font-bold">
          همکاری با برندها
        </h2>


        <p className="mt-4 text-gray-600">
          برندها می‌توانند محصولات خود را به کاربران مناسب معرفی کنند.
        </p>


      </section>


    </main>
  );
}