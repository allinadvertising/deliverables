---
name: seo-audit-enhancer
description: |
  Transform SEO technical audit markdown files into structured JSON documents that power component-driven audit pages.
  Use this skill when the user sends a .md file containing an SEO audit and asks for an "enhanced", "polished", "HTML", "web version", or "client-facing" version.
  Also use when the user mentions "audit template", "audit redesign", or "improve the audit presentation" in the context of an .md audit file.
  Triggers: .md audit files, "enhance this audit", "polish this audit", "convert to HTML audit", "client-facing audit", "audit v2", "audit redesign".
---

# SEO Audit Enhancer

Transform raw `.md` SEO audit files into structured JSON documents. The JSON is stored in Supabase (JSONB column `audits.content`) and rendered by React server components : no HTML generation needed.

## Workflow

### 1. Read the Input

Read the user's `.md` audit file. Extract every section listed below. If a section is missing, note it as null or empty array where appropriate.

### 2. Output JSON

Return a single JSON object matching the `AuditContent` schema. Do NOT return HTML, markdown, or any other format. Do NOT wrap the JSON in markdown code fences unless the calling system requires it. The JSON must be the complete response body.

### 3. Validate

After generating, verify against `schema.json`. Every required field must be present. Every enum value must match exactly ("P0", "P1", "P2"; "AIA", "Client Dev").

---

## JSON Schema

```typescript
type AuditContent = {
  meta: {
    clientName: string;           // e.g. "Fossil Age Minerals"
    auditType: string;            // e.g. "Technical & Content SEO Audit"
    date: string;                 // e.g. "May 2026"
    // coverBadge removed (deprecated May 2026)
    supportingFile: string|null;  // URL to supporting workbook, or null
    sourceNote: string|null;      // Data source attribution, or null (never populated in existing audits)
  };
  executiveSummary: {
    items: string[];              // 3-6 bullet-point key insights (At a Glance)
    metricCards: {                // Exactly 4 or 8 cards
      value: string;              // e.g. "203", "20.2%"
      label: string;              // e.g. "Overlength Meta Descriptions"
      change: string|null;        // e.g. "+12%", null if no trend
    }[];
    severity?: {                  // Optional: omit if no severity data
      p0Count: number;
      p1Count: number;
      p2Count: number;
    };
  };
  actionItems: {
    priority: "P0"|"P1"|"P2";
    title: string;                // Concise action title
    category: string;             // e.g. "Heading Structure", "Metadata Quality"
    scope: string;                // What the fix covers
    impact: string;               // Primary expected impact
    secondaryImpact: string|null; // Secondary benefit, or null
  }[];
  findings: {
    category: string;             // Groups findings under a section-label
    priority: "P0"|"P1"|"P2";
    title: string;
    rootCause: string;            // Technical explanation of root cause
    statistics?: {                // Optional: some findings have no stats
      number: string;             // e.g. "777"
      description: string;        // e.g. "exact-duplicate URLs"
    }[];
    whatThisMeans: string;        // Plain-English business impact : REQUIRED for every finding
    representativeUrls?: string[];// Optional: affected URLs
    impacts?: {                   // Optional: impact grid items
      label: string;              // e.g. "Search Visibility"
      value: string;              // e.g. "High : blocks indexing of key pages"
    }[];
  }[];
  solutions: {
    category: string;             // Mirrors finding categories
    steps: {
      title: string;              // Short action title
      description: string;        // Full implementation detail
    }[];
  }[];
  beforeAfter: {
    label: string;                // e.g. "Heading Structure Fix", "Redirect Chain"
    before: string;               // Description of the problem state
    after: string;                // Description of the fixed/recommended state
  }[];
  insightBox: string|null;        // Key competitive/strategic insight, or null
  glossary: {
    term: string;                 // Technical term
    definition: string;           // Plain-English definition
  }[];
  faq: {
    question: string;             // Client-relevant question
    answer: string;               // Clear, actionable answer
  }[];
};
```

