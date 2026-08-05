import { AuditFooter } from "@/components/audit/AuditFooter";
import { BackToTopButton } from "@/components/audit/BackToTopButton";
import { PrintAuditButton } from "@/components/audit/PrintAuditButton";
import { ReportAppendix } from "@/components/reports/storytelling/ReportAppendix";
import { ReportCover } from "@/components/reports/storytelling/ReportCover";
import { ReportCompletedWork } from "@/components/reports/storytelling/ReportCompletedWork";
import { ReportDashboard } from "@/components/reports/storytelling/ReportDashboard";
import { ReportExecutive } from "@/components/reports/storytelling/ReportExecutive";
import { ReportIndustryUpdates } from "@/components/reports/storytelling/ReportIndustryUpdates";
import { ReportJourney } from "@/components/reports/storytelling/ReportJourney";
import { ReportObstacles } from "@/components/reports/storytelling/ReportObstacles";
import { ReportVisuals } from "@/components/reports/storytelling/ReportVisuals";
import type { SeoStoryReportData } from "@/lib/reports/types";

type SeoStoryReportProps = {
  report: SeoStoryReportData;
};

export function SeoStoryReport({ report }: SeoStoryReportProps) {
  const hasRevenue = Boolean(report.performanceCharts?.revenue);
  const hasVisuals = Boolean(
    report.performanceCharts || report.visualDirections.length,
  );
  const visibleSections = [
    { href: "#summary", label: "Summary" },
    { href: "#power-lines", label: "Highlights" },
    ...(hasRevenue ? [{ href: "#revenue", label: "Revenue" }] : []),
    { href: "#journey", label: "Journey" },
    ...(report.completedWork?.length
      ? [{ href: "#completed-work", label: "Completed work" }]
      : []),
    { href: "#dashboard", label: "KPIs" },
    ...(!hasRevenue && hasVisuals
      ? [{ href: "#visual-direction", label: "Visuals" }]
      : []),
    { href: "#obstacles", label: "Obstacles" },
    ...(report.industryUpdates?.length
      ? [{ href: "#industry-updates", label: "Industry updates" }]
      : []),
    { href: "#appendix", label: "Appendix" },
  ];

  return (
    <>
      <div className="audit-no-print mx-auto mt-6 flex max-w-[1160px] justify-end px-4 sm:px-0">
        <PrintAuditButton ariaLabel="Print SEO performance report as PDF" />
      </div>

      <ReportCover meta={report.meta} />

      <nav
        aria-label="Report sections"
        className="audit-no-print sticky top-0 z-20 mx-auto max-w-[1160px] border-b border-slate-200 bg-[#edf2f7]/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-[#edf2f7]/80 sm:px-0"
      >
        <div className="flex gap-2 overflow-x-auto pb-1">
          {visibleSections.map((section) => (
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
        <ReportExecutive
          action={report.meta.action}
          businessObjective={report.businessObjective}
          executiveSummary={report.executiveSummary}
          powerLines={report.powerLines}
        />
        {hasRevenue ? (
          <ReportVisuals
            performanceCharts={report.performanceCharts}
            visualSection={report.visualSection}
            visualDirections={report.visualDirections}
          />
        ) : null}
        <ReportJourney journeyWorkstreams={report.journeyWorkstreams} />
        {report.completedWork?.length ? (
          <ReportCompletedWork items={report.completedWork} />
        ) : null}
        <ReportDashboard
          conversionPlan={report.conversionPlan}
          kpiDisclosure={report.kpiDisclosure}
          kpiRows={report.kpiRows}
        />
        {!hasRevenue && hasVisuals ? (
          <ReportVisuals
            performanceCharts={report.performanceCharts}
            visualSection={report.visualSection}
            visualDirections={report.visualDirections}
          />
        ) : null}
        <ReportObstacles obstacles={report.obstacles} />
        {report.industryUpdates?.length ? (
          <ReportIndustryUpdates updates={report.industryUpdates} />
        ) : null}
        <ReportAppendix
          dataNotes={report.dataNotes}
          technicalItems={report.technicalItems}
          technicalLabels={report.technicalLabels}
        />
      </main>

      <AuditFooter
        auditType="Organic Search Performance Report"
        clientName={report.meta.client}
        quarter={report.meta.currentPeriod}
      />
      <BackToTopButton />
    </>
  );
}
