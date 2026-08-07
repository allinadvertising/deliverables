import type { Metadata } from "next";

import { ReportDashboard } from "@/components/reports/storytelling/ReportDashboard";
import { ReportExecutive } from "@/components/reports/storytelling/ReportExecutive";
import { ReportObstacles } from "@/components/reports/storytelling/ReportObstacles";
import { SuiteDataTable } from "@/components/reports/suite/SuiteDataTable";
import { SuitePriorityCards } from "@/components/reports/suite/SuitePriorityCards";
import { SuiteSection } from "@/components/reports/suite/SuiteSection";
import { SuiteShell } from "@/components/reports/suite/SuiteShell";
import { SuiteStatGrid } from "@/components/reports/suite/SuiteStatGrid";
import { SuiteSteps } from "@/components/reports/suite/SuiteSteps";
import {
  merchantHealthColumns,
  merchantHealthRows,
  merchantHighlights,
  merchantKpiDisclosure,
  merchantKpiRows,
  merchantMeta,
  merchantNextPriority,
  merchantNextSevenDays,
  merchantPriorities,
  merchantRisks,
  merchantStats,
  merchantSummary,
} from "@/lib/reports/pipingnow/merchant-center";
import { suiteBasePath } from "@/lib/reports/pipingnow/nav";

export const metadata: Metadata = {
  title: "Piping Now : Merchant Center Audit",
  description:
    "Piping Now Merchant Center audit covering feed coverage, product disapprovals, the local store warning, and Shopping performance reconciliation.",
  robots: "noindex, nofollow",
};

const sections = [
  { href: "#summary", label: "Summary" },
  { href: "#numbers", label: "At a glance" },
  { href: "#priorities", label: "Action items" },
  { href: "#dashboard", label: "Performance" },
  { href: "#health", label: "Account health" },
  { href: "#obstacles", label: "Blockers" },
  { href: "#next-7", label: "Next 7 days" },
];

export default function PipingNowMerchantCenterPage() {
  return (
    <SuiteShell
      currentHref={`${suiteBasePath}/merchant-center`}
      meta={merchantMeta}
      sections={sections}
    >
      <ReportExecutive
        action={merchantNextPriority}
        actionLabel="The first decision to make"
        executiveSummary={merchantSummary}
        highlightsEyebrow="Highlights"
        highlightsTitle="Six things to know about the account"
        powerLines={merchantHighlights}
        summaryEyebrow="Executive summary"
        summaryTitle="Not broken, but leaking in three places"
      />

      <SuiteSection
        eyebrow="At a glance"
        id="numbers"
        intro="The catalog is almost fully approved. The gaps are at the edges, and each one has a specific fix."
        title="Where the catalog stands"
      >
        <SuiteStatGrid stats={merchantStats} />
      </SuiteSection>

      <SuiteSection
        eyebrow="Action items"
        id="priorities"
        intro="Six action items ordered by how much they unblock. The first two are the ones that answer the missing products question."
        title="What we fix, in order"
      >
        <SuitePriorityCards cards={merchantPriorities} />
      </SuiteSection>

      <ReportDashboard
        columnLabels={{
          change: "Change",
          current: "Last 28 days",
          meaning: "What it means",
          metric: "Metric",
          previous: "Previous 28",
        }}
        eyebrow="Performance"
        kpiDisclosure={merchantKpiDisclosure}
        kpiRows={merchantKpiRows}
        title="Shopping performance, split by channel"
      />

      <SuiteSection
        eyebrow="Account health"
        id="health"
        intro="A full read of the account settings. Most of this is healthy, which is worth stating clearly so the real problems stand out."
        title="Every setting, and whether it is fine"
      >
        <SuiteDataTable
          caption="Three rows need work: the products found outside the feed, the missing physical store link, and the images per offer. Everything else is either fine or a minor watch item."
          columns={merchantHealthColumns}
          minWidth={840}
          rows={merchantHealthRows}
        />
      </SuiteSection>

      <ReportObstacles
        etaLabel="When we expect it cleared"
        eyebrow="Blockers"
        impactLabel="What it costs you"
        obstacleLabel="The blocker"
        obstacles={merchantRisks}
        remediationLabel="How we clear it"
        title="What is actually holding products back"
      />

      <SuiteSection
        eyebrow="Next 7 days"
        id="next-7"
        intro="Six tasks, in order. The last one is deliberately last, because pricing decisions made before the eligibility cleanup would solve the wrong problem."
        title="The first week of Merchant Center work"
      >
        <SuiteSteps steps={merchantNextSevenDays} />
      </SuiteSection>
    </SuiteShell>
  );
}
