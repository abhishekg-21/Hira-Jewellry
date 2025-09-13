"use client";

import Image from "next/image";
import { useState } from "react";

export default function CustomizePage() {
  const [file, setFile] = useState<File | null>(null);
  const [paused1, setPaused1] = useState(false);
  const [paused2, setPaused2] = useState(false);

  const bannerImages = [
    "/images/brands/hira_vermile/customize/WhatsApp_Image_2025-05-15_at_12.00.06_PM_1.webp",
    "/images/brands/hira_vermile/customize/WhatsApp_Image_2025-05-15_at_12.00.04_PM (1).jpg",
    "/images/brands/hira_vermile/customize/WhatsApp_Image_2025-05-15_at_12.00.03_PM.webp",
    "/images/brands/hira_vermile/customize/WhatsApp_Image_2025-05-15_at_12.00.05_PM_3.jpg",
  ];

  const MovingImages = [
    "/images/brands/hira_vermile/customize/1_2d1b4e60-5d59-459b-89eb-c97e11ded417.avif",
    "/images/brands/hira_vermile/customize/2_72a9689e-c9cf-4ad9-a0c4-c3569b0fc3f4.avif",
    "/images/brands/hira_vermile/customize/5_c5db7eb0-c693-459b-8797-c2a3a2c15714.avif",
    "/images/brands/hira_vermile/customize/4_f0792e73-b64d-4007-917f-84cbd1426e43.avif",
    "/images/brands/hira_vermile/customize/2_72a9689e-c9cf-4ad9-a0c4-c3569b0fc3f4.avif",
    "/images/brands/hira_vermile/customize/6_9cda769d-46b3-47fd-b695-bcc0afac5965.avif",
    "/images/brands/hira_vermile/customize/7_04324259-11b8-4a2f-9b2c-241c7fd2befa.avif",
  ];

  const MovingImages2 = [
    "/images/brands/hira_vermile/customize/11_0ee900d3-1a3c-4438-a351-a41588dc4d62.avif",
    "/images/brands/hira_vermile/customize/13_e9880aff-c3c4-4d77-a0a5-b541c715cc3a.avif",
    "/images/brands/hira_vermile/customize/15_d5a2182d-4c2f-4462-b365-9d1a14054e07.avif",
    "/images/brands/hira_vermile/customize/8_524fd36b-2de1-460f-a13b-0dbadc2f812c.avif",
    "/images/brands/hira_vermile/customize/10_33b19734-92a7-4422-9203-daf323ff6322.avif",
    "/images/brands/hira_vermile/customize/9_2d9cce26-0754-4d39-870b-016d3bb356dd.avif",
  ];

  const countries = [
    { name: "India", code: "+91", flag: "🇮🇳" },
    { name: "United States", code: "+1", flag: "🇺🇸" },
    { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
    { name: "Iceland", code: "+354", flag: "🇮🇸" },
    { name: "Indonesia", code: "+62", flag: "🇮🇩" },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phone, setPhone] = useState("");

  return (
    <main className="bg-[#fdfaf4] text-black">
      {/* Banner grid */}
      <section className="w-full px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-1">
          {bannerImages.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={`Banner ${i + 1}`}
              width={500}
              height={500}
              className="object-cover w-full h-[250px] sm:h-[400px]"
            />
          ))}
        </div>
      </section>

      {/* Customize form */}
      <section className="max-w-sm mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold text-center">
          Customize Your Jewellery
        </h2>
        <p className="text-sm text-neutral-600 text-center mb-8">
          Customization
        </p>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="border border-gray-300 px-3 py-2 text-sm w-full bg-white rounded-md"
              required
            />
            <input
              type="text"
              placeholder="Last name"
              className="border border-gray-300 px-3 py-2 text-sm w-full bg-white rounded-md"
              required
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 px-3 py-2 text-sm w-full bg-white rounded-md"
            required
          />

          {/* Phone input with country code */}
          <div className="flex rounded-md overflow-hidden border border-gray-300">
            {/* Country Selector */}
            <select
              className="px-2 py-2 text-sm bg-white cursor-pointer outline-none"
              value={selectedCountry.code}
              onChange={(e) => {
                const country = countries.find((c) => c.code === e.target.value);
                if (country) setSelectedCountry(country);
              }}
            >
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.code}
                </option>
              ))}
            </select>

            {/* Phone Input Box */}
            <div className="flex-1 bg-blue-50 border-l border-gray-300 px-3 py-2">
              <label className="block text-xs text-gray-600">Phone</label>
              <input
                type="tel"
                value={`${selectedCountry.code} ${phone}`}
                onChange={(e) =>
                  setPhone(
                    e.target.value.replace(selectedCountry.code, "").trim()
                  )
                }
                className="w-full bg-transparent text-sm text-black outline-none"
              />
            </div>
          </div>

          <textarea
            placeholder="Describe Your Imagination"
            className="border border-gray-300 px-3 py-2 text-sm w-full bg-white rounded-md"
            rows={4}
          />

          <div className="border-2 border-dashed border-gray-300 rounded-md bg-white p-6 text-center">
            <input
              type="file"
              id="file-upload"
              className="hidden bg-white"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-md"
            >
              Add file
            </label>
          </div>

          <button
            type="submit"
            className="bg-black text-white w-full py-3 text-sm hover:bg-gray-800 rounded-md transition cursor-pointer"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Reverse moving gallery */}
      <section
        className="relative w-full overflow-hidden bg-[#fdfaf4] py-6 group"
        onTouchStart={() => setPaused1(true)}
        onTouchEnd={() => setPaused1(false)}
      >
        {/* Desktop pause button */}
        <button
          onClick={() => setPaused1(!paused1)}
          className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 z-10 text-black p-2 border opacity-0 group-hover:opacity-100 transition cursor-pointer"
        >
          {paused1 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="black"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="black"
              viewBox="0 0 24 24"
            >
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          )}
        </button>

        <div
          className={`marquee-track-reverse flex gap-6 px-4 ${
            paused1 ? "paused" : ""
          }`}
        >
          {MovingImages.concat(MovingImages).map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={`Banner ${i + 1}`}
              width={120}
              height={120}
              className="object-cover"
            />
          ))}
        </div>

        <style jsx>{`
          @keyframes marquee-reverse {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }
          .marquee-track-reverse {
            display: flex;
            width: max-content;
            animation: marquee-reverse 55s linear infinite;
          }
          .marquee-track-reverse:hover {
            animation-play-state: paused;
          }
          .paused {
            animation-play-state: paused !important;
          }
        `}</style>
      </section>

      {/* Forward moving gallery */}
      <section
        className="relative w-full overflow-hidden bg-[#fdfaf4] py-6 group"
        onTouchStart={() => setPaused2(true)}
        onTouchEnd={() => setPaused2(false)}
      >
        {/* Desktop pause button */}
        <button
          onClick={() => setPaused2(!paused2)}
          className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 z-10 text-black p-2 border opacity-0 group-hover:opacity-100 transition cursor-pointer"
        >
          {paused2 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="black"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="black"
              viewBox="0 0 24 24"
            >
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          )}
        </button>

        <div
          className={`marquee-track flex gap-6 px-4 ${
            paused2 ? "paused" : ""
          }`}
        >
          {MovingImages2.concat(MovingImages2).map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={`Banner ${i + 1}`}
              width={120}
              height={120}
              className="object-cover"
            />
          ))}
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 55s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
          .paused {
            animation-play-state: paused !important;
          }
        `}</style>
      </section>
    </main>
  );
}