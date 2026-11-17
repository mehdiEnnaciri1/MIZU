-- Phase 3 admin : blocs de contenu modifiables depuis /admin (pages Maison pour l'instant).
-- À exécuter dans Supabase > SQL Editor > New query.
create table if not exists site_blocks (
  key text primary key,            -- ex. 'maison:carimali'
  data jsonb not null default '{}',
  updated_at timestamptz not null default now()
);
alter table site_blocks enable row level security;
