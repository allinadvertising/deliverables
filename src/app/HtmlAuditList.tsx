import type { HtmlDeliverableDisplay } from "@/lib/db-types";
import DeleteHtmlAuditButton from "./DeleteHtmlAuditButton";

export function HtmlAuditList({
  deliverables,
}: {
  deliverables: HtmlDeliverableDisplay[];
}) {
  return (
    <div className="overflow-hidden border border-[#d9e2ef] bg-white shadow-[0_18px_45px_rgba(30,62,108,0.09)]">
      <div className="hidden grid-cols-[1.4fr_0.7fr_0.6fr_0.8fr_0.4fr_44px] gap-4 border-b border-[#d9e2ef] bg-[#18355f] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white md:grid">
        <span>Deliverable</span>
        <span>Client</span>
        <span>Date</span>
        <span>Updated</span>
        <span className="text-right">Size</span>
        <span className="sr-only">Actions</span>
      </div>

      <div className="divide-y divide-[#e6edf6]">
        {deliverables.map((item) => (
          <div
            key={item.id}
            className="grid gap-3 px-5 py-4 transition-colors hover:bg-[#f7fbff] md:grid-cols-[1.4fr_0.7fr_0.6fr_0.8fr_0.4fr_44px] md:items-center"
          >
            <a className="block" href={item.url} target="_blank" rel="noreferrer">
              <span className="block text-base font-black text-[#16243d]">
                {item.title}
              </span>
              <span className="mt-1 block break-words text-sm text-[#65718a]">
                {item.url}
              </span>
            </a>
            <span className="w-fit border border-[#c9d7e9] bg-[#eff5fd] px-2 py-1 text-xs font-black text-[#3e71b8]">
              {item.client}
            </span>
            <span className="text-sm font-medium text-[#475775]">
              {item.dateSlug}
            </span>
            <span className="text-sm text-[#65718a]">{item.updatedAt}</span>
            <span className="text-sm text-[#65718a] md:text-right">
              {item.size}
            </span>
            <div className="flex justify-start md:justify-end">
              <DeleteHtmlAuditButton id={item.id} title={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
