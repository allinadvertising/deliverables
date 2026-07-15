"use client";

import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { parseEnhanceResponse, type ErrorPayload } from "@/lib/enhance-client";

const maxFileBytes = 8 * 1024 * 1024;

type PublishResult = {
  url: string;
};

export default function EnhanceHtmlDirectForm() {
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<PublishResult | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileWarning, setFileWarning] = useState<string | null>(null);

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;

    if (!files || files.length === 0) {
      setFileName(null);
      setFileWarning(null);
      return;
    }

    const file = files[0];

    if (file.size > maxFileBytes) {
      event.target.value = "";
      setFileName(null);
      setFileWarning("That file is over 8 MB. Keep uploads under 8 MB.");
      return;
    }

    setFileWarning(null);
    setFileName(file.name);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setResult(null);
    setSubmitting(true);

    try {
      const response = await fetch("/api/html-audits", {
        body: new FormData(event.currentTarget),
        method: "POST",
      });
      const payload = await parseEnhanceResponse(response);

      if (!response.ok) {
        const errorPayload = payload as ErrorPayload;
        setError(
          errorPayload.error ||
            `Publishing failed with HTTP ${response.status}.`,
        );
        return;
      }

      setResult(payload as PublishResult);
      event.currentTarget.reset();
      setFileName(null);
      setFileWarning(null);
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Publishing failed.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
      <form
        className="border border-[#d9e2ef] bg-white shadow-[0_18px_45px_rgba(30,62,108,0.09)]"
        onSubmit={handleSubmit}
      >
        <div className="border-b border-[#d9e2ef] bg-[#18355f] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white">
          HTML Source (Direct)
        </div>

        <div className="grid gap-5 p-5 sm:p-6">
          <label className="grid gap-2">
            <span className="text-sm font-black text-[#16243d]">
              Deliverable file
            </span>
            <input
              accept=".html,.htm,text/html"
              className="w-full border border-[#c9d7e9] bg-[#f8fbff] px-3 py-3 text-sm font-medium text-[#16243d] file:mr-4 file:border-0 file:bg-[#3e71b8] file:px-4 file:py-2 file:text-sm file:font-black file:text-white"
              name="file"
              onChange={handleFileChange}
              required
              type="file"
            />
            {fileWarning ? (
              <p className="text-xs font-bold text-[#dc2626]">
                {fileWarning}
              </p>
            ) : fileName ? (
              <p className="text-xs font-bold text-[#475775]">
                Selected: {fileName}
              </p>
            ) : (
              <p className="text-xs font-medium text-[#65718a]">
                Upload one self-contained .html file. It&apos;s published
                close to verbatim - only brand colors and typography are
                applied on top, no AI reconstruction.
              </p>
            )}
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-black text-[#16243d]">
                Client name
              </span>
              <input
                className="w-full border border-[#c9d7e9] bg-white px-3 py-3 text-sm font-medium text-[#16243d] outline-none focus:border-[#3e71b8]"
                name="clientName"
                placeholder="Fossil Age Minerals"
                required
                type="text"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-black text-[#16243d]">
                Audit title
              </span>
              <input
                className="w-full border border-[#c9d7e9] bg-white px-3 py-3 text-sm font-medium text-[#16243d] outline-none focus:border-[#3e71b8]"
                name="title"
                placeholder="Google Ads Audit"
                required
                type="text"
              />
            </label>
          </div>

          <label className="grid gap-2">
            <span className="text-sm font-black text-[#16243d]">
              Delivery date
            </span>
            <input
              className="w-full border border-[#c9d7e9] bg-white px-3 py-3 text-sm font-medium text-[#16243d] outline-none focus:border-[#3e71b8]"
              defaultValue={new Date().toISOString().slice(0, 10)}
              name="date"
              type="date"
            />
            <p className="text-xs font-medium text-[#65718a]">
              Used for the published URL (month-day only). Defaults to today.
            </p>
          </label>

          <button
            className="w-full bg-[#f6b328] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-[#16243d] transition-colors hover:bg-[#e6a51d] disabled:cursor-not-allowed disabled:bg-[#d9e2ef] disabled:text-[#65718a]"
            disabled={submitting}
            type="submit"
          >
            {submitting ? "Publishing" : "Publish Deliverable"}
          </button>
        </div>
      </form>

      <section
        aria-live="polite"
        className="border border-[#d9e2ef] bg-white shadow-[0_18px_45px_rgba(30,62,108,0.09)]"
      >
        <div className="border-b border-[#d9e2ef] bg-[#18355f] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white">
          Output
        </div>
        <div className="grid gap-4 p-5">
          {error ? (
            <div className="grid gap-3 border-l-4 border-[#dc2626] bg-[#fef2f2] px-4 py-3 text-sm text-[#991b1b]">
              <p className="font-black">{error}</p>
            </div>
          ) : null}

          {result ? (
            <div className="grid gap-4">
              <div className="border-l-4 border-[#16a34a] bg-[#f0fdf4] px-4 py-3">
                <p className="text-sm font-black text-[#166534]">
                  Deliverable published.
                </p>
                <p className="mt-1 break-words text-xs font-bold text-[#166534]">
                  {result.url}
                </p>
              </div>

              <Link
                className="bg-[#3e71b8] px-4 py-3 text-center text-sm font-black uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#2f5f9f]"
                href={result.url}
                target="_blank"
              >
                View Deliverable
              </Link>
            </div>
          ) : null}

          {!submitting && !error && !result ? (
            <div className="border-l-4 border-[#f6b328] bg-[#fff8e8] px-4 py-3 text-sm font-bold text-[#6b4a00]">
              Awaiting HTML upload.
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
