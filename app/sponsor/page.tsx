import Link from "next/link";

export default function SponsorPage() {
  return (
    <main className="bg-porcelain text-petrol">



      {/* HERO */}
{/* HERO */}

<section
  className="
    bg-[#F2EAF1]
    px-5
    py-20
    text-center
  "
>
  <div className="mx-auto max-w-5xl">

    <span
      className="
        rounded-full
        bg-coral/10
        px-4
        py-2
        text-sm
        font-medium
      "
    >
      همکاری با برندهای مراقبت پوست
    </span>

    <h1
      className="
        mt-6
        text-4xl
        font-extrabold
        leading-tight
        text-petrol
        sm:text-5xl
      "
    >
      محصول شما را به مشتری مناسب معرفی می‌کنیم
    </h1>

    <p
      className="
        mx-auto
        mt-6
        max-w-3xl
        text-lg
        leading-9
        text-petrol-soft
      "
    >
      Surenmah با استفاده از تحلیل پوست توسط هوش مصنوعی،
      به کاربران کمک می‌کند محصولات مناسب خود را پیدا کنند.
      برند شما می‌تواند دقیقاً در همین لحظه دیده شود.
    </p>

    <Link
      href="#contact"
      className="
        mt-10
        inline-flex
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
        transition
      "
    >
      شروع همکاری با Surenmah
    </Link>

  </div>
</section>

      {/* WHY */}

      <section className="px-5 py-16">

        <div className="mx-auto max-w-6xl">

          <h2
            className="
              text-center
              text-3xl
              font-extrabold
            "
          >
            چرا Surenmah برای برندها ارزشمند است؟
          </h2>

          <div
            className="
              mt-10
              grid
              gap-6
              md:grid-cols-3
            "
          >

            {[
              {
                title: "مخاطب واقعی",
                text: "محصول شما به کاربری نمایش داده می‌شود که در حال پیدا کردن راهکار برای نیاز پوستی خود است.",
              },
              {
                title: "قدرت هوش مصنوعی",
                text: "کاربر ابتدا پوست خود را تحلیل می‌کند و سپس پیشنهادهای مرتبط دریافت می‌کند.",
              },
              {
                title: "انتقال مستقیم مشتری",
                text: "با کلیک روی خرید، کاربر مستقیماً به وب‌سایت یا فروشگاه شما هدایت می‌شود.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="
                  rounded-2xl
                  border
                  border-coral/10
                  bg-white/70
                  p-6
                  shadow-sm
                "
              >

                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3
                    leading-8
                    text-petrol-soft
                  "
                >
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* JOURNEY */}

      <section
        className="
          bg-white/50
          px-5
          py-16
        "
      >

        <div className="mx-auto max-w-5xl">

          <h2
            className="
              text-center
              text-3xl
              font-extrabold
            "
          >
            تجربه کاربر چگونه است؟
          </h2>

          <div
            className="
              mt-10
              grid
              gap-5
              md:grid-cols-4
            "
          >

            {[
              "کاربر تصویر پوست خود را ارسال می‌کند",
              "هوش مصنوعی وضعیت پوست را تحلیل می‌کند",
              "محصولات مناسب نمایش داده می‌شوند",
              "کاربر برای خرید وارد سایت شما می‌شود",
            ].map((x, i) => (

              <div
                key={x}
                className="
                  rounded-2xl
                  bg-gradient-to-br
                  from-coral/10
                  to-[#F5E6D3]
                  p-6
                  text-center
                "
              >

                <div
                  className="
                    mx-auto
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-coral
                    font-bold
                    text-white
                  "
                >
                  {i + 1}
                </div>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                  "
                >
                  {x}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* BRAND VALUE */}

      <section className="px-5 py-16">

        <div
          className="
            mx-auto
            max-w-4xl
            rounded-3xl
            bg-gradient-to-l
            from-coral/20
            via-blush/20
            to-[#F5E6D3]
            p-8
            text-center
          "
        >

          <h2
            className="
              text-3xl
              font-extrabold
            "
          >
            محصول شما فقط تبلیغ نمی‌شود؛ پیشنهاد داده می‌شود
          </h2>

          <p
            className="
              mt-5
              leading-9
              text-petrol-soft
            "
          >
            تفاوت Surenmah این است که کاربر در مسیر شناخت پوست خود
            قرار دارد. برند شما در یک تجربه مرتبط، هدفمند و قابل اعتماد
            دیده می‌شود.
          </p>

        </div>

      </section>


      {/* CONTACT */}

      <section
        id="contact"
        className="px-5 py-16"
      >

        <div
          className="
            mx-auto
            max-w-xl
            rounded-3xl
            bg-white
            p-8
            shadow-sm
          "
        >

          <h2
            className="
              text-center
              text-2xl
              font-extrabold
            "
          >
            درخواست همکاری
          </h2>


          {/* TEMPORARILY DISABLED */}

          <div className="mt-6">

            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-gray-100
                p-6
              "
            >

              {/* Disabled overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gray-100/60
                "
              />

              <div className="relative space-y-4">

                <input
                  disabled
                  placeholder="نام برند"
                  className="
                    w-full
                    cursor-not-allowed
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-200
                    px-4
                    py-3
                    text-gray-400
                    placeholder:text-gray-400
                  "
                />

                <input
                  disabled
                  placeholder="ایمیل"
                  className="
                    w-full
                    cursor-not-allowed
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-200
                    px-4
                    py-3
                    text-gray-400
                    placeholder:text-gray-400
                  "
                />

                <input
                  disabled
                  placeholder="وب‌سایت برند"
                  className="
                    w-full
                    cursor-not-allowed
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-200
                    px-4
                    py-3
                    text-gray-400
                    placeholder:text-gray-400
                  "
                />

                <textarea
                  disabled
                  placeholder="توضیح کوتاه درباره همکاری"
                  rows={4}
                  className="
                    w-full
                    cursor-not-allowed
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-200
                    px-4
                    py-3
                    text-gray-400
                    placeholder:text-gray-400
                  "
                />

                <button
                  disabled
                  className="
                    w-full
                    cursor-not-allowed
                    rounded-xl
                    bg-gray-300
                    py-3
                    font-bold
                    text-gray-500
                  "
                >
                  ارسال درخواست همکاری
                </button>

              </div>

            </div>


            {/* Temporary notice */}

            <div
              className="
                mt-5
                rounded-2xl
                border
                border-amber-200
                bg-amber-50
                p-5
                text-center
              "
            >

              <div className="text-lg font-bold text-gray-700">
                ارسال فرم موقتاً غیرفعال است
              </div>

              <p
                className="
                  mt-2
                  text-sm
                  leading-7
                  text-gray-600
                "
              >
                در حال حاضر سرویس دریافت پیام از طریق فرم همکاری
                موقتاً در دسترس نیست.
              </p>

              <p
                className="
                  mt-2
                  text-sm
                  leading-7
                  text-gray-600
                "
              >
                لطفاً درخواست همکاری خود را مستقیماً به ایمیل زیر ارسال کنید:
              </p>


              <a
                href="mailto:ahmad.sadegh@gmail.com"
                className="
                  mt-3
                  inline-block
                  font-bold
                  text-coral
                  underline
                  underline-offset-4
                  transition
                  hover:text-coral/70
                "
              >
                ahmad.sadegh@gmail.com
              </a>

            </div>

          </div>

        </div>

      </section>


    </main>
  );
}