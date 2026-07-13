import {
  isAuditContentV2,
  isAuditContentV3,
  type AuditContent,
} from "@/lib/audit/types";
import { AuditHeader } from "./AuditHeader";
import { AuditPrintDocument } from "./AuditPrintDocument";
import { AuditTabs } from "./AuditTabs";
import { AuditFooter } from "./AuditFooter";
import { BackToTopButton } from "./BackToTopButton";
import { PrintAuditButton } from "./PrintAuditButton";
import { AuditReportV2 } from "./AuditReportV2";
import { AuditSourceFiles } from "./AuditSourceFiles";

type AuditAssemblyProps = {
  content: AuditContent;
};

/**
 * Composes all audit section components from a structured AuditContent JSON.
 * This is the server-side rendering engine : one component drives the entire page.
 */
export function AuditAssembly({ content }: AuditAssemblyProps) {
  const { meta } = content;
  const quarter = inferQuarterLabel(meta.date);
  const isV2 = isAuditContentV2(content);
  const isV3 = isAuditContentV3(content);

  return (
    <>
      <div className="audit-no-print mx-auto mt-6 flex max-w-[1160px] justify-end px-4 sm:px-0">
        <PrintAuditButton />
      </div>

      <AuditHeader
        auditType={meta.auditType}
        clientName={meta.clientName}
        date={meta.date}
        quarter={quarter}
        supportingWorkbookLink={meta.supportingFile ?? undefined}
      />

      <div className="audit-screen-only">
        {isV2 ? (
          <AuditReportV2 content={content} />
        ) : isV3 ? (
          <AuditReportV3Placeholder />
        ) : (
          <AuditTabs content={content} />
        )}
      </div>

      <div className="audit-print-only" aria-hidden="true">
        {isV2 ? (
          <AuditReportV2 content={content} />
        ) : isV3 ? (
          <AuditReportV3Placeholder />
        ) : (
          <AuditPrintDocument content={content} />
        )}
      </div>

      <AuditSourceFiles sourceFiles={meta.sourceFiles} />

      <AuditFooter
        auditType={meta.auditType}
        clientName={meta.clientName}
        quarter={quarter}
      />

      <BackToTopButton />
    </>
  );
}

// Temporary stand-in for schemaVersion 3 (HTML-sourced) documents.
// Replaced by the real block-renderer tree in Future Integrations Phase H2.
function AuditReportV3Placeholder() {
  return (
    <div className="audit-page mx-auto max-w-[1160px] px-4 py-10 text-center text-[#65718a] sm:px-0">
      HTML-sourced deliverable rendering is not implemented yet.
    </div>
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
