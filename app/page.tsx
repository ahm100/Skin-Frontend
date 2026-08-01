export default function Home() {
  return (
    <main
      className="
      min-h-screen
      flex
      flex-col
      items-center
      justify-center
      p-10
      bg-gray-50
      "
    >

      <h1
        className="
        text-5xl
        font-bold
        text-center
        "
      >
        تحلیل پوست با هوش مصنوعی
      </h1>


      <p
        className="
        mt-6
        text-xl
        text-gray-600
        text-center
        max-w-2xl
        "
      >
        تصویر پوست خود را آپلود کنید،
        هوش مصنوعی وضعیت پوست شما را تحلیل می‌کند
        و محصولات مناسب را پیشنهاد می‌دهد.
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
        "
      >
        شروع تحلیل پوست
      </a>



    </main>
  );
}