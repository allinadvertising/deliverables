import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

export const intradynKickoffV2: KickoffV2Data = {
  printAriaLabel: "Print Intradyn kickoff V2 as PDF",
  footerNote: "Intradyn SEO Strategy Kickoff | August 2026",
  cover: {
    clientName: "Intradyn",
    subtitle: "Your organic search strategy for the next three months.",
  },
  meta: [
    { label: "Period", value: "August to October 2026" },
    {
      label: "Business objective",
      value: "Increase qualified leads, not traffic volume",
    },
    { label: "Roadmap", value: "Stabilize, recover, route demand" },
    { label: "Platform", value: "WordPress, Yoast, Cloudflare, WPEngine" },
  ],
  summary: {
    title: "What changes first",
    objectiveLabel: "Business objective",
    objective:
      "Use SEO to generate qualified leads for Intradyn's email archiving, SMS archiving, compliance, and future AI archiving products, while respecting the client's one to two year sales cycle and weekly lead-review KPI.",
    lead:
      "The roadmap shows that Intradyn does not need more low-value visibility. It already collected 1.59M impressions over 90 days, but site-wide CTR sits near 0.24% and the homepage converts far better than the rest of the site. The next quarter should shift reporting and execution from impressions to lead capture.",
    emphasis:
      "The sequence is deliberate: catch any theme-related regression, clean crawl signals, protect the backlink profile, then recover and route the pages closest to a qualified lead.",
  },
  strategy: {
    title: "3 Month Roadmap",
    gridClassName: "lg:grid-cols-3",
    operatingPrinciple:
      "Measure progress against qualified-lead paths and commercial-page recovery, not site-wide impressions.",
    phases: [
      {
        accent: "blue",
        month: "Month 1",
        theme: "Stabilize and verify",
        objective:
          "Diagnose the homepage and branded-query dip, remove stale sitemap noise, rescue valid not-indexed pages, document spam-link risk, and set a lead-based reporting frame.",
        deliverable: "Stability, indexation, and reporting baseline",
        businessOutcome:
          "The account starts from clean evidence, the client sees the right metric, and any theme migration damage is caught while it can still be fixed quickly.",
      },
      {
        accent: "gold",
        month: "Month 2",
        theme: "Recover commercial pages",
        objective:
          "Recover lost alternatives and comparison pages, consolidate cannibalized topics, and rebuild the pages that sit closest to a lead.",
        deliverable: "Commercial recovery and consolidation release",
        businessOutcome:
          "The strongest buyer-intent assets regain visibility and each recovered page has a clearer path toward lead generation.",
      },
      {
        accent: "blue",
        month: "Month 3",
        theme: "Route AI visibility into pipeline",
        objective:
          "Add commercial paths from AI-harvested pages, protect the local government page, and begin the AI archiving category leadership track before the product launches.",
        deliverable: "AI visibility and lead-routing growth plan",
        businessOutcome:
          "The site turns residual informational traffic into product discovery and starts building authority for the upcoming AI archiving offer.",
      },
    ],
  },
  focus: {
    title: "Six priorities for qualified-lead growth",
    volumeLabel: "Evidence",
    scopeLabel: "Scope impact",
    footnote:
      "Roadmap evidence comes from the Intradyn consolidated SEO roadmap dated August 2026, with GSC performance through 2026-08-15, page indexing last updated 2026-08-13, AI visibility through 2026-08-16, and Ahrefs captured 2026-08-18. Client context is from the Knowledge Center Intradyn intake record.",
    items: [
      {
        number: "01",
        title: "Check the homepage during the theme overhaul",
        businessObjective:
          "Protect the page with the healthiest click-through rate before the theme migration finishes.",
        evidence:
          "The homepage dropped 52 clicks over 28 days, from 131 to 79. The branded query intradyn dropped 47 clicks, from 110 to 63, while a theme overhaul has been in progress for roughly two months.",
        volume: "52 homepage clicks lost in 28 days",
        scopeImpact: "Homepage title, H1, render, internal links, Googlebot fetch",
        expectedImpact:
          "The team knows within a week whether the theme update damaged the site's strongest page or whether the dip is demand and seasonality.",
        recommendedAction:
          "Compare the current homepage against the pre-overhaul version, check title and H1 output, fetch as Googlebot, and monitor branded impressions weekly for four weeks.",
        status: "P0, immediate diagnosis",
      },
      {
        number: "02",
        title: "Clean stale sitemap and indexation signals",
        businessObjective:
          "Give Google one accurate inventory before deeper indexation work starts.",
        evidence:
          "GSC shows three submitted sitemaps: the active https sitemap with 508 discovered pages, a duplicate HTTP sitemap, and a dead blog.intradyn.com sitemap that has failed since 2014.",
        volume: "3 submitted sitemaps, 2 should be removed",
        scopeImpact: "GSC sitemap submissions and canonical inventory",
        expectedImpact:
          "Coverage reporting becomes cleaner and the team can reconcile sitemap URLs against indexed and not-indexed pages without legacy noise.",
        recommendedAction:
          "Remove the HTTP duplicate and dead blog sitemap, then confirm the active sitemap lists canonical, indexable, 200-status URLs only.",
        status: "P0, quick cleanup",
      },
      {
        number: "03",
        title: "Rescue valid not-indexed pages and close errors",
        businessObjective:
          "Recover commercially useful pages that Google currently cannot or will not index.",
        evidence:
          "GSC shows 594 indexed pages against 491 not indexed. Two valuable pages are named as rescue candidates: /social-media-compliance-checklist/ and /features/easy-redaction-tool/. The same report shows 11 404s, one 5xx, one other 4xx, and 23 noindex pages.",
        volume: "491 not indexed, 2 named rescue pages",
        scopeImpact: "GSC coverage, internal links, noindex review, 404 and 5xx fixes",
        expectedImpact:
          "A product feature page and a compliance checklist become findable, while small error buckets close instead of lingering.",
        recommendedAction:
          "Confirm sitemap inclusion, strengthen internal links, improve depth and uniqueness, request indexing, resolve 404 and server errors, and audit all 23 noindex URLs.",
        status: "P0, indexation recovery",
      },
      {
        number: "04",
        title: "Document and neutralize spam-link risk",
        businessObjective:
          "Remove a risk variable without pretending it caused the decline.",
        evidence:
          "Ahrefs shows referring domains grew by 689, with roughly 447 tied to spam networks, including SEOExpress.org testimonial anchors, Telegram and buy-backlinks anchors, and brand-variation domains such as exploreintradyn.com and trustintradyn.com.",
        volume: "About 447 suspicious domains",
        scopeImpact: "Ahrefs export, GSC disavow, monthly backlink monitoring",
        expectedImpact:
          "The spam network is neutralized and monitored while legitimate assets stay protected.",
        recommendedAction:
          "Prepare a domain-level disavow for clearly toxic domains, skip removal outreach, and state to the client that this is hygiene and risk control, not a promised ranking recovery.",
        status: "P0, account risk",
      },
      {
        number: "05",
        title: "Recover lost commercial pages",
        businessObjective:
          "Bring back the pages closest to qualified lead intent.",
        evidence:
          "Ahrefs marks five commercial pages as Lost: /commvault-alternatives/, /saas-archiving-appliance/, /hosted-email-archiving-security-solutions/, /small-business-email-service/, and /email-alternatives/. The surviving alternatives and comparison cluster carries the site's strongest commercial value.",
        volume: "5 lost buyer-intent pages",
        scopeImpact: "Commercial pages, internal links, redirects, indexing",
        expectedImpact:
          "Alternatives, comparison, and archiving pages regain visibility on the page type most likely to produce leads.",
        recommendedAction:
          "Confirm whether each page is live, removed, decayed, or 404ing. Refresh live pages, rebuild internal links, request indexing, and 301 removed pages to the closest live equivalent.",
        status: "P1, direct lead lever",
      },
      {
        number: "06",
        title: "Route AI-harvested visibility toward products",
        businessObjective:
          "Turn residual informational visits into product discovery instead of exits.",
        evidence:
          "/data-retention-policy/ drew 99,925 AI-feature impressions in 90 days, 37.8% of all AI impressions on the site, while web search produced six clicks in 28 days. AI cites informational pages and not the commercial product pages.",
        volume: "264,000 AI impressions across 429 pages",
        scopeImpact: "Top AI-cited pages, contextual CTAs, product links",
        expectedImpact:
          "Readers who still arrive from AI-harvested informational topics get a clear route to Intradyn's archiving products and lead forms.",
        recommendedAction:
          "Add prominent contextual links and CTAs from data-retention-policy, google-workspace-gsuite-vs-gmail, imessage-vs-sms-message, FERPA, and outlook-alternatives into the matching product or commercial pages.",
        status: "P1, lead routing",
      },
    ],
  },
  execution: {
    title: "What changes, who decides, and how we prove it",
    artifactsTitle: "Evidence, action, impact, and specialists",
    examples: [
      {
        eyebrow: "Reporting frame",
        title: "Move from impressions to lead paths",
        currentLabel: "Current risk",
        current: [
          "1.59M impressions over 90 days can look large but convert poorly",
          "AI Overviews harvest informational topics before users click",
        ],
        targetLabel: "Target report",
        target: [
          "Commercial-page clicks and assisted navigation",
          "Qualified leads reviewed week over week",
        ],
        decision:
          "Confirm the reporting frame with Azam and Aleena before the next cycle.",
        impact:
          "The engagement is judged on the KPI the client actually values instead of a vanity metric.",
        proof:
          "Reports separate commercial pages, AI-cited pages, and lead-path behavior rather than leading with site-wide impressions.",
      },
      {
        eyebrow: "Commercial recovery",
        title: "Bring lost buyer-intent pages back",
        currentLabel: "Current state",
        current: [
          "Five alternatives or archiving pages are marked Lost",
          "The cause is still open: removed, decayed, or theme-related",
        ],
        targetLabel: "Target state",
        target: [
          "Each lost page has a live-page, refresh, or redirect decision",
          "Recovered pages link into the strongest comparison cluster",
        ],
        decision:
          "Approve the first recovery queue for the five Lost commercial pages.",
        impact:
          "SEO work moves toward the pages most likely to create qualified leads.",
        proof:
          "Ahrefs, GSC, and WordPress checks confirm page status, indexing requests, and one-hop redirects where needed.",
      },
    ],
    artifacts: [
      {
        phase: "Month 1",
        specialists: "AIA SEO, account team, WordPress support",
        title: "Homepage and theme regression check",
        evidence:
          "The homepage and branded query dipped during a theme overhaul that is still finishing.",
        recommendedAction:
          "Compare pre-overhaul and current homepage output, check render and Googlebot access, and monitor branded demand weekly.",
        expectedImpact:
          "Theme damage is found quickly if it exists, and the team avoids overreacting to one data point if it does not.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO",
        title: "Sitemap, indexation, and link-risk cleanup",
        evidence:
          "The roadmap confirms stale sitemaps, valuable not-indexed pages, error buckets, and a large spam-link influx.",
        recommendedAction:
          "Remove dead sitemap submissions, rescue named pages, close finite errors, audit noindex pages, and prepare a careful disavow.",
        expectedImpact:
          "Crawl signals are cleaner and the backlink risk stops muddying future diagnosis.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO and content",
        title: "Commercial-page recovery queue",
        evidence:
          "Five buyer-intent pages are Lost, while surviving alternatives and comparison pages hold the strongest commercial value.",
        recommendedAction:
          "Refresh live lost pages, redirect removed pages, rebuild internal links, and request indexing.",
        expectedImpact:
          "The pages closest to a qualified lead become visible and measurable again.",
      },
      {
        phase: "Month 3",
        specialists: "AIA SEO, content, account team",
        title: "AI archiving and lead-routing plan",
        evidence:
          "The Knowledge Center notes an AI archiving launch around early 2027, and the roadmap shows /what-is-ai/ already among the most AI-cited pages.",
        recommendedAction:
          "Use existing AI and compliance visibility to build category authority and route users toward government and financial buyer paths.",
        expectedImpact:
          "Intradyn starts owning the new category before launch while current informational traffic gets a product path.",
      },
    ],
  },
  approval: {
    title: "Decisions and specialists before launch",
    gates: [
      {
        timing: "Kickoff",
        label: "Measurement",
        title: "Confirm lead and conversion tracking",
        detail:
          "The roadmap notes no lead or conversion data in the audit, even though qualified leads are the client's main KPI.",
      },
      {
        timing: "Kickoff",
        label: "Theme",
        title: "Confirm theme status and Roberto's role",
        detail:
          "The Knowledge Center says Roberto has dev context and is deep in the theme update, so he should be aligned before homepage or template findings are actioned.",
      },
      {
        timing: "Before reporting",
        label: "Client frame",
        title: "Align with Azam and Aleena on lead-based reporting",
        detail:
          "Confirm that reporting focuses on commercial-page clicks, assisted navigation, and qualified leads rather than traffic volume.",
      },
      {
        timing: "Month 1 close",
        label: "Risk",
        title: "Approve the disavow scope",
        detail:
          "Review the clearly toxic domains and preserve legitimate branded, editorial, and compliance-badge links.",
      },
      {
        timing: "Month 2 close",
        label: "Growth",
        title: "Approve the AI archiving category track",
        detail:
          "Decide which existing pages will support early category leadership before the product launch.",
      },
    ],
    decisions: [
      {
        label: "Confirm retainer and scope",
        detail:
          "No retainer value or contract term appears in the roadmap source, so the 117 estimated hours need budget context before presentation.",
      },
      {
        label: "Confirm account owner",
        detail:
          "No AIA account manager is named in the roadmap source. The client frame and weekly lead review need a named owner.",
      },
      {
        label: "Confirm no-approval workflow",
        detail:
          "The Knowledge Center says the client wants a heads-up before site work but generally does not require approval for on-page or schema updates.",
      },
    ],
  },
};
