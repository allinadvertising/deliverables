export function InsightBox({ insight }: { insight: string | null }) {
  if (!insight) return null;

  return (
    <div className="audit-insight-box mx-auto mb-8 max-w-[1160px] px-4">
      <div className="mt-6 rounded-lg border border-[#f5df83] bg-[#fef7e8] px-[22px] py-5 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
        <strong className="text-slate-900">Key Insight:</strong> {insight}
      </div>
    </div>
  );
}
