import { AuditFooter } from "@/components/audit/AuditFooter";
import { BackToTopButton } from "@/components/audit/BackToTopButton";
import { PrintAuditButton } from "@/components/audit/PrintAuditButton";
import { SuiteCover } from "@/components/reports/suite/SuiteCover";
import { SuiteNav } from "@/components/reports/suite/SuiteNav";
import type { SuiteMeta, SuiteNavItem } from "@/lib/reports/pipingnow/types";

type SuiteShellProps = {
  children: React.ReactNode;
  currentHref: string;
  meta: SuiteMeta;
  sections?: SuiteNavItem[];
};

export function SuiteShell({
  children,
  currentHref,
  meta,
  sections,
}: SuiteShellProps) {
  return (
    <>
      <div className="audit-no-print mx-auto mt-6 flex max-w-[1160px] justify-end px-4 sm:px-0">
        <PrintAuditButton ariaLabel={`Print ${meta.pageLabel} as PDF`} />
      </div>

      <SuiteCover meta={meta} />
      <SuiteNav currentHref={currentHref} sections={sections} />

      <main>{children}</main>

      <AuditFooter
        auditType={meta.reportType}
        clientName={meta.client}
        quarter={meta.date}
      />
      <BackToTopButton />
    </>
  );
}
