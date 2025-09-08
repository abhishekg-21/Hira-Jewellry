"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { menuData } from "./menuData";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CartToggle from "@/app/components/CartToggle";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };
  const toggleMobileDropdown = (label: string) => {
    setMobileDropdownOpen((prev) => (prev === label ? null : label));
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
      <div ref={fixedRef} className="fixed inset-x-0 top-0 z-50 bg-[#fefcf8]">
        {/* === Top Strip === */}
        <div className="w-full bg-black text-white text-xs sm:text-sm py-1 flex justify-center items-center">
          <span>5% Off on Prepaid Orders</span>
        </div>

        {/* === Main Header === */}
        <header className="bg-[#fdf9f4] relative">
          <div className="w-full mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 min-h-[65px] lg:min-h-[75px] relative">
            {/* === Left Section (Mobile: menu + search) === */}
            <div className="flex items-center gap-4 lg:hidden">
              <button onClick={toggleMenu} aria-label="Menu">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <Link href="/search" className="relative w-6 h-6">
                <Image
                  src="/images/Search icon.png"
                  alt="Search"
                  fill
                  className="object-contain"
                />
              </Link>
            </div>

            {/* === Desktop Nav === */}
            <div className="hidden lg:flex justify-start">
              <nav className="flex items-center gap-6 text-[14px] font-normal tracking-wide">
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

            {/* === Logo (Always Centered) === */}
            <div className="absolute left-1/2 -translate-x-1/2 flex justify-center">
              <Link href="/" className="relative w-[110px] sm:w-[140px] h-[32px] sm:h-[37px]">
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
            <div className="flex items-center">
              {/* Desktop icons */}
              <div className="hidden lg:flex items-center gap-4">
                <Link href="/account" className="relative w-6 h-6 lg:w-7 lg:h-7">
                  <Image
                    src="/images/User icon.png"
                    alt="User"
                    fill
                    className="object-contain"
                  />
                </Link>
                <Link href="/search" className="relative w-6 h-6 lg:w-7 lg:h-7">
                  <Image
                    src="/images/Search icon.png"
                    alt="Search"
                    fill
                    className="object-contain"
                  />
                </Link>
              </div>

              {/* Cart (always visible) */}
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

        {/* === Desktop Dropdown === */}
        {activeDropdown && (
          <div className="hidden lg:flex w-full py-8 px-8 z-40 min-h-[550px] gap-10 bg-[#fefcf8]">
            {menuData.map((item) => {
              if (item.label === activeDropdown && item.columns) {
                return (
                  <div key={item.label} className="flex gap-10 w-full min-h-[450px]">
                    {/* Column Links */}
                    <div className="flex gap-6 flex-grow flex-wrap">
                      {item.columns.map((col, index) => (
                        <div key={index} className="min-w-[200px]">
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
                        <div key={promo.label || i} className="w-[220px] lg:w-[285px] text-left">
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

      {/* === Mobile Slide Drawer === */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform z-40 p-6 space-y-6 transform overflow-y-auto ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="absolute top-4 right-4" onClick={toggleMenu}>
          <X size={24} />
        </button>

        {menuData.map((item) => (
          <div key={item.label} className="py-2">
            {item.columns ? (
              <>
                <button
                  onClick={() => toggleMobileDropdown(item.label)}
                  className="w-full text-left font-medium text-sm flex justify-between items-center"
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      mobileDropdownOpen === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                    mobileDropdownOpen === item.label ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <div className="mt-4 pl-4 space-y-4">
                    {item.columns.map((col, index) => (
                      <div key={index}>
                        <h5 className="text-[13px] font-semibold uppercase mb-2">
                          {col.heading}
                        </h5>
                        <ul className="space-y-1">
                          {col.links.map((link, idx) => (
                            <li key={`${link.label}-${idx}`}>
                              <Link
                                href={link.link}
                                className="block text-[14px] hover:underline"
                                onClick={toggleMenu}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {item.promos && (
                      <div className="mt-6 space-y-4">
                        {item.promos.map((promo, i) => (
                          <div key={promo.label || i} className="text-left">
                            <Link href={promo.link} onClick={toggleMenu}>
                              <div className="relative h-[150px] w-full">
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
                    )}
                  </div>
                </div>
              </>
            ) : (
              <Link
                href={item.link || "#"}
                className="w-full text-left font-medium text-sm"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Header;
