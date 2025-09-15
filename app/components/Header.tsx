"use client";

import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { menuData } from "./menuData";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CartToggle from "@/app/components/CartToggle";

const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // desktop
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null); // mobile submenu
  const [activeHeading, setActiveHeading] = useState<string | null>(null); // mobile heading

  const fixedRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [headerH, setHeaderH] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveSubmenu(null);
    setActiveHeading(null);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
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
  }, [activeDropdown, menuOpen]);

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (activeDropdown && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

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
        <div className="w-screen bg-black text-white text-[18px] sm:text-sm py-1 flex justify-center items-center">
          <span>5% Off on Prepaid Orders</span>
        </div>

        {/* === Desktop Header === */}
        <header className="bg-[#fefcf8] relative hidden lg:block">
          <div className="w-full max-w-[1450px] mx-auto flex items-center justify-between px-23 min-h-[80px] relative">
            {/* === Left: Navigation Menu === */}
            <nav
              className="flex items-center gap-4 text-[13.5px] font-medium tracking-wide"
              ref={dropdownRef}
            >
              {menuData.map((item) => (
                <div key={item.label} className="relative">
                  <button
  onClick={() => toggleDropdown(item.label)}
  className="flex items-center gap-1 cursor-pointer"
>
  <span
    className={`relative after:absolute after:left-0 after:-bottom-0.5 after:h-[0.5px] after:bg-black after:transition-all after:duration-300 
      ${
        activeDropdown === item.label
          ? "after:w-full"
          : "after:w-0 hover:after:w-full"
      }`}
  >
    {item.label}
  </span>

  {item.columns && (
    <ChevronDown
      size={16}
      className={`transition-transform duration-300 ${
        activeDropdown === item.label ? "rotate-180" : ""
      }`}
    />
  )}
</button>

                  {/* === Dropdown === */}
{activeDropdown === item.label && item.columns && (
  <div
    className="fixed left-0 w-screen bg-[#fefcf8] shadow-lg z-40"
    style={{ top: headerH }}
  >
    <div className="max-w-[1450px] h-135 flex pt-8 pl-32">
      
      {/* === Left: Menu Columns === */}
      <div className="flex-1 grid grid-cols-2">
        {item.columns.map((col, i) => (
          <div key={i}>
            <h4 className="font-semibold mb-3">{col.heading}</h4>
            <ul className="space-y-2 text-sm">
              {col.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.link}
                    className="hover:underline"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* === Right: Promo Images === */}
      {item.promos && (
        <div className="flex gap-4">
          {item.promos.map((promo, idx) => (
            <div key={idx} className="w-[300px] flex flex-col items-center space-y-2">
              {/* Image */}
              <div className="relative w-full h-[450px] overflow-hidden p-10">
                <Image
                  src={promo.image}
                  alt={promo.label}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Label below */}
              {promo.link && (
                <Link
                  href={promo.link}
                  className="text-[13px] font-medium text-black hover:underline text-right"
                >
                  {promo.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}

    </div>
  </div>
)}

                </div>
              ))}
            </nav>

            {/* === Center Logo === */}
            <div className="absolute left-1/2 -translate-x-1/2 flex justify-center">
              <Link href="/" className="relative w-[140px] h-[37px]">
                <Image
                  src="/images/HIRA.png"
                  alt="Hira Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </Link>
            </div>

            {/* === Right Icons === */}
            <div className="flex items-center gap-2">
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
              <CartToggle>
                <span className="relative block w-7 h-9 cursor-pointer">
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

        {/* === Mobile Header === */}
        <header className="bg-[#fefcf8] lg:hidden shadow">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Left: Hamburger */}
            <button onClick={toggleMenu} aria-label="Menu">
              <Menu size={24} />
            </button>

            {/* Center: Logo */}
            <Link href="/" className="relative w-[90px] h-[28px]">
              <Image
                src="/images/HIRA.png"
                alt="Hira Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>

            {/* Right: Search + Cart (User removed) */}
            <div className="flex items-center">
              <Link href="/search" className="relative w-8 h-8">
                <Image
                  src="/images/Search icon.png"
                  alt="Search"
                  fill
                  className="object-contain"
                />
              </Link>
              <CartToggle>
                <span className="relative block w-10 h-10 cursor-pointer">
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

        {/* === Mobile Menu === */}
        {menuOpen && (
          <>
            <div
              className="fixed inset-0 z-30 bg-black/40"
              onClick={() => setMenuOpen(false)}
            />
            <div className="lg:hidden fixed inset-0 z-40 bg-[#fefcf8] flex flex-col h-180">
              {/* Header with Close (top row) */}
<div className="flex flex-col">
  {/* Row 1: Close always visible */}
  <div className="flex items-center p-4">
    <button
      onClick={toggleMenu}
      className="flex items-center gap-2 text-sm font-medium"
    >
      <X size={20} /> CLOSE
    </button>
  </div>

  {/* Row 2: Back button (only when submenu/heading active) */}
  {activeSubmenu || activeHeading ? (
    <div className="flex items-center px-4 pb-3 text-[16px]">
      <button
        onClick={() =>
          activeHeading ? setActiveHeading(null) : setActiveSubmenu(null)
        }
        className="flex items-center gap-2 text-[17px] font-medium"
      >
        ‹ {getBackLabel()}
      </button>
    </div>
  ) : null}
</div>

              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto">
                {/* Level 1 */}
                {!activeSubmenu && !activeHeading && (
                  <>
                    <nav className="flex flex-col px-5">
  {menuData.map((item, idx) => (
    <button
      key={item.label}
      onClick={() =>
        item.columns || item.promos
          ? setActiveSubmenu(item.label)
          : (window.location.href = item.link || "#")
      }
      className={`flex justify-between items-center py-1.5 text-[16px] font-medium text-left 
        ${idx !== menuData.length - 1 ? "border-b border-gray-300" : ""}`}
    >
      {item.label}
      <ArrowRight />
    </button>
  ))}
</nav>


                    {/* Promo Images */}
                    <div className="grid grid-cols-2 pt-4 py-2 pl-4">
                      <div className="relative w-40 h-60">
                        <Image
                          src="/images/brands/hira_vermile/dropdown/riyaa.02_1749977731_3655400610936832390_62329184037.webp"
                          alt="Promo 1"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative w-40 h-60">
                        <Image
                          src="/images/brands/hira_vermile/dropdown/IMG_20250503_181725_f7d8d992-3cbb-496a-81de-6cdfe75be1f0.webp"
                          alt="Promo 2"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="px-5 py-3 space-y-2 text-[14px]">
                      <Link
                        href="/pages/track-order"
                        className="flex items-center gap-2"
                      >
                        <span className="relative w-7 h-7">
    <Image
      src="/images/brands/hira_vermile/header/Untitled design (100).png" // 👉 replace with your truck icon path
      alt="Track Order"
      fill
      className="object-contain"
    />
  </span>
                        TRACK YOUR ORDER
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

                {/* Level 2 */}
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
    className={`flex justify-between w-full py-2 text-left text-[17px] font-medium 
      ${i !== menu.columns.length - 1 ? "border-b border-gray-300" : ""}`}
  >
    {col.heading}
    <ArrowRight />
  </button>
))}


                          {/* Promo Images */}
                          {menu.promos && menu.promos.length > 0 && (
                            <div className="grid grid-cols-2 gap-2 mt-6">
                              {menu.promos.map((promo, idx) => (
                                <div
                                  key={idx}
                                  className="relative w-40 h-60"
                                >
                                  <Image
                                    src={promo.image}
                                    alt={promo.label}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                )}

                {/* Level 3 */}
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
