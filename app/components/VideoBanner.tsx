"use client";

import Image from "next/image";

export default function VideoBanner() {
  return (
    <section className="relative w-full h-[300px] sm:h-[450px] md:h-[600px] overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/video/Adjustment.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Product Card Overlay */}
      <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 bg-white/95 backdrop-blur-sm shadow-md flex items-center gap-3 sm:gap-4 w-[90%] sm:w-[360px] rounded-md p-2 sm:p-3">
        <div className="relative h-[60px] sm:h-[80px] w-[60px] sm:w-[80px] flex-shrink-0">
          <Image
            src="/images/Video_Modal/Bubble Letter A Necklace _ 2150.png"
            alt="Bubble Letter A Necklace"
            fill
            className="object-contain rounded"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3
            style={{ fontFamily: "Poppins" }}
            className="font-medium text-sm sm:text-base md:text-lg text-gray-900 truncate"
          >
            Bubble Letter A Necklace
          </h3>
          <p className="text-xs sm:text-sm text-gray-700">Rs. 2,150.00</p>
        </div>

        {/* Cart icon as an image */}
        <div className="relative w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-5 flex-shrink-0">
          <Image
            src="/images/ChatGPT Image Aug 8, 2025, 11_35_04 AM.png"
            alt="Cart"
            fill
            className="object-contain"
            sizes="24px"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
