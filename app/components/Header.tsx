"use client";

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { menuData } from "./menuData";
import Image from 'next/image';
import { useState } from 'react';
import CartToggle from "@/app/components/CartToggle";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    "SHOP ALL",
    "NECKLACE",
    "ANKLET",
    "EARRING",
    "RING",
    "BRACELET",
  ];

  const toggleDropdown = (label: string) => {
    setActiveDropdown(prev => (prev === label ? null : label));
  };

  return (
    <>
      {/* Top Strip */}
      <div className="w-full bg-black text-white text-xs text-[15px] py-1.5 px-32 flex justify-between items-center ">
        <span>5% Off on Prepaid Orders</span>
        <select className="bg-black text-white border-none focus:outline-none text-xs text-[14px]">
          <option>ENGLISH</option>
          <option>HINDI</option>
        </select>
      </div>

      {/* Sticky Wrapper (Header + Dropdowns) */}
      <div className="sticky top-0 z-50 bg-[#fefcf8]">
        {/* Main Header */}
        <header className="bg-[#fdf9f4]">
          <div className="max-w-[1440px] mx-auto grid grid-cols-[1fr_auto_1fr] items-center px-22 py-2 min-h-[75px]">
            {/* Left Nav (Desktop) — text menus with a single trailing chevron */}
            <div className="hidden lg:flex justify-start text-[13px] font-normal tracking-wide whitespace-nowrap overflow-x-auto">
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
              <Link href="/" className="relative w-[140px] h-[37px]">
                <Image
                  src="/images/HIRA.png"
                  alt="Hira Logo"
                  fill
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Right Icons (Desktop) */}
            <div className="hidden lg:flex justify-end gap-1 items-center text-black">
              {/* User Icon */}
              <Link href="/account" className="relative w-8 h-8">
                <Image
                  src="/images/User icon.png"
                  alt="User"
                  fill
                  className="object-contain"
                />
              </Link>

              {/* Search Icon */}
              <Link href="/search" className="relative w-8 h-8">
                <Image
                  src="/images/Search icon.png"
                  alt="Search"
                  fill
                  className="object-contain"
                />
              </Link>

              {/* Cart Icon (image that opens the drawer) */}
              <CartToggle>
                <span className="relative block w-10 h-10 cursor-pointer">
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
            <button className="lg:hidden" onClick={toggleMenu}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>

        {/* Dropdown outside header but inside sticky */}
        {activeDropdown && (
          <div className="w-full py-8 px-30 z-40 flex min-h-[550px] gap-10 bg-[#fefcf8] ">
            {menuData.map((item) => {
              if (item.label === activeDropdown && item.columns) {
                return (
                  <div key={item.label} className="flex gap-10 w-full min-h-[450px]">
                    {/* Column Links */}
                    <div className="flex gap-1 flex-grow">
                      {item.columns.map((col, index) => (
                        <div key={index} className="w-[320px]">
                          <h4 className=" text-[14px] mb-4 tracking-wide uppercase">
                            {col.heading}
                          </h4>
                          <ul className="space-y-1">
                            {col.links.map((link, idx) => (
                              <li key={`${link.label}-${idx}`}>
                                <Link href={link.link} className="text-[14px] mb-3 hover:underline">
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Promo Images */}
                    <div className="flex px=[60px] gap-4">
                      {item.promos?.map((promo, i) => (
                        <div key={promo.label || i} className="w-[285px] text-left">
                          <Link href={promo.link}>
                            <div className="relative h-[440px] w-[285px]">
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

      {/* Mobile Slide Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform z-40 p-6 space-y-6 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="absolute top-4 right-4" onClick={toggleMenu}>
          <X size={24} />
        </button>

        {/* Mobile Nav Links */}
        {navLinks.map((item) => (
          <button key={item} className="w-full text-left font-medium text-sm">
            {item}
          </button>
        ))}
      </div>
    </>
  );
};

export default Header;
