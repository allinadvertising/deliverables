import { readdir, stat } from "node:fs/promises";
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
    <main className="min-h-screen bg-[#f7f8f5] text-[#17201a]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-8 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-6 border-b border-[#d8ded5] pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase text-[#4a6d54]">
              All In Advertising
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Audit Deliverables
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#546156]">
              Published SEO, analytics, and technical audit files for client
              review.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:w-80">
            <div className="border-l-4 border-[#2f7d55] bg-white px-4 py-3 shadow-sm">
              <p className="text-3xl font-semibold">{audits.length}</p>
              <p className="text-sm text-[#546156]">Audits</p>
            </div>
            <div className="border-l-4 border-[#2e6f9e] bg-white px-4 py-3 shadow-sm">
              <p className="text-3xl font-semibold">{clientCount}</p>
              <p className="text-sm text-[#546156]">Clients</p>
            </div>
          </div>
        </header>

        <section aria-labelledby="audit-list-title" className="pb-12">
          <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="audit-list-title" className="text-xl font-semibold">
                Available Audits
              </h2>
              <p className="text-sm text-[#667167]">
                Static HTML deliverables synced from the audits folder.
              </p>
            </div>
          </div>

          {audits.length > 0 ? (
            <div className="overflow-hidden border border-[#d8ded5] bg-white shadow-sm">
              <div className="hidden grid-cols-[1.4fr_0.7fr_0.7fr_0.8fr_0.5fr] gap-4 border-b border-[#d8ded5] bg-[#eef2ea] px-5 py-3 text-xs font-semibold uppercase text-[#546156] md:grid">
                <span>Audit</span>
                <span>Client</span>
                <span>Period</span>
                <span>Updated</span>
                <span className="text-right">Size</span>
              </div>

              <div className="divide-y divide-[#e5e9e1]">
                {audits.map((audit) => (
                  <a
                    key={audit.href}
                    href={audit.href}
                    className="grid gap-3 px-5 py-4 transition-colors hover:bg-[#f2f6ef] md:grid-cols-[1.4fr_0.7fr_0.7fr_0.8fr_0.5fr] md:items-center"
                  >
                    <span>
                      <span className="block text-base font-semibold text-[#17201a]">
                        {audit.title}
                      </span>
                      <span className="mt-1 block break-words text-sm text-[#667167]">
                        {audit.pathLabel}
                      </span>
                    </span>
                    <span className="text-sm font-semibold text-[#2f5f43]">
                      {audit.client}
                    </span>
                    <span className="text-sm text-[#546156]">
                      {audit.period}
                    </span>
                    <span className="text-sm text-[#546156]">
                      {audit.updatedAt}
                    </span>
                    <span className="text-sm text-[#546156] md:text-right">
                      {audit.size}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <div className="border border-[#d8ded5] bg-white px-5 py-8 text-[#546156] shadow-sm">
              No audit deliverables are available.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
