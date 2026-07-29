import { AuditFooter } from "@/components/audit/AuditFooter";
import { BackToTopButton } from "@/components/audit/BackToTopButton";
import { PrintAuditButton } from "@/components/audit/PrintAuditButton";
import { KickoffApproval } from "@/components/kickoff/KickoffApproval";
import { KickoffCover } from "@/components/kickoff/KickoffCover";
import { KickoffOverview } from "@/components/kickoff/KickoffOverview";
import { KickoffRoadmap } from "@/components/kickoff/KickoffRoadmap";

const sections = [
  { href: "#strategy", label: "Strategy" },
  { href: "#findings", label: "Findings" },
  { href: "#roadmap", label: "90-day plan" },
  { href: "#month-one", label: "Month 1" },
  { href: "#approval", label: "Approval" },
];

export function KickoffDeliverable() {
  return (
    <>
      <div className="audit-no-print mx-auto mt-6 flex max-w-[1160px] justify-end px-4 sm:px-0">
        <PrintAuditButton ariaLabel="Print kickoff deliverable as PDF" />
      </div>

      <KickoffCover />

      <nav
        aria-label="Kickoff sections"
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
        <KickoffOverview />
        <KickoffRoadmap />
        <KickoffApproval />
      </main>

      <AuditFooter
        auditType="SEO Strategy Kickoff"
        clientName="TOICO"
        quarter="Q3 2026"
      />
      <BackToTopButton />
    </>
  );
}
