"use client";

import { useState } from "react";
import type { AuditDisplay, AuditSourceType } from "@/lib/db-types";
import { SourceTypeBadge } from "@/components/shared/Badges";
import DeleteAuditButton from "./DeleteAuditButton";
import EditAuditButton from "./EditAuditButton";
import ShareButton from "./ShareButton";

type FilterValue = "all" | AuditSourceType;

const filters: { label: string; value: FilterValue }[] = [
  { label: "All", value: "all" },
  { label: "Markdown", value: "markdown" },
  { label: "HTML", value: "html" },
  { label: "Legacy", value: "legacy" },
];

export function AuditList({ audits }: { audits: AuditDisplay[] }) {
  const [filter, setFilter] = useState<FilterValue>("all");
  const visible =
    filter === "all" ? audits : audits.filter((audit) => audit.sourceType === filter);

  return (
    <>
      <div className="mb-4 flex flex-wrap gap-2" role="tablist">
        {filters.map((option) => (
          <button
            aria-selected={filter === option.value}
            className={`border px-3 py-1.5 text-xs font-black uppercase tracking-[0.1em] transition-colors ${
              filter === option.value
                ? "border-[#18355f] bg-[#18355f] text-white"
                : "border-[#c9d7e9] bg-white text-[#65718a] hover:text-[#18355f]"
            }`}
            key={option.value}
            onClick={() => setFilter(option.value)}
            role="tab"
            type="button"
          >
            {option.label}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <div className="overflow-hidden border border-[#d9e2ef] bg-white shadow-[0_18px_45px_rgba(30,62,108,0.09)]">
          <div className="hidden grid-cols-[1.2fr_0.5fr_0.7fr_0.7fr_0.8fr_0.3fr_0.3fr_132px] gap-4 border-b border-[#d9e2ef] bg-[#18355f] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white md:grid">
            <span>Audit</span>
            <span>Source</span>
            <span>Client</span>
            <span>Period</span>
            <span>Updated</span>
            <span className="text-right">Size</span>
            <span className="text-right">Views</span>
            <span className="sr-only">Actions</span>
          </div>

          <div className="divide-y divide-[#e6edf6]">
            {visible.map((audit) => (
              <div
                key={audit.id}
                className="grid gap-3 px-5 py-4 transition-colors hover:bg-[#f7fbff] md:grid-cols-[1.2fr_0.5fr_0.7fr_0.7fr_0.8fr_0.3fr_0.3fr_132px] md:items-center"
              >
                <a href={`/dashboard/audits/${audit.id}`} className="block">
                  <span className="block text-base font-black text-[#16243d]">
                    {audit.title}
                  </span>
                  <span className="mt-1 block break-words text-sm text-[#65718a]">
                    {audit.pathLabel}
                  </span>
                </a>
                <span>
                  <SourceTypeBadge sourceType={audit.sourceType} />
                </span>
                <span className="w-fit border border-[#c9d7e9] bg-[#eff5fd] px-2 py-1 text-xs font-black text-[#3e71b8]">
                  {audit.client}
                </span>
                <span className="text-sm font-medium text-[#475775]">
                  {audit.period}
                </span>
                <span className="text-sm text-[#65718a]">
                  {audit.updatedAt}
                </span>
                <span className="text-sm text-[#65718a] md:text-right">
                  {audit.size}
                </span>
                <span className="text-sm text-[#65718a] md:text-right">
                  {audit.views > 0 ? audit.views : ":"}
                </span>
                <div className="flex justify-start gap-1.5 md:justify-end">
                  <ShareButton
                    auditId={audit.id}
                    shareToken={audit.shareToken}
                    title={`${audit.client} ${audit.title}`}
                  />
                  <EditAuditButton
                    auditId={audit.id}
                    supportingWorkbookLink={audit.supportingWorkbookLink}
                    title={`${audit.client} ${audit.title}`}
                  />
                  <DeleteAuditButton
                    auditId={audit.id}
                    title={`${audit.client} ${audit.title}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="border border-[#d9e2ef] bg-white px-5 py-8 text-[#65718a] shadow-sm">
          No audit deliverables match this filter.
        </div>
      )}
    </>
  );
}
