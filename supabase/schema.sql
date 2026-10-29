create table if not exists public.portfolio_content (
  id integer primary key,
  content jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.portfolio_content enable row level security;

create policy "Published portfolio is readable by everyone"
  on public.portfolio_content
  for select
  using (true);

create policy "Authenticated admins can create portfolio content"
  on public.portfolio_content
  for insert
  to authenticated
  with check (true);

create policy "Authenticated admins can update portfolio content"
  on public.portfolio_content
  for update
  to authenticated
  using (true)
  with check (true);
