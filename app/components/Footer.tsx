"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-4 text-sm">
      <div className="mx-auto max-w-[1450px] px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-3 pb-10">
          {/* Logo */}
          <div className="flex items-start justify-center sm:justify-start">
            <Image
              src="/images/footer images/Untitled design (4).png"
              alt="Hira Logo"
              width={180}
              height={120}
              className="w-[140px] md:w-[180px] h-auto"
              priority
            />
          </div>

          {/* Links grouped for mobile */}
          <div className="sm:col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            {/* Legal Areas */}
            <div>
              <h4 className="font-semibold mb-3 uppercase tracking-wide">LEGAL AREAS</h4>
              <ul className="space-y-2">
                <li><Link href="/components/policies/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/components/policies/refund-policy">Refund Policy</Link></li>
                <li><Link href="/components/policies/shipping-policy">Shipping Policy</Link></li>
                <li><Link href="/components/policies/terms-of-service">Term of Use</Link></li>
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h4 className="font-semibold mb-3 uppercase tracking-wide">CUSTOMER CARE</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://wa.me/917208247761" target="_blank" rel="noreferrer">
                    WhatsApp Now: +91 7208247761
                  </a>
                </li>
                <li><Link href="/components/contact">Book an Appointment</Link></li>
                <li><Link href="/components/contact">Contact Us</Link></li>
                <li><Link href="/pages/track-order">Track Your Order</Link></li>
              </ul>
            </div>

            {/* Our Company */}
            <div>
              <h4 className="font-semibold mb-3 uppercase tracking-wide">OUR COMPANY</h4>
              <ul className="space-y-2">
                <li><Link href="/components/about">About Us</Link></li>
                <li><Link href="/blogs/news">Blog</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-3 text-lg md:text-[28px] leading-8">
              Subscribe to our newsletter
            </h4>
            <p className="text-white/70 text-[14px] mb-4">
              This is optional text. Share what customers can expect when they subscribe.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="w-full bg-transparent border-0 border-b border-white/40 focus:outline-none placeholder-white/60 py-2"
              />
              <button
                type="submit"
                className="w-full bg-[#f6eadc] text-black font-semibold py-3"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Trust Logos Row */}
        <div className="flex flex-wrap justify-center gap-10 py-8">
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
              className="h-[38px] w-auto object-contain"
            />
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 py-4">
          <Link href="#" aria-label="Instagram" target="_blank">
            <Image src="/images/brands/hira_vermile/Hira_Vermile_Footer/2_8d61c6a9-eda2-4900-baa6-30d641dbe0b4.webp" alt="Instagram" width={30} height={30} className="h-8 w-8 object-contain" />
          </Link>
          <Link href="#" aria-label="Pinterest" target="_blank">
            <Image src="/images/brands/hira_vermile/Hira_Vermile_Footer/4_b26f82fd-d2b1-4028-afd1-10b61a920329.webp" alt="Pinterest" width={30} height={30} className="h-8 w-8 object-contain" />
          </Link>
          <Link href="#" aria-label="Facebook" target="_blank">
            <Image src="/images/brands/hira_vermile/Hira_Vermile_Footer/Untitled_design_26.webp" alt="Facebook" width={28} height={28} className="h-8 w-8 object-contain" />
          </Link>
          <Link href="#" aria-label="YouTube" target="_blank">
            <Image src="/images/brands/hira_vermile/Hira_Vermile_Footer/1_8054ff59-718d-45d8-81a9-e8533196a884.webp" alt="YouTube" width={28} height={28} className="h-8 w-8 object-contain" />
          </Link>
        </div>

        {/* Diamond marquee */}
        <div className="whitespace-nowrap overflow-hidden py-3 text-center text-sm border-t border-white/15 border-b border-white/15">
          <div className="marquee inline-flex items-center gap-10">
            {Array.from({ length: 18 }).map((_, i) => (
              <span key={i} className="inline-flex items-center gap-3">
                <Image src="/images/brands/hira_vermile/Hira_Vermile_Footer/Untitled_design_24.webp" alt="diamond" width={28} height={28} className="h-8 w-8 object-contain" />
                <span className="text-white/90">The Authentic Jewellers since 1995</span>
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-4 gap-3 text-xs text-white/70">
          <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center md:justify-start">
            <Link href="/policies/privacy-policy">Privacy Policy</Link>
            <Link href="/policies/refund-policy">Refund Policy</Link>
            <Link href="/policies/shipping-policy">Shipping Policy</Link>
            <Link href="/policies/terms-of-service">Term of Use</Link>
          </div>
          <div className="flex justify-center">
            <Image src="/images/paypal.png" alt="PayPal" width={60} height={20} className="h-6 w-auto object-contain" />
          </div>
          <div className="text-center md:text-right">
            © 2025 HIRA JEWELLERY &nbsp; POWERED BY SHOPIFY
          </div>
        </div>
      </div>

      {/* Marquee animation */}
      <style jsx>{`
        @keyframes marqueeMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee {
          min-width: 200%;
          animation: marqueeMove 30s linear infinite;
        }
      `}</style>
    </footer>
  );
}
