import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { supabaseServer } from "@/lib/supabase-server";
import { createClient } from "@/lib/supabase-middleware";
import { NavBar } from "@/components/NavBar";
import { AuditAssembly } from "@/components/audit/AuditAssembly";
import { isAuditContent, type AuditContent } from "@/lib/audit/types";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const { data: audit } = await supabaseServer
    .from("audits")
    .select("title, audit_type, client_name:clients(name)")
    .eq("id", id)
    .maybeSingle();

  if (!audit) return { title: "Audit Not Found" };

  const clientName =
    (audit.client_name as { name?: string } | null)?.name ?? audit.title;
  const auditType = audit.audit_type as string ?? "SEO Audit";

  return {
    title: `${clientName} : ${auditType}`,
    description: `${auditType} deliverable for ${clientName}.`,
  };
}

export default async function DashboardAuditPage({ params }: Props) {
  const { id } = await params;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    notFound();
  }

  const { data: audit } = await supabaseServer
    .from("audits")
    .select("id, content, owner_id")
    .eq("id", id)
    .maybeSingle();

  if (!audit) {
    notFound();
  }

  // Ownership check
  if (audit.owner_id && audit.owner_id !== user.id) {
    notFound();
  }

  const content = audit.content as AuditContent | null;

  if (!isAuditContent(content)) {
    notFound();
  }

  return (
    <>
      <NavBar />
      <AuditAssembly content={content} />
    </>
  );
}
