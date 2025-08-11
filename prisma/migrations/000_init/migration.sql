-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "public"."products" (
    "id" UUID NOT NULL,
    "product_id" VARCHAR(64) NOT NULL,
    "name" TEXT NOT NULL,
    "price_cents" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    "image_key" TEXT,
    "qty_in_stock" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "product_type" VARCHAR(50) NOT NULL DEFAULT 'general',

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_product_id_idx" ON "public"."products"("product_id");

-- CreateIndex
CREATE INDEX "products_type_idx" ON "public"."products"("product_type");

