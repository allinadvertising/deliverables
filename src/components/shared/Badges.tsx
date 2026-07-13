import type { Priority, Owner } from "@/lib/audit/types";
import type { AuditSourceType } from "@/lib/db-types";

const priorityColors: Record<Priority, string> = {
  P0: "bg-[var(--p0-bg)] text-[var(--p0)] border-[var(--p0-border)]",
  P1: "bg-[var(--p1-bg)] text-[var(--p1)] border-[var(--p1-border)]",
  P2: "bg-[var(--p2-bg)] text-[var(--p2)] border-[var(--p2-border)]",
};

const ownerColors: Record<Owner, string> = {
  AIA: "bg-[var(--brand-blue-light)] text-[var(--brand-blue)] border-[#bfd6f0]",
  "Client Dev": "bg-slate-100 text-slate-600 border-slate-300",
};

export function PriorityBadge({ priority }: { priority: Priority }) {
  return (
    <span
      className={`inline-flex min-h-[28px] items-center justify-center rounded-full border px-3 py-[5px] text-xs font-extrabold uppercase leading-none tracking-[0.06em] whitespace-nowrap ${priorityColors[priority]}`}
    >
      {priority}
    </span>
  );
}

export function OwnerBadge({ owner }: { owner: Owner }) {
  return (
    <span
      className={`inline-flex min-h-[28px] items-center justify-center rounded-full border px-3 py-[5px] text-xs font-extrabold uppercase leading-none tracking-[0.06em] whitespace-nowrap ${ownerColors[owner]}`}
    >
      {owner === "AIA" ? "AIA" : "Client Dev"}
    </span>
  );
}

const sourceTypeStyles: Record<AuditSourceType, string> = {
  legacy: "bg-slate-100 text-slate-500 border-slate-300",
  markdown: "bg-[var(--brand-blue-light)] text-[var(--brand-blue)] border-[#bfd6f0]",
  html: "bg-[#fef7e8] text-[#9a6a00] border-[#f5df83]",
};

const sourceTypeLabels: Record<AuditSourceType, string> = {
  legacy: "Legacy",
  markdown: "Markdown",
  html: "HTML",
};

export function SourceTypeBadge({ sourceType }: { sourceType: AuditSourceType }) {
  return (
    <span
      className={`inline-flex min-h-[24px] w-fit items-center justify-center rounded-full border px-2.5 py-1 text-[11px] font-extrabold uppercase leading-none tracking-[0.06em] whitespace-nowrap ${sourceTypeStyles[sourceType]}`}
    >
      {sourceTypeLabels[sourceType]}
    </span>
  );
}
