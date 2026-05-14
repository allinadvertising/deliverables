import { readdir, stat } from "node:fs/promises";
import Image from "next/image";
import path from "node:path";

type Audit = {
  href: string;
  title: string;
  client: string;
  period: string;
  pathLabel: string;
  updatedAt: string;
  updatedTime: number;
  size: string;
};

const auditsRoot = path.join(process.cwd(), "audits");

async function findAuditIndexes(directory: string): Promise<string[]> {
  let entries;

  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }

  const nestedFiles = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        return findAuditIndexes(fullPath);
      }

      if (entry.isFile() && entry.name.toLowerCase() === "index.html") {
        return [fullPath];
      }

      return [];
    }),
  );

  return nestedFiles.flat();
}

function titleCase(value: string) {
  return value
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function formatBytes(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  const kilobytes = bytes / 1024;
  if (kilobytes < 1024) {
    return `${kilobytes.toFixed(1)} KB`;
  }

  return `${(kilobytes / 1024).toFixed(1)} MB`;
}

async function getAudits(): Promise<Audit[]> {
  const files = await findAuditIndexes(auditsRoot);
  const audits = await Promise.all(
    files.map(async (file) => {
      const relativePath = path.relative(auditsRoot, file);
      const parts = relativePath.split(path.sep);
      const stats = await stat(file);
      const auditFolder = parts.at(-2) ?? "audit";
      const href =
        "/audits/" + parts.map((part) => encodeURIComponent(part)).join("/");
      const month = parts[2] ? titleCase(parts[2]) : "";
      const year = parts[1] ?? "";

      return {
        href,
        title: titleCase(auditFolder),
        client: parts[0] ? parts[0].toUpperCase() : "GENERAL",
        period: [month, year].filter(Boolean).join(" ") || "Current",
        pathLabel: parts.slice(0, -1).join(" / "),
        updatedAt: new Intl.DateTimeFormat("en", {
          dateStyle: "medium",
          timeZone: "UTC",
        }).format(stats.mtime),
        updatedTime: stats.mtimeMs,
        size: formatBytes(stats.size),
      };
    }),
  );

  return audits.sort((first, second) => second.updatedTime - first.updatedTime);
}

export default async function Home() {
  const audits = await getAudits();
  const clientCount = new Set(audits.map((audit) => audit.client)).size;

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0,#f6f8fb_42%,#eef3fa_100%)] text-[#16243d]">
      <div className="border-b border-[#d9e2ef] bg-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-10">
          <Image
            src="/all-in-advertising-logo.svg"
            alt="All In Advertising"
            width={260}
            height={53}
            priority
            className="h-auto w-48 max-w-[68vw] sm:w-56"
          />
          <div className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#3e71b8] sm:flex">
            <span className="h-2 w-2 bg-[#f6b328]" aria-hidden="true" />
            Client Portal
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-8 sm:px-8 lg:px-10">
        <header className="grid gap-8 border-b border-[#d9e2ef] pb-8 lg:grid-cols-[1fr_360px] lg:items-end">
          <div className="max-w-4xl">
            <p className="mb-4 inline-flex border border-[#c9d7e9] bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#3e71b8] shadow-sm">
              Boutique strategy. Major ROI.
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.04] text-[#16243d] sm:text-5xl lg:text-6xl">
              Revenue-focused audit delivery.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#65718a] sm:text-lg">
              A clean workspace for technical SEO, analytics, paid media, and
              conversion deliverables that turn traffic into measurable growth.
            </p>
          </div>

          <div className="grid grid-cols-2 border border-[#d9e2ef] bg-white shadow-[0_18px_45px_rgba(30,62,108,0.09)]">
            <div className="border-r border-[#d9e2ef] p-5">
              <p className="text-4xl font-black text-[#3e71b8]">
                {audits.length}
              </p>
              <p className="mt-1 text-sm font-medium text-[#65718a]">
                Published audits
              </p>
            </div>
            <div className="p-5">
              <p className="text-4xl font-black text-[#f6b328]">
                {clientCount}
              </p>
              <p className="mt-1 text-sm font-medium text-[#65718a]">
                Client workspaces
              </p>
            </div>
          </div>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Authentic partnership",
            "Revenue-focused growth",
            "Strategic innovation",
            "Performance clarity",
          ].map((value) => (
            <div
              key={value}
              className="border-l-4 border-[#f6b328] bg-white px-4 py-3 text-sm font-bold text-[#16243d] shadow-sm"
            >
              {value}
            </div>
          ))}
        </section>

        <section aria-labelledby="audit-list-title" className="pb-12">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="audit-list-title"
                className="text-2xl font-black text-[#16243d]"
              >
                Available Audits
              </h2>
              
            </div>
            <div className="h-1 w-28 bg-[#f6b328]" aria-hidden="true" />
          </div>

          {audits.length > 0 ? (
            <div className="overflow-hidden border border-[#d9e2ef] bg-white shadow-[0_18px_45px_rgba(30,62,108,0.09)]">
              <div className="hidden grid-cols-[1.4fr_0.7fr_0.7fr_0.8fr_0.5fr] gap-4 border-b border-[#d9e2ef] bg-[#18355f] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white md:grid">
                <span>Audit</span>
                <span>Client</span>
                <span>Period</span>
                <span>Updated</span>
                <span className="text-right">Size</span>
              </div>

              <div className="divide-y divide-[#e6edf6]">
                {audits.map((audit) => (
                  <a
                    key={audit.href}
                    href={audit.href}
                    className="grid gap-3 px-5 py-4 transition-colors hover:bg-[#f7fbff] md:grid-cols-[1.4fr_0.7fr_0.7fr_0.8fr_0.5fr] md:items-center"
                  >
                    <span>
                      <span className="block text-base font-black text-[#16243d]">
                        {audit.title}
                      </span>
                      <span className="mt-1 block break-words text-sm text-[#65718a]">
                        {audit.pathLabel}
                      </span>
                    </span>
                    <span className="w-fit border border-[#c9d7e9] bg-[#eff5fd] px-2 py-1 text-xs font-black text-[#3e71b8]">
                      {audit.client}
                    </span>
                    <span className="text-sm font-medium text-[#475775]">
                      {audit.period}
                    </span>
                    <span className="text-sm text-[#65718a]">
                      {audit.updatedAt}
                    </span>
                    <span className="text-sm text-[#65718a] md:text-right">
                      {audit.size}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <div className="border border-[#d9e2ef] bg-white px-5 py-8 text-[#65718a] shadow-sm">
              No audit deliverables are available.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
