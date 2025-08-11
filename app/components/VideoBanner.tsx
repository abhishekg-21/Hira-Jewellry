"use client";

import Image from "next/image";
import { FaShoppingBag } from "react-icons/fa";

export default function VideoBanner() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
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
      <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm shadow-md flex items-center px-4 py-3 gap-4 w-[380px]">
        <div className="w-16 h-16 relative">
          <Image
            src="/products/bubble-necklace.jpg"
            alt="Bubble Letter A Necklace"
            fill
            className="object-contain rounded"
          />
        </div>
        <div className="flex-1">
          <h3 style={{ fontFamily: "Poppins" }} className=" font-medium text-[20px] text-gray-900">
            Bubble Letter A Necklace
          </h3>
          <p className="text-sm text-gray-700">Rs. 2,150.00</p>
        </div>
        <FaShoppingBag className="text-gray-700 text-lg" />
      </div>
    </section>
  );
}
