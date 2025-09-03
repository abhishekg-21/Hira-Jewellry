import EarringsHero from "./_components/EarringsHero";
import EarringsBuilder from "./_components/EarringsBuilder";
import ContentSplit from "./_components/ContentSplit";
// import CategoryColumns from "./_components/CategoryColumns";
import OnlyAt from "./_components/OnlyAt";

export default function EarringsDesignPage() {
  // Reuse/adjust your app routes
  const routes = {
    startWithSetting: "/engagement-rings/settings",
    startWithDiamond: "/diamonds/round",
    shopNowLab: "#",
    shopNowPreset: "#",
  };

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <EarringsHero
        title="DESIGN YOUR OWN EARRINGS"
        copy="Make every moment special with earrings designed by you. Select a backing, choose a diamond or gemstone, and let your style shine with Blue Nile."
        buttonLabel="START WITH A SETTING"
        buttonHref={routes.startWithSetting}
        imageSrc="/images/brands/endless/earrings/hero-earrings.webp"
      />

      {/* BUILDER STRIP (image left, text + 2 CTAs right) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <EarringsBuilder
            imageSrc="/images/brands/endless/diamonds/design-your-own/pendant/Diamond_Pendant (1).webp"
            title="Design Your Own Diamond Pendant"
            copy="Blue Nile makes it easy to create your own diamond necklace."
            primaryLabel="START WITH YOUR SETTING"
            primaryHref={routes.startWithSetting}
            secondaryLabel="START WITH YOUR DIAMONDS"
            secondaryHref={routes.startWithDiamond}
          />
        </div>   
      </section>

      {/* CONTENT SPLITS */}
      <section className="w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-14">
        {/* Lab-Grown */}
        <ContentSplit
          eyebrow="LAB-GROWN DIAMONDS"
          title="Explore Lab-Grown Diamond Pendants"
          copy="We offer a leading selection of IGI and GIA graded lab-grown diamonds fit for any jewelry style. Every stone is expertly crafted to bring endless brilliance."
          ctaLabel="SHOP NOW"
          ctaHref={routes.shopNowLab}
          imageSrc="/images/brands/endless/diamonds/design-your-own/pendant/Lab_grown_diamond_pendants.webp"
          imageRight
        />

        {/* Preset Studs */}
        <ContentSplit
          title="Preset Diamond Solitaire Pendants"
          copy="Explore bestselling sizes and shapes."
          ctaLabel="SHOP NOW"
          ctaHref={routes.shopNowPreset}
          imageSrc="/images/brands/endless/diamonds/design-your-own/pendant/Diamonds_Necklace_Preset_.webp"
        />
      </section>

      {/* CATEGORY LISTS */}
      {/* <CategoryColumns
        title="Explore Earrings By Category"
        columns={[
          {
            heading: "Shop Earrings By Gemstone",
            items: [
              "Gemstone Earrings",
              "Amethyst Earrings",
              "Aquamarine Earrings",
              "Emerald Earrings",
              "Opal Earrings",
              "Ruby Earrings",
              "Sapphire Earrings",
            ],
          },
          {
            heading: "Shop By Earring Style",
            items: [
              "Bar Earrings",
              "Dangle Earrings",
              "Drop Earrings",
              "Heart Earrings",
              "Hoop Earrings",
              "Stud Earrings",
              "Threader Earrings",
            ],
          },
          {
            heading: "Shop Pearl Earrings",
            items: [
              "Pearl Earrings",
              "Pearl Drop Earrings",
              "Pearl Hoop Earrings",
              "Pearl Stud Earrings",
            ],
          },
          {
            heading: "Shop Earrings By Metal",
            items: [
              "Gold Earrings",
              "Rose Gold Earrings",
              "Two-Color Gold Earrings",
              "White Gold Hoop Earrings",
              "Silver Earrings",
              "Silver Hoop Earrings",
            ],
          },
        ]}
        extra={{
          heading: "Shop Diamond Earrings",
          items: ["Diamond Hoop Earrings", "Diamond Stud Earrings", "Design Your Own Earrings"],
        }}
      /> */}

      {/* ONLY AT … (reuse your existing component) */}
      <OnlyAt
              brand="Blue Nile"
              leftImage={{
                src: "/images/brands/endless/diamonds/design-your-own/BNShowroom-Northpark.cb83b (1).webp",
                title: "Visit a showroom",
                copy:
                  "Meet our personal jewelers, explore bestselling styles, pick up an online order, arrange to preview something from our online collection and so much more.",
                linkLabel: "Show locations",
                href: "#",
              }}
              rightImage={{
                src: "/images/brands/endless/diamonds/design-your-own/people_buying_v1.b7bb4 (1).jpg",
                title: "Schedule an appointment",
                copy:
                  "Book a fun and informative appointment with a diamond expert and get up-close views of diamond and jewelry options from the comfort of your own home.",
                linkLabel: "Schedule",
                href: "#",
              }}
              features={[
                {
                  title: "Amazing Value",
                  copy: "The highest quality design at a great price.",
                },
                {
                  title: "Peace of Mind",
                  copy: "30-day returns, diamond price-match guarantee and more.",
                },
                {
                  title: "Expert Guidance",
                  copy: "The original online jeweler since 1999.",
                },
                {
                  title: "Inspiring Assortment",
                  copy: "The perfect pieces for every occasion.",
                },
              ]}
            />
    </main>
  );
}
