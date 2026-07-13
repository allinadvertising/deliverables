"use client";

import { useState } from "react";
import type { AuditSourceType } from "@/lib/db-types";
import { EnhanceLoadingStatus } from "@/components/shared/EnhanceLoadingStatus";
import {
  isEnhanceJob,
  parseEnhanceResponse,
  pollEnhancementJob,
  type ErrorPayload,
} from "@/lib/enhance-client";

type EditAuditButtonProps = {
  auditId: string;
  sourceType: AuditSourceType;
  supportingWorkbookLink: string | null;
  title: string;
};

export default function EditAuditButton({
  auditId,
  sourceType,
  supportingWorkbookLink,
  title,
}: EditAuditButtonProps) {
  if (sourceType === "html") {
    return <ReviseHtmlModal auditId={auditId} title={title} />;
  }

  return (
    <WorkbookLinkModal
      auditId={auditId}
      supportingWorkbookLink={supportingWorkbookLink}
      title={title}
    />
  );
}

function EditTriggerButton({
  onClick,
  title,
}: {
  onClick: () => void;
  title: string;
}) {
  return (
    <button
      aria-label={`Edit ${title}`}
      className="inline-flex h-9 w-9 items-center justify-center border border-[#c9d7e9] bg-white text-[#475775] transition-colors hover:border-[#3e71b8] hover:text-[#3e71b8] disabled:cursor-not-allowed disabled:opacity-50"
      onClick={onClick}
      title={`Edit ${title}`}
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
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    </button>
  );
}

function ModalShell({
  children,
  heading,
  onClose,
}: {
  children: React.ReactNode;
  heading: string;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#16243d]/30"
      onClick={onClose}
    >
      <div
        className="mx-4 w-full max-w-md border border-[#d9e2ef] bg-white shadow-[0_18px_45px_rgba(30,62,108,0.15)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="border-b border-[#d9e2ef] bg-[#18355f] px-5 py-3">
          <h3 className="text-sm font-black uppercase tracking-[0.08em] text-white">
            {heading}
          </h3>
        </div>
        <div className="px-5 py-5">{children}</div>
      </div>
    </div>
  );
}

function WorkbookLinkModal({
  auditId,
  supportingWorkbookLink,
  title,
}: {
  auditId: string;
  supportingWorkbookLink: string | null;
  title: string;
}) {
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState(supportingWorkbookLink ?? "");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleSave() {
    if (saving) return;

    setSaving(true);
    setError("");

    try {
      const response = await fetch("/api/audits", {
        body: JSON.stringify({
          auditId,
          supportingWorkbookLink: link,
        }),
        headers: { "Content-Type": "application/json" },
        method: "PATCH",
      });
      const payload = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        setError(payload.error || "Audit update failed.");
        return;
      }

      window.location.reload();
    } finally {
      setSaving(false);
    }
  }

  function handleOpen() {
    setError("");
    setLink(supportingWorkbookLink ?? "");
    setOpen(true);
  }

  return (
    <>
      <EditTriggerButton onClick={handleOpen} title={title} />

      {open && (
        <ModalShell heading="Edit Audit" onClose={() => setOpen(false)}>
          <p className="text-sm font-bold text-[#16243d]">{title}</p>

          <label className="mt-4 block text-xs font-bold uppercase tracking-[0.1em] text-[#65718a]">
            Supporting Workbook Link
            <input
              className="mt-2 w-full rounded border border-[#c9d7e9] bg-[#f6f8fb] px-3 py-2 text-sm normal-case tracking-normal text-[#16243d] outline-none focus:border-[#3e71b8] focus:bg-white"
              onChange={(event) => setLink(event.target.value)}
              placeholder="https://docs.google.com/spreadsheets/..."
              type="url"
              value={link}
            />
          </label>

          <p className="mt-2 text-xs text-[#65718a]">
            Leave blank to remove the workbook button from this audit.
          </p>

          {error && (
            <div className="mt-3 border border-[#f1c7c7] bg-[#fff7f7] px-3 py-2 text-xs font-medium text-[#b91c1c]">
              {error}
            </div>
          )}

          <div className="mt-5 flex gap-2">
            <button
              className="flex-1 bg-[#3e71b8] px-4 py-2.5 text-xs font-black uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#18355f] disabled:cursor-not-allowed disabled:opacity-60"
              disabled={saving}
              onClick={handleSave}
              type="button"
            >
              {saving ? "Saving..." : "Save"}
            </button>
            <button
              className="flex-1 border border-[#c9d7e9] bg-[#eff5fd] px-4 py-2.5 text-xs font-black uppercase tracking-[0.12em] text-[#3e71b8] transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
              disabled={saving}
              onClick={() => setOpen(false)}
              type="button"
            >
              Cancel
            </button>
          </div>
        </ModalShell>
      )}
    </>
  );
}

