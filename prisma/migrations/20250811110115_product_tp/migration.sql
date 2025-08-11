-- CreateTable
CREATE TABLE "public"."product" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price_cents" INTEGER NOT NULL,
    "image_url" TEXT,
    "image_key" TEXT,
    "qty_in_stock" INTEGER NOT NULL DEFAULT 0,
    "product_type" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_product_id_key" ON "public"."product"("product_id");
