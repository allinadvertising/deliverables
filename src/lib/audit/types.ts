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
  sourceFiles?: string[] | null; // Names of the .md files uploaded to create this audit; absent on audits created before this field existed
  sourceType?: "markdown" | "html"; // Absent = legacy/markdown-era record. "html" marks schemaVersion 3 documents.
  sourceHtmlPath?: string | null; // Supabase Storage object path for the original self-contained HTML upload (schemaVersion 3 only)
  externalRefs?: string[] | null; // External <script src>/<link rel=stylesheet href> URLs found in the source HTML upload (schemaVersion 3 only) - the upload wasn't fully self-contained
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
  insightBox?: string | null;
  glossary: GlossaryTerm[];
  faq: FaqItem[];
};

/** Versioned shape used only for newly transformed audits. */
export type AuditContentV2 = AuditTransformationV2Payload & {
  schemaVersion: 2;
  meta: AuditMeta;
};

// ─── Version 3: block-based content (HTML deliverable ingestion) ──────────
//
// Self-contained HTML uploads may be any deliverable type, not just an SEO
// issue list, so v3 documents are an ordered array of typed content blocks
// instead of the fixed issues/glossary/faq shape used by v2.

export type StatCardSentiment = "positive" | "negative" | "neutral";

export type StatCard = {
  value: string;
  label: string;
  change: string | null;
  /** How this specific change should read to the reader - e.g. cost going
   * down is "positive" even though the number itself is negative. Optional
   * so older v3 records without it still render (falls back to neutral). */
  sentiment?: StatCardSentiment;
};

export type ContentBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "stat_cards"; cards: StatCard[] }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "table"; caption: string | null; headers: string[]; rows: string[][] }
  | { type: "callout"; tone: "info" | "warning" | "success"; text: string; label?: string | null }
  | { type: "image"; src: string; alt: string; caption: string | null }
  | { type: "quote"; text: string; attribution: string | null }
  | { type: "glossary"; terms: GlossaryTerm[] }
  | { type: "faq"; items: FaqItem[] };

export type ContentBlockType = ContentBlock["type"];

/** Payload returned by the v3 transformation model before server metadata is added. */
export type AuditTransformationV3Payload = {
  blocks: ContentBlock[];
  insightBox?: string | null;
};

/** Versioned shape used only for HTML-sourced audits. */
export type AuditContentV3 = AuditTransformationV3Payload & {
  schemaVersion: 3;
  meta: AuditMeta;
};

export type AuditContent = LegacyAuditContent | AuditContentV2 | AuditContentV3;

export function isAuditTransformationV2Payload(
  value: unknown,
): value is AuditTransformationV2Payload {
  if (!isRecord(value)) return false;

  return (
    hasOnlyKeys(value, ["issues", "insightBox", "glossary", "faq"]) &&
    hasOptionalInsightBox(value.insightBox) &&
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
      "insightBox",
      "glossary",
      "faq",
    ]) &&
    value.schemaVersion === 2 &&
    isAuditMeta(value.meta) &&
    hasOptionalInsightBox(value.insightBox) &&
    hasValidV2Sections(value)
  );
}

export function isAuditTransformationV3Payload(
  value: unknown,
): value is AuditTransformationV3Payload {
  if (!isRecord(value)) return false;

  return (
    hasOnlyKeys(value, ["blocks", "insightBox"]) &&
    hasOptionalInsightBox(value.insightBox) &&
    isValidBlockArray(value.blocks)
  );
}

