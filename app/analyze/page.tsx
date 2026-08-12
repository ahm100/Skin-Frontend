"use client";

import { useState } from "react";
import { API_BASE } from "@/lib/api";
import Disclaimer from "@/components/Disclaimer";
import UploadGuide from "@/components/UploadGuide";
import SkinAnalysisResult from "@/components/SkinAnalysisResult";

export default function AnalyzePage() {
  const [image, setImage] = useState<File | null>(null);
  const [imageError, setImageError] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setImageError("");
    setImage(null);
    setResult(null);

    const file = e.target.files?.[0];

    if (!file) {
      setImageError("تصویری انتخاب نشد.");
      return;
    }

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      setImageError(
        "فرمت تصویر باید JPG، PNG یا WEBP باشد."
      );
      return;
    }

    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
      setImageError(
        "حجم تصویر نباید بیشتر از 5 مگابایت باشد."
      );
      return;
    }

    setImage(file);
  }

  async function analyze() {
    if (!image) {
      setImageError("لطفاً ابتدا یک تصویر انتخاب کنید.");
      return;
    }

    setLoading(true);
    setResult(null);
    setImageError("");

    try {
      const formData = new FormData();

      formData.append("image", image);

      const response = await fetch(
        `${API_BASE}/api/SkinAnalysis/analyze`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorText = await response.text();

        console.log("Analyze API Error:", errorText);

        setImageError(
          "در تحلیل تصویر مشکلی پیش آمد. لطفاً دوباره تلاش کنید."
        );

        return;
      }

      const data = await response.json();

      setResult(data);
    } catch (error) {
      console.error("Analyze request failed:", error);

      setImageError(
        "ارتباط با سرور برقرار نشد. لطفاً اتصال اینترنت را بررسی کنید."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      className="
        min-h-screen
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
          accept="image/jpeg,image/png,image/webp"
          onChange={handleUpload}
          className="hidden"
        />
      </label>

      {imageError && (
        <p
          className="
            mt-3
            text-sm
            text-red-600
            text-center
            max-w-sm
          "
        >
          {imageError}
        </p>
      )}

      {image && (
        <p
          className="
            mt-3
            text-sm
            text-gray-600
            text-center
            max-w-sm
            break-all
          "
        >
          فایل انتخاب شده:
          {" "}
          {image.name}
        </p>
      )}

      <button
        type="button"
        onClick={analyze}
        disabled={loading}
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
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      >
        {loading
          ? "در حال تحلیل..."
          : "شروع تحلیل"}
      </button>

      <Disclaimer />

      {result && (
        <SkinAnalysisResult result={result} />
      )}
    </main>
  );
}