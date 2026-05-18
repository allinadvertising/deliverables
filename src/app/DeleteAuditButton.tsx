"use client";

import { useState } from "react";

type DeleteAuditButtonProps = {
  auditId: string;
  title: string;
};

export default function DeleteAuditButton({
  auditId,
  title,
}: DeleteAuditButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    if (isDeleting) {
      return;
    }

    const confirmed = window.confirm(`Delete "${title}"?`);

    if (!confirmed) {
      return;
    }

    setIsDeleting(true);

    try {
      const response = await fetch("/api/audits", {
        body: JSON.stringify({ auditId }),
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => ({}))) as {
          error?: string;
        };
        window.alert(payload.error || "Audit deletion failed.");
        return;
      }

      window.location.reload();
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <button
      aria-label={`Delete ${title}`}
      className="inline-flex h-9 w-9 items-center justify-center border border-[#f1c7c7] bg-[#fff7f7] text-[#b91c1c] transition-colors hover:border-[#dc2626] hover:bg-[#fef2f2] disabled:cursor-not-allowed disabled:opacity-50"
      disabled={isDeleting}
      onClick={handleDelete}
      title={`Delete ${title}`}
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
        <path d="M3 6h18" />
        <path d="M8 6V4h8v2" />
        <path d="M19 6l-1 14H6L5 6" />
        <path d="M10 11v5" />
        <path d="M14 11v5" />
      </svg>
    </button>
  );
}
