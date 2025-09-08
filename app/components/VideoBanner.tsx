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
      <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm shadow-md flex items-center   gap-4 w-[360px]">
        <div className="relative h-[80px]">
  <Image
    src="/images/Video_Modal/Bubble Letter A Necklace _ 2150.png"
    alt="Bubble Letter A Necklace"
    width={50}
    height={100}
    className="object-contain rounded"
  />
</div>

        <div className="flex-1">
          <h3 style={{ fontFamily: "Poppins" }} className=" font-medium text-[20px] text-gray-900">
            Bubble Letter A Necklace
          </h3>
          <p className="text-sm text-gray-700">Rs. 2,150.00</p>
        </div>
        
        {/* Cart icon as an image */}
        <div className="relative w-8 h-8 mr-5">
          <Image
            src="/images/ChatGPT Image Aug 8, 2025, 11_35_04 AM.png"   // <-- put your cart icon path here
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
