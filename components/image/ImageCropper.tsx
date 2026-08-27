"use client";

import { useCallback, useState } from "react";
import Cropper, {
  Area,
  Point,
} from "react-easy-crop";

interface ImageCropperProps {
  image: string;
  onCropComplete: (croppedAreaPixels: Area) => void;
}

export default function ImageCropper({
  image,
  onCropComplete,
}: ImageCropperProps) {
  const [crop, setCrop] = useState<Point>({
    x: 0,
    y: 0,
  });

  const [zoom, setZoom] = useState(1);

  const handleCropComplete = useCallback(
    (_croppedArea: Area, croppedAreaPixels: Area) => {
      onCropComplete(croppedAreaPixels);
    },
    [onCropComplete]
  );

  return (
    <div className="mt-6 w-full max-w-xl">
      <div className="relative h-[350px] w-full overflow-hidden rounded-2xl bg-black">
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={1}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={handleCropComplete}
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="zoom"
          className="block text-sm text-petrol text-center mb-2"
        >
          بزرگنمایی
        </label>

        <input
          id="zoom"
          type="range"
          min={1}
          max={3}
          step={0.1}
          value={zoom}
          onChange={(e) =>
            setZoom(Number(e.target.value))
          }
          className="w-full"
        />
      </div>
    </div>
  );
}

