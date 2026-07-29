import { AuditFooter } from "@/components/audit/AuditFooter";
import { BackToTopButton } from "@/components/audit/BackToTopButton";
import { PrintAuditButton } from "@/components/audit/PrintAuditButton";
import { ReportAppendix } from "@/components/reports/storytelling/ReportAppendix";
import { ReportCover } from "@/components/reports/storytelling/ReportCover";
import { ReportDashboard } from "@/components/reports/storytelling/ReportDashboard";
import { ReportExecutive } from "@/components/reports/storytelling/ReportExecutive";
import { ReportJourney } from "@/components/reports/storytelling/ReportJourney";
import { ReportObstacles } from "@/components/reports/storytelling/ReportObstacles";

const sections = [
  { href: "#summary", label: "Summary" },
  { href: "#power-lines", label: "Power lines" },
  { href: "#journey", label: "Journey" },
  { href: "#dashboard", label: "KPIs" },
  { href: "#visual-direction", label: "Visuals" },
  { href: "#obstacles", label: "Obstacles" },
  { href: "#appendix", label: "Appendix" },
];

export function SeoStoryReport() {
  return (
    <>
      <div className="audit-no-print mx-auto mt-6 flex max-w-[1160px] justify-end px-4 sm:px-0">
        <PrintAuditButton ariaLabel="Print SEO performance report as PDF" />
      </div>

      <ReportCover />

      <nav
        aria-label="Report sections"
        className="audit-no-print sticky top-0 z-20 mx-auto max-w-[1160px] border-b border-slate-200 bg-[#edf2f7]/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-[#edf2f7]/80 sm:px-0"
      >
        <div className="flex gap-2 overflow-x-auto pb-1">
          {sections.map((section) => (
            <a
              className="inline-flex shrink-0 items-center border border-slate-300 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.08em] text-slate-600 no-underline transition-colors hover:border-[#2f65a7] hover:text-[#183b68] focus:outline-none focus:ring-2 focus:ring-[#f6b328] focus:ring-offset-2"
              href={section.href}
              key={section.href}
            >
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      <main>
        <ReportExecutive />
        <ReportJourney />
        <ReportDashboard />
        <ReportObstacles />
        <ReportAppendix />
      </main>

      <AuditFooter
        auditType="Organic Search Performance Report"
        clientName="TOICO"
        quarter="July 20-26, 2026"
      />
      <BackToTopButton />
    </>
  );
}
