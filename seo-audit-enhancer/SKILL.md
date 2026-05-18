---
name: seo-audit-enhancer
description: |
  Transform SEO technical audit markdown files into polished, client-facing HTML presentations branded for All In Advertising.
  Use this skill when the user sends a .md file containing an SEO audit (technical audit, content audit, or combined) and asks for an "enhanced", "polished", "HTML", "web version", or "client-facing" version of it.
  Also use when the user mentions "Rock 4", "audit template", "audit redesign", or "improve the audit presentation" in the context of an .md audit file.
  Triggers: .md audit files, "enhance this audit", "polish this audit", "convert to HTML audit", "client-facing audit", "audit v2", "Rock 4 audit", "beautify audit", "HTML version of the audit".
---

# SEO Audit Enhancer

Transform raw `.md` SEO audit files into polished, branded audit body fragments for the All In Advertising audit templates.

## Workflow

### 1. Read the Input

Read the user's `.md` audit file. Extract these sections:

- **Client name** — from title or first heading
- **Audit type** — e.g., "Technical & Content SEO Audit", "Technical SEO Audit"
- **Date** — from file or current date
- **Executive Summary** — bullet points summarizing key findings
- **Metrics** — key numbers to feature in metric cards (issue counts, URLs affected, percentages)
- **Key Findings** — each finding with: title, priority (P0/P1/P2), root cause, evidence/statistics, affected URLs, plain-English explanation
- **Proposed Solutions** — numbered action steps per issue category
- **Immediate Action Items** — prioritized list of what to fix first, with ownership

### 2. Map Sections to the Body Template

Load `assets/template.html` and replace each body `{{PLACEHOLDER}}` with generated HTML. The template contains only inner audit content. Do not generate the document shell, cover page, logo, footer, `<html>`, `<head>`, `<body>`, stylesheet links, or embedded `<style>` blocks.

The static document shell and header metadata live outside the model output:

- `public/header-template.html` - AIA-branded document head and cover page.
- `public/footer-template.html` - AIA-branded footer and closing document tags.
- `public/audit.css` - Shared stylesheet.
- The app derives client name, audit type, date, quarter, and supporting workbook button from form input, markdown context, and the current date.

| Placeholder | Source | How to Generate |
|:---|:---|:---|
| `{{EXEC_ITEMS}}` | .md executive summary | `<li><strong>Key point</strong> — supporting detail.</li>` items |
| `{{METRIC_CARDS}}` | .md stats | 4 `<div class="metric-card">` blocks with `value` and `label` |
| `{{SOURCE_NOTE}}` | .md notes | Crawl source, date, validation notes |
| `{{SEVERITY_LEGEND}}` | P0/P1/P2 counts | Color-coded severity spans |
| `{{SEVERITY_BAR}}` | P0/P1/P2 ratios | `<div class="seg p0-seg" style="width:X%;">` bars |
| `{{ACTION_TABLE_ROWS}}` | .md action items | `<tr class="row-p0">` rows with badge, description, scope, impact, owner badge |
| `{{FINDING_CARDS}}` | .md key findings | Cards grouped with `<h3 class="section-label">` category headers |
| `{{SOLUTION_STEPS}}` | .md proposed solutions | `<div class="solution-step">` numbered steps by category |
| `{{BEFORE_AFTER}}` | .md findings | Comparison grids showing current vs recommended state |
| `{{GLOSSARY_ITEMS}}` | Derived | 6-8 `<div class="glossary-item">` definitions for technical terms used |
| `{{FAQ_ITEMS}}` | Derived | 3-4 relevant Q&A paragraphs |
| `{{INSIGHT_BOX}}` | .md analysis | Optional key competitive/strategic insight callout |

### 3. Content Generation Rules

**Priority badges:** Use P0 (red, `.badge-p0`), P1 (orange, `.badge-p1`), P2 (yellow, `.badge-p2`) consistently throughout.

**Owner badges:** Use `.badge-aia` for "AIA" and `.badge-client` for "Client Dev".

**"What This Means" boxes:** Every finding card must include a plain-English `.what-this-means` explanation. Translate technical findings into business impact language.

**Stat grids:** When findings include multiple statistics, use `.stat-grid` with `.stat-item` + `.stat-num` blocks for visual impact.

