"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { menuData } from "./menuData";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CartToggle from "@/app/components/CartToggle";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = ["SHOP ALL", "NECKLACE", "ANKLET", "EARRING", "RING", "BRACELET"];

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  // --- Fixed wrapper + auto spacer ---
  const fixedRef = useRef<HTMLDivElement>(null);
  const [headerH, setHeaderH] = useState(0);

  useEffect(() => {
    const el = fixedRef.current;
    if (!el) return;

    const setH = () => setHeaderH(el.offsetHeight);
    setH(); // initial

    const ro = new ResizeObserver(() => setH());
    ro.observe(el);
    window.addEventListener("resize", setH);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setH);
    };
  }, [activeDropdown, menuOpen]);

  return (
    <>
      {/* ===== FIXED WRAPPER ===== */}
      <div ref={fixedRef} className="fixed inset-x-0 top-0 z-50 bg-[#fefcf8]">
        {/* Top Strip */}
        <div className="w-full bg-black text-white text-xs sm:text-sm py-1.5 px-4 sm:px-6 md:px-10 lg:px-32 flex justify-between items-center">
          <span className="truncate">5% Off on Prepaid Orders</span>
          <select className="bg-black text-white border-none focus:outline-none text-xs sm:text-sm">
            <option>ENGLISH</option>
            <option>HINDI</option>
          </select>
        </div>

        {/* Main Header */}
        <header className="bg-[#fdf9f4]">
          <div className="max-w-[1440px] mx-auto grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 lg:px-8 py-2 min-h-[65px] lg:min-h-[75px]">
            {/* Left Nav (Desktop) */}
            <div className="hidden lg:flex justify-start text-[13px] font-normal tracking-wide overflow-x-auto">
              <nav className="flex items-center gap-4 text-[14px] font-normal tracking-wide">
                {menuData.map((item) => (
                  <div key={item.label} className="group relative">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="hover:underline underline-offset-4 transition flex items-center gap-1 py-3"
                    >
                      {item.label}
                      <Image
                        src="/images/arrow_no_bg.png"
                        alt=""
                        width={8}
                        height={8}
                        className="ml-[4px] object-contain"
                        aria-hidden
                      />
                    </button>
                  </div>
                ))}
              </nav>
            </div>

            {/* Logo Image */}
            <div className="flex justify-center">
              <Link href="/" className="relative w-[120px] sm:w-[140px] h-[30px] sm:h-[37px]">
                <Image src="/images/HIRA.png" alt="Hira Logo" fill className="object-contain" />
              </Link>
            </div>

            {/* Right Icons (Desktop) */}
            <div className="hidden lg:flex justify-end gap-2 items-center text-black">
              <Link href="/account" className="relative w-7 h-7">
                <Image src="/images/User icon.png" alt="User" fill className="object-contain" />
              </Link>

              <Link href="/search" className="relative w-7 h-7">
                <Image src="/images/Search icon.png" alt="Search" fill className="object-contain" />
              </Link>

              <CartToggle>
                <span className="relative block w-9 h-9 cursor-pointer">
                  <Image
                    src="/images/ChatGPT Image Aug 8, 2025, 11_35_04 AM.png"
                    alt="Cart"
                    fill
                    className="object-contain"
                    priority
                  />
                </span>
              </CartToggle>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden justify-self-end" onClick={toggleMenu}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>

        {/* Dropdown */}
        {activeDropdown && (
          <div className="w-full py-6 sm:py-8 px-4 sm:px-6 lg:px-30 z-40 flex flex-col lg:flex-row min-h-[300px] lg:min-h-[550px] gap-6 lg:gap-10 bg-[#fefcf8] overflow-x-auto">
            {menuData.map((item) => {
              if (item.label === activeDropdown && item.columns) {
                return (
                  <div key={item.label} className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full">
                    {/* Column Links */}
                    <div className="flex flex-wrap gap-4 flex-grow">
                      {item.columns.map((col, index) => (
                        <div key={index} className="min-w-[150px] lg:w-[320px]">
                          <h4 className="text-[13px] sm:text-[14px] mb-2 sm:mb-4 tracking-wide uppercase">
                            {col.heading}
                          </h4>
                          <ul className="space-y-1">
                            {col.links.map((link, idx) => (
                              <li key={`${link.label}-${idx}`}>
                                <Link
                                  href={link.link}
                                  className="text-[13px] sm:text-[14px] mb-2 hover:underline"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Promo Images */}
                    <div className="flex gap-4 flex-wrap lg:flex-nowrap">
                      {item.promos?.map((promo, i) => (
                        <div key={promo.label || i} className="w-[140px] sm:w-[200px] lg:w-[285px]">
                          <Link href={promo.link}>
                            <div className="relative h-[200px] sm:h-[280px] lg:h-[440px] w-full">
                              <Image
                                src={promo.image}
                                alt={promo.label}
                                fill
                                className="object-cover rounded-md"
                              />
                            </div>
                            <span className="block text-[13px] sm:text-[14px] underline font-normal leading-tight mt-2">
                              {promo.label}
                            </span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}
      </div>

      {/* Spacer */}
      <div aria-hidden style={{ height: headerH }} />

      {/* Mobile Slide Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 sm:w-72 bg-white shadow-lg transition-transform z-40 p-6 space-y-6 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="absolute top-4 right-4" onClick={toggleMenu}>
          <X size={24} />
        </button>

        {/* Mobile Nav Links */}
        {navLinks.map((item) => (
          <button key={item} className="w-full text-left font-medium text-sm py-2">
            {item}
          </button>
        ))}
      </div>
    </>
  );
};

export default Header;
