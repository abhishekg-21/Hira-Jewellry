// app/engagement-rings/settings/page.tsx
import StepsBar from "./_components/StepsBar";
import HeadingSale from "./_components/HeadingSale";
import ChipsRow from "./_components/ChipsRow";
import Toolbar from "./_components/Toolbar";
import ProductGrid from "./_components/ProductGrid";

/** demo data — swap with real API later */
const PRODUCTS = Array.from({ length: 28 }).map((_, i) => ({
  id: `ring-${i + 1}`,
  title:
    [
      "Classic Tapered Solitaire Engagement Ring",
      "Three-Stone Sapphire and Diamond Engagement Ring",
      "Claw-Prong Pavé Solitaire Engagement Ring",
      "Halo Sapphire and Diamond Engagement Ring",
      "Knife-Edge Solitaire Engagement Ring",
    ][i % 5],
  subtitle:
    ["Platinum", "14k White Gold", "18k Yellow Gold", "Rose Gold", "Platinum"][
      i % 5
    ],
  price: [43800, 51200, 47200, 59800, 65500][i % 5],
  img: `/images/placeholders/ring-${(i % 10) + 1}.jpg`, // optional; fine if missing
  badge: i % 9 === 0 ? "CREATIVE STUDIO" : undefined,
}));

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* full-bleed stepper */}
      <StepsBar />

      {/* centered content */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <HeadingSale />
        <ChipsRow />
      </div>

      {/* full-bleed toolbar + grid to match screenshot */}
      <Toolbar total={151590} showing={PRODUCTS.length} />
      <ProductGrid products={PRODUCTS} />
    </main>
  );
}
