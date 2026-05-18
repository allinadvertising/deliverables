// Seed script: reads existing audit HTML files from public/ and populates
// the Supabase clients + audits tables. Run with:
//   npx tsx scripts/seed-supabase.ts

import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY env vars.",
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
const publicRoot = path.join(process.cwd(), "public");
const ignoredHtmlFiles = new Set([
  "audit-body.html",
  "footer-template.html",
  "header-template.html",
]);

async function findAuditHtmlFiles(dir: string): Promise<string[]> {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return [];
  }

  const results = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return findAuditHtmlFiles(fullPath);
      if (
        entry.isFile() &&
        entry.name.toLowerCase().endsWith(".html") &&
        !ignoredHtmlFiles.has(entry.name.toLowerCase())
      ) {
        return [fullPath];
      }
      return [];
    }),
  );

  return results.flat();
}

function parseAuditParts(relativePath: string) {
  const parts = relativePath.split(path.sep);

  if (parts[0] === "audits") {
    return {
      auditType: parts.at(-1)?.toLowerCase() === "index.html"
        ? toTitle(stripHtml(parts.at(-2) ?? "audit"))
        : toTitle(stripHtml(parts.at(-1) ?? "audit")),
      clientSlug: parts[1] ?? "general",
      month: parts[3] ?? "",
      year: parts[2] ?? "",
    };
  }

  return {
    auditType: toTitle(stripHtml(parts.at(-1) ?? "audit")),
    clientSlug: parts[0] ?? "general",
    month: parts[2] ?? "",
    year: parts[1] ?? "",
  };
}

function stripHtml(s: string) {
  return s.replace(/\.html$/i, "");
}

function toTitle(s: string) {
  return s
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function toSlug(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function main() {
  console.log("Scanning public/ for audit HTML files...");
  const files = await findAuditHtmlFiles(publicRoot);
  console.log(`Found ${files.length} audit HTML files.\n`);

  const clientCache = new Map<string, string>(); // slug → id

  for (const file of files) {
    const relativePath = path.relative(publicRoot, file);
    const { auditType, clientSlug, year, month } = parseAuditParts(relativePath);
    const stats = await stat(file);

    // Ensure client exists
    let clientId = clientCache.get(clientSlug);
    if (!clientId) {
      const { data: existing } = await supabase
        .from("clients")
        .select("id")
        .eq("slug", clientSlug)
        .maybeSingle();

      if (existing) {
        clientId = existing.id as string;
      } else {
        const { data: created, error: createErr } = await supabase
          .from("clients")
          .insert({
            slug: clientSlug,
            name: clientSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
          })
          .select("id")
          .single();

        if (createErr) {
          console.error(`  ✗ Failed to create client "${clientSlug}":`, createErr.message);
          continue;
        }
        clientId = created!.id;
        console.log(`  ✓ Created client: ${clientSlug}`);
      }

      clientCache.set(clientSlug, clientId!);
    }

    // Check for existing audit by file_path to avoid duplicates
    const { data: existingAudit } = await supabase
      .from("audits")
      .select("id")
      .eq("file_path", relativePath)
      .maybeSingle();

    if (existingAudit) {
      console.log(`  ○ Skipped (exists): ${relativePath}`);
      continue;
    }

    const { error: insertErr } = await supabase.from("audits").insert({
      client_id: clientId,
      audit_type: auditType,
      title: auditType,
      year: Number(year) || new Date().getFullYear(),
      month: month || "",
      file_path: relativePath,
      file_size: stats.size,
      created_at: stats.birthtime.toISOString(),
      updated_at: stats.mtime.toISOString(),
    });

    if (insertErr) {
      console.error(`  ✗ Failed to insert "${relativePath}":`, insertErr.message);
    } else {
      console.log(`  ✓ Seeded: ${relativePath}`);
    }
  }

  console.log("\nSeed complete.");
}

main().catch(console.error);
