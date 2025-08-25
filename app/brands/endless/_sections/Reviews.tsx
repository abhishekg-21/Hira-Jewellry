import Section from "./Section";

export default function Reviews() {
  const items = Array.from({ length: 6 }).map((_, i) => ({
    stars: "★★★★★",
    copy:
      "“Loved the entire experience—great selection, fair pricing, and fast delivery. The ring is stunning!”",
  }));

  return (
    <Section className="py-12">
      <div className="text-[11px] tracking-[0.3em] text-neutral-500 mb-3">REVIEWS</div>

      <div
        className="
          flex gap-4 overflow-x-auto snap-x pb-2
          [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
        "
      >
        {items.map((it, i) => (
          <div key={i} className="min-w-[320px] snap-start p-4 bg-white">
            <div className="text-yellow-500">{it.stars}</div>
            <p className="text-sm mt-2 leading-6">{it.copy}</p>
            <div className="text-xs text-neutral-500 mt-3">— Verified Buyer</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
