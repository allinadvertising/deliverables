# Codebase Map — All In Advertising Audit Portal

> Agent reference document. Read this before touching any file.
> Keep it updated when you change structure, add routes, or alter data models.

---

## What This App Does

Internal portal for **All In Advertising** staff to:
1. Upload raw `.md` SEO audit files and convert them to structured JSON via an AI pipeline (OpenAI or DeepSeek).
2. Manage the resulting audit deliverables: view, share, edit, and delete.
3. Share audits with clients via an unguessable token URL — no client login required.

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
│   │   ├── page.tsx                  # Dashboard (/) — lists all audits, auth-gated
│   │   ├── globals.css               # Tailwind v4 import + audit design system CSS classes
│   │   ├── robots.ts                 # robots.txt: disallows /audit, /enhance, /api
│   │   ├── ShareButton.tsx           # "use client" — share token modal
│   │   ├── DeleteAuditButton.tsx     # "use client" — delete with confirm dialog
│   │   ├── EditAuditButton.tsx       # "use client" — edit supporting workbook link modal
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
│   │   │   └── EnhanceAuditForm.tsx  # "use client" — upload + poll UI
│   │   └── api/
│   │       ├── audits/route.ts       # PATCH (edit workbook link), DELETE audit
│   │       ├── share-token/route.ts  # POST/DELETE/PUT share token management
│   │       └── audit-enhancer/
│   │           ├── route.ts          # POST: trigger AI job (202 + jobId)
│   │           └── status/route.ts   # GET: poll job status by runId
│   ├── components/
│   │   ├── AuthProvider.tsx          # "use client" React context: session, user, signOut
│   │   ├── AuthHeader.tsx            # "use client" sign-in/out button in nav
│   │   ├── NavBar.tsx                # "use client" top nav (logo + Dashboard + Enhance links)
│   │   ├── audit/
│   │   │   ├── AuditAssembly.tsx     # Server: orchestrates all sections from AuditContent JSON
│   │   │   ├── AuditReportV2.tsx     # Server: vertical v2 issue narrative + glossary + FAQ
│   │   │   ├── AuditIssueCardV2.tsx  # Server: four-part v2 issue story
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
│   │       └── Badges.tsx            # Priority badge (P0/P1/P2) with color coding
│   ├── lib/
│   │   ├── supabase.ts               # Browser Supabase client (singleton via globalThis)
│   │   ├── supabase-server.ts        # Server Supabase client (service role key — bypasses RLS)
│   │   ├── supabase-middleware.ts    # Middleware/server-component client (cookie session)
│   │   ├── db.ts                     # All Supabase CRUD functions (see DB Functions below)
│   │   ├── db-types.ts               # Raw DB row types + AuditDisplay display type
│   │   ├── audit/
│   │   │   ├── types.ts              # AuditContent schema types (the full document model)
│   │   │   └── queries.ts            # getAuditByToken, getAuditContentByToken, getAuditById
│   │   ├── audit-enhancer.ts         # Core AI logic: build prompts, call providers, persist
│   │   ├── audit-enhancer-logs.ts    # File-based JSONL logger with secret redaction
│   │   └── skill-content.ts          # Auto-generated: SKILL.md embedded as a string (AI prompt)
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
| `POST /api/audit-enhancer` | Required | Start AI enhancement job |
| `GET /api/audit-enhancer/status?runId=xxx` | None | Poll enhancement job status |
| `PATCH /api/audits` | Required | Update supporting workbook link |
| `DELETE /api/audits` | Required | Delete an audit |
| `POST /api/share-token` | Required | Generate share token |
| `DELETE /api/share-token` | Required | Revoke share token |
| `PUT /api/share-token` | Required | Regenerate share token (invalidates old) |

**Middleware** (`proxy.ts`) only gates `/`, `/enhance`, `/login`. Everything else passes through, including `/audit` and all `/api/*` routes.

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
| `audit_id` | uuid FK → audits nullable | null until job completes |
| `provider` | text | `"openai"` or `"deepseek"` |
| `model` | text | e.g. `"gpt-5"` |
| `status` | text | `"pending"` \| `"running"` \| `"completed"` \| `"failed"` |
| `log_id` | text nullable | Logger ID for JSONL file lookup |
| `output_path` | text nullable | (unused currently) |
| `error_message` | text nullable | |
| `created_at` | timestamptz | |
| `completed_at` | timestamptz nullable | |

---

## Core Data Model: `AuditContent`

Defined in `src/lib/audit/types.ts`. Stored as JSONB in `audits.content`. New records use the discriminated v2 shape; records without `schemaVersion: 2` retain the legacy shape and renderer.

```typescript
type AuditContent = AuditContentV2 | LegacyAuditContent

AuditContentV2 {
  schemaVersion: 2
  meta: {
    clientName: string
    auditType: string
    date: string
    supportingFile: string|null
    sourceNote: string|null
  }
  issues: {
    what_is_the_issue: string
    why_it_matters: string
    how_we_will_fix_it: string
    expected_outcome: string
  }[]
  glossary: GlossaryTerm[]
  faq: FaqItem[]
}

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
| `insertEnhancementRun(params)` | Track new AI enhancement job |
| `getEnhancementRun(id)` | Fetch enhancement job with joined audit + client |
| `updateEnhancementRun(id, params)` | Update job status, auditId, outputPath, errorMessage |

### `src/lib/audit/queries.ts`
| Function | Purpose |
|---|---|
| `getAuditByToken(token)` | Fetch audit for public viewer by share_token |
| `getAuditContentByToken(token)` | Fetch and validate AuditContent JSON by token |
| `getAuditById(id, userId)` | Fetch audit for staff viewer; enforces ownership |

### `src/lib/audit-enhancer.ts`
| Function | Purpose |
|---|---|
| `enhanceAuditMarkdown(options)` | Full pipeline: prompt AI → parse JSON → upsert client → insert audit |
| `resolveModel(provider, selectedModel?)` | Resolve model name with env var fallback |

---

## Data Flow: Enhancement Pipeline

```
User at /enhance
  → uploads .md file + optional clientName, auditType, supportingWorkbookLink
  → POST /api/audit-enhancer (multipart/form-data)
    → inserts enhancement_run (status: "running")
    → returns 202 { jobId, status: "running" }
    → after() background job starts:
        1. Read skill-content.ts (embedded SKILL.md) as system prompt
        2. Build user prompt with markdown + client/audit context
        3. Call OpenAI Responses API (background mode, polls until complete)
           OR DeepSeek Chat Completions API
        4. Parse JSON response → validate issues/glossary/faq v2 payload
        5. Add trusted metadata + schemaVersion: 2
        6. upsertClient() → insertAudit(content: auditContent)
        7. updateEnhancementRun(status: "completed", auditId)
  ← client polls GET /api/audit-enhancer/status?runId=xxx every 3s (14-min timeout)
  ← when completed: show success + "View in Dashboard" link
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
  ├── .audit-screen-only
  │   ├── AuditReportV2         (schemaVersion: 2 — vertical narrative)
  │   │   ├── AuditIssueCardV2[]
  │   │   ├── GlossaryGrid
  │   │   └── FaqSection
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
  │   └── AuditPrintDocument    (legacy — sections laid out flat)
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
| HTML file pipeline | Deprecated | Audits were previously stored as static HTML in `public/`; now all content is JSONB in Supabase |
| `deleteAuditByFilePath()` | Legacy | Used for old file-path based deletion; prefer deleting by ID |

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
