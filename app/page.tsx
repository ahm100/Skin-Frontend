import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Surenmah | تحلیل پوست با هوش مصنوعی",
  description:
    "Surenmah یک سرویس تحلیل پوست با هوش مصنوعی است. تصویر پوست خود را بررسی کنید، نوع پوست و نشانه‌های احتمالی مشکلات پوستی را بشناسید و پیشنهادهای مناسب دریافت کنید.",
  alternates: {
    canonical: "https://www.surenmah.ir/",
  },
};

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
          تحلیل پوست با هوش مصنوعی
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
          با استفاده از هوش مصنوعی، تصویر پوست خود را تحلیل کنید،
          نوع پوست و نشانه‌های احتمالی مشکلات پوستی را بررسی کنید
          و بر اساس نتیجه تحلیل، پیشنهادهای مناسب دریافت کنید.
        </p>

        <a
          href="/analyze"
          className="
            mt-10
            rounded-xl
            bg-gradient-to-r
            from-violet-500
            via-purple-400
            to-pink-400
            px-10
            py-4
            text-lg
            font-medium
            text-gray-800
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
          نتایج توسط هوش مصنوعی تخمین زده می‌شوند.
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
          تحلیل پوست با هوش مصنوعی چگونه کار می‌کند؟
        </h2>

        <div
          className="
            mt-12
            flex
            flex-col
            items-center
          "
        >

          {/* Step 1 */}

          <div
            className="
              flex
              flex-col
              items-center
              text-center
              rounded-3xl
              bg-white
              border
              border-gray-100
              p-6
              shadow-sm
              w-full
              max-w-sm
            "
          >

            <div
              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                bg-purple-100
                text-4xl
              "
            >
              📷
            </div>

            <h3
              className="
                mt-5
                text-xl
                font-bold
                text-gray-900
              "
            >
              آپلود تصویر پوست
            </h3>

            <p
              className="
                mt-3
                leading-7
                text-gray-600
              "
            >
              یک تصویر مناسب از پوست خود ارسال کنید تا
              فرآیند تحلیل پوست آغاز شود.
            </p>

          </div>


          {/* Arrow */}

          <div
            className="
              my-5
              text-4xl
              text-purple-400
            "
          >
            ↓
          </div>


          {/* Step 2 */}

          <div
            className="
              flex
              flex-col
              items-center
              text-center
              rounded-3xl
              bg-white
              border
              border-gray-100
              p-6
              shadow-sm
              w-full
              max-w-sm
            "
          >

            <div
              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                bg-pink-100
                text-4xl
              "
            >
              🤖
            </div>

            <h3
              className="
                mt-5
                text-xl
                font-bold
                text-gray-900
              "
            >
              تحلیل هوشمند پوست
            </h3>

            <p
              className="
                mt-3
                leading-7
                text-gray-600
              "
            >
              مدل‌های هوش مصنوعی تصویر پوست را بررسی می‌کنند
              و ویژگی‌ها و نشانه‌های احتمالی را استخراج می‌کنند.
            </p>

          </div>


          {/* Arrow */}

          <div
            className="
              my-5
              text-4xl
              text-purple-400
            "
          >
            ↓
          </div>


          {/* Step 3 */}

          <div
            className="
              flex
              flex-col
              items-center
              text-center
              rounded-3xl
              bg-white
              border
              border-gray-100
              p-6
              shadow-sm
              w-full
              max-w-sm
            "
          >

            <div
              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                bg-rose-100
                text-4xl
              "
            >
              🧴
            </div>

            <h3
              className="
                mt-5
                text-xl
                font-bold
                text-gray-900
              "
            >
              پیشنهاد محصولات مناسب
            </h3>

            <p
              className="
                mt-3
                leading-7
                text-gray-600
              "
            >
              در مواردی که تحلیل برای پیشنهاد محصول مناسب باشد،
              محصولات مرتبط بر اساس نتیجه تحلیل پیشنهاد می‌شوند.
            </p>

          </div>

        </div>

      </section>


      {/* Why Surenmah */}

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
          چرا Surenmah؟
        </h2>

        <div
          className="
            mt-8
            grid
            gap-6
            md:grid-cols-3
          "
        >

          {/* Feature 1 */}

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
              تحلیل هوشمند پوست
            </h3>

            <p className="mt-2 text-gray-600">
              استفاده از مدل‌های هوش مصنوعی برای
              بررسی تصویر پوست و استخراج ویژگی‌های احتمالی.
            </p>

          </div>


          {/* Feature 2 */}

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
              پیشنهاد شخصی محصولات
            </h3>

            <p className="mt-2 text-gray-600">
              در موارد مناسب، محصولات مرتبط با نوع پوست
              و نیازهای احتمالی آن پیشنهاد می‌شوند.
            </p>

          </div>


          {/* Feature 3 */}

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
              توجه به حریم خصوصی
            </h3>

            <p className="mt-2 text-gray-600">
              تصاویر برای تحلیل ویژگی‌های پوست پردازش می‌شوند
              و نتیجه تحلیل برای ارائه اطلاعات اولیه استفاده می‌شود.
            </p>

          </div>

        </div>

      </section>


      {/* SEO Content */}

      <section
        className="
          bg-gray-50
          px-6
          py-16
          sm:px-10
          text-center
        "
      >

        <div className="mx-auto max-w-3xl">

          <h2
            className="
              text-3xl
              font-extrabold
              text-gray-900
            "
          >
            تحلیل پوست با هوش مصنوعی چیست؟
          </h2>

          <p
            className="
              mt-6
              leading-8
              text-gray-600
            "
          >
            Surenmah یک سرویس تحلیل پوست با هوش مصنوعی است
            که با بررسی تصویر پوست، اطلاعات اولیه‌ای درباره
            نوع پوست و برخی نشانه‌های احتمالی پوستی ارائه می‌کند.
          </p>

          <p
            className="
              mt-4
              leading-8
              text-gray-600
            "
          >
            هدف Surenmah کمک به کاربران برای شناخت بهتر ویژگی‌های
            پوست و دریافت اطلاعات اولیه درباره وضعیت ظاهری پوست است.
            نتیجه تحلیل هوش مصنوعی تشخیص پزشکی نیست و نمی‌تواند
            جایگزین معاینه یا نظر متخصص پوست شود.
          </p>

          <p
            className="
              mt-4
              leading-8
              text-gray-600
            "
          >
            در صورت مشاهده علائم نگران‌کننده، تغییرات غیرعادی یا
            مشکلات پوستی مداوم، مراجعه به متخصص پوست توصیه می‌شود.
          </p>

        </div>

      </section>


      {/* Brands */}

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
          همکاری با برندها
        </h2>

        <p
          className="
            mt-4
            text-gray-600
          "
        >
          برندها می‌توانند محصولات خود را به کاربران مناسب
          معرفی کنند.
        </p>

      </section>

    </main>
  );
}