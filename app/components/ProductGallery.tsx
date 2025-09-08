"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  alt: string;
};

export default function ProductGallery({ images, alt }: Props) {
  const pics = (images ?? []).filter(Boolean);
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i - 1 + pics.length) % pics.length);
  const next = () => setIdx((i) => (i + 1) % pics.length);

  if (pics.length === 0) {
    return <div className="relative aspect-[4/5] bg-[#fbf7f0] rounded-md" />;
  }

  return (
    <div className="w-full">
      {/* Main image */}
      <div className="relative aspect-[4/5] bg-[#fbf7f0] rounded-md">
        <Image
          key={pics[idx]}
          src={pics[idx]}
          alt={alt}
          fill
          sizes="(max-width:640px) 100vw, (max-width:1024px) 70vw, 50vw"
          className="object-contain"
          priority
        />

        {/* round arrow buttons */}
        {pics.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 h-7 w-7 sm:h-9 sm:w-9 rounded-full border border-black/30 bg-white/85 hover:bg-black hover:text-white transition text-sm sm:text-base"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 h-7 w-7 sm:h-9 sm:w-9 rounded-full border border-black/30 bg-white/85 hover:bg-black hover:text-white transition text-sm sm:text-base"
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Thumbs */}
      {pics.length > 1 && (
        <div className="mt-3 sm:mt-4 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-6 gap-1.5 sm:gap-2">
          {pics.map((src, i) => (
            <button
              key={src + i}
              onClick={() => setIdx(i)}
              className={`relative aspect-square rounded-sm border ${
                i === idx ? "border-black" : "border-black/15"
              }`}
              aria-label={`Show image ${i + 1}`}
            >
              <Image
                src={src}
                alt={`${alt} ${i + 1}`}
                fill
                sizes="(max-width:640px) 25vw, (max-width:1024px) 15vw, 80px"
                className="object-cover rounded-sm"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
