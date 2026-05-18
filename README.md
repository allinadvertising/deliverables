
## User Management & Public Sharing

The app includes a full Supabase Auth integration with route protection and token-based public audit sharing. All features described below are implemented and active.

### Authentication

- **Login:** `/login` — branded email/password form. Supabase Auth with cookie-based sessions via `@supabase/ssr`.
- **Route protection:** `src/proxy.ts` gates `/` and `/enhance` behind authentication. Unauthenticated visitors are redirected to `/login`. Authenticated users hitting `/login` are redirected to `/`.
- **Session management:** `AuthProvider` (React Context) wraps the entire app. Components access `{ user, session, loading, signOut }` via `useAuth()`.
- **Nav bar:** `NavBar` component shows logo, Dashboard/Enhance tabs with active-state highlighting, user email, and Sign Out button on authenticated pages. The public audit page (`/audit`) renders zero app chrome.

### Database Schema

The existing `audits` table was extended with owner-based access and public sharing support. Run `supabase/migrations/002_auth_and_sharing.sql` to apply.

**Tables:**
- `clients` — unique client slugs and names
- `audits` — per-audit records with `owner_id` (FK → auth.users), `share_token` (unique UUID, nullable), `share_token_created_at`
- `enhancement_runs` — AI enhancement job history
- `audit_views` — public view analytics (hashed IP, user-agent, timestamp)

**Row Level Security:**
- Owners have full CRUD on their audits (`auth.uid() = owner_id`)
- Anyone can SELECT audits where `share_token IS NOT NULL` (token-based public access)
- Service role bypasses all policies (used by server-side API routes)
- `audit_views`: owners can read their audit views; anyone can INSERT a view record

See `src/lib/db-types.ts` for the full TypeScript type definitions.

### Public Audit Sharing

Each audit can be shared via a unique, unguessable token.

- **Generate:** Click the share icon on any dashboard row → "Generate Link" → `POST /api/share-token` stores a `crypto.randomUUID()` in `audits.share_token`
- **Copy:** One-click copies `https://<domain>/audit?token=<uuid>` to clipboard
- **Regenerate:** New UUID replaces the old one — old link instantly invalidated
- **Revoke:** Sets `share_token` to NULL — link stops working immediately
- **Security:** Every token API call verifies `audit.owner_id === auth.uid()`

**Public view** (`/audit?token=<uuid>`):
- Reads the token, queries Supabase, fetches the audit HTML from `public/`
- Renders via `dangerouslySetInnerHTML` — full audit content, no app chrome, no navigation, no links back to the app
- Invalid/revoked/missing tokens all show the same "Audit Not Found" message (prevents enumeration)
- Tracks each view in `audit_views` with SHA-256 hashed IP
- `robots.txt` disallows crawling; `og:` meta tags set for social previews
- No auth required — the proxy does not match `/audit`

### Dashboard Features

- Audits filtered by `owner_id` (users only see their own, plus unowned legacy audits)
- **Views column** shows view count from `audit_views`
- **Share button** per row with generate/regenerate/revoke modal
- **Delete button** gated by ownership (non-owners get 403)
- **Enhancement** stamps `owner_id` on newly created audits
- Loading skeletons and error boundaries on `/audit` and `/login`

### File Structure

```
deliverables/
├── README.md
├── .env
├── package.json
├── supabase/
│   └── migrations/
│       └── 002_auth_and_sharing.sql
├── src/
│   ├── proxy.ts                    # Route protection
│   ├── lib/
│   │   ├── supabase.ts             # Browser client
│   │   ├── supabase-server.ts      # Server client (service role)
│   │   ├── supabase-middleware.ts  # Server-side SSR client
│   │   ├── db.ts                   # Query functions
│   │   ├── db-types.ts             # TypeScript types
│   │   ├── audit-enhancer.ts       # AI enhancement logic
│   │   └── audit-enhancer-logs.ts  # Logging utilities
│   ├── components/
│   │   ├── AuthProvider.tsx        # Auth context
│   │   ├── AuthHeader.tsx          # Sign-in/out UI
│   │   └── NavBar.tsx              # Unified nav bar
│   └── app/
│       ├── layout.tsx              # Root layout (+ AuthProvider)
│       ├── page.tsx                # Dashboard
│       ├── robots.ts               # robots.txt
│       ├── login/
│       │   ├── page.tsx            # Login form
│       │   └── loading.tsx         # Login skeleton
│       ├── enhance/
│       │   ├── page.tsx            # AI enhancement
│       │   └── EnhanceAuditForm.tsx
│       ├── audit/
│       │   ├── page.tsx            # Public token view
│       │   ├── loading.tsx         # Audit loading skeleton
│       │   └── error.tsx           # Audit error boundary
│       ├── ShareButton.tsx         # Share modal
│       ├── DeleteAuditButton.tsx   # Delete button
│       └── api/
│           ├── audit-enhancer/
│           │   └── route.ts
│           ├── audits/
│           │   └── route.ts        # Delete + owner check
│           └── share-token/
│               └── route.ts        # Generate/revoke/regenerate
└── ...
```

### Design Decisions

| Decision | Why |
|----------|-----|
| Extend existing `audits` table instead of creating a new one | Avoids data migration. The app already queries `audits` — we layer auth on top without breaking anything. |
| `owner_id` is nullable initially, NOT NULL after backfill | Allows safe schema migration before any user exists. |
| Share tokens are UUIDs, not short codes | UUIDs are unguessable (122 bits of entropy). Short codes are guessable and need rate limiting. |
| Public audit view renders HTML via `dangerouslySetInnerHTML` | Audits are full HTML files with embedded CSS. Direct DOM injection preserves full fidelity. |
| `ip_hash` (SHA-256) instead of raw IP in `audit_views` | GDPR-friendly analytics. No PII stored. Hashing is one-way. |
| No distinction between invalid/revoked/missing tokens | Prevents enumeration attacks. Same "Audit Not Found" for all failure modes. |
| Service role bypass policy on `audits` | The enhancement API route runs server-side with the service role key. |
| `@supabase/ssr` instead of manual cookie handling | Next.js App Router requires cookie access via `next/headers` — `@supabase/ssr` abstracts this correctly. |
| Three Supabase clients (browser, server, middleware) | Browser uses localStorage, server components read cookies, middleware reads/writes cookies. `@supabase/ssr` provides the right factory for each. |

---

*Created: 2026-05-18 | Last updated: 2026-05-18*
