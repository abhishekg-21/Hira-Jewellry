// app/brands/endless/engagement-sale/_sections/FiltersRow.tsx
export default function FiltersRow({
  facets,
  total,
}: {
  facets: string[];
  total: number;
}) {
  return (
    <div
      className="mt-4 mb-2 flex items-center gap-2 overflow-x-auto pb-2
                 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {facets.map((f) => (
        <button
          key={f}
          className="px-3 py-1.5 text-[11px] rounded-full border border-neutral-200 bg-white hover:bg-neutral-50"
        >
          {f} ▾
        </button>
      ))}

      <span className="ml-auto text-[11px] text-neutral-600 whitespace-nowrap">
        SHOWING {total} RESULTS
      </span>
      <select className="text-[11px] bg-transparent underline underline-offset-4">
        <option>BEST SELLING</option>
        <option>PRICE, LOW TO HIGH</option>
        <option>PRICE, HIGH TO LOW</option>
        <option>ALPHABETICALLY</option>
      </select>
    </div>
  );
}
