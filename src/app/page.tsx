import { getAudits } from "@/lib/db";
import { createClient } from "@/lib/supabase-middleware";
import { NavBar } from "@/components/NavBar";
import DeleteAuditButton from "./DeleteAuditButton";
import EditAuditButton from "./EditAuditButton";
import ShareButton from "./ShareButton";

export const dynamic = "force-dynamic";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const audits = await getAudits(user?.id);
  const clientCount = new Set(audits.map((audit) => audit.client)).size;

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0,#f6f8fb_42%,#eef3fa_100%)] text-[#16243d]">
      <NavBar />

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
              <div className="hidden grid-cols-[1.4fr_0.7fr_0.7fr_0.8fr_0.3fr_0.3fr_132px] gap-4 border-b border-[#d9e2ef] bg-[#18355f] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white md:grid">
                <span>Audit</span>
                <span>Client</span>
                <span>Period</span>
                <span>Updated</span>
                <span className="text-right">Size</span>
                <span className="text-right">Views</span>
                <span className="sr-only">Actions</span>
              </div>

              <div className="divide-y divide-[#e6edf6]">
                {audits.map((audit) => (
                  <div
                    key={audit.id}
                    className="grid gap-3 px-5 py-4 transition-colors hover:bg-[#f7fbff] md:grid-cols-[1.4fr_0.7fr_0.7fr_0.8fr_0.3fr_0.3fr_132px] md:items-center"
                  >
                    <a href={`/dashboard/audits/${audit.id}`} className="block">
                      <span className="block text-base font-black text-[#16243d]">
                        {audit.title}
                      </span>
                      <span className="mt-1 block break-words text-sm text-[#65718a]">
                        {audit.pathLabel}
                      </span>
                    </a>
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
                    <span className="text-sm text-[#65718a] md:text-right">
                      {audit.views > 0 ? audit.views : ":"}
                    </span>
                    <div className="flex justify-start gap-1.5 md:justify-end">
                      <ShareButton
                        auditId={audit.id}
                        hasToken={audit.hasToken}
                        title={`${audit.client} ${audit.title}`}
                      />
                      <EditAuditButton
                        auditId={audit.id}
                        supportingWorkbookLink={audit.supportingWorkbookLink}
                        title={`${audit.client} ${audit.title}`}
                      />
                      <DeleteAuditButton
                        auditId={audit.id}
                        title={`${audit.client} ${audit.title}`}
                      />
                    </div>
                  </div>
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
