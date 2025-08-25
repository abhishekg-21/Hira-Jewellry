/*
  Warnings:

  - Made the column `created_at` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "public"."products_type_idx";

-- AlterTable
ALTER TABLE "public"."products" ALTER COLUMN "id" SET DEFAULT gen_random_uuid(),
ALTER COLUMN "product_id" SET DATA TYPE TEXT,
ALTER COLUMN "image_url" DROP NOT NULL,
ALTER COLUMN "qty_in_stock" DROP NOT NULL,
ALTER COLUMN "qty_in_stock" DROP DEFAULT,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "updated_at" SET NOT NULL,
ALTER COLUMN "updated_at" DROP DEFAULT,
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "product_type" DROP NOT NULL,
ALTER COLUMN "product_type" DROP DEFAULT,
ALTER COLUMN "product_type" SET DATA TYPE TEXT;
ALTER TABLE "public"."products"
  ADD COLUMN "shop_by_material" TEXT,
  ADD COLUMN "shop_by_price"    TEXT;


-- RenameIndex
ALTER INDEX "public"."products_product_id_idx" RENAME TO "products_product_id_key";
