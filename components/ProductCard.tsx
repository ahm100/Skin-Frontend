type Offer = {
  sellerName: string;
  price: number;
  buyUrl: string;
  isSponsored: boolean;
};


type ProductCardProps = {
  name: string;
  reason: string;
  score: number;
  offers?: Offer[];
};



export default function ProductCard({
  name,
  reason,
  score,
  offers = [],
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
          text-purple-600
        "
      >
        امتیاز AI:
        {" "}
        {score}
      </p>




      {
        offers.length > 0 &&

        <div
          className="
            mt-5
            border-t
            pt-4
          "
        >

          <h4
            className="
              font-bold
              text-gray-800
            "
          >
            خرید از فروشگاه‌ها
          </h4>



          <div
            className="
              mt-3
              space-y-3
            "
          >


            {
              offers.map(
                (offer,index)=>(

                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      bg-gray-50
                      p-3
                    "
                  >

                    <div>

                      <div
                        className="
                          font-bold
                        "
                      >
                        {offer.sellerName}

                        {
                          offer.isSponsored &&
                          <span
                            className="
                              ml-2
                              text-xs
                              rounded-full
                              bg-pink-100
                              px-2
                              py-1
                              text-pink-700
                            "
                          >
                            اسپانسری
                          </span>
                        }

                      </div>


                      <div
                        className="
                          text-sm
                          text-gray-600
                        "
                      >
                        {offer.price.toLocaleString()}
                        {" "}
                        تومان
                      </div>

                    </div>



                    <a
                      href={offer.buyUrl}
                      target="_blank"
                      className="
                        rounded-xl
                        bg-gradient-to-r
                        from-violet-500
                        to-pink-500
                        px-4
                        py-2
                        text-white
                        text-sm
                        font-bold
                      "
                    >
                      خرید
                    </a>


                  </div>

                )
              )
            }


          </div>


        </div>

      }


    </div>

  );

}