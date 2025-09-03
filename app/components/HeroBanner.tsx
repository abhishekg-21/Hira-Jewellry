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
    <section >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch gap-0">
        {/* Video Side */}
        <div className="relative w-full h-[500px] lg:h-[650px] overflow-hidden">
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-12 left-0 text-white z-10 max-w-sm px-8">
            <h2 className="text-4xl font-semibold leading-snug drop-shadow-md">
              Where Tradition<br />Meets Treasure
            </h2>
            <p className="mt-2 text-[15px] font-light drop-shadow-md">
              Gift her heirloom-worthy elegance—this Rakhi, only the finest will do.
            </p>
            <Link
              href="/collections/rakhi"
              className="inline-block mt-4 bg-white text-black px-5 py-2 text-sm font-medium shadow hover:bg-gray-100"
            >
              SHOP LATEST COLLECTION
            </Link>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative w-full h-[500px] lg:h-[650px]">
          <Image
            src={imageSrc}
            alt={altText}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-5 left-80 z-10">
            <div className="">
              <Link
  href={ctaUrl}
  className="mt-3 inline-block border border-black text-black px-6.5 py-2.5 text-xs hover:bg-gray hover:text-black transition"
>
  {ctaText || "SHOP NOW"}
</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