function ReviseHtmlModal({ auditId, title }: { auditId: string; title: string }) {
  const [open, setOpen] = useState(false);
  const [instructions, setInstructions] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [jobId, setJobId] = useState<string | null>(null);
  const [error, setError] = useState("");

  function handleOpen() {
    setError("");
    setInstructions("");
    setOpen(true);
  }

  async function handleRegenerate() {
    if (submitting || !instructions.trim()) return;

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/html-enhancer/revise", {
        body: JSON.stringify({ auditId, instructions }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      const payload = await parseEnhanceResponse(response);

      if (!response.ok || !isEnhanceJob(payload)) {
        setError((payload as ErrorPayload).error || "Revision failed to start.");
        return;
      }

      setJobId(payload.jobId);
      const completed = await pollEnhancementJob(payload.jobId);

      if (completed.status === "completed") {
        window.location.reload();
        return;
      }

      setError(completed.error || "Revision failed before completing.");
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Revision failed.",
      );
    } finally {
      setSubmitting(false);
      setJobId(null);
    }
  }

  return (
    <>
      <EditTriggerButton onClick={handleOpen} title={title} />

      {open && (
        <ModalShell heading="Revise Deliverable" onClose={() => setOpen(false)}>
          <p className="text-sm font-bold text-[#16243d]">{title}</p>

          {submitting ? (
            <div className="mt-4">
              <EnhanceLoadingStatus jobId={jobId} provider="openai" />
            </div>
          ) : (
            <>
              <label className="mt-4 block text-xs font-bold uppercase tracking-[0.1em] text-[#65718a]">
                Describe the change
                <textarea
                  className="mt-2 w-full resize-y rounded border border-[#c9d7e9] bg-[#f6f8fb] px-3 py-2 text-sm normal-case tracking-normal text-[#16243d] outline-none focus:border-[#3e71b8] focus:bg-white"
                  onChange={(event) => setInstructions(event.target.value)}
                  placeholder="e.g. Tighten the executive summary to three sentences, or remove the Targeting section."
                  rows={4}
                  value={instructions}
                />
              </label>

              <p className="mt-2 text-xs text-[#65718a]">
                The AI starts from the current deliverable and the original
                upload - it applies only this change rather than redoing
                everything from scratch.
              </p>

              {error && (
                <div className="mt-3 border border-[#f1c7c7] bg-[#fff7f7] px-3 py-2 text-xs font-medium text-[#b91c1c]">
                  {error}
                </div>
              )}

              <div className="mt-5 flex gap-2">
                <button
                  className="flex-1 bg-[#3e71b8] px-4 py-2.5 text-xs font-black uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#18355f] disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={submitting || !instructions.trim()}
                  onClick={handleRegenerate}
                  type="button"
                >
                  Regenerate
                </button>
                <button
                  className="flex-1 border border-[#c9d7e9] bg-[#eff5fd] px-4 py-2.5 text-xs font-black uppercase tracking-[0.12em] text-[#3e71b8] transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={submitting}
                  onClick={() => setOpen(false)}
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </>
          )}
        </ModalShell>
      )}
    </>
  );
}
