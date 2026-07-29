import { EditorialText } from "@/components/shared/EditorialText";
import type { AuditIssueV2 } from "@/lib/audit/types";

type AuditIssueCardV2Props = {
  index: number;
  issue: AuditIssueV2;
};

export function AuditIssueCardV2({ index, issue }: AuditIssueCardV2Props) {
  return (
    <article className="audit-card overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_44px_rgba(24,59,104,0.1)]">
      <header className="bg-white px-6 pb-7 pt-6 sm:px-9">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#f6c64f] pb-4">
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-black uppercase tracking-[0.16em] text-[#183b68]">
              Issue {String(index + 1).padStart(2, "0")}
            </span>
            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-slate-300"
            />
            <span className="text-xs font-semibold tracking-[0.02em] text-slate-500">
              Problem to resolution
            </span>
          </div>
        </div>

        <h2 className="m-0 text-pretty text-2xl font-extrabold leading-[1.3] tracking-[-0.015em] text-slate-950 sm:text-[28px]">
          <EditorialText text={issue.what_is_the_issue} />
        </h2>
      </header>

      <div className="grid gap-0 border-t border-slate-200 bg-slate-50 lg:grid-cols-3">
        <StorySection
          index="01"
          label="Why it matters"
          text={issue.why_it_matters}
        />
        <StorySection
          index="02"
          label="How we will fix it"
          text={issue.how_we_will_fix_it}
        />
        <StorySection
          accent="outcome"
          index="03"
          label="Expected outcome"
          text={issue.expected_outcome}
        />
      </div>
    </article>
  );
}

function StorySection({
  accent = "default",
  index,
  label,
  text,
}: {
  accent?: "default" | "outcome";
  index: string;
  label: string;
  text: string;
}) {
  return (
    <section className="border-t border-slate-200 bg-white px-6 pb-[30px] pt-[26px] first:border-t-0 lg:border-l lg:border-t-0 lg:first:border-l-0 sm:px-8">
      <div className="mb-3.5 flex items-center gap-2.5">
        <span className="text-xs font-black tracking-[0.02em] text-slate-300">
          {index}
        </span>
        <h3
          className={`m-0 text-xs font-extrabold uppercase tracking-[0.12em] ${
            accent === "outcome" ? "text-green-600" : "text-[#2f65a7]"
          }`}
        >
          {label}
        </h3>
      </div>
      <p className="m-0 text-base leading-[1.62] text-slate-700">
        <EditorialText compact text={text} />
      </p>
    </section>
  );
}
