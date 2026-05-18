-- 003_add_audit_content.sql
-- Phase R5/R7: Add JSONB content column to audits table.
-- Existing RLS policies (Owner full access, Public token read, Service role bypass)
-- automatically cover the new column — no RLS changes needed.
-- Run in Supabase SQL Editor.

ALTER TABLE audits ADD COLUMN IF NOT EXISTS content JSONB;
