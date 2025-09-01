// app/brands/endless/design-your-own/page.tsx
import Hero from "./_components/Hero";
import BuildCard from "./_components/BuildCard";
import DYOShowcase from "./_components/DYOShowcase";
import OnlyAt from "./_components/OnlyAt";

export default function DesignYourOwnPage() {
  // Reuse your existing routes
  const routes = {
    withSetting: "/engagement-rings/settings",
    withDiamond: "/diamonds/round",
  };

  return (
    <main className="min-h-screen">
      <Hero
        title="Design Your Own Diamond Jewelry"
        copy="We’ve made the process to create a custom piece of jewelry easy with our Build Your Own Diamond Jewelry tool."
        ctaLabel="Find Your Diamond"
        ctaHref={routes.withDiamond}
        imageSrc="/images/brands/endless/diamonds/design-your-own/Build_Your_Own_Diamond_Jewelry.webp"
      />

      {/* 1 — Ring */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <BuildCard
            align="imageLeft"
            title="Design Your Own Ring"
            copy="Celebrate your unique love story with a custom engagement ring that perfectly suits the person you love."
            primaryLabel="Start With Your Setting"
            primaryHref={routes.withSetting}
            secondaryLabel="Start With Your Diamond"
            secondaryHref={routes.withDiamond}
            imageSrc="/images/brands/endless/diamonds/design-your-own/Start_building_your_own_engagement_ring.webp"
          />
        </div>
      </section>

      {/* 2 — Earrings */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <BuildCard
            align="imageLeft"
            title="Design Your Own Earrings"
            copy="Blue Nile makes it easy to create a custom pair of diamond earrings."
            primaryLabel="Start With Your Setting"
            primaryHref={routes.withSetting}
            secondaryLabel="Start With Your Diamonds"
            secondaryHref={routes.withDiamond}
            imageSrc="/images/brands/endless/diamonds/design-your-own/Diamonds_being_set_into_four-prong_earring_settings.webp"
            reverse // image left, text right (to match screenshot)
          />
        </div>
      </section>

      {/* 3 — Pendant */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <BuildCard
            align="imageLeft"
            title="Design Your Own Diamond Pendant"
            copy="Blue Nile makes it easy to create your own diamond necklace."
            primaryLabel="Start With Your Setting"
            primaryHref={routes.withSetting}
            secondaryLabel="Start With Your Diamond"
            secondaryHref={routes.withDiamond}
            imageSrc="/images/brands/endless/diamonds/design-your-own/A_diamond_being_set_into_a_solitaire_pendant_setting.webp"
          />
        </div>
      </section>

      {/* Showcase row */}
      <DYOShowcase
        items={[
          {
            title: "Design Your Own Earrings",
            imageSrc:
              "/images/brands/endless/diamonds/design-your-own/Build_Your_Own_Earrings (1).webp",
            href: routes.withDiamond,
          },
          {
            title: "Design Your Own Diamond Pendant",
            imageSrc:
              "/images/brands/endless/diamonds/design-your-own/Diamond_Pendant.webp",
            href: routes.withDiamond,
          },
          {
            title: "Design Your Own Diamond Ring",
            imageSrc:
              "/images/brands/endless/diamonds/design-your-own/Diamond_Ring.webp",
            href: routes.withDiamond,
          },
        ]}
      />

      {/* Benefits / Only at … */}
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