export function isAuditContentV3(value: unknown): value is AuditContentV3 {
  return (
    isRecord(value) &&
    hasOnlyKeys(value, ["schemaVersion", "meta", "blocks", "insightBox"]) &&
    value.schemaVersion === 3 &&
    isAuditMeta(value.meta) &&
    hasOptionalInsightBox(value.insightBox) &&
    isValidBlockArray(value.blocks)
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
  return (
    isAuditContentV2(value) ||
    isAuditContentV3(value) ||
    isLegacyAuditContent(value)
  );
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

function hasOptionalInsightBox(value: unknown): value is string | null | undefined {
  return value === undefined || value === null || isNonEmptyString(value);
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
      "sourceFiles",
      "sourceType",
      "sourceHtmlPath",
      "externalRefs",
    ]) &&
    isNonEmptyString(value.clientName) &&
    isNonEmptyString(value.auditType) &&
    isNonEmptyString(value.date) &&
    (typeof value.supportingFile === "string" ||
      value.supportingFile === null) &&
    (typeof value.sourceNote === "string" || value.sourceNote === null) &&
    (value.sourceFiles === undefined ||
      value.sourceFiles === null ||
      (Array.isArray(value.sourceFiles) &&
        value.sourceFiles.every(isNonEmptyString))) &&
    (value.sourceType === undefined ||
      value.sourceType === "markdown" ||
      value.sourceType === "html") &&
    (value.sourceHtmlPath === undefined ||
      value.sourceHtmlPath === null ||
      typeof value.sourceHtmlPath === "string") &&
    (value.externalRefs === undefined ||
      value.externalRefs === null ||
      (Array.isArray(value.externalRefs) &&
        value.externalRefs.every(isNonEmptyString)))
  );
}

function isValidBlockArray(value: unknown): value is ContentBlock[] {
  return (
    Array.isArray(value) && value.length > 0 && value.every(isContentBlock)
  );
}

function isContentBlock(value: unknown): value is ContentBlock {
  if (!isRecord(value) || typeof value.type !== "string") return false;

  switch (value.type) {
    case "heading":
      return (
        hasOnlyKeys(value, ["type", "level", "text"]) &&
        (value.level === 2 || value.level === 3) &&
        isNonEmptyString(value.text)
      );
    case "paragraph":
      return (
        hasOnlyKeys(value, ["type", "text"]) && isNonEmptyString(value.text)
      );
    case "stat_cards":
      return (
        hasOnlyKeys(value, ["type", "cards"]) &&
        Array.isArray(value.cards) &&
        value.cards.length > 0 &&
        value.cards.every(isStatCard)
      );
    case "list":
      return (
        hasOnlyKeys(value, ["type", "ordered", "items"]) &&
        typeof value.ordered === "boolean" &&
        Array.isArray(value.items) &&
        value.items.length > 0 &&
        value.items.every(isNonEmptyString)
      );
    case "table":
      return (
        hasOnlyKeys(value, ["type", "caption", "headers", "rows"]) &&
        (typeof value.caption === "string" || value.caption === null) &&
        Array.isArray(value.headers) &&
        value.headers.every((header) => typeof header === "string") &&
        Array.isArray(value.rows) &&
        value.rows.every(
          (row) =>
            Array.isArray(row) &&
            row.every((cell) => typeof cell === "string"),
        )
      );
    case "callout":
      return (
        hasOnlyKeys(value, ["type", "tone", "text", "label"]) &&
        (value.tone === "info" ||
          value.tone === "warning" ||
          value.tone === "success") &&
        isNonEmptyString(value.text) &&
        (value.label === undefined ||
          value.label === null ||
          typeof value.label === "string")
      );
    case "image":
      return (
        hasOnlyKeys(value, ["type", "src", "alt", "caption"]) &&
        isNonEmptyString(value.src) &&
        typeof value.alt === "string" &&
        (typeof value.caption === "string" || value.caption === null)
      );
    case "quote":
      return (
        hasOnlyKeys(value, ["type", "text", "attribution"]) &&
        isNonEmptyString(value.text) &&
        (typeof value.attribution === "string" ||
          value.attribution === null)
      );
    case "glossary":
      return (
        hasOnlyKeys(value, ["type", "terms"]) &&
        Array.isArray(value.terms) &&
        value.terms.length > 0 &&
        value.terms.every(isGlossaryTerm)
      );
    case "faq":
      return (
        hasOnlyKeys(value, ["type", "items"]) &&
        Array.isArray(value.items) &&
        value.items.length > 0 &&
        value.items.every(isFaqItem)
      );
    default:
      return false;
  }
}

function isStatCard(value: unknown): value is StatCard {
  return (
    isRecord(value) &&
    hasOnlyKeys(value, ["value", "label", "change", "sentiment"]) &&
    isNonEmptyString(value.value) &&
    isNonEmptyString(value.label) &&
    (typeof value.change === "string" || value.change === null) &&
    (value.sentiment === undefined ||
      value.sentiment === "positive" ||
      value.sentiment === "negative" ||
      value.sentiment === "neutral")
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
