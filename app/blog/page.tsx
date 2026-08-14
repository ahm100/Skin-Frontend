import Link from "next/link";
import { blogArticles } from "./data";

export const metadata = {
  title: "مقالات مراقبت و سلامت پوست | سورنماه",
  description:
    "مقالات آموزشی سورنماه درباره بیماری‌های پوستی، علائم، تشخیص، درمان و مراقبت از پوست.",
};

export default function BlogPage() {
  return (
    <main
      dir="rtl"
      className="
        min-h-screen
        px-6
        py-12
        sm:px-10
        bg-white
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}

        <section className="text-center">

          <h1
            className="
              text-3xl
              sm:text-4xl
              font-extrabold
              text-gray-900
            "
          >
            مقالات سلامت و مراقبت از پوست
          </h1>

          <p
            className="
              mt-4
              max-w-2xl
              mx-auto
              leading-8
              text-gray-600
            "
          >
            اطلاعات ساده و کاربردی درباره بیماری‌های پوستی،
            علائم، تشخیص، درمان و مراقبت از پوست.
          </p>

        </section>


        {/* Articles */}

        <section
          className="
            mt-10
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {blogArticles.map((article) => (

            <article
              key={article.slug}
              className="
                rounded-3xl
                border
                border-gray-100
                bg-white
                p-6
                shadow-sm
                hover:shadow-md
                transition
              "
            >

              <h2
                className="
                  text-xl
                  font-bold
                  text-gray-900
                "
              >
                {article.title}
              </h2>

              <p
                dir="ltr"
                className="
                  mt-2
                  text-sm
                  text-gray-400
                "
              >
                {article.englishTitle}
              </p>

              <p
                className="
                  mt-4
                  leading-7
                  text-gray-600
                "
              >
                {article.description}
              </p>

              <Link
                href={`/blog/${article.slug}`}
                className="
                  inline-flex
                  mt-5
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-500
                  to-pink-400
                  px-5
                  py-2.5
                  text-gray-800
                  font-medium
                  shadow-sm
                  hover:opacity-90
                  transition
                "
              >
                مطالعه مقاله
              </Link>

            </article>

          ))}

        </section>


        {/* CTA */}

        <section
          className="
            mt-16
            rounded-3xl
            bg-gray-50
            border
            border-gray-100
            p-8
            text-center
          "
        >

          <h2
            className="
              text-2xl
              font-extrabold
              text-gray-900
            "
          >
            درباره پوست خود کنجکاو هستید؟
          </h2>

          <p
            className="
              mt-3
              text-gray-600
            "
          >
            می‌توانید یک تصویر از پوست خود ارسال کنید
            و یک ارزیابی اولیه با هوش مصنوعی دریافت کنید.
          </p>

          <Link
            href="/analyze"
            className="
              inline-flex
              mt-6
              rounded-xl
              bg-gradient-to-r
              from-violet-500
              to-pink-400
              px-7
              py-3
              text-gray-800
              font-medium
              shadow-md
              hover:opacity-90
              transition
            "
          >
            شروع تحلیل پوست
          </Link>

        </section>

      </div>
    </main>
  );
}