export const menuData = [
  {
    label: "SHOP ALL",
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
        image: "/images/bye.png", // ✅ correct format
        link: "/collections/all",
        label: "VIEW PRODUCTS",
      },
      {
        image: "/images/bye.png", // ✅ correct format
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
        image: "/images/bye.png",
        label: "PANDA NECKLACE",
        link: "/products/panda-necklace",
      },
      {
        image: "/images/solitaire-antler-necklace.jpg",
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
        image: "/images/anklet1.jpg", // ✅ replace with actual image path in /public or CDN
        link: "/products/dainty-anklet",
      },
      {
        label: "PEARL SHELL ANKLET",
        image: "/images/anklet2.jpg", // ✅ replace with actual image path
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
      image: "/images/earring1.jpg", // ✅ Place this in /public/images
      link: "/products/royal-gemstone-studs",
    },
    {
      label: "CURVED BAR WITH STONES EARRINGS",
      image: "/images/earring2.jpg",
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
      image: "/images/ring1.jpg",  // ✅ save this image in /public/images
      link: "/products/mini-heart-leafy-band-ring",
    },
    {
      label: "SOLITAIRE RING",
      image: "/images/ring2.jpg",
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
      image: "/images/bracelet1.jpg",  // Save image here
      link: "/products/aquamarine-bracelet",
    },
    {
      label: "ZODIAC BRACELET",
      image: "/images/bracelet2.jpg",
      link: "/products/zodiac-bracelet",
    },
  ],
},
];
