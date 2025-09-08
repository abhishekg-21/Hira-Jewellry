// components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-8 sm:pt-12 pb-4 text-xs sm:text-sm">
      <div className="mx-auto max-w-[1450px] px-4 sm:px-6">
        {/* Top Grid: logo + 3 link cols + newsletter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-6">
          {/* Logo */}
          <div className="flex items-start justify-center sm:justify-start">
            <Image
              src="/images/footer images/Untitled design (4).png"
              alt="Hira Logo"
              width={160}
              height={100}
              className="w-[140px] sm:w-[160px] md:w-[180px] h-auto"
              priority
            />
          </div>

          {/* Legal Areas */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 uppercase tracking-wide text-[12px] sm:text-sm">
              LEGAL AREAS
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/components/policies/privacy-policy">PRIVACY POLICY</Link></li>
              <li><Link href="/components/policies/refund-policy">REFUND POLICY</Link></li>
              <li><Link href="/components/policies/shipping-policy">SHIPPING POLICY</Link></li>
              <li><Link href="/components/policies/terms-of-service">TERM OF USE</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 uppercase tracking-wide text-[12px] sm:text-sm">
              CUSTOMER CARE
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="https://wa.me/917208247761" target="_blank" rel="noreferrer">
                  WHATSAPP NOW: +91 7208247761
                </a>
              </li>
              <li><Link href="/components/contact">BOOK AN APPOINTMENT</Link></li>
              <li><Link href="/components/contact">CONTACT US</Link></li>
              <li><Link href="/pages/track-order">TRACK YOUR ORDER</Link></li>
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 uppercase tracking-wide text-[12px] sm:text-sm">
              OUR COMPANY
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/components/about">ABOUT US</Link></li>
              <li><Link href="/blogs/news">BLOG</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-2 sm:mb-3 text-lg sm:text-xl md:text-[28px] leading-7 md:leading-8">
              Subscribe to our newsletter
            </h4>
            <p className="text-white/70 text-[12px] sm:text-[14px] mb-4 sm:mb-6">
              This is optional text. Share what customers can expect when they subscribe.
            </p>
            <form className="space-y-2 sm:space-y-3">
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="w-full bg-transparent border-0 border-b border-white/40 focus:outline-none placeholder-white/60 py-1.5 sm:py-2 text-xs sm:text-sm"
              />
              <button
                type="submit"
                className="w-full bg-[#f6eadc] text-black font-semibold py-2 sm:py-3 text-xs sm:text-sm"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Trust Logos Row */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-8 sm:gap-12 lg:gap-14 py-6 sm:py-8">
          {[
            "/images/footer images/Untitled design (20).png", // BIS
            "/images/footer images/GRA.png",
            "/images/footer images/R (1).png", // SGL
            "/images/footer images/logo_IGI.png",
            "/images/footer images/Flipkart.png",
          ].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt="Trust logo"
              width={110}
              height={40}
              className="h-[32px] sm:h-[36px] md:h-[42px] w-auto object-contain"
            />
          ))}
          {/* Social Icons */}
          <Link href="#" aria-label="Instagram" target="_blank">
            <Image
              src="/images/brands/hira_vermile/Hira_Vermile_Footer/2_8d61c6a9-eda2-4900-baa6-30d641dbe0b4.webp"
              alt="Instagram"
              width={30}
              height={30}
              className="h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 object-contain"
            />
          </Link>
          <Link href="#" aria-label="Pinterest" target="_blank">
            <Image
              src="/images/brands/hira_vermile/Hira_Vermile_Footer/4_b26f82fd-d2b1-4028-afd1-10b61a920329.webp"
              alt="Pinterest"
              width={30}
              height={30}
              className="h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 object-contain"
            />
          </Link>
          <Link href="#" aria-label="Facebook" target="_blank">
            <Image
              src="/images/brands/hira_vermile/Hira_Vermile_Footer/Untitled_design_26.webp"
              alt="Facebook"
              width={28}
              height={28}
              className="h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 object-contain"
            />
          </Link>
          <Link href="#" aria-label="YouTube" target="_blank">
            <Image
              src="/images/brands/hira_vermile/Hira_Vermile_Footer/1_8054ff59-718d-45d8-81a9-e8533196a884.webp"
              alt="YouTube"
              width={28}
              height={28}
              className="h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 object-contain"
            />
          </Link>
        </div>

        {/* Diamond marquee */}
        <div className="whitespace-nowrap overflow-hidden py-2 sm:py-3 text-center text-xs sm:text-sm border-t border-b border-white/15">
          <div className="marquee inline-flex items-center gap-6 sm:gap-10">
            {Array.from({ length: 18 }).map((_, i) => (
              <span key={i} className="inline-flex items-center gap-2 sm:gap-3">
                <Image
                  src="/images/brands/hira_vermile/Hira_Vermile_Footer/Untitled_design_24.webp"
                  alt="Diamond"
                  width={24}
                  height={24}
                  className="h-7 sm:h-8 md:h-10 w-7 sm:w-8 md:w-10 object-contain"
                />
                <span className="text-white/90 text-[11px] sm:text-xs md:text-sm">
                  The Authentic Jewellers since 1995
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row mt-4 gap-y-2 md:gap-y-0 gap-x-4 sm:gap-x-5 justify-center md:justify-between items-center text-white/70 text-[11px] sm:text-xs md:text-sm">
          <div className="flex flex-wrap gap-x-3 sm:gap-x-5 gap-y-2 justify-center md:justify-start">
            <Link href="/policies/privacy-policy">PRIVACY POLICY</Link>
            <Link href="/policies/refund-policy">REFUND POLICY</Link>
            <Link href="/policies/shipping-policy">SHIPPING POLICY</Link>
            <Link href="/policies/terms-of-service">TERM OF USE</Link>
          </div>
          <div className="mt-2 md:mt-0">© 2025 HIRA JEWELLERY</div>
        </div>
      </div>

      {/* Marquee animation */}
      <style jsx>{`
        @keyframes marqueeMove {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee {
          min-width: 200%;
          animation: marqueeMove 30s linear infinite;
        }
      `}</style>
    </footer>
  );
}
