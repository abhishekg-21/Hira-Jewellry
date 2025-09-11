// app/about/page.tsx
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

// Cart icon component
function CartIcon() {
  return (
    <div className="absolute bottom-2 right-2 bg-white/80 rounded-md p-1 shadow-md">
      <Image
        src="/images/Cart icon.png" // 👉 replace with your actual cart icon path
        alt="Cart"
        width={20}
        height={20}
        className="object-contain"
      />
    </div>
  );
}

const STRIP_IMAGES: string[] = [
  "/images/brands/hira_vermile/abouthirasection/Untitled_800_x_800_px.webp",
  "/images/brands/hira_vermile/abouthirasection/im2.webp",
  "/images/brands/hira_vermile/abouthirasection/Untitled_800_x_800_px_2.webp",
  "/images/brands/hira_vermile/abouthirasection/Untitled_800_x_800_px_1.webp",
  "/images/brands/hira_vermile/abouthirasection/im6.webp",
  "/images/brands/hira_vermile/abouthirasection/im7.webp",
  "/images/brands/hira_vermile/abouthirasection/im7_8003e737-9948-4743-97ff-fa31d6471bf6.webp",
];

type StripItem =
  | { type: "image"; src: string }
  | { type: "text"; subheading: string; heading: string; linkText: string; linkHref: string };

const STRIP: StripItem[] = [
  { type: "image", src: "/images/brands/hira_vermile/abouthirasection/i1 (1).webp" },
  {
    type: "text",
    subheading: "GET INSPIRED",
    heading: "#HIRA",
    linkText: "FOLLOW US",
    linkHref: "#",
  },
  { type: "image", src: "/images/brands/hira_vermile/abouthirasection/i2 (1).webp" },
  { type: "image", src: "/images/brands/hira_vermile/abouthirasection/i3 (1).webp" },
  { type: "image", src: "/images/brands/hira_vermile/abouthirasection/i4_7c314c5a-f1d6-44ae-82c5-cd91ba7858b3.webp" },
];

