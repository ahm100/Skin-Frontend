"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { Area } from "react-easy-crop";

import { API_BASE } from "@/lib/api";

import Disclaimer from "@/components/Disclaimer";
import UploadGuide from "@/components/UploadGuide";
import SkinAnalysisResult from "@/components/SkinAnalysisResult";
import ImageCropper from "@/components/image/ImageCropper";

import { processImage } from "@/lib/image/processImage";

import heic2any from "heic2any";

export default function AnalyzePage() {
  const [image, setImage] = useState<File | null>(
    null
  );

  const [imageError, setImageError] =
    useState("");

  const [result, setResult] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(false);

  const [saveToHistory, setSaveToHistory] =
    useState(false);

  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const [imagePreview, setImagePreview] =
    useState<string | null>(null);

  const [croppedAreaPixels, setCroppedAreaPixels] =
    useState<Area | null>(null);

  const resultRef =
    useRef<HTMLDivElement>(null);

  const fileInputRef =
    useRef<HTMLInputElement>(null);

  // =========================
  // File Upload
  // =========================

  async function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    setImageError("");
    setImage(null);
    setResult(null);
    setImagePreview(null);
    setCroppedAreaPixels(null);

    if (!file) {
      setImageError(
        "تصویری انتخاب نشد."
      );

      return;
    }

    // =========================
    // Detect image type
    // =========================

    const fileName =
      file.name.toLowerCase();

    const isJpeg =
      file.type === "image/jpeg" ||
      fileName.endsWith(".jpg") ||
      fileName.endsWith(".jpeg");

    const isPng =
      file.type === "image/png" ||
      fileName.endsWith(".png");

    const isWebp =
      file.type === "image/webp" ||
      fileName.endsWith(".webp");

    const isHeic =
      file.type === "image/heic" ||
      file.type === "image/heif" ||
      fileName.endsWith(".heic") ||
      fileName.endsWith(".heif");

    const isValid =
      isJpeg ||
      isPng ||
      isWebp ||
      isHeic;

    // =========================
    // Validate file
    // =========================

    if (!isValid) {
      console.log(
        "INVALID FILE:",
        {
          name: file.name,
          type: file.type,
          size: file.size,
        }
      );

      setImageError(
        "فرمت تصویر باید JPG، PNG، WEBP یا HEIC باشد."
      );

      e.target.value = "";

      return;
    }

    try {
      // =========================
      // HEIC → JPEG
      // =========================

      let processedFile = file;

      if (isHeic) {
        console.log(
          "HEIC/HEIF detected. Converting to JPEG..."
        );

        const conversionResult =
          await heic2any({
            blob: file,
            toType: "image/jpeg",
            quality: 0.9,
          });

        const jpegBlob =
          Array.isArray(conversionResult)
            ? conversionResult[0]
            : conversionResult;

        processedFile = new File(
          [jpegBlob],
          `${file.name.replace(
            /\.(heic|heif)$/i,
            ""
          )}.jpg`,
          {
            type: "image/jpeg",
            lastModified: Date.now(),
          }
        );

        console.log(
          "HEIC converted successfully:",
          {
            name: processedFile.name,
            type: processedFile.type,
            size: processedFile.size,
          }
        );
      }

      // =========================
      // Create preview
      // =========================

      const previewUrl =
        URL.createObjectURL(
          processedFile
        );

      console.log(
        "VALID IMAGE:",
        {
          originalName: file.name,
          originalType: file.type,
          originalSize: file.size,

          processedName:
            processedFile.name,

          processedType:
            processedFile.type,

          processedSize:
            processedFile.size,
        }
      );

      setImage(processedFile);
      setImagePreview(previewUrl);
    } catch (error) {
      console.error(
        "Image conversion failed:",
        error
      );

      setImageError(
        "امکان آماده‌سازی تصویر وجود نداشت. لطفاً تصویر دیگری انتخاب کنید."
      );

      e.target.value = "";
    }
  }

  // =========================
  // Cleanup preview URL
  // =========================

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(
          imagePreview
        );
      }
    };
  }, [imagePreview]);

  // =========================
  // Authentication
  // =========================

  useEffect(() => {
    const token =
      localStorage.getItem("token");

    setIsLoggedIn(!!token);
  }, []);

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

    if (!imagePreview) {
      setImageError(
        "تصویر برای پردازش آماده نیست."
      );

      return;
    }

    if (!croppedAreaPixels) {
      setImageError(
        "لطفاً ابتدا محدوده تصویر را مشخص کنید."
      );

      return;
    }

    setLoading(true);
    setResult(null);
    setImageError("");

    try {
      // =========================
      // Crop + Resize + Compress
      // =========================

      const processedImage =
        await processImage(
          image,
          croppedAreaPixels
        );

      console.log(
        "Processed image:",
        {
          name:
            processedImage.name,

          type:
            processedImage.type,

          size:
            processedImage.size,
        }
      );

      // =========================
      // Form Data
      // =========================

      const formData =
        new FormData();

      formData.append(
        "image",
        processedImage
      );

      formData.append(
        "saveToHistory",
        saveToHistory.toString()
      );

      // =========================
      // Authentication
      // =========================

      const token =
        localStorage.getItem("token");

      const headers: HeadersInit = {};

      if (token) {
        headers.Authorization =
          `Bearer ${token}`;
      }

      // =========================
      // API
      // =========================

      const response =
        await fetch(
          `${API_BASE}/api/SkinAnalysis/analyze`,
          {
            method: "POST",
            headers,
            body: formData,
          }
        );

      if (!response.ok) {
        const errorText =
          await response.text();

        console.error(
          "Analyze API Error:",
          errorText
        );

        setImageError(
          "در تحلیل تصویر مشکلی پیش آمد. لطفاً دوباره تلاش کنید."
        );

        return;
      }

      const data =
        await response.json();

      console.log(
        "Analyze result:",
        data
      );

      setResult(data);
      setSaveToHistory(false);
    } catch (error) {
      console.error(
        "Analyze request failed:",
        error
      );

      if (
        error instanceof Error &&
        error.message ===
          "IMAGE_TOO_LARGE"
      ) {
        setImageError(
          "حجم تصویر پس از فشرده‌سازی همچنان بیشتر از 5 مگابایت است. لطفاً تصویر دیگری انتخاب کنید."
        );

        return;
      }

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
    console.log(
      "OPEN FILE PICKER"
    );

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
            .heic,
            .heif,
            image/jpeg,
            image/png,
            image/webp,
            image/heic,
            image/heif
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
            JPG، PNG، WEBP یا HEIC
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
      {/* Crop */}
      {/* ========================= */}

      {imagePreview && (
        <ImageCropper
          image={imagePreview}
          onCropComplete={
            setCroppedAreaPixels
          }
        />
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

          <p
            className="
              mt-1
              text-xs
              text-petrol
            "
          >
            حجم اولیه:{" "}
            {(
              image.size /
              (1024 * 1024)
            ).toFixed(2)}{" "}
            MB
          </p>
        </div>
      )}

      {/* ========================= */}
      {/* Save To History */}
      {/* ========================= */}

      {isLoggedIn ? (
        <label
          className="
            mt-4
            flex
            items-center
            gap-2
            text-sm
            text-petrol
            cursor-pointer
          "
        >
          <input
            type="checkbox"
            checked={saveToHistory}
            onChange={(e) =>
              setSaveToHistory(
                e.target.checked
              )
            }
          />

          ذخیره این تحلیل در تاریخچه من
        </label>
      ) : (
        <div
          className="
            mt-4
            max-w-sm
            text-center
            text-sm
            text-petrol
          "
        >
          <p>
            🔒 این تحلیل به‌صورت پیش‌فرض ذخیره نمی‌شود.
          </p>

          <p className="mt-1">
            برای ذخیره نتیجه و تصویر در تاریخچه،
            وارد حساب کاربری شوید.
          </p>

          <button
            type="button"
            onClick={() => {
              window.location.href =
                "/login?returnUrl=/analyze";
            }}
            className="
              mt-2
              font-medium
              text-coral
              hover:underline
            "
          >
            ورود به حساب
          </button>
        </div>
      )}

      {/* ========================= */}
      {/* Analyze Button */}
      {/* ========================= */}

      <button
        type="button"
        onClick={analyze}
        disabled={
          !image ||
          !imagePreview ||
          !croppedAreaPixels ||
          loading
        }
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