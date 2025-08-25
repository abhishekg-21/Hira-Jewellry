-- CreateSchema
CREATE SCHEMA IF NOT EXISTS public;

-- CreateTable (plural: products)
CREATE TABLE IF NOT EXISTS public.products (
  id              TEXT        NOT NULL,
  product_id      TEXT        NOT NULL,
  slug            TEXT        NOT NULL,
  name            TEXT        NOT NULL,
  price_cents     INTEGER     NOT NULL,
  image_url       TEXT,
  image_key       TEXT,
  qty_in_stock    INTEGER     NOT NULL DEFAULT 0,
  product_type    TEXT,
  shop_by_material TEXT,
  shop_by_price    TEXT,
  created_at      TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at      TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT products_pkey PRIMARY KEY (id)
);

-- Uniques
CREATE UNIQUE INDEX IF NOT EXISTS products_product_id_idx ON public.products(product_id);
CREATE UNIQUE INDEX IF NOT EXISTS products_slug_idx       ON public.products(slug);

-- Helpful filter indexes (optional)
CREATE INDEX IF NOT EXISTS products_type_idx              ON public.products(product_type);
CREATE INDEX IF NOT EXISTS products_shop_by_material_idx  ON public.products(shop_by_material);
CREATE INDEX IF NOT EXISTS products_shop_by_price_idx     ON public.products(shop_by_price);
