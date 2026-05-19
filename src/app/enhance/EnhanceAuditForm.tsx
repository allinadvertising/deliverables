"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

type ProviderId = "openai" | "deepseek";

type EnhanceResult = {
  auditId: string;
  auditType: string;
  clientName: string;
  logId?: string;
  logPath?: string;
  model: string;
  provider: ProviderId;
  shareToken?: string;
  title: string;
};

type EnhanceJob = {
  jobId: string;
  logId?: string;
  logPath?: string;
  model: string;
  provider: ProviderId;
  status: "running";
};

type EnhanceJobStatus = {
  auditId: string | null;
  auditType: string;
  clientName: string;
  error?: string | null;
  jobId: string;
  logId?: string | null;
  model: string;
  provider: ProviderId;
  status: "pending" | "running" | "completed" | "failed";
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

type ErrorPayload = {
  error?: string;
  logId?: string;
  logPath?: string;
  rawBody?: string;
  responseStatus?: number;
  responseStatusText?: string;
  providerRequestId?: string;
  providerResponsePath?: string;
  providerStatus?: number;
};

const defaultProvider: ProviderId = "openai";
const defaultModel = "gpt-5";

type LoadingPhase = {
  description: string;
  minSeconds: number;
  progress: number;
  title: string;
};

const loadingPhases: LoadingPhase[] = [
  {
    description: "Preparing the markdown payload and form metadata.",
    minSeconds: 0,
    progress: 12,
    title: "Preparing upload",
  },
  {
    description: "Validating the file and building the audit context.",
    minSeconds: 3,
    progress: 24,
    title: "Reading source audit",
  },
  {
    description: "Sending the body-only prompt to the selected provider.",
    minSeconds: 8,
    progress: 38,
    title: "Contacting model",
  },
  {
    description: "The model is generating the audit body sections.",
    minSeconds: 15,
    progress: 55,
    title: "Generating audit body",
  },
  {
    description: "Waiting for the provider response and checking completion.",
    minSeconds: 45,
    progress: 74,
    title: "Awaiting model output",
  },
  {
    description: "The request is still active. Large audits can take several minutes.",
    minSeconds: 90,
    progress: 88,
    title: "Still processing",
  },
];

export default function EnhanceAuditForm() {
  const [error, setError] = useState<EnhanceError | null>(null);
  const [jobId, setJobId] = useState<string | null>(null);
  const [result, setResult] = useState<EnhanceResult | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setJobId(null);
    setResult(null);
    setSubmitting(true);

    try {
      const response = await fetch("/api/audit-enhancer", {
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
              "Audit enhancement failed before returning JSON.",
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
          return;
        }

        setError({
          logId: completed.logId ?? undefined,
          message:
            completed.error ||
            "Audit enhancement failed before the job completed.",
        });
        return;
      }

      setResult(payload as EnhanceResult);
      event.currentTarget.reset();
    } catch (caughtError) {
      const message =
        caughtError instanceof Error
          ? caughtError.message
          : "Audit enhancement failed.";
      setError({
        message:
          message === "Failed to fetch"
            ? "The enhancement request connection closed before the server returned a response. On Vercel this usually means the /api/audit-enhancer function exceeded its runtime limit. Check the Vercel function logs for /api/audit-enhancer."
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
          Markdown Source
        </div>

        <div className="grid gap-5 p-5 sm:p-6">
          <input name="provider" type="hidden" value={defaultProvider} />
          <input name="model" type="hidden" value={defaultModel} />

          <label className="grid gap-2">
            <span className="text-sm font-black text-[#16243d]">
              Audit file
            </span>
            <input
              accept=".md,.markdown,text/markdown,text/plain"
              className="w-full border border-[#c9d7e9] bg-[#f8fbff] px-3 py-3 text-sm font-medium text-[#16243d] file:mr-4 file:border-0 file:bg-[#3e71b8] file:px-4 file:py-2 file:text-sm file:font-black file:text-white"
              name="file"
              required
              type="file"
            />
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
                placeholder="Technical SEO Audit"
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

          <button
            className="w-full bg-[#f6b328] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-[#16243d] transition-colors hover:bg-[#e6a51d] disabled:cursor-not-allowed disabled:bg-[#d9e2ef] disabled:text-[#65718a]"
            disabled={submitting}
            type="submit"
          >
            {submitting ? "Enhancing Audit" : "Enhance Audit"}
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
            <LoadingStatus jobId={jobId} provider={defaultProvider} />
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
              Awaiting markdown upload.
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}

async function parseEnhanceResponse(response: Response) {
  const text = await response.text();

  if (!text.trim()) {
    return {
      error:
        "The server returned an empty response. Check the Vercel function logs for /api/audit-enhancer.",
      responseStatus: response.status,
      responseStatusText: response.statusText,
    } satisfies ErrorPayload;
  }

  try {
    return JSON.parse(text) as EnhanceResult | EnhanceJob | ErrorPayload;
  } catch {
    return {
      error:
        "The server returned a non-JSON response. Check the Vercel function logs for /api/audit-enhancer.",
      rawBody: text.slice(0, 500),
      responseStatus: response.status,
      responseStatusText: response.statusText,
    } satisfies ErrorPayload;
  }
}

function isEnhanceJob(payload: unknown): payload is EnhanceJob {
  return (
    Boolean(payload) &&
    typeof payload === "object" &&
    typeof (payload as { jobId?: unknown }).jobId === "string"
  );
}

async function pollEnhancementJob(jobId: string): Promise<EnhanceJobStatus> {
  const startedAt = Date.now();
  const timeoutMs = 14 * 60 * 1000;

  while (Date.now() - startedAt < timeoutMs) {
    await sleep(3000);

    const response = await fetch(
      `/api/audit-enhancer/status?runId=${encodeURIComponent(jobId)}`,
      { cache: "no-store" },
    );
    const payload = (await parseEnhanceResponse(response)) as
      | EnhanceJobStatus
      | ErrorPayload;

    if (!response.ok) {
      throw new Error(
        (payload as ErrorPayload).error ||
          `Enhancement status request failed with HTTP ${response.status}.`,
      );
    }

    const status = payload as EnhanceJobStatus;

    if (status.status === "completed" || status.status === "failed") {
      return status;
    }
  }

  throw new Error(
    "Enhancement is still running after 14 minutes. Refresh the dashboard or check Vercel logs for the background job.",
  );
}

function sleep(milliseconds: number) {
  return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
}

function LoadingStatus({
  jobId,
  provider,
}: {
  jobId: string | null;
  provider: ProviderId;
}) {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const phase = getLoadingPhase(elapsedSeconds);
  const progress = Math.min(
    96,
    phase.progress + Math.floor((elapsedSeconds - phase.minSeconds) / 8),
  );
  const providerLabel = provider === "openai" ? "OpenAI" : "DeepSeek";

  useEffect(() => {
    const startedAt = Date.now();
    const intervalId = window.setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - startedAt) / 1000));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div
      aria-live="polite"
      className="grid gap-4 border-l-4 border-[#3e71b8] bg-[#eff5fd] px-4 py-4 text-sm text-[#18355f]"
      role="status"
    >
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className="mt-0.5 inline-flex h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-[#b7cce8] border-t-[#3e71b8]"
        />
        <div className="min-w-0">
          <p className="font-black">{phase.title}</p>
          <p className="mt-1 text-xs font-bold leading-5 text-[#475775]">
            {phase.description}
          </p>
          {jobId ? (
            <p className="mt-2 break-all text-[11px] font-black uppercase tracking-[0.08em] text-[#65718a]">
              Job ID: {jobId}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-2">
        <div className="h-2 overflow-hidden bg-[#d9e7f7]">
          <div
            className="h-full bg-[#3e71b8] transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between gap-3 text-[11px] font-black uppercase tracking-[0.12em] text-[#65718a]">
          <span>{providerLabel} job active</span>
          <span>{formatElapsed(elapsedSeconds)}</span>
        </div>
      </div>

      <div className="flex gap-1" aria-hidden="true">
        {[0, 1, 2].map((index) => (
          <span
            className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#3e71b8]"
            key={index}
            style={{ animationDelay: `${index * 160}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

function getLoadingPhase(elapsedSeconds: number) {
  let activePhase = loadingPhases[0];

  for (const phase of loadingPhases) {
    if (elapsedSeconds >= phase.minSeconds) {
      activePhase = phase;
    }
  }

  return activePhase;
}

function formatElapsed(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}
