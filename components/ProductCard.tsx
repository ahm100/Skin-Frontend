type ProductCardProps = {
  name: string;
  reason: string;
  score: number;
};


export default function ProductCard({
  name,
  reason,
  score,
}: ProductCardProps) {

  return (
    <div
      className="
        mt-4
        rounded-3xl
        bg-white
        border
        border-pink-100
        p-6
        shadow-md
        hover:shadow-xl
        transition
      "
    >

      <h3
        className="
          text-xl
          font-extrabold
          text-gray-900
        "
      >
        {name}
      </h3>


      <p
        className="
          mt-3
          text-gray-600
        "
      >
        {reason}
      </p>


      <p
        className="
          mt-3
          font-bold
          text-pink-600
        "
      >
        امتیاز:
        {" "}
        {score}
      </p>


    </div>
  );
}