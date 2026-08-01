"use client";

import { useState } from "react";

export default function AnalyzePage() {

  const [image, setImage] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);


  function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {

    const file = e.target.files?.[0];

    if (file) {
      setImage(file);
      setResult(null);
    }
  }


  async function analyze() {

    if (!image) {
      alert("لطفا تصویر انتخاب کنید");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);

    try {

      const response = await fetch(
        "https://localhost:7004/api/SkinAnalysis/analyze",
        {
          method: "POST",
          body: formData
        }
      );

      const data = await response.json();

      setResult(data);

    } catch {

      alert("خطا در ارتباط با سرور");

    } finally {

      setLoading(false);

    }

  }


  return (

    <main className="min-h-screen max-w-5xl mx-auto p-10">

      <h1 className="text-4xl font-bold text-center">
        تحلیل پوست با هوش مصنوعی
      </h1>

      <p className="text-center text-gray-500 mt-3">
        تصویر پوست خود را آپلود کنید و نتیجه تحلیل را مشاهده کنید.
      </p>


      <div className="flex flex-col items-center mt-10">

        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
        />

        {
          image &&
          <>
            <img
              src={URL.createObjectURL(image)}
              alt="preview"
              className="mt-6 w-72 rounded-xl shadow border"
            />

            <p className="mt-3 text-gray-600">
              {image.name}
            </p>
          </>
        }

        <button
          onClick={analyze}
          disabled={loading}
          className="
            mt-8
            bg-black
            text-white
            px-10
            py-3
            rounded-xl
            disabled:opacity-50
          "
        >
          {
            loading
              ? "در حال تحلیل..."
              : "شروع تحلیل"
          }
        </button>

      </div>



      {
        result &&

        <section className="mt-14">

          <h2 className="text-3xl font-bold">
            نتیجه تحلیل
          </h2>


          <div className="mt-5 border rounded-xl p-6 bg-gray-50">

            <p>
              <b>نوع پوست:</b>
              {" "}
              {result.analysis.skin_type.label}
            </p>

            <p className="mt-2">
              <b>اعتماد مدل:</b>
              {" "}
              {(result.analysis.skin_type.confidence * 100).toFixed(1)}%
            </p>

            <div className="mt-5">

              <b>وضعیت‌های تشخیص داده شده:</b>

              <ul className="list-disc ml-6 mt-2">

                {
                  result.analysis.condition.map(
                    (c: any, i: number) => (

                      <li key={i}>
                        {c.label}
                        {" "}
                        ({(c.confidence * 100).toFixed(1)}%)
                      </li>

                    ))
                }

              </ul>

            </div>

          </div>



          {
            result.recommendation[0]?.score === 0 ?

              <div className="mt-8 rounded-xl bg-red-100 border border-red-300 p-6">

                <h3 className="text-xl font-bold text-red-700">
                  ⚠️ نیاز به بررسی پزشکی
                </h3>

                <p className="mt-3">
                  بر اساس تحلیل هوش مصنوعی، احتمال وجود یک بیماری پوستی وجود دارد.
                  این سامانه جایگزین پزشک نیست و توصیه می‌شود برای تشخیص قطعی به متخصص پوست مراجعه کنید.
                </p>

              </div>

              :

              <>

                <h2 className="text-3xl font-bold mt-12">
                  محصولات پیشنهادی
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mt-6">

                  {
                    result.recommendation.map(
                      (item: any, index: number) => (

                        <div
                          key={index}
                          className="border rounded-xl p-5 shadow-sm"
                        >

                          <h3 className="text-xl font-bold">
                            {item.name}
                          </h3>

                          <p className="mt-2 text-gray-600">
                            {item.reason}
                          </p>

                          <p className="mt-2">
                            ⭐ امتیاز:
                            {" "}
                            {item.score}
                          </p>

                          <div className="mt-4">

                            <h4 className="font-bold">
                              فروشندگان
                            </h4>

                            {
                              item.offers.map(
                                (offer: any, i: number) => (

                                  <div
                                    key={i}
                                    className="flex justify-between border-b py-2"
                                  >

                                    <span>
                                      {offer.sellerName}
                                    </span>

                                    <span>
                                      {Number(offer.price).toLocaleString()}
                                      {" "}
                                      تومان
                                    </span>

                                  </div>

                                ))
                            }

                          </div>

                        </div>

                      ))
                  }

                </div>

              </>

          }

        </section>

      }

    </main>

  );

}