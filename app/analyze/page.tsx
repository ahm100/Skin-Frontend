"use client";

import { useState } from "react";


export default function AnalyzePage() {


  const [image, setImage] = useState<File | null>(null);

  const [result, setResult] = useState<any>(null);

  const [loading, setLoading] = useState(false);



  function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ){

    const file = e.target.files?.[0];

    if(file)
      setImage(file);

  }



  async function analyze(){


    if(!image){

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
      "https://localhost:7004/api/SkinAnalysis/analyze",
      {
        method:"POST",
        body:formData
      }
    );



    if(!response.ok){

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
        min-h-screen
        p-10
        flex
        flex-col
        items-center
      "
    >


      <h1 className="text-4xl font-bold">
        تحلیل پوست با AI
      </h1>



      <p className="mt-4 text-gray-600">

        تصویر پوست خود را آپلود کنید تا هوش مصنوعی آن را بررسی کند.

      </p>




      {/* Upload Box */}

      <label
        className="
          mt-8
          cursor-pointer
          border-2
          border-dashed
          rounded-xl
          p-8
          w-80
          text-center
          hover:bg-gray-50
        "
      >


        <div className="text-4xl mb-3">
          📷
        </div>


        <div className="font-bold">
          آپلود تصویر پوست
        </div>


        <div className="text-sm text-gray-500 mt-2">
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

        <p className="mt-3 text-sm">

          فایل انتخاب شده:
          {" "}
          {image.name}

        </p>
      }




      <button

        onClick={analyze}

        className="
          mt-6
          bg-black
          text-white
          px-8
          py-3
          rounded-xl
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
            mt-10
            w-full
            max-w-3xl
          "
        >


          <h2 className="text-2xl font-bold">

            نتیجه تحلیل

          </h2>



          <div className="mt-4">

            <p>

              نوع پوست:
              {" "}
              {result.analysis.skin_type.label}

            </p>


            <p>

              Confidence:
              {" "}
              {result.analysis.skin_type.confidence}

            </p>


          </div>





          <h2 className="text-2xl font-bold mt-8">

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


                  <p>

                    {item.reason}

                  </p>


                  <p>

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