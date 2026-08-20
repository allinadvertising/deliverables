import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

export const penelopeKickoffV2: KickoffV2Data = {
  printAriaLabel: "Print Penelope kickoff V2 as PDF",
  footerNote: "Penelope and The Beauty Bar SEO Strategy Kickoff | August 2026",
  cover: {
    clientName: "Penelope and The Beauty Bar",
    subtitle: "Your organic search strategy for the next three months.",
  },
  meta: [
    { label: "Period", value: "August to October 2026" },
    {
      label: "Business objective",
      value: "Recover revenue through national ecommerce growth and high-value service demand",
    },
    { label: "Roadmap", value: "Containment, conversion, growth" },
    { label: "Platform", value: "Shopify" },
  ],
  summary: {
    title: "What changes first",
    objectiveLabel: "Business objective",
    objective:
      "Recover annual revenue from approximately 6M toward the prior 7.5M high by consolidating technical signals, restoring product visibility, converting blog demand into bookings and sales, and building national ecommerce demand around priority brands and treatments.",
    lead:
      "Penelope is already visible. Search Console shows 26,293 clicks from 2,115,998 impressions over the last 12 months, but the site converts only a small share of that visibility because Google is surfacing split URLs, blog pages, thin product paths, and product listings that cannot fully qualify for Shopping.",
    emphasis:
      "The sequence is practical: protect the domain, fix the highest-value technical split, create a verified revenue baseline, then move existing visibility into booking and ecommerce paths.",
  },
  strategy: {
    title: "3 Month Roadmap",
    gridClassName: "lg:grid-cols-3",
    operatingPrinciple:
      "Use GSC as the source of truth when market estimates and real site demand disagree.",
    phases: [
      {
        accent: "blue",
        month: "Month 1",
        theme: "Containment and baseline",
        objective:
          "Consolidate the homepage, protect the domain from link risk, repair Merchant listings, and verify revenue tracking before the first report frames the decline.",
        deliverable: "Technical containment package and measurement baseline",
        businessOutcome:
          "The site stops splitting authority, Shopping issues have a defined fix path, and the first client report lands with a clear diagnosis instead of raw decline.",
      },
      {
        accent: "gold",
        month: "Month 2",
        theme: "Conversion of existing visibility",
        objective:
          "Move high-impression blogs and striking-distance queries into service, collection, and product paths with titles, metas, internal links, and booking calls to action.",
        deliverable: "Internal-link and CTR improvement release",
        businessOutcome:
          "Existing impressions begin to support bookings and ecommerce instead of staying trapped on pages that inform but do not convert.",
      },
      {
        accent: "blue",
        month: "Month 3",
        theme: "National product and service growth",
        objective:
          "Build the revenue page set around Biologique Recherche, XERF, med spa, PRX, HydraFacial, Fairmont positioning, and Q4 gift-certificate demand.",
        deliverable: "Priority growth backlog and first production briefs",
        businessOutcome:
          "The roadmap shifts from recovery into owned demand for the brands and treatments Angela wants to grow.",
      },
    ],
  },
  focus: {
    title: "Six priorities for organic revenue growth",
    volumeLabel: "Evidence",
    scopeLabel: "Scope impact",
    footnote:
      "Figures are from the Drive folder sources: GSC exports through 2026-08-16, Merchant Center and Ahrefs captures from 2026-08-19, and keyword research through 2026-08-14.",
    items: [
      {
        number: "01",
        title: "Consolidate the homepage and protocol signals",
        businessObjective:
          "Recover the equity already sitting on the homepage before measuring or expanding the roadmap.",
        evidence:
          "The homepage appears as separate http and https rows. The http row earned 1,963 clicks over three months in the roadmap and 9,560 clicks over 12 months in the keyword plan, while the https row ranked lower.",
        volume: "36% of site clicks on http in the 12-month KWR",
        scopeImpact: "Homepage, host rules, canonical tags, sitemap submissions",
        expectedImpact:
          "One preferred https://www address carries the homepage authority and removes the split baseline from future reporting.",
        recommendedAction:
          "Enforce https://www as the only canonical host, 301 http and non-www variants, keep one https sitemap, and re-inspect in GSC after launch.",
        status: "P0, first technical fix",
      },
      {
        number: "02",
        title: "Neutralize the paid-link risk",
        businessObjective:
          "Protect the domain before a link issue can erase the value of the SEO work.",
        evidence:
          "Ahrefs shows one SEOExpress.org anchor tied to 218 referring domains, plus PBN, Telegram, and guest-post vendor anchors. Referring domains grew while Domain Rating fell.",
        volume: "218 domains on one suspicious anchor",
        scopeImpact: "Backlink profile and client communication",
        expectedImpact:
          "The risky link clusters are inventoried, disavowed where appropriate, and any active paid-link spend is surfaced before it continues.",
        recommendedAction:
          "Export full backlink and anchor data, classify the suspicious clusters, prepare the disavow, and ask Angela whether any link vendor is still active.",
        status: "P0, risk control",
      },
      {
        number: "03",
        title: "Repair merchant eligibility",
        businessObjective:
          "Restore product eligibility for Shopping surfaces tied to ecommerce revenue.",
        evidence:
          "GSC and Merchant Center show Merchant listings at 0 valid and 56 invalid, while product snippets pass on the same pages. Merchant Center also shows 5 not approved products and 47 products missing details.",
        volume: "56 invalid Merchant listings",
        scopeImpact: "Product template, feed details, policy items",
        expectedImpact:
          "Products regain eligibility for merchant-rich surfaces without breaking product snippets that already validate.",
        recommendedAction:
          "Fix missing merchant-specific fields at the Shopify product template level, resolve feed details, and revalidate in GSC and Merchant Center after crawl cycles.",
        status: "P0, Shopping recovery",
      },
      {
        number: "04",
        title: "Convert blog visibility into bookings and sales",
        businessObjective:
          "Use the visibility Angela's content already earned to drive service and ecommerce paths.",
        evidence:
          "The keyword plan shows 517 blog URLs earning 600,875 impressions, 28% of all site impressions. The top ten posts account for 478,842 impressions, but blog CTR is 0.43% versus 0.87% for service pages.",
        volume: "600,875 blog impressions",
        scopeImpact: "Top blog posts, internal links, CTAs, matching service pages",
        expectedImpact:
          "High-impression posts send users to the right service, product, or collection page instead of ending as informational traffic.",
        recommendedAction:
          "Add internal links and booking or add-to-cart calls to action from the top blog posts into the matching service and retail destinations.",
        status: "P1, conversion lift",
      },
      {
        number: "05",
        title: "Lift striking-distance queries",
        businessObjective:
          "Capture the fastest revenue from queries already ranking close to click territory.",
        evidence:
          "The keyword plan identifies 392 non-brand queries in positions 4 to 20 with 470,772 impressions and only 2,770 clicks.",
        volume: "392 queries, 470,772 impressions",
        scopeImpact: "Titles, metas, page-type matching, internal links",
        expectedImpact:
          "Queries such as lyma laser, prx peel, biologique recherche, hydrafacial seattle, and facial seattle get page titles and paths that match buyer intent.",
        recommendedAction:
          "Rewrite priority titles and metas, move retail brand intent toward collections and product pages, and track the cohort as a baseline.",
        status: "P1, fastest upside",
      },
      {
        number: "06",
        title: "Build the priority growth page set",
        businessObjective:
          "Align the site with the services and brands Angela wants to sell next.",
        evidence:
          "The Drive sources name XERF, PRX, skin tightening, oxygen facials, Biologique Recherche, MBR, Fairmont positioning, med spa visibility, and Q4 gift certificates as priority growth areas.",
        volume: "Revenue-priority services and brands",
        scopeImpact: "Service hubs, product collections, holiday offers",
        expectedImpact:
          "The site begins ranking for the high-value treatment and ecommerce demand that matches the client's revenue goal.",
        recommendedAction:
          "Build a realistic XERF path, improve PRX and med spa pages, prioritize Biologique Recherche and MBR collection work, and begin Q4 gift-certificate planning in Month 2.",
        status: "P1 to P2, sequenced growth",
      },
    ],
  },
  execution: {
    title: "What changes, who decides, and how we prove it",
    artifactsTitle: "Evidence, action, impact, and specialists",
    examples: [
      {
        eyebrow: "Homepage signals",
        title: "Make one homepage carry the ranking equity",
        currentLabel: "Current state",
        current: [
          "http and https homepage rows both earn clicks",
          "Both http and https sitemaps are submitted",
        ],
        targetLabel: "Target state",
        target: [
          "One https://www homepage in GSC",
          "One https sitemap and one-hop redirects",
        ],
        decision:
          "Approve the canonical host and have WebTitans deploy the redirect and sitemap correction first.",
        impact:
          "The page carrying the largest share of traffic stops competing with itself.",
        proof:
          "GSC inspection and a post-release crawl confirm one preferred homepage and one sitemap protocol.",
      },
      {
        eyebrow: "Visibility conversion",
        title: "Turn high-impression posts into service paths",
        currentLabel: "Current state",
        current: [
          "Top blog posts drive hundreds of thousands of impressions",
          "Booking and collection paths are weak or missing",
        ],
        targetLabel: "Target state",
        target: [
          "Each high-impression post points to the matching service or collection",
          "CTAs are visible and measurable",
        ],
        decision:
          "Approve the first internal-link batch for the top blog and striking-distance pages.",
        impact:
          "Existing informational demand begins supporting bookings, product sales, and the first month reporting story.",
        proof:
          "Links are verified on-page and tracked against the blog-to-service click cohort.",
      },
    ],
    artifacts: [
      {
        phase: "Month 1",
        specialists: "AIA SEO, Account Management, WebTitans",
        title: "Technical containment release",
        evidence:
          "Homepage protocol split, dual sitemaps, Merchant listing failures, redirect debt, and robots issues are all confirmed in the Drive roadmap.",
        recommendedAction:
          "Ship the canonical host, sitemap, Merchant listing, and priority redirect requests through Ben Lehrer at WebTitans.",
        expectedImpact:
          "The highest-risk and highest-leverage technical defects move from diagnosis to verified fixes.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO and Account Management",
        title: "First-report narrative and measurement baseline",
        evidence:
          "The roadmap shows impressions down 23.4%, clicks down 7.4%, CTR up from 1.11% to 1.35%, top-3 keywords up, and conversion tracking unconfirmed.",
        recommendedAction:
          "Brief Angela before the first report, explain the brand-demand and desktop math, and verify GA4, Shopify, bookings, and ecommerce conversions.",
        expectedImpact:
          "The client sees a controlled recovery plan with revenue tracking instead of disconnected activity.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO and Content",
        title: "Blog and striking-distance lift",
        evidence:
          "517 blog URLs earn 600,875 impressions, while 392 striking-distance queries earn 470,772 impressions and only 2,770 clicks.",
        recommendedAction:
          "Deploy internal links, CTAs, title and meta rewrites, and page-type corrections for the highest-opportunity cohorts.",
        expectedImpact:
          "Existing search visibility starts moving into bookings, collection views, product clicks, and measurable CTR gains.",
      },
      {
        phase: "Month 3",
        specialists: "AIA SEO, Content, Account Management, WebTitans",
        title: "Priority growth backlog",
        evidence:
          "Drive sources identify Biologique Recherche, MBR, XERF, PRX, skin tightening, Fairmont positioning, med spa visibility, and gift certificates as revenue priorities.",
        recommendedAction:
          "Approve the first production briefs and technical support needed for the growth page set.",
        expectedImpact:
          "The site gains stronger destinations for national ecommerce and high-value local service demand.",
      },
    ],
  },
  approval: {
    title: "Decisions and specialists before launch",
    gates: [
      {
        timing: "Kickoff",
        label: "Decision",
        title: "Approve https://www as the only canonical host",
        detail:
          "Confirm that WebTitans can deploy protocol, host, canonical, and sitemap corrections before other URL fixes are bundled in.",
      },
      {
        timing: "Kickoff",
        label: "Risk",
        title: "Ask the paid-link vendor question",
        detail:
          "Confirm whether any paid-link vendor is active before AIA prepares disavow work from the backlink export.",
      },
      {
        timing: "Before first report",
        label: "Measurement",
        title: "Verify revenue tracking live",
        detail:
          "Test ecommerce and booking conversions in production so reporting can tie SEO work to revenue goals.",
      },
      {
        timing: "Month 1 close",
        label: "Technical QA",
        title: "Revalidate Merchant listings and homepage consolidation",
        detail:
          "Use GSC, Merchant Center, and a post-release crawl to confirm the fixes are live and measurable.",
      },
      {
        timing: "Month 2 close",
        label: "Content approval",
        title: "Approve the priority growth backlog",
        detail:
          "Select the first production set for XERF, PRX, med spa, Biologique Recherche, MBR, Fairmont, and Q4 gift certificates.",
      },
    ],
    decisions: [
      {
        label: "Confirm WebTitans technical ownership",
        detail:
          "AIA should own specs, mapping, and verification, while Ben Lehrer at WebTitans owns Shopify implementation.",
      },
      {
        label: "Confirm the account manager",
        detail:
          "The Drive roadmap notes that no AIA account manager is named, and the first-report briefing cannot be scheduled without that owner.",
      },
      {
        label: "Confirm XERF spelling before production",
        detail:
          "The keyword plan records XERF, ZERF, and Zurf variants. Use the live URL for now, but confirm Angela's preferred spelling before page copy is written.",
      },
    ],
  },
};
