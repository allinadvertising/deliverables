export type SuiteFileGroup = {
  files: Array<{
    contains: string;
    name: string;
    type: string;
  }>;
  source: string;
  title: string;
};

type SuiteFileListProps = {
  groups: SuiteFileGroup[];
};

export function SuiteFileList({ groups }: SuiteFileListProps) {
  return (
    <div className="space-y-8">
      {groups.map((group) => (
        <article key={group.title}>
          <div className="mb-4 border-l-4 border-[#2f65a7] pl-4">
            <h3 className="mb-1 text-lg font-black leading-tight text-slate-900">
              {group.title}
            </h3>
            <p className="mb-0 text-sm leading-relaxed text-slate-600">
              {group.source}
            </p>
          </div>

          <div className="border-y border-slate-200">
            <div className="hidden grid-cols-[1.4fr_110px_2fr] gap-6 bg-[#183b68] px-5 py-3 text-[11px] font-black uppercase tracking-[0.06em] text-white lg:grid">
              <span>File</span>
              <span>Type</span>
              <span>What is inside</span>
            </div>
            {group.files.map((file) => (
              <div
                className="grid gap-3 border-b border-slate-200 px-5 py-4 last:border-b-0 lg:grid-cols-[1.4fr_110px_2fr] lg:gap-6"
                key={file.name}
              >
                <p className="audit-mono mb-0 break-all text-[13px] font-bold text-[#183b68]">
                  {file.name}
                </p>
                <p className="mb-0 text-xs font-black uppercase tracking-[0.06em] text-slate-500">
                  {file.type}
                </p>
                <p className="mb-0 text-sm leading-relaxed text-slate-600">
                  {file.contains}
                </p>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
