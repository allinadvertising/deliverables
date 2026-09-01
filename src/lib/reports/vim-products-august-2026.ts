import type { SeoStoryReportData } from "@/lib/reports/types";

export const vimProductsAugust2026Report: SeoStoryReportData = {
  meta: {
    action:
      "Rewrite the homepage and category-hub titles, H1s, and meta descriptions to convert the site's sharply higher visibility into clicks — starting with the two pages that lost the most click share.",
    client: "VIM Products",
    coverHeadline: "Visibility is up sharply. Capturing the click is next.",
    currentPeriod: "August 2026",
    previousPeriod: "July 2026",
    property: "https://vimproducts.com/",
    reportType: "Organic Search Performance Report",
    source: "Google Search Console + GA4",
  },

  executiveSummary:
    "This was a heavy technical-remediation month, and the foundation work is landing. Year over year, Google impressions are up 39% and VIM's average position improved from 35.3 to 14.7 — the site now surfaces far more often, and far higher. The gap is turning that visibility into clicks. Google clicks eased 15% month over month and 33% year over year as the site began appearing for a wide band of low-intent queries, AI Overviews compressed click-through, and the homepage and main category hub lost click share while their titles, H1s, and meta descriptions were mid-rewrite. Seven technical fixes shipped this month, with three more built and awaiting approval — and the on-page work now in flight targets exactly the pages that need to convert visibility into visits.",

  powerLines: [
    {
      area: "Traffic",
      statement:
        "Google clicks eased 15% month over month (−33% year over year), but impressions rose 39% year over year to 21.4K. The problem isn't visibility — it's converting that visibility into clicks.",
      status: "watch",
    },
    {
      area: "Conversions",
      statement:
        "Organic drove 243 GA4 sessions (16% of site traffic) but zero tracked key events in August, and the site's analytics record no revenue — so SEO's commercial contribution can't be attributed yet.",
      status: "watch",
    },
    {
      area: "Rankings",
      statement:
        "Average position improved from 35.3 to 14.7 year over year, and keywords in the top three grew from 6 to 19. High-intent terms hold the top of page one: #1 'curbless shower pan kit', #2 'shower pan drain kit'.",
      status: "positive",
    },
    {
      area: "Technical health",
      statement:
        "Seven foundation fixes shipped — orphan-URL cleanup, sitemap rebuild, redirects, and title/meta work — the direct cause of the year-over-year visibility gains. Three more on-page fixes are built and awaiting approval.",
      status: "positive",
    },
  ],

  journeyWorkstreams: [
    {
      name: "Technical foundation",
      started:
        "The technical audit flagged crawl and indexation problems: orphan URLs, legacy sitemap routes, missing product-category and blog sitemaps, over-length titles, and thin metadata.",
      work:
        "We classified and actioned 94 orphan URLs, removed and redirected legacy sitemap routes, enabled proper product-category and blog XML sitemaps, shortened 14 over-length titles, and wrote meta descriptions for approved pages.",
      result:
        "Google re-discovered and re-ranked the catalog — the direct cause of impressions rising 39% year over year and average position improving from 35.3 to 14.7.",
      next:
        "Deploy the three on-page fixes awaiting approval (unique category-hub H1s, single-H1 enforcement, widget-label cleanup) and clear the remaining 404 and schema work.",
    },
    {
      name: "Search performance",
      started:
        "July produced 178 clicks from 23.8K impressions at an average position of 14.6.",
      work:
        "We separated branded from non-brand demand and reviewed which pages gained and lost clicks.",
      result:
        "Clicks eased to 151 (−15% month over month) even as impressions stayed high; the homepage and main category hub lost the most click share despite the hub's impressions growing from 1,567 to 2,606.",
      next:
        "Rewrite the titles and meta descriptions on the homepage and category hub to rebuild click-through on the pages that lost it.",
    },
    {
      name: "Click capture and content",
      started:
        "The site earns a large and growing pool of impressions for informational and mid-funnel queries it doesn't yet convert.",
      work:
        "We mapped the high-impression, low-click queries and the money pages they should support.",
      result:
        "Product, component, and accessory pages gained clicks year over year (drain cup, corner seat, distributor, 60×48 kit), while the branded homepage and category hub softened.",
      next:
        "Publish mid-funnel content — curbless/ADA install guides and waterproofing how-tos — and internal-link it into product and category pages.",
    },
    {
      name: "Measurement and revenue",
      started:
        "VIM's GA4 is configured for lead generation, not e-commerce; no purchase or revenue metric is recorded.",
      work:
        "We confirmed the tracking gap and measured organic's contribution across channels.",
      result:
        "Organic drove 243 sessions (16% of traffic) but 0 tracked key events in August (2 in July); revenue cannot be attributed to SEO.",
      next:
        "Stand up conversion and revenue (or lead-value) tracking in GA4 so the next report can show SEO's commercial impact.",
    },
  ],

  kpiRows: [
    {
      metric: "Organic clicks",
      previous: "178",
      current: "151",
      change: "-15%",
      businessMeaning:
        "Fewer search visits; the decline is concentrated on the homepage and category hub while their listings are mid-rewrite.",
      status: "watch",
    },
    {
      metric: "Search impressions",
      previous: "23.8K",
      current: "21.4K",
      change: "-10%",
      businessMeaning:
        "Down slightly month over month but up 39% year over year — visibility is strong and rising.",
      status: "neutral",
    },
    {
      metric: "Average position",
      previous: "14.6",
      current: "14.7",
      change: "-0.1 positions",
      businessMeaning:
        "Essentially flat month over month, and a large improvement from 35.3 a year ago.",
      status: "neutral",
    },
    {
      metric: "Organic sessions (GA4)",
      previous: "257",
      current: "243",
      change: "-5.4%",
      businessMeaning:
        "Organic is about 16% of site traffic; roughly flat month over month.",
      status: "neutral",
    },
    {
      metric: "Keywords in top 3",
      previous: "24",
      current: "19",
      change: "-20.8%",
      businessMeaning:
        "Premium first-page rankings dipped this month, though up from 6 a year ago.",
      status: "watch",
    },
    {
      metric: "Est. organic traffic value",
      previous: "$180",
      current: "$176",
      change: "-2%",
      businessMeaning:
        "The monthly paid-search cost to buy this organic traffic — up from ~$105 a year ago.",
      status: "neutral",
    },
  ],

  kpiDisclosure:
    "Clicks, impressions, and average position are from Google Search Console (August vs July 2026). Sessions and key events are from GA4; the account is configured for lead generation and records no purchase revenue. Keyword counts and traffic value are Ahrefs estimates.",

  visualDirections: [
    {
      title: "Visibility versus clicks",
      chart:
        "Clustered bars of Google clicks and impressions for July and August 2026, with a 13-month sparkline showing impressions up 39% and clicks down 33% year over year.",
      insight:
        "Show the widening gap between rising visibility and softening clicks — the core story of the month.",
    },
    {
      title: "Ranking improvement",
      chart:
        "Line of average Google position from Aug 2025 to Aug 2026 (lower is better), annotated with the technical fixes that shipped.",
      insight:
        "Tie the improvement from position 35 to 15 directly to the foundation work completed.",
    },
    {
      title: "Page-level click shift",
      chart:
        "Diverging bars of clicks won and lost by page, year over year: homepage and category hub down; product, component, and accessory pages up.",
      insight:
        "Pinpoint the two pages dragging clicks and the many pages quietly gaining.",
    },
    {
      title: "Channel and conversion mix",
      chart:
        "Share bars of GA4 sessions by channel (Direct 43%, paid/cross-network 24%, Organic 16%, other) beside organic key events (0 this month).",
      insight:
        "Show organic's share of traffic and the measurement gap that currently hides its commercial value.",
    },
  ],

  obstacles: [
    {
      obstacle:
        "The homepage and main category hub lost the most clicks year over year (homepage 70 to 28; category hub 73 to 21), even though the hub's impressions grew from 1,567 to 2,606.",
      impact:
        "These are the site's two most valuable pages; a click-through problem there caps the whole channel.",
      remediation:
        "Rewrite their title tags, H1s, and meta descriptions around the dominant search intent, and deploy the unique category-hub H1s already built.",
      eta: "Titles and meta in September; reassess two to four weeks after deployment.",
    },
    {
      obstacle:
        "The site now appears for a wide band of low-intent queries and AI Overviews are absorbing clicks, so impressions grew while click-through fell to 0.7%.",
      impact:
        "Visibility gains aren't translating into visits at the previous rate.",
      remediation:
        "Target higher-intent queries with dedicated pages, sharpen listings on high-impression terms, and add content that captures the informational demand.",
      eta: "Content and on-page work across September and October.",
    },
    {
      obstacle:
        "GA4 is set up for lead generation and records no purchase revenue; organic produced 0 tracked key events in August.",
      impact:
        "SEO's commercial contribution can't be quantified, which makes ROI invisible.",
      remediation:
        "Implement conversion and revenue (or lead-value) tracking with clean channel attribution in GA4.",
      eta: "Tracking live in September; first attributed read in October.",
    },
    {
      obstacle:
        "Open technical items remain: 18 internal 404s, parameter-URL and crawl-delay cleanup, non-sequential headings, and schema (recommended fields plus validation errors awaiting client input).",
      impact:
        "They limit crawl efficiency and rich-result eligibility.",
      remediation:
        "Clear the 404s and parameter issues, complete the schema fields, and unblock the client-dependent schema validation.",
      eta: "Most in September; schema validation depends on client input.",
    },
  ],

  technicalItems: [
    {
      issue:
        "94 orphan URLs and legacy sitemap routes were diluting crawl signals.",
      why:
        "Search engines wasted crawl effort on pages that shouldn't be indexed.",
      fix:
        "Classified and actioned all 94 orphan URLs, removed and redirected legacy sitemap routes, and enabled proper product-category and blog XML sitemaps. Completed this month.",
    },
    {
      issue:
        "14 page titles exceeded the length Google will display, and many pages lacked meta descriptions.",
      why:
        "Truncated titles and missing descriptions weaken click-through from search.",
      fix:
        "Shortened the 14 over-length titles and wrote meta descriptions for the approved indexable pages. Completed this month.",
    },
    {
      issue:
        "Category-hub pages shared duplicate H1s, and templates rendered multiple or mislabeled headings.",
      why: "Weak, duplicated headings blur what each page is about.",
      fix:
        "Unique category-hub H1s, single-H1 enforcement, and widget-label cleanup are built and awaiting approval to deploy.",
    },
    {
      issue:
        "18 internal links return 404, and parameter URLs plus a crawl-delay setting waste crawl budget.",
      why:
        "Broken links and parameter noise slow discovery of the real catalog.",
      fix:
        "Fix the 18 internal 404s and complete the parameter-URL and crawl-delay cleanup. In progress.",
    },
    {
      issue:
        "Schema is incomplete: recommended fields are missing and some markup fails validation.",
      why: "Complete, valid schema is what earns rich results in search.",
      fix:
        "Complete the recommended schema fields; resolving the validation errors is queued pending client input.",
    },
  ],

  dataNotes: [
    "Performance source: Google Search Console URL-prefix property https://vimproducts.com/ and the site's GA4 property.",
    "Current period: August 2026. Previous period: July 2026. Year-over-year comparisons use August 2025.",
    "GA4 is configured for lead generation and records no purchase revenue, so organic conversions are reported as key events (0 in August, 2 in July).",
    "GSC clicks (151) and GA4 organic sessions (243) differ because they measure different things — Google-only clicks versus all-search sessions — and are reported separately, not combined.",
    "Ahrefs figures — organic traffic, traffic value, Domain Rating (1.5), and keyword counts — are third-party estimates and indicate direction, not measured traffic.",
  ],
};