---

## Field Population Rules

### meta

| Field | How to Populate |
|-------|----------------|
| `clientName` | From markdown title or first heading. Title-case. |
| `auditType` | Infer from content: "Technical SEO Audit", "Technical & Content SEO Audit", "GSC Coverage Audit", "Schema Markup Audit", "GSC and GA4 Drop Review". |
| `date` | "Month Year" format, e.g. "May 2026". |
| ~~`coverBadge`~~ | **Deprecated May 2026.** Do not populate. Field is ignored by the rendering engine. |
| `supportingFile` | URL if provided in markdown, else null. |
| `sourceNote` | "Data sourced from Google Search Console, Screaming Frog crawl, and GA4." or null. |

### executiveSummary

- **items:** Extract 3-6 key insights from the markdown executive summary. Each item is a single sentence starting with a strong lead: e.g. "Critical first fix: ...", "Sitemap-driven crawl waste: ...".
- **metricCards:** Exactly 4 or 8 cards. Pull numbers from the markdown: issue counts, URL counts, percentage changes. The `label` should be short and descriptive. `change` is almost always null unless a trend is explicitly stated.
- **severity:** Count P0/P1/P2 items across all findings and action items. Omit if no priority data exists.

### actionItems

- Extract from the markdown's "Immediate Action Items" or "Prioritized Actions" section.
- **priority:** Map to P0 (critical, blocking), P1 (high, next sprint), P2 (moderate, backlog).
- **category:** Derive from the finding category this action addresses.
- **scope:** What pages/templates/sections this affects.
- **impact:** Expected outcome in business terms. Use "We expect..." phrasing.

### findings

- Each finding must have a **whatThisMeans** field : translate technical issues into business impact.
- Group under category names: "Heading Structure", "Metadata Quality", "Crawl & Index Health", "Content Quality & Duplication", "Structured Data", "URL Architecture", "Sitemap & Governance", etc.
- **statistics:** Pull exact numbers from the markdown. Each stat is a `{ number, description }` pair. Omit if the finding has no quantitative evidence.
- **representativeUrls:** List 1-5 example URLs. Omit if not applicable.
- **impacts:** 0-4 impact items with `{ label, value }`. Use labels like "Search Visibility", "Crawl Budget", "User Experience", "Index Coverage".

### solutions

- Categories mirror finding categories. Steps are numbered implementation actions.
- **title:** Short action phrase, e.g. "Patch the Webflow Collection template".
- **description:** Full detail: what to change, where, expected outcome.

### beforeAfter

- Extract 1-5 comparison pairs from the markdown. Each pair has a `label`, `before` (problem state), and `after` (fixed/recommended state).
- **Do not duplicate pairs.** If the markdown has the same Before/After in two positions, include it once.

### insightBox

- If the markdown contains a strategic insight about competitive positioning, market opportunity, or architectural pattern: capture it here. Otherwise null.
- Example: "Most duplication originates from navigational components : not editorial content. By cleaning internal link generation and reinforcing canonicals at the theme level, [client] can eliminate the majority of duplicate and near-duplicate issues without changing a single page of content."

### glossary

- Always include 6-10 terms relevant to the audit.
- Common terms: H1, canonical, orphan URL, crawl budget, 301 redirect chain, meta description, near-duplicate, CMS template, robots.txt, sitemap, schema markup, JSON-LD, noindex, index coverage, CTR.
- Definitions must be in plain English : no jargon.

### faq

- Generate 3-5 questions specific to the client context and audit findings.
- Common patterns: "What should we fix first?", "How long until we see results?", "Which team handles what?", "Do we need to remove pages?", "Will this affect our current rankings?"
- Answers must be specific and actionable : not generic.

---

## Quality Rules

