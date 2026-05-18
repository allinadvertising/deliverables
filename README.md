# All In Advertising Audit Portal

A Next.js 16, React 19, TypeScript, and Tailwind CSS 4 project for serving audit deliverables on Vercel. The interface follows All In Advertising's business DNA: revenue-focused, collaborative, modern, geometric, and anchored to the brand blue/gold logo system.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000 with your browser.

## Audit Files

Audits are stored as structured JSON in Supabase (`audits.content` JSONB column) and rendered by React server components. The AI enhancement flow outputs JSON directly — no HTML files are written to disk.

Legacy HTML files from the previous pipeline remain in `public/` as archive. The app no longer reads or writes them.

## Markdown Audit Enhancer

Open `/enhance` to upload a `.md` SEO audit. The `seo-audit-enhancer` skill instructs the AI to output structured JSON matching the `AuditContent` schema. The JSON is validated, stored in Supabase JSONB, and rendered by React components.

```bash
OPENAI_API_KEY=...
OPENAI_MODEL=gpt-5
DEEPSEEK_API_KEY=...
DEEPSEEK_MODEL=deepseek-v4-pro
AUDIT_ENHANCER_MAX_OUTPUT_TOKENS=30000
AUDIT_ENHANCER_TIMEOUT_MS=120000
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

The audit rendering pipeline is fully componentized. The AI outputs structured JSON (per `seo-audit-enhancer/SKILL.md`), stored in Supabase JSONB, and rendered by 13 React server components.

### JSON Schema (Key Sections)

```typescript
type AuditContent = {
  meta: {
    clientName: string; auditType: string; date: string;
    coverBadge: string; supportingFile: string | null;
    sourceNote: string | null;       // Never populated in existing audits
  };
  executiveSummary: {
    items: string[];
    metricCards: { value: string; label: string; change: string | null }[];
    severity?: { p0Count: number; p1Count: number; p2Count: number };
  };
  actionItems: {
    priority: "P0" | "P1" | "P2"; title: string; category: string;
    scope: string; impact: string; secondaryImpact: string | null;
    owner: "AIA" | "Client Dev";
  }[];
  findings: {
    category: string; priority: "P0" | "P1" | "P2"; title: string;
    rootCause: string;
    statistics?: { number: string; description: string }[];
    whatThisMeans: string;
    representativeUrls?: string[];
    impacts?: { label: string; value: string }[];
  }[];
  solutions: { category: string; steps: { title: string; description: string }[] }[];
  beforeAfter: { label: string; before: string; after: string }[];
  insightBox: string | null;
  glossary: { term: string; definition: string }[];
  faq: { question: string; answer: string }[];
};
```

### Component Tree

```
AuditAssembly
├── AuditHeader        ← Cover page (dark gradient)
├── ExecutiveSummary   ← Metric cards + severity bar
├── ActionItemsTable   ← Prioritized table
├── FindingCategoryGroup → FindingCard[]
├── SolutionSteps      ← Numbered cards
├── InsightBox         ← Optional callout
├── BeforeAfterGrid    ← Side-by-side
├── GlossaryGrid       ← Term cards
├── FaqSection         ← Q&A block
└── AuditFooter        ← AIA branding
```

### Key Files

| File | Purpose |
|------|---------|
| `src/lib/audit/types.ts` | 18 TypeScript interfaces |
| `seo-audit-enhancer/schema.json` | JSON Schema for AI validation |
| `seo-audit-enhancer/SKILL.md` | AI prompt: outputs JSON |
| `src/components/audit/AuditAssembly.tsx` | Master component |
| `src/components/audit/*.tsx` | 11 section components |
| `src/components/shared/Badges.tsx` | PriorityBadge, OwnerBadge |
| `scripts/migrate-audits-to-json.ts` | HTML → JSONB migration (8 audits migrated) |
| `supabase/migrations/003_add_audit_content.sql` | JSONB column migration |

### R1-R9 Status: ✅ Complete

All 9 refactoring phases completed. Audits render from JSONB via React components. HTML pipeline deprecated.

---

## Next Step: Deprecate HTML Pipeline — JSON-Only Enhancement

The view layer already uses React components + Supabase JSONB. The next step is to make the enhancement flow produce JSON directly, eliminating the legacy file-based HTML pipeline entirely.

### Current Enhancement Flow (to be replaced)

```
Markdown upload → /api/audit-enhancer
  → enhanceAuditMarkdown()
    → AI call (returns filled HTML template)
    → saveAuditArtifacts() — writes HTML files to public/{client}/{year}/{month}/
    → insertAudit() — stores metadata in Supabase (no JSON content)
  → Response: { href, bodyHref, bodyFilePath }
```

### Target Enhancement Flow

```
Markdown upload → /api/audit-enhancer
  → enhanceAuditMarkdown()
    → AI call (returns JSON per updated SKILL.md)
    → validate JSON against schema.json
    → insertAudit() — stores full AuditContent JSON in audits.content JSONB
    → no file writes, no public/ artifacts
  → Response: { auditId, shareUrl, clientName, auditType }
```

### What Changes

| File | Change |
|------|--------|
| `src/lib/audit-enhancer.ts` | Remove `saveAuditArtifacts()`. Stop writing HTML files. Parse AI JSON response → validate → store in Supabase. New return type: `{ auditId, shareUrl, ... }` instead of `{ filePath, bodyFilePath, ... }`. |
| `src/app/api/audit-enhancer/route.ts` | Remove file-path references from response. Pass JSON content through. Return shareable URL immediately after generation. |
| `src/lib/db.ts` | `insertAudit()` already accepts optional `content` — no change needed. |
| `seo-audit-enhancer/SKILL.md` | Already rewritten to output JSON (Phase R6). No change needed. |
| `seo-audit-enhancer/assets/template.html` | No longer read during enhancement. Safe to remove after verification. |
| `seo-audit-enhancer/schema.json` | Already created (Phase R3). Used for JSON validation. |
| `public/header-template.html` | Unused by new flow. Safe to remove after verification. |
| `public/footer-template.html` | Unused by new flow. Safe to remove after verification. |
| `scripts/sync-audits.mjs` | Remove or repurpose — no longer needed to sync HTML audits. |

### What Stays

| Component | Why |
|-----------|-----|
| `src/lib/audit-enhancer-logs.ts` | Logging infrastructure still needed — now logs JSON responses instead of HTML |
| `src/lib/audit-enhancer.ts` core AI logic | Provider routing, timeout handling, retry, background mode — all preserved |
| `src/lib/db.ts` queries | `insertAudit()`, `upsertClient()`, `insertEnhancementRun()` — all preserved |
| `src/app/api/audit-enhancer/route.ts` | File upload parsing, validation, error handling — preserved |
| `public/audit.css` | Still used by the `seo-audit-enhancer` skill's quality rules (brand colors, print styles) |
| HTML audit files in `public/` | Keep on disk as archive. App no longer reads or writes them. |

---

### Phased Implementation

#### Phase D1: Update audit-enhancer.ts — JSON Output Handling

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

**Status:** ⬜ Pending

---

#### Phase D2: Update API Route — Clean Response Shape

- Update `src/app/api/audit-enhancer/route.ts`:
  - Remove file-path references from response body
  - Read JSON content from AI response
  - Pass `content` through to `enhanceAuditMarkdown()`
  - Optionally auto-generate a share token on creation (POST to `/api/share-token` internally or call `crypto.randomUUID()` directly)
  - Return: `{ auditId, title, clientName, auditType, shareUrl, provider, model }`
- Update `EnhanceAuditForm.tsx` to display the new response shape
- Remove any file-path display from the UI

**Status:** ⬜ Pending

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

**Status:** ⬜ Pending

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

**Status:** ⬜ Pending

---

### Dependency Map

```
D1 (JSON handling) → D2 (clean response) → D3 (remove artifacts) → D4 (integration test)
```

All phases are sequential — each depends on the previous.

### Commands Reference

| Command | Action |
|---------|--------|
| "Start Phase D1" | Begin JSON-only enhancement flow |
| "Start Phase DN" | Begin the specified deprecation phase |
| "Phase DN complete" | Mark phase as done |

---

*Created: 2026-05-18 | Last updated: 2026-05-18*
