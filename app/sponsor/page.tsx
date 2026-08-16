import Link from "next/link";

export default function SponsorPage() {
  return (
    <main className="bg-porcelain text-petrol">

      {/* HERO */}

      <section
        className="
          bg-gradient-to-l
          from-coral/20
          via-blush/20
          to-[#F5E6D3]/70
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
                title:"مخاطب واقعی",
                text:"محصول شما به کاربری نمایش داده می‌شود که در حال پیدا کردن راهکار برای نیاز پوستی خود است."
              },
              {
                title:"قدرت هوش مصنوعی",
                text:"کاربر ابتدا پوست خود را تحلیل می‌کند و سپس پیشنهادهای مرتبط دریافت می‌کند."
              },
              {
                title:"انتقال مستقیم مشتری",
                text:"با کلیک روی خرید، کاربر مستقیماً به وب‌سایت یا فروشگاه شما هدایت می‌شود."
              }
            ].map(item => (

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
              "کاربر برای خرید وارد سایت شما می‌شود"
            ].map((x,i)=>(

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
                    text-white
                    font-bold
                  "
                >
                  {i+1}
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


          <div className="mt-6 space-y-4">

            <input
              placeholder="نام برند"
              className="
                w-full
                rounded-xl
                border
                border-coral/20
                px-4
                py-3
              "
            />


            <input
              placeholder="ایمیل"
              className="
                w-full
                rounded-xl
                border
                border-coral/20
                px-4
                py-3
              "
            />


            <input
              placeholder="وب‌سایت برند"
              className="
                w-full
                rounded-xl
                border
                border-coral/20
                px-4
                py-3
              "
            />


            <textarea
              placeholder="توضیح کوتاه درباره همکاری"
              rows={4}
              className="
                w-full
                rounded-xl
                border
                border-coral/20
                px-4
                py-3
              "
            />


            <button
              className="
                w-full
                rounded-xl
                bg-gradient-to-l
                from-coral
                via-[#E97861]
                to-[#F4A896]
                py-3
                font-bold
                text-white
              "
            >
              ارسال درخواست همکاری
            </button>

          </div>


        </div>

      </section>


    </main>
  );
}