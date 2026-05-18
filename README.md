# All In Advertising Audit Portal

A simple Next.js, React, TypeScript, and Tailwind project for serving audit deliverables on Vercel. The interface follows All In Advertising's business DNA: revenue-focused, collaborative, modern, geometric, and anchored to the brand blue/gold logo system.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Audit Files

Keep source audits in the root `audits` directory. Each deliverable should include an `index.html` file, for example:

```text
audits/
  itk9/
    2026/
      may/
        technical-seo-audit/
          index.html
```

The `sync-audits` script copies `audits` into `public/audits` before `npm run dev` and `npm run build`, which makes the files available as static assets on Vercel.

```bash
npm run sync-audits
```

## Markdown Audit Enhancer

Open `/enhance` during local development to upload a `.md` SEO audit and generate a branded HTML deliverable from the project-local `seo-audit-enhancer` skill.

Set the provider key you want to use before running the app:

```bash
OPENAI_API_KEY=...
OPENAI_MODEL=gpt-5

DEEPSEEK_API_KEY=...
DEEPSEEK_MODEL=deepseek-v4-pro
DEEPSEEK_API_URL=https://api.deepseek.com/chat/completions

AUDIT_ENHANCER_MAX_OUTPUT_TOKENS=30000
AUDIT_ENHANCER_TIMEOUT_MS=120000
AUDIT_ENHANCER_LOG_SUCCESS_RESPONSES=false
AUDIT_ENHANCER_OPENAI_RESPONSE_FORMAT=json_object
AUDIT_ENHANCER_OPENAI_REASONING_EFFORT=low
AUDIT_ENHANCER_OPENAI_VERBOSITY=
AUDIT_ENHANCER_OPENAI_BACKGROUND=true
AUDIT_ENHANCER_OPENAI_POLL_INTERVAL_MS=3000
AUDIT_ENHANCER_OPENAI_POLL_TIMEOUT_MS=600000
AUDIT_ENHANCER_DEEPSEEK_RESPONSE_FORMAT=json_object
AUDIT_ENHANCER_DEEPSEEK_THINKING=disabled
```

Generated audits are written directly under `public/{client-slug}/{year}/{month}/` as a body fragment plus the assembled final deliverable, for example:

```text
public/
  audit.css
  header-template.html
  footer-template.html
  itk9/
    2026/
      may/
        audit-body.html
        technical-seo-audit.html
```

`audit-body.html` contains only the AI-generated audit sections. The published `{audit-type}.html` file is assembled locally by filling `public/header-template.html` and `public/footer-template.html` with form/markdown metadata, then inserting the body between them. On Vercel, generated filesystem files are not persistent; use the local workflow or add persistent storage before relying on uploads in production.

Every enhancement attempt writes a redacted JSONL log under `audit-enhancer-logs/YYYY-MM-DD/`. Failed provider calls also save the raw provider response body next to that log and return the `logId`, provider status, provider request id, and raw response path to the upload view. API keys and bearer tokens are redacted before logs are written.

OpenAI requests use Responses API background mode by default because large GPT-5 audit generations can exceed synchronous socket limits before response headers arrive. The app logs `X-Client-Request-Id` and each poll state so failed no-response calls can still be traced.

## Production

```bash
npm run build
npm run start
```

For Vercel, connect the GitHub repository under `fulfillment@allinadvertising.com`, keep the default Next.js build command, and deploy from the repository root.
