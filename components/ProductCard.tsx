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
          text-petrol
        "
      >
        {name}
      </h3>




      <p
        className="
          mt-3
          text-petrol
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
            mt-6
            border-t
            pt-5
          "
        >


          <h4
            className="
              font-bold
              text-petrol
            "
          >
            🛒 فروشگاه‌ها
          </h4>





          <div
            className="
              mt-3
              space-y-3
            "
          >



            {
              offers.map(
                (
                  offer,
                  index
                ) => (


                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      bg-gray-50
                      p-4
                    "
                  >



                    <div
                      className="
                        text-right
                      "
                    >


                      <div
                        className="
                          font-bold
                          text-petrol
                        "
                      >

                        {offer.sellerName}


                        {
                          offer.isSponsored &&

                          <span
                            className="
                              mr-2
                              rounded-full
                              bg-pink-100
                              px-2
                              py-1
                              text-xs
                              text-pink-700
                            "
                          >
                            ⭐ اسپانسری
                          </span>

                        }


                      </div>




                      <div
                        className="
                          mt-1
                          text-sm
                          text-petrol
                        "
                      >

                        {
                          offer.price.toLocaleString("fa-IR")
                        }

                        {" "}
                        تومان

                      </div>



                    </div>


                    <a
                      href={offer.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      btn-base
                      rounded-xl  
                      bg-button-pink
                      px-4
                      py-2
                      text-sm
                      font-bold
                      text-white
                      shadow-md
                      shadow-coral/25
                      hover:bg-button-pink-hover
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