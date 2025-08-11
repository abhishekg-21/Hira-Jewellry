"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-4 text-sm">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-white/10 pb-12">
          {/* Logo */}
          <div>
            <Image src="/images/footer images/Untitled design (4).png" alt="Hira Logo" width={100} height={80} />
          </div>

          {/* Legal Areas */}
          <div>
            <h4 className="font-semibold mb-2">LEGAL AREAS</h4>
            <ul className="space-y-1">
              <li><Link href="/policies/privacy-policy">PRIVACY POLICY</Link></li>
              <li><Link href="/policies/refund-policy">REFUND POLICY</Link></li>
              <li><Link href="/policies/shipping-policy">SHIPPING POLICY</Link></li>
              <li><Link href="/policies/terms-of-service">TERM OF USE</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-semibold mb-2">CUSTOMER CARE</h4>
            <ul className="space-y-1">
              <li><a href="https://wa.me/917208247761" target="_blank">WHATSAPP NOW: +91 7208247761</a></li>
              <li><Link href="/pages/appointment">BOOK AN APPOINTMENT</Link></li>
              <li><Link href="/pages/contact">CONTACT US</Link></li>
              <li><Link href="/pages/track-order">TRACK YOUR ORDER</Link></li>
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h4 className="font-semibold mb-2">OUR COMPANY</h4>
            <ul className="space-y-1">
              <li><Link href="/pages/about">ABOUT US</Link></li>
              <li><Link href="/blogs/news">BLOG</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-2">Subscribe to our newsletter</h4>
            <p className="text-sm text-white/70 mb-3">
              This is optional text. Share what customers can expect when they subscribe.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="w-full bg-transparent border-b border-white/40 focus:outline-none placeholder-white/50 py-2"
              />
              <button type="submit" className="w-full bg-[#fdf5ea] text-black font-semibold py-2">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Trust Logos Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 py-6 border-b border-white/10">
          {[
            "/images/footer images/Untitled design (20).png",
            "/images/footer images/GRA.png",
            "/images/footer images/R (1).png",
            "/images/footer images/logo_IGI.png",
            "/images/footer images/Flipkart.png"
          ].map((src, i) => (
            <Image key={i} src={src} alt="Logo" width={100} height={100} className="object-contain" />
          ))}
        </div>

        {/* Scrolling Marquee */}
        <div className="whitespace-nowrap overflow-hidden py-3 text-center text-sm border-b border-white/10">
          <div className="animate-marquee inline-block">
            {Array(10).fill("The Authentic Jewellers since 1995 ✦").join(" ")}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/60">
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Link href="/policies/privacy-policy">PRIVACY POLICY</Link>
            <Link href="/policies/refund-policy">REFUND POLICY</Link>
            <Link href="/policies/shipping-policy">SHIPPING POLICY</Link>
            <Link href="/policies/terms-of-service">TERM OF USE</Link>
          </div>
          <div>
            <p>© 2025 HIRA JEWELLERY &nbsp; | &nbsp; 
              <Image src="/images/payment-paypal.png" alt="Paypal" width={25} height={25} className="inline ml-2" />
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-6 text-white text-lg">
          <Link href="#"><i className="fab fa-instagram"></i></Link>
          <Link href="#"><i className="fab fa-pinterest"></i></Link>
          <Link href="#"><i className="fab fa-facebook"></i></Link>
          <Link href="#"><i className="fab fa-youtube"></i></Link>
        </div>
      </div>

      {/* Marquee animation style */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          min-width: 200%;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </footer>
  );
}
