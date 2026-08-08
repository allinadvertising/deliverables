import type { Metadata } from "next";

import { ReportExecutive } from "@/components/reports/storytelling/ReportExecutive";
import { SuiteCallout } from "@/components/reports/suite/SuiteCallout";
import { SuiteChartBand } from "@/components/reports/suite/SuiteChartBand";
import { SuiteDataTable } from "@/components/reports/suite/SuiteDataTable";
import { SuiteSection } from "@/components/reports/suite/SuiteSection";
import { SuiteShell } from "@/components/reports/suite/SuiteShell";
import { SuiteStatGrid } from "@/components/reports/suite/SuiteStatGrid";
import { SuiteSteps } from "@/components/reports/suite/SuiteSteps";
import { SuiteRankedBarsChart } from "@/components/reports/suite/charts/SuiteRankedBars";
import { SuiteShareBarsChart } from "@/components/reports/suite/charts/SuiteShareBars";
import {
  aiCountryNote,
  aiCountryShares,
  aiDeviceShares,
  aiHighlights,
  aiMergeConflictColumns,
  aiMergeConflictNote,
  aiMergeConflictRows,
  aiMeta,
  aiNextPriority,
  aiRecommendations,
  aiStats,
  aiSummary,
  aiTopPages,
  aiWhyItMatters,
} from "@/lib/reports/pipingnow/ai-search-visibility";
import { suiteBasePath } from "@/lib/reports/pipingnow/nav";

export const metadata: Metadata = {
  title: "Piping Now : AI Search Visibility",
  description:
    "Piping Now Search Console Generative AI features report for blog content, with the pages to protect during content consolidation.",
  robots: "noindex, nofollow",
};

const sections = [
  { href: "#summary", label: "Summary" },
  { href: "#numbers", label: "At a glance" },
  { href: "#pages", label: "Top pages" },
  { href: "#conflict", label: "Merge conflicts" },
  { href: "#audience", label: "Devices and markets" },
  { href: "#next", label: "What we do" },
];

export default function PipingNowAiSearchVisibilityPage() {
  return (
    <SuiteShell
      currentHref={`${suiteBasePath}/ai-search-visibility`}
      meta={aiMeta}
      sections={sections}
    >
      <ReportExecutive
        action={aiNextPriority}
        actionLabel="Where we start"
        executiveSummary={aiSummary}
        highlightsEyebrow="Highlights"
        highlightsTitle="Six things the AI report shows"
        powerLines={aiHighlights}
        summaryEyebrow="Executive summary"
        summaryTitle="The technical guides are already winning"
      />

      <SuiteSection
        eyebrow="At a glance"
        id="numbers"
        intro="This report only gives impressions, not clicks. That is a limitation of the report, not of the content."
        title="AI visibility in four numbers"
      >
        <SuiteStatGrid stats={aiStats} />
        <div className="mt-7">
          <SuiteCallout
            body={aiWhyItMatters}
            label="What an AI impression actually means"
            tone="info"
          />
        </div>
      </SuiteSection>

      <SuiteSection
        eyebrow="Top pages"
        id="pages"
        intro="Ten pages carry almost all of the AI visibility, and every one of them is a technical guide rather than a news or announcement post."
        title="Which pages Google is quoting"
      >
        <SuiteChartBand
          insight="The U-bolts guide takes 20.0% of all AI impressions on its own, and it also holds 22,742 standard search impressions. It is the strongest content asset on the site by both measures, so it stays standalone."
          number="01"
          title="AI impressions by page"
        >
          <SuiteRankedBarsChart chart={aiTopPages} />
        </SuiteChartBand>
      </SuiteSection>

      <SuiteSection
        eyebrow="Merge conflicts"
        id="conflict"
        intro="The blog audit recommends merging seven of these pages. That is still the right call, but it has to be done carefully, because these pages have visibility that took months to earn."
        title="Where consolidation meets AI visibility"
      >
        <SuiteDataTable
          caption={aiMergeConflictNote}
          columns={aiMergeConflictColumns}
          minWidth={980}
          rows={aiMergeConflictRows}
        />
        <div className="mt-7">
          <SuiteCallout
            body="The rule for every merge is the same. Move the specifications, tables, and answer blocks into the hub before redirecting, then check the AI impressions again 30 days later. If the hub absorbed the visibility, the merge worked. If it did not, we can revisit that specific page."
            label="How we protect the visibility during a merge"
            tone="action"
          />
        </div>
      </SuiteSection>

      <SuiteSection
        eyebrow="Devices and markets"
        id="audience"
        intro="Who is seeing the AI answers, and where they are. Both splits support the same conclusion: this is a professional audience researching from a desk."
        title="Who the AI answers are reaching"
      >
        <SuiteChartBand
          insight="Desktop takes nearly three quarters of the AI impressions. That fits a trade and contractor audience specifying parts at work rather than browsing on a phone, and it means the content should be built to be scanned on a large screen."
          number="01"
          title="AI impressions by device"
        >
          <SuiteShareBarsChart
            ariaLabel="AI impressions by device. Desktop 8,926 at 72.1 percent, mobile 3,378 at 27.3 percent, tablet 75 at 0.6 percent."
            items={aiDeviceShares}
            stacked
          />
        </SuiteChartBand>

        <SuiteChartBand
          insight={aiCountryNote}
          number="02"
          title="AI impressions by country"
        >
          <SuiteShareBarsChart
            ariaLabel="AI impressions by country. United States 7,663 at 61.9 percent, followed by Canada, India, the Philippines, the United Kingdom, Indonesia, Saudi Arabia, Australia, Malaysia, and Singapore."
            items={aiCountryShares}
          />
        </SuiteChartBand>
      </SuiteSection>

      <SuiteSection
        eyebrow="What we do"
        id="next"
        intro="Six recommendations. The last one is the most transferable, because it describes the format that is already working on this site."
        title="How we build on this"
      >
        <SuiteSteps steps={aiRecommendations} />
      </SuiteSection>
    </SuiteShell>
  );
}
