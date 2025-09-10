// components/InstagramSection.tsx
"use client";

import React from "react";

export default function InstagramSection() {
  return (
    <div className="w-full bg-[#fefcf8] py-0 px-0">
      <div
        className="w-full flex gap-4 overflow-x-auto md:overflow-visible flex-nowrap md:flex-wrap scrollbar-hide"
      >
        {/* Column 1: Left Video */}
        <div className="flex-shrink-0 flex justify-center">
          <video
            className="w-[250px] sm:w-[320px] md:w-[370px] h-[400px] sm:h-[480px] md:h-[550px] object-cover"
            src="/video/hiravermeil_1747236919_3632408718558320613_49035025956.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Column 2: Center Text */}
        <div className="flex-shrink-0 text-center space-y-2 flex flex-col justify-center items-center h-[400px] sm:h-[480px] md:h-[500px] px-6 md:px-35">
          <p className="text-xs tracking-widest text-gray-500 uppercase">
            TAG YOUR
          </p>
          <h2 className="text-3xl font-semibold text-black">#HJ</h2>
          <a
            href="https://instagram.com/yourhandle"
            className="text-sm underline underline-offset-2 text-black hover:opacity-70"
          >
            FOLLOW US
          </a>
        </div>

        {/* Column 3: Right Video 1 */}
        <div className="flex-shrink-0 flex justify-center">
          <video
            className="w-[250px] sm:w-[320px] md:w-[370px] h-[400px] sm:h-[480px] md:h-[550px] md:px-4 object-cover"
            src="/video/hiravermeil_1728653514_3476519912718537822_49035025956.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Column 4: Right Video 2 */}
        <div className="flex-shrink-0 flex justify-center">
          <video
            className="w-[250px] sm:w-[320px] md:w-[370px] h-[400px] sm:h-[480px] md:h-[550px] object-cover"
            src="/video/hiravermeil_1750253102_3657710495387674671_49035025956.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>

      {/* Hide scrollbar on mobile */}
      <style jsx>{`.scrollbar-hide::-webkit-scrollbar {
          display: none;}
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;}`}</style>
    </div>
  );
}
