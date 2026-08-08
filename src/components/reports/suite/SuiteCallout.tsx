import { EditorialText } from "@/components/shared/EditorialText";

const toneStyles = {
  action: {
    body: "text-slate-800",
    border: "border-[#f6b328]",
    label: "text-[#9a6a00]",
    surface: "bg-[#fef7e8]",
  },
  info: {
    body: "text-slate-800",
    border: "border-[#2f65a7]",
    label: "text-[#2f65a7]",
    surface: "bg-[#f1f7ff]",
  },
  risk: {
    body: "text-slate-800",
    border: "border-[#c62828]",
    label: "text-[#c62828]",
    surface: "bg-[#fff1f1]",
  },
};

type SuiteCalloutProps = {
  body: string;
  label: string;
  tone?: keyof typeof toneStyles;
};

export function SuiteCallout({ body, label, tone = "info" }: SuiteCalloutProps) {
  const styles = toneStyles[tone];

  return (
    <aside
      className={`border-l-4 p-5 ${styles.border} ${styles.surface}`}
    >
      <p
        className={`mb-1 text-xs font-black uppercase tracking-[0.1em] ${styles.label}`}
      >
        {label}
      </p>
      <p className={`mb-0 text-base font-bold leading-relaxed ${styles.body}`}>
        <EditorialText text={body} />
      </p>
    </aside>
  );
}
