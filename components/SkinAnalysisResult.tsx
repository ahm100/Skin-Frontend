import Link from "next/link";
import ProductCard from "./ProductCard";
import { getConditionBlogUrl } from "@/app/blog/mapping";

type SkinAnalysisResultProps = {
  result: any;
};

function translateSkinType(type: string) {
  const map: Record<string, string> = {
    oily: "چرب",
    dry: "خشک",
    normal: "نرمال",
    combination: "مختلط",
  };

  return map[type] ?? type;
}

function translateCondition(condition: string) {
  const map: Record<string, string> = {
    Acne: "جوش و آکنه",

    Eczema: "اگزما",

    Rosacea: "روزاسه",

    Psoriasis: "پسوریازیس",

    Vitiligo: "ویتیلیگو",

    Melanoma: "ملانوما",

    Bullous: "پمفیگوئید بولوز",

    Lichen: "لیکن پلان",

    "Atopic Dermatitis":
      "درماتیت آتوپیک",

    "Drug Eruption":
      "واکنش دارویی پوست",

    "Seborrheic Dermatitis":
      "درماتیت سبوره‌ای",

    "Unknown Normal":
      "پوست نرمال",
  };

  return map[condition] ?? condition;
}

function translateReason(reason: string) {
  if (!reason) {
    return "";
  }

  return reason
    .replaceAll("oily", "چرب")
    .replaceAll("dry", "خشک")
    .replaceAll("normal", "نرمال")
    .replaceAll("combination", "مختلط");
}

function confidenceText(confidence: number) {
  if (confidence >= 0.75) {
    return "زیاد";
  }

  if (confidence >= 0.5) {
    return "متوسط";
  }

  return "کم";
}

export default function SkinAnalysisResult({
  result,
}: SkinAnalysisResultProps) {
  const skinType =
    result?.analysis?.skin_type;

  const conditions =
    result?.analysis?.condition ?? [];

  const visibleConditions =
    conditions.filter(
      (item: any) =>
        item?.confidence >= 0.5
    );

  return (
    <section
      className="
        mt-8
        w-full
        max-w-3xl
        mx-auto
      "
    >

      {/* ========================= */}
      {/* AI Result */}
      {/* ========================= */}

      <div
        className="
          rounded-3xl
          bg-white
          border
          border-purple-100
          p-5
          sm:p-6
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


        {/* ========================= */}
        {/* Skin Type */}
        {/* ========================= */}

        {skinType && (
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
              {translateSkinType(
                skinType.label
              )}
            </p>


            <p
              className="
                mt-3
                text-xs
                text-gray-500
              "
            >
              نتیجه توسط هوش مصنوعی تخمین زده شده است.
            </p>

          </div>
        )}


        {/* ========================= */}
        {/* Conditions */}
        {/* ========================= */}

        {visibleConditions.length > 0 && (
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
                space-y-3
              "
            >

              {visibleConditions.map(
                (
                  item: any,
                  index: number
                ) => {
                  const blogUrl =
                    getConditionBlogUrl(
                      item?.label
                    );

                  const conditionTitle =
                    translateCondition(
                      item?.label
                    );

                  return (
                    <div
                      key={`${item?.label}-${index}`}
                      className="
                        rounded-xl
                        bg-white
                        border
                        border-pink-100
                        p-4
                      "
                    >

                      {/* Condition name */}

                      <p
                        className="
                          font-bold
                          text-pink-700
                        "
                      >
                        ✓ {conditionTitle}
                      </p>


                      {/* Confidence */}

                      <p
                        className="
                          mt-1
                          text-sm
                          text-gray-500
                        "
                      >
                        اطمینان تحلیل:
                        {" "}
                        {confidenceText(
                          item?.confidence
                        )}
                      </p>


                      {/* Blog link */}

                      {blogUrl && (
                        <Link
                          href={blogUrl}
                          className="
                            inline-flex
                            items-center
                            mt-3
                            rounded-xl
                            bg-purple-100
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-purple-800
                            hover:bg-purple-200
                            transition
                          "
                        >
                          درباره {conditionTitle} بیشتر بخوانید
                          <span className="mr-2">
                            ←
                          </span>
                        </Link>
                      )}

                    </div>
                  );
                }
              )}

            </div>

          </div>
        )}

      </div>


      {/* ========================= */}
      {/* Products */}
      {/* ========================= */}

      {result?.recommendation?.length > 0 && (
        <>
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


          <div
            className="
              mt-4
              space-y-4
            "
          >

            {result.recommendation.map(
              (
                item: any,
                index: number
              ) => (
                <ProductCard
                  key={index}
                  name={item.name}
                  reason={translateReason(
                    item.reason
                  )}
                  score={item.score}
                  offers={item.offers}
                />
              )
            )}

          </div>
        </>
      )}

    </section>
  );
}