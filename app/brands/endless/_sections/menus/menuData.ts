// app/brands/endless/_sections/menus/menu.ts

export type MenuLink = { label: string; href: string };
export type MenuColumn = { heading: string; links: MenuLink[] };
export type MenuMap = Record<string, MenuColumn[]>;

/** Top-level nav labels (controls order) */
export const NAV_LABELS: readonly string[] = [
  "Diamonds",
  "Engagement Rings",
  "Wedding Rings",
  "Jewelry",
  "Gifts",
  "Gemstones",
  "Education",
] as const;

/** Mega-menu content per top-level label */
export const MENUS: MenuMap = {
  /* ------------------------------------------------------------------ */
  /* Diamonds — note: you’re rendering a custom DiamondsMega component.  */
  /* This data is here only for parity / fallbacks.                      */
  /* ------------------------------------------------------------------ */
  Diamonds: [
    {
      heading: "Shop Diamonds By Shape",
      links: [
        { label: "Round", href: "#" },
        { label: "Princess", href: "#" },
        { label: "Cushion", href: "#" },
        { label: "Oval", href: "#" },
        { label: "Emerald", href: "#" },
        { label: "Asscher", href: "#" },
        { label: "Radiant", href: "#" },
        { label: "Marquise", href: "#" },
        { label: "Pear", href: "#" },
        { label: "Heart", href: "#" },
      ],
    },
    {
      heading: "All Diamonds",
      links: [
        { label: "Natural Diamonds", href: "#" },
        { label: "Lab-Grown Diamonds", href: "#" },
        { label: "Build Your Own", href: "#" },
        { label: "Astor by Blue Nile™", href: "#" },
      ],
    },
    {
      heading: "Guides",
      links: [
        { label: "4Cs Guide", href: "#" },
        { label: "Diamond Education", href: "#" },
        { label: "Size Chart", href: "#" },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Engagement Rings                                                    */
  /* ------------------------------------------------------------------ */
  "Engagement Rings": [
    {
      heading: "Design Your Own Jewelry",
      links: [
        { label: "Start With A Natural Diamond", href: "#" },
        { label: "Start With A Lab Grown Diamond", href: "#" },
        { label: "Start With A Setting", href: "#" },
        { label: "Ready To Ship Rings", href: "#" },
      ],
    },
    {
      heading: "Customize Your Engagement Ring",
      links: [{ label: "Creative Studio", href: "#" }],
    },
    {
      heading: "Engagement Rings Styles",
      links: [
        { label: "Solitaire", href: "#" },
        { label: "Halo", href: "#" },
        { label: "Vintage", href: "#" },
        { label: "Sidestone", href: "#" },
        { label: "Three-Stone", href: "#" },
        { label: "Designer", href: "#" },
        { label: "Rose Gold", href: "#" },
        { label: "Unique", href: "#" },
        { label: "Gemstone", href: "#" },
        { label: "Men's Engagement", href: "#" },
      ],
    },
    {
      heading: "Designers Rings",
      links: [
        { label: "Zac Zac Posen", href: "#" },
        { label: "Bella Vaughan", href: "#" },
        { label: "Blue Nile Studio", href: "#" },
        { label: "The Gallery Collection™", href: "#" },
      ],
    },
    {
      heading: "Learn & Tools",
      links: [
        { label: "Find Your Ring Size", href: "#" },
        { label: "Top Engagement Rings", href: "#" },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Wedding Rings                                                       */
  /* ------------------------------------------------------------------ */
  "Wedding Rings": [
    {
      heading: "Women's Rings",
      links: [
        { label: "Diamonds", href: "#" },
        { label: "Platinum", href: "#" },
        { label: "Rose Gold", href: "#" },
        { label: "Yellow Gold", href: "#" },
        { label: "White Gold", href: "#" },
        { label: "Top 10 Rings", href: "#" },
      ],
    },
    {
      heading: "Men's Rings",
      links: [
        { label: "Platinum", href: "#" },
        { label: "Tungsten", href: "#" },
        { label: "Titanium", href: "#" },
        { label: "Rose Gold", href: "#" },
        { label: "Yellow Gold", href: "#" },
        { label: "White Gold", href: "#" },
        { label: "Top 10 Rings", href: "#" },
      ],
    },
    {
      heading: "Designers Rings",
      links: [
        { label: "Zac Zac Posen", href: "#" },
        { label: "Bella Vaughan", href: "#" },
        { label: "Blue Nile Studio", href: "#" },
        { label: "The Gallery Collection™", href: "#" },
      ],
    },
    {
      heading: "Diamond Essentials",
      links: [
        { label: "Anniversary Rings", href: "#" },
        { label: "Eternity Rings", href: "#" },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Jewelry                                                             */
  /* ------------------------------------------------------------------ */
  Jewelry: [
    {
      heading: "Diamond Essentials",
      links: [
        { label: "Diamond Eternity Rings", href: "#" },
        { label: "Diamond Anniversary Rings", href: "#" },
        { label: "Diamond Stud Earrings", href: "#" },
        { label: "Diamond Tennis Bracelets", href: "#" },
        { label: "Diamond Pendant Necklaces", href: "#" },
        { label: "Diamond Hoop Earrings", href: "#" },
        { label: "Diamond Tennis Necklaces", href: "#" },
      ],
    },
    {
      heading: "Earrings",
      links: [
        { label: "Design Your Own Earrings", href: "#" },
        { label: "Diamond Earrings", href: "#" },
        { label: "Gemstone Earrings", href: "#" },
        { label: "Pearl Earrings", href: "#" },
        { label: "Gold Earrings", href: "#" },
      ],
    },
    {
      heading: "Bracelets",
      links: [
        { label: "Diamond Bracelets", href: "#" },
        { label: "Gemstone Bracelets", href: "#" },
        { label: "Pearl Bracelets", href: "#" },
        { label: "Gold Bracelets", href: "#" },
        { label: "Silver Bracelets", href: "#" },
        { label: "Bangle Bracelets", href: "#" },
      ],
    },
    {
      heading: "Necklaces",
      links: [
        { label: "Design Your Own Pendant", href: "#" },
        { label: "Diamond Necklaces", href: "#" },
        { label: "Gemstone Necklaces", href: "#" },
        { label: "Pearl Necklaces", href: "#" },
        { label: "Gold Necklaces", href: "#" },
        { label: "Silver Necklaces", href: "#" },
        { label: "Cross Necklaces", href: "#" },
        { label: "Cuban Chains", href: "#" },
      ],
    },
    {
      heading: "Rings",
      links: [
        { label: "Diamond Rings", href: "#" },
        { label: "Gemstone Rings", href: "#" },
        { label: "Wedding Rings", href: "#" },
        { label: "Engagement Rings", href: "#" },
        { label: "Gold Rings", href: "#" },
        { label: "Fashion Rings", href: "#" },
        { label: "Promise Rings", href: "#" },
      ],
    },
    {
      heading: "Jewelry",
      links: [
        { label: "Lab Grown Diamond Jewelry", href: "#" },
        { label: "Men's Jewelry", href: "#" },
        { label: "Birthstone Jewelry", href: "#" },
        { label: "Pearl Jewelry", href: "#" },
        { label: "Rose Gold Jewelry", href: "#" },
        { label: "New Arrivals", href: "#" },
        { label: "Clear The Vault", href: "#" },
        { label: "Under $100", href: "#" },
      ],
    },
    {
      heading: "Collections",
      links: [
        { label: "Eclipse Collection", href: "#" },
        { label: "Iconic Collection", href: "#" },
        { label: "Nightfall Collection", href: "#" },
        { label: "Initial Collection", href: "#" },
        { label: "Zodiac Collection", href: "#" },
        { label: "Extraordinary Collection", href: "#" },
        { label: "Astor By Blue Nile™", href: "#" },
      ],
    },
    {
      heading: "Designer Jewelry",
      links: [
        { label: "The Gallery Collection™", href: "#" },
        { label: "Blue Nile Studio", href: "#" },
        { label: "Bella Vaughan", href: "#" },
        { label: "Zac Zac Posen", href: "#" },
        { label: "Monica Rich Kosann", href: "#" },
        { label: "GIA Jewelry Report", href: "#" },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Gifts                                                               */
  /* ------------------------------------------------------------------ */
  Gifts: [
    {
      heading: "Shop by Price",
      links: [
        { label: "Under $100", href: "#" },
        { label: "$100-$250", href: "#" },
        { label: "$250-$500", href: "#" },
      ],
    },
    {
      heading: "For",
      links: [
        { label: "Her", href: "#" },
        { label: "Him", href: "#" },
        { label: "Couples", href: "#" },
      ],
    },
    {
      heading: "Occasions",
      links: [
        { label: "Anniversary", href: "#" },
        { label: "Birthday", href: "#" },
        { label: "Graduation", href: "#" },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Gemstones                                                           */
  /* ------------------------------------------------------------------ */
  Gemstones: [
    {
      heading: "By Stone",
      links: [
        { label: "Sapphire", href: "#" },
        { label: "Ruby", href: "#" },
        { label: "Emerald", href: "#" },
        { label: "Aquamarine", href: "#" },
      ],
    },
    {
      heading: "Jewelry",
      links: [
        { label: "Rings", href: "#" },
        { label: "Necklaces", href: "#" },
        { label: "Earrings", href: "#" },
      ],
    },
    {
      heading: "Guides",
      links: [
        { label: "Gem Education", href: "#" },
        { label: "Birthstones", href: "#" },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Education                                                           */
  /* ------------------------------------------------------------------ */
  Education: [
    {
      heading: "Diamond Education",
      links: [
        { label: "4Cs Guide", href: "#" },
        { label: "Shape Guide", href: "#" },
        { label: "Certification", href: "#" },
      ],
    },
    {
      heading: "Ring Education",
      links: [
        { label: "Sizing Guide", href: "#" },
        { label: "Setting Styles", href: "#" },
        { label: "Metal Types", href: "#" },
      ],
    },
    {
      heading: "Care & Maintenance",
      links: [
        { label: "Cleaning", href: "#" },
        { label: "Storage Tips", href: "#" },
      ],
    },
  ],
};
