# AI Agent Implementation Prompt: Jordan Feedback Integration

You are working in the `deliverables` Next.js app. Implement Jordan Leavitt's July 30, 2026 feedback across two active deliverables: the Snowie monthly SEO report and the TOICO kickoff mockup.

## Source Context

Use these local reference artifacts before editing:

- Raw transcript with screenshot base64: `docs/jordan-feedback-2026-07-30/raw-transcript-with-base64.md`
- Executive summary: `docs/jordan-feedback-2026-07-30/executive-summary.md`
- Target Snowie route: `src/app/reports/snowie/june-2026/page.tsx`
- Target Snowie data: `src/lib/reports/snowie-june-2026.ts`
- Shared report renderer: `src/components/reports/storytelling/SeoStoryReport.tsx`
- Report sections: `src/components/reports/storytelling/ReportExecutive.tsx`, `ReportDashboard.tsx`, `ReportJourney.tsx`, `ReportObstacles.tsx`, `ReportAppendix.tsx`
- Target TOICO V2 route: `src/app/kickoff/toico/v2/page.tsx`
- Target TOICO V2 data: `src/lib/kickoff/toico-v2.ts`
- TOICO source data: `src/lib/kickoff/toico.ts`
- TOICO V2 sections: `src/components/kickoff/v2/*`
- Global print/layout CSS: `src/app/globals.css`

## Primary Goals

1. Make the Snowie report feel like an executive business report, not an SEO data dump.
2. Make the TOICO kickoff mockup feel branded, specific, and decision-oriented.
3. Convert Jordan's comments into visible UX/content changes without overhauling unrelated app structure.
4. Keep approved sections intact where Jordan said “Perfect, no changes.”

## Snowie Monthly SEO Report Plan

1. Update `src/lib/reports/snowie-june-2026.ts` so the content directly ties organic performance to business priorities.
   - Replace or revise the “Conversions” power line. Do not leave it as a dead-end “Insufficient data” statement.
   - If real revenue/conversion data is not available in the repo, create an explicit placeholder model that says the report should pull revenue from WhatConverts, GA4 once reliable, Shopify, WooCommerce, or the client's CMS.
   - Add one dummy business objective for template purposes, such as “Increase qualified equipment and flavor-syrup demand from organic search.”
   - Reframe technical health in plain language that an Account Manager can explain.

2. Improve visual emphasis in the report renderer.
   - In `ReportDashboard.tsx`, make positive changes like `+11.9%` visually celebratory instead of blending into body text.
   - Add stronger success cues for positive KPI rows: green accents, up-arrow indicator, bolder change treatment, or equivalent restrained business-report UI.
   - Keep the table readable on print and mobile.
   - Consider renaming the visual section from “Recommended chart briefs” to something more action-oriented if it still reads internal.

3. Add business-priority context to “what we did / what is next.”
   - In `ReportJourney.tsx` or the Snowie journey data, make each workstream connect to a business priority.
   - Suggested pattern: `Business priority`, `What we saw`, `What we did`, `What needs attention next`.
   - Use Jordan's suggested direction for the next-priority headline: “What Needs Attention Next?”

4. Fix conversion/revenue framing.
   - Add a report section, row, or data note that says revenue should be sourced from the best available system in this order: WhatConverts, reliable GA4, Shopify/WooCommerce/CMS reports.
   - For Snowie, avoid claiming actual revenue unless a reliable source is present in the repo.
   - Make the gap actionable: owner, source to connect, and next report expectation.

5. Simplify Technical Health.
   - In `ReportAppendix.tsx` and/or `technicalItems`, use plain labels: `What is broken`, `Why it matters`, `What we will do`.
   - Remove jargon where a non-SEO Account Manager would struggle.
   - Keep enough technical detail for developers to act.

## TOICO Kickoff V2 Plan

1. Remove visible scope/hour emphasis from kickoff sections.
   - Jordan specifically asked to remove hours from “Scope” sections and rethink how scope is presented.
   - In `src/lib/kickoff/toico-v2.ts`, stop foregrounding `29h`, `95 hours`, and `% of the 90-day plan` as client-facing anchors.
   - In `KickoffV2Strategy.tsx`, remove or replace the progress bar and “of the 90-day plan” labels if they read like plan-percentage math.
   - Keep effort/sequence internally if needed, but present the client-facing story as phases, priorities, outcomes, and decisions.

2. Replace generic headlines.
   - In `KickoffV2Strategy.tsx`, replace “One dependency-led roadmap, delivered in three phases.” with a clearer headline such as “3 Month Roadmap.”
   - Audit all `KickoffV2Heading` titles for broad or abstract phrasing.
   - Headline rules: concrete, short, client-facing, and tied to a decision or outcome.

3. Match the Bernie example branding direction where possible.
   - Jordan requested the branding/font feel from the Bernie example.
   - Inspect existing styles in `src/app/globals.css` and the current `kickoff-v2-*` classes.
   - Adjust typography, spacing, and brand treatment without adding a separate design system.
   - Preserve All In brand elements through `BrandLogo` and existing palette unless the Bernie reference embedded in Slack raw screenshots clearly indicates otherwise.

4. Clarify whether each section is past work or future priority.
   - In `KickoffV2Focus.tsx`, `KickoffV2Execution.tsx`, and the V2 data, label content as `Priority`, `Evidence`, `Recommended action`, and `Expected business impact`.
   - Avoid ambiguous text that could mean either “already completed” or “to do next.”
   - Add a dummy business objective for template purposes, for example: “Increase qualified organic sessions to product and category pages that can drive quote requests and ecommerce revenue.”

5. Differentiate overlapping roadmap sections.
   - If two sections both describe the three-month plan, give them separate jobs.
   - Recommended split: one section for executive roadmap phases, one section for implementation gates/evidence/owners.
   - Remove duplicate explanations that say the same thing in different layouts.

6. Remove or revise fluff.
   - Use the raw transcript screenshots to identify sections Jordan called fluff, too broad, or not needed.
   - If the section is redundant, remove it.
   - If it has value, rewrite it around a specific decision, impact, and next action.

## Acceptance Criteria

- Snowie report route `/reports/snowie/june-2026` shows a stronger business narrative, visible positive KPI cues, clearer revenue/conversion handling, and plain-language technical health.
- TOICO kickoff V2 route `/kickoff/toico/v2` removes client-facing hour/scope math, has sharper headings, clearer phase roles, and includes a dummy business objective.
- No unrelated files are refactored.
- Existing approved content is preserved unless directly contradicted by another Jordan comment in the requested Slack range.
- Run `npm run lint` or the repo's available validation command after edits.
- Check both routes in desktop and mobile widths if a dev server can be run.

## Implementation Notes

- Keep changes scoped to `src/lib/reports/snowie-june-2026.ts`, `src/components/reports/storytelling/*`, `src/lib/kickoff/toico-v2.ts`, `src/components/kickoff/v2/*`, and `src/app/globals.css` unless the codebase requires otherwise.
- Do not commit `raw-transcript-with-base64.md` or `executive-summary.md`; they are intentionally ignored.
- Keep this implementation plan tracked in git.
