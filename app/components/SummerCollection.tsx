"use client";

import Image from "next/image";
import Link from "next/link";

const summerCollection = [
  {
    title: "SHOP NECKLACE",
    image: "/images/24beb644-bc56-47a5-980d-af0776591d2e.jpg",
    link: "/collections/necklace",
  },
  {
    title: "SHOP ANKLET",
    image: "/images/IMG-20250505-WA0014.jpg",
    link: "/collections/anklet",
  },
  {
    title: "SHOP RING",
    image: "/images/WhatsApp_Image_2025-06-18_at_5.46.49_PM (1).webp",
    link: "/collections/ring",
  },
  {
    title: "SHOP BRACELET",
    image: "/images/WhatsApp_Image_2025-06-18_at_5.42.31_PM (1).jpg",
    link: "/collections/bracelets",
  },
  {
    title: "SHOP EARRING",
    image: "/images/RoyalGemsStoneStuds-Blue_2 (1).webp",
    link: "/collections/earring",
  },
];

export default function SummerCollection() {
  return (
    <section className="w-full bg-[#fffaf2]">
      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {summerCollection.slice(0, 2).map((item, index) => (
          <Link href={item.link} key={index}>
            <div
              className="
                relative w-full 
                h-[300px] sm:h-[350px] md:h-[400px] 
                cursor-pointer
              "
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="
                    text-white text-xs sm:text-sm md:text-base 
                    border border-white px-4 sm:px-5 py-1.5 sm:py-2
                  "
                >
                  {item.title}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-1">
        {/* Left: 2 images (always side by side) */}
        <div className="grid grid-cols-2 gap-1">
          {summerCollection.slice(2, 4).map((item, index) => (
            <Link href={item.link} key={index}>
              <div
                className="
                  relative w-full 
                  h-[280px] sm:h-[320px] md:h-[400px] 
                  cursor-pointer
                "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="
                      text-white text-xs sm:text-sm md:text-base 
                      border border-white px-4 sm:px-5 py-1.5 sm:py-2
                    "
                  >
                    {item.title}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Right: Tall image */}
        <Link href={summerCollection[4].link}>
          <div
            className="
              relative w-full 
              h-[300px] sm:h-[350px] md:h-[400px] 
              cursor-pointer
            "
          >
            <Image
              src={summerCollection[4].image}
              alt={summerCollection[4].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="
                  text-white text-xs sm:text-sm md:text-base 
                  border border-white px-4 sm:px-5 py-1.5 sm:py-2
                ">
                {summerCollection[4].title}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
