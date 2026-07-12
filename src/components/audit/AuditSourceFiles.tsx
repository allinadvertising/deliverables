type AuditSourceFilesProps = {
  sourceFiles?: string[] | null;
};

export function AuditSourceFiles({ sourceFiles }: AuditSourceFilesProps) {
  if (!sourceFiles || sourceFiles.length === 0) {
    return null;
  }

  return (
    <div className="audit-no-print audit-page mx-auto max-w-[1160px] px-4 sm:px-0">
      <details className="group border-t border-slate-200 pt-4 text-sm text-slate-500">
        <summary className="cursor-pointer select-none list-none font-medium text-slate-600 marker:content-none">
          <span className="mr-1 inline-block transition-transform group-open:rotate-90">
            &rsaquo;
          </span>
          Source files ({sourceFiles.length})
        </summary>
        <ul className="mt-3 list-disc space-y-1 pl-6">
          {sourceFiles.map((fileName) => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </details>
    </div>
  );
}
