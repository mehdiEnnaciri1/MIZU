-- MIZU : tables CRM. À coller dans Supabase > SQL Editor > Run.
-- RLS activé sans politique : le public ne peut rien lire/écrire directement.
-- Seules les routes /api (clé secrète côté serveur) écrivent dans ces tables.

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  type text not null check (type in ('doc_download','contact','newsletter')),
  name text, email text, phone text, company text, city text,
  profile text check (profile in ('particulier','pro')),
  subject text, message text,
  product_ref text, file text,
  consent boolean default false, consent_at timestamptz,
  lang text, status text not null default 'new'
);

create table if not exists quotes (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text, email text, phone text, company text, city text,
  profile text check (profile in ('particulier','pro')),
  job text, delay text, wants_visit boolean default false, notes text,
  items jsonb not null default '[]',   -- [{ref, name, brand, finish, qty}]
  status text not null default 'new' check (status in ('new','in_progress','sent','won','lost'))
);

create table if not exists appointments (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  kind text, slot_label text, brands text[],
  name text, email text, phone text, city text, project text,
  status text not null default 'new'
);

alter table leads enable row level security;
alter table quotes enable row level security;
alter table appointments enable row level security;

create index if not exists leads_created on leads (created_at desc);
create index if not exists quotes_status on quotes (status, created_at desc);
