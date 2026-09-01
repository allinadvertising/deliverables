import type { SeoStoryReportData } from "@/lib/reports/types";

export const everwhiteAugust2026Report: SeoStoryReportData = {
  meta: {
    action:
      "Ship the September implementation wave now unblocked by this month's SEO definitions — discontinued-URL 301s, sitemap and noindex cleanup, and internal links — and finish the Merchant Center feed fix so the product catalog regains Shopping visibility.",
    client: "EverWhite",
    coverHeadline: "The decline has leveled off. Now the rebuild begins.",
    currentPeriod: "August 2026",
    previousPeriod: "July 2026",
    property: "https://everwhiteboards.com/",
    reportType: "Organic Search Performance Report",
    source: "Google Search Console + GA4",
  },

  executiveSummary:
    "EverWhite's organic traffic has declined over the past year — Google clicks are down 43% and impressions 38% versus August 2025 — but August is the first month the trend turned back up. Clicks rose 11% month over month, click-through improved, and estimated organic traffic ticked up 10% after a long slide; average position also improved year over year, from 15 to 9. This was a foundation month for a newer engagement: we produced a deep SEO analysis and developer review, closed all six SEO definitions the next wave of development depends on, shipped two crawl fixes, refreshed the site's flagship 'how to clean a whiteboard' guide, and reviewed the backlink profile. The urgent open item is the Google Merchant Center feed — shipping data is missing or wrong on roughly 2,000 products, suppressing Shopping visibility for the catalog — and September executes the redirect, sitemap, and internal-linking work now unblocked.",

  powerLines: [
    {
      area: "Traffic",
      statement:
        "After a year-long decline, organic clicks rose 11% month over month to 1.85K and estimated traffic ticked up for the first time since winter. Year over year clicks are still down 43%, so this is stabilization, not yet recovery.",
      status: "positive",
    },
    {
      area: "Conversions",
      statement:
        "Revenue is recorded in GA4 but misattributed — 100% lands under 'Direct' and organic shows $0 — so SEO's sales contribution can't be read yet. Organic is about 17% of sessions and grew 8% month over month.",
      status: "watch",
    },
    {
      area: "Rankings",
      statement:
        "Average position improved from 15 to 9 year over year. The flagship 'how to clean a whiteboard' guide (up to 106K monthly searches) is the top page; several commercial category pages slipped and are queued for recovery.",
      status: "positive",
    },
    {
      area: "Technical health",
      statement:
        "A deep audit scoped the decline's causes — index bloat, discontinued-product 404s, a soft-404 pattern, and 5xx/429 crawl errors. Two crawl fixes are ready for approval; the larger redirect and sitemap wave is defined and scheduled for September.",
      status: "watch",
    },
  ],

  journeyWorkstreams: [
    {
      name: "Diagnose the decline",
      started:
        "Organic traffic had fallen for most of a year; the engagement opened with a deep SEO analysis and a developer review to find out why.",
      work:
        "We audited crawl behavior, indexation, discontinued-product URLs, the /mobileguard/ legacy path, and the site's internal-link structure.",
      result:
        "The review pinpointed index bloat, discontinued-product 404s, a soft-404 redirect pattern, and 5xx/429 crawl errors — and produced a prioritized, dependency-mapped roadmap.",
      next:
        "Execute the roadmap in sequence, starting with the redirect and sitemap work in September.",
    },
    {
      name: "SEO definitions that unblock the build",
      started:
        "The developer review was explicit that dev could not start redirects, sitemap exclusions, noindex, or internal links until SEO delivered the decisions.",
      work:
        "We produced all six definitions: the whiteboard-size hub and canonical model, discontinued-URL to replacement mapping, the /mobileguard/ redirect and link-reclaim target, sitemap and indexation triage, and the internal-link map.",
      result:
        "All six are complete and closed, so September's development and content work starts unblocked instead of stalling in the days before billing.",
      next:
        "Hand the definitions to development and implement the 301s, sitemap exclusions, noindex rules, and internal links.",
    },
    {
      name: "Quick technical fixes",
      started:
        "Two dev items needed no SEO input and could ship immediately: the 5xx/429 crawl behavior and the soft-404 homepage-redirect pattern.",
      work:
        "Developers verified and resolved the 5xx/429 responses and corrected the soft-404 handling on redirected 404s.",
      result:
        "Both are complete and awaiting approval, removing crawl-error and soft-404 signals that were wasting crawl budget.",
      next:
        "Confirm the fixes in Search Console, then layer the larger redirect and indexation work on top.",
    },
    {
      name: "Content and revenue foundation",
      started:
        "The flagship 'how to clean a whiteboard' guide drives the most organic traffic but had gone stale, and the Merchant Center product feed had errors.",
      work:
        "We refreshed the guide, reviewed referring domains and suspicious anchors, and scoped the Merchant Center shipping-data fix across roughly 2,000 products.",
      result:
        "The refreshed guide is the top page again (about 989 estimated visits); the Merchant Center fix is in progress and urgent because it gates Shopping visibility for the catalog.",
      next:
        "Finish the Merchant Center feed fix and connect clean revenue attribution in GA4.",
    },
  ],

  kpiRows: [
    {
      metric: "Organic clicks",
      previous: "1.66K",
      current: "1.85K",
      change: "+11%",
      businessMeaning:
        "The first monthly increase after a year-long decline; click-through improved at the same time.",
      status: "positive",
    },
    {
      metric: "Search impressions",
      previous: "367K",
      current: "306K",
      change: "-17%",
      businessMeaning:
        "Fewer impressions, but they converted into more clicks — a shift toward more relevant visibility. Down 38% year over year.",
      status: "watch",
    },
    {
      metric: "Average position",
      previous: "9.1",
      current: "9.0",
      change: "+0.1 positions",
      businessMeaning:
        "Holding at position 9, and a clear improvement from 15 a year ago.",
      status: "positive",
    },
    {
      metric: "Organic sessions (GA4)",
      previous: "1,491",
      current: "1,609",
      change: "+7.9%",
      businessMeaning:
        "Organic is about 17% of traffic and grew month over month; engagement rate 98%.",
      status: "positive",
    },
    {
      metric: "Keywords in top 3",
      previous: "300",
      current: "247",
      change: "-17.7%",
      businessMeaning:
        "Premium first-page rankings gave back ground this month; broadly flat year over year as index bloat was cleared.",
      status: "watch",
    },
    {
      metric: "Est. organic traffic value",
      previous: "$1,150",
      current: "$1,432",
      change: "+25%",
      businessMeaning:
        "The monthly paid-search cost to buy this organic traffic rose with the uptick — still down from ~$2,700 a year ago.",
      status: "positive",
    },
  ],

  kpiDisclosure:
    "Clicks, impressions, and average position are from Google Search Console (August vs July 2026). Sessions are from GA4. GA4 revenue is recorded but attribution is broken (all revenue lands under 'Direct'), so it is excluded from these KPIs. Keyword counts and traffic value are Ahrefs estimates.",

  visualDirections: [
    {
      title: "The traffic turn",
      chart:
        "A 13-month line of estimated organic traffic (with GSC clicks) from August 2025, showing the decline to a July 2026 low and the August uptick.",
      insight:
        "Show the year-long decline and the first month it turned back up.",
    },
    {
      title: "Impressions versus clicks",
      chart:
        "Clustered bars of GSC impressions and clicks for July and August 2026, with click-through rate labeled on each period.",
      insight:
        "Explain how fewer impressions produced more clicks — more relevant visibility, not less demand.",
    },
    {
      title: "Flagship content opportunity",
      chart:
        "Bar of estimated traffic by top page, highlighting the 'how to clean a whiteboard' guide against the commercial category pages.",
      insight:
        "Show the informational guide carrying the site and the commercial pages that need internal links and recovery.",
    },
    {
      title: "Channel and revenue integrity",
      chart:
        "Session share by channel (Direct, Organic ~17%, Paid Search) beside GA4 revenue by channel, flagging that 100% of revenue is attributed to Direct.",
      insight:
        "Make the broken revenue attribution obvious and set up the September tracking fix.",
    },
  ],

  obstacles: [
    {
      obstacle:
        "The Google Merchant Center feed is missing shipping weight on 1,878 products and has shipping-cost errors on 205 more.",
      impact:
        "Products with feed errors are suppressed or disapproved in Shopping and free listings, cutting the catalog's most commercial visibility.",
      remediation:
        "Populate shipping weight and correct the shipping-cost configuration across the affected products, then revalidate the feed.",
      eta: "In progress across August and September; revalidate once corrections deploy.",
    },
    {
      obstacle:
        "GA4 records revenue, but 100% of it is attributed to 'Direct' — organic and paid both show $0 — and the total swung from $23.7K in July to $3.4K in August.",
      impact:
        "We cannot read SEO's (or any channel's) revenue contribution, and the July spike points to a tagging or bot-traffic problem inflating Direct.",
      remediation:
        "Fix channel attribution so the source is preserved through checkout, investigate the Direct spike, and validate against order records.",
      eta: "Attribution fix in September; first clean channel revenue in the October report.",
    },
    {
      obstacle:
        "Several commercial pages lost ground: the whiteboard-calendars category fell from #6 to #13, classroom whiteboards from #4 to #11, and the 12-month calendar product from #1 to #6.",
      impact:
        "These are buy-intent pages; the losses offset gains from the informational content.",
      remediation:
        "Add internal links from the flagship guides into these pages, refresh their on-page content, and complete the whiteboard-size canonical model.",
      eta: "Internal links and content merges across September and October.",
    },
    {
      obstacle:
        "Despite the August uptick, organic traffic is still down 43% year over year and ranked keywords fell from 2,535 to 718.",
      impact:
        "One good month is stabilization, not recovery; the trend has to hold to confirm a real turn.",
      remediation:
        "Execute the full roadmap — redirects, sitemap and noindex cleanup, internal links, and content merges — and hold the monthly baseline.",
      eta: "Confirm a durable turn by the November report.",
    },
  ],

  technicalItems: [
    {
      issue:
        "Index bloat and discontinued-product URLs: the crawl found low-value URL types and discontinued products returning 404s.",
      why:
        "They waste crawl budget and scatter ranking signals across pages that should not be indexed.",
      fix:
        "Sitemap and indexation triage is complete; September implements XML sitemap exclusions, noindex/robots rules, and closest-match 301 redirects for discontinued products.",
    },
    {
      issue: "5xx/429 crawl errors were appearing in Google's crawl logs.",
      why:
        "Server errors and rate-limiting responses stop Googlebot from crawling and can drop pages from the index.",
      fix: "Developers verified and resolved the 5xx/429 behavior (ready for approval).",
    },
    {
      issue:
        "A soft-404 pattern: some 404s were redirected to the homepage instead of returning a proper status.",
      why: "Soft-404s confuse indexing and waste crawl budget.",
      fix: "Corrected the soft-404 handling on redirected 404s (ready for approval).",
    },
    {
      issue:
        "The /mobileguard/ legacy path carried backlinks but had no clear destination.",
      why: "Orphaned legacy URLs leak link equity and confuse users.",
      fix:
        "Chose the redirect destination and a link-reclaim outreach target; the 301 is scheduled for September.",
    },
    {
      issue:
        "Overlapping 'whiteboard size' content competed with itself, and commercial pages lacked internal links from the informational guides.",
      why: "Cannibalization and weak internal linking cap how well the best pages can rank.",
      fix:
        "Defined the whiteboard-size hub and canonical model and built an internal-link map; September merges the overlapping content and adds the links.",
    },
  ],

  dataNotes: [
    "Performance source: Google Search Console URL-prefix property https://everwhiteboards.com/ and the site's GA4 property. Platform is WordPress / WooCommerce.",
    "Current period: August 2026. Previous period: July 2026. Year-over-year comparisons use August 2025.",
    "GA4 records revenue but attributes 100% of it to 'Direct' (organic and paid show $0), so channel revenue is not yet reliable; July's Direct sessions and revenue also appear inflated by a tagging or bot-traffic anomaly.",
    "The Google Merchant Center shipping-data issue (roughly 2,000 products) is tracked in the product feed, not Search Console.",
    "Ahrefs figures — organic traffic, traffic value, Domain Rating (34), and keyword counts — are third-party estimates and indicate direction, not measured traffic.",
  ],
};
