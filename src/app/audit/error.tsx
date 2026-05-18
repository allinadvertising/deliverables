"use client";

export default function AuditError({
  error: _error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#ffffff_0,#f6f8fb_42%,#eef3fa_100%)] px-5">
      <div className="border border-[#d9e2ef] bg-white px-8 py-10 text-center shadow-[0_18px_45px_rgba(30,62,108,0.09)]">
        <div className="mb-4 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#f1c7c7] bg-[#fff7f7]">
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-[#b91c1c]"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
          </div>
        </div>
        <h1 className="text-lg font-bold text-[#16243d]">
          Something went wrong
        </h1>
        <p className="mt-2 mb-4 text-sm text-[#65718a]">
          The audit page could not be loaded. This may be a temporary issue.
        </p>
        <button
          className="border border-[#c9d7e9] bg-[#eff5fd] px-5 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#3e71b8] transition-colors hover:bg-white"
          onClick={reset}
          type="button"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
