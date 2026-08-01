export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10">

      <h1 className="text-5xl font-bold text-center">
        تحلیل پوست با هوش مصنوعی
      </h1>

      <p className="mt-6 text-xl text-gray-600 text-center max-w-2xl">
        تصویر پوست خود را آپلود کنید،
        وضعیت پوست را تحلیل کنید و
        محصولات مناسب دریافت کنید.
      </p>

      <button
        className="
        mt-10
        bg-black
        text-white
        px-8
        py-4
        rounded-xl
        text-lg
        "
      >
        شروع تحلیل پوست
      </button>

    </main>
  );
}