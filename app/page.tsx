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
            text-petrol
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
            text-petrol
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
    inline-flex
    items-center
    justify-center

    rounded-xl

    bg-gradient-to-l
    from-coral
    via-[#E97861]
    to-[#F4A896]

    px-10
    py-4

    text-lg
    font-bold
    text-white

    shadow-lg
    shadow-coral/25

    hover:-translate-y-0.5
    hover:shadow-xl
    hover:shadow-coral/30

    transition-all
    duration-200
  "
        >

          شروع تحلیل رایگان
        </a>

        <p
          className="
            mt-6
            max-w-md
            text-xs
            text-petrol
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
            text-petrol
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
                text-petrol
              "
            >
              آپلود تصویر پوست
            </h3>

            <p
              className="
                mt-3
                leading-7
                text-petrol
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
                text-petrol
              "
            >
              تحلیل هوشمند پوست
            </h3>

            <p
              className="
                mt-3
                leading-7
                text-petrol
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
                text-petrol
              "
            >
              پیشنهاد محصولات مناسب
            </h3>

            <p
              className="
                mt-3
                leading-7
                text-petrol
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
            text-petrol
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

            <p className="mt-2 text-petrol">
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

            <p className="mt-2 text-petrol">
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

            <p className="mt-2 text-petrol">
              تصاویر برای تحلیل ویژگی‌های پوست پردازش می‌شوند
              و نتیجه تحلیل برای ارائه اطلاعات اولیه استفاده می‌شود.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
    BRANDS / SPONSOR CTA
    ===================================================== */}

      <section
        className="
    px-6
    py-16
    sm:px-10
  "
      >
        <div
          className="
      mx-auto
      max-w-5xl

      rounded-3xl

      bg-gradient-to-l
      from-coral/20
      via-blush/20
      to-[#F5E6D3]

      px-6
      py-12

      text-center

      shadow-sm
    "
        >

          <span
            className="
        inline-flex
        rounded-full
        bg-coral/10

        px-4
        py-1.5

        text-sm
        font-medium

        text-petrol
      "
          >
            همکاری با برندها
          </span>


          <h2
            className="
        mt-5

        text-2xl
        sm:text-3xl

        font-extrabold

        text-petrol
      "
          >
            محصول شما را به مشتری مناسب معرفی کنید
          </h2>


          <p
            className="
        mx-auto
        mt-5

        max-w-2xl

        text-base
        sm:text-lg

        leading-8

        text-petrol-soft
      "
          >
            در Surenmah، کاربران ابتدا پوست خود را با کمک هوش مصنوعی
            تحلیل می‌کنند و سپس محصولات مرتبط را مشاهده می‌کنند.
            برند شما می‌تواند در همین مسیر، محصول خود را به مخاطب
            مناسب معرفی کند.
          </p>


          {/* VALUE POINTS */}

          <div
            className="
        mx-auto
        mt-8

        grid
        max-w-3xl

        gap-4

        sm:grid-cols-3
      "
          >

            <div
              className="
          rounded-2xl
          bg-white/60
          p-4
        "
            >
              <div className="text-2xl">
                🎯
              </div>

              <h3
                className="
            mt-2
            font-bold
            text-petrol
          "
              >
                مخاطب هدفمند
              </h3>

              <p
                className="
            mt-1
            text-sm
            leading-6
            text-petrol-soft
          "
              >
                محصول شما در کنار نیاز مرتبط کاربر دیده می‌شود.
              </p>
            </div>


            <div
              className="
          rounded-2xl
          bg-white/60
          p-4
        "
            >
              <div className="text-2xl">
                🤖
              </div>

              <h3
                className="
            mt-2
            font-bold
            text-petrol
          "
              >
                تجربه مبتنی بر AI
              </h3>

              <p
                className="
            mt-1
            text-sm
            leading-6
            text-petrol-soft
          "
              >
                محصول در مسیر تحلیل و انتخاب آگاهانه کاربر قرار می‌گیرد.
              </p>
            </div>


            <div
              className="
          rounded-2xl
          bg-white/60
          p-4
        "
            >
              <div className="text-2xl">
                🛒
              </div>

              <h3
                className="
            mt-2
            font-bold
            text-petrol
          "
              >
                هدایت مستقیم برای خرید
              </h3>

              <p
                className="
            mt-1
            text-sm
            leading-6
            text-petrol-soft
          "
              >
                کاربر برای خرید مستقیماً به سایت شما هدایت می‌شود.
              </p>
            </div>

          </div>


          {/* CTA */}

          <a
            href="/sponsor"
            className="
        mt-9

        inline-flex
        items-center
        justify-center

        rounded-xl

        bg-gradient-to-l
        from-coral
        via-[#E97861]
        to-[#F4A896]

        px-8
        py-3.5

        text-base
        sm:text-lg

        font-bold
        text-white

        shadow-lg
        shadow-coral/25

        hover:-translate-y-0.5
        hover:shadow-xl
        hover:shadow-coral/30

        transition-all
        duration-200
      "
          >
            فرصت‌های همکاری با Surenmah
          </a>

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
              text-petrol
            "
          >
            تحلیل پوست با هوش مصنوعی چیست؟
          </h2>

          <p
            className="
              mt-6
              leading-8
              text-petrol
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
              text-petrol
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
              text-petrol
            "
          >
            در صورت مشاهده علائم نگران‌کننده، تغییرات غیرعادی یا
            مشکلات پوستی مداوم، مراجعه به متخصص پوست توصیه می‌شود.
          </p>

        </div>

      </section>




    </main>
  );
}