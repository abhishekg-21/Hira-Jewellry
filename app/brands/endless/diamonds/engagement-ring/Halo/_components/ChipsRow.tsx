// app/engagement-rings/settings/_components/ChipsRow.tsx
"use client";

const chips = [
  "Platinum", "White Gold", "Yellow Gold", "Rose Gold", "Solitaire", "Halo",
  "Vintage", "Three-Stone", "Pavé", "Sidestone", "Unique", "Ready to Ship",
];

export default function ChipsRow() {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {chips.map((c) => (
        <button
          key={c}
          type="button"
          className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[12px] text-[#0b1a2b] bg-white hover:bg-neutral-50"
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0b1a2b]" />
          {c}
        </button>
      ))}
    </div>
  );
}
