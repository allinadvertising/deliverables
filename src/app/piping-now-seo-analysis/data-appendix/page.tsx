import type { Metadata } from "next";

import { SuiteCallout } from "@/components/reports/suite/SuiteCallout";
import { SuiteDataTable } from "@/components/reports/suite/SuiteDataTable";
import { SuiteFileList } from "@/components/reports/suite/SuiteFileList";
import { SuiteSection } from "@/components/reports/suite/SuiteSection";
import { SuiteShell } from "@/components/reports/suite/SuiteShell";
import { SuiteStatGrid } from "@/components/reports/suite/SuiteStatGrid";
import { SuiteSteps } from "@/components/reports/suite/SuiteSteps";
import { EditorialText } from "@/components/shared/EditorialText";
import {
  appendixFollowUps,
  appendixGroups,
  appendixMapColumns,
  appendixMapRows,
  appendixMeta,
  appendixNote,
  appendixStats,
  appendixSummary,
} from "@/lib/reports/pipingnow/data-appendix";
import { suiteBasePath } from "@/lib/reports/pipingnow/nav";

export const metadata: Metadata = {
  title: "Piping Now : Data Appendix",
  description:
    "Index of every source export behind the Piping Now SEO analysis, grouped by audit, with the outstanding follow up exports.",
  robots: "noindex, nofollow",
};

const sections = [
  { href: "#summary", label: "Summary" },
  { href: "#numbers", label: "At a glance" },
  { href: "#map", label: "Where to look" },
  { href: "#files", label: "Source files" },
  { href: "#follow-ups", label: "Still needed" },
];

export default function PipingNowDataAppendixPage() {
  return (
    <SuiteShell
      currentHref={`${suiteBasePath}/data-appendix`}
      meta={appendixMeta}
      sections={sections}
    >
      <SuiteSection
        eyebrow="Executive summary"
        id="summary"
        title="Every number has a file behind it"
      >
        <p className="mb-0 text-xl font-extrabold leading-relaxed text-slate-900 sm:text-2xl">
          <EditorialText text={appendixSummary} />
        </p>
        <div className="mt-8">
          <SuiteCallout
            body={appendixNote}
            label="One limitation worth stating"
            tone="risk"
          />
        </div>
      </SuiteSection>

      <SuiteSection
        eyebrow="At a glance"
        id="numbers"
        intro="Six audits, three workbooks, and roughly seventy source files, collected in August 2026."
        title="What was collected"
      >
        <SuiteStatGrid stats={appendixStats} />
      </SuiteSection>

      <SuiteSection
        eyebrow="Where to look"
        id="map"
        intro="If you need detail on a specific action from the plan, this table points at the right page and the right files."
        title="From an action to its evidence"
      >
        <SuiteDataTable
          columns={appendixMapColumns}
          minWidth={880}
          rows={appendixMapRows}
        />
      </SuiteSection>

      <SuiteSection
        eyebrow="Source files"
        id="files"
        intro="Grouped by the audit that produced them, with the tool, the property, and the date window for each group."
        title="Every export, by source"
      >
        <SuiteFileList groups={appendixGroups} />
      </SuiteSection>

      <SuiteSection
        eyebrow="Still needed"
        id="follow-ups"
        intro="Four gaps in the evidence. None of them change the conclusions, but closing them would turn several qualitative findings into countable ones."
        title="What we still need to collect"
      >
        <SuiteSteps steps={appendixFollowUps} />
      </SuiteSection>
    </SuiteShell>
  );
}
