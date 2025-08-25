// app/brands/endless/_sections/HeaderEndless.tsx
"use client";

import Link from "next/link";

function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="inline-block">
      <path
        d="M3 5c0-1.1.9-2 2-2h2a1 1 0 0 1 1 .8l.6 3a1 1 0 0 1-.4 1l-1.5 1.5a15 15 0 0 0 6 6L14.2 14a1 1 0 0 1 1-.3l3 .6a1 1 0 0 1 .8 1v2a2 2 0 0 1-2 2h-.5A16.5 16.5 0 0 1 3 5.5V5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="inline-block">
      <path
        d="M12 21s7-6.1 7-11a7 7 0 0 0-14 0c0 4.9 7 11 7 11Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IconHeadset() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="inline-block">
      <path
        d="M4 12a8 8 0 1 1 16 0v4a3 3 0 0 1-3 3h-2v-5h5M8 19H7a3 3 0 0 1-3-3v-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function IconUser() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 20a8 8 0 0 1 16 0" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function IconHeart() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path
        d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7 7l8.7 8.7 8.7-8.7a5 5 0 0 0 0-7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconBag() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path
        d="M6 7h12l-1 13H7L6 7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 7V6a3 3 0 0 1 6 0v1" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function ChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" className="inline-block">
      <path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

const NAV = [
  { label: "Diamonds" },
  { label: "Engagement Rings" },
  { label: "Wedding Rings" },
  { label: "Jewelry" },
  { label: "Gifts" },
  { label: "Gemstones" },
  { label: "Education" },
];

export default function HeaderEndless() {
  return (
    <header className="border-b border-neutral-200">
      {/* Top utility bar */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center gap-6 text-[13px]">
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

      {/* Main row */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-[62px] flex items-center gap-6">
        {/* Brand wordmark */}
        <Link href="/brands/endless" className="text-[34px] leading-none font-semibold tracking-tight">
          Blue Nile
        </Link>

        {/* Primary nav */}
        <nav className="hidden lg:flex items-center gap-6 ml-6 text-[16px]">
          {NAV.map((n) => (
            <Link
              key={n.label}
              href="#"
              className="flex items-center gap-1 hover:underline underline-offset-4"
            >
              {n.label} <ChevronDown />
            </Link>
          ))}
        </nav>

        {/* Search + utilities */}
        <div className="ml-auto flex items-center gap-4">
          <div className="hidden md:flex items-center w-[340px]">
            <div className="relative w-full">
              <input
                placeholder="Search"
                className="w-full h-10 rounded-md border border-neutral-300 pl-10 pr-3 outline-none text-[14px]"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
                <IconSearch />
              </span>
            </div>
          </div>

          <Link href="#" aria-label="Account" className="p-2 hover:opacity-80">
            <IconUser />
          </Link>
          <Link href="#" aria-label="Favorites" className="p-2 hover:opacity-80">
            <IconHeart />
          </Link>
          <Link href="/cart" aria-label="Bag" className="p-2 hover:opacity-80">
            <IconBag />
          </Link>

          {/* Flag + currency */}
          <div className="hidden sm:flex items-center gap-2 text-[14px]">
            <span role="img" aria-label="US flag">
              🇺🇸
            </span>
            USD <ChevronDown />
          </div>
        </div>
      </div>
    </header>
  );
}
