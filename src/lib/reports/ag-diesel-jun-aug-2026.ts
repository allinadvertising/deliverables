import type { SeoStoryReportData } from "@/lib/reports/types";

export const agDieselJunAug2026Report: SeoStoryReportData = {
  businessObjective:
    "Grow qualified organic traffic and revenue while connecting the on-site work — CDN configuration and metadata optimization — to measurable search performance.",
  technicalLabels: {
    fix: "Recommended action",
    issue: "Finding",
    why: "Business risk",
  },
  visualSection: {
    eyebrow: "Performance & revenue",
    intro:
      "Organic revenue grew year over year while the on-site work lifted search visibility across three cohorts: the 55 CDN-served URLs, the whole property, and the 18 re-optimized engine-module pages.",
    title: "Organic revenue and search performance",
  },
  meta: {
    action:
      "Protect and extend the gains — connect Google's revenue growth to product-level landing pages, scale the CDN and metadata wins to the remaining catalog, and lift on-site conversion and average order value.",
    client: "AG Diesel Solutions",
    coverHeadline: "Revenue grew 59.8%, and the on-site work is lifting rankings.",
    currentPeriod: "Jun 1 - Aug 31, 2026",
    previousPeriod: "Jun 1 - Aug 31, 2025",
    property: "https://agdieselsolutions.com/",
    reportType: "Organic Search Performance Report",
    source: "Google Search Console + BigCommerce Analytics + ClickUp delivery records",
  },
  executiveSummary:
    "Organic revenue grew 59.8% year over year to $33,316.42, led by Google more than doubling to $21,348.30. The on-site work is showing up in search performance: the 55 CDN-served URLs grew clicks 64% and impressions 54%, the whole property grew clicks 15% and impressions 20%, and the 18 re-optimized engine-module pages improved average position from 10.1 to 7.7 (+2.4 spots) with clicks up 35%. The revenue gain is volume-led — organic orders nearly doubled while average order value slipped 18.4% to $354.43 — so the next priority is to convert the larger organic audience at a higher value.",
  powerLines: [
    {
      area: "Traffic",
      statement:
        "The 55 CDN-served URLs grew clicks 64% (151 to 248) and impressions 54% (9,124 to 14,046) over the prior window.",
      status: "positive",
    },
    {
      area: "Rankings",
      statement:
        "The 18 re-optimized engine-module pages improved average position 10.1 to 7.7 (+2.4 spots), with clicks up 35%.",
      status: "positive",
    },
    {
      area: "Revenue",
      statement:
        "Organic revenue grew 59.8% to $33,316.42, with Google adding $11,432.55.",
      status: "positive",
    },
    {
      area: "Efficiency",
      statement:
        "Average order value slipped 18.4% to $354.43 and conversion rate eased from 1.56% to 1.17%.",
      status: "watch",
    },
  ],
  journeyWorkstreams: [
    {
      businessPriority:
        "Accelerate delivery and lift the visibility of the 55 CDN-served engine-module URLs.",
      name: "CDN configuration",
      started:
        "Before the Aug 4 CDN config, the 55 URLs drew 151 clicks and 9,124 impressions over 29 days.",
      work:
        "We compared the 55 CDN URLs' recent 29-day performance against the equal prior window.",
      result:
        "Clicks grew 64% to 248 and impressions 54% to 14,046, with average position holding at 8.8.",
      next:
        "Extend the CDN configuration to the remaining catalog and confirm the cutover effect over a longer window.",
    },
    {
      businessPriority:
        "Improve rankings and click capture on the 19 re-optimized metadata pages.",
      name: "Metadata optimization",
      started:
        "Before the onsite work (Apr 29-Jun 30), the 18 engine-module pages averaged position 10.1 with 1,718 impressions.",
      work:
        "We compared the Jul 1-Sep 1 onsite period against the clean pre-optimization baseline for the 19 pages.",
      result:
        "The 18 product pages improved average position to 7.7 (+2.4 spots), with impressions up 49% and clicks up 35%.",
      next:
        "Let the late-August and September batches mature, then add the schema breakdown and a per-batch cohort view.",
    },
    {
      businessPriority:
        "Grow organic revenue and connect it to the on-site work.",
      name: "Organic revenue",
      started:
        "In Jun-Aug 2025 the organic channel produced $20,855.32 from 3,082 visits and 48 orders.",
      work:
        "We compared BigCommerce organic-channel revenue, orders, visits, and average order value year over year.",
      result:
        "Revenue grew 59.8% to $33,316.42, led by Google (+115.3%), while average order value slipped 18.4%.",
      next:
        "Add a product-level organic view and improve on-site conversion to lift the value of the larger audience.",
    },
  ],
  completedWork: [
    {
      completedOn: "July 15, 2026",
      evidence:
        "5-URL schema markup package written and installed via the automated/manual install subtasks.",
      owner: "Brandon Swain",
      taskUrl: "https://app.clickup.com/t/868ka10b9",
      title: "AG Diesel Solutions - Schema Task [5] URL - July '26",
    },
    {
      completedOn: "July 16, 2026",
      evidence:
        "10-page metadata onsite batch; onsites written and implementation completed.",
      owner: "Brandon Swain",
      taskUrl: "https://app.clickup.com/t/868ka0vbm",
      title: "AG Diesel - Bulk Onsites x10 - July '26",
    },
    {
      completedOn: "July 22, 2026",
      evidence:
        "3-piece content batch: KWR, writing, QA, and implementation completed.",
      owner: "Brandon Swain",
      taskUrl: "https://app.clickup.com/t/868kahpjm",
      title: "AG Diesel Solutions - Bulk Content (3) - July '26",
    },
    {
      completedOn: "July 24, 2026",
      evidence:
        "Crawl controls added for URL parameters to reduce crawlable noise.",
      owner: "Rafael Osorio",
      taskUrl: "https://app.clickup.com/t/868k4cr7g",
      title: "Add parameter crawl controls",
    },
    {
      completedOn: "July 24, 2026",
      evidence:
        "Removed crawlable utility and faceted navigation links from the crawlable set.",
      owner: "Roberto Verlezza",
      taskUrl: "https://app.clickup.com/t/868k4cr7p",
      title: "Remove crawlable utility and faceted links",
    },
    {
      completedOn: "Aug 4, 2026",
      evidence:
        "Cloudflare CDN configured for the 55 modules, with a Cloudflare Worker injecting the 'Compatible With' compatibility table into crawler-facing HTML. All 55 product URLs verified via Screaming Frog custom extraction.",
      owner: "Snell Rojas",
      taskUrl: "https://app.clickup.com/t/868k4vvde",
      title: "Cloudflare CDN + compatibility-chart Worker (55 modules)",
    },
    {
      completedOn: "Aug 14, 2026",
      evidence:
        "5-URL schema markup package written and installed.",
      owner: "Brandon Swain",
      taskUrl: "https://app.clickup.com/t/868kbx4q8",
      title: "AG Diesel Solutions - Schema Task [5] URL - Aug '26",
    },
    {
      completedOn: "Aug 14, 2026",
      evidence:
        "3-piece content batch: KWR, writing, QA, and implementation completed.",
      owner: "Brandon Swain",
      taskUrl: "https://app.clickup.com/t/868kbx4u6",
      title: "AG Diesel Solutions - Bulk Content (3) - Aug '26",
    },
    {
      completedOn: "Aug 17, 2026",
      evidence:
        "10-page metadata onsite batch; onsites written and implementation completed.",
      owner: "Brandon Swain",
      taskUrl: "https://app.clickup.com/t/868kbx1t3",
      title: "AG Diesel - Bulk Onsites x10 - Aug '26",
    },
    {
      completedOn: "Aug 27, 2026",
      evidence:
        "Controlled category pagination states to clean up crawlable URL variants.",
      owner: "Leo Urdaneta",
      taskUrl: "https://app.clickup.com/t/868k4cr7u",
      title: "Control category pagination states",
    },
    {
      completedOn: "Aug 28, 2026",
      evidence:
        "5-URL schema markup package written and installed.",
      owner: "Brandon Swain",
      taskUrl: "https://app.clickup.com/t/868kd3fj3",
      title: "AG Diesel Solutions - Schema Task [5] URL - Sep '26",
    },
    {
      completedOn: "Sep 2, 2026",
      evidence:
        "10-page metadata onsite batch; onsites written and implementation completed.",
      owner: "Brandon Swain",
      taskUrl: "https://app.clickup.com/t/868kd3ab4",
      title: "AG Diesel - Bulk Onsites x10 - Sep '26",
    },
    {
      completedOn: "Sep 2, 2026",
      evidence:
        "3-piece content batch: KWR, writing, QA, and implementation completed.",
      owner: "Brandon Swain",
      taskUrl: "https://app.clickup.com/t/868kd36w5",
      title: "AG Diesel Solutions - Bulk Content (3) - Sep '26",
    },
  ],
  kpiRows: [
    {
      metric: "Organic search revenue",
      previous: "$20,855.32",
      current: "$33,316.42",
      change: "+59.8%",
      businessMeaning: "Organic added $12,461.10 in attributed sales year over year.",
      status: "positive",
    },
    {
      metric: "Organic orders",
      previous: "48",
      current: "94",
      change: "+95.8%",
      businessMeaning: "Organic orders nearly doubled across the period.",
      status: "positive",
    },
    {
      metric: "Sitewide clicks",
      previous: "912",
      current: "1,048",
      change: "+15%",
      businessMeaning: "Whole-property organic clicks grew over the recent 29-day window.",
      status: "positive",
    },
    {
      metric: "CDN URL clicks",
      previous: "151",
      current: "248",
      change: "+64%",
      businessMeaning: "The 55 CDN-served URLs grew clicks sharply versus the prior window.",
      status: "positive",
    },
    {
      metric: "Metadata avg position",
      previous: "10.1",
      current: "7.7",
      change: "+2.4 spots",
      businessMeaning: "The 18 re-optimized product pages moved 2.4 positions closer to page one.",
      status: "positive",
    },
    {
      metric: "Average order value",
      previous: "$434.49",
      current: "$354.43",
      change: "-18.4%",
      businessMeaning: "Each organic order is worth less than it was a year ago.",
      status: "watch",
    },
  ],
  kpiDisclosure:
    "Search performance comes from the Google Search Console domain property sc-domain:agdieselsolutions.com (CDN and sitewide: Aug 4-Sep 1, 2026 vs Jul 6-Aug 3, 2026; metadata: Jul 1-Sep 1, 2026 vs Apr 29-Jun 30, 2026). Revenue comes from BigCommerce Analytics (Jun 1-Aug 31, 2026 vs Jun 1-Aug 31, 2025), where organic is the 'Search' traffic source and excludes paid 'Adwords'.",
  performanceCharts: {
    periodLabels: {
      previous: "Jun-Aug 2025",
      current: "Jun-Aug 2026",
    },
    revenue: {
      channelContext:
        "BigCommerce attributes organic revenue through the 'Search' traffic source (the referring search engine), not onsite landing pages. Product and brand revenue are separate all-channel reports that cannot be cross-tabbed by channel, so the product and brand rankings below span every channel (organic, paid, and direct).",
      insight:
        "Organic search revenue rose to $33,316.42, a $12,461.10 gain. Google's $11,432.55 increase drove the growth and lifted its share of organic revenue from 47.5% to 64.1%.",
      series: [
        {
          change: "+59.8%",
          current: 33316.42,
          currentDisplay: "$33,316.42",
          label: "Organic search revenue",
          previous: 20855.32,
          previousDisplay: "$20,855.32",
          status: "positive",
        },
        {
          change: "+115.3%",
          current: 21348.3,
          currentDisplay: "$21,348.30",
          label: "Google revenue",
          previous: 9915.75,
          previousDisplay: "$9,915.75",
          status: "positive",
        },
        {
          change: "+95.8%",
          current: 94,
          currentDisplay: "94",
          label: "Organic orders",
          previous: 48,
          previousDisplay: "48",
          status: "positive",
        },
        {
          change: "-18.4%",
          current: 354.43,
          currentDisplay: "$354.43",
          label: "Average order value",
          previous: 434.49,
          previousDisplay: "$434.49",
          status: "watch",
        },
      ],
      rankings: [
        {
          insight:
            "Google more than doubled to overtake Bing as the top organic revenue engine, while DuckDuckGo and Yahoo! emerged as new contributors.",
          periods: [
            {
              label: "Jun-Aug 2025",
              items: [
                { display: "$10,939.57", label: "Bing", value: 10939.57 },
                { display: "$9,915.75", label: "Google", value: 9915.75 },
              ],
            },
            {
              label: "Jun-Aug 2026",
              items: [
                { display: "$21,348.30", label: "Google", value: 21348.3 },
                { display: "$7,886.44", label: "Bing", value: 7886.44 },
                { display: "$2,981.99", label: "DuckDuckGo", value: 2981.99 },
                { display: "$1,099.69", label: "Yahoo!", value: 1099.69 },
              ],
            },
          ],
          title: "Organic revenue by search engine",
        },
        {
          insight:
            "The top seller changed hands, with JD2905 rising to #1 while John Deere and Iveco/FPT tuner lines now dominate the top five.",
          periods: [
            {
              label: "Jun-Aug 2025",
              items: [
                { display: "$20,773.30", label: "HP9040", detail: "13.5L John Deere Tier IV", value: 20773.3 },
                { display: "$17,640.21", label: "61900", detail: "3.0L LZO Duramax", value: 17640.21 },
                { display: "$16,163.70", label: "HP9050", detail: "13.6L John Deere Stage V", value: 16163.7 },
                { display: "$12,450.15", label: "JD2904", detail: "9.0L John Deere Tier IV", value: 12450.15 },
                { display: "$11,890.76", label: "51000", detail: "3126/C7/C9 CAT Medium Duty", value: 11890.76 },
              ],
            },
            {
              label: "Jun-Aug 2026",
              items: [
                { display: "$27,872.41", label: "JD2905", detail: "9.0L John Deere Tier IV Final", value: 27872.41 },
                { display: "$27,403.59", label: "HP9040", detail: "13.5L John Deere Tier IV", value: 27403.59 },
                { display: "$19,766.10", label: "IV6000", detail: "10.3L & 12.9L Iveco/FPT", value: 19766.1 },
                { display: "$18,685.21", label: "HP9050", detail: "13.6L John Deere Stage V", value: 18685.21 },
                { display: "$17,985.58", label: "IV6000B", detail: "Iveco/FPT Tier IV B", value: 17985.58 },
              ],
            },
          ],
          title: "Top products by revenue (all channels)",
        },
        {
          insight:
            "The house Ag Diesel Solutions brand overtook Truck Edition as the top revenue line, while aFe Power and PSI Power grew sharply from a small base.",
          periods: [
            {
              label: "Jun-Aug 2025",
              items: [
                { display: "$189,981.05", label: "Ag Diesel Solutions", value: 189981.05 },
                { display: "$188,937.30", label: "Truck Edition", value: 188937.3 },
                { display: "$2,494.49", label: "aFe Power", value: 2494.49 },
                { display: "$53.98", label: "PSI Power", value: 53.98 },
              ],
            },
            {
              label: "Jun-Aug 2026",
              items: [
                { display: "$246,580.30", label: "Ag Diesel Solutions", value: 246580.3 },
                { display: "$133,873.67", label: "Truck Edition", value: 133873.67 },
                { display: "$28,604.92", label: "aFe Power", value: 28604.92 },
                { display: "$4,977.07", label: "PSI Power", value: 4977.07 },
              ],
            },
          ],
          title: "Revenue by brand (all channels)",
        },
      ],
      title: "Organic revenue grew 59.8% year over year",
    },
    growth: {
      previousLabel: "Jul 6 - Aug 3",
      currentLabel: "Aug 4 - Sep 1",
      title: "CDN URLs (55) grew sharply",
      insight:
        "The 55 CDN-served URLs grew clicks 64% and impressions 54% versus the prior 29 days, while average position held at 8.8.",
      series: [
        {
          change: "+64%",
          current: 248,
          currentDisplay: "248",
          label: "Clicks",
          previous: 151,
          previousDisplay: "151",
          status: "positive",
        },
        {
          change: "+54%",
          current: 14046,
          currentDisplay: "14,046",
          label: "Impressions",
          previous: 9124,
          previousDisplay: "9,124",
          status: "positive",
        },
      ],
    },
    homepage: {
      previousLabel: "Jul 6 - Aug 3",
      currentLabel: "Aug 4 - Sep 1",
      title: "Sitewide visibility expanded",
      insight:
        "Property-wide clicks grew 15% and impressions 20% over the prior 29 days, with CTR and average position holding roughly flat.",
      series: [
        {
          change: "+15%",
          current: 1048,
          currentDisplay: "1,048",
          label: "Clicks",
          previous: 912,
          previousDisplay: "912",
          status: "positive",
        },
        {
          change: "+20%",
          current: 52864,
          currentDisplay: "52,864",
          label: "Impressions",
          previous: 44168,
          previousDisplay: "44,168",
          status: "positive",
        },
        {
          change: "-0.08 pts",
          current: 1.98,
          currentDisplay: "1.98%",
          label: "Avg CTR",
          previous: 2.06,
          previousDisplay: "2.06%",
          status: "watch",
        },
        {
          change: "-0.2 spots",
          current: 9.4,
          currentDisplay: "9.4",
          label: "Avg Position",
          previous: 9.2,
          previousDisplay: "9.2",
          status: "watch",
        },
      ],
    },
    devices: {
      previousLabel: "Apr 29 - Jun 30",
      currentLabel: "Jul 1 - Sep 1",
      title: "Re-optimized product pages climbed",
      insight:
        "The 18 re-optimized engine-module pages improved average position 10.1 to 7.7 (+2.4 spots), with impressions up 49% and clicks up 35%.",
      series: [
        {
          change: "+35%",
          current: 42,
          currentDisplay: "42",
          label: "Clicks",
          previous: 31,
          previousDisplay: "31",
          status: "positive",
        },
        {
          change: "+49%",
          current: 2565,
          currentDisplay: "2,565",
          label: "Impressions",
          previous: 1718,
          previousDisplay: "1,718",
          status: "positive",
        },
        {
          change: "+2.4 spots",
          current: 7.7,
          currentDisplay: "7.7",
          label: "Avg Position",
          previous: 10.1,
          previousDisplay: "10.1",
          status: "positive",
        },
      ],
    },
  },
  visualDirections: [],
  obstacles: [
    {
      obstacle:
        "Growth is volume-led, not efficiency-led. Organic visits rose 160.4% and orders 95.8%, but average order value fell 18.4% and conversion rate dropped from 1.56% to 1.17%.",
      impact:
        "The site is earning far more organic traffic without converting it at the same efficiency, leaving revenue on the table.",
      remediation:
        "Review the highest-traffic organic landing pages for conversion and average-order-value improvements, then test higher-intent listing and product-page experiences.",
      eta: "Measure over the next quarter once conversion changes are live.",
    },
    {
      obstacle:
        "Organic revenue cannot be tied to specific products or landing pages in BigCommerce; organic referring URLs log as 'Unattributed' and channel/product reports cannot be cross-tabbed.",
      impact:
        "The team cannot yet prove which products or pages generated the organic revenue gain.",
      remediation:
        "Stand up a product-level organic view using a compatible attribution source (analytics segment or UTM-backed tracking) before the next report.",
      eta: "In place before the next quarterly revenue report.",
    },
    {
      obstacle:
        "Bing organic revenue declined 27.9% while Google more than doubled, concentrating organic revenue in a single engine.",
      impact:
        "A future Google ranking change would now hit a larger share of organic revenue than it did in 2025.",
      remediation:
        "Monitor Bing's decline and preserve multi-engine visibility so the Google gain does not become a single point of failure.",
      eta: "Review monthly alongside engine-level revenue.",
    },
    {
      obstacle:
        "The late metadata batches are still maturing, and the schema work is not yet in the breakdown. The Aug and Sep pages went live mid-to-late August, and schema tasks point to a roadmap spreadsheet rather than listing URLs.",
      impact:
        "The full effect of the metadata work is understated, and the schema contribution is not yet measurable.",
      remediation:
        "Let the late batches mature and add the schema URL list so future reports can measure the complete onsite effect.",
      eta: "Review in the next report as the late batches mature.",
    },
  ],
  technicalItems: [
    {
      issue:
        "BigCommerce cannot cross-tab organic channel revenue with product, landing page, category, or URL.",
      why:
        "Channel-level revenue and product/brand revenue are separate reports, so organic wins cannot be shown at the item level.",
      fix:
        "Add a product-level organic view through a compatible analytics segment or UTM-backed attribution.",
    },
    {
      issue:
        "Products and Brands tabs are all-channel, not organic-only, and 'Brand' is the closest available category proxy.",
      why:
        "Category and organic landing-page revenue are unavailable, so catalog insights are directionally useful but not channel-pure.",
      fix:
        "Treat brand and product rankings as catalog proxies and note the all-channel limitation in each report.",
    },
    {
      issue:
        "The 2026 Products total ($419,549.93) trails the Merchandising revenue total ($529,311.52) by roughly $109,761.59.",
      why:
        "Revenue tied to deleted/archived products or adjustments is not attributable to a listed product row.",
      fix:
        "Reconcile the gap before publishing and keep it visible as a data limitation.",
    },
    {
      issue:
        "Organic referring URLs log as 'Unattributed', so onsite landing-page revenue is not available.",
      why:
        "Landing-page-level organic performance must come from Search Console, not BigCommerce.",
      fix:
        "Pair BigCommerce channel revenue with Search Console page performance to connect traffic to pages.",
    },
  ],
  dataNotes: [
    "Search performance source: Google Search Console domain property sc-domain:agdieselsolutions.com.",
    "CDN and sitewide windows: Aug 4-Sep 1, 2026 vs Jul 6-Aug 3, 2026 (29 days each).",
    "Metadata window: Jul 1-Sep 1, 2026 vs Apr 29-Jun 30, 2026 (63 days each).",
    "Revenue source: BigCommerce Analytics (Marketing > Visit origin details and Merchandising reports), USD.",
    "Current period: Jun 1-Aug 31, 2026. Previous period: Jun 1-Aug 31, 2025 (year over year).",
    "Organic = the 'Search' traffic source (organic search engines) and excludes paid 'Adwords'.",
    "Organic revenue cannot be broken down by product, landing page, category, or URL slug in BigCommerce; Products and Brands are all-channel.",
    "The 2026 Products total ($419,549.93) is roughly $109,761.59 below the Merchandising revenue total ($529,311.52) due to unattributable rows.",
    "Average positions on the CDN and metadata charts are impression-weighted across their URL subsets; the sitewide position is the GSC property aggregate.",
    "Completed-work evidence comes from ClickUp task status, names, assignees, and closure dates in the AG Diesel Solutions Task List. The Cloudflare CDN and compatibility-chart work uses the Aug 4, 2026 team email thread (Top 55 modules - PSI Power) as its source of truth.",
  ],
};
