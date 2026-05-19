import type { AuditContent } from "@/lib/audit/types";
import { AuditHeader } from "./AuditHeader";
import { AuditTabs } from "./AuditTabs";
import { AuditFooter } from "./AuditFooter";
import { BackToTopButton } from "./BackToTopButton";

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
      <AuditHeader
        auditType={meta.auditType}
        clientName={meta.clientName}
        date={meta.date}
        quarter={quarter}
        supportingWorkbookLink={meta.supportingFile ?? undefined}
      />

      <AuditTabs content={content} />

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
