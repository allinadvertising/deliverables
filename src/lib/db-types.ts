// Database schema types — mirrors the Supabase SQL migration.
// These are the raw row shapes; join/display types are derived below.

export type DbClient = {
  id: string;
  slug: string;
  name: string;
  created_at: string;
  updated_at: string;
};

export type DbAudit = {
  id: string;
  client_id: string;
  audit_type: string;
  title: string;
  year: number;
  month: string;
  file_path: string;
  file_size: number;
  created_at: string;
  updated_at: string;
};

export type EnhancementStatus =
  | "pending"
  | "running"
  | "completed"
  | "failed";

export type DbEnhancementRun = {
  id: string;
  audit_id: string | null;
  provider: "openai" | "deepseek";
  model: string;
  status: EnhancementStatus;
  log_id: string | null;
  output_path: string | null;
  error_message: string | null;
  created_at: string;
  completed_at: string | null;
};

// Display type for the audit list — a flat projection of audit + client.
export type AuditDisplay = {
  id: string;
  href: string;
  title: string;
  client: string;
  period: string;
  pathLabel: string;
  updatedAt: string;
  updatedTime: number;
  size: string;
};
