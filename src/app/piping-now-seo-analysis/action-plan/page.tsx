import type { Metadata } from "next";

import { ReportExecutive } from "@/components/reports/storytelling/ReportExecutive";
import { SuiteActionTable } from "@/components/reports/suite/SuiteActionTable";
import { SuiteGates } from "@/components/reports/suite/SuiteGates";
import { SuiteRoadmap } from "@/components/reports/suite/SuiteRoadmap";
import { SuiteSection } from "@/components/reports/suite/SuiteSection";
import { SuiteShell } from "@/components/reports/suite/SuiteShell";
import { SuiteStatGrid } from "@/components/reports/suite/SuiteStatGrid";
import {
  actionPlanCounts,
  actionPlanDecisions,
  actionPlanGates,
  actionPlanHighlights,
  actionPlanMeta,
  actionPlanNextPriority,
  actionPlanOperatingPrinciple,
  actionPlanPhases,
  actionPlanRows,
  actionPlanSummary,
} from "@/lib/reports/pipingnow/action-plan";
import { suiteBasePath } from "@/lib/reports/pipingnow/nav";

export const metadata: Metadata = {
  title: "Piping Now : SEO Action Plan",
  description:
    "The prioritized Piping Now SEO implementation roadmap with timing, owners, approval gates, and completion evidence for every action.",
  robots: "noindex, nofollow",
};

const sections = [
  { href: "#summary", label: "Summary" },
  { href: "#counts", label: "At a glance" },
  { href: "#phases", label: "Phases" },
  { href: "#actions", label: "Full action list" },
  { href: "#gates", label: "Approval gates" },
];

export default function PipingNowActionPlanPage() {
  return (
    <SuiteShell
      currentHref={`${suiteBasePath}/action-plan`}
      meta={actionPlanMeta}
      sections={sections}
    >
      <ReportExecutive
        action={actionPlanNextPriority}
        actionLabel="Do this first"
        executiveSummary={actionPlanSummary}
        highlightsEyebrow="Highlights"
        highlightsTitle="Four things to know about this plan"
        powerLines={actionPlanHighlights}
        summaryEyebrow="The plan"
        summaryTitle="How the work is ordered"
      />

      <SuiteSection
        eyebrow="At a glance"
        id="counts"
        intro="Twelve actions across three phases, plus five points where we need a decision or an access grant from your side."
        title="The plan in four numbers"
      >
        <SuiteStatGrid stats={actionPlanCounts} />
      </SuiteSection>

      <SuiteSection
        eyebrow="Phases"
        id="phases"
        intro="Stabilize, then recover, then grow. Each phase depends on the one before it being finished, not just started."
        title="Three phases over roughly two months"
      >
        <SuiteRoadmap
          operatingPrinciple={actionPlanOperatingPrinciple}
          phases={actionPlanPhases}
        />
      </SuiteSection>

      <SuiteSection
        eyebrow="Full action list"
        id="actions"
        intro="Every action from all six audits, with the timing, the owner, and what has to be true before we call it done."
        title="Every action, with an owner and a proof"
      >
        <SuiteActionTable rows={actionPlanRows} />
      </SuiteSection>

      <SuiteSection
        eyebrow="Approval gates"
        id="gates"
        intro="These are the moments where work pauses until we hear back from you. Knowing them in advance keeps the timeline from slipping."
        title="Where we need a decision from you"
      >
        <SuiteGates
          decisions={actionPlanDecisions}
          decisionsTitle="Three things we need before day one"
          gates={actionPlanGates}
        />
      </SuiteSection>
    </SuiteShell>
  );
}
