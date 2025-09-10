"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { menuData } from "./menuData";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CartToggle from "@/app/components/CartToggle";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // desktop hover dropdown
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);   // mobile submenu
  const [activeHeading, setActiveHeading] = useState<string | null>(null);   // mobile heading

  const fixedRef = useRef<HTMLDivElement>(null);
  const [headerH, setHeaderH] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveSubmenu(null);
    setActiveHeading(null);
  };

  // Update header height dynamically
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
  }, [menuOpen]);

  // Decide back label dynamically (mobile only)
  const getBackLabel = () => {
    if (activeHeading) return activeHeading;
    if (activeSubmenu) return activeSubmenu;
    return "BACK";
  };

  return (
    <>
      <div
        ref={fixedRef}
        className="fixed inset-x-0 top-0 z-50 bg-[#fefcf8] overflow-x-hidden"
      >
        {/* === Top Strip === */}
        <div className="w-screen bg-black text-white text-[18px] sm:text-sm py-1 flex justify-center items-center">
          <span>5% Off on Prepaid Orders</span>
        </div>

        {/* === Main Header === */}
        <header className="bg-[#fefcf8] relative">
          <div className="w-screen lg:mx-auto flex items-center justify-between px-3 lg:px-20 min-h-[65px] lg:min-h-[75px] relative">
            {/* === Left Section (Mobile only) === */}
            <div className="flex items-center lg:hidden pl-3">
              <button onClick={toggleMenu} aria-label="Menu">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* === Desktop Nav (hover open) === */}
            <div className="hidden lg:flex justify-start flex-1">
              <nav className="flex flex-wrap items-center gap-6 text-[14px] font-normal tracking-wide">
                {menuData.map((item) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="hover:underline underline-offset-4 transition flex items-center gap-1 py-3">
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

                    {/* Dropdown */}
                    {activeDropdown === item.label && item.columns && (
                      <div className="absolute left-0 top-full w-screen bg-[#fefcf8] shadow-md z-40">
                        <div className="grid grid-cols-3 gap-10 px-16 py-12 max-w-[1400px] mx-auto">
                          {/* Left Columns (Links) */}
                          <div className="col-span-2 grid grid-cols-2 gap-12">
                            {item.columns.map((col, index) => (
                              <div key={index}>
                                <h4 className="text-[14px] mb-4 tracking-wide uppercase">
                                  {col.heading}
                                </h4>
                                <ul className="space-y-2">
                                  {col.links.map((link, idx) => (
                                    <li key={`${link.label}-${idx}`}>
                                      <Link href={link.link} legacyBehavior>
                                        <a
                                          className="text-[14px] hover:underline"
                                          onClick={() => setActiveDropdown(null)}
                                        >
                                          {link.label}
                                        </a>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                          {/* Promo Images */}
                          <div className="col-span-1 flex gap-6">
                            {item.promos?.map((promo, i) => (
                              <div
                                key={promo.label || i}
                                className="flex-1 text-left"
                              >
                                <Link href={promo.link} legacyBehavior>
                                  <a
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <div className="relative h-[420px] w-[290px]">
                                      <Image
                                        src={promo.image}
                                        alt={promo.label}
                                        fill
                                        className="object-cover"
                                      />
                                    </div>
                                    <span className="block text-[14px] underline mt-2">
                                      {promo.label}
                                    </span>
                                  </a>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* === Center Logo === */}
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

              {/* Cart */}
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

        {/* === Mobile Menu (unchanged toggle style) === */}
        {menuOpen && (
          <>
            <div
              className="fixed inset-0 z-30 bg-black/40"
              onClick={() => setMenuOpen(false)}
            />
            <div className="lg:hidden fixed inset-0 z-40 bg-[#fefcf8] flex flex-col h-180">
              {/* Header with Back + Close */}
              <div className="flex justify-between items-center p-4 border-b">
                <div>
                  {activeSubmenu || activeHeading ? (
                    <button
                      onClick={() =>
                        activeHeading
                          ? setActiveHeading(null)
                          : setActiveSubmenu(null)
                      }
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      ‹ {getBackLabel()}
                    </button>
                  ) : null}
                </div>
                <button
                  onClick={toggleMenu}
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <X size={20} /> CLOSE
                </button>
              </div>

              {/* Mobile Nav Content */}
              <div className="flex-1 overflow-y-auto">
                {/* Level 1: top menu */}
                {!activeSubmenu && !activeHeading && (
                  <>
                    <nav className="flex flex-col divide-y">
                      {menuData.map((item) => (
                        <button
                          key={item.label}
                          onClick={() =>
                            item.columns || item.promos
                              ? setActiveSubmenu(item.label)
                              : (window.location.href = item.link || "#")
                          }
                          className="flex justify-between items-center px-5 py-2 text-[15px] font-medium text-left"
                        >
                          {item.label}
                          <span className="text-lg">›</span>
                        </button>
                      ))}
                    </nav>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Spacer */}
      <div aria-hidden style={{ height: headerH }} />
    </>
  );
};

export default Header;
