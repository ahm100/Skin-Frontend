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

type SkinQuestion = {
  key: string;
  condition: string;
  question: string;
  type: string;
  required: boolean;
  options: string[];
};

type SkinQuestionAnswer = {
  key: string;
  answer: string;
};

export default function AnalyzePage() {
  const [image, setImage] =
    useState<File | null>(null);

  const [processedImage, setProcessedImage] =
    useState<File | null>(null);

  const [imageError, setImageError] =
    useState("");

  const [result, setResult] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(false);

  const [refining, setRefining] =
    useState(false);

  const [saveToHistory, setSaveToHistory] =
    useState(false);

  const [requestedCategory, setRequestedCategory] =
  useState("all");

  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const [imagePreview, setImagePreview] =
    useState<string | null>(null);

  const [croppedAreaPixels, setCroppedAreaPixels] =
    useState<Area | null>(null);

  // =========================
  // Skin Questions
  // =========================

  const [questions, setQuestions] =
    useState<SkinQuestion[]>([]);

  const [answers, setAnswers] =
    useState<SkinQuestionAnswer[]>([]);

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
    setProcessedImage(null);
    setResult(null);
    setQuestions([]);
    setAnswers([]);
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

        const {
          default: heic2any,
        } = await import("heic2any");

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
      // Create Preview
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
          processedName: processedFile.name,
          processedType: processedFile.type,
          processedSize: processedFile.size,
        }
      );

      setImage(processedFile);
      setImagePreview(previewUrl);

    } catch (error) {
      console.error(
        "Image preparation failed:",
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
  // Set Question Answer
  // =========================

  function setQuestionAnswer(
    key: string,
    answer: string
  ) {
    setAnswers((current) => {
      const existingIndex =
        current.findIndex(
          (x) => x.key === key
        );

      if (existingIndex === -1) {
        return [
          ...current,
          {
            key,
            answer,
          },
        ];
      }

      const updated = [...current];

      updated[existingIndex] = {
        key,
        answer,
      };

      return updated;
    });
  }

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
    setQuestions([]);
    setAnswers([]);
    setProcessedImage(null);
    setImageError("");

    try {
      // =========================
      // Crop + Resize + Compress
      // =========================

      const finalImage =
        await processImage(
          image,
          croppedAreaPixels
        );

      console.log(
        "Processed image:",
        {
          name: finalImage.name,
          type: finalImage.type,
          size: finalImage.size,
        }
      );

      // Keep the exact processed image
      // for saving after refine.

      setProcessedImage(finalImage);

      // =========================
      // Form Data
      // =========================

      const formData =
        new FormData();

      formData.append(
        "image",
        finalImage
      );

      // IMPORTANT:
      // Analyze must NOT save history.

      formData.append(
        "saveToHistory",
        "false"
      );

      formData.append(
    "requestedCategory",
    requestedCategory
      );
      // =========================
      // Authentication
      // =========================

      const token =
        localStorage.getItem(
          "token"
        );

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

      // =========================
      // Questions
      // =========================

      setQuestions(
        Array.isArray(data.questions)
          ? data.questions
          : []
      );

      setAnswers([]);

      // DO NOT reset saveToHistory here.
      // User's choice must survive until refine.

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
  // Refine Analysis
  // =========================

  async function refineAnalysis() {
    if (!result?.analysis) {
      setImageError(
        "اطلاعات تحلیل برای تکمیل نتیجه موجود نیست."
      );
      return;
    }

    if (saveToHistory && !processedImage) {
      setImageError(
        "تصویر آماده ذخیره نیست. لطفاً دوباره تحلیل را انجام دهید."
      );
      return;
    }

    setRefining(true);
    setImageError("");

    try {
      // =========================
      // Form Data
      // =========================

      const formData =
        new FormData();

      if (processedImage) {
        formData.append(
          "image",
          processedImage
        );
      }

      formData.append(
        "analysis",
        JSON.stringify(
          result.analysis
        )
      );

      formData.append(
        "answers",
        JSON.stringify(
          answers
        )
      );

      formData.append(
        "saveToHistory",
        saveToHistory.toString()
      );

      formData.append(
        "requestedCategory",
        requestedCategory
      );

      // =========================
      // Authentication
      // =========================

      const token =
        localStorage.getItem(
          "token"
        );

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
          `${API_BASE}/api/SkinAnalysis/refine`,
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
          "Refine API Error:",
          errorText
        );

        setImageError(
          "در پردازش پاسخ‌ها مشکلی پیش آمد. لطفاً دوباره تلاش کنید."
        );

        return;
      }

      const data =
        await response.json();

      console.log(
        "Refine result:",
        data
      );

      // =========================
      // Final Result
      // =========================

      setResult(data);

      // Questions are no longer needed

      setQuestions([]);

    } catch (error) {
      console.error(
        "Refine request failed:",
        error
      );

      setImageError(
        "ارتباط با سرور برقرار نشد. لطفاً اتصال اینترنت را بررسی کنید."
      );

    } finally {
      setRefining(false);
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
            btn-base
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
              text-button-pink
              hover:underline
            "
          >
            ورود به حساب
          </button>
        </div>
      )}


      {/* ========================= */}
{/* Requested Product Category */}
{/* ========================= */}

<div className="mt-5 w-full max-w-md">
  <label
    htmlFor="requested-category"
    className="mb-2 block text-sm font-medium text-petrol"
  >
    چه نوع محصولی می‌خواهی؟
  </label>

  <select
    id="requested-category"
    value={requestedCategory}
    onChange={(e) =>
      setRequestedCategory(e.target.value)
    }
    disabled={loading || refining}
    className="
      w-full
      rounded-xl
      border
      border-gray-300
      bg-white
      px-4
      py-3
      text-sm
      text-petrol
      outline-none
      focus:border-button-pink
    "
  >
    <option value="all">
      فرقی نمی‌کند
    </option>

    <option value="cleanser">
      شوینده
    </option>

    <option value="moisturizer">
      مرطوب‌کننده
    </option>

    <option value="serum">
      سرم
    </option>

    <option value="sunscreen">
      ضد آفتاب
    </option>

    <option value="treatment">
      محصول مراقبتی/درمانی
    </option>
  </select>
</div>

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
          loading ||
          refining
        }
        className="
          btn-base
          mt-4
          rounded-xl
          bg-button-pink
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
          hover:bg-button-pink-hover
        "
      >
        {loading
          ? "در حال تحلیل..."
          : "شروع تحلیل"}
      </button>

      {/* ========================= */}
      {/* Skin Questions */}
      {/* ========================= */}

      {questions.length > 0 && (
        <div
          className="
            w-full
            max-w-2xl
            mt-10
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-5
            sm:p-7
          "
        >
          <div className="text-center">
            <h2
              className="
                text-xl
                sm:text-2xl
                font-bold
                text-petrol
              "
            >
              چند سؤال کوتاه
            </h2>

            <p
              className="
                mt-2
                text-sm
                text-petrol
              "
            >
              برای اینکه نتیجه دقیق‌تر شود، به
              سؤال‌های زیر پاسخ بده.
            </p>
          </div>

          <div
            className="
              mt-6
              space-y-6
            "
          >
            {questions.map((question) => {
              const selectedAnswer =
                answers.find(
                  (x) =>
                    x.key === question.key
                )?.answer;

              return (
                <div
                  key={question.key}
                  className="
                    rounded-xl
                    bg-gray-50
                    border
                    border-gray-200
                    p-4
                  "
                >
                  <p
                    className="
                      font-medium
                      text-petrol
                      leading-7
                    "
                  >
                    {question.question}
                  </p>

                  <div
                    className="
                      mt-4
                      flex
                      flex-wrap
                      gap-2
                    "
                  >
                    {/* Yes */}

                    <button
                      type="button"
                      onClick={() =>
                        setQuestionAnswer(
                          question.key,
                          "yes"
                        )
                      }
                      className={`
                        btn-base
                        rounded-lg
                        px-5
                        py-2
                        text-sm
                        transition
                        border
                        ${
                          selectedAnswer ===
                          "yes"
                            ? "bg-button-pink text-white border-button-pink"
                            : "bg-white text-petrol border-gray-300 hover:bg-gray-100"
                        }
                      `}
                    >
                      بله
                    </button>

                    {/* No */}

                    <button
                      type="button"
                      onClick={() =>
                        setQuestionAnswer(
                          question.key,
                          "no"
                        )
                      }
                      className={`
                        btn-base
                        rounded-lg
                        px-5
                        py-2
                        text-sm
                        transition
                        border
                        ${
                          selectedAnswer ===
                          "no"
                            ? "bg-button-pink text-white border-button-pink"
                            : "bg-white text-petrol border-gray-300 hover:bg-gray-100"
                        }
                      `}
                    >
                      خیر
                    </button>

                    {/* Skip */}

                    <button
                      type="button"
                      onClick={() =>
                        setQuestionAnswer(
                          question.key,
                          "skip"
                        )
                      }
                      className={`
                        btn-base
                        rounded-lg
                        px-5
                        py-2
                        text-sm
                        transition
                        border
                        ${
                          selectedAnswer ===
                          "skip"
                            ? "bg-gray-300 text-petrol border-gray-300"
                            : "bg-white text-gray-500 border-gray-300 hover:bg-gray-100"
                        }
                      `}
                    >
                      رد کردن
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ========================= */}
          {/* Refine Button */}
          {/* ========================= */}

          <div
            className="
              mt-7
              flex
              justify-center
            "
          >
            <button
              type="button"
              onClick={refineAnalysis}
              disabled={refining}
              className="
                btn-base
                rounded-xl
                bg-button-pink
                px-8
                py-3
                text-white
                font-medium
                shadow-md
                shadow-coral/25
                transition
                disabled:opacity-40
                disabled:cursor-not-allowed
                hover:bg-button-pink-hover
              "
            >
              {refining
                ? "در حال به‌روزرسانی نتیجه..."
                : "مشاهده نتیجه نهایی"}
            </button>
          </div>
        </div>
      )}

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

