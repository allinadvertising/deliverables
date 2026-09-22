# Deploy (only after the user approves the rendered report)

The repo is connected to Vercel and auto-deploys `main` to production at **`https://deliverables-pearl.vercel.app`**. A report becomes shareable only once its commit is on `origin/main` and Vercel has built it. The live URL is `https://deliverables-pearl.vercel.app/reports/<slug>/<month>-<year>`.

**Do not run any of this until the user has seen the local render and explicitly approved publishing.** Pushing to `main` publishes to a public, no-login URL — treat it as an outward-facing action.

## 1. Validate the build won't break the deploy

Run a production build to catch type errors before pushing:
```
npm run build
```
Expect it to **fail locally** at a Supabase-dependent route (`/html-audits/...`) with "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY" — those env vars exist on Vercel but not locally, so this failure is normal and unrelated to the report. What matters is the line above it: **"Running TypeScript … Finished TypeScript"** must pass. If TypeScript compiles and the report rendered in dev, the Vercel build will succeed. A TypeScript *error* (not the Supabase one) must be fixed before pushing.

## 2. Commit

Two commits keep history clean when you also touched shared components:
- one for any shared-component change (e.g. `fix(reports): ...`),
- one for the report itself (`feat(<slug>): add <Month> <Year> report`).

Stage only the report/component files — do **not** commit `.claude/` scratch or launch configs. If `git status` shows a large batch of tracked files as staged deletions while those files still exist on disk (a known corrupted-index state on this iCloud working tree), run `git reset` first to clear the phantom staged deletions (it changes only the index, not your files), then `git add` only your report files. Never commit those deletions, and never use `git add -A` or `git commit -a` here. End each commit message with:
```
Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>
```

## 3. Reconcile with the remote, then push

The team commits reports directly to `main`, and other machines/sessions push between your pulls, so local `main` is often **behind** `origin/main`. A plain push will bounce. Reconcile first:
```
git fetch origin
git rebase origin/main      # report files rarely overlap kickoff/other work — expect no conflicts
git push origin main
```
If the rebase does conflict, resolve within the report/component files (theirs vs yours), or stop and ask the user rather than guessing. Never force-push `main`.

## 4. Verify the live URL

Vercel builds in ~1–3 minutes. Poll the production URL until it serves the new content — key on a unique phrase from the new cover headline so you're not fooled by a stale/old deploy:
```
url="https://deliverables-pearl.vercel.app/reports/<slug>/<month>-<year>"
for i in $(seq 1 24); do
  code=$(curl -s -o /tmp/rep.html -w "%{http_code}" "$url")
  if [ "$code" = "200" ] && grep -q "<unique phrase from cover>" /tmp/rep.html; then echo "LIVE after ~$((i*15))s"; exit 0; fi
  sleep 15
done; echo "TIMEOUT"; exit 1
```
Run it in the background. When it reports LIVE, hand the user the URL and tell them it's public/no-login (fine for client sharing, not secret).

If it never goes live: the push may not have reached `origin/main` (re-check `git status -sb`), or the Vercel build failed on something other than the known Supabase route — check the actual error and fix it.

## 5. Export the downloadable HTML deliverable (the final client deliverable)

The Vercel link is the shareable preview; the **file the client receives is a single self-contained `.html`**. Produce it with the repo's export script while the dev server is running (it fetches the rendered route, inlines every stylesheet, font, and image as a data URI, strips the Next.js runtime, and rewires the Print / Back-to-top buttons with a tiny vanilla handler):
```
node scripts/export-report.mjs \
  "http://localhost:3000/reports/<slug>/<month>-<year>" \
  "C:/Users/busta/iCloudDrive/All In Advertising/Claude Project Hub/<Client Folder>/<Client>-SEO-Report-<Month>-<Year>.html"
```
The output opens in any browser with no server (expect ~3-4 MB with fonts inlined). Match the house filename pattern (`EverWhite-SEO-Report-August-2026.html`, `VIM-Products-SEO-Report-August-2026.html`). It is a point-in-time snapshot, so re-run it after any edit to the report data. Hand the file to the user with `SendUserFile` and attach it to the ClickUp report task. A headless-Chrome `--print-to-pdf` of the same route can optionally accompany it, but the HTML is the deliverable of record.

Note on committing the skill: the report commit stays report-only (never `.claude/`). Publishing or updating the `seo-report` skill itself is a separate, deliberate commit of `.claude/skills/seo-report/**` (SKILL.md, references, `clients.json`, scripts) — do that only when asked to publish/update the skill, and keep it out of the report commit.
