"use client";

import { useMemo, useState } from "react";
import type { AuditContent } from "@/lib/audit/types";
import { ActionItemsTable } from "./ActionItemsTable";
import { BeforeAfterGrid } from "./BeforeAfterGrid";
import { ExecutiveSummary } from "./ExecutiveSummary";
import { FaqSection } from "./FaqSection";
import { FindingCategoryGroup } from "./FindingCategoryGroup";
import { GlossaryGrid } from "./GlossaryGrid";
import { InsightBox } from "./InsightBox";
import { SolutionSteps } from "./SolutionSteps";

type AuditTabsProps = {
  content: AuditContent;
};

type AuditTabId =
  | "overview"
  | "actions"
  | "findings"
  | "solutions"
  | "comparisons"
  | "glossary"
  | "faq";

type AuditTab = {
  count?: number;
  id: AuditTabId;
  label: string;
};

export function AuditTabs({ content }: AuditTabsProps) {
  const {
    actionItems,
    beforeAfter,
    executiveSummary,
    faq,
    findings,
    glossary,
    insightBox,
    meta,
    solutions,
  } = content;
  const tabs = useMemo(
    () =>
      [
        {
          count: executiveSummary.items.length,
          id: "overview",
          label: "Overview",
        },
        {
          count: actionItems.length,
          id: "actions",
          label: "Actions",
        },
        {
          count: findings.length,
          id: "findings",
          label: "Findings",
        },
        {
          count: solutions.length,
          id: "solutions",
          label: "Solutions",
        },
        {
          count: beforeAfter.length,
          id: "comparisons",
          label: "Before / After",
        },
        {
          count: glossary.length,
          id: "glossary",
          label: "Glossary",
        },
        {
          count: faq.length,
          id: "faq",
          label: "FAQ",
        },
      ].filter((tab) => tab.id === "overview" || (tab.count ?? 0) > 0) as AuditTab[],
    [
      actionItems.length,
      beforeAfter.length,
      executiveSummary.items.length,
      faq.length,
      findings.length,
      glossary.length,
      solutions.length,
    ],
  );
  const [activeTab, setActiveTab] = useState<AuditTabId>(tabs[0].id);

  return (
    <div className="mx-auto my-8 max-w-[1160px]">
      <div className="sticky top-0 z-20 border-b border-slate-200 bg-[#edf2f7]/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-[#edf2f7]/80 sm:px-0">
        <div
          aria-label="Audit sections"
          className="flex gap-2 overflow-x-auto pb-1"
          role="tablist"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                aria-label={`${tab.label}${typeof tab.count === "number" ? ` (${tab.count})` : ""}`}
                aria-controls={`audit-tab-panel-${tab.id}`}
                aria-selected={isActive}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.08em] transition-colors ${
                  isActive
                    ? "border-[#2f65a7] bg-[#183b68] text-white shadow-[0_8px_18px_rgba(24,59,104,0.18)]"
                    : "border-slate-300 bg-white text-slate-600 hover:border-[#2f65a7] hover:text-[#183b68]"
                }`}
                id={`audit-tab-${tab.id}`}
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                type="button"
              >
                <span>{tab.label}</span>
                {typeof tab.count === "number" ? (
                  <span
                    aria-hidden="true"
                    className={`rounded-full px-2 py-0.5 text-[10px] ${
                      isActive
                        ? "bg-white/15 text-white"
                        : "bg-[#eaf2fb] text-[#2f65a7]"
                    }`}
                  >
                    {tab.count}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div
        aria-labelledby={`audit-tab-${activeTab}`}
        id={`audit-tab-panel-${activeTab}`}
        role="tabpanel"
      >
        {activeTab === "overview" ? (
          <>
            <ExecutiveSummary
              items={executiveSummary.items}
              metricCards={executiveSummary.metricCards}
              severity={executiveSummary.severity}
              sourceNote={meta.sourceNote}
            />
            {insightBox ? <InsightBox insight={insightBox} /> : null}
          </>
        ) : null}

        {activeTab === "actions" ? <ActionItemsTable items={actionItems} /> : null}

        {activeTab === "findings" ? (
          <FindingCategoryGroup findings={findings} />
        ) : null}

        {activeTab === "solutions" ? (
          <SolutionSteps solutions={solutions} />
        ) : null}

        {activeTab === "comparisons" ? (
          <BeforeAfterGrid pairs={beforeAfter} />
        ) : null}

        {activeTab === "glossary" ? <GlossaryGrid terms={glossary} /> : null}

        {activeTab === "faq" ? <FaqSection items={faq} /> : null}
      </div>
    </div>
  );
}
