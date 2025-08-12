import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const count = await prisma.product.count();
  if (count > 0) {
    console.log(`Seed skipped: ${count} products already in DB.`);
    return;
  }

  await prisma.product.createMany({
    data: [
      {
        productId: "prod_1",
        slug: "silver-krishna-trishul-rakhi",
        title: "Silver Krishna Trishul Rakhi",
        priceCents: 225000,
        imageUrl: "https://cdn.shopify.com/s/files/.../rk-0001.jpg",
        imageKey: "products/rk-0001.webp",
        qtyInStock: 30,
        productType: "Rakhi",
      },
      {
        productId: "prod_2",
        slug: "silver-hanuman-rakhi",
        title: "Silver Hanuman Rakhi",
        priceCents: 265000,
        imageUrl: "https://cdn.shopify.com/s/files/.../rk-0002.jpg",
        imageKey: "products/rk-0002.webp",
        qtyInStock: 25,
        productType: "Rakhi",
      },
      {
        productId: "prod_3",
        slug: "silver-shakti-gada-rakhi",
        title: "Silver Shakti Gada Rakhi",
        priceCents: 365000,
        imageUrl: "https://cdn.shopify.com/s/files/.../rk-0003.jpg",
        imageKey: "products/rk-0003.webp",
        qtyInStock: 20,
        productType: "Rakhi",
      },
    ],
  });

  console.log("✅ Seeded products.");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
