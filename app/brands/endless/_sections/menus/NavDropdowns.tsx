"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import DiamondsMega, { DropdownPanel } from "./DiamondsMega";
import EngagementMega from "./EngagementMega";
import WeddingMega from "./WeddingMega";
import JewelryMega from "./JewelryMega";
import GiftsMega from "./GiftsMega";
import GemstonesMega from "./GemstonesMega";
import EducationMega from "./EducationMega"; // ← NEW

import { NAV_LABELS, MENUS, MenuColumn, MenuLink } from "./menuData";

function ChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" className="inline-block align-[-1px]">
      <path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function NavDropdowns() {
  const [open, setOpen] = useState<string | null>(null);

  // keep dropdown open for 1s after mouse leaves
  const t = useRef<ReturnType<typeof setTimeout> | null>(null);
  const delayClose = () => {
    if (t.current) clearTimeout(t.current);
    t.current = setTimeout(() => setOpen(null), 1000);
  };
  const cancelClose = () => {
    if (t.current) clearTimeout(t.current);
    t.current = null;
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div onMouseEnter={cancelClose} onMouseLeave={delayClose}>
      <nav className="hidden lg:flex items-stretch gap-2 text-[16px]">
        {NAV_LABELS.map((label) => (
          <div key={label} onMouseEnter={() => { cancelClose(); setOpen(label); }}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={open === label}
              onFocus={() => setOpen(label)}
              className="px-2 h-[44px] inline-flex items-center gap-1 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0b1a2b]/30"
            >
              {label} <ChevronDown />
            </button>
          </div>
        ))}
      </nav>

      {open && (
        <div className="absolute inset-x-0 top-full z-50" onMouseEnter={cancelClose} onMouseLeave={delayClose}>
          {open === "Diamonds" ? (
            <DiamondsMega />
          ) : open === "Engagement Rings" ? (
            <EngagementMega brandBase="/brands/endless" />
          ) : open === "Wedding Rings" ? (
            <WeddingMega />
          ) : open === "Jewelry" ? (
            <JewelryMega />
          ) : open === "Gifts" ? (
            <GiftsMega />
          ) : open === "Gemstones" ? (
            <GemstonesMega />
          ) : open === "Education" ? (
            <EducationMega /> 
          ) : (() => {
              const cols: MenuColumn[] | undefined =
                (MENUS as Record<string, MenuColumn[]>)[open];

              return cols ? (
                <DropdownPanel label={open} className="gap-6">
                  {cols.map((col: MenuColumn) => (
                    <div key={col.heading}>
                      <div className="text-[13px] font-semibold">{col.heading}</div>
                      <ul className="space-y-1">
                        {col.links.map((l: MenuLink) => (
                          <li key={l.label}>
                            <Link
                              href={l.href}
                              className="block py-[6px] text-[14px] hover:underline underline-offset-4"
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </DropdownPanel>
              ) : null;
            })()}
        </div>
      )}
    </div>
  );
}
