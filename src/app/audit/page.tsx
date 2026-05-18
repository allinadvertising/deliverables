import { createHash } from "node:crypto";
import { headers } from "next/headers";
import type { Metadata } from "next";
import { supabaseServer } from "@/lib/supabase-server";
import { AuditAssembly } from "@/components/audit/AuditAssembly";
import type { AuditContent } from "@/lib/audit/types";

export const dynamic = "force-dynamic";

type Props = {
  searchParams: Promise<{ token?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { token } = await searchParams;

  if (!token) {
    return { title: "Audit Not Found" };
  }

  const { data: audit } = await supabaseServer
    .from("audits")
    .select("title, client_name:clients(name)")
    .eq("share_token", token)
    .maybeSingle();

  if (!audit) {
    return { title: "Audit Not Found" };
  }

  const clientName = (audit.client_name as { name?: string } | null)?.name ?? audit.title;

  return {
    title: `${clientName} — SEO Audit`,
    description: `SEO audit deliverable for ${clientName}.`,
    robots: "noindex, nofollow",
  };
}

export default async function PublicAuditPage({ searchParams }: Props) {
  const { token } = await searchParams;

  if (!token) {
    return <AuditNotFound />;
  }

  const { data: audit } = await supabaseServer
    .from("audits")
    .select("id, content")
    .eq("share_token", token)
    .maybeSingle();

  if (!audit) {
    return <AuditNotFound />;
  }

  // Track the view (best-effort, fire-and-forget)
  trackView(audit.id as string).catch(() => {});

  const jsonContent = audit.content as AuditContent | null;

  if (!jsonContent || !isValidAuditContent(jsonContent)) {
    return <AuditNotMigrated />;
  }

  return <AuditAssembly content={jsonContent} />;
}

function isValidAuditContent(content: unknown): content is AuditContent {
  if (!content || typeof content !== "object") return false;
  const c = content as Record<string, unknown>;
  return (
    typeof c.meta === "object" &&
    c.meta !== null &&
    typeof c.executiveSummary === "object" &&
    Array.isArray(c.actionItems) &&
    Array.isArray(c.findings) &&
    Array.isArray(c.solutions)
  );
}

function AuditNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#ffffff_0,#f6f8fb_42%,#eef3fa_100%)] px-5">
      <div className="border border-[#d9e2ef] bg-white px-8 py-10 text-center shadow-[0_18px_45px_rgba(30,62,108,0.09)]">
        <div className="mb-4 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#c9d7e9] bg-[#eff5fd]">
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-[#65718a]"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
              <path d="M9 9h.01M15 9h.01" />
            </svg>
          </div>
        </div>
        <h1 className="text-lg font-bold text-[#16243d]">Audit Not Found</h1>
        <p className="mt-2 text-sm text-[#65718a]">
          The link may have expired or been revoked. Contact the audit owner for
          an updated link.
        </p>
      </div>
    </main>
  );
}

function AuditNotMigrated() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#ffffff_0,#f6f8fb_42%,#eef3fa_100%)] px-5">
      <div className="border border-[#d9e2ef] bg-white px-8 py-10 text-center shadow-[0_18px_45px_rgba(30,62,108,0.09)]">
        <div className="mb-4 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#f6b328] bg-[#fef7e8]">
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-[#d4950a]"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
          </div>
        </div>
        <h1 className="text-lg font-bold text-[#16243d]">Audit Not Found</h1>
        <p className="mt-2 text-sm text-[#65718a]">
          The link may have expired or been revoked. Contact the audit owner for
          an updated link.
        </p>
      </div>
    </main>
  );
}

async function trackView(auditId: string) {
  try {
    const headersList = await headers();
    const forwarded = headersList.get("x-forwarded-for");
    const rawIp = forwarded?.split(",")[0]?.trim() ?? "unknown";
    const ipHash = createHash("sha256").update(rawIp).digest("hex").slice(0, 16);
    const userAgent = headersList.get("user-agent") ?? "";

    await supabaseServer.from("audit_views").insert({
      audit_id: auditId,
      ip_hash: ipHash,
      user_agent: userAgent.slice(0, 500),
    });
  } catch {
    // View tracking is best-effort
  }
}
