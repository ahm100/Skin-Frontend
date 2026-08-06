export default function Home() {
  return (
    <main className="min-h-screen">


      <section
        className="
          py-20
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
    rounded-xl
    bg-gradient-to-r
    from-violet-500
    to-pink-500
    px-10
    py-4
    text-lg
    text-white
    font-medium
    shadow-md
    hover:opacity-90
    transition
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
    gap-6
    md:grid-cols-3
  "
>


  <div
    className="
      group
      rounded-3xl
      border
      border-white/60
      bg-white/70
      backdrop-blur-xl
      p-6
      shadow-md
      shadow-purple-100
      transition-all
      hover:-translate-y-2
      hover:shadow-xl
      hover:shadow-purple-200
    "
  >

    <div
      className="
        mb-4
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


    <h3 className="text-xl font-bold text-gray-900">
      آپلود تصویر
    </h3>


    <p
      className="
        mt-3
        leading-7
        text-gray-600
      "
    >
      یک تصویر مناسب از پوست خود ارسال کنید.
    </p>


  </div>




  <div
    className="
      group
      rounded-3xl
      border
      border-white/60
      bg-white/70
      backdrop-blur-xl
      p-6
      shadow-md
      shadow-purple-100
      transition-all
      hover:-translate-y-2
      hover:shadow-xl
      hover:shadow-purple-200
    "
  >

    <div
      className="
        mb-4
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


    <h3 className="text-xl font-bold text-gray-900">
      تحلیل AI
    </h3>


    <p
      className="
        mt-3
        leading-7
        text-gray-600
      "
    >
      هوش مصنوعی نوع پوست و شرایط احتمالی را بررسی می‌کند.
    </p>


  </div>




  <div
    className="
      group
      rounded-3xl
      border
      border-white/60
      bg-white/70
      backdrop-blur-xl
      p-6
      shadow-md
      shadow-purple-100
      transition-all
      hover:-translate-y-2
      hover:shadow-xl
      hover:shadow-purple-200
    "
  >

    <div
      className="
        mb-4
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


    <h3 className="text-xl font-bold text-gray-900">
      پیشنهاد محصول
    </h3>


    <p
      className="
        mt-3
        leading-7
        text-gray-600
      "
    >
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