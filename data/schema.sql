-- PostgreSQL starter schema. This is a design draft; no live data source is connected.
CREATE TABLE data_sources (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  source_type TEXT NOT NULL CHECK (source_type IN ('manufacturer', 'retailer', 'benchmark', 'community')),
  base_url TEXT,
  terms_url TEXT,
  access_method TEXT,
  verified_at TIMESTAMPTZ,
  active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE products (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  category TEXT NOT NULL CHECK (category IN ('cpu', 'gpu', 'ram', 'ssd', 'board', 'psu', 'case', 'cooler')),
  brand TEXT NOT NULL,
  model_name TEXT NOT NULL,
  model_key TEXT NOT NULL UNIQUE,
  release_date DATE,
  specs JSONB NOT NULL DEFAULT '{}',
  official_url TEXT,
  specification_source_id BIGINT REFERENCES data_sources(id),
  source_checked_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE retail_offers (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  source_id BIGINT NOT NULL REFERENCES data_sources(id),
  seller_name TEXT NOT NULL,
  product_url TEXT NOT NULL,
  currency CHAR(3) NOT NULL DEFAULT 'KRW',
  current_price BIGINT,
  availability TEXT NOT NULL DEFAULT 'unknown' CHECK (availability IN ('in_stock', 'out_of_stock', 'preorder', 'discontinued', 'unknown')),
  checked_at TIMESTAMPTZ NOT NULL,
  UNIQUE (source_id, product_url)
);

CREATE TABLE price_observations (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  offer_id BIGINT NOT NULL REFERENCES retail_offers(id) ON DELETE CASCADE,
  price BIGINT NOT NULL CHECK (price >= 0),
  shipping_price BIGINT CHECK (shipping_price >= 0),
  availability TEXT NOT NULL CHECK (availability IN ('in_stock', 'out_of_stock', 'preorder', 'discontinued', 'unknown')),
  observed_at TIMESTAMPTZ NOT NULL,
  UNIQUE (offer_id, observed_at)
);

CREATE TABLE benchmark_suites (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  version TEXT NOT NULL,
  category TEXT NOT NULL,
  source_id BIGINT NOT NULL REFERENCES data_sources(id),
  methodology_url TEXT,
  UNIQUE (name, version, category)
);

CREATE TABLE benchmark_results (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  suite_id BIGINT NOT NULL REFERENCES benchmark_suites(id),
  score NUMERIC(12, 3) NOT NULL,
  unit TEXT NOT NULL,
  test_configuration JSONB NOT NULL DEFAULT '{}',
  result_url TEXT,
  measured_at TIMESTAMPTZ NOT NULL,
  verified BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE INDEX price_observations_offer_time_idx ON price_observations (offer_id, observed_at DESC);
CREATE INDEX benchmark_results_product_suite_idx ON benchmark_results (product_id, suite_id, measured_at DESC);
CREATE INDEX products_category_brand_idx ON products (category, brand);

