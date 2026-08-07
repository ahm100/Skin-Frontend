export default function Home() {
  return (
    <main className="min-h-screen">


      {/* Hero */}

      <section
        className="
          py-20
          px-6
          sm:px-10
          flex
          flex-col
          items-center
          justify-center
          text-center
        "
      >

        <h1
          className="
            text-4xl
            sm:text-5xl
            font-extrabold
            text-gray-900
          "
        >
          پوست خود را با هوش مصنوعی بشناس
        </h1>



        <p
          className="
            mt-6
            max-w-2xl
            text-lg
            sm:text-xl
            leading-8
            text-gray-600
          "
        >
          با یک تصویر ساده، نوع پوست و نشانه‌های احتمالی
          پوست خود را تحلیل کنید و پیشنهادهای مناسب دریافت کنید.
        </p>




        <a
          href="/analyze"
          className="
            mt-10
            rounded-xl
            bg-gradient-to-r
            from-violet-500
            to-pink-500
            px-10
            py-4
            text-lg
            font-medium
            text-white
            shadow-md
            hover:opacity-90
            transition
          "
        >
          شروع تحلیل رایگان
        </a>




        <p
          className="
            mt-6
            max-w-md
            text-xs
            text-gray-500
          "
        >
          ⚠️ این تحلیل تشخیص پزشکی نیست.
          نتایج توسط هوش مصنوعی تخمین زده می‌شود.
        </p>


      </section>







      {/* How it works */}

      <section
        className="
          bg-gray-50
          px-6
          py-16
          sm:px-10
        "
      >

        <h2
          className="
            text-center
            text-3xl
            font-extrabold
            text-gray-900
          "
        >
          چگونه کار می‌کند؟
        </h2>





        <div
          className="
            mt-10
            grid
            gap-6
            md:grid-cols-3
          "
        >



          <div
            className="
              rounded-3xl
              bg-white
              border
              border-gray-100
              p-6
              shadow-sm
              hover:shadow-md
              transition
            "
          >

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-purple-100
                text-3xl
              "
            >
              📷
            </div>


            <h3 className="mt-5 text-xl font-bold">
              آپلود تصویر
            </h3>


            <p className="mt-3 leading-7 text-gray-600">
              یک تصویر مناسب از پوست خود ارسال کنید.
            </p>

          </div>







          <div
            className="
              rounded-3xl
              bg-white
              border
              border-gray-100
              p-6
              shadow-sm
              hover:shadow-md
              transition
            "
          >

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-pink-100
                text-3xl
              "
            >
              🤖
            </div>


            <h3 className="mt-5 text-xl font-bold">
              تحلیل AI
            </h3>


            <p className="mt-3 leading-7 text-gray-600">
              هوش مصنوعی نوع پوست و نشانه‌های احتمالی را بررسی می‌کند.
            </p>

          </div>








          <div
            className="
              rounded-3xl
              bg-white
              border
              border-gray-100
              p-6
              shadow-sm
              hover:shadow-md
              transition
            "
          >

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-rose-100
                text-3xl
              "
            >
              🧴
            </div>


            <h3 className="mt-5 text-xl font-bold">
              پیشنهاد محصول
            </h3>


            <p className="mt-3 leading-7 text-gray-600">
              محصولات مناسب بر اساس تحلیل پوست پیشنهاد می‌شوند.
            </p>


          </div>



        </div>


      </section>









      {/* Why Skin AI */}

      <section
        className="
          px-6
          py-16
          sm:px-10
          text-center
        "
      >


        <h2
          className="
            text-3xl
            font-extrabold
            text-gray-900
          "
        >
          چرا Skin AI؟
        </h2>





        <div
          className="
            mt-8
            grid
            gap-6
            md:grid-cols-3
          "
        >


          <div
            className="
              rounded-3xl
              bg-white
              border
              border-gray-100
              p-6
              shadow-sm
            "
          >
            <div className="text-3xl">
              🤖
            </div>

            <h3 className="mt-4 font-bold">
              تحلیل هوشمند
            </h3>

            <p className="mt-2 text-gray-600">
              استفاده از مدل‌های هوش مصنوعی برای بررسی تصویر پوست.
            </p>

          </div>





          <div
            className="
              rounded-3xl
              bg-white
              border
              border-gray-100
              p-6
              shadow-sm
            "
          >

            <div className="text-3xl">
              🎯
            </div>


            <h3 className="mt-4 font-bold">
              پیشنهاد شخصی
            </h3>


            <p className="mt-2 text-gray-600">
              محصولات متناسب با نیاز پوست شما پیشنهاد می‌شوند.
            </p>

          </div>







          <div
            className="
              rounded-3xl
              bg-white
              border
              border-gray-100
              p-6
              shadow-sm
            "
          >

            <div className="text-3xl">
              🔒
            </div>


            <h3 className="mt-4 font-bold">
              حریم خصوصی
            </h3>


            <p className="mt-2 text-gray-600">
              تصاویر برای تحلیل ویژگی‌های پوست پردازش می‌شوند.
            </p>


          </div>



        </div>


      </section>








      {/* Brands */}

      <section
        className="
          bg-gray-50
          px-6
          py-16
          sm:px-10
          text-center
        "
      >

        <h2 className="text-3xl font-extrabold">
          همکاری با برندها
        </h2>


        <p className="mt-4 text-gray-600">
          برندها می‌توانند محصولات خود را به کاربران مناسب معرفی کنند.
        </p>


      </section>




    </main>
  );
}