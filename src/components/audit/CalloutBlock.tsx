type Tone = "info" | "warning" | "success";

const toneStyles: Record<
  Tone,
  {
    badgeBg: string;
    bar: string;
    bg: string;
    border: string;
    defaultLabel: string;
    icon: string;
    labelColor: string;
  }
> = {
  info: {
    badgeBg: "bg-[#2f65a7]",
    bar: "border-l-[#2f65a7]",
    bg: "bg-[#eff5fd]",
    border: "border-[#bfd6f0]",
    defaultLabel: "Note",
    icon: "i",
    labelColor: "text-[#18355f]",
  },
  warning: {
    badgeBg: "bg-[#d4950a]",
    bar: "border-l-[#d4950a]",
    bg: "bg-[#fffaf0]",
    border: "border-[#f5df83]",
    defaultLabel: "Warning",
    icon: "!",
    labelColor: "text-[#9a6a00]",
  },
  success: {
    badgeBg: "bg-[#16803d]",
    bar: "border-l-[#16803d]",
    bg: "bg-[#f2fbf5]",
    border: "border-[#bfe3cc]",
    defaultLabel: "Note",
    icon: "✓",
    labelColor: "text-[#166534]",
  },
};

export function CalloutBlock({
  label,
  text,
  tone,
}: {
  label?: string | null;
  text: string;
  tone: Tone;
}) {
  const style = toneStyles[tone];

  return (
    <div
      className={`mb-[22px] rounded-[10px] border border-l-4 px-5 py-4 last:mb-0 ${style.bg} ${style.border} ${style.bar}`}
    >
      <div className="mb-2 flex items-center gap-2">
        <span
          aria-hidden="true"
          className={`flex h-5 w-5 flex-none items-center justify-center rounded-full text-[13px] font-extrabold text-white ${style.badgeBg}`}
        >
          {style.icon}
        </span>
        <span
          className={`text-xs font-extrabold uppercase tracking-[0.08em] ${style.labelColor}`}
        >
          {label || style.defaultLabel}
        </span>
      </div>
      <div className="text-[15.5px] leading-[1.58] text-slate-700">
        {text}
      </div>
    </div>
  );
}
