# All In Advertising Audit Portal

A Next.js 16, React 19, TypeScript, and Tailwind CSS 4 project for serving audit deliverables on Vercel. The interface follows All In Advertising's business DNA: revenue-focused, collaborative, modern, geometric, and anchored to the brand blue/gold logo system.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000 with your browser.

## Audit Files

Audits are stored as structured JSON in Supabase (`audits.content` JSONB column) and rendered by React server components. The AI enhancement flow outputs JSON directly : no HTML files are written to disk.

Legacy HTML files from the previous pipeline remain in `public/` as archive. The app no longer reads or writes them.

## Markdown Audit Enhancer

Open `/enhance` to upload a `.md` SEO audit. New submissions use the version 2 storytelling parser: each issue is separated into the problem, why it matters, remediation, and expected outcome. The validated JSON is versioned with `schemaVersion: 2`, stored in Supabase JSONB, and rendered as one vertical report. Existing legacy records remain unchanged and continue to use the tabbed renderer.

```bash
OPENAI_API_KEY=...
OPENAI_MODEL=gpt-5
DEEPSEEK_API_KEY=...
DEEPSEEK_MODEL=deepseek-v4-pro
AUDIT_ENHANCER_MAX_OUTPUT_TOKENS=30000
AUDIT_ENHANCER_TIMEOUT_MS=120000
AUDIT_ENHANCER_FUNCTION_BUDGET_MS=240000
```

Every enhancement logs a redacted JSONL under `audit-enhancer-logs/`. API keys and bearer tokens are redacted before logs are written.

## Supabase Database

Uses Supabase PostgreSQL for audit metadata, structured content, and enhancement tracking.

**Tables:** `clients`, `audits` (with JSONB `content`), `enhancement_runs`, `audit_views`

The dashboard queries `audits JOIN clients` via `src/lib/db.ts`. See `src/lib/db-types.ts` and `src/lib/audit/types.ts` for full schemas.

## Production

```bash
npm run build
npm run start
```

Deploy to Vercel from the repository root with default Next.js build command.

---

## User Management & Public Sharing

The app includes Supabase Auth integration with route protection and token-based public audit sharing. All features below are implemented.

### Authentication

- **Login:** `/login` -- branded email/password form with cookie-based sessions via `@supabase/ssr`.
- **Route protection:** `src/proxy.ts` gates `/` and `/enhance`. Unauthenticated visitors redirected to `/login`. Authenticated users on `/login` redirected to `/`.
- **Session management:** `AuthProvider` React Context wraps the app. Use `useAuth()` for `{ user, session, loading, signOut }`.
- **Nav bar:** `NavBar` with logo, Dashboard/Enhance tabs (active-state highlighting), email, Sign Out. Public `/audit` renders zero chrome.

### Database Schema

Extended the existing `audits` table. Migration: `supabase/migrations/002_auth_and_sharing.sql`.

- `owner_id` (FK to auth.users) -- who owns the audit
- `share_token` (unique UUID, nullable) -- public sharing token
- `share_token_created_at` -- when the token was generated
- `content` (JSONB) -- structured audit content for component rendering
- `audit_views` -- hashed IP + user-agent per public view

**RLS:** Owners full CRUD. Public SELECT where share_token IS NOT NULL. Service role bypass.

### Public Audit Sharing

- **Generate:** POST /api/share-token stores `crypto.randomUUID()` in `share_token`
- **Copy:** One-click `/audit?token=<uuid>` to clipboard
- **Regenerate:** New UUID, old instantly invalidated
- **Revoke:** Sets share_token to NULL
- **Security:** All endpoints verify `owner_id === auth.uid()`

**Public view** (`/audit?token=<uuid>`):
- Fetches `audits.content` JSONB, renders via React components (AuditAssembly → 13 section components)
- Zero app chrome, no navigation, no links back
- Same "Audit Not Found" for all failure modes (prevents enumeration)
- Tracks views in `audit_views` with SHA-256 hashed IP
- `robots.txt` disallows crawling; `og:` meta tags for social previews

### Dashboard Features

- Owner-filtered audits (see your own + unowned legacy)
- Views column from `audit_views`
- Share button per row (generate/regenerate/revoke modal)
- Delete gated by ownership
- Enhancement stamps `owner_id` on new audits
- Loading skeletons and error boundaries on `/audit` and `/login`

### File Structure

```
deliverables/
├── README.md
├── .env / package.json
├── supabase/migrations/002_auth_and_sharing.sql
├── src/
│   ├── proxy.ts                     # Route protection
│   ├── lib/
│   │   ├── supabase.ts              # Browser client
│   │   ├── supabase-server.ts       # Server client (service role)
│   │   ├── supabase-middleware.ts   # SSR client
│   │   ├── db.ts / db-types.ts      # Queries & types
│   │   ├── audit/
│   │   │   ├── types.ts             # 18 TypeScript interfaces
│   │   │   └── queries.ts           # Typed query helpers
│   │   ├── audit-enhancer.ts        # AI enhancement
│   │   └── audit-enhancer-logs.ts
│   ├── components/
│   │   ├── audit/                   # 13 audit section components
│   │   │   ├── AuditAssembly.tsx
│   │   │   ├── AuditHeader.tsx / AuditFooter.tsx
│   │   │   ├── ExecutiveSummary.tsx / MetricCard.tsx / SeverityBar.tsx
│   │   │   ├── ActionItemsTable.tsx
│   │   │   ├── FindingCard.tsx / FindingCategoryGroup.tsx
│   │   │   ├── SolutionSteps.tsx / BeforeAfterGrid.tsx
│   │   │   └── GlossaryGrid.tsx / FaqSection.tsx / InsightBox.tsx
│   │   └── shared/
│   │       ├── BrandLogo.tsx / Badges.tsx
│   │       ├── AuthProvider.tsx / AuthHeader.tsx
│   │       └── NavBar.tsx
│   └── app/
│       ├── page.tsx                 # Dashboard
│       ├── proxy.ts / robots.ts
│       ├── login/page.tsx + loading.tsx
│       ├── enhance/page.tsx + EnhanceAuditForm.tsx
│       ├── audit/page.tsx + loading.tsx + error.tsx
│       ├── dashboard/audits/[id]/page.tsx
│       ├── ShareButton.tsx / DeleteAuditButton.tsx
│       └── api/
│           ├── audit-enhancer/route.ts
│           ├── audits/route.ts
│           └── share-token/route.ts
└── ...
```

