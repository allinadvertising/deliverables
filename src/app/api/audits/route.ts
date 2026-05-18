import { readdir, rm, rmdir, stat } from "node:fs/promises";
import path from "node:path";
import { deleteAuditByFilePath } from "@/lib/db";
import { createClient } from "@/lib/supabase-middleware";
import { supabaseServer } from "@/lib/supabase-server";

export const runtime = "nodejs";

const publicRoot = path.join(
  /* turbopackIgnore: true */ process.cwd(),
  "public",
);
const protectedHtmlFiles = new Set([
  "audit-body.html",
  "footer-template.html",
  "header-template.html",
]);

export async function DELETE(request: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  try {
    const payload = (await request.json()) as { href?: unknown };
    const href = typeof payload.href === "string" ? payload.href : "";

    if (!href) {
      return Response.json({ error: "Missing audit href." }, { status: 400 });
    }

    const target = resolvePublicHtmlPath(href);
    const baseName = path.basename(target).toLowerCase();

    if (protectedHtmlFiles.has(baseName)) {
      return Response.json(
        { error: "This audit artifact cannot be deleted directly." },
        { status: 400 },
      );
    }

    // Check ownership
    if (user) {
      const relativePath = path.relative(publicRoot, target);
      const { data: audit } = await supabaseServer
        .from("audits")
        .select("owner_id")
        .eq("file_path", relativePath)
        .maybeSingle();

      if (audit && audit.owner_id && audit.owner_id !== user.id) {
        return Response.json(
          { error: "You can only delete your own audits." },
          { status: 403 },
        );
      }
    }

    const targetStats = await stat(target);

    if (!targetStats.isFile()) {
      return Response.json({ error: "Audit file not found." }, { status: 404 });
    }

    // Delete from Supabase
    const relativePath = path.relative(publicRoot, target);
    await deleteAuditByFilePath(relativePath);

    // Delete files
    await rm(target);
    await removeGeneratedCompanions(path.dirname(target));
    await pruneEmptyDirectories(path.dirname(target));

    return Response.json({ ok: true });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return Response.json({ error: "Audit file not found." }, { status: 404 });
    }

    if (error instanceof Error && error.message === "invalid-path") {
      return Response.json({ error: "Invalid audit path." }, { status: 400 });
    }

    console.error(error);

    return Response.json(
      { error: "Audit deletion failed unexpectedly." },
      { status: 500 },
    );
  }
}

function resolvePublicHtmlPath(href: string) {
  let pathname: string;

  try {
    pathname = new URL(href, "http://local").pathname;
  } catch {
    throw new Error("invalid-path");
  }

  const decodedPath = decodeURIComponent(pathname);

  if (
    !decodedPath.startsWith("/") ||
    decodedPath.includes("\0") ||
    !decodedPath.toLowerCase().endsWith(".html")
  ) {
    throw new Error("invalid-path");
  }

  const parts = decodedPath.split("/").filter(Boolean);

  if (
    parts.length === 0 ||
    parts.some(
      (part) =>
        part === "." ||
        part === ".." ||
        part.includes("\\") ||
        path.isAbsolute(part),
    )
  ) {
    throw new Error("invalid-path");
  }

  const target = path.join(/* turbopackIgnore: true */ publicRoot, ...parts);
  assertInside(target, publicRoot);

  return target;
}

async function removeGeneratedCompanions(directory: string) {
  const companionNames = ["audit-body.html", "audit-meta.json"];

  await Promise.all(
    companionNames.map(async (name) => {
      const target = path.join(/* turbopackIgnore: true */ directory, name);
      assertInside(target, publicRoot);
      await rm(target, { force: true });
    }),
  );
}

async function pruneEmptyDirectories(startDirectory: string) {
  let current = startDirectory;

  while (isInside(current, publicRoot) && current !== publicRoot) {
    const entries = await readdir(current);

    if (entries.length > 0) {
      return;
    }

    await rmdir(current);
    current = path.dirname(current);
  }
}

function assertInside(child: string, parent: string) {
  if (!isInside(child, parent)) {
    throw new Error("invalid-path");
  }
}

function isInside(child: string, parent: string) {
  const relative = path.relative(parent, child);

  return Boolean(relative) && !relative.startsWith("..") && !path.isAbsolute(relative);
}
