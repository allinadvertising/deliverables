import type { SeoStoryReportData } from "@/lib/reports/types";

export const buriedTreasureFossilsAugust2026Report: SeoStoryReportData = {
  meta: {
    action:
      "Complete the verified-Googlebot and Bingbot allowlist in the Imperva WAF and validate rendering in Search Console — protecting the channel that delivers 61% of the site's traffic.",
    client: "Buried Treasure Fossils",
    coverHeadline: "Rankings hold near the top. Protecting the crawl is the next move.",
    currentPeriod: "August 2026",
    previousPeriod: "July 2026",
    property: "https://www.buriedtreasurefossils.com/",
    reportType: "Organic Search Performance Report",
    source: "Google Search Console + GA4",
  },

  executiveSummary:
    "Buried Treasure Fossils remains a strong organic performer — roughly 11.6K Google clicks and 1.07M impressions a month at an average position of 6, with organic search driving 61% of all site traffic. Year over year, impressions are up about 50% and average position improved from 10 to 6, though clicks eased 4% month over month and a handful of commercial category pages slipped. This month's priority was infrastructure: an audit found the site's Imperva WAF challenging Googlebot and blocking our own crawler. Google still fetches the site cleanly today (97% of requests return HTTP 200), so the risk was caught early — and we are closing it at urgent priority before it can throttle the channel the business depends on.",

  powerLines: [
    {
      area: "Traffic",
      statement:
        "Organic clicks eased about 4% to ~11.6K, yet impressions held above 1.07M and are up roughly 50% year over year. Visibility is strong; converting it into clicks is the pressure point.",
      status: "watch",
    },
    {
      area: "Conversions",
      statement:
        "Organic is the site's #1 channel at 61% of sessions and drove 95 tracked conversions, but purchase revenue is not yet recorded in analytics — so SEO-driven sales cannot be attributed this period.",
      status: "watch",
    },
    {
      area: "Rankings",
      statement:
        "Average position holds at 6 — up from 10 a year ago — with 778 keywords in the top three. Informational content is winning, while a few commercial category pages slipped and are the recovery target.",
      status: "positive",
    },
    {
      area: "Technical health",
      statement:
        "An audit found the Imperva WAF challenging Googlebot and fully blocking our own crawler. Google still fetches cleanly (97% return HTTP 200), so the risk was caught early and the fix is underway at urgent priority.",
      status: "watch",
    },
  ],

  journeyWorkstreams: [
    {
      name: "Organic performance baseline",
      started:
        "July delivered ~12.1K clicks from 1.13M impressions at an average position of 5.8 — a strong, established organic footprint.",
      work:
        "We separated branded from non-brand demand and reviewed page- and keyword-level movement, both month over month and year over year.",
      result:
        "Clicks eased ~4% month over month (−11% year over year) while impressions rose ~50% year over year and average position improved from 10 to 6. The softness is concentrated in click capture, not visibility.",
      next:
        "Recover the commercial category pages that slipped and lift click-through on the highest-impression listings.",
    },
    {
      name: "Crawl and infrastructure protection",
      started:
        "The audit flagged that the site's Imperva (Incapsula) WAF was intermittently challenging Googlebot and fully blocking our audit crawler.",
      work:
        "We diagnosed the offending rule and scoped the fix: a verified-bot allowlist, a CDN cache purge, a clean sitemap, and rendering validation in Search Console.",
      result:
        "Google's own crawl-stats still read healthy — 497K requests in 90 days, 97% returning HTTP 200, all hosts flagged 'no problems' — so the risk was caught before it hurt performance. Execution is in progress at urgent priority.",
      next:
        "Ship the verified-Googlebot allowlist, validate rendering in Search Console, resubmit a clean sitemap, and run the first full technical audit.",
    },
    {
      name: "Content authority engine",
      started:
        "The blog already ranks for high-volume, informational fossil terms — the engine behind the site's overall visibility.",
      work:
        "We identified the posts gaining the most qualified visibility and the product and category pages they should feed.",
      result:
        "'Trilobite' entered at #1 (7,200 monthly searches), 'was the megalodon real' rose from #6 to #2 (2,900 searches), and 'dinosaur egg' climbed from #22 to #7.",
      next:
        "Internal-link these winners into product and category pages, and extend the content program into adjacent fossil categories.",
    },
    {
      name: "Measurement and revenue",
      started:
        "The store runs on Magento, but GA4 records $0 purchase revenue — orders are not tracked with an order value.",
      work:
        "We confirmed the tracking gap and quantified organic's share of demand across channels.",
      result:
        "Organic drove 61% of sessions and 95 tracked key events, but without revenue values we cannot yet attribute sales to SEO.",
      next:
        "Connect Magento purchase data to GA4 so the next report can state organic-driven orders and revenue directly.",
    },
  ],

  kpiRows: [
    {
      metric: "Organic clicks",
      previous: "12.1K",
      current: "11.6K",
      change: "-4%",
      businessMeaning:
        "Slightly fewer search visits; the softening lines up with the crawl risk and industry-wide click-through pressure.",
      status: "watch",
    },
    {
      metric: "Search impressions",
      previous: "1.13M",
      current: "1.07M",
      change: "-5%",
      businessMeaning:
        "Visibility remains very high and is up roughly 50% year over year; a small monthly dip is not a concern on its own.",
      status: "neutral",
    },
    {
      metric: "Average position",
      previous: "5.8",
      current: "6.0",
      change: "-0.2 positions",
      businessMeaning:
        "Still strong — the top of page one — and improved from 10 a year ago.",
      status: "neutral",
    },
    {
      metric: "Organic sessions (GA4)",
      previous: "17,538",
      current: "17,184",
      change: "-2.0%",
      businessMeaning:
        "Organic is the #1 channel at 61% of all site traffic; essentially flat month over month.",
      status: "neutral",
    },
    {
      metric: "Keywords in top 3",
      previous: "944",
      current: "778",
      change: "-17.6%",
      businessMeaning:
        "Premium first-page rankings gave back ground this month, though still well above the 402 of a year ago.",
      status: "watch",
    },
    {
      metric: "Organic key events (GA4)",
      previous: "124",
      current: "95",
      change: "-23.4%",
      businessMeaning:
        "Tracked conversions from organic fell; note that purchase revenue is not yet measured (see data notes).",
      status: "watch",
    },
  ],

  kpiDisclosure:
    "Clicks, impressions, and average position are from Google Search Console (August vs July 2026). Sessions and key events are from GA4; key events are non-purchase conversions because the store's purchase/revenue tracking is not yet connected. Keyword counts are Ahrefs estimates.",

  visualDirections: [
    {
      title: "Traffic and visibility",
      chart:
        "Clustered bars comparing organic clicks and impressions for July and August 2026, alongside a 13-month sparkline showing impressions up roughly 50% year over year.",
      insight:
        "Show that visibility is strong and rising while clicks softened only slightly — not a broad search decline.",
    },
    {
      title: "Rankings and keyword quality",
      chart:
        "Dual-axis line from Aug 2025 to Aug 2026: average Google position (lower is better; improved from 10 to 6) against the count of keywords ranking in the top three.",
      insight:
        "Make the year-long ranking gains visible while flagging the recent monthly dip in premium positions.",
    },
    {
      title: "Landing-page opportunity",
      chart:
        "Scatter of impressions against click-through rate for leading pages; highlight the high-impression informational pages (megalodon, trilobite) and the slipping commercial categories (great white, tiger, dinosaur fossils).",
      insight:
        "Separate the pages that need better click capture from the commercial pages that need ranking recovery.",
    },
    {
      title: "Channel and conversion mix",
      chart:
        "Share bars of GA4 sessions by channel — Organic 61%, Direct 26%, Email 8%, other 5% — beside the monthly trend of organic key events.",
      insight:
        "Show how dependent the business is on organic, and why the crawl fix and revenue tracking are the top priorities.",
    },
  ],

  obstacles: [
    {
      obstacle:
        "The Imperva (Incapsula) WAF intermittently challenges Googlebot and fully blocked our audit crawler.",
      impact:
        "It removes our ability to monitor the site and, if the WAF tightens, could throttle the channel that delivers 61% of all traffic.",
      remediation:
        "Allowlist verified Googlebot and Bingbot, purge the CDN cache, keep the Incapsula resource path out of Magento rewrites, and validate rendering in Search Console.",
      eta: "Allowlist and validation in September; reassess two weeks after deployment.",
    },
    {
      obstacle:
        "Several commercial category pages lost ground: great white shark teeth fell from #2 to #5, tiger shark teeth from #2 to #7, and 'dinosaur fossils for sale' from #7 to #11. 't rex tooth for sale' clicks dropped from 312 to 64 year over year.",
      impact:
        "These are buy-intent terms; slippage costs qualified, purchase-ready visits.",
      remediation:
        "Once full crawl access is restored, audit these templates, refresh their on-page content, and add internal links from high-traffic blog posts.",
      eta: "Recovery work begins in October; reassess after the audit plus two to four weeks.",
    },
    {
      obstacle:
        "GA4 records $0 purchase revenue across every channel — the Magento purchase event is not wired in with an order value.",
      impact:
        "We cannot attribute sales or ROI to SEO, despite organic being the largest channel by far.",
      remediation:
        "Implement Magento purchase tracking in GA4 with order value and clean channel attribution.",
      eta: "Tracking live in September; first organic-revenue read in the October report.",
    },
    {
      obstacle:
        "A third of Google's crawl budget goes to JavaScript, and the XML sitemap still includes parameter and non-indexable URLs.",
      impact:
        "Search engines spend discovery effort on the wrong URLs instead of the real product catalog.",
      remediation:
        "Regenerate a clean sitemap limited to canonical, indexable URLs, exclude parameter patterns, and resubmit in Search Console.",
      eta: "Sitemap cleanup and resubmission in September.",
    },
  ],

  technicalItems: [
    {
      issue:
        "The Imperva (Incapsula) WAF intermittently serves challenges to Googlebot and blocked our audit crawler entirely.",
      why:
        "It can throttle the site's most important traffic channel and prevents us from monitoring site health.",
      fix:
        "Allowlist verified Googlebot and Bingbot, purge the CDN cache after the change, and confirm clean rendering with a live Search Console test.",
    },
    {
      issue: "The XML sitemap includes parameter-based and non-indexable URLs.",
      why: "It sends search engines mixed signals about which pages matter.",
      fix:
        "Regenerate a clean sitemap limited to canonical, indexable URLs and resubmit it in Search Console.",
    },
    {
      issue:
        "The Incapsula resource path (/_Incapsula_Resource) must not be redirected or rewritten in Magento.",
      why:
        "Rewriting it breaks the WAF's own challenge handling and can worsen bot access.",
      fix: "Explicitly exclude the path from Magento redirects and rewrites.",
    },
    {
      issue: "About a third of Google's crawl budget is spent fetching JavaScript.",
      why:
        "Crawl effort spent on scripts is crawl effort not spent discovering products and categories.",
      fix:
        "Reduce parameter noise and unnecessary render dependencies, then monitor crawl-stats after the sitemap and WAF changes.",
    },
    {
      issue:
        "No full technical audit was possible this period because the audit crawler was blocked at the WAF.",
      why:
        "We cannot yet verify heading, template, and internal-link health across the catalog.",
      fix:
        "Temporarily allowlist the audit crawler, run a complete crawl, and set a baseline for future reports.",
    },
  ],

  dataNotes: [
    "Performance source: Google Search Console domain property buriedtreasurefossils.com and the site's GA4 property.",
    "Current period: August 2026. Previous period: July 2026. Year-over-year comparisons use August 2025.",
    "GA4 records no purchase revenue (Total revenue reads $0), so conversions are reported as key events rather than sales; connecting Magento purchase tracking is a September priority.",
    "July's GA4 channel totals contained a one-off spike in Direct traffic, which was excluded so the organic month-over-month comparison stays clean.",
    "Crawl-health figures (497K requests, 97% HTTP 200) come from Search Console's crawl-stats report for the last 90 days.",
    "Ahrefs figures — keyword positions, top-three counts, traffic value, and Domain Rating (27) — are third-party estimates and indicate direction, not measured traffic.",
  ],
};