### Design Decisions

| Decision | Why |
|----------|-----|
| Extend existing `audits` table | Avoids migration. Layer auth on top without breaking anything. |
| UUID share tokens | 122 bits of entropy. Short codes are guessable. |
| React components from JSONB | Audits rendered dynamically from structured data -- no HTML files, no `dangerouslySetInnerHTML`. |
| SHA-256 IP hash in `audit_views` | GDPR-friendly. No PII. Hashing is one-way. |
| Same message for all token failures | Prevents enumeration. "Audit Not Found" whether invalid, revoked, or expired. |
| Service role bypass RLS policy | Enhancement API runs server-side with service key -- needs full write access. |
| `@supabase/ssr` for cookie handling | App Router requires `next/headers` cookie access. `@supabase/ssr` abstracts this. |
| Three Supabase clients (browser/server/middleware) | Different cookie strategies per context. `@supabase/ssr` provides the right factory. |

---

## Componentized Audit Architecture (Completed R1-R9)

The audit rendering pipeline is fully componentized. The AI outputs structured JSON (per `seo-audit-enhancer/SKILL.md`), stored in Supabase JSONB, and routed to either the v2 vertical renderer or the legacy tabbed renderer.

### JSON Schema (Key Sections)

```typescript
type AuditContent = AuditContentV2 | LegacyAuditContent;

type AuditContentV2 = {
  schemaVersion: 2;
  meta: {
    clientName: string; auditType: string; date: string;
    supportingFile: string | null; sourceNote: string | null;
  };
  issues: {
    what_is_the_issue: string;
    why_it_matters: string;
    how_we_will_fix_it: string;
    expected_outcome: string;
  }[];
  glossary: { term: string; definition: string }[];
  faq: { question: string; answer: string }[];
};

// LegacyAuditContent retains executiveSummary, actionItems, findings,
// solutions, beforeAfter, insightBox, glossary, and faq for old records.
```

### Component Tree

```
AuditAssembly
├── AuditHeader        ← Cover page (dark gradient)
├── AuditReportV2      ← Vertical issue stories + Glossary + FAQ
├── AuditTabs          ← Legacy-only interactive report
├── AuditPrintDocument ← Legacy-only flat print report
└── AuditFooter        ← AIA branding
```

### Key Files

| File | Purpose |
|------|---------|
| `src/lib/audit/types.ts` | Versioned TypeScript data model and runtime guards |
| `seo-audit-enhancer/schema.json` | Stored v2 JSON Schema |
| `seo-audit-enhancer/SKILL.md` | V2 transformation prompt |
| `src/components/audit/AuditAssembly.tsx` | Version-aware master component |
| `src/components/audit/AuditReportV2.tsx` | Vertical v2 renderer |
| `src/components/shared/Badges.tsx` | PriorityBadge, OwnerBadge |
| `scripts/migrate-audits-to-json.ts` | HTML → JSONB migration (8 audits migrated) |
| `supabase/migrations/003_add_audit_content.sql` | JSONB column migration |

### R1-R9 Status: ✅ Complete

All 9 refactoring phases completed. Audits render from JSONB via React components. HTML pipeline deprecated.

---

## Deprecate HTML Pipeline : JSON-Only Enhancement (Completed)

The view layer already uses React components + Supabase JSONB. This phase made the enhancement flow produce JSON directly, eliminating the legacy file-based HTML pipeline entirely.

**Status: ✅ Complete** (verified 2026-07-13 — `saveAuditArtifacts`/`buildAuditBody`/`assembleFinalHtml`/`assertInside` no longer exist in `audit-enhancer.ts`; all legacy template files and `scripts/sync-audits.mjs` are deleted; no `predev`/`prebuild` sync scripts remain in `package.json`. Phase statuses below corrected accordingly — they were previously left marked "Pending" after the work actually shipped.)

### Current Enhancement Flow (to be replaced)

```
Markdown upload → /api/audit-enhancer
  → enhanceAuditMarkdown()
    → AI call (returns filled HTML template)
    → saveAuditArtifacts() : writes HTML files to public/{client}/{year}/{month}/
    → insertAudit() : stores metadata in Supabase (no JSON content)
  → Response: { href, bodyHref, bodyFilePath }
```

### Target Enhancement Flow

```
Markdown upload → /api/audit-enhancer
  → enhanceAuditMarkdown()
    → AI call (returns issues + glossary + faq per SKILL.md)
    → validate the v2 payload with runtime guards
    → add trusted metadata + schemaVersion: 2
    → insertAudit() : stores full AuditContentV2 JSON in audits.content JSONB
    → no file writes, no public/ artifacts
  → Response: { auditId, shareUrl, clientName, auditType }
```

### What Changes

| File | Change |
|------|--------|
| `src/lib/audit-enhancer.ts` | Remove `saveAuditArtifacts()`. Stop writing HTML files. Parse AI JSON response → validate → store in Supabase. New return type: `{ auditId, shareUrl, ... }` instead of `{ filePath, bodyFilePath, ... }`. |
| `src/app/api/audit-enhancer/route.ts` | Remove file-path references from response. Pass JSON content through. Return shareable URL immediately after generation. |
| `src/lib/db.ts` | `insertAudit()` already accepts optional `content` : no change needed. |
| `seo-audit-enhancer/SKILL.md` | Already rewritten to output JSON (Phase R6). No change needed. |
| `seo-audit-enhancer/assets/template.html` | No longer read during enhancement. Safe to remove after verification. |
| `seo-audit-enhancer/schema.json` | Already created (Phase R3). Used for JSON validation. |
| `public/header-template.html` | Unused by new flow. Safe to remove after verification. |
| `public/footer-template.html` | Unused by new flow. Safe to remove after verification. |
| `scripts/sync-audits.mjs` | Remove or repurpose : no longer needed to sync HTML audits. |

