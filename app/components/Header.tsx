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
  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const fixedRef = useRef<HTMLDivElement>(null);
  const [headerH, setHeaderH] = useState(0);

  useEffect(() => {
    const el = fixedRef.current;
    if (!el) return;
    const setH = () => setHeaderH(el.offsetHeight);
    setH();
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
      <div
        ref={fixedRef}
        className="fixed inset-x-0 top-0 z-50 bg-[#fefcf8] overflow-x-hidden"
      >
        {/* === Top Strip === */}
        <div className="w-screen bg-black text-white text-xs sm:text-sm py-1 flex justify-center items-center">
          <span>5% Off on Prepaid Orders</span>
        </div>

        {/* === Main Header === */}
        <header className="bg-[#fdf9f4] relative">
          {/* Full width on mobile, constrained on desktop */}
          <div className="w-screen lg:mx-auto flex items-center justify-between px-3 lg:px-8 min-h-[65px] lg:min-h-[75px] relative">
            
            {/* === Left Section (Mobile only) === */}
            <div className="flex items-center lg:hidden pl-3">
              <button onClick={toggleMenu} aria-label="Menu">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* === Desktop Nav (lg only) === */}
            <div className="hidden lg:flex justify-start flex-1">
              <nav className="flex flex-wrap items-center gap-6 text-[14px] font-normal tracking-wide">
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

            {/* === Center Logo (Always Centered) === */}
            <div className="absolute left-1/2 -translate-x-1/2 flex justify-center">
              <Link
                href="/"
                className="relative w-[120px] sm:w-[140px] h-[32px] sm:h-[37px]"
              >
                <Image
                  src="/images/HIRA.png"
                  alt="Hira Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </Link>
            </div>

            {/* === Right Section === */}
            <div className="flex items-center gap-3 ml-auto pr-3 lg:pr-0">
              {/* Mobile Search Icon */}
              <Link href="/search" className="relative w-6 h-6 lg:hidden">
                <Image
                  src="/images/Search icon.png"
                  alt="Search"
                  fill
                  className="object-contain"
                />
              </Link>

              {/* Desktop Icons */}
              <div className="hidden lg:flex items-center gap-3">
                <Link href="/account" className="relative w-7 h-7">
                  <Image
                    src="/images/User icon.png"
                    alt="User"
                    fill
                    className="object-contain"
                  />
                </Link>
                <Link href="/search" className="relative w-7 h-7">
                  <Image
                    src="/images/Search icon.png"
                    alt="Search"
                    fill
                    className="object-contain"
                  />
                </Link>
              </div>

              {/* Cart (Both views) */}
              <CartToggle>
                <span className="relative block w-8 h-8 sm:w-9 sm:h-9 cursor-pointer">
                  <Image
                    src="/images/ChatGPT Image Aug 8, 2025, 11_35_04 AM.png"
                    alt="Cart"
                    fill
                    className="object-contain"
                  />
                </span>
              </CartToggle>
            </div>
          </div>
        </header>

        {/* === Dropdown (Desktop Only) === */}
        {activeDropdown && (
          <div className="hidden lg:flex w-full py-8 px-8 z-40 min-h-[550px] gap-10 bg-[#fefcf8] flex-wrap">
            {menuData.map((item) => {
              if (item.label === activeDropdown && item.columns) {
                return (
                  <div
                    key={item.label}
                    className="flex gap-10 w-full flex-wrap min-h-[450px]"
                  >
                    {/* Column Links */}
                    <div className="flex gap-6 flex-grow flex-wrap">
                      {item.columns.map((col, index) => (
                        <div
                          key={index}
                          className="min-w-[200px] max-w-full flex-1"
                        >
                          <h4 className="text-[14px] mb-4 tracking-wide uppercase">
                            {col.heading}
                          </h4>
                          <ul className="space-y-1">
                            {col.links.map((link, idx) => (
                              <li key={`${link.label}-${idx}`}>
                                <Link
                                  href={link.link}
                                  className="text-[14px] mb-3 hover:underline"
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
                    <div className="flex gap-6 flex-wrap">
                      {item.promos?.map((promo, i) => (
                        <div
                          key={promo.label || i}
                          className="min-w-[200px] max-w-[280px] w-full text-left"
                        >
                          <Link href={promo.link}>
                            <div className="relative h-[220px] lg:h-[440px] w-full">
                              <Image
                                src={promo.image}
                                alt={promo.label}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <span className="block text-[14px] underline font-normal leading-tight mt-2">
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
    </>
  );
};

export default Header;
