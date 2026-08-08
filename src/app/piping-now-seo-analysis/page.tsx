import type { Metadata } from "next";

import { ReportExecutive } from "@/components/reports/storytelling/ReportExecutive";
import { ReportObstacles } from "@/components/reports/storytelling/ReportObstacles";
import { SuiteCallout } from "@/components/reports/suite/SuiteCallout";
import { SuiteDataTable } from "@/components/reports/suite/SuiteDataTable";
import { SuiteEvidence } from "@/components/reports/suite/SuiteEvidence";
import { SuiteLinkCards } from "@/components/reports/suite/SuiteLinkCards";
import { SuiteRoadmap } from "@/components/reports/suite/SuiteRoadmap";
import { SuiteSection } from "@/components/reports/suite/SuiteSection";
import { SuiteShell } from "@/components/reports/suite/SuiteShell";
import { SuiteStatGrid } from "@/components/reports/suite/SuiteStatGrid";
import { EditorialText } from "@/components/shared/EditorialText";
import {
  hubAuditLinks,
  hubBusinessObjective,
  hubClientPriorities,
  hubDiagnosisPoints,
  hubEvidenceGroups,
  hubExecutiveSummary,
  hubFinalRecommendation,
  hubHeadlineStats,
  hubMeta,
  hubNextPriority,
  hubOperatingPrinciple,
  hubPageGroupColumns,
  hubPageGroupRows,
  hubPowerLines,
  hubRisks,
  hubRoadmap,
} from "@/lib/reports/pipingnow/hub";
import { suiteBasePath } from "@/lib/reports/pipingnow/nav";

export const metadata: Metadata = {
  title: "Piping Now : Deep SEO Analysis",
  description:
    "Piping Now cross audit SEO analysis covering search performance, indexation, Merchant Center, backlinks, blog overlap, and AI search visibility.",
  robots: "noindex, nofollow",
};

const sections = [
  { href: "#summary", label: "Summary" },
  { href: "#numbers", label: "The numbers" },
  { href: "#diagnosis", label: "Diagnosis" },
  { href: "#priorities", label: "Your priorities" },
  { href: "#audits", label: "The audits" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#page-groups", label: "Page groups" },
  { href: "#confidence", label: "What we know" },
  { href: "#obstacles", label: "Risks" },
  { href: "#recommendation", label: "Recommendation" },
];

export default function PipingNowSeoAnalysisPage() {
  return (
    <SuiteShell currentHref={suiteBasePath} meta={hubMeta} sections={sections}>
      <ReportExecutive
        action={hubNextPriority}
        actionLabel="Where we start"
        businessObjective={hubBusinessObjective}
        executiveSummary={hubExecutiveSummary}
        highlightsEyebrow="Highlights"
        highlightsTitle="The seven things that matter most"
        objectiveLabel="What we are trying to achieve"
        powerLines={hubPowerLines}
        summaryEyebrow="Executive summary"
        summaryTitle="What is actually going on"
      />

      <SuiteSection
        eyebrow="At a glance"
        id="numbers"
        intro="Four numbers that frame everything else in this analysis. The three month figure is the problem. The 28 day figure is the reason we are planning a recovery rather than a rescue."
        title="The numbers in one place"
      >
        <SuiteStatGrid stats={hubHeadlineStats} />
      </SuiteSection>

      <SuiteSection
        eyebrow="Diagnosis"
        id="diagnosis"
        intro="This is not one problem. It is a mixed post migration recovery, and the six findings below come from six separate audits that all point the same direction."
        title="Six findings that explain the drop"
      >
        <ol className="divide-y divide-slate-200 border-y border-slate-200">
          {hubDiagnosisPoints.map((point, index) => (
            <li className="grid gap-4 py-5 sm:grid-cols-[52px_1fr]" key={point}>
              <span
                aria-hidden="true"
                className="audit-mono flex h-9 w-9 items-center justify-center bg-[#183b68] text-xs font-black text-white"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mb-0 text-base leading-relaxed text-slate-700">
                <EditorialText text={point} />
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-7">
          <SuiteCallout
            body="The practical strategy follows from this: fix measurement and feed integrity first, recover the highest value category losses second, consolidate content third, then use competitor gaps and link quality work to grow."
            label="What this means for the plan"
            tone="action"
          />
        </div>
      </SuiteSection>

      <SuiteSection
        eyebrow="Alignment"
        id="priorities"
        intro="These are your stated priorities, taken from the account handoff. The audit evidence supports this order, so we have kept it."
        title="Your priorities, in your order"
      >
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hubClientPriorities.map((priority, index) => (
            <li
              className="border-t-4 border-[#2f65a7] bg-[#f7faff] p-5"
              key={priority}
            >
              <span
                aria-hidden="true"
                className="audit-mono grid h-8 w-8 place-items-center bg-[#183b68] text-[11px] font-black text-white"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mb-0 mt-3 text-sm font-semibold leading-relaxed text-slate-700">
                <EditorialText compact text={priority} />
              </p>
            </li>
          ))}
        </ol>

        <p className="audit-copy mb-0 mt-7">
          The account is recovering in places, but technical noise and product
          coverage uncertainty are still high enough that a report could easily
          overstate or misattribute the problem. That is why measurement comes
          first.
        </p>
      </SuiteSection>

      <SuiteSection
        eyebrow="Supporting audits"
        id="audits"
        intro="Each finding above has a full audit behind it. Open any card to see the evidence, the row level numbers, and the specific actions for that area."
        title="The eight pages behind this analysis"
      >
        <SuiteLinkCards cards={hubAuditLinks} />
      </SuiteSection>

      <SuiteSection
        eyebrow="Roadmap"
        id="roadmap"
        intro="Three phases, in a deliberate order. Each one unblocks the next, so the sequence matters more than the individual tasks."
        title="How we plan to work through it"
      >
        <SuiteRoadmap
          operatingPrinciple={hubOperatingPrinciple}
          phases={hubRoadmap}
        />
      </SuiteSection>

      <SuiteSection
        eyebrow="Page groups"
        id="page-groups"
        intro="Every page group falls into one of three buckets: recover it, protect it, or consolidate it. This is the working list."
        title="What we do with each part of the site"
      >
        <SuiteDataTable
          caption="Recover means it lost traffic and we want it back. Protect means it is growing and we should not break it. Consolidate means several pages are splitting the same searches."
          columns={hubPageGroupColumns}
          minWidth={760}
          rows={hubPageGroupRows}
        />
      </SuiteSection>

      <SuiteSection
        eyebrow="Confidence"
        id="confidence"
        intro="Being clear about what is proven and what is not keeps the plan honest. Anything in the third column gets checked before it drives a decision."
        title="What we know, what we think, and what we still need to check"
      >
        <SuiteEvidence groups={hubEvidenceGroups} />
      </SuiteSection>

      <ReportObstacles
        etaLabel="When we expect it resolved"
        eyebrow="Risks and blockers"
        impactLabel="What it costs you"
        obstacleLabel="The blocker"
        obstacles={hubRisks}
        remediationLabel="How we clear it"
        title="What stands in the way"
      />

      <SuiteSection
        eyebrow="Recommendation"
        id="recommendation"
        title="Our recommendation"
      >
        <p className="mb-0 text-xl font-extrabold leading-relaxed text-slate-900 sm:text-2xl">
          <EditorialText text={hubFinalRecommendation} />
        </p>
      </SuiteSection>
    </SuiteShell>
  );
}