### What Stays

| Component | Why |
|-----------|-----|
| `src/lib/audit-enhancer-logs.ts` | Logging infrastructure still needed : now logs JSON responses instead of HTML |
| `src/lib/audit-enhancer.ts` core AI logic | Provider routing, timeout handling, retry, background mode : all preserved |
| `src/lib/db.ts` queries | `insertAudit()`, `upsertClient()`, `insertEnhancementRun()` : all preserved |
| `src/app/api/audit-enhancer/route.ts` | File upload parsing, validation, error handling : preserved |
| `public/audit.css` | Still used by the `seo-audit-enhancer` skill's quality rules (brand colors, print styles) |
| HTML audit files in `public/` | Keep on disk as archive. App no longer reads or writes them. |

---

### Phased Implementation

#### Phase D1: Update audit-enhancer.ts : JSON Output Handling

- Parse the AI response as JSON (not HTML) using `JSON.parse()`
- Validate against `schema.json` or the TypeScript types
- Populate `AuditContent` fields from JSON response and markdown context (client name, audit type, date)
- Remove `saveAuditArtifacts()` and all file-system writes
- Update `insertAudit()` call to include `content: AuditContent`
- Update `EnhanceAuditResult` return type:
  - Remove: `bodyFilePath`, `bodyHref`, `filePath`, `href`, `outputDirectory`, `publicFilePath`
  - Add: `auditId`, `content`
- Remove `buildAuditBody()`, `assembleFinalHtml()`, `saveAuditArtifacts()` functions
- Remove `assertInside()` path-safety helper (no longer writing to disk)

**Status:** ✅ Complete

---

#### Phase D2: Update API Route : Clean Response Shape

- Update `src/app/api/audit-enhancer/route.ts`:
  - Remove file-path references from response body
  - Read JSON content from AI response
  - Pass `content` through to `enhanceAuditMarkdown()`
  - Optionally auto-generate a share token on creation (POST to `/api/share-token` internally or call `crypto.randomUUID()` directly)
  - Return: `{ auditId, title, clientName, auditType, shareUrl, provider, model }`
- Update `EnhanceAuditForm.tsx` to display the new response shape
- Remove any file-path display from the UI

**Status:** ✅ Complete

---

#### Phase D3: Remove Template & Public Artifacts

- Delete `public/header-template.html`
- Delete `public/footer-template.html`
- Delete `seo-audit-enhancer/assets/template.html`
- Delete `public/audit-body.html` (if present)
- Remove or comment out `scripts/sync-audits.mjs`
- Remove the `predev` and `prebuild` scripts from `package.json` that call sync-audits
- Keep `public/audit.css` (still a reference for brand tokens)
- Keep `public/all-in-advertising-logo.svg` (used by BrandLogo component)
- Keep HTML audit files in `public/` as archive (do not delete)

**Status:** ✅ Complete

---

#### Phase D4: Integration Test

- Start dev server
- Upload a markdown audit via `/enhance`
- Verify JSON is stored in `audits.content` (check Supabase Table Editor)
- Verify the audit renders via React components at the generated share link
- Verify view tracking works (check `audit_views` table)
- Verify the dashboard shows the new audit with correct metadata and view count
- Verify share token generation/revocation still works
- Verify delete still works (removes from Supabase)

**Status:** ✅ Complete

---

### Dependency Map

```
D1 (JSON handling) → D2 (clean response) → D3 (remove artifacts) → D4 (integration test)
```

All phases are sequential : each depends on the previous.

### Commands Reference

| Command | Action |
|---------|--------|
| "Start Phase D1" | Begin JSON-only enhancement flow |
| "Start Phase DN" | Begin the specified deprecation phase |
| "Phase DN complete" | Mark phase as done |

---

## Future Integrations

### Self-Contained HTML Deliverable Ingestion

**Status: 🟡 Planned — no phase started** (plan drafted 2026-07-13)

**Goal:** Let the team upload a self-contained HTML file (one file, inline styles, embedded/data-URI assets — e.g. an exported Google Doc, Notion page, Canva page, or ChatGPT canvas) and have it converted into the same componentized, on-brand presentation every other deliverable uses, instead of publishing arbitrary third-party markup as-is. Uses an LLM transformation pipeline (mirroring the existing Markdown enhancer) rather than hand-written DOM heuristics, because arbitrary uploaded HTML is too structurally inconsistent for fixed parsing rules to hold up. The upload form exposes a collapsed-by-default "extra instructions" field. A dedicated "Edit" action lets the team re-run the LLM against the *current* structured content plus new instructions — a real revision, not a from-scratch regeneration.

This plan is written so any future session can jump to this section and resume work; update the phase **Status** markers as work lands so this stays an accurate oversight view. Re-run this "dig into the codebase" analysis if a lot of drift has happened since 2026-07-13 — the inventory below is a snapshot, not a permanent truth.

#### Confirmed Architecture Decisions

| Decision | Choice | Why |
|---|---|---|
| Parsing strategy | **LLM pipeline only** (no hand-written DOM heuristics) | Mirrors the proven Markdown enhancer. Arbitrary HTML from different tools/exports is too inconsistent for fixed heuristics; a light DOM pass is still used, but only for cleanup/validation (below), not structural parsing. |
| Output schema | **New `schemaVersion: 3` block-based model** | Self-contained HTML uploads may be any deliverable type (proposal, report, deck excerpt), not just an SEO issue list. Forcing everything into the existing `issues/glossary/faq` v2 shape would distort non-audit content. A `blocks[]` array is generic enough to cover most on-brand deliverable layouts while still rendering through the shared design system. |
| Dashboard surface | **Filter/tab on the existing `/` dashboard**, not a new route | Reuses the existing table, `Share`/`Edit`/`Delete` actions, and ownership/auth logic. `EditAuditButton` branches its behavior on source type instead of being duplicated. |
| Raw HTML retention | **Store the original upload in Supabase Storage** | The re-LLM edit flow needs to ground revisions in the true source, not just the AI's last interpretation — otherwise fidelity degrades over multiple edit rounds. Also gives provenance/debugging value the Markdown pipeline doesn't have (it never persists the original `.md`). |

