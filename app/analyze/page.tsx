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


    try {

      const response = await fetch(
        "https://localhost:7004/api/SkinAnalysis/analyze",
        {
          method: "POST",
          body: formData
        }
      );


      if (!response.ok) {

        console.log(
          await response.text()
        );

        return;
      }


      const data = await response.json();

      setResult(data);


    }
    catch(error){

      console.log(error);

    }
    finally {

      setLoading(false);

    }

  }




  return (

    <main
      className="
      min-h-screen
      p-10
      flex
      flex-col
      items-center
      bg-gray-50
      "
    >


      <h1 className="text-4xl font-bold">
        تحلیل پوست با هوش مصنوعی
      </h1>


      <p className="mt-4 text-gray-600">
        تصویر پوست خود را آپلود کنید و محصولات مناسب دریافت کنید.
      </p>



      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="
        mt-8
        border
        p-3
        rounded
        bg-white
        "
      />



      {
        image &&
        <p className="mt-3 text-sm">
          فایل:
          {" "}
          {image.name}
        </p>
      }




      <button

        onClick={analyze}

        disabled={loading}

        className="
        mt-6
        bg-black
        text-white
        px-8
        py-3
        rounded-xl
        disabled:opacity-50
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
          max-w-4xl
          "
        >



          <div
            className="
            bg-white
            rounded-xl
            shadow
            p-6
            "
          >


            <h2 className="text-2xl font-bold">
              نتیجه تحلیل پوست
            </h2>



            <p className="mt-4">

              نوع پوست:
              {" "}
              <b>
                {result.analysis.skin_type.label}
              </b>

            </p>



            <p>

              میزان اطمینان:
              {" "}

              {
                Math.round(
                  result.analysis.skin_type.confidence * 100
                )
              }

              %

            </p>




            <h3 className="font-bold mt-5">
              وضعیت‌های شناسایی شده:
            </h3>



            {
              result.analysis.condition.map(
                (item:any,index:number)=>(

                  <div key={index}>

                    {item.label}

                    {" - "}

                    {
                      Math.round(
                        item.confidence * 100
                      )
                    }

                    %

                  </div>

                )
              )
            }


          </div>






          <h2
            className="
            text-2xl
            font-bold
            mt-10
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
                mt-5
                bg-white
                rounded-xl
                shadow
                p-6
                "

              >



                <h3 className="text-xl font-bold">

                  {item.name}

                </h3>




                <p className="mt-2 text-gray-700">

                  {item.reason}

                </p>




                <p className="mt-2">

                  امتیاز:
                  {" "}
                  {item.score}

                </p>





                {
                  item.offers &&
                  item.offers.length > 0 &&


                  <div className="mt-4">


                    <h4 className="font-bold">

                      فروشندگان:

                    </h4>



                    {
                      item.offers.map(
                        (offer:any,i:number)=>(

                        <div
                          key={i}
                          className="
                          mt-2
                          border-b
                          pb-2
                          "
                        >

                          {offer.sellerName}

                          {" - "}

                          {offer.price.toLocaleString()}

                          {" تومان"}

                        </div>

                        )
                      )
                    }


                  </div>

                }



              </div>


              )
            )

          }



        </section>

      }




    </main>

  );

}