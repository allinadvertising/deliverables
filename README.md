# All In Advertising Audit Portal

A simple Next.js, React, TypeScript, and Tailwind project for serving audit deliverables on Vercel.

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

## Production

```bash
npm run build
npm run start
```

For Vercel, connect the GitHub repository under `fulfillment@allinadvertising.com`, keep the default Next.js build command, and deploy from the repository root.