export default function AboutPage() {
  // Mobile 1st carousel
  const scrollRef1 = useRef<HTMLDivElement | null>(null);
  const [progress1, setProgress1] = useState(0);

  // Desktop 1st carousel
  const scrollRef1Desktop = useRef<HTMLDivElement | null>(null);
  const [progress1Desktop, setProgress1Desktop] = useState(0);

  // Mobile 2nd carousel
  const scrollRef2 = useRef<HTMLDivElement | null>(null);
  const [progress2, setProgress2] = useState(0);

  const handleScroll = (
    ref: React.RefObject<HTMLDivElement | null>,
    setProgress: (n: number) => void
  ) => {
    const el = ref.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setProgress(maxScroll > 0 ? (el.scrollLeft / maxScroll) * 100 : 0);
  };

  // Arrows scroll
  const scrollLeft = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  // Effects
  useEffect(() => {
    const el1 = scrollRef1.current;
    if (!el1) return;
    const onScroll1 = () => handleScroll(scrollRef1, setProgress1);
    el1.addEventListener("scroll", onScroll1, { passive: true });
    onScroll1();
    return () => el1.removeEventListener("scroll", onScroll1);
  }, []);

  useEffect(() => {
    const el1d = scrollRef1Desktop.current;
    if (!el1d) return;
    const onScroll1d = () => handleScroll(scrollRef1Desktop, setProgress1Desktop);
    el1d.addEventListener("scroll", onScroll1d, { passive: true });
    onScroll1d();
    return () => el1d.removeEventListener("scroll", onScroll1d);
  }, []);

  useEffect(() => {
    const el2 = scrollRef2.current;
    if (!el2) return;
    const onScroll2 = () => handleScroll(scrollRef2, setProgress2);
    el2.addEventListener("scroll", onScroll2, { passive: true });
    onScroll2();
    return () => el2.removeEventListener("scroll", onScroll2);
  }, []);

  return (
    <main className="bg-[#fefcf8] text-black">
      {/* Hero */}
      <section className="pt-14">
        <header className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-neutral-600">
            About Hira Jewellery
          </p>
          <h1 className="mt-2 text-3xl sm:text-[34px] font-semibold tracking-tight">
            A Story of Unparalleled
            <br />
            Craftsmanship
          </h1>
          <p className="mt-4 text-[15px] leading-7 ">
            We are manufacturers of fine Gold and Silver Jewelry. With the experience of 35+ years we offer you great work, quality and prices. Quality should never be a compromise. We design our pieces to be unique, durable, attractive and can be passed on to future generation. We are here to cultivate sparkling relationships, when you get order from us, whether its first or tenth time, you become part of our family. We treat our customers with the honesty and respect they deserve.
          </p>
        </header>

        {/* Mobile carousel (1st) */}
        <div className="mt-10 block lg:hidden py-5">
          <div
            ref={scrollRef1}
            className="flex gap-2 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none]"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {STRIP_IMAGES.map((src, i) => (
              <div
                key={i}
                className="relative min-w-[50%] aspect-[4/3] overflow-hidden snap-start"
              >
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
          {/* Progress bar with arrows */}
          <div className="mt-3 flex justify-center items-center gap-3">
            <button onClick={() => scrollLeft(scrollRef1)}>
              <span className="text-xl">‹</span>
            </button>
            <div className="relative h-0.5 w-28 bg-gray-300 mt-1">
              <div
                className="absolute top-0 left-0 h-0.5 bg-black transition-all duration-200"
                style={{ width: `${progress1}%` }}
              />
            </div>
            <button onClick={() => scrollRight(scrollRef1)}>
              <span className="text-xl">›</span>
            </button>
          </div>
        </div>

        {/* Desktop carousel (1st) */}
        <div className="hidden lg:block mt-10 w-screen py-5">
          <div
            ref={scrollRef1Desktop}
            className="flex gap-2 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none]"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {STRIP_IMAGES.map((src, i) => (
              <div
                key={i}
                className="relative min-w-[20%] aspect-[4/3] overflow-hidden snap-start"
              >
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
          {/* Progress bar with arrows */}
          <div className="mt-3 flex justify-center items-center gap-3">
            <button onClick={() => scrollLeft(scrollRef1Desktop)}>
              <span className="text-xl h-1">‹</span>
            </button>
            <div className="relative h-0.5 w-40 bg-gray-300 mt-1">
              <div
                className="absolute top-0 left-0 h-0.5 bg-black transition-all duration-200"
                style={{ width: `${progress1Desktop}%` }}
              />
            </div>
            <button onClick={() => scrollRight(scrollRef1Desktop)}>
              <span className="text-xl">›</span>
            </button>
          </div>
        </div>
      </section>

{/* About section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 overflow-hidden">
          <div className="relative min-h-[360px]">
            <Image
              src="/images/brands/hira_vermile/abouthirasection/WhatsApp_Image_2025-05-15_at_12.00.06_PM_1.webp"
              alt="Crafting jewellery"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="bg-[#fdf1e3] px-6 sm:px-10 py-10">
            <h2 className="text-4xl md:text-5xl font-medium text-center">Our Backbone</h2>
            <p className="mt-3 text-[17px] text-black/70 text-center">
              As we all know that best jewellery karigars are mostly from Calcutta. History has it that Bengali karigars from the region are amongst the most preferred labors in manufacturing of gold and diamond jewelry. follow the same ancient tradition for more than 35+ years of making gold and diamond jewelry from our skilled Bengali karigars who specialist in curating imagination into reality . we want our clients to feel the same pride when wearing the pieces from our store that we do in making your jewelry.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-4xl aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/brands/hira_vermile/abouthirasection/Hira_2.webp"
                  alt="Comparison between Hira and Others"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile carousel (2nd) */}
      <div className="mt-10 block lg:hidden py-12">
        <div
          // ref={scrollRef2}
          className="flex gap-2 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none]"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {STRIP.map((item, i) =>
            item.type === "image" ? (
              <div
                key={i}
                className="relative min-w-[40%] aspect-[4/3] overflow-hidden snap-start bg-[#f2ecdf]"
              >
                <Image src={item.src} alt="" fill className="object-cover" />
                <CartIcon />
              </div>
            ) : (
              <div
                key={i}
                className="min-w-[50%] aspect-[4/6] flex flex-col items-center justify-center text-center px-4 snap-start"
              >
                <p className="text-xs tracking-[0.2em] uppercase">{item.subheading}</p>
                <h3 className="text-xl font-semibold mt-2">{item.heading}</h3>
                <a href={item.linkHref} className="mt-2 text-sm underline underline-offset-4">
                  {item.linkText}
                </a>
              </div>
            )
          )}
        </div>
      </div>

      {/* Desktop carousel (2nd, with text + cart) */}
      <div className="hidden lg:grid mt-10 w-screen grid-cols-5 gap-2 py-5">
        {STRIP.map((item, i) =>
          item.type === "image" ? (
            <div key={i} className="relative aspect-[4/6] overflow-hidden bg-[#f2ecdf]">
              <Image src={item.src} alt="" fill className="object-cover" />
              <CartIcon />
            </div>
          ) : (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <p className="text-xs tracking-[0.2em] uppercase">{item.subheading}</p>
              <h3 className="text-xl font-semibold mt-2">{item.heading}</h3>
              <a href={item.linkHref} className="mt-2 text-sm underline underline-offset-4">
                {item.linkText}
              </a>
            </div>
          )
        )}
      </div>
    </main>
  );
}
