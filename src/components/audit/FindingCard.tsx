import type { Finding } from "@/lib/audit/types";
import { PriorityBadge } from "@/components/shared/Badges";

export function FindingCard({
  priority,
  title,
  rootCause,
  statistics,
  whatThisMeans,
  representativeUrls,
  impacts,
}: Finding) {
  return (
    <div className="audit-card audit-finding-card my-6 p-[30px] sm:p-[34px]">
      <div className="audit-finding-header mb-[18px] flex items-center gap-4 max-sm:flex-col max-sm:items-start">
        <PriorityBadge priority={priority} />
        <h3 className="m-0 flex-1 text-2xl font-extrabold leading-[1.18] text-slate-900">
          {title}
        </h3>
      </div>

      <div className="audit-root-cause mb-4 text-[17px] leading-[1.6] text-slate-700">
        <strong>Root cause:</strong> {rootCause}
      </div>

      {statistics && statistics.length > 0 && (
        <div className="audit-stat-grid my-[18px] grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3.5">
          {statistics.map((stat, i) => (
            <div
              className="audit-card audit-stat-card bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-5 py-[18px] text-[15px]"
              key={i}
            >
              <span className="audit-fit-text audit-stat-number mb-1.5 block font-black leading-none text-[#2f65a7]">
                {stat.number}
              </span>
              {stat.description}
            </div>
          ))}
        </div>
      )}

      {whatThisMeans && (
        <div className="audit-what-this-means my-5 rounded-lg border border-[#d8e6f5] border-l-[6px] border-l-[#2f65a7] bg-[#f4f8fd] px-5 py-[18px] text-[16.5px] leading-[1.58] text-slate-700">
          <strong className="text-[#2f65a7]">What This Means:</strong>{" "}
          {whatThisMeans}
        </div>
      )}

      {representativeUrls && representativeUrls.length > 0 && (
        <div className="audit-mono audit-url-list my-3.5 rounded-lg border border-slate-200 bg-[#f8fafc] px-[18px] py-4 text-sm leading-[1.85] text-slate-700 break-words">
          <strong>Representative URLs:</strong>
          <br />
          {representativeUrls.map((url, i) => (
            <span key={i}>
              {url}
              {i < representativeUrls.length - 1 && <br />}
            </span>
          ))}
        </div>
      )}

      {impacts && impacts.length > 0 && (
        <div className="audit-impact-grid mt-[18px] grid grid-cols-3 gap-4 text-[15px] max-lg:grid-cols-1">
          {impacts.map((impact, i) => (
            <div
              className="audit-impact-item rounded-lg border border-slate-200 bg-[#f8fafc] p-4"
              key={i}
            >
              <strong className="mb-1.5 block text-[11px] uppercase tracking-[0.08em] text-slate-500">
                {impact.label}
              </strong>
              {impact.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
