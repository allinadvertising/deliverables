-- 005_add_html_deliverables.sql
-- Direct HTML audit pipeline: serves uploaded HTML deliverables close to
-- verbatim (brand CSS injected, no LLM reconstruction) at a path-based route
-- /html-audits/<client-slug>/<mm-dd>/<audit-slug>. Deliberately a separate
-- table from `audits` : does not touch the AuditContent/AuditAssembly
-- contract used by the markdown (v2) and LLM-flattened HTML (v3) pipelines.
-- Run in Supabase SQL Editor. Idempotent : safe to re-run.

BEGIN;

CREATE TABLE IF NOT EXISTS html_deliverables (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  client_slug TEXT NOT NULL,
  audit_slug TEXT NOT NULL,
  date_slug TEXT NOT NULL, -- "mm-dd"
  title TEXT NOT NULL,
  storage_path TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  owner_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (client_slug, date_slug, audit_slug)
);

CREATE INDEX IF NOT EXISTS idx_html_deliverables_owner_id ON html_deliverables(owner_id);
CREATE INDEX IF NOT EXISTS idx_html_deliverables_client_id ON html_deliverables(client_id);

ALTER TABLE html_deliverables ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Owner full access" ON html_deliverables;
DROP POLICY IF EXISTS "Public read access" ON html_deliverables;

-- Owner: full access to own rows (matches the `audits` ownership model —
-- owner_id IS NULL rows are legacy/unowned and are handled in application
-- code, not RLS, same as `audits`).
CREATE POLICY "Owner full access" ON html_deliverables
  USING (auth.uid() = owner_id OR owner_id IS NULL);

-- Public: the serving route reads via the service-role client
-- (supabaseServer), which bypasses RLS, so no public SELECT policy is
-- needed here — matches how audit_views/audits handle service-role reads.

-- Private bucket for the branded HTML bytes, same access pattern as the
-- existing `audit-source-html` bucket : service-role only, read back by the
-- serving route handler.
INSERT INTO storage.buckets (id, name, public)
VALUES ('audit-branded-html', 'audit-branded-html', false)
ON CONFLICT (id) DO NOTHING;

COMMIT;
