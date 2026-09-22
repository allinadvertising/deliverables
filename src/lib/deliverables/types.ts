/**
 * The shape the internal deliverables dashboard reads.
 *
 * Entries are built in `registry.ts` from the deliverable's own data module,
 * never by retyping its metadata: the client, headline and period label are
 * read out of the same object the page renders, so a dashboard row cannot
 * disagree with the deliverable it links to.
 */

export type DeliverableKind = "analysis-suite" | "kickoff" | "seo-report";

export type DeliverableEntry = {
  /** Client display name, as the deliverable itself states it. */
  client: string;
  /**
   * Path under `public/` of the committed self-contained HTML export, e.g.
   * "/penelope/2026/august/penelope-seo-report-august-2026.html".
   *
   * Required for anything produced after 2026-09-22, when the export became
   * part of the pipeline. Deliverables that shipped before that predate the
   * rule and leave it empty; the dashboard flags those rows.
   */
  exportHref?: string;
  /** One-line summary: a report's cover headline, a deck's subtitle. */
  headline: string;
  /** Live route, e.g. "/reports/penelope/aug-2026". */
  href: string;
  kind: DeliverableKind;
  /**
   * ISO date the covered period ends — the only hand-typed field, and the
   * sort key. The period labels in the data modules are free text
   * ("August 1-31, 2026", "Jun 1 - Aug 31, 2026", "September to November
   * 2026"), so parsing them for ordering would be brittle.
   */
  periodEnd: string;
  /** Human period label, taken from the deliverable. */
  periodLabel: string;
};
