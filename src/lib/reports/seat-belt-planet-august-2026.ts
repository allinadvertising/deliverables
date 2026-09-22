import type { SeoStoryReportData } from "@/lib/reports/types";

// Seat Belt Planet, August 2026 vs July 2026. First report for this client.
// Every figure comes from output/seat-belt-planet-august-2026/data.json (GSC API, GA4 Data API, ClickUp).
export const seatBeltPlanetAugust2026Report: SeoStoryReportData = {
  technicalLabels: {
    fix: "Next action",
    issue: "Issue",
    why: "Business risk",
  },

  visualSection: {
    eyebrow: "Performance",
    intro:
      "This is the first monthly report for Seat Belt Planet. Search Console shows Google traffic held steady from July to August. GA4 shows organic sessions, purchases and revenue falling sharply over the same weeks. Those two facts do not fit together yet, so the charts below separate what search delivered from what happened after the click.",
    title: "Google traffic held. GA4 revenue fell. Here is where the gap sits",
  },

  meta: {
    action:
      "Reconcile GA4 organic revenue against the Web Shop Manager order report for July and August, check GA4 purchase tracking for gaps, and identify any large July orders. Until that is done, treat the revenue drop as unexplained, not as an SEO result. In parallel, fix the two Chevrolet truck category URLs that stopped serving.",
    client: "Seat Belt Planet",
    coverHeadline:
      "Google sent Seat Belt Planet the same traffic in August as in July: 6,872 clicks vs 6,840. GA4 organic revenue still fell 56.6% to $16,121.71, so the drop sits after the click, not in search.",
    currentPeriod: "August 1-31, 2026",
    previousPeriod: "July 1-31, 2026",
    property: "https://www.seatbeltplanet.com/",
    reportType: "Monthly Organic Search Performance Report",
    source: "Google Search Console API + GA4 Data API (Organic Search channel) + ClickUp delivery records",
  },

  executiveSummary:
    "Search held and revenue did not, and search is not the cause we can see. Google clicks were flat at 6,872 (up 0.5% from 6,840), every search group moved by 26 clicks or fewer (brand +26, other named searches +2, searches Google does not show +4), and average position stayed near 8.2. Over the same month GA4 recorded organic sessions down 23.7% to 6,687, organic purchases down 45.7% to 89, and organic revenue down 56.6% to $16,121.71 from $37,127.44. The drop was not limited to organic: GA4 all-channel revenue fell 49.7%, and organic kept a steady share of purchases (22.5% vs 22.6%). That points to something site-wide, such as tracking, conversion, or a few large July orders, rather than lost search visibility. The open problem is that GA4 revenue has not yet been checked against the store's own order report, so we cannot yet say which it is. August's delivered work was the SEO roadmap and schema markup on five URLs.",

  powerLines: [
    {
      area: "Traffic",
      statement:
        "Google clicks held at 6,872 vs 6,840 (+0.5%). Brand searches rose by 26 clicks, other named searches by 2 and searches Google does not show by 4, so search demand and visibility did not drop.",
      status: "positive",
    },
    {
      area: "Revenue (GA4)",
      statement:
        "GA4 organic revenue fell 56.6% to $16,121.71 on 89 purchases. All-channel revenue fell 49.7% too, and the figure is not yet reconciled with the store's order report.",
      status: "watch",
    },
    {
      area: "Rankings",
      statement:
        "Average position was stable at 8.16 vs 8.21, and click-through rate rose to 2.73% from 2.63%. Impressions eased 3.3%.",
      status: "positive",
    },
    {
      area: "Technical health",
      statement:
        "Schema markup went live on five URLs. Two Chevrolet truck category URLs stopped serving and are scheduled for repair.",
      status: "watch",
    },
  ],

  journeyWorkstreams: [
    {
      businessPriority: "Know whether organic revenue really fell before acting on it.",
      name: "Revenue measurement",
      started:
        "Organic revenue is read from GA4 (Organic Search channel). It has never been checked against the Web Shop Manager order report.",
      work:
        "We pulled July and August from GA4 and Search Console side by side and compared organic with all-channel results.",
      result:
        "Google clicks were flat while GA4 organic sessions fell 23.7% and organic revenue fell 56.6%. All-channel revenue fell 49.7% as well, and organic's share of purchases held at 22.5%. The drop is store-wide in GA4, not specific to search.",
      next:
        "Reconcile GA4 against the store's order report for both months, check the GA4 purchase tag for gaps, and look for a few large July orders.",
    },
    {
      businessPriority: "Set the order of SEO work for the coming months.",
      name: "SEO roadmap",
      started: "The account needed an agreed plan for the next cycle of SEO work.",
      work:
        "We consolidated the site's search data, ran a developer review to confirm what can be built on Web Shop Manager, and delivered the roadmap. Its priorities were then reordered on August 28.",
      result: "The roadmap is delivered and its priorities are set for the next cycle of work.",
      next: "Execute the roadmap's first priorities and report their effect against this month's figures.",
    },
    {
      businessPriority: "Keep category and product pages eligible to rank and to show rich results.",
      name: "Technical SEO",
      started:
        "Structured data was missing on part of the catalog, and two Chevrolet truck category URLs were found to have stopped serving.",
      work: "Our developer installed schema markup on five URLs from the July schema batch.",
      result: "Five more URLs now carry structured data. The dead category URLs are scoped as a repair task.",
      next: "Restore or redirect the two Chevrolet truck category URLs, then confirm in Search Console that Google recrawls them.",
    },
    {
      businessPriority: "Grow non-brand search, which most likely brings most of Seat Belt Planet's organic traffic.",
      name: "Search visibility",
      started:
        "Google does not show the search behind 81.3% of clicks, so their brand status is unknown. Of the searches it does show, brand is 18.9% (242 clicks in August), so most traffic is likely non-brand.",
      work: "We tracked clicks, impressions, position and device mix month over month through the Search Console API.",
      result:
        "Visibility held: brand, other named and hidden searches were all flat, average position stayed near 8.2, and mobile clicks rose 1.4% while desktop eased 1.6%. Commercial terms such as custom seat belts gained clicks.",
      next: "Use this month as the traffic baseline and measure roadmap work against it.",
    },
  ],

  completedWork: [
    {
      completedOn: "August 19, 2026",
      evidence: "Closed August 19. Structured data installed on five URLs from the July schema batch.",
      owner: "Developer",
      title: "Installed schema markup on five URLs",
    },
    {
      completedOn: "August 27, 2026",
      evidence:
        "Closed August 27. Built on a data consolidation (closed August 12) and a developer review of what Web Shop Manager can support (closed August 11).",
      owner: "Head of SEO",
      title: "Delivered the August SEO roadmap",
    },
    {
      completedOn: "August 28, 2026",
      evidence: "Closed August 28. Reordered the roadmap's priorities for the next cycle of work.",
      owner: "Head of SEO",
      title: "Reprioritized the SEO roadmap",
    },
  ],

  kpiRows: [
    {
      metric: "Organic clicks (Google)",
      previous: "6,840",
      current: "6,872",
      change: "+0.5%",
      businessMeaning: "Google sent the same volume of visits. Search traffic is not where the revenue drop came from.",
      status: "neutral",
    },
    {
      metric: "Brand search clicks (searches Google shows)",
      previous: "216",
      current: "242",
      change: "+12.0%",
      businessMeaning: "Searches for the Seat Belt Planet name grew slightly. They are 18.9% of the clicks where Google shows the search.",
      status: "neutral",
    },
    {
      metric: "Other named search clicks (searches Google shows)",
      previous: "1,039",
      current: "1,041",
      change: "+0.2%",
      businessMeaning: "Product searches Google names in full held steady.",
      status: "neutral",
    },
    {
      metric: "Clicks from searches Google does not show",
      previous: "5,585",
      current: "5,589",
      change: "+0.1%",
      businessMeaning:
        "Google hides rare, specific searches for privacy. They are 81.3% of clicks and held steady. Their brand status is unknown, but most are likely product searches.",
      status: "neutral",
    },
    {
      metric: "Organic revenue (GA4)",
      previous: "$37,127.44",
      current: "$16,121.71",
      change: "-56.6%",
      businessMeaning:
        "GA4 Organic Search revenue fell sharply while Google traffic held. Not yet reconciled with the store's order report, so treat it as unexplained until checked.",
      status: "watch",
    },
    {
      metric: "Organic purchases (GA4)",
      previous: "164",
      current: "89",
      change: "-45.7%",
      businessMeaning: "Fewer organic orders, and a lower average order value ($181.14 vs $226.39).",
      status: "watch",
    },
    {
      metric: "Organic sessions (GA4)",
      previous: "8,763",
      current: "6,687",
      change: "-23.7%",
      businessMeaning:
        "GA4 counted far fewer organic sessions even though Google clicks were flat. In July, GA4 recorded more organic sessions than Google recorded clicks, which is part of what needs checking.",
      status: "watch",
    },
    {
      metric: "All-channel revenue (GA4, context)",
      previous: "$163,036.33",
      current: "$81,977.90",
      change: "-49.7%",
      businessMeaning:
        "Context, not organic: the whole store's GA4 revenue fell almost as much, which points to a site-wide cause.",
      status: "watch",
    },
    {
      metric: "Search impressions",
      previous: "260,536",
      current: "252,014",
      change: "-3.3%",
      businessMeaning: "A small dip in how often the site appeared, with no effect on clicks.",
      status: "neutral",
    },
    {
      metric: "Average position",
      previous: "8.21",
      current: "8.16",
      change: "0.05 better",
      businessMeaning: "Rankings were stable across the month.",
      status: "neutral",
    },
  ],

  kpiDisclosure:
    "Traffic figures come from the Google Search Console API for the URL-prefix property https://www.seatbeltplanet.com/, August 1-31 vs July 1-31, 2026 (both 31 days). Clicks and impressions are exact and equal the sum of the device rows. Clicks are split into three groups: brand searches Google shows (queries matching the pattern \"seat belt planet\" with or without spaces), other named searches Google shows, and searches Google does not show for privacy (81.3% of clicks in August, 81.7% in July), whose brand status is unknown. Revenue, purchases and sessions come from the GA4 Data API (property 261864581), Organic Search channel, and are GA4's own measurement. GA4 revenue has not been reconciled with the Web Shop Manager order report. All-channel GA4 revenue is shown as context only.",

  conversionPlan: {
    owner: "SEO Strategist + Account Manager",
    sourcePriority:
      "GA4 Organic Search is the current revenue source. Reconcile it against the Web Shop Manager order report for July and August, check the GA4 purchase tag for missing or duplicated orders, and list the largest July orders to see whether a few of them explain the gap.",
    nextReportExpectation:
      "The next report states whether GA4 organic revenue matches the store's own figures and shows September against a checked baseline.",
  },

  performanceCharts: {
    revenue: {
      title: "GA4 organic revenue fell 56.6% to $16,121.71",
      insight:
        "GA4 recorded fewer organic purchases at a lower average order value. Google traffic did not fall, so this is not a search visibility loss. It is unexplained until GA4 is checked against the store's order report.",
      channelContext:
        "Source: GA4 Data API, Organic Search channel, labeled GA4. Not yet reconciled with the Web Shop Manager order report. For context, GA4 all-channel revenue fell 49.7% ($163,036.33 to $81,977.90) and all-channel purchases fell 45.5%, so organic moved with the whole store. Organic's share of purchases held (22.5% vs 22.6%). The agency also runs Google Ads, Microsoft Ads and Meta Ads, and untagged paid visits can land in GA4's Organic Search channel.",
      series: [
        {
          change: "-56.6%",
          current: 16121.71,
          currentDisplay: "$16,121.71",
          label: "Organic revenue (GA4)",
          previous: 37127.44,
          previousDisplay: "$37,127.44",
          status: "watch",
        },
        {
          change: "-45.7%",
          current: 89,
          currentDisplay: "89",
          label: "Organic purchases (GA4)",
          previous: 164,
          previousDisplay: "164",
          status: "watch",
        },
        {
          change: "-20.0%",
          current: 181.14,
          currentDisplay: "$181.14",
          label: "Average order value (GA4)",
          previous: 226.39,
          previousDisplay: "$226.39",
          status: "watch",
        },
      ],
    },
    growth: {
      title: "Google traffic held steady",
      insight:
        "Clicks rose 0.5% to 6,872 while impressions eased 3.3%. Click-through rate improved to 2.73% from 2.63%. Both months had 31 days.",
      series: [
        {
          change: "+0.5%",
          current: 6872,
          currentDisplay: "6,872",
          label: "Organic clicks",
          previous: 6840,
          previousDisplay: "6,840",
          status: "positive",
        },
        {
          change: "-3.3%",
          current: 252014,
          currentDisplay: "252,014",
          label: "Search impressions",
          previous: 260536,
          previousDisplay: "260,536",
          status: "watch",
        },
      ],
    },
    nonbrand: {
      baseline: 6840,
      baselineDisplay: "6,840",
      contributions: [
        { display: "+26", label: "Brand searches", value: 26 },
        { display: "+2", label: "Other named searches", value: 2 },
        { display: "+4", label: "Searches Google does not show", value: 4 },
      ],
      insight:
        "Every search group held: brand +26, other named searches +2, and searches Google does not show +4. Google hides the search behind 81.3% of clicks, so their brand status is unknown, but they are usually rare, specific searches and most are likely non-brand.",
      title: "Brand, other named and hidden searches all held",
      total: 6872,
      totalDisplay: "6,872",
    },
    homepage: {
      title: "Where the gap opens: after the click",
      insight:
        "Google clicks were flat, but GA4 counted 23.7% fewer organic sessions and 45.7% fewer organic purchases. When search traffic holds and sessions and sales fall, the cause usually sits in tracking, conversion, or a few unusually large orders in the earlier month. Those are the checks now under way.",
      series: [
        {
          change: "+0.5%",
          current: 6872,
          currentDisplay: "6,872",
          label: "Google clicks (GSC)",
          previous: 6840,
          previousDisplay: "6,840",
          status: "positive",
        },
        {
          change: "-23.7%",
          current: 6687,
          currentDisplay: "6,687",
          label: "Organic sessions (GA4)",
          previous: 8763,
          previousDisplay: "8,763",
          status: "watch",
        },
        {
          change: "-45.7%",
          current: 89,
          currentDisplay: "89",
          label: "Organic purchases (GA4)",
          previous: 164,
          previousDisplay: "164",
          status: "watch",
        },
      ],
    },
    devices: {
      title: "Mobile grew slightly, desktop eased",
      insight:
        "Mobile clicks rose 1.4% to 4,664 and desktop eased 1.6% to 2,070. Mobile brings 67.9% of clicks. Tablet is small at 138 clicks.",
      series: [
        {
          change: "+1.4%",
          current: 4664,
          currentDisplay: "4,664",
          label: "Mobile",
          previous: 4598,
          previousDisplay: "4,598",
          status: "positive",
        },
        {
          change: "-1.6%",
          current: 2070,
          currentDisplay: "2,070",
          label: "Desktop",
          previous: 2103,
          previousDisplay: "2,103",
          status: "watch",
        },
        {
          change: "-0.7%",
          current: 138,
          currentDisplay: "138",
          label: "Tablet",
          previous: 139,
          previousDisplay: "139",
          status: "watch",
        },
      ],
    },
  },

  visualDirections: [],

  obstacles: [
    {
      obstacle:
        "GA4 organic revenue fell 56.6% while Google clicks were flat, and GA4 revenue has not been checked against the Web Shop Manager order report.",
      impact:
        "We cannot yet tell whether revenue really fell, whether tracking changed, or whether a few large July orders inflated the comparison. Decisions made on the GA4 figure alone could be wrong.",
      remediation:
        "Reconcile GA4 with the store's order report for July and August, audit the GA4 purchase tag and any tag or checkout changes in those months, and list the largest July orders.",
      eta: "Before the September report.",
    },
    {
      obstacle:
        "GA4 counted more organic sessions than Google recorded clicks in July (8,763 vs 6,840), but roughly matched them in August (6,687 vs 6,872).",
      impact:
        "The July session count may include traffic that is not Google organic, such as other search engines or untagged paid visits, which makes the month-over-month comparison unreliable.",
      remediation: "Break GA4 organic sessions down by source for both months and confirm paid campaigns are tagged.",
      eta: "With the revenue reconciliation.",
    },
    {
      obstacle: "Two Chevrolet truck category URLs stopped serving.",
      impact: "Shoppers and Google reach a dead page instead of the category, which loses those rankings and sales.",
      remediation: "Restore the categories or 301-redirect them to the closest live category, then request recrawl in Search Console.",
      eta: "Scheduled for September 24.",
    },
    {
      obstacle: "Search Console only has a URL-prefix property for https://www.seatbeltplanet.com/.",
      impact: "Traffic to non-www or http versions of the site is not counted, so the click totals may be slightly understated.",
      remediation: "Add a domain property for seatbeltplanet.com and report from it going forward.",
      eta: "Next report cycle.",
    },
  ],

  technicalItems: [
    {
      issue: "Two Chevrolet truck category URLs stopped serving.",
      why: "Dead category pages lose their rankings and send searchers to an error instead of products.",
      fix: "Restore or 301-redirect both URLs to the closest live category and confirm the recrawl in Search Console.",
      developerNote: "Tracked in ClickUp task 868m3m0m0, due September 24.",
    },
    {
      issue: "GA4 organic revenue has not been reconciled with the Web Shop Manager order report.",
      why: "Without a tie-out, a 56.6% revenue drop cannot be confirmed or explained.",
      fix: "Compare GA4 purchases and revenue with the store's order report for July and August and audit the purchase tag.",
      developerNote: "No ClickUp task yet. Raised in this report as the open problem.",
    },
    {
      issue: "Search Console reporting uses a URL-prefix property (https://www only).",
      why: "Non-www and http traffic is left out of the click totals.",
      fix: "Add and verify a seatbeltplanet.com domain property.",
      developerNote: "Needs a DNS verification record on the domain.",
    },
    {
      issue: "Schema markup was missing on part of the catalog.",
      why: "Pages without structured data are less eligible for rich results in Google.",
      fix: "Installed on five URLs in August. Continue with the remaining batches.",
      developerNote: "Installed under ClickUp task 868jfwd1z (July schema batch).",
    },
  ],

  dataNotes: [
    "Traffic source: Google Search Console API, URL-prefix property https://www.seatbeltplanet.com/. No domain property exists yet, so non-www and http traffic is not included. Platform is Web Shop Manager.",
    "Current period: August 1-31, 2026. Previous period: July 1-31, 2026. Both months have 31 days.",
    "Total clicks (6,872 vs 6,840) and impressions (252,014 vs 260,536) are exact and equal the sum of the device rows. CTR (2.73% vs 2.63%) and position (8.16 vs 8.21) are Search Console's averages.",
    "Brand method: brand is any query matching the regular expression (?i)(seat ?belt ?planet) in the Search Console API. Brand clicks were 242 vs 216 and other named searches 1,041 vs 1,039. A single non-brand figure (total minus brand, 6,630 vs 6,624) would count every hidden click as non-brand, so it is not shown as a fact in this report.",
    "Searches Google does not show: Google withholds rare, specific queries for privacy. They brought 5,589 of 6,872 clicks in August (81.3%) and 5,585 of 6,840 in July (81.7%). Their brand status is unknown. They are usually long, specific searches, so most are likely non-brand. Brand, other named and hidden clicks add up exactly to total clicks in both months.",
    "Revenue source: GA4 Data API, property 261864581, session default channel group = Organic Search. Organic revenue $16,121.71 on 89 purchases in August vs $37,127.44 on 164 in July. This is GA4's own measurement and has not been reconciled with the Web Shop Manager order report.",
    "All-channel GA4 context: revenue $81,977.90 vs $163,036.33 (-49.7%), purchases 396 vs 726 (-45.5%), sessions 30,766 vs 35,519 (-13.4%). Organic share of GA4 revenue was 19.7% vs 22.8%; organic share of purchases was 22.5% vs 22.6%.",
    "GA4 organic form leads (custom webbing, individual form and item inquiry events) were 20 vs 33. The counts are small, so they are shown here as context rather than as a trend.",
    "The agency runs Google Ads, Microsoft Ads and Meta Ads for this client. Paid visits without campaign tags can appear in GA4's Organic Search channel, and no GA4 tie-out against the store has been done yet.",
    "GA4 sessions and Search Console clicks measure different things and are not expected to match exactly. The July gap (8,763 sessions vs 6,840 clicks) is larger than August's and is one of the items being checked.",
    "Completed work comes from ClickUp tasks closed in August 2026. This is the first monthly report for Seat Belt Planet.",
  ],
};
