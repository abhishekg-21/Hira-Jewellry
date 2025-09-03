// app/engagement-rings/settings/_components/ProductCard.tsx
"use client";

type P = {
  id: string;
  img?: string;
  title: string;
  subtitle?: string;
  price: number;
  badge?: string;
};

export default function ProductCard({ img, title, subtitle, price, badge }: P) {
  return (
    <div className="group border rounded-xl overflow-hidden bg-white">
      <div className="relative aspect-square bg-neutral-50">
        {img ? (
          <img src={img} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-300 text-sm">
            image
          </div>
        )}
        {badge && (
          <div className="absolute left-2 top-2 text-[11px] bg-white/90 border px-2 py-0.5 rounded-full">
            {badge}
          </div>
        )}
      </div>
      <div className="p-3">
        <div className="text-[13px] font-medium text-[#0b1a2b] line-clamp-2">{title}</div>
        {subtitle && <div className="text-[12px] text-neutral-600 mt-0.5">{subtitle}</div>}
        <div className="mt-2 text-[13px]">
          <span className="font-semibold">₹{price.toLocaleString("en-IN")}</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-500">
          <span>Metal • Sizes • Ships</span>
          <button className="opacity-70 group-hover:opacity-100 underline">View</button>
        </div>
      </div>
    </div>
  );
}
