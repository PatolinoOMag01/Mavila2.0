-- Execute no SQL Editor do Supabase antes de habilitar o formulário.
create table if not exists public.mv_early_access (
  id uuid primary key default gen_random_uuid(),
  email text not null unique check (length(email) <= 254),
  consent boolean not null check (consent = true),
  source text not null default 'mv-club' check (source = 'mv-club'),
  created_at timestamptz not null default now()
);
alter table public.mv_early_access enable row level security;
revoke all on public.mv_early_access from anon, authenticated;
grant insert on public.mv_early_access to anon, authenticated;
drop policy if exists "Public can subscribe with consent" on public.mv_early_access;
create policy "Public can subscribe with consent"
on public.mv_early_access for insert to anon, authenticated
with check (consent = true and source = 'mv-club');
-- Sem políticas de SELECT/UPDATE/DELETE: visitantes não podem listar inscritos.
-- Para produção, configure CAPTCHA/rate limiting e política de privacidade.