#### Codebase Inventory — Reusable As-Is

| Piece | Location | Reuse notes |
|---|---|---|
| Upload → background job → poll-for-status pattern | `src/app/api/audit-enhancer/route.ts`, `.../status/route.ts` | Same shape for the new `/api/html-enhancer` routes: 202 + `jobId`, `after()` background execution, `enhancement_runs` row per job. |
| Enhancement run tracking | `src/lib/db.ts` (`insertEnhancementRun`, `updateEnhancementRun`, `getEnhancementRun`) + `enhancement_runs` table | Reusable once extended with `job_kind`/`instructions` (see Missing Pieces). |
| Client/audit persistence | `upsertClient()`, `insertAudit()` in `src/lib/db.ts` | `insertAudit()` already accepts an arbitrary `content` JSONB payload — no change needed to store `schemaVersion: 3` documents. |
| Redacted JSONL logging | `src/lib/audit-enhancer-logs.ts` (`createAuditEnhancerLogger`) | File-type agnostic already. Use directly, unchanged. |
| Versioned content model + runtime guards | `src/lib/audit/types.ts` | The v1 → v2 discriminated-union pattern (`isAuditContentV2`, `hasOnlyKeys` allowlists) is the exact template for adding `isAuditContentV3`. |
| Version-aware render dispatch | `src/components/audit/AuditAssembly.tsx` | Already branches on `schemaVersion`; add one more branch for `=== 3`. |
| Design system / CSS tokens | `src/app/globals.css`, `.audit-page` / `.audit-card` / `.audit-table` / `.audit-section-title` classes, brand color tokens | This *is* "the deliverables web app design and CSS rules" the plan should adapt HTML into — no new design system needed, only new components that use these existing classes. |
| Presentational components directly reusable as block renderers | `MetricCard.tsx` (→ `stat_cards` block), `GlossaryGrid.tsx` (→ `glossary` block), `FaqSection.tsx` (→ `faq` block), `InsightBox.tsx` (→ styling reference for `callout`) | Cuts down how many net-new components Phase H2 actually needs. |
| Collapsed-dropdown-with-field UI pattern | `src/components/audit/AuditSourceFiles.tsx` (shipped 2026-07-12) | Exact pattern the brief asks for ("dropdown collapsed by default with a text field"). Native `<details>/<summary>` wrapping a `<textarea>` — no client JS/state required beyond what `EnhanceAuditForm` already does for its file input. |
| Multi-file / file-count client validation pattern | `src/app/enhance/EnhanceAuditForm.tsx` (`handleFileChange`, warning state) | Template for the HTML form's single-file + extension/size validation. |
| Poll-until-complete client logic | `EnhanceAuditForm.tsx` (`pollEnhancementJob`, `parseEnhanceResponse`, `LoadingStatus`) | Currently duplicated per form; worth extracting to a shared `src/lib/enhance-client.ts` when the HTML form is built so it isn't triplicated (create + revise both need it). |
| Ownership-gated mutation pattern | `src/app/api/audits/route.ts` (`PATCH`/`DELETE`) | Template for the new `/api/html-enhancer/revise` route's auth + `owner_id` check. |
| Dashboard row actions | `src/app/page.tsx`, `ShareButton.tsx`, `EditAuditButton.tsx`, `DeleteAuditButton.tsx` | `EditAuditButton` gets a second code path; `ShareButton`/`DeleteAuditButton` work unchanged for HTML-sourced rows. |

#### Codebase Inventory — Missing Pieces (net-new work)

| Gap | Detail |
|---|---|
| No HTML parsing/sanitization library | `package.json` has zero DOM/HTML libraries (no `cheerio`, `jsdom`, `DOMPurify`, `sanitize-html`). Need to add one — recommend `cheerio`, used narrowly (see Phase H1). |
| No object/file storage usage anywhere | Nothing in `src/` calls Supabase Storage. Needs a new private bucket, upload helper, and read-back helper (service-role signed URL or direct server-side fetch) — this is genuinely new infrastructure, not an extension of an existing pattern. |
| Provider-calling logic is private, not reusable | `callModel`, `callOpenAI`, `callDeepSeek`, `buildSystemPrompt`, `buildUserPrompt`, and all timeout/env/polling helpers in `src/lib/audit-enhancer.ts` are module-private (`function`, not `export function` — only `resolveModel` and the top-level `enhanceAuditMarkdown` are exported). A second pipeline **cannot** import them today. Either extract a shared `src/lib/ai-provider-client.ts` first, or the HTML pipeline duplicates ~700 lines of OpenAI/DeepSeek request, retry, and polling logic. Extraction is the only acceptable option — flagged as a hard prerequisite in Phase H0. |
| No block-based content schema | `schemaVersion: 3`, the `ContentBlock` union, its runtime validators, and every block-rendering component are 100% new. |
| No revision/"edit with instructions" capability exists anywhere | `EditAuditButton` + `PATCH /api/audits` today only ever mutate `content.meta.supportingFile` (the workbook link). There is no code path that re-invokes an LLM against existing content. This entire flow is net new. |
| `enhancement_runs` schema has no room for revision jobs | No `job_kind` (create vs. revise) or `instructions` column. Needs a migration. |
| Dashboard has no source-type awareness | `getAudits()` / `AuditDisplay` (`src/lib/db-types.ts`) don't select or expose `schemaVersion` at all today — the list view can't currently tell a Markdown-sourced audit from anything else. |

#### Target Data Model

