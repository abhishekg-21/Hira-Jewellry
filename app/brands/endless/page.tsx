// app/brands/endless/page.tsx
import HeroSplit from "./_sections/HeroSplit";
import TripleTiles from "./_sections/TripleTiles";
import DarkCreative from "./_sections/DarkCreative";
import ShapesTeaser from "./_sections/ShapesTeaser";
import BraceletAndText from "./_sections/BraceletAndText";
import OnlyAtRow from "./_sections/OnlyAtRow";
import Reviews from "./_sections/Reviews";

export const revalidate = 60;

export default function EndlessBrandPage() {
  return (
    <>
      <HeroSplit
        left={{
          src: "/brand/endless/hero-left.jpg",
          alt: "Model",
          heading: "OUR ANNIVERSARY SALE STARTS NOW!",
          cta: "SHOP JEWELRY SALE",
          ctaHref: "/brands/endless/sale",
        }}
        right={{
          src: "/brand/endless/hero-right.jpg",
          alt: "Ring closeup",
          heading: "CELEBRATE WITH US. SAVE BIG.",
          cta: "SHOP ENGAGEMENT SALE",
          ctaHref: "/brands/endless/engagement-sale", // root route, as implemented
        }}
      />

      <TripleTiles
        tiles={[
          {
            src: "/images/brands/endless/diamond_engagement_rings (1).webp",
            alt: "Engagement Ring",
            label: "ENGAGEMENT RINGS",
            href: "/engagement-sale",
          },
          {
            src: "/images/brands/endless/Model_wearing_diamond_jewelry_rings_and_necklaces (1).webp",
            alt: "Diamonds",
            label: "DIAMOND JEWELRY",
            href: "/sale",
          },
          {
            src: "/images/brands/endless/2_pairs_of_bezel_set_diamond_earrings (1).webp",
            alt: "EARRINGS",
            label: "EARRINGS",
            href: "#",
          },
          {
            src: "/images/brands/endless/A_diamond_pendant,_and_tennis_necklace_stacked (1).webp",
            alt: "NECKLACES",
            label: "NECKLACES",
            href: "#",
          },
          {
            src: "/images/brands/endless/diamond_tennis_bracelet (1).webp",
            alt: "BRACELETS",
            label: "BRACELETS",
            href: "#",
          },
          {
            src: "/images/brands/endless/a_diamond_ring,_pearl_earring_and_necklace,_a_bracelet_and_ring_layered_together (1).webp",
            alt: "ALL JEWELRY",
            label: "ALL JEWELRY",
            href: "#",
          },
        ]}
      />

      <DarkCreative
        heading="TAILOR-MADE BY YOU"
        body="Our Creative Studio can bring your one-of-a-kind concept to reality. Work directly with our designers to transform sketches, references or ideas into a custom masterpiece."
        cta="DESIGN YOURS"
        image={{
          src: "/images/brands/endless/DarkCreative/a_collection_of_diamond_rings_stacked_on_display_stand (2).webp",
          alt: "Stacked rings",
        }}
      />

      <ShapesTeaser
        left={{
          src: "/images/brands/endless/ShapesTeaser/a_collection_of_loose_diamonds_spread_on_a_stone_slab.webp",
          alt: "Diamond still life",
        }}
        title="EXPLORE DIAMOND SHAPES"
        cta="FIND YOUR DIAMOND"
      />

      <BraceletAndText
        slides={[
          {
            src: "/images/brands/endless/BraceletAndText/closeup_of_a_collection_of_mini_half_tennis_bracelets.webp",
            alt: "The Extraordinary Collection 1",
            title: "NEW: MINI HALF TENNIS BRACELETS",
            href: "/brands/endless/extraordinary",
          },
          {
            src: "/images/brands/endless/BraceletAndText/alphabet_jewelry_in_yellow_gold_with_diamonds.webp",
            alt: "The Extraordinary Collection 2",
            title: "NEW: BEZEL COLLECTION",
            href: "/brands/endless/extraordinary",
          },
          {
            src: "/images/brands/endless/BraceletAndText/bezel_diamond_ring_in_yellow_gold.webp",
            alt: "The Extraordinary Collection 3",
            title: "The Extraordinary Collection",
            href: "/brands/endless/extraordinary",
          },
          {
            src: "/images/brands/endless/BraceletAndText/extraordinary_collection_of_emerald_cut_aquamarine_and_diamond_pendant.webp",
            alt: "The Extraordinary Collection 4",
            title: "The Extraordinary Collection",
            href: "/brands/endless/extraordinary",
          },
        ]}
        rightImage={{
          src: "/images/brands/endless/BraceletAndText/gold_mini_tennis_bracelet_with_pear-cut_diamonds.webp",
          alt: "Gold bracelet close-up",
        }}
      />

      <OnlyAtRow
        brand="Endless"
        cards={[
          {
            src: "/images/brands/endless/OnlyAtRow/artisan_crafting_a_Blue_Nile_diamond_ring_by_hand.webp",
            alt: "A TRUE ORIGINAL ",
            title: "A TRUE ORIGINAL ",
            body:
              "Blue Nile is the original online jeweler. Since 1999, we've provided the best product quality and price available along with access to top quality diamonds, metals, and fine jewelry.",
          },
          {
            src: "/images/brands/endless/OnlyAtRow/Blue_Nile_showroom_representative_presenting_diamond_engagement_rings_to_customer.webp",
            alt: "DISTINCTIVE SERVICE ",
            title: "DISTINCTIVE SERVICE ",
            body:
              "Don't know where to start? We provide expert guidance and knowledgeable advice at every touchpoint. We're here for all your questions, no matter how big or small.",
          },
          {
            src: "/images/brands/endless/OnlyAtRow/Blue_Nile_diamond_jewelry_featured_with_GIA_certification_logo.webp",
            alt: "INDUSTRY LEADERS ",
            title: "INDUSTRY LEADERS ",
            body:
              "We set a higher standard in fine jewelry with ethically sourced diamonds, responsible mining, and craftsmanship backed for life. Seamless shopping tools and peace of mind come with every order.",
          },
          {
            src: "/images/brands/endless/OnlyAtRow/mixed_styles_yellow_gold_diamond_rings_stacked.webp",
            alt: "INNOVATIVE ASSORTMENT ",
            title: "INNOVATIVE ASSORTMENT ",
            body:
              "Choose from the world's most beautiful diamonds, hand-selected by our experts and crafted into exceptional pieces by highly skilled artisans.",
          },
        ]}
      />

      <Reviews />
    </>
  );
}
