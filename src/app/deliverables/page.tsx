import type { Metadata } from "next";

import { NavBar } from "@/components/NavBar";
import { deliverables } from "@/lib/deliverables/registry";

import { DeliverablesList } from "./DeliverablesList";

export const metadata: Metadata = {
  title: "Deliverables : All In Advertising",
  description:
    "Internal index of every client SEO report, kickoff deck and analysis suite published from this repo.",
  robots: "noindex, nofollow",
};

export default function DeliverablesPage() {
  const clientCount = new Set(deliverables.map((entry) => entry.client)).size;
  const exportCount = deliverables.filter((entry) => entry.exportHref).length;

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0,#f6f8fb_42%,#eef3fa_100%)] text-[#16243d]">
      <NavBar />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-8 sm:px-8 lg:px-10">
        <header className="grid gap-8 border-b border-[#d9e2ef] pb-8 lg:grid-cols-[1fr_360px] lg:items-end">
          <div className="max-w-4xl">
            <p className="mb-4 inline-flex border border-[#c9d7e9] bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#3e71b8] shadow-sm">
              Internal index
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.04] text-[#16243d] sm:text-5xl">
              Every deliverable we have shipped.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#65718a]">
              Monthly SEO reports, kickoff decks and analysis suites, grouped by
              client and newest first. Each row links the live page the client
              sees, and the self-contained HTML export where one exists.
            </p>
          </div>

          <div className="grid grid-cols-3 border border-[#d9e2ef] bg-white shadow-[0_18px_45px_rgba(30,62,108,0.09)]">
            <div className="border-r border-[#d9e2ef] p-5">
              <p className="text-4xl font-black text-[#3e71b8]">
                {deliverables.length}
              </p>
              <p className="mt-1 text-sm font-medium text-[#65718a]">
                Deliverables
              </p>
            </div>
            <div className="border-r border-[#d9e2ef] p-5">
              <p className="text-4xl font-black text-[#f6b328]">
                {clientCount}
              </p>
              <p className="mt-1 text-sm font-medium text-[#65718a]">Clients</p>
            </div>
            <div className="p-5">
              <p className="text-4xl font-black text-[#16803d]">
                {exportCount}
              </p>
              <p className="mt-1 text-sm font-medium text-[#65718a]">
                HTML exports
              </p>
            </div>
          </div>
        </header>

        <section aria-labelledby="deliverables-title" className="pb-12">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                className="text-2xl font-black text-[#16243d]"
                id="deliverables-title"
              >
                All deliverables
              </h2>
              <p className="mt-1 text-sm text-[#65718a]">
                Every kickoff deck and SEO report produced since 2026-09-22 owes
                a committed HTML export; rows marked &ldquo;No export&rdquo;
                predate that rule.
              </p>
            </div>
            <div className="h-1 w-28 bg-[#f6b328]" aria-hidden="true" />
          </div>

          <DeliverablesList deliverables={deliverables} />
        </section>
      </div>
    </main>
  );
}