```typescript
// src/lib/audit/types.ts additions

export type ContentBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "stat_cards"; cards: MetricCard[] }          // reuses existing MetricCard shape
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "table"; caption: string | null; headers: string[]; rows: string[][] }
  | { type: "callout"; tone: "info" | "warning" | "success"; text: string }
  | { type: "image"; src: string; alt: string; caption: string | null }
  | { type: "quote"; text: string; attribution: string | null }
  | { type: "glossary"; terms: GlossaryTerm[] }           // reuses existing GlossaryGrid
  | { type: "faq"; items: FaqItem[] };                    // reuses existing FaqSection

export type AuditContentV3 = {
  schemaVersion: 3;
  meta: AuditMeta & {
    sourceType: "html";
    sourceHtmlPath: string | null; // Supabase Storage object path for the original upload
  };
  blocks: ContentBlock[];
};

export type AuditContent = LegacyAuditContent | AuditContentV2 | AuditContentV3;
```

`image.src` must point to a stored/hosted asset (Supabase Storage or the data URI as-uploaded), never to an external URL the client's HTML happened to reference — external references break once the deliverable outlives the source page.

#### Target Pipeline Flows

```
Create:
  Upload .html + optional instructions → /api/html-enhancer
    → validate: single file, extension, size limit, self-containment check (cheerio pass:
      flag <script src>, <link rel=stylesheet href>, non-data-URI <img src> as external refs)
    → strip <script>/<style>/comments (noise + prompt-injection reduction, not structural parsing)
    → upload original file to Supabase Storage → sourceHtmlPath
    → insertEnhancementRun(job_kind: "create", status: "running") → 202 { jobId }
    → after(): call shared AI provider client with HTML + instructions
      → parse/validate blocks[] JSON against html-schema.json
      → insertAudit(content: { schemaVersion: 3, meta, blocks })
      → updateEnhancementRun(status: "completed", auditId)
  ← client polls /api/html-enhancer/status?runId=xxx (reuse existing poll pattern)

Revise ("Edit" button on an HTML-sourced audit):
  { auditId, instructions } → /api/html-enhancer/revise
    → auth + ownership check (same pattern as PATCH /api/audits)
    → load current audits.content (must be schemaVersion 3) + fetch original HTML from Storage
    → insertEnhancementRun(job_kind: "revise", audit_id: auditId, instructions, status: "running")
    → after(): call shared AI provider client in "revision mode": prior blocks[] JSON +
      original HTML (grounding) + new instructions → updated blocks[] JSON
      → validate → update audits.content (same auditId, no new row)
      → updateEnhancementRun(status: "completed")
  ← client polls the same status endpoint, then reloads the dashboard/viewer
```

#### Phased Implementation

##### Phase H0: Foundations (prerequisite refactor + infra)

- Extract `callModel`, `callOpenAI`, `callDeepSeek`, timeout/env helpers, and polling logic out of `src/lib/audit-enhancer.ts` into a shared `src/lib/ai-provider-client.ts`. Update `audit-enhancer.ts` to import from it — **no behavior change** to the existing Markdown flow (regression risk to watch: response parsing/error diagnostics must stay byte-identical).
- Add `cheerio` to `package.json` (used narrowly: noise-stripping + self-containment validation, not structural parsing).
- Create a private Supabase Storage bucket (e.g. `audit-source-html`) with an RLS policy mirroring the `audits` table (owner + service-role access only). Add a small `src/lib/storage.ts` helper: `uploadSourceHtml()`, `getSourceHtml()`.
- Add `src/lib/audit/types.ts`: `ContentBlock`, `AuditContentV3`, `isAuditContentV3`, per-block-type guards. Extend the `AuditContent` union and `isAuditContent`.
- Migration `supabase/migrations/004_add_html_revision_support.sql`: add `job_kind TEXT NOT NULL DEFAULT 'create'` and `instructions TEXT` to `enhancement_runs`. (No `audits` table migration needed — `sourceType`/`sourceHtmlPath` live inside the existing `content` JSONB column, same pattern as `sourceFiles` on the Markdown side.)

**Acceptance criteria:** existing Markdown enhancement flow passes a full manual regression (upload → job completes → renders → dashboard shows it) after the extraction, with zero behavior change. New types compile and existing `isAuditContent` guard still accepts every current record shape. Storage bucket exists and a manual signed-URL round trip works.

**Status:** ✅ Complete (2026-07-13)

