import type { Metadata } from "next";

import { ReportExecutive } from "@/components/reports/storytelling/ReportExecutive";
import { SuiteCallout } from "@/components/reports/suite/SuiteCallout";
import { SuiteDataTable } from "@/components/reports/suite/SuiteDataTable";
import { SuiteSection } from "@/components/reports/suite/SuiteSection";
import { SuiteShell } from "@/components/reports/suite/SuiteShell";
import { SuiteStatGrid } from "@/components/reports/suite/SuiteStatGrid";
import { SuiteSteps } from "@/components/reports/suite/SuiteSteps";
import {
  blogClusterColumns,
  blogClusterRows,
  blogHighlights,
  blogMergeColumns,
  blogMergeRows,
  blogMeta,
  blogNextPriority,
  blogOverlapColumns,
  blogOverlapNote,
  blogOverlapRows,
  blogPlanSteps,
  blogRefreshColumns,
  blogRefreshRows,
  blogRemoveColumns,
  blogRemoveRows,
  blogStats,
  blogSummary,
} from "@/lib/reports/pipingnow/blog-cannibalization";
import { suiteBasePath } from "@/lib/reports/pipingnow/nav";

export const metadata: Metadata = {
  title: "Piping Now : Blog Cannibalization Audit",
  description:
    "Piping Now blog overlap audit with the merge, delete, and refresh plan for the pipe hanger and ball valve content clusters.",
  robots: "noindex, nofollow",
};

const sections = [
  { href: "#summary", label: "Summary" },
  { href: "#numbers", label: "At a glance" },
  { href: "#clusters", label: "Clusters" },
  { href: "#overlap", label: "Overlapping searches" },
  { href: "#merge", label: "Merge" },
  { href: "#remove", label: "Remove" },
  { href: "#keep", label: "Keep" },
  { href: "#plan", label: "The plan" },
];

export default function PipingNowBlogCannibalizationPage() {
  return (
    <SuiteShell
      currentHref={`${suiteBasePath}/blog-cannibalization`}
      meta={blogMeta}
      sections={sections}
    >
      <ReportExecutive
        action={blogNextPriority}
        actionLabel="Where we start"
        executiveSummary={blogSummary}
        highlightsEyebrow="Highlights"
        highlightsTitle="Six things the blog data shows"
        powerLines={blogHighlights}
        summaryEyebrow="Executive summary"
        summaryTitle="Two clusters, not a sitewide problem"
      />

      <SuiteSection
        eyebrow="At a glance"
        id="numbers"
        intro="The overlap is concentrated. Two clusters account for almost all of it, and one of them is doing far better than the other."
        title="The blog in four numbers"
      >
        <SuiteStatGrid stats={blogStats} />
      </SuiteSection>

      <SuiteSection
        eyebrow="Clusters"
        id="clusters"
        intro="Grouping the blog by topic shows the difference clearly. The hanger cluster earns four times the clicks of the ball valve cluster from three times the impressions."
        title="Three clusters, three different jobs"
      >
        <SuiteDataTable
          caption="Average position tells the story. The hanger cluster averages 7.52, which is page one. The ball valve cluster averages 11.07 and the legacy news averages 17.25, which is page two and beyond."
          columns={blogClusterColumns}
          minWidth={780}
          rows={blogClusterRows}
        />
      </SuiteSection>

      <SuiteSection
        eyebrow="Overlapping searches"
        id="overlap"
        intro="These are the searches where two or more of your own pages appear together. When that happens, the ranking signal splits and neither page wins the search outright."
        title="Where pages compete with each other"
      >
        <SuiteDataTable
          caption={blogOverlapNote}
          columns={blogOverlapColumns}
          minWidth={980}
          rows={blogOverlapRows}
        />
      </SuiteSection>

      <SuiteSection
        eyebrow="Merge"
        id="merge"
        intro="Ten pages to fold into a hub. Nothing gets deleted outright here. Unique sections move into the destination page first, then the old URL redirects."
        title="Pages to merge into a hub"
      >
        <SuiteDataTable
          caption="Six of these pages appear in the AI visibility report as well, so their content has to survive the merge inside the hub. See the AI Search Visibility page for the specific handling notes."
          columns={blogMergeColumns}
          minWidth={1080}
          rows={blogMergeRows}
        />
      </SuiteSection>

      <SuiteSection
        eyebrow="Remove"
        id="remove"
        intro="Five surfaces that should come out of search. Two are archive pages that were never meant to rank, and three are legacy posts with almost no search demand."
        title="Pages to take out of search"
      >
        <SuiteDataTable
          caption="Removing a page from the index is not the same as deleting it. The archive pages stay usable for visitors, they just stop competing in search results."
          columns={blogRemoveColumns}
          minWidth={940}
          rows={blogRemoveRows}
        />
        <div className="mt-7">
          <SuiteCallout
            body="Nothing on this list gets removed or redirected without your approval first. Most of these posts were published or republished in 2025, but several carry older modified dates from 2022 and 2023, which means they came across in a migration. Weak legacy posts should be removed rather than rewritten by default."
            label="Approval needed before anything is removed"
            tone="action"
          />
        </div>
      </SuiteSection>

      <SuiteSection
        eyebrow="Keep"
        id="keep"
        intro="Ten pages that stay. Each one has a defined job, so the cluster has a clear structure instead of overlapping articles."
        title="Pages to keep, and what each one is for"
      >
        <SuiteDataTable
          caption="Look at the click rate column. Several of these pages get tens of thousands of impressions at under 0.5%, which means people see them and choose something else. Those are the refresh priorities."
          columns={blogRefreshColumns}
          minWidth={1000}
          rows={blogRefreshRows}
        />
      </SuiteSection>

      <SuiteSection
        eyebrow="The plan"
        id="plan"
        intro="Seven steps, in order. The first three build the two hubs, and the rest clean up around them."
        title="How we do the consolidation"
      >
        <SuiteSteps steps={blogPlanSteps} />
      </SuiteSection>
    </SuiteShell>
  );
}
