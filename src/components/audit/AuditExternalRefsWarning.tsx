type AuditExternalRefsWarningProps = {
  externalRefs?: string[] | null;
};

/**
 * Non-blocking notice for schemaVersion 3 documents whose source HTML
 * referenced external scripts/stylesheets - it wasn't fully self-contained,
 * so those resources may not have been available when the deliverable was
 * flattened. Renders nothing when there's nothing to warn about.
 */
export function AuditExternalRefsWarning({
  externalRefs,
}: AuditExternalRefsWarningProps) {
  if (!externalRefs || externalRefs.length === 0) {
    return null;
  }

  return (
    <div className="audit-no-print mx-auto mt-6 max-w-[1160px] px-4 sm:px-0">
      <details className="group border-l-4 border-l-[#f6b328] bg-[#fff8e8] px-4 py-3 text-sm text-[#6b4a00]">
        <summary className="cursor-pointer select-none list-none font-bold marker:content-none">
          <span className="mr-1 inline-block transition-transform group-open:rotate-90">
            &rsaquo;
          </span>
          This upload referenced {externalRefs.length} external resource
          {externalRefs.length > 1 ? "s" : ""} and was not fully self-contained
        </summary>
        <ul className="mt-3 list-disc space-y-1 break-all pl-6 text-xs">
          {externalRefs.map((ref) => (
            <li key={ref}>{ref}</li>
          ))}
        </ul>
      </details>
    </div>
  );
}
