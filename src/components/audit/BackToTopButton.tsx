"use client";

export function BackToTopButton() {
  function scrollToTop() {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }

  return (
    <button
      aria-label="Back to top"
      className="audit-no-print fixed bottom-8 right-8 z-30 hidden h-11 w-11 items-center justify-center rounded-full border border-[#bfd6f0] bg-white/90 text-[#183b68] shadow-[0_12px_28px_rgba(24,59,104,0.18)] backdrop-blur transition-all hover:-translate-y-0.5 hover:border-[#2f65a7] hover:bg-[#183b68] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#f6b328] focus:ring-offset-2 lg:inline-flex"
      onClick={scrollToTop}
      type="button"
    >
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
        viewBox="0 0 24 24"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}
