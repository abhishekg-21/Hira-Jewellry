"use client";

import Image from "next/image";

export default function VideoBanner() {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
      {/* Background video */}
      <video
        className="
          absolute top-0 left-0 w-full h-full 
          object-cover object-center
        "
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
      <div
        className="
          absolute bottom-4 sm:bottom-6 
          left-0 right-0 sm:left-6 sm:right-auto
          bg-white/95 backdrop-blur-sm shadow-md flex items-center gap-4 
          w-[90%] max-w-[360px] sm:w-[360px] 
          px-3 py-2 mx-auto sm:mx-0
        "
      >
        {/* Product Image */}
        <div className="relative w-[60px] h-[60px] shrink-0">
          <Image
            src="/images/Video_Modal/Bubble Letter A Necklace _ 2150.png"
            alt="Bubble Letter A Necklace"
            fill
            className="object-contain rounded"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <h3
            style={{ fontFamily: "Poppins" }}
            className="font-medium text-[16px] sm:text-[20px] text-gray-900 truncate"
          >
            Bubble Letter A Necklace
          </h3>
          <p className="text-sm text-gray-700">Rs. 2,150.00</p>
        </div>

        {/* Cart Icon */}
        <div className="relative w-7 h-7 sm:w-8 sm:h-8 shrink-0 mr-2 sm:mr-5">
          <Image
            src="/images/ChatGPT Image Aug 8, 2025, 11_35_04 AM.png"
            alt="Cart"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
