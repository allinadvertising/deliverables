"use client";

import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { EnhanceLoadingStatus } from "@/components/shared/EnhanceLoadingStatus";
import {
  isEnhanceJob,
  parseEnhanceResponse,
  pollEnhancementJob,
  type ErrorPayload,
  type ProviderId,
} from "@/lib/enhance-client";

type EnhanceHtmlResult = {
  auditId: string;
  auditType: string;
  clientName: string;
  logId?: string;
  logPath?: string;
  model: string;
  provider: ProviderId;
  title: string;
};

type EnhanceError = {
  message: string;
  logId?: string;
  logPath?: string;
  providerRequestId?: string;
  providerResponsePath?: string;
  providerStatus?: number;
};

const defaultProvider: ProviderId = "openai";
const defaultModel = "gpt-5.6-sol";
const maxFileBytes = 8 * 1024 * 1024;

export default function EnhanceHtmlForm() {
  const [error, setError] = useState<EnhanceError | null>(null);
  const [jobId, setJobId] = useState<string | null>(null);
  const [result, setResult] = useState<EnhanceHtmlResult | null>(null);
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
    setJobId(null);
    setResult(null);
    setSubmitting(true);

    try {
      const response = await fetch("/api/html-enhancer", {
        body: new FormData(event.currentTarget),
        method: "POST",
      });
      const payload = await parseEnhanceResponse(response);

      if (!response.ok) {
        const errorPayload = payload as ErrorPayload;
        setError({
          logId: errorPayload.logId,
          logPath: errorPayload.logPath,
          message:
            errorPayload.error ||
            [
              "HTML enhancement failed before returning JSON.",
              errorPayload.responseStatus
                ? `HTTP ${errorPayload.responseStatus} ${errorPayload.responseStatusText ?? ""}`.trim()
                : "",
              errorPayload.rawBody
                ? `Response preview: ${errorPayload.rawBody}`
                : "",
            ]
              .filter(Boolean)
              .join(" "),
          providerRequestId: errorPayload.providerRequestId,
          providerResponsePath: errorPayload.providerResponsePath,
          providerStatus: errorPayload.providerStatus,
        });
        return;
      }

      if (response.status === 202 && isEnhanceJob(payload)) {
        setJobId(payload.jobId);
        const completed = await pollEnhancementJob(payload.jobId);

        if (completed.status === "completed" && completed.auditId) {
          setResult({
            auditId: completed.auditId,
            auditType: completed.auditType,
            clientName: completed.clientName,
            logId: completed.logId ?? undefined,
            model: completed.model,
            provider: completed.provider,
            title: completed.title,
          });
          event.currentTarget.reset();
          setFileName(null);
          setFileWarning(null);
          return;
        }

        setError({
          logId: completed.logId ?? undefined,
          message:
            completed.error ||
            "HTML enhancement failed before the job completed.",
        });
        return;
      }

      setResult(payload as EnhanceHtmlResult);
      event.currentTarget.reset();
      setFileName(null);
      setFileWarning(null);
    } catch (caughtError) {
      const message =
        caughtError instanceof Error
          ? caughtError.message
          : "HTML enhancement failed.";
      setError({
        message:
          message === "Failed to fetch"
            ? "The enhancement request connection closed before the server returned a response. On Vercel this usually means the /api/html-enhancer function exceeded its runtime limit. Check the Vercel function logs for /api/html-enhancer."
            : message,
      });
    } finally {
      setSubmitting(false);
      setJobId(null);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
      <form
        className="border border-[#d9e2ef] bg-white shadow-[0_18px_45px_rgba(30,62,108,0.09)]"
        onSubmit={handleSubmit}
      >
        <div className="border-b border-[#d9e2ef] bg-[#18355f] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white">
          HTML Source
        </div>

        <div className="grid gap-5 p-5 sm:p-6">
          <input name="provider" type="hidden" value={defaultProvider} />
          <input name="model" type="hidden" value={defaultModel} />

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
                Upload one self-contained .html file (inline styles, no
                external assets). It will be flattened into the portal&apos;s
                component design.
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
                placeholder="Optional"
                type="text"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-black text-[#16243d]">
                Audit type
              </span>
              <input
                className="w-full border border-[#c9d7e9] bg-white px-3 py-3 text-sm font-medium text-[#16243d] outline-none focus:border-[#3e71b8]"
                name="auditType"
                placeholder="Google Ads Audit"
                type="text"
              />
            </label>
          </div>

          <label className="grid gap-2">
            <span className="text-sm font-black text-[#16243d]">
              Supporting workbook link
            </span>
            <input
              className="w-full border border-[#c9d7e9] bg-white px-3 py-3 text-sm font-medium text-[#16243d] outline-none focus:border-[#3e71b8]"
              name="supportingWorkbookLink"
              placeholder="Optional"
              type="url"
            />
          </label>

          <details className="group border border-[#c9d7e9] bg-[#f8fbff]">
            <summary className="cursor-pointer select-none list-none px-4 py-3 text-sm font-black text-[#16243d] marker:content-none">
              <span className="mr-1 inline-block transition-transform group-open:rotate-90">
                &rsaquo;
              </span>
              Extra instructions (optional)
            </summary>
            <div className="border-t border-[#c9d7e9] px-4 py-4">
              <textarea
                className="w-full resize-y border border-[#c9d7e9] bg-white px-3 py-3 text-sm font-medium text-[#16243d] outline-none focus:border-[#3e71b8]"
                name="instructions"
                placeholder="Tone, sections to emphasize or exclude, terminology preferences..."
                rows={4}
              />
              <p className="mt-2 text-xs font-medium text-[#65718a]">
                Applied as styling and scope guidance on top of the standard
                flattening rules. Cannot change the output format or
                fabricate data.
              </p>
            </div>
          </details>

          <button
            className="w-full bg-[#f6b328] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-[#16243d] transition-colors hover:bg-[#e6a51d] disabled:cursor-not-allowed disabled:bg-[#d9e2ef] disabled:text-[#65718a]"
            disabled={submitting}
            type="submit"
          >
            {submitting ? "Enhancing Deliverable" : "Enhance Deliverable"}
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
          {submitting ? (
            <EnhanceLoadingStatus jobId={jobId} provider={defaultProvider} />
          ) : null}

          {error ? (
            <div className="grid gap-3 border-l-4 border-[#dc2626] bg-[#fef2f2] px-4 py-3 text-sm text-[#991b1b]">
              <p className="font-black">{error.message}</p>
              <div className="grid gap-1 break-words text-xs leading-5 text-[#7f1d1d]">
                {typeof error.providerStatus === "number" ? (
                  <span>Provider status: {error.providerStatus}</span>
                ) : null}
                {error.providerRequestId ? (
                  <span>Provider request: {error.providerRequestId}</span>
                ) : null}
                {error.logId ? <span>Log ID: {error.logId}</span> : null}
                {error.logPath ? <span>Log file: {error.logPath}</span> : null}
                {error.providerResponsePath ? (
                  <span>Raw response: {error.providerResponsePath}</span>
                ) : null}
              </div>
            </div>
          ) : null}

          {result ? (
            <div className="grid gap-4">
              <div className="border-l-4 border-[#16a34a] bg-[#f0fdf4] px-4 py-3">
                <p className="text-sm font-black text-[#166534]">
                  {result.title}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#475775]">
                  {result.provider} - {result.model}
                </p>
                {result.logId ? (
                  <p className="mt-2 break-words text-xs font-bold text-[#166534]">
                    Log ID: {result.logId}
                  </p>
                ) : null}
              </div>

              <Link
                className="bg-[#3e71b8] px-4 py-3 text-center text-sm font-black uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#2f5f9f]"
                href="/"
              >
                View in Dashboard
              </Link>

              <div className="grid gap-2 break-words border border-[#d9e2ef] bg-[#f8fbff] px-3 py-3 text-xs leading-5 text-[#65718a]">
                <span>Audit ID: {result.auditId}</span>
                <span>Client: {result.clientName}</span>
                <span>Type: {result.auditType}</span>
              </div>
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
