import type { AuditContent } from "@/lib/audit/types";
import { AuditHeader } from "./AuditHeader";
import { AuditPrintDocument } from "./AuditPrintDocument";
import { AuditTabs } from "./AuditTabs";
import { AuditFooter } from "./AuditFooter";
import { BackToTopButton } from "./BackToTopButton";
import { PrintAuditButton } from "./PrintAuditButton";

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
        <AuditTabs content={content} />
      </div>

      <div className="audit-print-only" aria-hidden="true">
        <AuditPrintDocument content={content} />
      </div>

      <AuditFooter
        auditType={meta.auditType}
        clientName={meta.clientName}
        quarter={quarter}
      />

      <BackToTopButton />
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
