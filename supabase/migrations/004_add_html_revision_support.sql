-- 004_add_html_revision_support.sql
-- Future Integrations Phase H0: track create vs. revise enhancement jobs and
-- the instructions used for a revision, so the re-LLM edit flow for
-- HTML-sourced (schemaVersion 3) audits has an audit trail.
-- Run in Supabase SQL Editor. Idempotent : safe to re-run.
--
-- No `audits` table migration is needed here : sourceType/sourceHtmlPath live
-- inside the existing `content` JSONB column, same pattern as `sourceFiles`.

BEGIN;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'enhancement_runs' AND column_name = 'job_kind'
  ) THEN
    ALTER TABLE enhancement_runs ADD COLUMN job_kind TEXT NOT NULL DEFAULT 'create';
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'enhancement_runs' AND column_name = 'instructions'
  ) THEN
    ALTER TABLE enhancement_runs ADD COLUMN instructions TEXT;
  END IF;
END $$;

COMMIT;
