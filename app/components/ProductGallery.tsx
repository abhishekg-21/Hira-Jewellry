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
    return (
      <div className="relative aspect-[4/5] bg-[#fbf7f0] rounded-md" />
    );
  }

  return (
    <div className="w-full">
      {/* Main image */}
      <div className="relative aspect-[4/5] bg-[#fbf7f0] ">
        <Image
          key={pics[idx]}
          src={pics[idx]}
          alt={alt}
          fill
          sizes="(min-width:1024px) 50vw, 100vw"
          className="object-contain"
          priority
        />

        {/* round arrow buttons */}
        {pics.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full border border-black/30 bg-white/85 hover:bg-black hover:text-white transition"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full border border-black/30 bg-white/85 hover:bg-black hover:text-white transition"
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Thumbs */}
      {pics.length > 1 && (
        <div className="mt-4 grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-6 gap-2">
          {pics.map((src, i) => (
            <button
              key={src + i}
              onClick={() => setIdx(i)}
              className={`relative aspect-square rounded-sm border ${
                i === idx ? "border-black" : "border-black/15"
              }`}
              aria-label={`Show image ${i + 1}`}
            >
              <Image src={src} alt={`${alt} ${i + 1}`} fill className="object-cover rounded-sm" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
