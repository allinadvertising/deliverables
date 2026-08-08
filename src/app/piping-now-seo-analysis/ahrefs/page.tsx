import type { Metadata } from "next";

import { ReportExecutive } from "@/components/reports/storytelling/ReportExecutive";
import { ReportObstacles } from "@/components/reports/storytelling/ReportObstacles";
import { SuiteCallout } from "@/components/reports/suite/SuiteCallout";
import { SuiteChartBand } from "@/components/reports/suite/SuiteChartBand";
import { SuiteDataTable } from "@/components/reports/suite/SuiteDataTable";
import { SuiteSection } from "@/components/reports/suite/SuiteSection";
import { SuiteShell } from "@/components/reports/suite/SuiteShell";
import { SuiteStatGrid } from "@/components/reports/suite/SuiteStatGrid";
import { SuiteSteps } from "@/components/reports/suite/SuiteSteps";
import { SuiteRankedBarsChart } from "@/components/reports/suite/charts/SuiteRankedBars";
import { EditorialText } from "@/components/shared/EditorialText";
import {
  ahrefsBacklinkStats,
  ahrefsCaveat,
  ahrefsCompetitorColumns,
  ahrefsCompetitorNote,
  ahrefsCompetitorRows,
  ahrefsContentGaps,
  ahrefsGoodLinks,
  ahrefsHighlights,
  ahrefsMeta,
  ahrefsNextPriority,
  ahrefsPageLosses,
  ahrefsPageWins,
  ahrefsRisks,
  ahrefsSpamPatterns,
  ahrefsStats,
  ahrefsSummary,
  ahrefsTopPageColumns,
  ahrefsTopPageRows,
  ahrefsVerificationNeeded,
} from "@/lib/reports/pipingnow/ahrefs";
import { suiteBasePath } from "@/lib/reports/pipingnow/nav";

export const metadata: Metadata = {
  title: "Piping Now : Ahrefs Audit",
  description:
    "Piping Now Ahrefs audit covering top page losses and gains, organic competitors, content gaps, and the spam backlink wave.",
  robots: "noindex, nofollow",
};

const sections = [
  { href: "#summary", label: "Summary" },
  { href: "#numbers", label: "At a glance" },
  { href: "#pages", label: "Page changes" },
  { href: "#top-pages", label: "Top pages" },
  { href: "#competitors", label: "Competitors" },
  { href: "#gaps", label: "Content gaps" },
  { href: "#backlinks", label: "Backlinks" },
  { href: "#obstacles", label: "Risks" },
  { href: "#verify", label: "Still to verify" },
];

