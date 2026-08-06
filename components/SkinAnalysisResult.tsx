import ProductCard from "./ProductCard";


type SkinAnalysisResultProps = {
  result: any;
};


export default function SkinAnalysisResult({
  result,
}: SkinAnalysisResultProps) {


  const conditions =
    result.analysis.condition ?? [];



  return (

    <section
      className="
        mt-8
        w-full
        max-w-3xl
      "
    >



      {/* AI Result Card */}
      <div
        className="
          rounded-3xl
          bg-white
          border
          border-purple-100
          p-6
          shadow-lg
        "
      >


        <h2
          className="
            text-2xl
            font-extrabold
            text-purple-900
          "
        >
          ✨ نتیجه تحلیل پوست
        </h2>




        {/* Skin Type */}
        <div
          className="
            mt-5
            rounded-2xl
            bg-purple-50
            p-5
          "
        >

          <p
            className="
              text-sm
              text-gray-500
            "
          >
            نوع پوست شناسایی شده
          </p>



          <p
            className="
              mt-2
              text-2xl
              font-bold
              text-purple-700
            "
          >
            {result.analysis.skin_type.label}
          </p>


        </div>





        {/* Conditions */}
        {
          conditions.length > 0 &&

          <div
            className="
              mt-4
              rounded-2xl
              bg-pink-50
              p-5
            "
          >

            <p
              className="
                text-sm
                text-gray-500
              "
            >
              وضعیت‌های شناسایی شده
            </p>




            <div
              className="
                mt-3
                space-y-2
              "
            >

              {
                conditions.map(
                  (item:any,index:number)=>(

                    <div
                      key={index}
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        bg-white
                        border
                        px-4
                        py-3
                      "
                    >


                      <span
                        className="
                          font-bold
                          text-pink-700
                        "
                      >
                        {item.label}
                      </span>



                      <span
                        className="
                          text-sm
                          text-gray-500
                        "
                      >
                        {
                          (item.confidence * 100)
                          .toFixed(1)
                        }%
                      </span>



                    </div>

                  )
                )

              }


            </div>


          </div>

        }



      </div>






      {/* Products */}

      <h2
        className="
          text-2xl
          font-extrabold
          text-purple-900
          mt-8
        "
      >
        🧴 محصولات پیشنهادی
      </h2>





      {
        result.recommendation?.map(
          (item:any,index:number)=>(

            <ProductCard
              key={index}
              name={item.name}
              reason={item.reason}
              score={item.score}
            />

          )
        )
      }





    </section>

  );

}