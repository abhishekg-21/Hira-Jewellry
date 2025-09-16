"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-sm">
      <div className="bg-black text-white px-6 py-6 w-full mx-auto">
        {/* --- Top Row (Desktop Grid | Mobile Stack) --- */}
        <div className="lg:w-350 grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-6 items-start">
          {/* Logo */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/footer images/Untitled design (4).png"
              alt="Hira Logo"
              width={180}
              height={120}
              className="w-[120px] md:w-[180px] h-auto"
              priority
            />
          </div>

          {/* Legal Areas */}
          <div>
            <h4 className="font-semilight mb-3 uppercase tracking-wide text-[16px]">
              LEGAL AREAS
            </h4>
            <ul className="space-y-2 text-[14px] uppercase font-light">
              <li>
                <Link href="/components/policies/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/components/policies/refund-policy">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/components/policies/shipping-policy">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/components/policies/terms-of-service">
                  Term of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-semilight mb-3 uppercase tracking-wide text-[16px]">
              CUSTOMER CARE
            </h4>
            <ul className="space-y-2 text-[14px] uppercase font-light">
              <li>
                <a
                  href="https://wa.me/917208247761"
                  target="_blank"
                  rel="noreferrer"
                >
                  WHATSAPP NOW: +91 7208247761
                </a>
              </li>
              <li>
                <Link href="/components/contact">Book an Appointment</Link>
              </li>
              <li>
                <Link href="/components/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/pages/track-order">Track Your Order</Link>
              </li>
            </ul>
          </div>

          {/* Our Company */}
          <div className="uppercase">
            <h4 className="font-semilight mb-3 uppercase tracking-wide text-[16px]">
              OUR COMPANY
            </h4>
            <ul className="space-y-2 text-[14px] font-light">
              <li>
                <Link href="/components/about">About Us</Link>
              </li>
              <li>
                <Link href="/blogs/news">Blog</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="w-80 border-b border-white/55">
          <h4 className="font-semilight mb-3 text-[24px] leading-7 mt-10">
            Subscribe to our newsletter
          </h4>
          <p className="text-white/70 text-[16px] mb-4">
            This is optional text. Share what customers can expect when they
            subscribe.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Subscribe to our newsletter"
              className="w-full bg-transparent border-0 border-b border-white/40 focus:outline-none placeholder-white/50 py-2 text-sm"
            />
            <button
              type="submit"
              className="w-3/4 max-w-[300px] mx-auto block bg-[#f6eadc] text-black font-medium py-3 text-sm hover:opacity-90 transition mb-10"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        {/* --- Trust Logos --- */}
        <div className="flex flex-wrap justify-center items-center mt-10">
          {[
            {
              src: "/images/brands/hira_vermile/footer/1_43046e7c-c5cf-4571-8136-43581ed1bec7.webp",
              href: "https://bis.gov.in/",
            },
            {
              src: "/images/brands/hira_vermile/footer/Untitled_design_23.webp",
              href: "https://www.gia.edu/report-check-landing",
            },
            {
              src: "/images/brands/hira_vermile/footer/4_172789a9-62bc-4cea-a257-2126a13a078e.webp",
              href: "https://sgl-labs.com/",
            },
            {
              src: "/images/brands/hira_vermile/footer/2_5ead7781-44f1-4823-8e57-a831ed6bdcf7.webp",
              href: "https://www.igi.org/",
            },
          ].map((item, i) => (
            <Link key={i} href={item.href} target="_blank">
              <Image
                src={item.src}
                alt="Trust logo"
                width={100}
                height={70}
                className="h-[80px] w-auto object-contain"
              />
            </Link>
          ))}
        </div>

        {/* --- Flipkart Logo --- */}
        <div className="flex justify-center mt-6">
          <Link href="https://www.flipkart.com/" target="_blank">
            <Image
              src="/images/brands/hira_vermile/footer/Untitled_800_x_300_px_924_x_500_px_800_x_400_px.avif"
              alt="Flipkart"
              width={140}
              height={60}
              className="h-[60px] w-auto object-contain"
            />
          </Link>
        </div>

        {/* --- Social Icons --- */}
        <div className="flex justify-center gap-6 mt-8">
          <Link href="https://www.instagram.com/hiravermeil" target="_blank">
            <Image
              src="/images/brands/hira_vermile/Hira_Vermile_Footer/2_8d61c6a9-eda2-4900-baa6-30d641dbe0b4.webp"
              alt="Instagram"
              width={28}
              height={28}
            />
          </Link>
          <Link href="https://in.pinterest.com/hiravermeil" target="_blank">
            <Image
              src="/images/brands/hira_vermile/Hira_Vermile_Footer/4_b26f82fd-d2b1-4028-afd1-10b61a920329.webp"
              alt="Pinterest"
              width={28}
              height={28}
            />
          </Link>
          <Link
            href="https://www.facebook.com/people/Hira-vermeil"
            target="_blank"
          >
            <Image
              src="/images/brands/hira_vermile/Hira_Vermile_Footer/Untitled_design_26.webp"
              alt="Facebook"
              width={28}
              height={28}
            />
          </Link>
          <Link href="#" target="_blank">
            <Image
              src="/images/brands/hira_vermile/Hira_Vermile_Footer/1_8054ff59-718d-45d8-81a9-e8533196a884.webp"
              alt="YouTube"
              width={28}
              height={28}
            />
          </Link>
        </div>

        {/* --- Diamond Marquee --- */}
        <div className="whitespace-nowrap overflow-hidden py-3 text-center text-sm border-t border-white/15 border-b border-white/15 mt-8">
          <div className="marquee inline-flex items-center gap-10">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="inline-flex items-center gap-3">
                <Image
                  src="/images/brands/hira_vermile/Hira_Vermile_Footer/Untitled_design_24.webp"
                  alt="diamond"
                  width={20}
                  height={20}
                />
                <span className="text-white/90">
                  The Authentic Jewellers since 1995
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-4 uppercase text-xs text-white/70 pb-6">
          <div className="flex flex-wrap gap-x-2 gap-y-2 justify-center md:justify-start">
            <Link href="/components/policies/privacy-policy">Privacy Policy</Link>
            <Link href="/components/policies/refund-policy">Refund Policy</Link>
            <Link href="/components/policies/shipping-policy">Shipping Policy</Link>
            <Link href="/components/policies/terms-of-service">Term of Use</Link>
          </div>
          <div className="text-center md:text-right">
            © 2025 HIRA JEWELLERY &nbsp; POWERED BY SHOPIFY
          </div>
        </div>
      </div>

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
