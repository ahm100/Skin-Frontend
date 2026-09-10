import Link from "next/link";
import { notFound } from "next/navigation";
import { blogArticles } from "../data";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const article = blogArticles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | سورنمه`,
    description: article.description,

    alternates: {
      canonical: `/blog/${article.slug}`,
    },

    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      locale: "fa_IR",
    },
  };
}

export default async function BlogArticlePage({
  params,
}: Props) {

  const { slug } = await params;

  const article = blogArticles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <main
      dir="rtl"
      className="
        min-h-screen
        bg-white
        px-6
        py-10
        sm:px-10
      "
    >

      <article
        className="
          mx-auto
          max-w-4xl
        "
      >

        {/* Breadcrumb */}

        <nav
          className="
            text-sm
            text-petrol
            mb-8
          "
        >

          <Link
            href="/"
            className="hover:text-purple-600"
          >
            خانه
          </Link>

          <span className="mx-2">
            /
          </span>

          <Link
            href="/blog"
            className="hover:text-purple-600"
          >
            مقالات
          </Link>

          <span className="mx-2">
            /
          </span>

          <span className="text-petrol">
            {article.title}
          </span>

        </nav>


        {/* Title */}

        <header>

          <h1
            className="
              text-3xl
              sm:text-5xl
              font-extrabold
              leading-tight
              text-petrol
            "
          >
            {article.title}
          </h1>

          <p
            dir="ltr"
            className="
              mt-3
              text-sm
              sm:text-base
              text-gray-400
            "
          >
            {article.englishTitle}
          </p>

        </header>


        {/* Intro */}

        <section
          className="
            mt-8
            rounded-3xl
            bg-gray-50
            border
            border-gray-100
            p-6
            sm:p-8
          "
        >

          <p
            className="
              leading-8
              text-petrol
            "
          >
            {article.intro}
          </p>

        </section>


        {/* Sections */}

        <div className="mt-10">

          {article.sections.map(
            (section, index) => (

              <section
                key={section.title}
                className="mt-10"
              >

                <h2
                  className="
                    text-2xl
                    sm:text-3xl
                    font-extrabold
                    text-petrol
                  "
                >
                  {index + 1}. {section.title}
                </h2>

                <div
                  className="
                    mt-4
                    space-y-4
                  "
                >

                  {section.paragraphs.map(
                    (paragraph) => (

                      <p
                        key={paragraph}
                        className="
                          leading-8
                          text-petrol
                        "
                      >
                        {paragraph}
                      </p>

                    )
                  )}

                </div>

              </section>

            )
          )}

        </div>


        {/* FAQ */}

        <section className="mt-14">

          <h2
            className="
              text-2xl
              sm:text-3xl
              font-extrabold
              text-petrol
            "
          >
            9. سؤالات متداول
          </h2>

          <div
            className="
              mt-6
              space-y-4
            "
          >

            {article.faq.map((item) => (

              <details
                key={item.question}
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  p-5
                  bg-white
                "
              >

                <summary
                  className="
                    cursor-pointer
                    font-bold
                    text-petrol
                  "
                >
                  {item.question}
                </summary>

                <p
                  className="
                    mt-4
                    leading-8
                    text-petrol
                  "
                >
                  {item.answer}
                </p>

              </details>

            ))}

          </div>

        </section>


        {/* AI Disclaimer */}

        <section
          className="
            mt-12
            rounded-2xl
            border
            border-amber-200
            bg-amber-50
            p-5
          "
        >

          <p
            className="
              text-sm
              leading-7
              text-amber-900
            "
          >
            اطلاعات این مقاله صرفاً آموزشی است و جایگزین
            تشخیص، درمان یا مشاوره پزشک نیست.
            نتیجه تحلیل هوش مصنوعی سورنمه نیز تشخیص پزشکی
            قطعی محسوب نمی‌شود.
          </p>

        </section>


        {/* CTA */}

        <section
          className="
            mt-12
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
              text-petrol
            "
          >
            درباره وضعیت پوست خود کنجکاو هستید؟
          </h2>

          <p
            className="
              mt-3
              leading-7
              text-petrol
            "
          >
            یک تصویر از پوست خود ارسال کنید و
            ارزیابی اولیه هوش مصنوعی سورنمه را ببینید.
          </p>

         <Link
  href="/analyze"
  className="
  btn-base
  inline-flex
  mt-6
  rounded-xl
  bg-button-pink
  px-8
  py-3
  text-white
  font-medium
  shadow-md
  shadow-coral/25
  hover:bg-button-pink-hover
  transition
"
>
            شروع تحلیل پوست
          </Link>

        </section>


        {/* Back */}

        <div className="mt-10 text-center">

          <Link
            href="/blog"
            className="
              text-purple-700
              hover:text-purple-900
              font-medium
            "
          >
            ← بازگشت به مقالات
          </Link>

        </div>

      </article>

    </main>
  );
}