// app/brands/endless/_sections/HeaderEndless.tsx
"use client";

import Link from "next/link";
import NavDropdowns from "./menus/NavDropdowns";

/* ---------- Icons ---------- */
function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="inline-block align-[-2px]">
      <path d="M3 5c0-1.1.9-2 2-2h2a1 1 0 0 1 1 .8l.6 3a1 1 0 0 1-.4 1L6.7 9.3a15 15 0 0 0 6 6l1.5-1.5a1 1 0 0 1 1-.3l3 .6a1 1 0 0 1 .8 1v2a2 2 0 0 1-2 2h-.5A16.5 16.5 0 0 1 3 5.5V5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="inline-block align-[-2px]">
      <path d="M12 21s7-6.1 7-11a7 7 0 0 0-14 0c0 4.9 7 11 7 11Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function IconHeadset() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="inline-block align-[-2px]">
      <path d="M4 12a8 8 0 1 1 16 0v4a3 3 0 0 1-3 3h-2v-5h5M8 19H7a3 3 0 0 1-3-3v-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconSearch() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function IconUser() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 20a8 8 0 0 1 16 0" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function IconHeart() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7 7l8.7 8.7 8.7-8.7a5 5 0 0 0 0-7Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconBag() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 7h12l-1 13H7L6 7Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 7V6a3 3 0 0 1 6 0v1" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function ChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" className="inline-block align-[-1px]">
      <path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function HeaderEndless() {
  // promo (36) + utility (48) + main (66) = 150px
  const HEADER_TOTAL = 36 + 48 + 66;

  return (
    <>
      {/* Fixed wrapper so the whole header stays in place */}
      <div className="fixed inset-x-0 top-0 z-50">
        <header className="w-full border-neutral-200 pt-1 text-[#0b1a2b]">
          {/* Promo strip */}
          <div className="bg text-white">
            <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
              <div className="h-9 flex items-center justify-center text-[13px]">
                <span className="hidden sm:inline">Up To 40% Off Jewelry, 25% Off Engagement</span>
                <span className="sm:ml-2">
                  <Link href="#" className=" underline-offset-2">Details</Link>
                </span>
              </div>
            </div>
          </div>

          {/* Utility bar: phone/links on left, SEARCH + ICONS on right */}
          <div className="mx-auto max-w-[1520px] pl-0 pr-4 sm:pl-0 sm:pr-6 lg:pl-0 lg:pr-8 bg-white">
            <div className="h-12 flex items-center justify-between gap-6 text-[13px]">
              {/* Left cluster */}
              <div className="flex items-center pl-6 gap-6">
                <span className="flex items-center gap-2">
                  <IconPhone /> 1-800-242-2728
                </span>
                <Link href="#" className="hover:underline flex items-center gap-2">
                  <IconPin /> Stores
                </Link>
                <Link href="#" className="hover:underline flex items-center gap-2">
                  <IconHeadset /> Virtual Appointment
                </Link>
              </div>

              {/* Right cluster (search + icons + currency) */}
              <div className="flex items-center gap-3">
                {/* Search (compact to fit utility bar) */}
                <div className="hidden md:block w-[320px]">
                  <label className="relative block">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
                      <IconSearch />
                    </span>
                    <input
                      type="search"
                      placeholder="Search"
                      className="w-full h-9 rounded-md border border-neutral-300 pl-10 pr-3 outline-none text-[14px] placeholder:text-neutral-500 focus:border-[#0b1a2b] focus:ring-2 focus:ring-[#0b1a2b]/20"
                    />
                  </label>
                </div>

                <Link href="#" aria-label="Account" className="p-2 rounded hover:bg focus:outline-none focus:ring-2 focus:ring-[#0b1a2b]/30">
                  <IconUser />
                </Link>
                <Link href="#" aria-label="Favorites" className="p-2 rounded hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#0b1a2b]/30">
                  <IconHeart />
                </Link>
                <Link href="/cart" aria-label="Bag" className="p-2 rounded hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#0b1a2b]/30">
                  <IconBag />
                </Link>

                <button
                  className="hidden sm:inline-flex items-center gap-2 text-[14px] py-1 rounded hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#0b1a2b]/30"
                  aria-label="Currency selector"
                >
                  <span role="img" aria-label="US flag">🇺🇸</span>
                  USD <ChevronDown />
                </button>
              </div>
            </div>
          </div>

          {/* Main header: wordmark + dropdown nav only */}
          <div className="bg-white backdrop-blur supports-[backdrop-filter]:bg-white border-neutral-200 pl-5">
            <div className=" max-w-[1520px] relative pl-0  sm:pl-0 sm:pr-6 lg:pl-0 lg:pr-8">
              <div className="h-[66px] flex items-center gap-6">
                <Link href="/brands/endless" className="text-[32px] leading-none font-semibold tracking-tight focus:outline-none focus:ring-2 focus:ring-[#0b1a2b]/30 rounded">
                  Blue Nile
                </Link>
                {/* Dropdown nav (from separate file) */}
                <NavDropdowns />
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Spacer to keep page content from sliding under the fixed header */}
      <div aria-hidden style={{ height: HEADER_TOTAL }} />
    </>
  );
}
