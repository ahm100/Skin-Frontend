import { Area } from "react-easy-crop";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_WIDTH = 1600;
const MAX_HEIGHT = 1600;

function loadImage(
  src: string
): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve(image);
    image.onerror = reject;

    image.src = src;
  });
}

function canvasToBlob(
  canvas: HTMLCanvasElement,
  quality: number
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(
            new Error(
              "Could not create image blob."
            )
          );

          return;
        }

        resolve(blob);
      },
      "image/jpeg",
      quality
    );
  });
}

export async function processImage(
  image: File,
  crop: Area
): Promise<File> {
  const imageSrc =
    URL.createObjectURL(image);

  try {
    const htmlImage =
      await loadImage(imageSrc);

    // =========================
    // Calculate output size
    // =========================

    let width = crop.width;
    let height = crop.height;

    // Resize while preserving aspect ratio
    if (
      width > MAX_WIDTH ||
      height > MAX_HEIGHT
    ) {
      const ratio = Math.min(
        MAX_WIDTH / width,
        MAX_HEIGHT / height
      );

      width = Math.round(
        width * ratio
      );

      height = Math.round(
        height * ratio
      );
    }

    // =========================
    // Canvas
    // =========================

    const canvas =
      document.createElement("canvas");

    canvas.width = width;
    canvas.height = height;

    const context =
      canvas.getContext("2d");

    if (!context) {
      throw new Error(
        "Could not create canvas context."
      );
    }

    // =========================
    // Crop
    // =========================

    context.drawImage(
      htmlImage,
      crop.x,
      crop.y,
      crop.width,
      crop.height,
      0,
      0,
      width,
      height
    );

    // =========================
    // Compress
    // =========================

    let quality = 0.9;

    let blob =
      await canvasToBlob(
        canvas,
        quality
      );

    // Gradually reduce JPEG quality
    while (
      blob.size > MAX_FILE_SIZE &&
      quality > 0.4
    ) {
      quality -= 0.1;

      blob =
        await canvasToBlob(
          canvas,
          quality
        );
    }

    // =========================
    // Reduce dimensions if needed
    // =========================

    if (
      blob.size > MAX_FILE_SIZE
    ) {
      let currentWidth = width;
      let currentHeight = height;

      while (
        blob.size > MAX_FILE_SIZE &&
        currentWidth > 800
      ) {
        currentWidth = Math.round(
          currentWidth * 0.8
        );

        currentHeight = Math.round(
          currentHeight * 0.8
        );

        canvas.width =
          currentWidth;

        canvas.height =
          currentHeight;

        context.drawImage(
          htmlImage,
          crop.x,
          crop.y,
          crop.width,
          crop.height,
          0,
          0,
          currentWidth,
          currentHeight
        );

        quality = 0.8;

        blob =
          await canvasToBlob(
            canvas,
            quality
          );
      }
    }

    // =========================
    // Final validation
    // =========================

    if (
      blob.size > MAX_FILE_SIZE
    ) {
      throw new Error(
        "IMAGE_TOO_LARGE"
      );
    }

    // =========================
    // Final File
    // =========================

    return new File(
      [blob],
      "skin-analysis.jpg",
      {
        type: "image/jpeg",
        lastModified: Date.now(),
      }
    );
  } finally {
    URL.revokeObjectURL(
      imageSrc
    );
  }
}