- **Tone:** Professional, authoritative, corporate. No casual language. Use "we recommend" not "you should".
- **No em dashes:** Use colons (:) instead.
- **Plain English:** Every `whatThisMeans`, every `definition`, every `description` must be understandable by a non-technical business stakeholder.
- **Consistency:** Priority values must be exactly "P0", "P1", "P2".
- **Completeness:** Every finding MUST have a `whatThisMeans`. Every solution step MUST have a `title` and `description`.
- **Accuracy:** Numbers in `statistics`, `metricCards`, and `severity` must match the source markdown.
- **Validation:** Before returning, verify the JSON against `schema.json`. Check that all required fields are present.

---

## Output Format

Return ONLY the JSON object. No preamble, no explanation, no markdown code fences (unless the calling system wraps all responses in fences).

```json
{
  "meta": { ... },
  "executiveSummary": { ... },
  "actionItems": [ ... ],
  "findings": [ ... ],
  "solutions": [ ... ],
  "beforeAfter": [ ... ],
  "insightBox": null,
  "glossary": [ ... ],
  "faq": [ ... ]
}
```

## Validation Reference

The formal JSON Schema is at `schema.json`. Key constraints:
- `metricCards`: minItems 4, maxItems 8
- `actionItems[].priority`: enum ["P0", "P1", "P2"]
- `severity.p*Count`: integer, minimum 0
- `solutions[].steps`: minItems 1
- `beforeAfter`: minItems 1
- `glossary`: minItems 1
- `faq`: minItems 1

## Examples

### Metric Card

```json
{ "value": "203", "label": "Overlength Meta Descriptions", "change": null }
```

### Action Item

```json
{
  "priority": "P0",
  "title": "Patch Webflow Collection template for Board & Train pages",
  "category": "Heading Structure",
  "scope": "All /board-and-train/ URLs generated by the Webflow CMS Collection template",
  "impact": "Fixes duplicated H1s, multiple H1s, non-sequential headings, and 100% near-duplicate content across the entire /board-and-train/ URL set",
  "secondaryImpact": "Also resolves 54 overlength titles on the same template"
}
```

### Finding

```json
{
  "category": "Crawl & Index Health",
  "priority": "P0",
  "title": "Content: Exact Duplicates from Parameterized Product URLs",
  "rootCause": "Recommendation and merchandising links expose parameterized product URLs as crawlable, indexable alternatives to the same product pages",
  "statistics": [
    { "number": "777", "description": "exact-duplicate URLs" },
    { "number": "767", "description": "contain pr_prod_strat" }
  ],
  "whatThisMeans": "Search engines split signals across duplicates, wasting crawl budget and suppressing the canonical product page's ability to rank",
  "representativeUrls": [
    "https://example.com/products/led-lights?pr_prod_strat=e5_desc&pr_rec_id=..."
  ],
  "impacts": [
    { "label": "Crawl Budget", "value": "777 duplicate URLs consume crawl allocation" },
    { "label": "Index Coverage", "value": "Canonical signals diluted across parameter variants" }
  ]
}
```

### Solution

```json
{
  "category": "Crawl & Index Health",
  "steps": [
    {
      "title": "Emit canonical tags for all indexable templates",
      "description": "Use Shopify's canonical_url value in theme.liquid for product, collection, and page templates."
    },
    {
      "title": "Update internal links to clean product URLs",
      "description": "Modify product cards, recommendation blocks, collection grids, and app snippets so all internal links point to clean product URLs only."
    }
  ]
}
```

### Glossary

```json
{ "term": "Canonical URL", "definition": "The preferred version of a page that you want search engines to index and rank. When multiple URLs serve the same content, the canonical tag tells Google which one is the real page." }
```

### FAQ

```json
{ "question": "What should we fix first to regain clicks?", "answer": "We recommend addressing two items in parallel: refresh and retarget priority collection pages for SERP intent, and normalize analytics by consolidating to a single tag load path. This restores click share where demand exists and ensures the data is trustworthy as changes roll out." }
```
