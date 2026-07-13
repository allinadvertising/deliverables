"use client";

import { useEffect, useState } from "react";
import type { ProviderId } from "@/lib/enhance-client";

type LoadingPhase = {
  description: string;
  minSeconds: number;
  progress: number;
  title: string;
};

const loadingPhases: LoadingPhase[] = [
  {
    description: "Preparing the upload payload and form metadata.",
    minSeconds: 0,
    progress: 12,
    title: "Preparing upload",
  },
  {
    description: "Validating the file and building the audit context.",
    minSeconds: 3,
    progress: 24,
    title: "Reading source",
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

export function EnhanceLoadingStatus({
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
