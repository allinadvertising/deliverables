import type { Metadata } from "next";

import { ReportDashboard } from "@/components/reports/storytelling/ReportDashboard";
import { ReportExecutive } from "@/components/reports/storytelling/ReportExecutive";
import { SuiteCallout } from "@/components/reports/suite/SuiteCallout";
import { SuiteChartBand } from "@/components/reports/suite/SuiteChartBand";
import { SuiteDataTable } from "@/components/reports/suite/SuiteDataTable";
import { SuiteSection } from "@/components/reports/suite/SuiteSection";
import { SuiteShell } from "@/components/reports/suite/SuiteShell";
import { SuiteStatGrid } from "@/components/reports/suite/SuiteStatGrid";
import { SuiteSteps } from "@/components/reports/suite/SuiteSteps";
import { SuiteComparisonBarsChart } from "@/components/reports/suite/charts/SuiteComparisonBars";
import { SuiteGroupedColumnsChart } from "@/components/reports/suite/charts/SuiteGroupedColumns";
import { SuiteRankedBarsChart } from "@/components/reports/suite/charts/SuiteRankedBars";
import { suiteBasePath } from "@/lib/reports/pipingnow/nav";
import {
  performance28DayComparison,
  performance28DayLossRows,
  performance28DayNoteColumns,
  performance28DayWinRows,
  performanceDeviceComparison,
  performanceHeadlineStats,
  performanceHighlights,
  performanceKpiDisclosure,
  performanceKpiRows,
  performanceLandingLosses,
  performanceLandingWins,
  performanceMeta,
  performanceMethodNote,
  performanceNextPriority,
  performanceQueryLossColumns,
  performanceQueryLossRows,
  performanceQueryWinColumns,
  performanceQueryWinRows,
  performanceSummary,
  performanceThreeMonthComparison,
  performanceWhatWeDo,
} from "@/lib/reports/pipingnow/gsc-performance";

export const metadata: Metadata = {
  title: "Piping Now : GSC Performance Audit",
  description:
    "Piping Now Search Console winners and losers by query, landing page, and device across the 28 day and three month comparison windows.",
  robots: "noindex, nofollow",
};

const sections = [
  { href: "#summary", label: "Summary" },
  { href: "#numbers", label: "At a glance" },
  { href: "#charts", label: "Charts" },
  { href: "#pages", label: "Pages" },
  { href: "#queries", label: "Searches" },
  { href: "#recent", label: "Last 28 days" },
  { href: "#dashboard", label: "KPI table" },
  { href: "#next", label: "What we do" },
];

