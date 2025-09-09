"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { menuData } from "./menuData";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CartToggle from "@/app/components/CartToggle";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // desktop
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);   // mobile submenu
  const [activeHeading, setActiveHeading] = useState<string | null>(null);   // mobile heading

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveSubmenu(null);
    setActiveHeading(null);
  };

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

  // Decide back label dynamically
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
        <div className="w-screen bg-black text-white text-xs sm:text-sm py-1 flex justify-center items-center">
          <span>5% Off on Prepaid Orders</span>
        </div>

        {/* === Main Header === */}
        <header className="bg-[#fdf9f4] relative">
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

        {/* === Desktop Dropdown === */}
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

        {/* === Mobile Menu === */}
        {menuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-30 bg-black/40"
              onClick={() => setMenuOpen(false)}
            />

            {/* Panel */}
            <div className="lg:hidden fixed inset-0 z-40 bg-[#fefcf8] flex flex-col h-190">
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

              {/* Scrollable content */}
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
                          className="flex justify-between items-center px-5 py-4 text-[15px] font-medium text-left"
                        >
                          {item.label}
                          <span className="text-lg">›</span>
                        </button>
                      ))}
                    </nav>

                    {/* Promo Images at top-level */}
                    <div className="grid grid-cols-2 gap-2 p-5">
                      <div className="relative w-full h-40">
                        <Image
                          src="/images/mobile-promo1.jpg"
                          alt="Promo 1"
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="relative w-full h-40">
                        <Image
                          src="/images/mobile-promo2.jpg"
                          alt="Promo 2"
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="px-5 py-6 space-y-4 text-[14px]">
                      <Link
                        href="/pages/track-order"
                        className="flex items-center gap-2"
                      >
                        🚚 TRACK YOUR ORDER
                      </Link>
                      <Link href="/account/login">LOG IN</Link>

                      <div className="flex justify-between gap-3 pt-4">
                        <select className="flex-1 border border-gray-300 p-2 text-sm">
                          <option>IN / INR</option>
                          <option>US / USD</option>
                        </select>
                        <select className="flex-1 border border-gray-300 p-2 text-sm">
                          <option>English</option>
                          <option>हिंदी</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {/* Level 2: submenu headings */}
                {activeSubmenu && !activeHeading && (
                  <div className="p-5 space-y-6">
                    {menuData
                      .filter((m) => m.label === activeSubmenu)
                      .map((menu) => (
                        <div key={menu.label}>
                          {menu.columns?.map((col, i) => (
                            <button
                              key={i}
                              onClick={() => setActiveHeading(col.heading)}
                              className="flex justify-between w-full py-4 border-b text-left text-[15px] font-medium"
                            >
                              {col.heading}
                              <span className="text-lg">›</span>
                            </button>
                          ))}

                          {/* Promo Images */}
                          {menu.promos && menu.promos.length > 0 && (
                            <div className="grid grid-cols-2 gap-2 mt-6">
                              {menu.promos.map((promo, idx) => (
                                <div
                                  key={idx}
                                  className="relative w-full h-40"
                                >
                                  <Image
                                    src={promo.image}
                                    alt={promo.label}
                                    fill
                                    className="object-cover rounded"
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                )}

                {/* Level 3: heading links */}
                {activeHeading && (
                  <div className="p-5 space-y-4">
                    {menuData
                      .filter((m) => m.label === activeSubmenu)
                      .flatMap((m) => m.columns || [])
                      .filter((c) => c.heading === activeHeading)
                      .map((col, i) => (
                        <ul key={i} className="space-y-2">
                          {col.links.map((link, idx) => (
                            <li key={idx}>
                              <Link
                                href={link.link}
                                className="block text-[14px]"
                                onClick={() => setMenuOpen(false)}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ))}
                  </div>
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
