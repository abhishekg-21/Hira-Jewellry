// components/HeroBanner.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";

interface HeroBannerProps {
  videoSrc: string;
  imageSrc: string;
  altText?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaUrl?: string;
  textAlignment?: "left" | "center" | "right";
  customClass?: string;
  padding?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  videoSrc,
  imageSrc,
  altText = "Hero Image",
  title = "",
  subtitle = "",
  ctaText = "",
  ctaUrl = "#",
  textAlignment = "left",
  customClass = "",
  padding = "py-0",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((err) => console.error("Video autoplay failed", err));
    }
  }, []);

  return (
    <section className={`${customClass} ${padding}`}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch gap-0">
        {/* Video Side */}
        <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] lg:h-[650px] overflow-hidden">
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-4 sm:bottom-8 left-0 text-white z-10 max-w-[85%] sm:max-w-sm px-3 sm:px-6">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold leading-snug drop-shadow-md">
              Where Tradition<br />Meets Treasure
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base font-light drop-shadow-md">
              Gift her heirloom-worthy elegance—this Rakhi, only the finest will do.
            </p>
            <Link
              href="/collections/rakhi"
              className="inline-block mt-3 sm:mt-4 bg-white text-black px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium shadow hover:bg-gray-100"
            >
              SHOP LATEST COLLECTION
            </Link>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] lg:h-[650px]">
          <Image
            src={imageSrc}
            alt={altText}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-3 sm:bottom-6 left-1/2 sm:left-3/4 transform -translate-x-1/2 sm:translate-x-0 z-10">
            <Link
              href={ctaUrl}
              className="mt-2 sm:mt-3 inline-block border border-black text-black px-3 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm hover:bg-gray hover:text-black transition"
            >
              {ctaText || "SHOP NOW"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
