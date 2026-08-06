import ProductCard from "./ProductCard";


type SkinAnalysisResultProps = {
  result: any;
};


export default function SkinAnalysisResult({
  result,
}: SkinAnalysisResultProps) {

  return (

    <section
      className="
        mt-8
        w-full
        max-w-3xl
      "
    >


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


      </div>




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
        result.recommendation.map(
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