// components/InstagramSection.tsx
"use client";

import React from "react";

export default function InstagramSection() {
  return (
    <div className="w-full bg-[#fefcf8] py-0 px-0">
      <div className="w-full flex flex-wrap justify-center gap-3 sm:gap-4">
        {/* Column 1: Left Video */}
        <div className="flex justify-center">
          <video
            className="w-[160px] h-[240px] sm:w-[220px] sm:h-[320px] md:w-[300px] md:h-[450px] lg:w-[370px] lg:h-[550px] object-cover"
            src="/video/hiravermeil_1747236919_3632408718558320613_49035025956.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Column 2: Center Text */}
        <div className="text-center space-y-1 sm:space-y-2 flex flex-col justify-center items-center h-[200px] sm:h-[280px] md:h-[400px] lg:h-[500px] px-4 sm:px-6 md:px-10">
          <p className="text-[10px] sm:text-xs tracking-widest text-gray-500 uppercase">
            TAG YOUR
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black">
            #HJ
          </h2>
          <a
            href="https://instagram.com/yourhandle"
            className="text-xs sm:text-sm underline underline-offset-2 text-black hover:opacity-70"
          >
            FOLLOW US
          </a>
        </div>

        {/* Column 3: Right Video 1 */}
        <div className="flex justify-center">
          <video
            className="w-[160px] h-[240px] sm:w-[220px] sm:h-[320px] md:w-[300px] md:h-[450px] lg:w-[370px] lg:h-[550px] object-cover"
            src="/video/hiravermeil_1728653514_3476519912718537822_49035025956.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Column 4: Right Video 2 */}
        <div className="flex justify-center">
          <video
            className="w-[160px] h-[240px] sm:w-[220px] sm:h-[320px] md:w-[300px] md:h-[450px] lg:w-[370px] lg:h-[550px] object-cover"
            src="/video/hiravermeil_1750253102_3657710495387674671_49035025956.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </div>
  );
}
