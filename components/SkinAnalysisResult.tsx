import ProductCard from "./ProductCard";


type SkinAnalysisResultProps = {
  result: any;
};



function translateSkinType(type: string) {

  const map: any = {
    oily: "چرب",
    dry: "خشک",
    normal: "نرمال",
    combination: "مختلط",
  };


  return map[type] ?? type;

}




function translateCondition(condition: string) {

  const map: any = {

    Acne: "جوش و آکنه",

    Eczema: "اگزما",

    Rosacea: "قرمزی پوست",

    Psoriasis: "پسوریازیس",

    Vitiligo: "ویتیلیگو",

    Melanoma: "ملانوما",

    "Atopic Dermatitis":
      "درماتیت آتوپیک",

    "Drug Eruption":
      "واکنش دارویی پوست",

    "Seborrheic Dermatitis":
      "درماتیت سبوره‌ای",

  };


  return map[condition] ?? condition;

}





function confidenceText(confidence: number) {

  if (confidence >= 0.75)
    return "زیاد";


  if (confidence >= 0.5)
    return "متوسط";


  return "کم";

}





export default function SkinAnalysisResult({
  result,
}: SkinAnalysisResultProps) {


  const conditions =
    result?.analysis?.condition ?? [];



  const skinType =
    result?.analysis?.skin_type;



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





        {
          skinType &&

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
              نوع پوست تخمینی
            </p>



            <p
              className="
                mt-2
                text-2xl
                font-bold
                text-purple-700
              "
            >
              {
                translateSkinType(
                  skinType.label
                )
              }
            </p>



            {
              skinType.confidence &&

              <p
                className="
                  mt-2
                  text-sm
                  text-gray-600
                "
              >

                میزان اطمینان:
                {" "}
                {
                  confidenceText(
                    skinType.confidence
                  )
                }

              </p>

            }


          </div>

        }






        {
          conditions.length > 0 &&

          <div
            className="
              mt-5
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
              نشانه‌های احتمالی مشاهده شده
            </p>





            <div
              className="
                mt-3
                space-y-2
              "
            >



              {
                conditions
                  .filter(
                    (item:any)=>
                      item.confidence >= 0.5
                  )
                  .map(
                    (
                      item:any,
                      index:number
                    ) => (


                      <div
                        key={index}
                        className="
                          rounded-xl
                          bg-white
                          border
                          px-4
                          py-3
                        "
                      >



                        <div
                          className="
                            font-bold
                            text-pink-700
                          "
                        >

                          ✓
                          {" "}
                          {
                            translateCondition(
                              item.label
                            )
                          }

                        </div>




                        <div
                          className="
                            mt-1
                            text-sm
                            text-gray-500
                          "
                        >

                          اطمینان:
                          {" "}
                          {
                            confidenceText(
                              item.confidence
                            )
                          }

                        </div>


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
          mt-8
          text-2xl
          font-extrabold
          text-purple-900
        "
      >
        🧴 محصولات پیشنهادی
      </h2>





      {
        result?.recommendation?.map(
          (
            item:any,
            index:number
          ) => (


            <ProductCard
              key={index}
              name={item.name}
              reason={item.reason}
              score={item.score}
              offers={item.offers}
            />


          )
        )
      }





    </section>

  );

}