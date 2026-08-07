import { EditorialText } from "@/components/shared/EditorialText";
import type { SuiteEvidenceGroup } from "@/lib/reports/pipingnow/types";

const toneStyles = {
  confirmed: {
    accent: "border-t-[#16803d]",
    label: "text-[#16803d]",
    note: "We checked this directly in the data.",
  },
  inferred: {
    accent: "border-t-[#2f65a7]",
    label: "text-[#2f65a7]",
    note: "The data points this way, but it is a read, not a fact.",
  },
  unverified: {
    accent: "border-t-[#c75a12]",
    label: "text-[#c75a12]",
    note: "We still need to check this before acting on it.",
  },
};

type SuiteEvidenceProps = {
  groups: SuiteEvidenceGroup[];
};

export function SuiteEvidence({ groups }: SuiteEvidenceProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {groups.map((group) => {
        const styles = toneStyles[group.tone];

        return (
          <article
            className={`border-t-4 bg-[#f9fbfe] p-5 ${styles.accent}`}
            key={group.label}
          >
            <h3
              className={`text-sm font-black uppercase tracking-[0.08em] ${styles.label}`}
            >
              {group.label}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              {styles.note}
            </p>
            <ul className="mt-4 space-y-3">
              {group.items.map((item) => (
                <li
                  className="grid grid-cols-[10px_1fr] gap-3 text-sm leading-relaxed text-slate-700"
                  key={item}
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400"
                  />
                  <span>
                    <EditorialText compact text={item} />
                  </span>
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  );
}
