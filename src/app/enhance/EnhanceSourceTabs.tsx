"use client";

import { useState } from "react";
import EnhanceAuditForm from "./EnhanceAuditForm";
import EnhanceHtmlDirectForm from "./EnhanceHtmlDirectForm";

type SourceType = "markdown" | "html";

export default function EnhanceSourceTabs() {
  const [source, setSource] = useState<SourceType>("markdown");

  return (
    <div className="grid gap-6">
      <div
        className="inline-flex w-fit border border-[#d9e2ef] bg-white shadow-sm"
        role="tablist"
      >
        <TabButton
          active={source === "markdown"}
          label="Markdown"
          onClick={() => setSource("markdown")}
        />
        <TabButton
          active={source === "html"}
          label="HTML"
          onClick={() => setSource("html")}
        />
      </div>

      {source === "markdown" ? <EnhanceAuditForm /> : <EnhanceHtmlDirectForm />}
    </div>
  );
}

function TabButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      aria-selected={active}
      className={`px-5 py-2.5 text-xs font-black uppercase tracking-[0.12em] transition-colors ${
        active
          ? "bg-[#18355f] text-white"
          : "bg-white text-[#65718a] hover:text-[#18355f]"
      }`}
      onClick={onClick}
      role="tab"
      type="button"
    >
      {label}
    </button>
  );
}