**URL lists:** Group representative URLs in `.url-list` blocks styled as monospace.

**Before/After comparisons:** Use `.comparison-grid` with exactly two `.comparison-col` children. Each column must include `.col-header.before` or `.col-header.after` followed by `.col-body`. If the comparison needs bullet points, place them in `<ul class="comparison-list">` inside `.col-body`. Do not create raw `<div class="before">` / `<div class="after">` cards with inline borders or inline padding.

**Solution steps:** Group under category H3s. Each step uses `.solution-step` with numbered circle and `.step-body`. Keep steps actionable.

**Glossary:** Always include 6-8 glossary terms relevant to the audit's technical concepts (H1, canonical, orphan, crawl budget, 301 redirect chain, meta description, near-duplicate, CMS template, etc.). Use plain language.

**FAQ:** Generate 3-4 questions specific to the client context. Common patterns: "What should we fix first?", "How long until results?", "Which team handles what?", "Do we need to remove pages?"

### 4. Polish and Output

- **Tone:** Professional, authoritative, corporate. No casual language. Use "we recommend" not "you should".
- **Brand consistency:** Every page uses AIA blue (#3e71b8) and gold (#f6b328). Logo appears only in the static cover and footer templates.
- **No em dashes:** Use " — " (space-hyphen-hyphen-space) or commas instead.
- **Print-ready:** All pages have `page-break-after: always` for clean PDF conversion.
- **Responsive:** Grid layouts collapse to single column on mobile.

Save output under `public/{client-slug}/{year}/{month}/` and confirm the final generated file path to the user:

- `audit-body.html` - AI-generated audit content only.
- `{audit-type}.html` - final assembled deliverable built locally by wrapping the body between `public/header-template.html` and `public/footer-template.html`.

## Template Reference

The body template is at `assets/template.html`. It contains only the inner audit pages with `{{PLACEHOLDER}}` markers. Header, footer, CSS link, logo, and document tags are fixed public templates.

### CSS Classes Quick Reference

| Class | Purpose |
|:---|:---|
| `.page` / `.page.cover` | Page container / dark cover page |
| `.metrics` / `.metric-card` | 4-column metric grid |
| `.badge-p0` / `.badge-p1` / `.badge-p2` | Priority badges |
| `.badge-aia` / `.badge-client` | Owner badges |
| `.exec-summary` | Blue-tinted summary box |
| `.finding-card` | Individual finding container |
| `.finding-header` / `.finding-title` | Finding header row |
| `.what-this-means` | Plain-English explanation box |
| `.stat-grid` / `.stat-item` / `.stat-num` | 2-column stat display |
| `.url-list` | Monospace URL listing |
| `.comparison-grid` / `.comparison-col` / `.col-header.before` / `.col-header.after` / `.comparison-list` | Before/after columns and bullet lists |
| `.solution-step` / `.step-num` / `.step-body` | Numbered solution steps |
| `.glossary-grid` / `.glossary-item` | 2-column glossary |
| `tr.row-p0` / `tr.row-p1` / `tr.row-p2` | Priority-colored table rows |
| `.chart-placeholder` | Dashed-border chart placeholder |
| `.footer` | Footer section |

## Examples

### Finding Card Pattern

```html
<div class="finding-card">
  <div class="finding-header">
    <span class="badge badge-p0">P0</span>
    <h3 class="finding-title">Title describing the issue</h3>
  </div>
  <div class="finding-desc">
    <strong>Root cause:</strong> Explanation of what caused this.
  </div>
  <div class="stat-grid">
    <div class="stat-item"><span class="stat-num">N</span> Description</div>
    ...
  </div>
  <div class="what-this-means">
    <strong>What This Means:</strong> Plain-English business impact.
  </div>
  <div class="url-list">
    <strong>Representative URLs:</strong><br>
    https://...
  </div>
</div>
```

### Action Table Row Pattern

```html
<tr class="row-p0">
  <td><span class="badge badge-p0">P0</span></td>
  <td><strong>Issue title</strong><br><span style="color:var(--gray-500);font-size:13px;">Category</span></td>
  <td>Concise description of the fix.</td>
  <td><strong>Impact metric</strong><br><span style="font-size:12px;color:var(--gray-500);">Secondary impact</span></td>
  <td><span class="badge badge-aia">AIA</span></td>
</tr>
```
