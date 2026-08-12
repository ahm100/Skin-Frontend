"use client";

import { useState } from "react";
import { API_BASE } from "@/lib/api";
import Disclaimer from "@/components/Disclaimer";
import UploadGuide from "@/components/UploadGuide";
import ProductCard from "@/components/ProductCard";
import SkinAnalysisResult from "@/components/SkinAnalysisResult";

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



      <UploadGuide />

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
          via-purple-400
          to-pink-400
          px-8
          py-3
          text-gray-800
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

{/* disclaimer */}

     <Disclaimer />





   {
  result &&
  <SkinAnalysisResult result={result} />
}



    </main>

  );

}