export default function PipingNowGscPerformancePage() {
  return (
    <SuiteShell
      currentHref={`${suiteBasePath}/gsc-performance`}
      meta={performanceMeta}
      sections={sections}
    >
      <ReportExecutive
        action={performanceNextPriority}
        actionLabel="Where we start"
        executiveSummary={performanceSummary}
        highlightsEyebrow="Highlights"
        highlightsTitle="Five things the data says"
        powerLines={performanceHighlights}
        summaryEyebrow="Executive summary"
        summaryTitle="Two windows, two stories, both true"
      />

      <SuiteSection
        eyebrow="At a glance"
        id="numbers"
        intro="The three month number is the decline everyone is asking about. The 28 day number is the reason we are not panicking."
        title="Four numbers that frame the period"
      >
        <SuiteStatGrid stats={performanceHeadlineStats} />
        <div className="mt-7">
          <SuiteCallout
            body={performanceMethodNote}
            label="How to read these numbers"
            tone="info"
          />
        </div>
      </SuiteSection>

      <SuiteSection
        eyebrow="Charts"
        id="charts"
        intro="Three views of the same period. Read them in order, because each one narrows the picture further than the last."
        title="What changed, visually"
      >
        <SuiteChartBand
          insight="Every report agrees. Clicks are down about 23% across landing pages and devices, and query clicks are down 26%. Impressions fell 17.4%, so the site is being shown less often as well as clicked less often."
          number="01"
          title="Three months against the previous three months"
        >
          <SuiteComparisonBarsChart chart={performanceThreeMonthComparison} />
        </SuiteChartBand>

        <SuiteChartBand
          insight="In the most recent window all three click measures are up. But impressions are still down 15.7%, which means the click rate improved rather than the visibility coming back. That distinction matters when reporting progress."
          number="02"
          title="The last 28 days against the 28 before it"
        >
          <SuiteComparisonBarsChart chart={performance28DayComparison} />
        </SuiteChartBand>

        <SuiteChartBand
          insight="Every device is down over three months and the percentages are almost identical. That uniformity is useful, because it rules out a mobile only problem such as a rendering or speed issue on phones."
          number="03"
          title="Clicks by device over three months"
        >
          <SuiteGroupedColumnsChart chart={performanceDeviceComparison} />
        </SuiteChartBand>
      </SuiteSection>

      <SuiteSection
        eyebrow="Pages"
        id="pages"
        intro="This is where the loss actually lives. One page carries far more of it than any other, and the winners show which categories are worth copying."
        title="The pages that lost and gained the most"
      >
        <SuiteChartBand
          insight="The conversion chart page lost 1,476 clicks and 374,866 impressions on its own, roughly six times the next biggest loss. The rest of the list is a mix of hanger and copper collections and individual product pages."
          number="01"
          title="Biggest landing page losses, three months"
        >
          <SuiteRankedBarsChart chart={performanceLandingLosses} />
        </SuiteChartBand>

        <SuiteChartBand
          insight="The pipe clamp collection gained 107 clicks and improved its position by 3.96. Aluminum fittings gained 60 and improved by 3.68. These pages show what a working category page looks like on this site."
          number="02"
          title="Biggest landing page gains, three months"
        >
          <SuiteRankedBarsChart chart={performanceLandingWins} />
        </SuiteChartBand>
      </SuiteSection>

      <SuiteSection
        eyebrow="Searches"
        id="queries"
        intro="The losing searches cluster around one theme: pipe charts, sizes, and conversions. That is not a coincidence, it is the same page group showing up from a different angle."
        title="Which searches moved"
      >
        <h3 className="audit-category-title">Searches that lost the most</h3>
        <SuiteDataTable
          caption="Five of these ten are pipe sizing or chart queries. Four of them now return zero clicks. That is the clearest single pattern in the whole performance report."
          columns={performanceQueryLossColumns}
          minWidth={900}
          rows={performanceQueryLossRows}
        />

        <h3 className="audit-category-title mt-10">
          Searches that gained the most
        </h3>
        <SuiteDataTable
          caption="Clamps, aluminum fittings, and clevis hangers are all growing, and part numbers like `xxx160` are bringing people straight to product pages. Brand search is healthy."
          columns={performanceQueryWinColumns}
          minWidth={820}
          rows={performanceQueryWinRows}
        />
      </SuiteSection>

      <SuiteSection
        eyebrow="Last 28 days"
        id="recent"
        intro="The most recent window is the early read on recovery. Some of the three month losers are already turning around, and a few pages that gained over three months are now slipping."
        title="What is moving right now"
      >
        <h3 className="audit-category-title">Recovering in the last 28 days</h3>
        <SuiteDataTable
          columns={performance28DayNoteColumns}
          minWidth={720}
          rows={performance28DayWinRows}
        />

        <h3 className="audit-category-title mt-10">
          Still falling in the last 28 days
        </h3>
        <SuiteDataTable
          caption="Copper fittings and ProPress are down in both windows, which makes them the two clearest category recovery targets."
          columns={performance28DayNoteColumns}
          minWidth={720}
          rows={performance28DayLossRows}
        />
      </SuiteSection>

      <ReportDashboard
        columnLabels={{
          change: "Change",
          current: "Current",
          meaning: "What it means for the business",
          metric: "Metric",
          previous: "Previous",
        }}
        eyebrow="KPI table"
        kpiDisclosure={performanceKpiDisclosure}
        kpiRows={performanceKpiRows}
        title="The six numbers we will track each month"
      />

      <SuiteSection
        eyebrow="What we do"
        id="next"
        intro="Five actions, in order of expected return. The first two address the single largest loss on the site."
        title="What we do about it"
      >
        <SuiteSteps steps={performanceWhatWeDo} />
      </SuiteSection>
    </SuiteShell>
  );
}
