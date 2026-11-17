-- Phase 2 admin : produits ajoutés depuis /admin (complètent le catalogue statique).
-- À exécuter dans Supabase > SQL Editor > New query.
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  ref text not null unique,
  brand text not null,
  category text not null,
  name text not null,
  name_en text,
  description text,
  description_en text,
  finish text,
  image_url text,
  product_url text,
  active boolean not null default true
);
alter table products enable row level security;
create index if not exists products_active on products (active, created_at desc);

-- Dossier public pour les photos (lecture publique ; l'envoi passe par /api/admin/upload)
insert into storage.buckets (id, name, public) values ('products', 'products', true) on conflict (id) do nothing;
