-- CreateTable (plural: products) matching your Prisma model + new columns
CREATE TABLE IF NOT EXISTS public.products (
  id            TEXT        PRIMARY KEY,
  product_id    TEXT        NOT NULL,
  slug          TEXT        NOT NULL,
  name          TEXT        NOT NULL,
  price_cents   INTEGER     NOT NULL,
  image_url     TEXT,
  image_key     TEXT,
  qty_in_stock  INTEGER     NOT NULL DEFAULT 0,
  product_type  TEXT,
  shop_by_material TEXT,
  shop_by_price    TEXT,
  created_at    TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Uniques to match Prisma
CREATE UNIQUE INDEX IF NOT EXISTS products_product_id_key ON public.products(product_id);
CREATE UNIQUE INDEX IF NOT EXISTS products_slug_key       ON public.products(slug);

-- Optional: filter indexes
CREATE INDEX IF NOT EXISTS products_shop_by_material_idx ON public.products(shop_by_material);
CREATE INDEX IF NOT EXISTS products_shop_by_price_idx    ON public.products(shop_by_price);
