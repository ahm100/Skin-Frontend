"use client";

import { useState } from "react";
import { API_BASE } from "@/lib/api";

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
    }

  }



  async function analyze() {


    if (!image) {

      alert("لطفا تصویر انتخاب کنید");

      return;

    }


    setLoading(true);



    const formData = new FormData();

    formData.append(
      "image",
      image
    );



    const response = await fetch(
      `${API_BASE}/api/SkinAnalysis/analyze`,
      {
        method: "POST",
        body: formData
      }
    );



    if (!response.ok) {

      console.log(await response.text());

      setLoading(false);

      return;

    }



    const data = await response.json();


    setResult(data);


    setLoading(false);

  }




  return (

    <main
      className="
        p-6
        sm:p-10
        flex
        flex-col
        items-center
      "
    >



      <h1
        className="
          text-3xl
          sm:text-4xl
          font-bold
          text-gray-900
        "
      >
        تحلیل پوست با AI
      </h1>




      <p
        className="
          mt-3
          text-gray-600
          text-center
        "
      >
        تصویر پوست خود را آپلود کنید تا هوش مصنوعی آن را بررسی کند.
      </p>





      <div
        className="
          mt-5
          rounded-2xl
          bg-gray-50
          p-4
          text-right
          w-full
          max-w-md
          border
        "
      >

        <h3
          className="
            font-bold
            text-gray-800
          "
        >
          راهنمای گرفتن عکس برای تحلیل بهتر
        </h3>


        <ul
          className="
            mt-3
            text-sm
            text-gray-600
            space-y-2
          "
        >

          <li>
            ✓ صورت کامل داخل تصویر باشد
          </li>

          <li>
            ✓ از نور طبیعی و کافی استفاده کنید
          </li>

          <li>
            ✓ عکس بدون فیلتر یا افکت دوربین باشد
          </li>

          <li>
            ✓ عینک، ماسک یا پوشش روی صورت نباشد
          </li>

          <li>
            ✓ صورت روبه‌روی دوربین قرار بگیرد
          </li>

        </ul>


      </div>





      <label
        className="
          mt-4
          cursor-pointer
          border-2
          border-dashed
          rounded-2xl
          p-8
          w-80
          text-center
          hover:bg-gray-50
          transition
        "
      >


        <div
          className="
            text-4xl
            mb-3
          "
        >
          📷
        </div>



        <div className="font-bold">
          آپلود تصویر پوست
        </div>



        <div
          className="
            text-sm
            text-gray-500
            mt-2
          "
        >
          JPG, PNG یا WEBP
        </div>




        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="hidden"
        />



      </label>





      {
        image &&

        <p
          className="
            mt-3
            text-sm
            text-gray-600
          "
        >
          فایل انتخاب شده:
          {" "}
          {image.name}
        </p>

      }






      <button
        onClick={analyze}
        className="
          mt-4
          rounded-xl
          bg-gradient-to-r
          from-violet-500
          to-pink-500
          px-8
          py-3
          text-white
          font-medium
          shadow-md
          hover:opacity-90
          transition
        "
      >

        {
          loading
          ?
          "در حال تحلیل..."
          :
          "شروع تحلیل"
        }


      </button>







      {
        result &&

        <section
          className="
            mt-8
            w-full
            max-w-3xl
          "
        >



          <h2
            className="
              text-2xl
              font-bold
            "
          >
            نتیجه تحلیل
          </h2>




          <p className="mt-4">

            نوع پوست:
            {" "}
            {result.analysis.skin_type.label}

          </p>







          <h2
            className="
              text-2xl
              font-bold
              mt-6
            "
          >
            محصولات پیشنهادی
          </h2>





          {
            result.recommendation.map(
              (item:any,index:number)=>(

                <div
                  key={index}
                  className="
                    border
                    rounded-xl
                    p-5
                    mt-4
                  "
                >

                  <h3 className="text-xl font-bold">
                    {item.name}
                  </h3>


                  <p className="mt-2">
                    {item.reason}
                  </p>


                  <p className="mt-2">
                    امتیاز:
                    {" "}
                    {item.score}
                  </p>


                </div>

              )
            )
          }





        </section>

      }




    </main>

  );

}