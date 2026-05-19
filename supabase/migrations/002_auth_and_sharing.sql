-- 002_auth_and_sharing.sql
-- Phase 3: Extend audits table for owner-based access and public token sharing.
-- Run in Supabase SQL Editor. Idempotent : safe to re-run.

BEGIN;

-- ── 1. Extend audits table ───────────────────────────────────────

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'audits' AND column_name = 'owner_id'
  ) THEN
    ALTER TABLE audits ADD COLUMN owner_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'audits' AND column_name = 'share_token'
  ) THEN
    ALTER TABLE audits ADD COLUMN share_token TEXT UNIQUE;
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'audits' AND column_name = 'share_token_created_at'
  ) THEN
    ALTER TABLE audits ADD COLUMN share_token_created_at TIMESTAMPTZ;
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_audits_share_token ON audits(share_token);
CREATE INDEX IF NOT EXISTS idx_audits_owner_id ON audits(owner_id);

-- ── 2. Create audit_views table ──────────────────────────────────

CREATE TABLE IF NOT EXISTS audit_views (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  audit_id UUID NOT NULL REFERENCES audits(id) ON DELETE CASCADE,
  viewed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  ip_hash TEXT NOT NULL,
  user_agent TEXT
);

CREATE INDEX IF NOT EXISTS idx_audit_views_audit_id ON audit_views(audit_id);

-- ── 3. RLS on audits ─────────────────────────────────────────────

ALTER TABLE audits ENABLE ROW LEVEL SECURITY;

-- Drop all existing policies on audits (clean slate)
DROP POLICY IF EXISTS "Public read access for audits" ON audits;
DROP POLICY IF EXISTS "Service role full access on audits" ON audits;
DROP POLICY IF EXISTS "Owner full access" ON audits;
DROP POLICY IF EXISTS "Public token read" ON audits;
DROP POLICY IF EXISTS "Service role bypass" ON audits;

-- Owner: full access to own audits
CREATE POLICY "Owner full access" ON audits
  USING (auth.uid() = owner_id);

-- Public: can SELECT if share_token is set (token-based sharing)
CREATE POLICY "Public token read" ON audits
  FOR SELECT
  USING (share_token IS NOT NULL);

-- ── 4. RLS on audit_views ────────────────────────────────────────

ALTER TABLE audit_views ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Owner reads views" ON audit_views;
DROP POLICY IF EXISTS "Public insert view" ON audit_views;

CREATE POLICY "Owner reads views" ON audit_views
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM audits
      WHERE audits.id = audit_views.audit_id
        AND audits.owner_id = auth.uid()
    )
  );

CREATE POLICY "Public insert view" ON audit_views
  FOR INSERT
  WITH CHECK (true);

COMMIT;
