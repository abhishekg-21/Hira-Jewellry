// app/diamonds/round/page.tsx
import StepsBar from "./_components/StepsBar";
import FiltersBar from "./_components/FiltersBar";
import ScatterPlot from "./_components/ScatterPlot";
import ProductGrid from "./_components/ProductGrid";
import DiamondFinder from "./_components/DiamondFinder";
// import SkeletonGrid from "./_components/SkeletonGrid";
// import FAQSection from "./_components/FAQSection";
// import ExploreMore from "./_components/ExploreMore";
// import FooterDense from "./_components/FooterDense";

export const runtime = "edge";

export const metadata = {
  title: "Round Cut Diamonds | Endless by Hira",
  description:
    "Explore round cut diamonds with filters for carat, color, clarity, cut and more.",
};

export default async function Page() {
  // Pretend SSR fetch
  const products = Array.from({ length: 24 }).map((_, i) => ({
    id: `r-${i + 1}`,
    title: `0.${(7 + (i % 9)).toFixed(2)} ct Round Cut Diamond`,
    subtitle: ["Excellent", "Very Good"][i % 2],
    price: 50000 + i * 2500,
    img: `/images/diamonds/sample-${(i % 8) + 1}.jpg`, // swap with your CDN
    badge: i % 5 === 0 ? "Best Value" : i % 7 === 0 ? "In Stock" : undefined,
  }));

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Top breadcrumb-ish steps */}
        <div className="pt-5 sm:pt-7">
          <StepsBar />
        </div>

        <DiamondFinder />

        {/* Filter pills / controls */}
        <section className="mt-6 sm:mt-8">
          <FiltersBar />
        </section>

        {/* Scatter plot */}
        <section className="mt-6 sm:mt-8">
          <ScatterPlot />
        </section>

        {/* Grid results */}
        <section className="mt-6 sm:mt-8">
          <ProductGrid products={products} />
        </section>
      </div>

      {/* FAQ */}
      {/* <section className="mt-12 sm:mt-16"> */}
        {/* <FAQSection /> */}
      {/* </section> */}

      {/* Explore more */}
      {/* <section className="mt-10 sm:mt-14"> */}
        {/* <ExploreMore /> */}
      {/* </section> */}

      
    </main>
  );
}
