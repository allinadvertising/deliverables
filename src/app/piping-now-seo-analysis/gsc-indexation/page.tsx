import type { Metadata } from "next";

import { ReportAppendix } from "@/components/reports/storytelling/ReportAppendix";
import { ReportExecutive } from "@/components/reports/storytelling/ReportExecutive";
import { SuiteCallout } from "@/components/reports/suite/SuiteCallout";
import { SuiteDataTable } from "@/components/reports/suite/SuiteDataTable";
import { SuitePriorityCards } from "@/components/reports/suite/SuitePriorityCards";
import { SuiteSection } from "@/components/reports/suite/SuiteSection";
import { SuiteShell } from "@/components/reports/suite/SuiteShell";
import { SuiteStatGrid } from "@/components/reports/suite/SuiteStatGrid";
import {
  indexationBucketColumns,
  indexationBucketRows,
  indexationDataNotes,
  indexationHighlights,
  indexationMeta,
  indexationNextPriority,
  indexationPriorities,
  indexationStats,
  indexationSummary,
  indexationTechnicalItems,
  indexationTechnicalLabels,
} from "@/lib/reports/pipingnow/gsc-indexation";
import { suiteBasePath } from "@/lib/reports/pipingnow/nav";

export const metadata: Metadata = {
  title: "Piping Now : Indexation Audit",
  description:
    "Piping Now Search Console coverage audit covering crawl waste, canonical duplication, legacy redirects, 404s, and server errors.",
  robots: "noindex, nofollow",
};

const sections = [
  { href: "#summary", label: "Summary" },
  { href: "#numbers", label: "At a glance" },
  { href: "#buckets", label: "Every bucket" },
  { href: "#priorities", label: "Priorities" },
  { href: "#appendix", label: "Technical detail" },
  { href: "#data-notes", label: "Data notes" },
];

export default function PipingNowIndexationPage() {
  return (
    <SuiteShell
      currentHref={`${suiteBasePath}/gsc-indexation`}
      meta={indexationMeta}
      sections={sections}
    >
      <ReportExecutive
        action={indexationNextPriority}
        actionLabel="Where we start"
        executiveSummary={indexationSummary}
        highlightsEyebrow="Highlights"
        highlightsTitle="Six things worth knowing up front"
        powerLines={indexationHighlights}
        summaryEyebrow="Executive summary"
        summaryTitle="Crawl waste, not an indexing failure"
      />

      <SuiteSection
        eyebrow="At a glance"
        id="numbers"
        intro="A crawler visiting the site sees a very different picture than a shopper does. These numbers show how much of that view is wasted."
        title="What a crawler actually finds"
      >
        <SuiteStatGrid stats={indexationStats} />
        <div className="mt-7">
          <SuiteCallout
            body="Submitting more sitemaps will not help here. The sitemap index is already healthy and none of the problem URLs came from it. The fix is to stop creating discoverable duplicates in the first place."
            label="The one thing to take away"
            tone="action"
          />
        </div>
      </SuiteSection>

      <SuiteSection
        eyebrow="Every bucket"
        id="buckets"
        intro="Search Console sorts non indexed pages into buckets. Most of them sound alarming and are not. This table says what is really inside each one and whether it needs action."
        title="What each Search Console bucket really contains"
      >
        <SuiteDataTable
          caption="The two buckets to focus on are Crawled, currently not indexed and Discovered, currently not indexed. They contain clean pages that should be earning traffic."
          columns={indexationBucketColumns}
          minWidth={880}
          rows={indexationBucketRows}
        />
      </SuiteSection>

      <SuiteSection
        eyebrow="Priorities"
        id="priorities"
        intro="Eight actions, ordered by how much crawl waste each one removes and how quickly the result shows up."
        title="What we fix, in order"
      >
        <SuitePriorityCards cards={indexationPriorities} />
      </SuiteSection>

      <ReportAppendix
        dataNotes={indexationDataNotes}
        dataNotesEyebrow="Data notes"
        dataNotesTitle="What we could and could not verify"
        technicalEyebrow="Technical detail"
        technicalItems={indexationTechnicalItems}
        technicalLabels={indexationTechnicalLabels}
        technicalTitle="For the development team"
      />
    </SuiteShell>
  );
}
