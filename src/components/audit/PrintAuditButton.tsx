"use client";

export function PrintAuditButton() {
  function printAudit() {
    window.print();
  }

  return (
    <button
      aria-label="Print audit as PDF"
      className="inline-flex items-center gap-2 rounded-full border border-[#bfd6f0] bg-white px-4 py-2.5 text-xs font-black uppercase tracking-[0.1em] text-[#183b68] shadow-[0_8px_18px_rgba(24,59,104,0.12)] transition-colors hover:border-[#2f65a7] hover:bg-[#183b68] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#f6b328] focus:ring-offset-2"
      onClick={printAudit}
      type="button"
    >
      <svg
        aria-hidden="true"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M6 9V2h12v7" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <path d="M6 14h12v8H6z" />
      </svg>
      <span>Print as PDF</span>
    </button>
  );
}