export default function PipingNowAhrefsPage() {
  return (
    <SuiteShell
      currentHref={`${suiteBasePath}/ahrefs`}
      meta={ahrefsMeta}
      sections={sections}
    >
      <ReportExecutive
        action={ahrefsNextPriority}
        actionLabel="Where we start"
        executiveSummary={ahrefsSummary}
        highlightsEyebrow="Highlights"
        highlightsTitle="Six things the third party data shows"
        powerLines={ahrefsHighlights}
        summaryEyebrow="Executive summary"
        summaryTitle="Traffic down, keywords up, links polluted"
      />

      <SuiteSection
        eyebrow="At a glance"
        id="numbers"
        intro="Traffic and value fell while the keyword count grew. That combination points at losses on a few valuable pages rather than a broad ranking problem."
        title="The domain in four numbers"
      >
        <SuiteStatGrid stats={ahrefsStats} />
        <div className="mt-7">
          <SuiteCallout
            body={ahrefsCaveat}
            label="How to read Ahrefs numbers"
            tone="info"
          />
        </div>
      </SuiteSection>

      <SuiteSection
        eyebrow="Page changes"
        id="pages"
        intro="The losses cluster in press fittings, hangers, clamps, and backflow. The gains cluster in aluminum, camlock, strainers, and flanges. Both lists are useful."
        title="Which pages moved, and by how much"
      >
        <SuiteChartBand
          insight="ProPress and press fittings fell 78.0%, the steepest drop on the site, on a page that still ranks fourth and first for its two main terms. The three hanger and clamp collections all fell together, which points at a shared cause rather than three separate problems."
          number="01"
          title="Biggest estimated traffic losses"
        >
          <SuiteRankedBarsChart chart={ahrefsPageLosses} />
        </SuiteChartBand>

        <SuiteChartBand
          insight="Copper fittings is now the highest traffic page on the site at 1,260 and ranks first. Aluminum fittings nearly doubled. These pages are the working template, and the recovering categories should be rebuilt to match them."
          number="02"
          title="Biggest estimated traffic gains"
        >
          <SuiteRankedBarsChart chart={ahrefsPageWins} />
        </SuiteChartBand>
      </SuiteSection>

      <SuiteSection
        eyebrow="Top pages"
        id="top-pages"
        intro="The ten pages carrying the most estimated traffic, with what we plan to do with each one and why."
        title="The ten pages that matter most"
      >
        <SuiteDataTable
          caption="Protect means it is working and should not be changed structurally. Recover means it lost ground and we want it back. Monitor means it slipped but not enough to jump the queue."
          columns={ahrefsTopPageColumns}
          minWidth={1080}
          rows={ahrefsTopPageRows}
        />
      </SuiteSection>

      <SuiteSection
        eyebrow="Competitors"
        id="competitors"
        intro="These are the sites that compete for the same searches, ranked by how many keywords they share with Piping Now."
        title="Who you are actually competing against"
      >
        <SuiteDataTable
          caption={ahrefsCompetitorNote}
          columns={ahrefsCompetitorColumns}
          minWidth={1000}
          rows={ahrefsCompetitorRows}
        />
      </SuiteSection>

      <SuiteSection
        eyebrow="Content gaps"
        id="gaps"
        intro="Five product families where competitors are winning searches that Piping Now should be able to compete for."
        title="Where the growth opportunity is"
      >
        <SuiteSteps steps={ahrefsContentGaps} />
      </SuiteSection>

      <SuiteSection
        eyebrow="Backlinks"
        id="backlinks"
        intro="A large number of new links arrived in a short window. Almost none of them are the kind you want."
        title="The backlink spike is not good news"
      >
        <SuiteStatGrid columns={4} stats={ahrefsBacklinkStats} />

        <div className="mt-9 grid gap-6 lg:grid-cols-2">
          <article className="border-t-4 border-[#c62828] bg-[#fff8f8] p-5">
            <h3 className="mb-3 text-sm font-black uppercase tracking-[0.08em] text-[#c62828]">
              What the spam looks like
            </h3>
            <ul className="space-y-3">
              {ahrefsSpamPatterns.map((pattern) => (
                <li
                  className="grid grid-cols-[10px_1fr] gap-3 text-sm leading-relaxed text-slate-700"
                  key={pattern}
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-[#c62828]"
                  />
                  <span>
                    <EditorialText compact text={pattern} />
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <article className="border-t-4 border-[#16803d] bg-[#f6fbf8] p-5">
            <h3 className="mb-3 text-sm font-black uppercase tracking-[0.08em] text-[#16803d]">
              The links worth keeping
            </h3>
            <p className="mb-4 text-xs leading-relaxed text-slate-500">
              These are the kind of links worth preserving, reclaiming, or using
              as the model for real outreach.
            </p>
            <ul className="space-y-3">
              {ahrefsGoodLinks.map((link) => (
                <li
                  className="grid grid-cols-[10px_1fr] gap-3 text-sm leading-relaxed text-slate-700"
                  key={link}
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-[#16803d]"
                  />
                  <span>
                    <EditorialText compact text={link} />
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-7">
          <SuiteCallout
            body="Risk level is medium to high for profile quality noise, but low to medium for actual algorithmic harm. Google usually ignores obvious spam links, especially links the site owner did not create. The real cost here is that the spike distorts the reporting and could cause concern if a previous link building vendor turns out to be involved."
            label="Our risk assessment"
            tone="risk"
          />
        </div>
      </SuiteSection>

      <ReportObstacles
        etaLabel="When we expect it resolved"
        eyebrow="Risks"
        impactLabel="What it costs you"
        obstacleLabel="The risk"
        obstacles={ahrefsRisks}
        remediationLabel="How we handle it"
        title="Three risks worth managing"
      />

      <SuiteSection
        eyebrow="Still to verify"
        id="verify"
        intro="Ahrefs is directional support, not proof. Before any of this becomes a client claim, these five checks need to happen."
        title="What we check before making a claim"
      >
        <ul className="space-y-3">
          {ahrefsVerificationNeeded.map((item) => (
            <li
              className="grid grid-cols-[12px_1fr] gap-3 text-base leading-relaxed text-slate-700"
              key={item}
            >
              <span
                aria-hidden="true"
                className="mt-2.5 h-2 w-2 rounded-full bg-[#2f65a7]"
              />
              <span>
                <EditorialText text={item} />
              </span>
            </li>
          ))}
        </ul>
      </SuiteSection>
    </SuiteShell>
  );
}
