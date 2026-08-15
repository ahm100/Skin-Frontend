"use client";

import { useEffect, useRef, useState } from "react";
import { API_BASE } from "@/lib/api";
import Disclaimer from "@/components/Disclaimer";
import UploadGuide from "@/components/UploadGuide";
import SkinAnalysisResult from "@/components/SkinAnalysisResult";

export default function AnalyzePage() {
  const [image, setImage] = useState<File | null>(null);
  const [imageError, setImageError] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const resultRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // =========================
  // File Upload
  // =========================

  function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    console.log("FILE INPUT CHANGED");

    const file = e.target.files?.[0];

    console.log("SELECTED FILE:", file);

    setImageError("");
    setImage(null);
    setResult(null);

    if (!file) {
      setImageError("تصویری انتخاب نشد.");
      return;
    }

    // =========================
    // Allowed image types
    // =========================

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      console.log(
        "INVALID FILE TYPE:",
        file.type
      );

      setImageError(
        "فرمت تصویر باید JPG، PNG یا WEBP باشد."
      );

      e.target.value = "";

      return;
    }

    // =========================
    // Max file size
    // =========================

    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
      console.log(
        "FILE TOO LARGE:",
        file.size
      );

      setImageError(
        "حجم تصویر نباید بیشتر از 5 مگابایت باشد."
      );

      e.target.value = "";

      return;
    }

    // =========================
    // Valid image
    // =========================

    console.log("VALID IMAGE:", {
      name: file.name,
      type: file.type,
      size: file.size,
    });

    setImage(file);
  }

  // =========================
  // Scroll to result
  // =========================

  useEffect(() => {
    if (result) {
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [result]);

  // =========================
  // Analyze
  // =========================

  async function analyze() {
    if (!image) {
      setImageError(
        "لطفاً ابتدا یک تصویر انتخاب کنید."
      );

      return;
    }

    setLoading(true);
    setResult(null);
    setImageError("");

    try {
      const formData = new FormData();

      formData.append("image", image);

      console.log("Sending image:", {
        name: image.name,
        type: image.type,
        size: image.size,
      });

      const response = await fetch(
        `${API_BASE}/api/SkinAnalysis/analyze`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorText = await response.text();

        console.error(
          "Analyze API Error:",
          errorText
        );

        setImageError(
          "در تحلیل تصویر مشکلی پیش آمد. لطفاً دوباره تلاش کنید."
        );

        return;
      }

      const data = await response.json();

      console.log(
        "Analyze result:",
        data
      );

      setResult(data);
    } catch (error) {
      console.error(
        "Analyze request failed:",
        error
      );

      setImageError(
        "ارتباط با سرور برقرار نشد. لطفاً اتصال اینترنت را بررسی کنید."
      );
    } finally {
      setLoading(false);
    }
  }

  // =========================
  // Open File Picker
  // =========================

  function openFilePicker() {
    console.log("OPEN FILE PICKER");

    fileInputRef.current?.click();
  }

  // =========================
  // UI
  // =========================

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
      {/* ========================= */}
      {/* Title */}
      {/* ========================= */}

      <h1
        className="
          text-3xl
          sm:text-4xl
          font-bold
          text-petrol
          text-center
        "
      >
        تحلیل پوست با AI
      </h1>

      {/* ========================= */}
      {/* Description */}
      {/* ========================= */}

      <p
        className="
          mt-3
          text-petrol
          text-center
          max-w-xl
        "
      >
        تصویر پوست خود را آپلود کنید تا هوش مصنوعی
        آن را بررسی کند.
      </p>

      {/* ========================= */}
      {/* Upload Guide */}
      {/* ========================= */}

      <UploadGuide />

      {/* ========================= */}
      {/* File Input */}
      {/* ========================= */}

      <div
        className="
          mt-4
          w-80
          max-w-full
        "
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="
            .jpg,
            .jpeg,
            .png,
            .webp,
            image/jpeg,
            image/png,
            image/webp
          "
          onChange={handleUpload}
          className="sr-only"
        />

        {/* ========================= */}
        {/* Upload Button */}
        {/* ========================= */}

        <button
          type="button"
          onClick={openFilePicker}
          className="
            w-full
            cursor-pointer
            rounded-2xl
            border-2
            border-dashed
            border-gray-300
            bg-white
            p-8
            text-center
            transition
            hover:bg-gray-50
            active:bg-gray-100
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

          <div
            className="
              font-bold
              text-petrol
            "
          >
            انتخاب تصویر پوست
          </div>

          <div
            className="
              mt-2
              text-sm
              text-petrol
            "
          >
            JPG، PNG یا WEBP
          </div>
        </button>
      </div>

      {/* ========================= */}
      {/* Error */}
      {/* ========================= */}

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

      {/* ========================= */}
      {/* Selected File */}
      {/* ========================= */}

      {image && (
        <div
          className="
            mt-3
            w-full
            max-w-sm
            rounded-xl
            bg-gray-50
            border
            border-gray-200
            px-4
            py-3
            text-center
          "
        >
          <p
            className="
              text-sm
              text-petrol
            "
          >
            فایل انتخاب شده:
          </p>

          <p
            className="
              mt-1
              text-sm
              font-medium
              text-petrol
              break-all
            "
          >
            {image.name}
          </p>
        </div>
      )}

      {/* ========================= */}
      {/* Analyze Button */}
      {/* ========================= */}

     <button
  type="button"
  onClick={analyze}
  disabled={!image || loading}
  className="
    mt-4
    rounded-xl

    bg-gradient-to-l
    from-coral
    via-[#E97861]
    to-[#F4A896]

    px-8
    py-3

    text-white
    font-medium

    shadow-md
    shadow-coral/25

    transition

    disabled:opacity-40
    disabled:cursor-not-allowed
    disabled:hover:opacity-40

    hover:opacity-90
  "
>
        {loading
          ? "در حال تحلیل..."
          : "شروع تحلیل"}
      </button>

      {/* ========================= */}
      {/* Result */}
      {/* ========================= */}

      {result && (
        <div
          ref={resultRef}
          className="
            w-full
            max-w-4xl
            mt-10
            scroll-mt-24
          "
        >
          <SkinAnalysisResult
            result={result}
          />
        </div>
      )}

      {/* ========================= */}
      {/* Disclaimer */}
      {/* ========================= */}

      <Disclaimer />
    </main>
  );
}