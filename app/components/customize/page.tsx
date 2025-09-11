"use client";

import Image from "next/image";
import { useState } from "react";

export default function CustomizePage() {
  const [file, setFile] = useState<File | null>(null);

  // 👇 Replace these with your actual image file paths
  const bannerImages = [
    "/images/brands/hira_vermile/customize/WhatsApp_Image_2025-05-15_at_12.00.06_PM_1.webp",
    "/images/brands/hira_vermile/customize/WhatsApp_Image_2025-05-15_at_12.00.04_PM (1).jpg",
    "/images/brands/hira_vermile/customize/WhatsApp_Image_2025-05-15_at_12.00.03_PM.webp",
    "/images/brands/hira_vermile/customize/WhatsApp_Image_2025-05-15_at_12.00.05_PM_3.jpg",
  ];

  return (
    <main className="bg-[#fdfaf4] text-black">
      {/* Banner grid */}
      <section className="w-full ml-37.5 px-4">
  <div className="grid grid-cols-2 md:grid-cols-5 gap-1 justify-items-center">
    {bannerImages.map((img, i) => (
      <Image
        key={i}
        src={img}
        alt={`Banner ${i + 1}`}
        width={300}
        height={160}
        className="object-cover sm:w-320 h-[160px] sm:h-[400px]"
      />
    ))}
  </div>
</section>


      {/* Customize form */}
<section className="max-w-lg mx-auto py-12 px-4">
  <h2 className="text-2xl font-semibold text-center">Customize Your Jewellery</h2>
  <p className="text-sm text-neutral-600 text-center mb-8">Customization</p>

  <form className="space-y-4">
    {/* First + Last Name */}
    <div className="grid grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="First name"
        className="border border-gray-300 px-3 py-2 text-sm w-full bg-white"
        required
      />
      <input
        type="text"
        placeholder="Last name"
        className="border border-gray-300 px-3 py-2 text-sm w-full bg-white"
        required
      />
    </div>

    {/* Email */}
    <input
      type="email"
      placeholder="Email"
      className="border border-gray-300 px-3 py-2 text-sm w-full bg-white"
      required
    />

    {/* Phone with country code */}
    <div className="flex">
      <select className="border border-gray-300 px-2 py-2 text-sm bg-white">
        <option value="+91">🇮🇳 +91</option>
        <option value="+1">🇺🇸 +1</option>
        <option value="+44">🇬🇧 +44</option>
      </select>
      <input
        type="tel"
        placeholder="Phone"
        className="border border-gray-300 border-l-0 px-3 py-2 text-sm flex-1 bg-white"
      />
    </div>

    {/* Description */}
    <textarea
      placeholder="Describe Your Imagination"
      className="border border-gray-300 px-3 py-2 text-sm w-full bg-white"
      rows={4}
    />

    {/* File upload */}
    <div className="border-2 border-dashed border-gray-300 rounded bg-white p-6 text-center">
      <input
        type="file"
        id="file-upload"
        className="hidden bg-white"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <label
        htmlFor="file-upload"
        className="cursor-pointer text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded"
      >
        Add file
      </label>
    </div>

    {/* Submit */}
    <button
      type="submit"
      className="bg-black text-white w-full py-3 text-sm hover:bg-gray-800 transition"
    >
      Submit
    </button>
  </form>
</section>

      {/* Gallery strip */}
      <section className="overflow-x-auto flex gap-3 px-4 pb-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <Image
            key={i}
            src={`/images/gallery/g${i + 1}.jpg`}
            alt={`Gallery ${i + 1}`}
            width={120}
            height={120}
            className="object-cover rounded"
          />
        ))}
      </section>
    </main>
  );
}
