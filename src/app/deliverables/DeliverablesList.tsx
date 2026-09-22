"use client";

import { useMemo, useState } from "react";

import type {
  DeliverableEntry,
  DeliverableKind,
} from "@/lib/deliverables/types";

type FilterValue = "all" | DeliverableKind;

const filters: { label: string; value: FilterValue }[] = [
  { label: "All", value: "all" },
  { label: "SEO reports", value: "seo-report" },
  { label: "Kickoff decks", value: "kickoff" },
  { label: "Analysis suites", value: "analysis-suite" },
];

const kindLabels: Record<DeliverableKind, string> = {
  "analysis-suite": "Analysis suite",
  kickoff: "Kickoff",
  "seo-report": "SEO report",
};

const kindStyles: Record<DeliverableKind, string> = {
  "analysis-suite": "border-[#d8c6ee] bg-[#f4effc] text-[#6b46a8]",
  kickoff: "border-[#f2d9a0] bg-[#fdf6e7] text-[#8a5f11]",
  "seo-report": "border-[#c9d7e9] bg-[#eff5fd] text-[#3e71b8]",
};

type ClientGroup = {
  client: string;
  items: DeliverableEntry[];
  latest: string;
};

function groupByClient(entries: DeliverableEntry[]): ClientGroup[] {
  const groups = new Map<string, ClientGroup>();

  for (const entry of entries) {
    const group = groups.get(entry.client);
    if (group) {
      group.items.push(entry);
      group.latest =
        entry.periodEnd > group.latest ? entry.periodEnd : group.latest;
    } else {
      groups.set(entry.client, {
        client: entry.client,
        items: [entry],
        latest: entry.periodEnd,
      });
    }
  }

  // Most recently active client first; the entries inside a group arrive
  // newest-first already, because the registry is sorted.
  return [...groups.values()].sort(
    (a, b) =>
      b.latest.localeCompare(a.latest) || a.client.localeCompare(b.client),
  );
}

export function DeliverablesList({
  deliverables,
}: {
  deliverables: DeliverableEntry[];
}) {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [query, setQuery] = useState("");

  const groups = useMemo(() => {
    const search = query.trim().toLowerCase();
    const visible = deliverables.filter((entry) => {
      const matchesKind = filter === "all" || entry.kind === filter;
      const matchesSearch =
        !search ||
        entry.client.toLowerCase().includes(search) ||
        entry.headline.toLowerCase().includes(search);

      return matchesKind && matchesSearch;
    });

    return groupByClient(visible);
  }, [deliverables, filter, query]);

  const shown = groups.reduce((total, group) => total + group.items.length, 0);

  return (
    <>
      <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="tablist">
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

        <div className="flex items-center gap-3">
          <label
            className="text-xs font-black uppercase tracking-[0.1em] text-[#65718a]"
            htmlFor="deliverable-search"
          >
            Search
          </label>
          <input
            autoComplete="off"
            className="w-full border border-[#c9d7e9] bg-white px-3 py-1.5 text-sm text-[#16243d] placeholder:text-[#9aa8bf] focus:border-[#3e71b8] focus:outline-none focus:ring-2 focus:ring-[#f6b328] lg:w-72"
            id="deliverable-search"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Client or headline"
            type="search"
            value={query}
          />
        </div>
      </div>

      <p aria-live="polite" className="mb-5 text-sm text-[#65718a]">
        {shown} of {deliverables.length} deliverables
        {groups.length > 0
          ? ` across ${groups.length} ${groups.length === 1 ? "client" : "clients"}`
          : ""}
      </p>

      {groups.length > 0 ? (
        <div className="flex flex-col gap-5">
          {groups.map((group) => (
            <section
              aria-label={group.client}
              className="border border-[#d9e2ef] bg-white shadow-[0_18px_45px_rgba(30,62,108,0.09)]"
              key={group.client}
            >
              <h3 className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#d9e2ef] bg-[#18355f] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white">
                {group.client}
                <span className="text-xs font-bold tracking-[0.08em] text-[#b7cbe6]">
                  {group.items.length}{" "}
                  {group.items.length === 1 ? "deliverable" : "deliverables"}
                </span>
              </h3>

              <div className="divide-y divide-[#e6edf6]">
                {group.items.map((entry) => (
                  <article
                    className="grid gap-3 px-5 py-4 transition-colors hover:bg-[#f7fbff] lg:grid-cols-[150px_1fr_190px] lg:items-start lg:gap-5"
                    key={entry.href}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`w-fit border px-2 py-1 text-xs font-black ${kindStyles[entry.kind]}`}
                      >
                        {kindLabels[entry.kind]}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <a
                        className="block text-base font-black text-[#16243d] underline decoration-[#a8c4e8] underline-offset-4 hover:text-[#3e71b8]"
                        href={entry.href}
                      >
                        {entry.periodLabel || entry.href}
                      </a>
                      <p className="mt-1 text-sm leading-relaxed text-[#65718a]">
                        {entry.headline}
                      </p>
                      <p className="mt-1 font-mono text-xs text-[#9aa8bf]">
                        {entry.href}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 lg:justify-end">
                      {entry.exportHref ? (
                        <a
                          className="border border-[#bfd6f0] bg-white px-3 py-1.5 text-xs font-black uppercase tracking-[0.1em] text-[#183b68] transition-colors hover:border-[#2f65a7] hover:bg-[#183b68] hover:text-white"
                          download
                          href={entry.exportHref}
                        >
                          HTML export
                        </a>
                      ) : (
                        <span
                          className="border border-dashed border-[#d9c2c2] bg-[#fdf5f5] px-3 py-1.5 text-xs font-black uppercase tracking-[0.1em] text-[#a1544a]"
                          title="Predates the export rule, or the export was never produced"
                        >
                          No export
                        </span>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="border border-[#d9e2ef] bg-white px-5 py-8 text-[#65718a] shadow-sm">
          No deliverables match that filter.
        </div>
      )}
    </>
  );
}
