// Audit content types : mirrors the JSON schema defined in README.md.
// Updated 2026-05-18 after Phase R1 analysis of 8 existing audits.
// Nullable/optional fields reflect real-world audit variations.

export type Priority = "P0" | "P1" | "P2";

export type Owner = "AIA" | "Client Dev";

export type AuditMeta = {
  clientName: string;
  auditType: string;
  date: string; // e.g. "May 2026"
  /** @deprecated Removed May 2026 : cover badge pill is no longer rendered. */
  coverBadge?: string;
  supportingFile: string | null;
  sourceNote: string | null; // Never populated in existing audits : retained for future use
};

export type MetricCard = {
  value: string; // e.g. "203", "12%"
  label: string; // e.g. "Orphan URLs"
  change: string | null; // Always null in existing audits : future: "+12%", "-5%"
};

export type Severity = {
  p0Count: number;
  p1Count: number;
  p2Count: number;
};

export type ExecutiveSummary = {
  items: string[]; // Bullet-point key insights
  metricCards: MetricCard[];
  severity?: Severity; // Optional: ITK9 audit has no severity bar
};

export type ActionItem = {
  priority: Priority;
  title: string;
  category: string;
  scope: string;
  impact: string;
  secondaryImpact: string | null;
  owner: Owner;
};

export type FindingStatistic = {
  number: string; // e.g. "777"
  description: string; // e.g. "exact-duplicate URLs"
};

export type FindingImpact = {
  label: string;
  value: string;
};

export type Finding = {
  category: string; // Groups findings under a section-label H3
  priority: Priority;
  title: string;
  rootCause: string;
  statistics?: FindingStatistic[]; // Optional: some findings have no stat items
  whatThisMeans: string; // Plain-English business impact
  representativeUrls?: string[]; // Optional: some findings reference no URLs
  impacts?: FindingImpact[]; // Optional: some findings have no impact grid
};

export type SolutionStep = {
  title: string;
  description: string;
};

export type SolutionGroup = {
  category: string;
  steps: SolutionStep[];
};

export type BeforeAfterPair = {
  label: string; // e.g. "Heading Structure Fix", "Redirect Chain"
  before: string;
  after: string;
};

export type GlossaryTerm = {
  term: string;
  definition: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type LegacyAuditContent = {
  meta: AuditMeta;
  executiveSummary: ExecutiveSummary;
  actionItems: ActionItem[];
  findings: Finding[];
  solutions: SolutionGroup[];
  beforeAfter: BeforeAfterPair[];
  insightBox: string | null; // Only Pimp My EV audits populate this
  glossary: GlossaryTerm[];
  faq: FaqItem[];
};

export type AuditIssueV2 = {
  what_is_the_issue: string;
  why_it_matters: string;
  how_we_will_fix_it: string;
  expected_outcome: string;
};

/** Payload returned by the v2 transformation model before server metadata is added. */
export type AuditTransformationV2Payload = {
  issues: AuditIssueV2[];
  glossary: GlossaryTerm[];
  faq: FaqItem[];
};

/** Versioned shape used only for newly transformed audits. */
export type AuditContentV2 = AuditTransformationV2Payload & {
  schemaVersion: 2;
  meta: AuditMeta;
};

export type AuditContent = LegacyAuditContent | AuditContentV2;

export function isAuditTransformationV2Payload(
  value: unknown,
): value is AuditTransformationV2Payload {
  if (!isRecord(value)) return false;

  return (
    hasOnlyKeys(value, ["issues", "glossary", "faq"]) &&
    hasValidV2Sections(value)
  );
}

export function isAuditContentV2(value: unknown): value is AuditContentV2 {
  return (
    isRecord(value) &&
    hasOnlyKeys(value, [
      "schemaVersion",
      "meta",
      "issues",
      "glossary",
      "faq",
    ]) &&
    value.schemaVersion === 2 &&
    isAuditMeta(value.meta) &&
    hasValidV2Sections(value)
  );
}

export function isLegacyAuditContent(
  value: unknown,
): value is LegacyAuditContent {
  if (!isRecord(value) || !isRecord(value.meta)) return false;

  return (
    isRecord(value.executiveSummary) &&
    Array.isArray(value.actionItems) &&
    Array.isArray(value.findings) &&
    Array.isArray(value.solutions) &&
    Array.isArray(value.beforeAfter) &&
    Array.isArray(value.glossary) &&
    Array.isArray(value.faq)
  );
}

export function isAuditContent(value: unknown): value is AuditContent {
  return isAuditContentV2(value) || isLegacyAuditContent(value);
}

function isAuditIssueV2(value: unknown): value is AuditIssueV2 {
  return (
    isRecord(value) &&
    hasOnlyKeys(value, [
      "what_is_the_issue",
      "why_it_matters",
      "how_we_will_fix_it",
      "expected_outcome",
    ]) &&
    isNonEmptyString(value.what_is_the_issue) &&
    isNonEmptyString(value.why_it_matters) &&
    isNonEmptyString(value.how_we_will_fix_it) &&
    isNonEmptyString(value.expected_outcome)
  );
}

function hasValidV2Sections(
  value: Record<string, unknown>,
): value is Record<string, unknown> & AuditTransformationV2Payload {
  return (
    Array.isArray(value.issues) &&
    value.issues.length > 0 &&
    value.issues.every(isAuditIssueV2) &&
    Array.isArray(value.glossary) &&
    value.glossary.length > 0 &&
    value.glossary.every(isGlossaryTerm) &&
    Array.isArray(value.faq) &&
    value.faq.length > 0 &&
    value.faq.every(isFaqItem)
  );
}

function isAuditMeta(value: unknown): value is AuditMeta {
  return (
    isRecord(value) &&
    hasOnlyKeys(value, [
      "clientName",
      "auditType",
      "date",
      "supportingFile",
      "sourceNote",
    ]) &&
    isNonEmptyString(value.clientName) &&
    isNonEmptyString(value.auditType) &&
    isNonEmptyString(value.date) &&
    (typeof value.supportingFile === "string" ||
      value.supportingFile === null) &&
    (typeof value.sourceNote === "string" || value.sourceNote === null)
  );
}

function isGlossaryTerm(value: unknown): value is GlossaryTerm {
  return (
    isRecord(value) &&
    hasOnlyKeys(value, ["term", "definition"]) &&
    isNonEmptyString(value.term) &&
    isNonEmptyString(value.definition)
  );
}

function isFaqItem(value: unknown): value is FaqItem {
  return (
    isRecord(value) &&
    hasOnlyKeys(value, ["question", "answer"]) &&
    isNonEmptyString(value.question) &&
    isNonEmptyString(value.answer)
  );
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function hasOnlyKeys(
  value: Record<string, unknown>,
  allowedKeys: string[],
) {
  return Object.keys(value).every((key) => allowedKeys.includes(key));
}
