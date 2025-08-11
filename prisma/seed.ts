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
        productId: "RK-0001",
        name: "Silver Krishna Trishul Rakhi",
        priceCents: 225000,
        imageUrl: "https://cdn.shopify.com/…/rk-0001.jpg",
        imageKey: "products/rk-0001.webp",
        qtyInStock: 30,
        productType: "Rakhi",
      },
      // add more…
    ],
  });

  console.log("Seeded products.");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
