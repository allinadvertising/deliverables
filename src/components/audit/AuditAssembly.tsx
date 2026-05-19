import type { AuditContent } from "@/lib/audit/types";
import { AuditHeader } from "./AuditHeader";
import { ExecutiveSummary } from "./ExecutiveSummary";
import { ActionItemsTable } from "./ActionItemsTable";
import { FindingCategoryGroup } from "./FindingCategoryGroup";
import { SolutionSteps } from "./SolutionSteps";
import { BeforeAfterGrid } from "./BeforeAfterGrid";
import { GlossaryGrid } from "./GlossaryGrid";
import { FaqSection } from "./FaqSection";
import { InsightBox } from "./InsightBox";
import { AuditFooter } from "./AuditFooter";

type AuditAssemblyProps = {
  content: AuditContent;
};

/**
 * Composes all audit section components from a structured AuditContent JSON.
 * This is the server-side rendering engine : one component drives the entire page.
 */
export function AuditAssembly({ content }: AuditAssemblyProps) {
  const { meta, executiveSummary, actionItems, findings, solutions, beforeAfter, insightBox, glossary, faq } = content;
  const quarter = inferQuarterLabel(meta.date);

  return (
    <>
      <AuditHeader
        auditType={meta.auditType}
        clientName={meta.clientName}
        date={meta.date}
        quarter={quarter}
        supportingWorkbookLink={meta.supportingFile ?? undefined}
      />

      <ExecutiveSummary
        items={executiveSummary.items}
        metricCards={executiveSummary.metricCards}
        severity={executiveSummary.severity}
        sourceNote={meta.sourceNote}
      />

      <ActionItemsTable items={actionItems} />

      <FindingCategoryGroup findings={findings} />

      <SolutionSteps solutions={solutions} />

      {insightBox && <InsightBox insight={insightBox} />}

      <BeforeAfterGrid pairs={beforeAfter} />

      <GlossaryGrid terms={glossary} />

      <FaqSection items={faq} />

      <AuditFooter
        auditType={meta.auditType}
        clientName={meta.clientName}
        quarter={quarter}
      />
    </>
  );
}

function inferQuarterLabel(dateLabel: string) {
  const match = dateLabel.match(
    /\b(january|february|march|april|may|june|july|august|september|october|november|december)\b.*\b(\d{4})\b/i,
  );

  if (!match) {
    return dateLabel;
  }

  const monthIndex = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ].indexOf(match[1].toLowerCase());

  if (monthIndex < 0) {
    return dateLabel;
  }

  return `Q${Math.floor(monthIndex / 3) + 1} ${match[2]}`;
}
