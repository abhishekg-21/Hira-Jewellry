// /app/components/menuData.ts
export const menuData = [
  {
    label: "SHOP ALL",
    link: "/collections/all",
    columns: [
      {
        heading: "OUR PRODUCTS",
        links: [
          { label: "NECKLACE", link: "/collections/necklace" },
          { label: "BRACELET", link: "/collections/bracelet" },
          { label: "ANKLET", link: "/collections/anklet" },
          { label: "RING", link: "/collections/ring" },
          { label: "EARRING", link: "/collections/earring" },
        ],
      },
      {
        heading: "OUR COLLECTIONS",
        links: [
          { label: "SUMMER COLLECTION", link: "/collections/summer-collection" },
          { label: "RAKSHA BANDHAN 2025", link: "/collections/raksha-bandhan-2025" },
          { label: "ENDLESS COLLECTION", link: "/collections/endless-collection" },
        ],
      },
    ],
    promos: [
      {
        image: "/images/brands/hira_vermile/dropdown/riyaa.02_1749977731_3655400610936832390_62329184037.webp", // ✅ correct format
        link: "/collections/all",
        label: "VIEW PRODUCTS",
      },
      {
        image: "/images/brands/hira_vermile/dropdown/IMG_20250503_181725_f7d8d992-3cbb-496a-81de-6cdfe75be1f0.webp", // ✅ correct format
        link: "/collections/best-sellers",
        label: "BEST SELLER COLLECTION",
      },
    ],
  },
  {
    label: "NECKLACE",
    columns: [
      {
        heading: "SHOP BY MATERIAL",
        links: [
          { label: "SILVER", link: "/collections/necklace-silver" },
          { label: "14KT GOLD", link: "/collections/necklace-gold" },
        ],
      },
      {
        heading: "SHOP BY PRICE",
        links: [
          { label: "UNDER 1,999", link: "/collections/necklace-under-1999" },
          { label: "UNDER 4,999", link: "/collections/necklace-under-4999" },
          { label: "UNDER 9,999", link: "/collections/necklace-under-9999" },
          { label: "UNDER 14,999 & ABOVE", link: "/collections/necklace-above-14999" },
        ],
      },
    ],
    promos: [
      {
        image: "/images/brands/hira_vermile/dropdown/Panda_Necklace_-_1750_865efef5-3466-4e9a-b81f-42e46b51cd8a.webp",
        label: "PANDA NECKLACE",
        link: "/products/panda-necklace",
      },
      {
        image: "/images/brands/hira_vermile/dropdown/Solitaire_Antler_Necklace_-_1350_d7075997-2990-49ae-953c-e693392976a0.webp",
        label: "SOLITAIRE ANTHER NECKLACE",
        link: "/products/solitaire-antler-necklace",
      },
    ],
  },
  {
    label: "ANKLET",
    columns: [
      {
        heading: "SHOP BY MATERIAL",
        links: [
          { label: "SILVER", link: "/collections/anklets-silver" },
          { label: "14KT GOLD", link: "/collections/anklets-gold" },
        ],
      },
      {
        heading: "SHOP BY PRICE",
        links: [
          { label: "UNDER 1,999", link: "/collections/anklets-under-1999" },
          { label: "UNDER 4,999", link: "/collections/anklets-under-4999" },
          { label: "UNDER 9,999", link: "/collections/anklets-under-9999" },
          { label: "UNDER 14,999 & ABOVE", link: "/collections/anklets-above-14999" },
        ],
      },
    ],
    promos: [
      {
        label: "DAINTY ANKLET",
        image: "/images/brands/hira_vermile/dropdown/Dainty_Anklet___1850.webp", // ✅ replace with actual image path in /public or CDN
        link: "/products/dainty-anklet",
      },
      {
        label: "PEARL SHELL ANKLET",
        image: "/images/brands/hira_vermile/dropdown/VERA007-PearlShellAnklet-1550-each_0ad7d595-9f13-4576-a953-3e5de5b39ab2.webp", // ✅ replace with actual image path
        link: "/products/pearl-shell-anklet",
      },
    ],
  },
  {
  label: "EARRING",
  columns: [
    {
      heading: "SHOP BY MATERIAL",
      links: [
        { label: "SILVER", link: "/collections/earrings-silver" },
        { label: "14KT GOLD", link: "/collections/earrings-gold" },
      ],
    },
    {
      heading: "SHOP BY PRICE",
      links: [
        { label: "UNDER 1,999", link: "/collections/earrings-under-1999" },
        { label: "UNDER 4,999", link: "/collections/earrings-under-4999" },
        { label: "UNDER 9,999", link: "/collections/earrings-under-9999" },
        { label: "UNDER 14,999 & ABOVE", link: "/collections/earrings-above-14999" },
      ],
    },
  ],
  promos: [
    {
      label: "ROYAL GEMSTONE STUDS",
      image: "/images/brands/hira_vermile/dropdown/Royal_Gems_Stone_Studs_-_Blue.webp", // ✅ Place this in /public/images
      link: "/products/royal-gemstone-studs",
    },
    {
      label: "CURVED BAR WITH STONES EARRINGS",
      image: "/images/brands/hira_vermile/dropdown/Curved_Bar_With_Green_Stones_-_1350_2_3e94d1fa-e52a-4d0a-a9ac-d2b4ec606f84.webp",
      link: "/products/curved-bar-stone-earrings",
    },
  ],
},
  {
  label: "RING",
  columns: [
    {
      heading: "SHOP BY MATERIAL",
      links: [
        { label: "SILVER", link: "/collections/ring-silver" },
        { label: "14KT GOLD", link: "/collections/ring-gold" },
      ],
    },
    {
      heading: "SHOP BY PRICE",
      links: [
        { label: "UNDER 1,999", link: "/collections/ring-under-1999" },
        { label: "UNDER 4,999", link: "/collections/ring-under-4999" },
        { label: "UNDER 9,999", link: "/collections/ring-under-9999" },
        { label: "UNDER 14,999 & ABOVE", link: "/collections/ring-above-14999" },
      ],
    },
  ],
  promos: [
    {
      label: "MINI HEART LEAFY BAND RING",
      image: "/images/brands/hira_vermile/dropdown/Mini_Heart_Leafy_Band_Ring_-_1650_2_d712f094-35be-45b5-8fff-373bc936173b.webp",  // ✅ save this image in /public/images
      link: "/products/mini-heart-leafy-band-ring",
    },
    {
      label: "SOLITAIRE RING",
      image: "/images/brands/hira_vermile/dropdown/Solitaire_ring_7d0a7886-6c1a-40a9-a324-f593f84a0573.webp",
      link: "/products/solitaire-ring",
    },
  ],
},
  {
  label: "BRACELET",
  columns: [
    {
      heading: "SHOP BY MATERIAL",
      links: [
        { label: "SILVER", link: "/collections/bracelet-silver" },
        { label: "14KT GOLD", link: "/collections/bracelet-gold" },
      ],
    },
    {
      heading: "SHOP BY PRICE",
      links: [
        { label: "UNDER 1,999", link: "/collections/bracelet-under-1999" },
        { label: "UNDER 4,999", link: "/collections/bracelet-under-4999" },
        { label: "UNDER 9,999", link: "/collections/bracelet-under-9999" },
        { label: "UNDER 14,999", link: "/collections/bracelet-above-14999" },
      ],
    },
  ],
  promos: [
    {
      label: "AQUAMARINE BRACELET",
      image: "/images/brands/hira_vermile/dropdown/Aquamarine_Bracelet-_1_750.webp",  // Save image here
      link: "/products/aquamarine-bracelet",
    },
    {
      label: "ZODIAC BRACELET",
      image: "/images/brands/hira_vermile/dropdown/Zodiac_Bracelet___2150.webp",
      link: "/products/zodiac-bracelet",
    },
  ],
},
];