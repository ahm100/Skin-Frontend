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

      {/* =====================================================
          HERO
          ===================================================== */}

      <section
        className="
          bg-[#F2EAF1]
          px-6
          py-14
          sm:px-10
          sm:py-20
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-6xl
            items-center
            gap-10
            lg:grid-cols-2
            lg:gap-16
          "
        >

          {/* =================================================
              TEXT
              ================================================= */}

          <div
            className="
              text-center
              lg:text-right
            "
          >
            <h1
              className="
                text-4xl
                sm:text-5xl
                font-extrabold
                leading-tight
                text-petrol
              "
            >
              تحلیل پوست با هوش مصنوعی
            </h1>

            <p
              className="
                mt-6
                max-w-2xl
                mx-auto
                lg:mx-0
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
             className="btn-base btn-primary mt-10"
            >
              شروع تحلیل رایگان
            </a>
            <p
              className="
                mt-6
                max-w-md
                mx-auto
                lg:mx-0
                text-xs
                leading-6
                text-petrol
              "
            >
              ⚠️ این تحلیل تشخیص پزشکی نیست.
              نتایج توسط هوش مصنوعی تخمین زده می‌شوند.
            </p>
          </div>


          {/* =================================================
              HERO IMAGE
              ================================================= */}

          <div
            className="
              relative
              order-first
              lg:order-last
            "
          >
            <div
              className="
                relative
                mx-auto
                max-w-md
                overflow-hidden
                rounded-[2rem]
                shadow-xl
                shadow-coral/10
              "
            >
              <img
                src="/images/hero-skin.jpg"
                alt="تحلیل پوست با هوش مصنوعی در Surenmah"
                className="
                  h-[360px]
                  w-full
                  object-cover
                  sm:h-[460px]
                "
              />

              {/* Soft overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-petrol/20
                  via-transparent
                  to-white/10
                "
              />

              {/* Small badge */}

              <div
                className="
                  absolute
                  bottom-5
                  right-5
                  left-5
                  rounded-2xl
                  bg-white/90
                  px-4
                  py-3
                  text-center
                  shadow-lg
                  backdrop-blur-sm
                "
              >
                <p
                  className="
                    text-sm
                    font-semibold
                    text-petrol
                  "
                >
                  ✨ شناخت بهتر پوست شما با هوش مصنوعی
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          HOW IT WORKS
          ===================================================== */}

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
              w-full
              max-w-sm
              flex-col
              items-center
              rounded-3xl
              border
              border-gray-100
              bg-white
              p-6
              text-center
              shadow-sm
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
              w-full
              max-w-sm
              flex-col
              items-center
              rounded-3xl
              border
              border-gray-100
              bg-white
              p-6
              text-center
              shadow-sm
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
              w-full
              max-w-sm
              flex-col
              items-center
              rounded-3xl
              border
              border-gray-100
              bg-white
              p-6
              text-center
              shadow-sm
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


      {/* =====================================================
          SKIN JOURNEY
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
            overflow-hidden
            rounded-3xl
            border
            border-coral/10
            bg-gradient-to-l
            from-[#F2EAF1]
            via-white
            to-[#F5E6D3]/60
            px-6
            py-12
            sm:px-10
            sm:py-14
            shadow-sm
          "
        >

          <div className="text-center">
            <span
              className="
                inline-flex
                items-center
                rounded-full
                bg-coral/10
                px-4
                py-1.5
                text-sm
                font-semibold
                text-coral
              "
            >
              ✨ قابلیت جدید Surenmah
            </span>
          </div>

          <h2
            className="
              mt-5
              text-center
              text-3xl
              sm:text-4xl
              font-extrabold
              text-petrol
            "
          >
            سفر پوست شما از همین‌جا شروع می‌شود
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-center
              text-base
              sm:text-lg
              leading-8
              text-petrol-soft
            "
          >
            هر بار که پوست خود را تحلیل می‌کنید، تصویر و نتیجه
            تحلیل شما در تاریخچه پوست ذخیره می‌شود.
            در بخش «سفر پوست» می‌توانید تحلیل‌های قبلی خود را
            در طول زمان مشاهده و مرور کنید.
          </p>

          <div
            className="
              mx-auto
              mt-10
              grid
              max-w-4xl
              gap-4
              sm:grid-cols-3
            "
          >

            {/* Feature 1 */}

            <div
              className="
                rounded-2xl
                border
                border-gray-100
                bg-white/80
                p-5
                text-center
                shadow-sm
              "
            >
              <div className="text-3xl">
                📸
              </div>

              <h3
                className="
                  mt-3
                  font-bold
                  text-petrol
                "
              >
                ثبت تحلیل‌های پوست
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-petrol-soft
                "
              >
                تحلیل‌های شما برای مرور دوباره در تاریخچه ذخیره می‌شوند.
              </p>
            </div>


            {/* Feature 2 */}

            <div
              className="
                rounded-2xl
                border
                border-gray-100
                bg-white/80
                p-5
                text-center
                shadow-sm
              "
            >
              <div className="text-3xl">
                🗓️
              </div>

              <h3
                className="
                  mt-3
                  font-bold
                  text-petrol
                "
              >
                مشاهده تاریخچه
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-petrol-soft
                "
              >
                تحلیل‌های قبلی خود را در طول زمان مشاهده کنید.
              </p>
            </div>


            {/* Feature 3 */}

            <div
              className="
                rounded-2xl
                border
                border-gray-100
                bg-white/80
                p-5
                text-center
                shadow-sm
              "
            >
              <div className="text-3xl">
                🌱
              </div>

              <h3
                className="
                  mt-3
                  font-bold
                  text-petrol
                "
              >
                دنبال کردن مسیر پوست
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-petrol-soft
                "
              >
                یک نمای کلی از تحلیل‌های پوست خود در طول زمان داشته باشید.
              </p>
            </div>

          </div>


          {/* CTA */}

          <div className="mt-10 text-center">
            <a
              href="/journey"
              className="btn-base btn-primary"
            >
              مشاهده سفر پوست
            </a>
          </div>

        </div>
      </section>


      {/* =====================================================
          WHY SURENMAH
          ===================================================== */}

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
              border
              border-gray-100
              bg-white
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
              border
              border-gray-100
              bg-white
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
              border
              border-gray-100
              bg-white
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
            bg-[#F2EAF1]
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
            محصول خود را به مشتری مناسب معرفی کنید
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
           className="btn-base btn-primary"
          >
            فرصت‌های همکاری با Surenmah
          </a>

        </div>
      </section>


      {/* =====================================================
          SEO CONTENT
          ===================================================== */}

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