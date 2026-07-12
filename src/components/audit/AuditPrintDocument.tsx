import type { LegacyAuditContent } from "@/lib/audit/types";
import { ActionItemsTable } from "./ActionItemsTable";
import { BeforeAfterGrid } from "./BeforeAfterGrid";
import { ExecutiveSummary } from "./ExecutiveSummary";
import { FaqSection } from "./FaqSection";
import { FindingCategoryGroup } from "./FindingCategoryGroup";
import { GlossaryGrid } from "./GlossaryGrid";
import { InsightBox } from "./InsightBox";
import { SolutionSteps } from "./SolutionSteps";

type AuditPrintDocumentProps = {
  content: LegacyAuditContent;
};

export function AuditPrintDocument({ content }: AuditPrintDocumentProps) {
  const {
    actionItems,
    beforeAfter,
    executiveSummary,
    faq,
    findings,
    glossary,
    insightBox,
    meta,
    solutions,
  } = content;

  return (
    <>
      {insightBox ? <InsightBox insight={insightBox} /> : null}
      <ExecutiveSummary
        items={executiveSummary.items}
        metricCards={executiveSummary.metricCards}
        severity={executiveSummary.severity}
        sourceNote={meta.sourceNote}
      />
      {actionItems.length > 0 ? <ActionItemsTable items={actionItems} /> : null}
      {findings.length > 0 ? (
        <FindingCategoryGroup findings={findings} />
      ) : null}
      {solutions.length > 0 ? <SolutionSteps solutions={solutions} /> : null}
      {beforeAfter.length > 0 ? <BeforeAfterGrid pairs={beforeAfter} /> : null}
      {glossary.length > 0 ? <GlossaryGrid terms={glossary} /> : null}
      {faq.length > 0 ? <FaqSection items={faq} /> : null}
    </>
  );
}
