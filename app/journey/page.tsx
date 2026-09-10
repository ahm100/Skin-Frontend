"use client";

import { useEffect, useState } from "react";
import { API_BASE } from "@/lib/api";

type SkinJourneyItem = {
  id: number;
  imageUrl: string;
  skinType: string | null;
  conditions: string[];
  createdAt: string;
};

export default function JourneyPage() {
  const [history, setHistory] = useState<SkinJourneyItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =========================
  // Load Skin Journey
  // =========================

  useEffect(() => {
    async function loadHistory() {
      const token = localStorage.getItem("token");

      if (!token) {
        window.location.href =
          "/login?returnUrl=/journey";

        return;
      }

      try {
        const response = await fetch(
          `${API_BASE}/api/SkinAnalysis/history`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          if (response.status === 401) {
            localStorage.removeItem("token");

            window.location.href =
              "/login?returnUrl=/journey";

            return;
          }

          throw new Error(
            "Failed to load history."
          );
        }

        const data =
          await response.json();

        setHistory(data);
      } catch (error) {
        console.error(
          "Failed to load skin journey:",
          error
        );

        setError(
          "دریافت تاریخچه پوست با مشکل مواجه شد."
        );
      } finally {
        setLoading(false);
      }
    }

    loadHistory();
  }, []);

  // =========================
  // Loading
  // =========================

  if (loading) {
    return (
      <main
        className="
          min-h-screen
          flex
          items-center
          justify-center
          p-6
        "
      >
        <p className="text-petrol">
          در حال دریافت سفر پوست شما...
        </p>
      </main>
    );
  }

  // =========================
  // Error
  // =========================

  if (error) {
    return (
      <main
        className="
          min-h-screen
          flex
          items-center
          justify-center
          p-6
        "
      >
        <div
          className="
            rounded-2xl
            bg-white
            border
            border-red-100
            px-6
            py-5
            text-center
            shadow-sm
          "
        >
          <p className="text-red-600">
            {error}
          </p>
        </div>
      </main>
    );
  }

  // =========================
  // Empty
  // =========================

  if (history.length === 0) {
    return (
      <main
        className="
          min-h-screen
          px-6
          py-12
          sm:px-10
        "
      >
        <div
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
          <h1
            className="
              text-3xl
              sm:text-4xl
              font-bold
              text-petrol
            "
          >
            سفر پوست من
          </h1>

          <p
            className="
              mt-4
              text-petrol-soft
              leading-8
            "
          >
            هنوز تحلیلی در سفر پوست شما ثبت نشده است.
          </p>

          <button
            type="button"
            onClick={() => {
              window.location.href =
                "/analyze";
            }}
           className="
  btn-base
  mt-6
  rounded-xl
  bg-button-pink
  px-6
  py-3
  text-white
  font-medium
  shadow-md
  shadow-coral/20
  hover:bg-button-pink-hover
  transition
"
          >
            اولین تحلیل پوست من
          </button>
        </div>
      </main>
    );
  }

  // =========================
  // Journey
  // =========================

  return (
    <main
      className="
        min-h-screen

        px-4
        py-8

        sm:px-8
        sm:py-12
      "
    >
      <div
        className="
          mx-auto
          max-w-5xl
        "
      >

        {/* ========================= */}
        {/* Header */}
        {/* ========================= */}

        <div className="text-center">

          <h1
            className="
              text-3xl
              sm:text-4xl
              font-bold
              text-petrol
            "
          >
            سفر پوست من
          </h1>

          <p
            className="
              mt-3
              text-sm
              sm:text-base
              text-petrol-soft
              leading-7
            "
          >
            سابقه تحلیل‌های پوست شما در طول زمان
          </p>

        </div>


        {/* ========================= */}
        {/* Latest Analysis */}
        {/* ========================= */}

        <section className="mt-10">

          <h2
            className="
              text-xl
              sm:text-2xl
              font-bold
              text-petrol
            "
          >
            آخرین تحلیل
          </h2>

          <JourneyCard
            item={history[0]}
            featured
          />

        </section>


        {/* ========================= */}
        {/* Previous Analyses */}
        {/* ========================= */}

        {history.length > 1 && (
          <section className="mt-12">

            <h2
              className="
                text-xl
                sm:text-2xl
                font-bold
                text-petrol
              "
            >
              تحلیل‌های قبلی
            </h2>

            <div
              className="
                mt-5

                grid

                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3

                gap-5
              "
            >
              {history
                .slice(1)
                .map((item) => (
                  <JourneyCard
                    key={item.id}
                    item={item}
                  />
                ))}
            </div>

          </section>
        )}

      </div>
    </main>
  );
}


// =====================================================
// Journey Card
// =====================================================

function JourneyCard({
  item,
  featured = false,
}: {
  item: SkinJourneyItem;
  featured?: boolean;
}) {
  const imageUrl =
    `${API_BASE}${item.imageUrl}`;

  return (
    <article
      className={`
        mt-5

        overflow-hidden

        rounded-2xl

        border
        border-coral/10

        bg-white

        shadow-sm
        shadow-coral/5

        ${
          featured
            ? "sm:flex"
            : ""
        }
      `}
    >

      {/* ========================= */}
      {/* Image */}
      {/* ========================= */}

      <div
        className={`
          relative
          bg-gray-100

          ${
            featured
              ? "sm:w-1/2"
              : ""
          }
        `}
      >
        <img
          src={imageUrl}
          alt="تصویر تحلیل پوست"
          className="
            w-full
            h-64
            sm:h-72
            object-cover
          "
        />
      </div>


      {/* ========================= */}
      {/* Content */}
      {/* ========================= */}

      <div
        className={`
          p-5
          sm:p-6

          ${
            featured
              ? "sm:flex-1"
              : ""
          }
        `}
      >

        {/* Date */}

        <p
          className="
            text-xs
            text-petrol-soft
          "
        >
          {formatDate(item.createdAt)}
        </p>


        {/* Skin Type */}

        {item.skinType && (
          <div className="mt-4">

            <p
              className="
                text-xs
                text-petrol-soft
              "
            >
              نوع پوست
            </p>

            <p
              className="
                mt-1
                text-lg
                font-bold
                text-petrol
              "
            >
              {translateSkinType(
                item.skinType
              )}
            </p>

          </div>
        )}


        {/* Conditions */}

        {item.conditions &&
          item.conditions.length > 0 && (
            <div className="mt-4">

              <p
                className="
                  text-xs
                  text-petrol-soft
                "
              >
                موارد شناسایی‌شده
              </p>

              <div
                className="
                  mt-2
                  flex
                  flex-wrap
                  gap-2
                "
              >
                {item.conditions.map(
                  (condition) => (
                    <span
                      key={condition}
                      className="
                        rounded-full
                        bg-blush/30
                        px-3
                        py-1

                        text-xs
                        text-petrol
                      "
                    >
                      {condition}
                    </span>
                  )
                )}
              </div>

            </div>
          )}

      </div>

    </article>
  );
}


// =====================================================
// Helpers
// =====================================================

function translateSkinType(
  skinType: string
) {
  switch (skinType.toLowerCase()) {
    case "dry":
      return "خشک";

    case "oily":
      return "چرب";

    case "normal":
      return "نرمال";

    default:
      return skinType;
  }
}


function formatDate(
  date: string
) {
  return new Intl.DateTimeFormat(
    "fa-IR",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  ).format(new Date(date));
}