import type { SeoStoryReportData } from "@/lib/reports/types";

// V-Belt Guys, August 2026 vs July 2026. Built from output/vbeltguys-august-2026/data.json
// (pulled 2026-09-18). Must pass .claude/skills/seo-report/scripts/validate_report.mts.
export const vbeltguysAugust2026Report: SeoStoryReportData = {
  businessObjective:
    "Grow qualified organic product discovery and revenue while improving the technical signals across V-Belt Guys' product catalog.",

  technicalLabels: {
    fix: "Next action",
    issue: "Issue",
    why: "Business risk",
  },

  visualSection: {
    eyebrow: "Performance",
    intro:
      "Search-driven sales dipped less than the store as a whole, so search carried a larger share of revenue in August. Traffic tells a narrower story: one L444 belt page doubled its clicks while most other pages lost ground, led by riding-mower belt pages.",
    title: "Search revenue and organic search performance",
  },

  meta: {
    action:
      "Confirm Cloudflare, Merchant Center and Shopify theme access so the crawl (HTTP 429) investigation and the product feed work can start, separate paid from organic orders in the Shopify search figure, and point the next onsite batch at the riding-mower belt pages that lost clicks.",
    client: "V-Belt Guys",
    coverHeadline:
      "Search-driven sales fell 2.5%, less than the store's 6.4% dip, and rose to 40.2% of revenue. One L444 belt page doubled its clicks while the rest of the site lost ground.",
    currentPeriod: "August 1-31, 2026",
    previousPeriod: "July 1-31, 2026",
    property: "sc-domain:vbeltguys.com",
    reportType: "Monthly Organic Search Performance Report",
    source:
      "Google Search Console API + Shopify (Total sales by referrer) + GA4 Data API + ClickUp delivery records",
  },

  executiveSummary:
    "Search held up better than the rest of the store in August. Shopify sales from search referrers (organic and paid combined) fell 2.5% to $329,247.83, while all-channel store sales fell 6.4% to $818,427.35, so search rose to 40.2% of store revenue from 38.6%. GA4, which counts organic search only, recorded $119,172.34 in organic revenue, up 1.3%. Organic clicks fell 2.7% to 49,740 across two 31-day months. By search type, brand searches rose by 65 clicks and other named searches by 3,433 (mostly the L444 page's queries), while searches Google does not show, usually rare and specific ones, fell by 4,890. Those hidden searches are 73.8% of clicks, so their brand status is unknown, though they are most likely non-brand. The mix matters more than the total: the L444 Dayco page gained 4,017 clicks and more than doubled, while all other pages together lost 5,670, with riding-mower belt pages among the largest visible declines and desktop clicks down 11.0%. The team delivered 80 optimized pages and 16 schema pages across the August and September packages, three roadmap fixes, and the August roadmap. The open problem is access: Cloudflare, Merchant Center and Shopify theme access must be confirmed before the crawl and product feed work can be scheduled.",

  powerLines: [
    {
      area: "Revenue",
      statement:
        "Search-referrer sales (organic + paid) fell 2.5% to $329,247.83, less than the store's 6.4% decline, lifting search to 40.2% of store revenue.",
      status: "watch",
    },
    {
      area: "Traffic",
      statement:
        "Organic clicks fell 2.7% to 49,740. The L444 Dayco page gained 4,017 clicks, but all other pages lost 5,670.",
      status: "watch",
    },
    {
      area: "Rankings",
      statement:
        "Impressions rose 1.5% to 2,298,654, but average position eased from 6.82 to 6.99 and click rate from 2.26% to 2.16% as the L444 page began showing for broader, lower-ranked searches.",
      status: "watch",
    },
    {
      area: "Technical health",
      statement:
        "Three roadmap fixes shipped (product-page H1s, noindex on low-value collection query URLs, and removal of internal links to them), along with 80 onsite pages and 16 schema pages.",
      status: "positive",
    },
  ],

  journeyWorkstreams: [
    {
      businessPriority: "Protect search revenue while the wider store softens.",
      name: "Revenue and measurement",
      started:
        "July closed with $337,775.54 in Shopify search-referrer sales. Earlier reports called this figure organic, but agency Google Ads is active, so untagged paid clicks can land in the same referrer.",
      work:
        "We pulled Shopify Total sales by referrer for both months, relabeled the figure as search (organic + paid), and added GA4 Organic Search revenue as a cross-check.",
      result:
        "Search-referrer sales fell 2.5% while store sales fell 6.4%, so search's share of revenue rose to 40.2%. GA4 organic revenue rose 1.3% to $119,172.34, but GA4 records far less revenue than Shopify on every channel, so the two do not reconcile yet.",
      next:
        "Separate tagged Google Ads orders from the Shopify search figure so the next report can show organic revenue on its own.",
    },
    {
      businessPriority: "Broaden traffic beyond a single product page.",
      name: "Product discovery",
      started:
        "In July the L444 Dayco page was already the site's top traffic page, with 3,580 clicks.",
      work:
        "We compared August and July by page and query in Search Console to find what moved the total.",
      result:
        "The L444 page reached 7,597 clicks (up 112.2%), led by the query 'l444 belt cross reference' at position 1.0. Every other page combined lost 5,670 clicks, with riding-mower belt pages such as the John Deere X300 (down 46.6%) and D110 (down 40.9%) among the largest declines.",
      next:
        "Check the mower-page declines against last year to separate seasonality from ranking loss, then aim the next onsite batch at the pages that lost the most.",
    },
    {
      businessPriority: "Improve product-page relevance and structured data at catalog scale.",
      name: "Onsite and schema delivery",
      started:
        "August's plan held two 20-page onsite packages and one 8-page schema package.",
      work:
        "The team closed the August packages early in the month and then completed the September onsite and schema packages before August ended.",
      result:
        "80 pages were optimized and implemented and 16 pages received schema markup, across the August and September packages.",
      next:
        "Track the changed pages as a group against untouched pages so their effect can be measured over a full recrawl window.",
    },
    {
      businessPriority: "Remove technical waste so search engines spend time on pages that sell.",
      name: "Technical roadmap",
      started:
        "The roadmap flagged duplicate and empty H1s on product pages and low-value collection query URLs that search engines could crawl and index.",
      work:
        "The Developer fixed the H1 output, applied noindex,follow to low-value /collections/types query URLs, and removed internal links pointing to collection search query URLs. The August roadmap was delivered after a data consolidation and developer review.",
      result:
        "All three fixes are closed in the delivery record. Their effect on crawling and indexing will show in Search Console over the coming weeks.",
      next:
        "Confirm Cloudflare, Merchant Center and Shopify theme access, investigate the HTTP 429 crawl responses, and start the product feed data quality and eligibility work.",
    },
  ],

  completedWork: [
    {
      completedOn: "August 3, 2026",
      evidence: "Closed August 3. Schema markup written and installed on the August 8-page scope.",
      owner: "Developer",
      title: "Delivered the August schema package (8 pages)",
    },
    {
      completedOn: "August 3, 2026",
      evidence: "Closed August 3. Onsite optimizations written and implemented across two 20-page packages.",
      owner: "SEO Specialist",
      title: "Delivered the August onsite packages (40 pages)",
    },
    {
      completedOn: "August 4, 2026",
      evidence: "Closed August 4. Roadmap fix to the product page template.",
      owner: "Developer",
      title: "Fixed duplicate and empty H1 output on product pages",
    },
    {
      completedOn: "August 21, 2026",
      evidence:
        "Closed August 21. Built on a data consolidation and a developer review of every proposed fix, both closed August 12.",
      owner: "SEO Strategist",
      title: "Delivered the August SEO roadmap",
    },
    {
      completedOn: "August 26, 2026",
      evidence:
        "Closed August 25 and 26. Applied noindex,follow to low-value /collections/types query URLs and removed internal links pointing to collection search query URLs.",
      owner: "Developer",
      title: "Cut crawl waste from collection query URLs",
    },
    {
      completedOn: "August 27, 2026",
      evidence: "Closed August 27, ahead of September. Schema markup written and installed on the next 8-page scope.",
      owner: "Developer",
      title: "Delivered the September schema package (8 pages) early",
    },
    {
      completedOn: "August 31, 2026",
      evidence:
        "Onsite optimizations closed August 27 and 28 and implementation closed August 31, ahead of September, across two 20-page packages.",
      owner: "SEO Specialist",
      title: "Delivered the September onsite packages (40 pages) early",
    },
  ],

  kpiRows: [
    {
      metric: "Search revenue, organic + paid (Shopify)",
      previous: "$337,775.54",
      current: "$329,247.83",
      change: "-2.5%",
      businessMeaning:
        "Sales from search-engine referrers, 5,275 orders. Includes untagged Google Ads clicks, so it is not organic alone.",
      status: "watch",
    },
    {
      metric: "Search share of store revenue",
      previous: "38.6%",
      current: "40.2%",
      change: "+1.6 points",
      businessMeaning: "Search fell less than the store overall, so it carried a larger share of sales.",
      status: "positive",
    },
    {
      metric: "Organic search revenue (GA4 cross-check)",
      previous: "$117,612.04",
      current: "$119,172.34",
      change: "+1.3%",
      businessMeaning:
        "GA4 Organic Search only. GA4 records far less revenue than Shopify on every channel, so read the direction, not the level.",
      status: "neutral",
    },
    {
      metric: "Store revenue, all channels (context)",
      previous: "$874,140.82",
      current: "$818,427.35",
      change: "-6.4%",
      businessMeaning: "Context only. The whole store softened more than search did.",
      status: "neutral",
    },
    {
      metric: "Organic clicks",
      previous: "51,132",
      current: "49,740",
      change: "-2.7%",
      businessMeaning: "Visits from Google search fell. Both months have 31 days, so this is a like-for-like drop.",
      status: "watch",
    },
    {
      metric: "Brand search clicks (searches Google shows)",
      previous: "911",
      current: "976",
      change: "+7.1%",
      businessMeaning: "Searches for the V-Belt Guys name grew. They are 7.5% of the clicks where Google shows the search.",
      status: "positive",
    },
    {
      metric: "Other named search clicks (searches Google shows)",
      previous: "8,602",
      current: "12,035",
      change: "+39.9%",
      businessMeaning: "Product searches Google names in full, led by L444 belt searches, grew by 3,433 clicks.",
      status: "positive",
    },
    {
      metric: "Clicks from searches Google does not show",
      previous: "41,619",
      current: "36,729",
      change: "-11.7%",
      businessMeaning:
        "Google hides rare, specific searches for privacy. They are 73.8% of clicks and fell by 4,890. Their brand status is unknown, but most are likely product searches.",
      status: "watch",
    },
    {
      metric: "Search impressions",
      previous: "2,265,475",
      current: "2,298,654",
      change: "+1.5%",
      businessMeaning: "Visibility grew, mostly from the L444 page appearing for broad 'l444' searches.",
      status: "positive",
    },
    {
      metric: "Average position",
      previous: "6.82",
      current: "6.99",
      change: "0.17 lower",
      businessMeaning: "Rankings eased slightly but stayed on page one.",
      status: "watch",
    },
  ],

  kpiDisclosure:
    "Traffic comes from the Google Search Console API for the domain property sc-domain:vbeltguys.com, August 1-31 vs July 1-31, 2026 (both 31 days). Clicks and impressions are exact and equal the sum of the device rows. Clicks are split into three groups: brand searches Google shows (queries matching the regex v ?-?belt ?guys|vbelt ?guys), other named searches Google shows, and searches Google does not show for privacy (73.8% of clicks in August, 81.4% in July), whose brand status is unknown. Revenue comes from Shopify Total sales by referrer (referrer source = search) and is labeled search (organic + paid) because agency Google Ads is active. GA4 Organic Search revenue is shown as a separate, labeled cross-check. Completed work comes from ClickUp task closures in August.",

  conversionPlan: {
    owner: "SEO Strategist + Account Manager",
    sourcePriority:
      "Shopify Total sales by referrer stays the revenue source. Split it by excluding orders that carry Google Ads tags, then compare the organic remainder with GA4 Organic Search and explain the gap between GA4 and Shopify totals.",
    nextReportExpectation:
      "The next report shows search revenue with paid and organic separated where the tags allow, and states how much of the Shopify figure could not be split.",
  },

  performanceCharts: {
    revenue: {
      title: "Search revenue dipped 2.5% while the store fell 6.4%",
      insight:
        "Search-referrer sales (organic + paid) fell $8,527.71, with Google down 2.9%. The store as a whole fell further, so search's share of revenue rose to 40.2%. GA4's organic-only figure moved the other way, up 1.3%.",
      channelContext:
        "Source: Shopify Total sales by referrer, referrer source = search, 5,275 orders in August vs 5,350 in July. Agency Google Ads is active, so this figure can include untagged paid clicks and is labeled search (organic + paid). Earlier reports labeled it organic. GA4 Organic Search revenue is a separate cross-check; GA4 records $460,530.76 across all channels against Shopify's $818,427.35, so it undercounts store sales and does not reconcile with Shopify yet.",
      series: [
        {
          change: "-2.5%",
          current: 329247.83,
          currentDisplay: "$329,247.83",
          label: "Search revenue, organic + paid (Shopify)",
          previous: 337775.54,
          previousDisplay: "$337,775.54",
          status: "watch",
        },
        {
          change: "-2.9%",
          current: 282630.86,
          currentDisplay: "$282,630.86",
          label: "Google search revenue (Shopify)",
          previous: 291198.4,
          previousDisplay: "$291,198.40",
          status: "watch",
        },
        {
          change: "+1.3%",
          current: 119172.34,
          currentDisplay: "$119,172.34",
          label: "Organic search revenue (GA4)",
          previous: 117612.04,
          previousDisplay: "$117,612.04",
          status: "positive",
        },
        {
          change: "-6.4%",
          current: 818427.35,
          currentDisplay: "$818,427.35",
          label: "Store revenue, all channels (Shopify)",
          previous: 874140.82,
          previousDisplay: "$874,140.82",
          status: "watch",
        },
      ],
      rankings: [
        {
          insight:
            "Google still drives most search revenue. Bing and DuckDuckGo edged up; Google and Yahoo slipped.",
          periods: [
            {
              label: "July 2026",
              items: [
                { display: "$291,198.40", label: "Google", value: 291198.4 },
                { display: "$33,583.57", label: "Bing", value: 33583.57 },
                { display: "$6,662.01", label: "DuckDuckGo", value: 6662.01 },
                { display: "$6,331.56", label: "Yahoo", value: 6331.56 },
              ],
            },
            {
              label: "August 2026",
              items: [
                { display: "$282,630.86", label: "Google", value: 282630.86 },
                { display: "$33,867.88", label: "Bing", value: 33867.88 },
                { display: "$7,021.43", label: "DuckDuckGo", value: 7021.43 },
                { display: "$5,727.66", label: "Yahoo", value: 5727.66 },
              ],
            },
          ],
          title: "Search revenue by engine, organic + paid",
        },
        {
          insight:
            "Industrial banded and timing belts led search sales. No single product dominates a catalog this broad, so the leaders change month to month.",
          periods: [
            {
              label: "August 2026",
              items: [
                { display: "$4,272.17", label: "5/8VK4250 Aramid Wedge Banded V-Belt", value: 4272.17 },
                { display: "$3,625.17", label: "8V2500 Wedge V-Belt", value: 3625.17 },
                { display: "$3,324.40", label: "3500-14M-85 GATES Replacement Timing Belt", value: 3324.4 },
              ],
            },
          ],
          title: "Top products from search revenue (August)",
        },
      ],
    },
    growth: {
      title: "Visibility grew, clicks did not follow",
      insight:
        "Impressions rose 1.5% while clicks fell 2.7%. Both months have 31 days, so the gap is real: the site appeared in more searches but won fewer visits, as click rate slipped from 2.26% to 2.16%.",
      series: [
        {
          change: "-2.7%",
          current: 49740,
          currentDisplay: "49,740",
          label: "Organic clicks",
          previous: 51132,
          previousDisplay: "51,132",
          status: "watch",
        },
        {
          change: "+1.5%",
          current: 2298654,
          currentDisplay: "2,298,654",
          label: "Search impressions",
          previous: 2265475,
          previousDisplay: "2,265,475",
          status: "positive",
        },
      ],
    },
    nonbrand: {
      baseline: 51132,
      baselineDisplay: "51,132",
      contributions: [
        { display: "+4,017", label: "L444 Dayco Kevlar V-belt page", value: 4017 },
        { display: "+85", label: "OEM replacement belts collection", value: 85 },
        { display: "+75", label: "444 Dayco cogged automotive belt", value: 75 },
        { display: "+51", label: "REMF1345 Kubota belt", value: 51 },
        { display: "+50", label: "AX30 cogged V-belt", value: 50 },
        { display: "-5,670", label: "All other pages", value: -5670 },
      ],
      insight:
        "One page carried the month. The L444 page added 4,017 clicks, but every other page combined lost 5,670, so the site ended 1,392 clicks down. Brand is only 7.5% of the clicks where Google shows the search, so this is most likely a product-search story, not a brand one.",
      title: "One page gained 4,017 clicks. The rest of the site lost 5,670",
      total: 49740,
      totalDisplay: "49,740",
    },
    homepage: {
      title: "The L444 page doubled its clicks and now reaches broader searches",
      insight:
        "The L444 Dayco page more than doubled its clicks to 7,597, the most of any page on the site. Its impressions more than quadrupled as it began appearing for the broad query 'l444' (286,719 impressions at position 7.4), which pulled its average position down from 4.1 to 6.8. Its top query, 'l444 belt cross reference', sits at position 1.0.",
      series: [
        {
          change: "+112.2%",
          current: 7597,
          currentDisplay: "7,597",
          label: "Clicks",
          previous: 3580,
          previousDisplay: "3,580",
          status: "positive",
        },
        {
          change: "+330.0%",
          current: 362497,
          currentDisplay: "362,497",
          label: "Impressions",
          previous: 84310,
          previousDisplay: "84,310",
          status: "positive",
        },
        {
          change: "2.7 lower",
          current: 6.8,
          currentDisplay: "6.8",
          label: "Average position",
          previous: 4.1,
          previousDisplay: "4.1",
          status: "watch",
        },
      ],
    },
    devices: {
      title: "Mobile grew, desktop fell 11%",
      insight:
        "Mobile added 730 clicks, but desktop lost 1,972 and tablet 150. Desktop impressions also fell 16.8%, so desktop visibility, not just click rate, dropped.",
      series: [
        {
          change: "+2.3%",
          current: 33130,
          currentDisplay: "33,130",
          label: "Mobile",
          previous: 32400,
          previousDisplay: "32,400",
          status: "positive",
        },
        {
          change: "-11.0%",
          current: 15888,
          currentDisplay: "15,888",
          label: "Desktop",
          previous: 17860,
          previousDisplay: "17,860",
          status: "watch",
        },
        {
          change: "-17.2%",
          current: 722,
          currentDisplay: "722",
          label: "Tablet",
          previous: 872,
          previousDisplay: "872",
          status: "watch",
        },
      ],
    },
  },

  visualDirections: [],

  obstacles: [
    {
      obstacle:
        "Traffic depends on one page. The L444 Dayco page gained 4,017 clicks while all other pages combined lost 5,670.",
      impact:
        "A strong single winner hides declines across the rest of the catalog and leaves traffic exposed if L444 rankings slip.",
      remediation:
        "Report the L444 page separately each month and build the next onsite batch from the pages that lost the most clicks.",
      eta: "Next onsite batch; measured in the September report.",
    },
    {
      obstacle:
        "Riding-mower belt pages lost clicks, for example John Deere X300 (down 46.6%), D110 (down 40.9%) and LA115 (down 37.0%).",
      impact:
        "These pages were steady July traffic. If the loss is ranking, not seasonal demand, it will keep growing.",
      remediation:
        "Compare these pages with August last year to separate mowing-season demand from ranking loss, then refresh the pages that lost position.",
      eta: "Before the September report.",
    },
    {
      obstacle: "Desktop clicks fell 11.0% and desktop impressions fell 16.8%, while mobile grew.",
      impact: "The site lost 1,972 desktop visits, more than its net loss of 1,392 clicks for the month.",
      remediation: "Break the desktop loss down by page and query to find which products lost desktop visibility.",
      eta: "Before the September report.",
    },
    {
      obstacle:
        "Shopify's search revenue blends organic and paid clicks, and GA4 does not reconcile with Shopify.",
      impact: "Organic search revenue cannot yet be reported on its own with confidence.",
      remediation:
        "Exclude tagged Google Ads orders from the Shopify search figure and document the GA4 versus Shopify gap.",
      eta: "Next report.",
    },
    {
      obstacle:
        "Cloudflare, Merchant Center and Shopify theme access still need to be confirmed before developer work can be scheduled.",
      impact: "The crawl (HTTP 429) investigation and the product feed work cannot start without it.",
      remediation: "Confirm access with the client, then schedule the crawl investigation and feed fixes.",
      eta: "Due September 24.",
    },
  ],

  technicalItems: [
    {
      issue:
        "An investigation is open into HTTP 429 (too many requests) responses returned during crawls.",
      why: "If search engine crawlers are rate-limited, new and updated pages can take longer to be crawled and indexed.",
      fix: "Confirm Cloudflare access, identify the rule returning 429, and allow verified search crawlers.",
      developerNote: "Crawl investigation 868m3m00h (due September 21) depends on the access check in 868m4kdxw (due September 24).",
    },
    {
      issue: "Cloudflare, Merchant Center and Shopify theme access is not yet confirmed.",
      why: "Without it, developer fixes and feed work cannot be scheduled.",
      fix: "Confirm each access with the client before dev scheduling.",
      developerNote: "Access check 868m4kdxw.",
    },
    {
      issue: "The product feed needs data quality and eligibility fixes for Merchant Center.",
      why: "Ineligible or incomplete products lose Shopping and free listing visibility, the most commercial search surface.",
      fix: "Clean product feed data, then fix eligibility issues in stages, starting with Part 1.",
      developerNote: "Feed data quality 868m3m00w (due September 30); feed eligibility Part 1 868m3m00r (due October 5).",
    },
    {
      issue:
        "Three roadmap fixes shipped in August: product-page H1s, noindex,follow on low-value /collections/types query URLs, and removal of internal links to collection search query URLs.",
      why: "The query URLs waste crawl time and can compete with real collection pages in search.",
      fix: "Watch indexed-page counts and excluded URLs in Search Console over the next crawl cycles to confirm the query URLs drop out.",
      developerNote: "Closed as 868jwhenh (H1), 868jwhenp (noindex) and 868jwhenu (internal links).",
    },
  ],

  dataNotes: [
    "Traffic source: Google Search Console API (exact values) for the domain property sc-domain:vbeltguys.com. Platform is Shopify.",
    "Current period: August 1-31, 2026. Previous period: July 1-31, 2026. Both months have 31 days.",
    "Clicks (49,740 vs 51,132) and impressions (2,298,654 vs 2,265,475) equal the sum of the desktop, mobile and tablet rows. CTR (2.16% vs 2.26%) and average position (6.99 vs 6.82) are Search Console's reported values.",
    "Brand method: brand queries match the regex v ?-?belt ?guys|vbelt ?guys, pulled through the GSC API. Brand clicks were 976 vs 911 and other named searches 12,035 vs 8,602. Earlier reports showed a single non-brand figure (total minus brand, 48,764 vs 50,221 here), which counts every hidden click as non-brand, so it is not shown as a fact in this report and earlier non-brand figures are not comparable.",
    "Searches Google does not show: Google withholds rare, specific queries for privacy. They brought 36,729 of 49,740 clicks in August (73.8%) and 41,619 of 51,132 in July (81.4%). Their brand status is unknown. They are usually long, specific searches, so most are likely non-brand. Brand, other named and hidden clicks add up exactly to total clicks in both months.",
    "Page and query figures come from the top rows returned by the API. Pages shown with no July clicks had no July clicks recorded in that pull.",
    "Label change: earlier reports, including July's, called Shopify's search-referrer revenue 'organic'. Agency Google Ads is active for this client, so untagged paid clicks can land in the same 'search' referrer. From this report the figure is labeled search (organic + paid). The data source is unchanged.",
    "Revenue source: Shopify Total sales by referrer, referrer source = search: $329,247.83 across 5,275 orders in August vs $337,775.54 across 5,350 orders in July. By engine (August): Google $282,630.86, Bing $33,867.88, DuckDuckGo $7,021.43, Yahoo $5,727.66.",
    "Store context: all-channel Shopify total sales $818,427.35 across 9,618 orders in August vs $874,140.82 across 10,504 in July. Search was 40.2% of store revenue vs 38.6%.",
    "Product rankings exclude $47,182.94 of August search sales with no product attached (shipping, taxes, adjustments).",
    "GA4 cross-check: property 324206721, Organic Search channel, $119,172.34 across 1,966 purchases in August vs $117,612.04 across 2,043 in July. GA4 all-channel revenue ($460,530.76) is well below Shopify's ($818,427.35), so GA4 undercounts store sales and is shown only as a directional cross-check.",
    "Completed work comes from ClickUp task closures in August 2026. Internal steps are folded into the deliverable they fed. The September onsite and schema packages were closed in August and are counted here. Email marketing work closed in August is outside this organic search report.",
  ],
};
