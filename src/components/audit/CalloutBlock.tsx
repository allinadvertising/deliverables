const toneStyles = {
  info: "border-[#cbdff4] bg-[#eaf2fb] text-slate-700",
  warning: "border-[#f5df83] bg-[#fef7e8] text-slate-900",
  success: "border-[#bfe3cc] bg-[#edf9f1] text-slate-900",
} as const;

export function CalloutBlock({
  text,
  tone,
}: {
  text: string;
  tone: "info" | "warning" | "success";
}) {
  return (
    <div
      className={`mb-4 rounded-lg border px-5 py-4 text-[15.5px] leading-[1.58] last:mb-0 ${toneStyles[tone]}`}
    >
      {text}
    </div>
  );
}
