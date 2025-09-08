// app/components/CollectionControls.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type SortKey =
  | "best-selling"
  | "price-asc"
  | "price-desc"
  | "title-asc"
  | "title-desc";

export default function CollectionControls({
  total,
  currentSort,
  currentMin,
  currentMax,
}: {
  total: number;
  currentSort: SortKey;
  currentMin?: number;
  currentMax?: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [open, setOpen] = useState(false);
  const [min, setMin] = useState(currentMin ?? "");
  const [max, setMax] = useState(currentMax ?? "");

  const applyFilter = () => {
    const qp = new URLSearchParams(searchParams.toString());
    if (min !== "" && Number(min) >= 0) qp.set("min", String(min));
    else qp.delete("min");
    if (max !== "" && Number(max) >= 0) qp.set("max", String(max));
    else qp.delete("max");
    qp.set("page", "1");
    router.push(`?${qp.toString()}`);
    setOpen(false);
  };

  const clearFilter = () => {
    const qp = new URLSearchParams(searchParams.toString());
    qp.delete("min");
    qp.delete("max");
    qp.set("page", "1");
    router.push(`?${qp.toString()}`);
    setMin("");
    setMax("");
    setOpen(false);
  };

  const updateSort = (value: SortKey) => {
    const qp = new URLSearchParams(searchParams.toString());
    qp.set("sort", value);
    qp.set("page", "1");
    router.push(`?${qp.toString()}`);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
      {/* Left: FILTER button */}
      <div className="relative">
        <button
          className="text-xs sm:text-sm tracking-wide hover:underline underline-offset-4"
          onClick={() => setOpen((v) => !v)}
        >
          FILTER +
        </button>

        {open && (
          <div className="absolute z-10 mt-2 w-[240px] sm:w-[280px] rounded-md border bg-white p-3 sm:p-4 shadow">
            <div className="text-xs font-medium mb-2">Price (₹ paise)</div>
            <div className="flex items-center gap-2">
              <input
                placeholder="Min"
                className="w-full border px-2 py-1 text-xs sm:text-sm"
                value={min as any}
                onChange={(e) => setMin(e.target.value as any)}
                inputMode="numeric"
              />
              <span className="text-sm text-black">–</span>
              <input
                placeholder="Max"
                className="w-full border px-2 py-1 text-xs sm:text-sm"
                value={max as any}
                onChange={(e) => setMax(e.target.value as any)}
                inputMode="numeric"
              />
            </div>
            <div className="mt-3 flex justify-end gap-2">
              <button className="text-xs sm:text-sm underline" onClick={clearFilter}>
                Clear
              </button>
              <button
                className="text-xs sm:text-sm border px-2 sm:px-3 py-1 hover:bg-black hover:text-white"
                onClick={applyFilter}
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Middle: showing results */}
      <div className="text-xs sm:text-sm tracking-wide">
        SHOWING {total} RESULTS
      </div>

      {/* Right: Sort select */}
      <div className="text-left sm:text-right">
        <label className="sr-only">Sort</label>
        <select
          value={currentSort}
          onChange={(e) => updateSort(e.target.value as SortKey)}
          className="text-xs sm:text-sm bg-transparent underline underline-offset-4 cursor-pointer"
        >
          <option value="best-selling">BEST SELLING</option>
          <option value="price-asc">PRICE, LOW TO HIGH</option>
          <option value="price-desc">PRICE, HIGH TO LOW</option>
          <option value="title-asc">ALPHABETICALLY, A-Z</option>
          <option value="title-desc">ALPHABETICALLY, Z-A</option>
        </select>
      </div>
    </div>
  );
}
