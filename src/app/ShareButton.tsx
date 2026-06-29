"use client";

import { useCallback, useState } from "react";

type ShareButtonProps = {
  auditId: string;
  shareToken: string | null;
  title: string;
};

export default function ShareButton({
  auditId,
  shareToken: initialToken,
  title,
}: ShareButtonProps) {
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState<string | null>(initialToken);
  const [hasToken, setHasToken] = useState(Boolean(initialToken));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const shareUrl = token
    ? `${window.location.origin}/audit?token=${token}`
    : null;

  const generate = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/share-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ auditId }),
      });

      const data = (await res.json()) as {
        ok?: boolean;
        token?: string;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        setError(data.error || "Failed to generate link.");
        return;
      }

      setToken(data.token!);
      setHasToken(true);
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }, [auditId]);

  const revoke = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/share-token", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ auditId }),
      });

      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setError(data.error || "Failed to revoke link.");
        return;
      }

      setToken(null);
      setHasToken(false);
      setCopied(false);
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }, [auditId]);

  const regenerate = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/share-token", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ auditId }),
      });

      const data = (await res.json()) as {
        ok?: boolean;
        token?: string;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        setError(data.error || "Failed to regenerate link.");
        return;
      }

      setToken(data.token!);
      setCopied(false);
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }, [auditId]);

  async function copyLink() {
    if (!shareUrl) return;

    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleOpen() {
    setError("");
    setOpen(true);
  }

  return (
    <>
      <button
        aria-label={`Share ${title}`}
        className="inline-flex h-9 w-9 items-center justify-center border border-[#c9d7e9] bg-[#eff5fd] text-[#3e71b8] transition-colors hover:border-[#3e71b8] hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
        onClick={handleOpen}
        title={`Share ${title}`}
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
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#16243d]/30"
          onClick={() => setOpen(false)}
        >
          <div
            className="mx-4 w-full max-w-sm border border-[#d9e2ef] bg-white shadow-[0_18px_45px_rgba(30,62,108,0.15)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b border-[#d9e2ef] bg-[#18355f] px-5 py-3">
              <h3 className="text-sm font-black uppercase tracking-[0.08em] text-white">
                Share Audit
              </h3>
            </div>

            <div className="px-5 py-5">
              <p className="text-sm font-bold text-[#16243d]">{title}</p>

              {error && (
                <div className="mt-3 border border-[#f1c7c7] bg-[#fff7f7] px-3 py-2 text-xs font-medium text-[#b91c1c]">
                  {error}
                </div>
              )}

              {hasToken || token ? (
                <div className="mt-4 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#65718a]">
                    Shareable Link
                  </p>

                  {shareUrl ? (
                    <>
                      <div className="flex items-center gap-2">
                        <input
                          className="flex-1 rounded border border-[#c9d7e9] bg-[#f6f8fb] px-3 py-2 text-xs text-[#16243d] outline-none"
                          readOnly
                          value={shareUrl}
                        />
                        <button
                          className="shrink-0 border border-[#c9d7e9] bg-[#eff5fd] px-3 py-2 text-xs font-black uppercase tracking-[0.1em] text-[#3e71b8] transition-colors hover:bg-white"
                          onClick={copyLink}
                          type="button"
                        >
                          {copied ? "Copied!" : "Copy"}
                        </button>
                      </div>
                      <p className="text-xs text-[#65718a]">
                        Anyone with this link can view the audit. No login
                        required.
                      </p>
                    </>
                  ) : (
                    <p className="text-xs text-[#65718a]">
                      Click a button below to manage the share link.
                    </p>
                  )}
                </div>
              ) : (
                <div className="mt-4 space-y-3">
                  <p className="text-xs text-[#65718a]">
                    Generate a unique, unguessable link to share this audit with
                    clients. No login required to view.
                  </p>
                  <button
                    className="w-full bg-[#3e71b8] px-4 py-2.5 text-xs font-black uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#18355f] disabled:cursor-not-allowed disabled:opacity-60"
                    disabled={loading}
                    onClick={generate}
                    type="button"
                  >
                    {loading ? "Generating..." : "Generate Link"}
                  </button>
                </div>
              )}

              {hasToken && (
                <div className="mt-3 flex gap-2">
                  {!token && (
                    <button
                      className="flex-1 bg-[#3e71b8] px-3 py-2 text-xs font-black uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#18355f] disabled:cursor-not-allowed disabled:opacity-60"
                      disabled={loading}
                      onClick={generate}
                      type="button"
                    >
                      {loading ? "..." : "Show Link"}
                    </button>
                  )}
                  <button
                    className="flex-1 border border-[#c9d7e9] bg-[#eff5fd] px-3 py-2 text-xs font-black uppercase tracking-[0.1em] text-[#3e71b8] transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={loading}
                    onClick={regenerate}
                    type="button"
                  >
                    {loading ? "..." : "Regenerate"}
                  </button>
                  <button
                    className="flex-1 border border-[#f1c7c7] bg-[#fff7f7] px-3 py-2 text-xs font-black uppercase tracking-[0.1em] text-[#b91c1c] transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={loading}
                    onClick={revoke}
                    type="button"
                  >
                    {loading ? "..." : "Revoke"}
                  </button>
                </div>
              )}

              <button
                className="mt-4 w-full border border-[#c9d7e9] bg-[#eff5fd] px-4 py-2 text-xs font-black uppercase tracking-[0.1em] text-[#3e71b8] transition-colors hover:bg-white"
                onClick={() => setOpen(false)}
                type="button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
