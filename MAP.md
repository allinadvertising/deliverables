# Codebase Map — All In Advertising Audit Portal

> Agent reference document. Read this before touching any file.
> Keep it updated when you change structure, add routes, or alter data models.

---

## What This App Does

Internal portal for **All In Advertising** staff to:
1. Upload raw `.md` SEO audit files and convert them to structured JSON via an AI pipeline (OpenAI or DeepSeek).
2. Upload self-contained `.html` deliverables (any tool's export) and flatten them into the same on-brand component design via an LLM pipeline that produces a `blocks[]` array (schemaVersion 3) instead of arbitrary markup. **Legacy path as of 2026-07-15** — still fully functional for existing schemaVersion-3 audits, but no longer the active upload UI (see #3).
3. Publish self-contained `.html` deliverables directly — no LLM involved. The upload is served close to verbatim at a path-based route (`/html-audits/<client-slug>/<mm-dd>/<audit-slug>`) with only a brand CSS stylesheet injected into `<head>`. This is the active HTML upload path (`src/lib/brand-html.ts`, `/api/html-audits`) and a separate, parallel pipeline from #2 — it does not touch the `audits` table, `AuditContent` schema, or `AuditAssembly` renderer.
4. Manage the resulting audit deliverables: view, share, edit (or, for HTML-sourced audits, re-run the LLM against the current content with new instructions instead of starting over), and delete.
5. Share audits with clients via an unguessable token URL — no client login required (except direct HTML deliverables, which use a human-readable path instead of a token — see Routes).

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 16.2.6** (App Router) — **breaking changes from prior versions; read `node_modules/next/dist/docs/` before writing code** |
| Runtime | React 19.2.4 |
| Database + Auth | **Supabase** (`@supabase/ssr` + `@supabase/supabase-js`) |
| Styling | **Tailwind CSS v4** + PostCSS (import syntax: `@import "tailwindcss"`) |
| Language | TypeScript 5 |
| Fonts | Inter (UI) + JetBrains Mono (code) via `next/font/google` |
| AI Providers | OpenAI Responses API + DeepSeek Chat Completions |
| Deployment | Vercel (assumed; `process.env.VERCEL` is checked in code) |

---

## Directory Structure

```
deliverables/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout: wraps everything in <AuthProvider>
│   │   ├── page.tsx                  # Dashboard (/) — lists all audits + direct HTML deliverables, auth-gated
│   │   ├── globals.css               # Tailwind v4 import + audit design system CSS classes
│   │   ├── robots.ts                 # robots.txt: disallows /audit, /html-audits, /enhance, /api
│   │   ├── AuditList.tsx             # "use client" — dashboard table + All/Markdown/HTML/Legacy filter (LLM-sourced audits)
│   │   ├── HtmlAuditList.tsx         # Server — dashboard table for direct (no-LLM) HTML deliverables
│   │   ├── DeleteHtmlAuditButton.tsx # "use client" — delete a direct HTML deliverable with confirm dialog
│   │   ├── ShareButton.tsx           # "use client" — share token modal
│   │   ├── DeleteAuditButton.tsx     # "use client" — delete with confirm dialog
│   │   ├── EditAuditButton.tsx       # "use client" — branches on sourceType: workbook-link modal (markdown/legacy) or revise modal (html)
│   │   ├── html-audits/
│   │   │   └── [clientSlug]/[dateSlug]/[auditSlug]/route.ts # GET: serve a published direct HTML deliverable as raw text/html (public, no auth)
│   │   ├── login/
│   │   │   ├── page.tsx              # Login form (email + password, Supabase auth)
│   │   │   └── loading.tsx
│   │   ├── audit/
│   │   │   ├── page.tsx              # Public viewer (/audit?token=xxx) — no auth
│   │   │   ├── loading.tsx
│   │   │   └── error.tsx
│   │   ├── dashboard/audits/[id]/
│   │   │   └── page.tsx              # Authenticated viewer (/dashboard/audits/:id)
│   │   ├── enhance/
│   │   │   ├── page.tsx              # Enhance page shell (server component)
│   │   │   ├── EnhanceSourceTabs.tsx # "use client" — Markdown/HTML tab toggle; HTML tab renders EnhanceHtmlDirectForm
│   │   │   ├── EnhanceAuditForm.tsx  # "use client" — markdown upload + poll UI
│   │   │   ├── EnhanceHtmlDirectForm.tsx # "use client" — direct HTML upload (client/title/date only, no AI, synchronous) — the active HTML tab
│   │   │   └── EnhanceHtmlForm.tsx   # "use client" — legacy LLM HTML upload + collapsed "extra instructions" dropdown + poll UI — kept working, no longer wired into the tab
│   │   └── api/
│   │       ├── audits/route.ts       # PATCH (edit workbook link), DELETE audit
│   │       ├── share-token/route.ts  # POST/DELETE/PUT share token management
│   │       ├── audit-enhancer/
│   │       │   ├── route.ts          # POST: trigger markdown AI job (202 + jobId)
│   │       │   └── status/route.ts   # GET: poll job status by runId — job-kind-agnostic, also used by the LLM HTML pipeline
│   │       ├── html-enhancer/
│   │       │   ├── route.ts          # POST: trigger HTML flattening AI job (202 + jobId) — legacy tab, still functional, no longer linked from the UI
│   │       │   └── revise/route.ts   # POST: re-LLM an existing HTML-sourced audit with new instructions (auth required)
│   │       └── html-audits/
│   │           └── route.ts          # POST: publish a direct HTML deliverable (no AI, synchronous); DELETE: remove one
│   ├── components/
│   │   ├── AuthProvider.tsx          # "use client" React context: session, user, signOut
│   │   ├── AuthHeader.tsx            # "use client" sign-in/out button in nav
│   │   ├── NavBar.tsx                # "use client" top nav (logo + Dashboard + Enhance links)
│   │   ├── audit/
│   │   │   ├── AuditAssembly.tsx     # Server: orchestrates all sections from AuditContent JSON
│   │   │   ├── AuditReportV2.tsx     # Server: vertical v2 issue narrative + glossary + FAQ
│   │   │   ├── AuditIssueCardV2.tsx  # Server: four-part v2 issue story
│   │   │   ├── AuditReportV3.tsx     # Server: v3 block renderer — groups blocks[] into numbered .audit-page sections at each level-2 heading (and glossary/faq blocks)
│   │   │   ├── AuditSectionHeaderV3.tsx # Server: numbered "01/02/..." section header used by every v3 section
│   │   │   ├── HeadingBlock.tsx / ParagraphBlock.tsx / ListBlock.tsx / TableBlock.tsx / CalloutBlock.tsx / ImageBlock.tsx / QuoteBlock.tsx # Server: v3 block renderers (v3-exclusive — safe to restyle without touching v2)
│   │   │   ├── MetricCardV3.tsx      # Server: sentiment-aware stat card (v3 stat_cards block) — distinct from the shared v2 MetricCard.tsx
│   │   │   ├── AuditGlossaryV3.tsx / AuditFaqV3.tsx # Server: v3-only glossary/FAQ card styling — distinct from the shared v2 GlossaryGrid.tsx/FaqSection.tsx
│   │   │   ├── AuditExternalRefsWarning.tsx # Server: collapsed warning when a v3 upload wasn't fully self-contained
│   │   │   ├── AuditSourceFiles.tsx  # Server: collapsed list of source .md file names (v2 only)
│   │   │   ├── AuditTabs.tsx         # Legacy-only tab bar (Overview/Actions/Findings/etc.)
│   │   │   ├── AuditHeader.tsx       # Server: dark-blue cover page
│   │   │   ├── AuditFooter.tsx       # Server: footer
│   │   │   ├── AuditPrintDocument.tsx# Server: all sections laid out flat for @media print
│   │   │   ├── PrintAuditButton.tsx  # "use client" triggers window.print()
│   │   │   ├── BackToTopButton.tsx   # "use client" scroll-to-top button
│   │   │   ├── ExecutiveSummary.tsx  # At-a-glance bullets + metric cards + severity bar
│   │   │   ├── MetricCard.tsx        # Single metric card (value + label + change)
│   │   │   ├── SeverityBar.tsx       # P0/P1/P2 count bar visualization
│   │   │   ├── ActionItemsTable.tsx  # Priority action items table
│   │   │   ├── FindingCard.tsx       # Single finding with stats, whatThisMeans, impacts
│   │   │   ├── FindingCategoryGroup.tsx # Groups findings by category with FindingCard
│   │   │   ├── SolutionSteps.tsx     # Numbered solution steps grouped by category
│   │   │   ├── BeforeAfterGrid.tsx   # Before/after comparison card grid
│   │   │   ├── GlossaryGrid.tsx      # Term + definition grid
│   │   │   ├── FaqSection.tsx        # FAQ list
│   │   │   └── InsightBox.tsx        # Strategic insight callout (optional; Pimp My EV)
│   │   └── shared/
│   │       ├── BrandLogo.tsx         # SVG logo (normal + inverted prop)
│   │       ├── Badges.tsx            # Priority badge (P0/P1/P2), Owner badge, SourceTypeBadge (legacy/markdown/html)
│   │       └── EnhanceLoadingStatus.tsx # "use client" — shared polling-in-progress UI for both upload forms and the revise modal
│   ├── lib/
│   │   ├── supabase.ts               # Browser Supabase client (singleton via globalThis)
│   │   ├── supabase-server.ts        # Server Supabase client (service role key — bypasses RLS)
│   │   ├── supabase-middleware.ts    # Middleware/server-component client (cookie session)
│   │   ├── storage.ts                # Supabase Storage helpers: uploadSourceHtml/getSourceHtml (private `audit-source-html` bucket, LLM pipeline) and uploadBrandedHtml/getBrandedHtml/deleteBrandedHtml (private `audit-branded-html` bucket, direct pipeline)
│   │   ├── brand-html.ts             # injectBrandStyle(html): appends a brand `<style>` block to an uploaded deliverable's `<head>` via cheerio — direct pipeline only, no structural changes
│   │   ├── db.ts                     # All Supabase CRUD functions (see DB Functions below)
│   │   ├── db-types.ts               # Raw DB row types + AuditDisplay display type + AuditSourceType
│   │   ├── audit/
│   │   │   ├── types.ts              # AuditContent schema types (v1 legacy, v2, and v3 block model)
│   │   │   └── queries.ts            # getAuditByToken, getAuditContentByToken, getAuditById
│   │   ├── ai-provider-client.ts     # Shared OpenAI/DeepSeek calling engine (callModel, resolveModel, polling, AuditEnhancerError) — used by both audit-enhancer.ts and html-enhancer.ts
│   │   ├── text-utils.ts             # Shared generic helpers: normalizeText/slugify/titleCase/stripExtension/normalizeHttpUrl/inferDateFromText
│   │   ├── enhance-client.ts         # Shared client-side polling/parsing helpers used by every upload form + the revise modal
│   │   ├── audit-enhancer.ts         # Markdown pipeline: build prompts, call the shared provider client, persist schemaVersion 2
│   │   ├── html-enhancer.ts          # HTML pipeline: cheerio-clean, call the shared provider client, persist schemaVersion 3; also reviseHtmlDeliverable() for the re-LLM edit flow
│   │   ├── audit-enhancer-logs.ts    # File-based JSONL logger with secret redaction (shared by both pipelines)
│   │   ├── skill-content.ts          # Auto-generated: SKILL.md embedded as a string (markdown AI prompt)
│   │   └── html-skill-content.ts     # Condensed runtime copy of HTML_SKILL.md (HTML AI prompt, includes Revision Mode)
│   └── proxy.ts                      # Next.js middleware: auth gate for /, /enhance, /login
├── public/
│   └── all-in-advertising-logo.svg   # Brand logo (referenced by BrandLogo.tsx and NavBar)
├── CLAUDE.md                         # → @AGENTS.md
├── AGENTS.md                         # Agent instruction: read Next.js docs before coding
├── MAP.md                            # This file
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── eslint.config.mjs
```

---

## Routes

| Route | Auth | Purpose |
|---|---|---|
| `/` | Required | Dashboard: list all audits |
| `/login` | Redirect if authed | Email + password sign-in |
| `/enhance` | Required | Upload markdown → AI enhancement |
| `/audit?token=xxx` | None (public) | Client-facing audit viewer via share token |
| `/dashboard/audits/:id` | Required | Staff audit viewer by audit ID |
| `/piping-now-seo-analysis` | None | Piping Now audit suite hub (static, `noindex`) |
| `/piping-now-seo-analysis/<audit>` | None | Eight child audit pages — see Hand-Built Report Pages |
| `/piping-now-seo/*` | None | Short alias redirects (307) into the suite, defined in `next.config.ts` |
| `/html-audits/:clientSlug/:dateSlug/:auditSlug` | None (public) | Direct HTML deliverable viewer — serves the branded HTML verbatim as `text/html`, not via React |
| `POST /api/audit-enhancer` | Required | Start markdown AI enhancement job |
| `GET /api/audit-enhancer/status?runId=xxx` | None | Poll enhancement job status (job-kind-agnostic — used by markdown, HTML, and revise jobs) |
| `POST /api/html-enhancer` | Required | Start HTML flattening AI job (legacy, no longer linked from the UI) |
| `POST /api/html-enhancer/revise` | Required | Re-LLM an existing HTML-sourced audit's content with new instructions |
| `POST /api/html-audits` | Required | Publish a direct HTML deliverable — no AI, synchronous, returns the `/html-audits/...` URL |
| `DELETE /api/html-audits` | Required | Delete a direct HTML deliverable (row + Storage object) |
| `PATCH /api/audits` | Required | Update supporting workbook link |
| `DELETE /api/audits` | Required | Delete an audit |
| `POST /api/share-token` | Required | Generate share token |
| `DELETE /api/share-token` | Required | Revoke share token |
| `PUT /api/share-token` | Required | Regenerate share token (invalidates old) |

### Hand-Built Report Pages

A third category of deliverable, separate from both LLM pipelines and the direct HTML pipeline: **hand-authored React pages**. Content lives in typed data modules under `src/lib/`, rendered by prop-driven components under `src/components/`. No database, no Storage, no AI. All are static, public, and carry `robots: "noindex, nofollow"` in their page metadata.

| Family | Routes | Data | Components |
|---|---|---|---|
| Monthly SEO story reports | `/reports/{client}/{period}` | `src/lib/reports/*.ts` typed by `reports/types.ts` | `components/reports/storytelling/*` via `SeoStoryReport` |
| Revenue reports | `/reports/sportsdisplays/may-jul-2026` | `reports/revenue-types.ts` | `components/reports/revenue/*` |
| Kickoff decks | `/kickoff/toico`, `/kickoff/toico/v2`, `/kickoff/sportsdisplays` | `src/lib/kickoff/*.ts`; V2 decks typed by `kickoff/v2-types.ts` | `components/kickoff/*`, `components/kickoff/v2/*` |
| **Piping Now audit suite** | `/piping-now-seo-analysis` + 8 children | `src/lib/reports/pipingnow/*.ts` typed by `pipingnow/types.ts` | `components/reports/suite/*` |

**Piping Now audit suite** (added 2026-08-07) is the first *multi-page* deliverable. Nine pages share one cover, one cross-page nav, and one footer via `SuiteShell`:

```
/piping-now-seo-analysis                       hub: diagnosis, roadmap, links to all children
  /action-plan                                 prioritized actions, owners, approval gates
  /gsc-performance                             28-day and 3-month winners/losers, charts
  /gsc-indexation                              coverage buckets, crawl waste, dev notes
  /merchant-center                             feed coverage, disapprovals, store warning
  /ahrefs                                      top pages, competitors, backlink spam
  /blog-cannibalization                        overlap tables, merge/delete/keep plan
  /ai-search-visibility                        Generative AI impressions, merge conflicts
  /data-appendix                               source file index, outstanding exports
```

Notes for anyone extending it:
- **Nav is centralized.** `src/lib/reports/pipingnow/nav.ts` owns `suiteBasePath` and the nine nav entries. Adding a page means adding it there, not editing nine files.
- **`components/reports/suite/` is client-agnostic** apart from importing types from `lib/reports/pipingnow/types.ts`. Reusing it for another client means generalizing that one import, not rewriting components.
- **Chart primitives live in `suite/charts/`** (`SuiteRankedBars`, `SuiteComparisonBars`, `SuiteGroupedColumns`, `SuiteShareBars`). They deliberately duplicate the *visual language* of `storytelling/ReportPerformanceCharts.tsx` but not its code: that file hard-codes "May"/"June" period labels and Snowie-specific aria descriptions, so it could not be reused as-is. The suite versions take period labels and aria text as props. If Snowie's charts are ever genericized, these two sets should be merged.
- **Four storytelling components are reused directly** by the suite: `ReportExecutive`, `ReportDashboard`, `ReportObstacles`, `ReportAppendix`. Each gained *optional* heading/label props (defaulting to their original strings) so the existing Snowie, V-Belt, and SportsDisplays reports render byte-identically. Do not make those props required.

**Middleware** (`proxy.ts`) only gates `/`, `/enhance`, `/login`. Everything else passes through, including `/audit`, `/html-audits`, and all `/api/*` routes — `/api/html-audits` and the `/html-audits/...` viewer enforce auth/ownership in the route handlers themselves where needed (upload/delete are auth-gated; the public viewer is intentionally not).

---

## Supabase Database Schema

### `clients`
| Column | Type | Notes |
|---|---|---|
| `id` | uuid PK | |
| `slug` | text unique | e.g. `"fossil-age-minerals"` |
| `name` | text | e.g. `"Fossil Age Minerals"` |
| `created_at` | timestamptz | |
| `updated_at` | timestamptz | |

### `audits`
| Column | Type | Notes |
|---|---|---|
| `id` | uuid PK | |
| `client_id` | uuid FK → clients | |
| `audit_type` | text | e.g. `"Technical SEO Audit"` |
| `title` | text | e.g. `"Fossil Age Minerals - Technical SEO Audit"` |
| `year` | integer | |
| `month` | text | lowercase month slug, e.g. `"may"` |
| `file_path` | text | logical path, e.g. `"client-slug/2026/may/audit.json"` |
| `file_size` | integer | bytes |
| `share_token` | text nullable | UUID token for public URL |
| `share_token_created_at` | timestamptz nullable | |
| `content` | jsonb nullable | Full `AuditContent` document |
| `owner_id` | uuid nullable | Supabase auth user ID (null = legacy unowned) |
| `created_at` | timestamptz | |
| `updated_at` | timestamptz | |

### `audit_views`
| Column | Type | Notes |
|---|---|---|
| `id` | uuid PK | |
| `audit_id` | uuid FK → audits | |
| `ip_hash` | text | SHA-256 of IP, first 16 hex chars |
| `user_agent` | text | truncated to 500 chars |
| `created_at` | timestamptz | |

### `enhancement_runs`
| Column | Type | Notes |
|---|---|---|
| `id` | uuid PK | |
| `audit_id` | uuid FK → audits nullable | null until job completes for `create` jobs; set immediately for `revise` jobs (the audit already exists) |
| `provider` | text | `"openai"` or `"deepseek"` |
| `model` | text | e.g. `"gpt-5"` |
| `status` | text | `"pending"` \| `"running"` \| `"completed"` \| `"failed"` |
| `log_id` | text nullable | Logger ID for JSONL file lookup |
| `output_path` | text nullable | (unused currently) |
| `error_message` | text nullable | |
| `job_kind` | text | `"create"` (default) or `"revise"` — added by migration `004_add_html_revision_support.sql` |
| `instructions` | text nullable | The edit instructions for a `revise` job; null for `create` jobs |
| `created_at` | timestamptz | |
| `completed_at` | timestamptz nullable | |

### `html_deliverables` (direct pipeline — separate from `audits`)

| Column | Type | Notes |
|---|---|---|
| `id` | uuid PK | |
| `client_id` | uuid FK → clients | |
| `client_slug` | text | denormalized copy of `clients.slug` for fast route lookup |
| `audit_slug` | text | slugified title; collision-suffixed (`-2`, `-3`, ...) if not unique for the client+date |
| `date_slug` | text | `"mm-dd"` — no year, see Common Gotchas |
| `title` | text | staff-entered, no AI inference |
| `storage_path` | text | Supabase Storage object path in `audit-branded-html` |
| `file_size` | integer | bytes, of the branded HTML |
| `owner_id` | uuid nullable | Supabase auth user ID |
| `created_at` / `updated_at` | timestamptz | |

Unique constraint on `(client_slug, date_slug, audit_slug)`.

### Supabase Storage

| Bucket | Access | Purpose |
|---|---|---|
| `audit-source-html` | Private, service-role only (no client-side access, no public policies) | Original self-contained HTML uploads, keyed by `enhancement_runs.id`. Referenced from `audits.content.meta.sourceHtmlPath`. Read back by the re-LLM revise flow to ground edits in the true source. (LLM pipeline.) |
| `audit-branded-html` | Private, service-role only | Brand-CSS-injected HTML for the direct pipeline, keyed by `{clientSlug}/{dateSlug}/{auditSlug}.html` (mirrors the route path). Read back by the `/html-audits/...` viewer on every request. |

---

## Core Data Model: `AuditContent`

Defined in `src/lib/audit/types.ts`. Stored as JSONB in `audits.content`. New records use the discriminated v2 shape; records without `schemaVersion: 2` retain the legacy shape and renderer.

```typescript
type AuditContent = AuditContentV2 | AuditContentV3 | LegacyAuditContent

// meta is shared across all three shapes; sourceFiles/sourceType/sourceHtmlPath/
// externalRefs are all optional so legacy and v2 records validate unchanged.
type AuditMeta = {
  clientName: string
  auditType: string
  date: string
  supportingFile: string|null
  sourceNote: string|null
  sourceFiles?: string[]|null       // v2: uploaded .md file names
  sourceType?: "markdown"|"html"    // absent = legacy
  sourceHtmlPath?: string|null      // v3: Supabase Storage object path for the original upload
  externalRefs?: string[]|null      // v3: external <script src>/<link stylesheet> found in the upload
}

AuditContentV2 {
  schemaVersion: 2
  meta: AuditMeta
  issues: {
    what_is_the_issue: string
    why_it_matters: string
    how_we_will_fix_it: string
    expected_outcome: string
  }[]
  glossary: GlossaryTerm[]
  faq: FaqItem[]
}

// Flattened HTML deliverable content. An ordered array of typed blocks
// instead of a fixed shape, since an HTML upload can be any deliverable
// type, not just an SEO issue list.
AuditContentV3 {
  schemaVersion: 3
  meta: AuditMeta   // sourceType is always "html" here
  blocks: ContentBlock[]  // heading | paragraph | stat_cards | list | table
                          // | callout | image | quote | glossary | faq
}

// stat_cards.cards are StatCard, not the shared v2 MetricCard - they carry an
// extra optional `sentiment: "positive"|"negative"|"neutral"` classifying what
// the change *means* (falling cost-per-lead is positive despite the minus
// sign), not its arithmetic sign. callout blocks carry an optional `label`
// (short contextual caption, e.g. "Risk to address") on top of `tone`. Both
// added 2026-07-13 for the v3 component fine-tuning pass; optional so older
// v3 records without them still render (fall back to neutral / tone-default
// label in MetricCardV3.tsx / CalloutBlock.tsx).

LegacyAuditContent {
  meta: AuditMeta
  executiveSummary: {
    items: string[]
    metricCards: MetricCard[]
    severity?: Severity
  }
  actionItems: ActionItem[]
  findings: Finding[]
  solutions: SolutionGroup[]
  beforeAfter: BeforeAfterPair[]
  insightBox: string|null
  glossary: GlossaryTerm[]
  faq: FaqItem[]
}
```

---

## Key Library Functions

### `src/lib/db.ts`
| Function | Purpose |
|---|---|
| `getAudits(userId?)` | Fetch all audits for dashboard list; filters by owner_id or null |
| `upsertClient({ slug, name })` | Insert or update a client record; returns `clientId` |
| `insertAudit({ clientId, auditType, title, year, month, filePath, fileSize, ownerId?, content? })` | Insert new audit row; returns `auditId` |
| `deleteAuditByFilePath(filePath)` | Delete audit by file_path (legacy use) |
| `getAuditContent(auditId)` | Fetch `{ content, ownerId }` for an audit — used by the revise flow and the workbook-link PATCH |
| `updateAuditContent(auditId, content)` | Overwrite an audit's `content` JSONB in place — used by the revise flow |
| `insertEnhancementRun(params)` | Track new AI enhancement job; `jobKind` defaults to `"create"`, pass `"revise"` + `instructions` for edit jobs |
| `getEnhancementRun(id)` | Fetch enhancement job with joined audit + client |
| `updateEnhancementRun(id, params)` | Update job status, auditId, outputPath, errorMessage |
| `insertHtmlDeliverable(params)` | Direct pipeline: insert a `html_deliverables` row; retries with a `-2`/`-3` slug suffix on unique-violation (23505) instead of failing or overwriting |
| `getHtmlDeliverableBySlug({ clientSlug, dateSlug, auditSlug })` | Direct pipeline: look up `storage_path` for the `/html-audits/...` viewer |
| `listHtmlDeliverables(userId?)` | Direct pipeline: dashboard listing, same owner-or-null filter as `getAudits` |
| `deleteHtmlDeliverable(id, userId?)` | Direct pipeline: ownership check + row delete + Storage object cleanup |

### `src/lib/audit/queries.ts`
| Function | Purpose |
|---|---|
| `getAuditByToken(token)` | Fetch audit for public viewer by share_token |
| `getAuditContentByToken(token)` | Fetch and validate AuditContent JSON by token |
| `getAuditById(id, userId)` | Fetch audit for staff viewer; enforces ownership |

### `src/lib/ai-provider-client.ts`
| Function | Purpose |
|---|---|
| `callModel({ provider, model, systemPrompt, userPrompt, logger })` | Shared OpenAI/DeepSeek calling engine — request, background polling, timeout/error handling. Used by both `audit-enhancer.ts` and `html-enhancer.ts`; each builds its own prompts and passes them in. |
| `resolveModel(provider, selectedModel?)` | Resolve model name with env var fallback |

### `src/lib/audit-enhancer.ts`
| Function | Purpose |
|---|---|
| `enhanceAuditMarkdown(options)` | Markdown pipeline: build prompts → `callModel` → parse JSON → validate v2 payload → upsert client → insert audit |

### `src/lib/html-enhancer.ts`
| Function | Purpose |
|---|---|
| `enhanceHtmlDeliverable(options)` | HTML create pipeline: cheerio-clean (strip script/style/event handlers, collect external refs) → upload original to Storage → `callModel` → validate v3 `blocks[]` payload → upsert client → insert audit |
| `reviseHtmlDeliverable(options)` | Re-LLM edit pipeline: re-fetch + re-validate the audit's current v3 content, fetch the original HTML back from Storage, `callModel` in Revision Mode with current blocks + original HTML + instructions, validate, overwrite `content` in place |

---

## Data Flow: Enhancement Pipeline

```
Markdown create (User at /enhance, Markdown tab):
  → uploads .md file(s) + optional clientName, auditType, supportingWorkbookLink
  → POST /api/audit-enhancer (multipart/form-data)
    → inserts enhancement_run (status: "running", job_kind: "create")
    → returns 202 { jobId, status: "running" }
    → after() background job starts:
        1. Read skill-content.ts (embedded SKILL.md) as system prompt
        2. Build user prompt with markdown + client/audit context
        3. callModel() → OpenAI Responses API (background mode) or DeepSeek
        4. Parse JSON response → validate issues/glossary/faq v2 payload
        5. Add trusted metadata + schemaVersion: 2
        6. upsertClient() → insertAudit(content: auditContent)
        7. updateEnhancementRun(status: "completed", auditId)
  ← client polls GET /api/audit-enhancer/status?runId=xxx every 3s (14-min timeout)
  ← when completed: show success + "View in Dashboard" link

HTML create (User at /enhance, HTML tab):
  → uploads one self-contained .html file + optional clientName/auditType/
    supportingWorkbookLink + optional "extra instructions" (collapsed dropdown)
  → POST /api/html-enhancer (multipart/form-data)
    → inserts enhancement_run (status: "running", job_kind: "create")
    → returns 202 { jobId, status: "running" }
    → after() background job starts:
        1. cleanHtml(): cheerio strips <script>/<style>/<iframe>/event handlers,
           collects external <script src>/<link stylesheet> into externalRefs
        2. uploadSourceHtml() → Supabase Storage (audit-source-html bucket)
        3. callModel() with html-skill-content.ts as system prompt
        4. Parse JSON response → validate blocks[] v3 payload
        5. Add trusted metadata (schemaVersion: 3, sourceType: "html",
           sourceHtmlPath, externalRefs) → upsertClient() → insertAudit()
        6. updateEnhancementRun(status: "completed", auditId)
  ← client polls the same /api/audit-enhancer/status endpoint (job-kind-agnostic)

Direct HTML publish (User at /enhance, HTML tab — the active one):
  → uploads one self-contained .html file + clientName + title (both required,
    no AI inference) + optional date (defaults to today)
  → POST /api/html-audits (multipart/form-data, auth required)
    1. slugify(clientName) → clientSlug, slugify(title) → auditSlug
    2. resolve dateSlug ("mm-dd") from the date field or today (America/Bogota)
    3. injectBrandStyle(): cheerio appends a brand <style> block to <head>
       (creating one if absent) — no other structural changes
    4. upsertClient() (same function as the other two pipelines)
    5. uploadBrandedHtml() → Supabase Storage (audit-branded-html bucket),
       keyed by `{clientSlug}/{dateSlug}/{auditSlug}.html`
    6. insertHtmlDeliverable() — retries with a slug suffix on collision
    7. returns 200 { url: "/html-audits/{clientSlug}/{dateSlug}/{auditSlug}" }
       synchronously — no job/poll dance, since there's no AI call

HTML revise ("Edit" button on an HTML-sourced audit → Revise Deliverable modal):
  → { auditId, instructions } → POST /api/html-enhancer/revise (auth required)
    → auth + ownership check, validate the audit is schemaVersion 3
    → inserts enhancement_run (audit_id set immediately, job_kind: "revise",
      instructions stored for the audit trail)
    → after() background job: reviseHtmlDeliverable() re-fetches the audit's
      current content, fetches the original HTML back from Storage, calls
      callModel() in Revision Mode (current blocks + original HTML +
      instructions → updated blocks, preserving everything not asked to change),
      overwrites content in place (same auditId, no new row)
  ← client polls the same status endpoint, then reloads on completion
```

---

## Data Flow: Audit Viewing

```
Staff view (/dashboard/audits/:id):
  middleware (proxy.ts) → verify auth cookie
  page.tsx (server) → createClient().auth.getUser()
  → supabaseServer.from("audits").select("content, owner_id").eq("id", id)
  → ownership check (owner_id === user.id OR owner_id is null)
  → <AuditAssembly content={content} />

Public view (/audit?token=xxx):
  No middleware auth check (passthrough)
  page.tsx (server) → supabaseServer.from("audits").select().eq("share_token", token)
  → trackView() fire-and-forget (inserts to audit_views)
  → <AuditAssembly content={content} />

Direct HTML deliverable view (/html-audits/:clientSlug/:dateSlug/:auditSlug):
  No auth, no React render : a Route Handler, not a page.tsx
  route.ts (GET) → getHtmlDeliverableBySlug({ clientSlug, dateSlug, auditSlug })
  → getBrandedHtml(storagePath) from the audit-branded-html bucket
  → new Response(html, { headers: { "content-type": "text/html" } })
  No view tracking (no audit_views row : that table is scoped to `audits`).
```

---

## Auth Architecture

| Client | Created By | Key Used | Use Case |
|---|---|---|---|
| `supabase` (browser) | `supabase.ts` via `createBrowserClient` | Anon key | Client components: auth state, sign-in/out |
| `createClient()` (server) | `supabase-middleware.ts` | Anon key + cookies | Middleware, server components: validate session |
| `supabaseServer` | `supabase-server.ts` | Service role key | Server-side DB reads/writes (bypasses RLS) |

**Route protection**: `proxy.ts` middleware runs on `/`, `/enhance`, `/login` only. Uses `getUser()` (validates JWT against Supabase — not just local cookie).

---

## Render Architecture

`AuditAssembly` is the single entry point for rendering an audit. It branches on `schemaVersion` so existing records are not migrated or rewritten:

```
AuditAssembly (server)
  ├── PrintAuditButton          (client — "use client")
  ├── AuditHeader               (server — dark cover page)
  ├── AuditExternalRefsWarning  (v3 only — collapsed, shown when the upload wasn't fully self-contained)
  ├── .audit-screen-only
  │   ├── AuditReportV2         (schemaVersion: 2 — vertical narrative)
  │   │   ├── AuditIssueCardV2[]
  │   │   ├── GlossaryGrid
  │   │   └── FaqSection
  │   ├── AuditReportV3         (schemaVersion: 3 — flattened HTML deliverable)
  │   │   ├── groups blocks[] into numbered .audit-page sections at each level-2 heading (glossary/faq blocks get one too)
  │   │   ├── AuditSectionHeaderV3 — "01/02/..." header shared by every section
  │   │   ├── HeadingBlock / ParagraphBlock / ListBlock / TableBlock / CalloutBlock / ImageBlock / QuoteBlock / MetricCardV3
  │   │   └── glossary/faq blocks render via AuditGlossaryV3/AuditFaqV3 (v3-only styling, not the shared v2 components)
  │   └── AuditTabs             (legacy — tab navigation)
  │       ├── InsightBox        (conditionally)
  │       ├── ExecutiveSummary  (overview tab)
  │       ├── ActionItemsTable  (actions tab)
  │       ├── FindingCategoryGroup → FindingCard (findings tab)
  │       ├── SolutionSteps     (solutions tab)
  │       ├── BeforeAfterGrid   (comparisons tab)
  │       ├── GlossaryGrid      (glossary tab)
  │       └── FaqSection        (faq tab)
  ├── .audit-print-only         (hidden on screen, shown on print)
  │   ├── AuditReportV2         (v2)
  │   ├── AuditReportV3         (v3 — same component serves screen and print, like v2)
  │   └── AuditPrintDocument    (legacy — sections laid out flat)
  ├── AuditSourceFiles          (v2 only — collapsed list of uploaded .md file names)
  ├── AuditFooter               (server)
  └── BackToTopButton           (client)
```

**Print system**: `.audit-screen-only` hides `AuditTabs` during print. `.audit-print-only` shows `AuditPrintDocument` only during print. `.audit-no-print` hides nav/buttons during print.

---

## Design System

Defined in `src/app/globals.css`. CSS custom properties + Tailwind v4.

### Brand Colors
| Token | Hex | Usage |
|---|---|---|
| `--brand-blue` | `#2f65a7` | Primary interactive |
| `--brand-blue-dark` | `#183b68` | Nav headers, table headers |
| `--brand-blue-light` | `#eaf2fb` | Light backgrounds |
| `--brand-gold` | `#f6b328` | CTAs, accents |
| `--p0` | `#c62828` | Critical priority (red) |
| `--p1` | `#c75a12` | High priority (orange) |
| `--p2` | `#9a6a00` | Moderate priority (yellow) |

### Key CSS Classes
| Class | Purpose |
|---|---|
| `.audit-page` | White card with shadow and max-width 1160px |
| `.audit-cover` | Dark gradient cover page |
| `.audit-section-title` | Section heading with gold bar above |
| `.audit-category-title` | Sub-section heading |
| `.audit-card` | Card with border, radius, shadow |
| `.audit-table` | Styled data table |
| `.audit-copy` | Body text style |
| `.audit-no-print` | Hide during print (nav, buttons) |
| `.audit-screen-only` | Hide during print (tab UI) |
| `.audit-print-only` | Show only during print |
| `.audit-mono` | JetBrains Mono font |

---

## Environment Variables

### Required
```
NEXT_PUBLIC_SUPABASE_URL          # Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY     # Supabase anon key (safe for browser)
SUPABASE_SERVICE_ROLE_KEY         # Service role key (server only — bypasses RLS)
OPENAI_API_KEY                    # For OpenAI provider
DEEPSEEK_API_KEY                  # For DeepSeek provider
```

### Optional (AI Enhancement Tuning)
```
OPENAI_API_URL                        # Override endpoint (default: https://api.openai.com/v1/responses)
OPENAI_MODEL                          # Default model (default: gpt-5)
DEEPSEEK_API_URL                      # Override endpoint (default: https://api.deepseek.com/chat/completions)
DEEPSEEK_MODEL                        # Default model (default: deepseek-v4-pro)
NEXT_PUBLIC_SITE_URL                  # Used in robots.txt sitemap URL
AUDIT_ENHANCER_MAX_OUTPUT_TOKENS      # Default: 30000
AUDIT_ENHANCER_TIMEOUT_MS             # Default: 120000
AUDIT_ENHANCER_TEMPERATURE            # 0–2; OpenAI reasoning models ignore this
AUDIT_ENHANCER_OPENAI_RESPONSE_FORMAT # json_object (default) | json_schema | text
AUDIT_ENHANCER_OPENAI_REASONING_EFFORT# none|minimal|low (default)|medium|high|xhigh
AUDIT_ENHANCER_OPENAI_BACKGROUND      # Set to "false" to disable background mode
AUDIT_ENHANCER_OPENAI_POLL_INTERVAL_MS# Default: 3000
AUDIT_ENHANCER_OPENAI_POLL_TIMEOUT_MS # Default: platform budget
AUDIT_ENHANCER_OPENAI_VERBOSITY       # low|medium|high
AUDIT_ENHANCER_FUNCTION_BUDGET_MS     # Vercel function time budget (default: 240000 on Vercel)
AUDIT_ENHANCER_DEEPSEEK_RESPONSE_FORMAT # json_object (default) | text | none
AUDIT_ENHANCER_DEEPSEEK_THINKING      # enabled|disabled (default)|provider-default
AUDIT_ENHANCER_DEEPSEEK_REASONING_EFFORT # high|max
AUDIT_ENHANCER_LOG_SUCCESS_RESPONSES  # "true" to save successful AI responses to disk
AUDIT_ENHANCER_LOG_MAX_CHARS          # Default: 200000
```

---

## Ownership Model

- Every audit has an `owner_id` (nullable UUID matching Supabase auth user).
- `owner_id = null` means the audit was created before ownership tracking (legacy). Legacy audits are visible to all authenticated users and can be managed by anyone.
- API routes enforce: `owner_id === null OR owner_id === user.id`.
- `getAudits(userId)` returns audits where `owner_id = userId OR owner_id IS NULL`.

---

## Logging

`src/lib/audit-enhancer-logs.ts` writes structured JSONL logs to:
- Local dev: `<project-root>/audit-enhancer-logs/<date>/<id>.jsonl`
- Vercel: `/tmp/audit-enhancer-logs/<date>/<id>.jsonl`

Log entries are auto-redacted: API keys, Bearer tokens, cookie values. Raw AI responses saved to `<id>-raw/` subdirectory only on error (or when `AUDIT_ENHANCER_LOG_SUCCESS_RESPONSES=true`).

---

## Deprecated / Legacy Notes

| Item | Status | Notes |
|---|---|---|
| `coverBadge` in AuditMeta | Deprecated May 2026 | Field in types.ts but ignored by rendering engine |
| `sourceNote` in AuditMeta | Future use | Never populated in existing audits |
| HTML file pipeline (legacy, pre-2026) | Deprecated | Audits were previously stored as static HTML in `public/`; now all content is JSONB in Supabase. Not to be confused with the current self-contained HTML **upload/import** feature (`html-enhancer.ts`), which is a different, active feature that also happens to involve HTML. |
| `deleteAuditByFilePath()` | Legacy | Used for old file-path based deletion; prefer deleting by ID |
| `image` block `src` in v3 content | Policy decision, not a gap | Only populated when the model finds a real `data:` or `http(s)://` URI in the source HTML — never fabricated. Large embedded base64 images are **not** currently extracted to Storage and referenced by URL instead; they round-trip through the model as-is. If token cost from image-heavy uploads becomes a problem, revisit by extracting `<img>` data URIs to Storage during the `cleanHtml()` pass in `html-enhancer.ts` and rewriting `image.src` to point at the stored copy. |
| Revision-history viewer | Out of scope, not a gap | `enhancement_runs` retains every HTML revision's instructions (`job_kind: "revise"`) for audit-trail purposes, but the dashboard only ever shows the current `content` — there is no diff/history browser UI. Add one only if separately requested. |

---

## Common Gotchas

1. **Next.js 16 is not Next.js 13/14/15.** APIs differ. Always check `node_modules/next/dist/docs/` before assuming behavior of `cookies()`, `headers()`, dynamic params (`params` is now a Promise), etc.

2. **Two Supabase clients for different purposes.** Use `supabaseServer` (service role) for DB writes. Use `createClient()` (cookie-based) only to validate auth. Never use service role key in client components.

3. **`after()` is Next.js 15+ server-side.** The enhancement background job uses `after()` from `next/server` — it runs after the HTTP response is sent. Do not `await` it in the request handler.

4. **Ownership check required on all mutations.** Every API route that modifies data checks `owner_id === null OR owner_id === user.id`. Do not skip this.

5. **`AuditContent` JSON is the only source of truth.** There are no separate HTML templates or static files for audit content. Everything renders from the JSONB `content` column.

6. **`skill-content.ts` is auto-generated.** Do not edit it directly. Source is `seo-audit-enhancer/SKILL.md`.

7. **Print layout is a separate component.** `AuditPrintDocument` is not `AuditTabs`. Both render the same data but with different layouts. Changes to section components affect both automatically.

8. **Tailwind v4 syntax.** Config is in `postcss.config.mjs`. The CSS entry point is `@import "tailwindcss"` (not `@tailwind base/components/utilities`). Arbitrary values still work (`bg-[#f6b328]`).

9. **Direct HTML deliverables serve raw, unsanitized markup.** `/html-audits/...` returns the uploaded HTML (plus an injected `<style>`) as a real `text/html` response, not through React — any `<script>` in the upload executes verbatim in the visitor's browser. This is intentional (fidelity to the original deliverable, upload is staff-only/auth-gated), unlike the LLM pipeline's `cleanHtml()` which strips scripts before the content ever reaches the model. Don't "fix" this by adding sanitization without discussing the tradeoff first.

10. **`html_deliverables.date_slug` has no year.** The route is `/html-audits/<client>/<mm-dd>/<slug>` by design. Two deliverables for the same client on the same calendar day in different years collide on the unique constraint — `insertHtmlDeliverable()` handles this by appending `-2`/`-3` to the slug, not by adding a year. If this becomes a real problem, revisit the route shape rather than working around it in application code.