- `src/lib/ai-provider-client.ts` created: `callModel`/`callOpenAI`/`callDeepSeek`, all timeout/env/polling helpers, and `AuditEnhancerError` moved out of `audit-enhancer.ts` verbatim. `audit-enhancer.ts` now builds its markdown-specific system/user prompt strings and calls the shared `callModel({ provider, model, systemPrompt, userPrompt, logger })` — `AuditEnhancerError`/`resolveModel`/`ProviderId` are re-exported from `audit-enhancer.ts` so `route.ts` needed zero changes.
- Regression-tested for real: ran the dev server, submitted a markdown file straight through `POST /api/audit-enhancer` (curl, since this route isn't middleware-gated), polled the job to completion, and confirmed the rendered audit page in the browser under an actual Supabase-authenticated session. Byte-identical behavior to before the extraction.
- `cheerio` added to `package.json` dependencies.
- `schemaVersion: 3` types added to `src/lib/audit/types.ts`: `ContentBlock` (10 block types), `AuditContentV3`, `isAuditContentV3`, `isContentBlock`, `isMetricCard`. `AuditMeta` extended with optional `sourceType`/`sourceHtmlPath`. `AuditAssembly.tsx` now branches on `isAuditContentV3` — currently rendering a placeholder (`AuditReportV3Placeholder`) since the real block renderers are Phase H2. This branch was required just to keep the type system/build green once the union grew a third member; it is not itself Phase H2 work.
- Private Supabase Storage bucket `audit-source-html` created (10MB limit, `text/html` only). `src/lib/storage.ts` added: `uploadSourceHtml(runId, html)` / `getSourceHtml(objectPath)`. Upload/download round trip verified directly against the live bucket.
- Migration `supabase/migrations/004_add_html_revision_support.sql` written (adds `job_kind`/`instructions` to `enhancement_runs`). **Not yet applied** — no `psql`/`supabase` CLI is available in this environment, so per this repo's existing convention it needs to be run manually in the Supabase SQL Editor. Not required until Phase H5 (the revise flow); H1–H4 don't touch `enhancement_runs` schema.
- `npm run build` and `npx tsc --noEmit` both clean; only pre-existing lint warnings remain (unrelated to this change).

---

##### Phase H1: HTML Upload API + LLM Transformation Skill

- `seo-audit-enhancer/HTML_SKILL.md` — new system prompt: convert cleaned HTML into `blocks[]` per the schema, explicitly instructed to describe content, not copy inline styles/markup.
- `seo-audit-enhancer/html-schema.json` — JSON Schema for the `blocks[]` payload (mirrors the existing `schema.json` convention).
- `src/lib/html-enhancer.ts` (new) — `enhanceHtmlDeliverable(options)`: size/extension validation, cheerio noise-strip + self-containment check, Storage upload, prompt assembly, call the shared provider client from Phase H0, validate response, `upsertClient()` + `insertAudit()`.
- `src/app/api/html-enhancer/route.ts` (new) — mirrors `audit-enhancer/route.ts` request handling exactly (multipart parse, single-file validation, `after()` background job, `insertEnhancementRun(job_kind: "create")`).
- ~~`src/app/api/html-enhancer/status/route.ts`~~ — not built. `getEnhancementRun` is already job-kind-agnostic, so the existing `/api/audit-enhancer/status?runId=` route works unchanged for HTML jobs too (verified by polling a real HTML job through it). Reused directly instead of duplicating a thin wrapper.

**Acceptance criteria:** uploading a real self-contained HTML export (Google Doc / Notion / Canva sample) produces a valid `schemaVersion: 3` row in `audits.content`; invalid/oversized/non-self-contained files are rejected with a clear error before any AI call; the original file is retrievable from Storage via `sourceHtmlPath`.

**Status:** ✅ Complete (2026-07-13)

- Built `HTML_SKILL.md` + condensed runtime `src/lib/html-skill-content.ts`, `html-schema.json`, `src/lib/html-enhancer.ts` (`enhanceHtmlDeliverable`), and `src/app/api/html-enhancer/route.ts`.
- Extracted `normalizeText`/`slugify`/`titleCase`/`stripExtension`/`normalizeHttpUrl`/`inferDateFromText` out of `audit-enhancer.ts` into a new shared `src/lib/text-utils.ts` — these were generic, not markdown-specific, and `html-enhancer.ts` needed the identical logic. `audit-enhancer.ts` now imports them; re-verified the markdown flow still passes end to end after this move too.
- `cleanHtml()` uses cheerio to strip `<script>`/`<style>`/`<iframe>`/`<noscript>`, strip `on*` event-handler attributes and `javascript:` hrefs/srcs, and collect external `<script src>`/`<link rel=stylesheet href>` references into a `externalRefs` list (logged now; surfaced as a UI warning in Phase H6).
- **Real end-to-end test against the PoC file** (`iTrainK9-google-ads-audit-2026-04-27 (1).html`, a dense dark-themed Google Ads dashboard with tabs, KPI rows, an SVG gauge, pills, and 10+ data tables): submitted via `curl` to `POST /api/html-enhancer`, polled to completion (~2 min), inspected the stored row directly in Supabase. Result: `schemaVersion: 3`, 163 blocks (53 heading, 48 paragraph, 27 callout, 22 list, 10 table, 3 stat_cards), auditType correctly inferred as "Google Ads Audit", every block passed `isAuditTransformationV3Payload` validation on the first attempt. This audit (`id: 13030c12-012d-4f60-9529-5f60130ff0c5`) is kept in the database as a real fixture for Phase H2's renderer work instead of re-running the LLM call again.
- Markdown pipeline regression-checked again after the `text-utils.ts` extraction (separate from the Phase H0 check): curl upload → job completion → verified via status endpoint. Clean.
- `npm run build`, `npx tsc --noEmit`, and `npx eslint` all clean (only the same pre-existing warnings from Phase H0).

---

##### Phase H2: Block Renderer Components

- New: `HeadingBlock.tsx`, `ParagraphBlock.tsx`, `ListBlock.tsx`, `TableBlock.tsx` (generic — distinct from the audit-specific `ActionItemsTable`), `ImageBlock.tsx`, `QuoteBlock.tsx`, `CalloutBlock.tsx`.
- New: `AuditReportV3.tsx` — iterates `content.blocks`, dispatches each to its renderer; reuses `MetricCard`/`GlossaryGrid`/`FaqSection` directly for the block types that map onto them.
- `AuditAssembly.tsx`: add the `schemaVersion === 3` branch alongside the existing v2/legacy branch. Confirm the same screen/print duality v2 uses (one component serves both `.audit-screen-only` and `.audit-print-only`) is sufficient for v3 — no separate print document expected.

**Acceptance criteria:** a `schemaVersion: 3` document with at least one of every block type renders correctly on `/dashboard/audits/:id`, uses only existing brand CSS classes/tokens, and prints cleanly via the existing `PrintAuditButton`.

**Status:** ✅ Complete (2026-07-13)

- Built all seven new block components plus `AuditReportV3.tsx`, which groups the flat `blocks[]` array into `.audit-page` sections at each level-2 heading (matching how every other section in the portal is presented) and breaks `glossary`/`faq` blocks out into the existing `GlossaryGrid`/`FaqSection` components directly, since those already own their own `.audit-page` wrapper. `AuditAssembly.tsx`'s placeholder branch from Phase H0 is now the real renderer.
- Verified visually in the browser against the real PoC audit kept from Phase H1 (163 blocks): KPI stat-card grid, the executive-summary paragraph, ordered/unordered lists, success/warning callouts, and a 10-row data table all render pixel-consistent with the rest of the portal's design system, through to the shared footer. One cosmetic nit observed and left as-is (not a code bug): one source sub-table with no real header row came back with empty-string headers, rendering as a blank blue header bar — a model output-quality nuance, not a schema or rendering defect, worth keeping an eye on but not worth guarding against speculatively.
- Print path (`.audit-print-only`) uses the identical `AuditReportV3` component and the same existing `.audit-page`/`.audit-table` print CSS rules already exercised by v2 — correct by construction, not separately verified in an actual print preview.
- `npm run build`, `npx tsc --noEmit`, `npx eslint` all clean.

---

##### Phase H3: Upload Form (`/enhance`)

- Add a source-type toggle (Markdown / HTML) to `src/app/enhance/page.tsx`.
- New `EnhanceHtmlForm.tsx` (client component): single `.html`/`.htm` file input with client-side extension/size checks (same pattern as `EnhanceAuditForm`'s file handling), `clientName`/`auditType`/`supportingWorkbookLink` fields (identical to the Markdown form), and — per the brief — a `<details>` collapsed-by-default dropdown (same pattern as `AuditSourceFiles.tsx`) containing a `<textarea name="instructions" placeholder="Optional: tone, sections to emphasize, things to exclude…">`.
- Extract the poll/parse helpers shared with `EnhanceAuditForm.tsx` into `src/lib/enhance-client.ts` at this point rather than copy-pasting a third time (create + revise both need polling).

**Acceptance criteria:** the instructions field is collapsed on page load, expands on click, and its value reaches `/api/html-enhancer` when filled in; leaving it collapsed/empty still submits successfully.

**Status:** ✅ Complete (2026-07-13)

- Added `EnhanceSourceTabs.tsx` (client) to `/enhance` — a simple Markdown/HTML tab toggle over the two form components, rather than a route split.
- Built `EnhanceHtmlForm.tsx`: single-file input with client-side size validation (8 MB ceiling, matching the server limit), the same `clientName`/`auditType`/`supportingWorkbookLink` fields as the Markdown form, and the `<details>` collapsed-by-default "Extra instructions" dropdown with a `textarea name="instructions"` — verified visually collapsed on load and expanding on click.
- Extracted `parseEnhanceResponse`/`isEnhanceJob`/`pollEnhancementJob`/`sleep`/types into `src/lib/enhance-client.ts`, and the loading-status UI into `src/components/shared/EnhanceLoadingStatus.tsx`. Rewrote `EnhanceAuditForm.tsx` to import both instead of keeping its own copies — this was Phase H3 planned work landing a form early, not scope creep.
- **Real functional test of the instructions plumbing** (not just UI presence): resubmitted the PoC HTML file via `curl` with `instructions=` set to "Only include the Executive Summary section... and Critical Issues... Ignore every other tab/section entirely." Result: 33 blocks (vs. 163 unscoped), headings limited to exactly the Executive Summary and the five Critical Issues findings — confirms the instructions field genuinely reaches the model and is honored, not just accepted and ignored. Also confirms the earlier client-name parenthetical-stripping fix: `clientName` came back as `"iTrainK9"` cleanly this time.
- `npm run build`, `npx tsc --noEmit`, `npx eslint` all clean.

---

##### Phase H4: Dashboard Filter + Source Badge

- `src/lib/db.ts` `getAudits()`: extend the query to select `content->>'schemaVersion'` (or `content->'meta'->>'sourceType'`) alongside existing columns.
- `src/lib/db-types.ts` `AuditDisplay`: add `sourceType: "markdown" | "html" | "legacy"`.
- `src/app/page.tsx`: add an "All / Markdown / HTML" filter control and a small source badge per row (reuse the existing badge visual style from `src/components/shared/Badges.tsx` if it fits, otherwise a minimal new pill).

**Acceptance criteria:** filtering to "HTML" shows only `schemaVersion: 3` audits; the badge correctly distinguishes all three source types on real data (legacy, markdown v2, html v3).

**Status:** ✅ Complete (2026-07-13)

- `getAudits()` derives `sourceType` from the already-selected `content` column (`schemaVersion === 3` → `"html"`, `=== 2` → `"markdown"`, otherwise `"legacy"`) — no query/column change needed.
- Added `SourceTypeBadge` to `Badges.tsx` (gold for HTML, blue for Markdown, slate for Legacy, matching the existing badge visual language).
- Extracted the dashboard's audit table into a new client component `src/app/AuditList.tsx` with an All/Markdown/HTML/Legacy filter row (client-side filter over the already-fetched list — no extra request).
- Verified in the browser: the HTML-sourced PoC audit shows a gold "HTML" badge on the dashboard; clicking the "Markdown" filter correctly reduces the list to zero results ("No audit deliverables match this filter"), confirming the filter logic and badge derivation both work against real data. Legacy/Markdown filtering wasn't separately exercised against real legacy/v2 rows in this pass (none were present at filter-test time), but the same `sourceType` derivation already worked correctly for the existing Markdown flow in every earlier phase's regression check.
- `npm run build`, `npx tsc --noEmit`, `npx eslint` all clean.

---

##### Phase H5: Re-LLM Edit Flow

- `src/app/api/html-enhancer/revise/route.ts` (new): auth + ownership check (reuse the `PATCH /api/audits` pattern), load current content + original HTML from Storage, call the shared provider client in "revision mode" (`HTML_SKILL.md` gets a "Revision Mode" section: given prior `blocks[]`, the original HTML, and new instructions, return updated `blocks[]`), validate, update `audits.content` in place, log an `enhancement_runs` row with `job_kind: "revise"` and the `instructions` text.
- `EditAuditButton.tsx`: branch on `sourceType`. HTML-sourced audits get a new modal (textarea + "Regenerate" button) that posts to the revise endpoint and polls status via the Phase H3 shared client helper, then reloads. Markdown-sourced audits keep today's workbook-link editor unchanged.

**Acceptance criteria:** submitting an edit instruction against an HTML-sourced audit updates `audits.content` without requiring the original file to be re-uploaded; the Markdown-sourced `Edit` flow is provably unchanged (regression check); each revision is visible in `enhancement_runs` with its instructions text for audit-trail purposes.

**Status:** ✅ Complete (2026-07-13)

- Migration `004_add_html_revision_support.sql` applied to Supabase (confirmed by querying `enhancement_runs.job_kind`/`instructions` directly before building against them).
- `HTML_SKILL.md` and `html-skill-content.ts` both got the promised "Revision Mode" section. `reviseHtmlDeliverable()` added to `html-enhancer.ts`: re-fetches and re-validates the audit's current content itself (doesn't trust a value passed from the route's earlier check, since it runs in a background job), fetches the original HTML back from Storage via `sourceHtmlPath`, and calls the same shared `callModel` with a revision-mode prompt containing the current `blocks[]` + original HTML + instructions.
- `db.ts` got `getAuditContent()`/`updateAuditContent()` helpers and `insertEnhancementRun()` now accepts `jobKind`/`instructions`.
- `EditAuditButton.tsx` now branches on `sourceType`: HTML-sourced audits get a new "Revise Deliverable" modal (textarea + Regenerate, reusing `EnhanceLoadingStatus` and the Phase H3 poll helper); Markdown-sourced audits render the exact same workbook-link editor as before, unchanged.
- **Real end-to-end verification, both directions:** drove `/api/html-enhancer/revise` from inside the authenticated browser session (the endpoint requires auth, unlike the create routes) via `fetch()`, asking it to insert a specific marker callout right after the Executive Summary heading. Result: block count went 163 → 164, the marker landed at exactly the right position with the requested tone, and the `enhancement_runs` row recorded `job_kind: "revise"` with the full instructions text. Then issued a second revision asking to remove that marker — block count returned to exactly 163, marker gone, everything else intact. This proves the flow is a true incremental edit, not a from-scratch regeneration.
- **Regression-verified the Markdown Edit flow is unchanged**: created a fresh Markdown-sourced audit, confirmed its dashboard row still opens the original workbook-link modal (not the revise modal), while the HTML row's Edit button correctly opens the new revise modal with "Regenerate" disabled until text is entered.
- `npm run build`, `npx tsc --noEmit`, `npx eslint` all clean.

---

##### Phase H6: Guardrails & Docs

- Surface the self-containment warning from Phase H1 in the upload UI as a non-blocking banner ("This HTML references external resources; they may not render correctly") rather than a hard rejection, unless the team decides external refs should be a hard error.
- Decide and document an image-handling policy: large embedded base64 images inflate LLM token usage; consider extracting `<img>` data URIs to Storage during the Phase H1 cheerio pass and referencing them by URL in `image` blocks instead of round-tripping base64 through the model.
- Update `MAP.md` with the new routes, tables/columns, and component tree once shipped.
- Explicitly out of scope for v1: a revision-history diff/viewer UI. `enhancement_runs` retains every revision's instructions for later use, but the dashboard only ever shows current content — do not build a history browser unless separately requested.

**Acceptance criteria:** `MAP.md` reflects the shipped routes/schema; the image-handling policy is written down (even if the answer is "defer," it must be a decision, not a silent gap).

**Status:** ✅ Complete (2026-07-13)

- Added `AuditMeta.externalRefs?: string[] | null` (same optional/backward-compatible pattern as `sourceFiles`/`sourceType`) and a new `AuditExternalRefsWarning.tsx` component — a collapsed-by-default banner (reusing the `AuditSourceFiles.tsx` `<details>` pattern) shown on the audit page itself, not just the one-time upload confirmation screen, so it's visible every time anyone views the deliverable. Non-blocking, per the plan — upload still succeeds.
- **Verified with a real fixture built specifically to trigger it**: a tiny HTML file with a genuine external `<link rel=stylesheet>` and external `<script src>`. Uploaded via the pipeline, confirmed the banner rendered with the correct count ("referenced 2 external resources"), and confirmed it expands to list both exact URLs.
- Image-handling policy written down in `MAP.md`'s Deprecated/Legacy Notes table: `image.src` is only populated from a real `data:`/`http(s)://` URI already in the source, never fabricated; base64 images are **not** extracted to Storage in this pass and round-trip through the model as-is; revisit only if token cost from image-heavy uploads becomes a real problem, with the exact extraction point (the `cleanHtml()` pass) named for whoever picks it up.
- `MAP.md` updated throughout: routes table, `enhancement_runs` schema (`job_kind`/`instructions`), new "Supabase Storage" section, `AuditContentV3`/`AuditMeta` shape, every new lib/component file, both enhancement pipeline flows (create + revise) as ASCII diagrams matching the doc's existing style, and the render-architecture tree.
- `npm run build`, `npx tsc --noEmit`, `npx eslint .` (full repo, not just touched files) all clean — same 4 pre-existing warnings as every prior phase, nothing new.

---

##### Phase H7: Integration Test

- Upload 2-3 real self-contained HTML samples from different sources (e.g. a Google Docs export, a Notion export, a ChatGPT canvas export) and confirm each renders on-brand.
- Confirm the dashboard HTML filter and source badges work on real data.
- Run the full create → dashboard → edit-with-instructions → re-render loop end to end.
- Confirm Storage contains the original file and RLS blocks cross-owner access to the revise endpoint.
- Confirm the Markdown pipeline (upload, dashboard listing, edit-workbook-link) still works unchanged.

**Acceptance criteria:** all of the above pass manually; no regression in the existing Markdown flow.

**Status:** ⬜ Pending

---

### Dependency Map

```
H0 (foundations: shared provider client, Storage, types) → H1 (upload API + skill)
H1 → H2 (block renderers) and H1 → H3 (upload form) can proceed in parallel
H2 + H3 → H4 (dashboard filter)
H1 → H5 (revise flow) — needs Storage + the create pipeline first
H4 + H5 → H6 (guardrails/docs) → H7 (integration test)
```

### Commands Reference

| Command | Action |
|---------|--------|
| "Start Phase H0" | Begin the shared provider-client extraction + Storage/type foundations |
| "Start Phase HN" | Begin the specified HTML-ingestion phase |
| "Phase HN complete" | Mark phase as done |

---

*Created: 2026-05-18 | Last updated: 2026-07-13*
