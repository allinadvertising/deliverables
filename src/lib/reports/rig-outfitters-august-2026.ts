import type { SeoStoryReportData } from "@/lib/reports/types";

// Rig Outfitters, August 2026 vs July 2026. First report for this client.
// Every figure comes from output/rig-outfitters-august-2026/data.json (GSC API, GA4 Data API, ClickUp).
export const rigOutfittersAugust2026Report: SeoStoryReportData = {
  businessObjective:
    "Grow sales from Google organic search for the Rig Outfitters online store, with FR workwear, coolers and drinkware as the main product lines people find through search.",

  technicalLabels: {
    fix: "Next action",
    issue: "Issue",
    why: "Business risk",
  },

  visualSection: {
    eyebrow: "Performance",
    intro:
      "This is the first monthly report for Rig Outfitters, so July is the comparison point and the next report starts the trend. Google clicks eased 8.4% while GA4 organic revenue fell 58.1%. The charts below separate what happened in search from what happened after the click.",
    title: "Clicks eased. GA4 organic revenue fell further. Here is where each drop sits",
  },

  meta: {
    action:
      "Reconcile GA4 organic revenue against the Ecwid order report for July and August and list the largest July orders, so we know whether the revenue drop is real or driven by a few big baskets. In parallel, publish the planned FR workwear and Stanley category content and finish consolidating the thin catalogue variants.",
    client: "Rig Outfitters",
    coverHeadline:
      "Google clicks eased 8.4% in August, to 836 from 913. GA4 organic revenue fell much further, 58.1% to $2,607.96, mostly because the average organic order shrank.",
    currentPeriod: "August 1-31, 2026",
    previousPeriod: "July 1-31, 2026",
    property: "https://www.rigoutfitters.com/",
    reportType: "Monthly Organic Search Performance Report",
    source: "Google Search Console API + GA4 Data API (Organic Search channel) + ClickUp delivery records",
  },

  executiveSummary:
    "Search traffic dipped modestly and GA4 organic revenue fell sharply, and the two drops have different causes. Google clicks fell 8.4% to 836. Brand searches lost 9 clicks, other named searches lost 22, and searches Google does not show lost 46; those hidden searches are 57.1% of clicks, so their brand status is unknown. The largest single loss was one summer product: the RTIC 3-Gallon Halftime Water Cooler page lost 35 clicks. New FR pearl snap shirt pages gained clicks. GA4 organic revenue fell 58.1% to $2,607.96 on 33 purchases (47 in July), and the average organic order fell to $79.03 from $132.29, so smaller baskets explain more of the drop than fewer orders. Organic accounts for $3,609.66 of the $3,736 all-channel GA4 revenue drop, so the revenue loss sits in organic orders rather than across the whole store. These are small order counts, so one month is not a trend, and GA4 has not yet been reconciled with the Ecwid order report. August's delivered work was schema markup on six URLs, a store heading audit, and on-page updates implemented on August 31, too late to show in these numbers.",

  powerLines: [
    {
      area: "Traffic",
      statement:
        "Google clicks fell 8.4% to 836. Brand searches lost 9, other named searches 22, and searches Google does not show 46. One cooler page accounts for 35 of the 77 lost clicks.",
      status: "watch",
    },
    {
      area: "Revenue (GA4)",
      statement:
        "GA4 organic revenue fell 58.1% to $2,607.96 on 33 purchases, with a smaller average order ($79.03 vs $132.29). Not yet reconciled with Ecwid orders.",
      status: "watch",
    },
    {
      area: "Rankings",
      statement:
        "Average position slipped to 11.73 from 10.82 and impressions fell 27.7%, but click-through rate rose to 1.65% from 1.31%, so the lost visibility was mostly low-click.",
      status: "watch",
    },
    {
      area: "Technical health",
      statement:
        "Schema markup went live on six URLs and the store heading templates were audited. The fix for the repeated Store H1 on catalog URLs still needs to be confirmed live.",
      status: "watch",
    },
  ],

  journeyWorkstreams: [
    {
      businessPriority: "Know whether organic revenue really fell before acting on it.",
      name: "Revenue measurement",
      started:
        "Organic revenue is read from GA4 (Organic Search channel), labeled GA4. It has never been checked against the Ecwid order report.",
      work:
        "We pulled July and August from GA4 and Search Console side by side and compared organic with all-channel results.",
      result:
        "GA4 organic revenue fell 58.1% while all-channel revenue fell 44.1%. Organic carried $3,609.66 of the $3,736 all-channel drop, and its share of GA4 revenue fell to 55.0% from 73.3%. Organic purchases fell 29.8%, but average order value fell 40.3%, so a few larger July orders may explain much of the gap.",
      next:
        "Reconcile GA4 with the Ecwid order report for both months and list the largest July organic orders.",
    },
    {
      businessPriority: "Make catalog pages eligible for rich results and clear to Google.",
      name: "Technical SEO",
      started:
        "Part of the catalog had no structured data, and the store heading templates repeated the same H1 across catalog URLs.",
      work:
        "Our developer wrote and installed schema markup on six URLs (manual and automated installs) and audited the store heading templates.",
      result:
        "Six more URLs carry structured data. The heading audit is done; the replacement of the repeated Store H1 is not yet confirmed live.",
      next: "Confirm the H1 fix on the catalog URLs and finish consolidating the thin catalogue variants.",
    },
    {
      businessPriority: "Grow product and category search from people who do not yet know the store by name.",
      name: "On-page and content",
      started:
        "Brand searches bring 187 of 836 clicks. Most of the rest, 57.1% of clicks, come from searches Google does not show, which are usually long, specific searches and so are likely mostly non-brand. FR workwear searches such as \"static fr shirts\" and \"fr pearl snap shirts\" are growing but still rank in the lower half of page one (positions 6.4 and 9.4).",
      work: "We wrote and implemented the August on-page updates, which went live on August 31.",
      result:
        "The updates went live on the last day of the month, so August's numbers do not reflect them yet. New FR pearl snap shirt pages gained 28 clicks on their own.",
      next: "Publish expanded content for the FR workwear and Stanley categories and measure September against this month.",
    },
    {
      businessPriority: "Read search performance correctly as seasonal demand shifts.",
      name: "Search visibility",
      started:
        "Summer products drove much of July's visibility: the RTIC 3-Gallon Halftime Water Cooler page had 10,915 impressions, more than the homepage.",
      work: "We tracked clicks, impressions, position and device mix month over month through the Search Console API.",
      result:
        "Impressions fell 27.7% to 50,541, led by the RTIC 3-Gallon Halftime Water Cooler page (5,749 vs 10,915 impressions). Brand clicks held at 187 vs 196. Mobile brings 76.6% of clicks.",
      next:
        "Separate organic clicks from Shopping clicks in reporting, and use this month as the baseline for roadmap work.",
    },
  ],

  completedWork: [
    {
      completedOn: "August 11, 2026",
      evidence:
        "Closed August 11. Reviewed the store heading templates. The follow-up is replacing the repeated Store H1 on catalog URLs.",
      owner: "Developer",
      title: "Audited the store heading templates",
    },
    {
      completedOn: "August 17, 2026",
      evidence:
        "Schema markup written and installed on six URLs: manual install closed August 11, schema write-up closed August 12, automated install closed August 17.",
      owner: "Developer",
      title: "Wrote and installed schema markup on six URLs",
    },
    {
      completedOn: "August 31, 2026",
      evidence:
        "On-page recommendations written by the SEO Specialist and implemented by the Head of SEO, both closed August 31.",
      owner: "SEO Specialist",
      title: "Delivered and implemented the August on-page updates",
    },
  ],

  kpiRows: [
    {
      metric: "Organic clicks (Google)",
      previous: "913",
      current: "836",
      change: "-8.4%",
      businessMeaning:
        "Google sent 77 fewer visits. About half of the loss is one summer cooler page, so this is a modest dip rather than a broad decline.",
      status: "watch",
    },
    {
      metric: "Brand search clicks",
      previous: "196",
      current: "187",
      change: "-4.6%",
      businessMeaning: "Searches for the store by name held nearly steady.",
      status: "neutral",
    },
    {
      metric: "Other named search clicks",
      previous: "194",
      current: "172",
      change: "-11.3%",
      businessMeaning: "Searches Google shows that do not name the store, such as product and FR workwear terms, lost 22 clicks.",
      status: "watch",
    },
    {
      metric: "Clicks from searches Google does not show",
      previous: "523",
      current: "477",
      change: "-8.8%",
      businessMeaning:
        "Rare searches Google withholds for privacy. They are 57.1% of clicks, so their brand status is unknown; they are usually long, specific searches, so most are likely non-brand.",
      status: "watch",
    },
    {
      metric: "Organic revenue (GA4)",
      previous: "$6,217.62",
      current: "$2,607.96",
      change: "-58.1%",
      businessMeaning:
        "GA4 Organic Search revenue fell far more than clicks did. Not yet reconciled with the Ecwid order report, and the order count is small, so treat it as one month, not a trend.",
      status: "watch",
    },
    {
      metric: "Organic purchases (GA4)",
      previous: "47",
      current: "33",
      change: "-29.8%",
      businessMeaning:
        "Fewer organic orders, but the bigger driver of the revenue drop is order size (next row).",
      status: "watch",
    },
    {
      metric: "Organic average order value (GA4)",
      previous: "$132.29",
      current: "$79.03",
      change: "-40.3%",
      businessMeaning:
        "The average organic basket shrank. With under 50 orders a month, a few large July orders can move this a lot.",
      status: "watch",
    },
    {
      metric: "Organic sessions (GA4)",
      previous: "1,196",
      current: "886",
      change: "-25.9%",
      businessMeaning:
        "GA4 counted fewer organic sessions. All-channel sessions fell by a similar 24.6%, so the session drop was site-wide.",
      status: "watch",
    },
    {
      metric: "All-channel revenue (GA4, context)",
      previous: "$8,480.71",
      current: "$4,744.71",
      change: "-44.1%",
      businessMeaning:
        "Context, not organic. Organic accounts for $3,609.66 of this $3,736 drop, so the revenue loss sits mostly in organic orders.",
      status: "watch",
    },
    {
      metric: "Search impressions",
      previous: "69,943",
      current: "50,541",
      change: "-27.7%",
      businessMeaning:
        "The site appeared less often, led by the RTIC water cooler page. Most of the lost impressions were low-click, since clicks fell far less.",
      status: "watch",
    },
    {
      metric: "Click-through rate",
      previous: "1.31%",
      current: "1.65%",
      change: "+0.34 pts",
      businessMeaning: "A larger share of searchers who saw the site clicked through.",
      status: "positive",
    },
    {
      metric: "Average position",
      previous: "10.82",
      current: "11.73",
      change: "0.91 worse",
      businessMeaning: "Rankings slipped slightly on average, still around the top of page two.",
      status: "watch",
    },
  ],

  kpiDisclosure:
    "Traffic figures come from the Google Search Console API for the URL-prefix property https://www.rigoutfitters.com/, August 1-31 vs July 1-31, 2026 (both 31 days). Clicks and impressions are exact and equal the sum of the device rows. Clicks are split into three groups: brand searches (queries matching \"rig outfitters\" or \"rigoutfitters\", with or without the space and final s), other named searches, and searches Google does not show. Google withholds rare queries for privacy, so the brand status of that last group (57.1% of clicks in August, 57.3% in July) is unknown. Revenue, purchases, average order value and sessions come from the GA4 Data API (property 406057805), Organic Search channel, and are GA4's own measurement. GA4 revenue has not been reconciled with the Ecwid order report. All-channel GA4 revenue is shown as context only.",

  conversionPlan: {
    owner: "SEO Strategist + Account Manager",
    sourcePriority:
      "GA4 Organic Search is the current revenue source, labeled GA4. Reconcile it against the Ecwid order report for July and August, list the largest July orders to see how much of the gap they explain, and confirm that the GA4 key event pagespersession_user (an engagement event) stays out of any conversion reporting.",
    nextReportExpectation:
      "The next report states whether GA4 organic revenue matches Ecwid's own figures and shows September against a checked baseline, with order concentration named.",
  },

  performanceCharts: {
    revenue: {
      title: "GA4 organic revenue fell 58.1% to $2,607.96",
      insight:
        "Organic purchases fell 29.8% but average order value fell 40.3%, so smaller baskets drove more of the drop than fewer orders. With 33 and 47 orders, a few large July orders could explain much of it. This is one month, not a trend.",
      channelContext:
        "Source: GA4 Data API, Organic Search channel, labeled GA4. Not yet reconciled with the Ecwid order report. For context, GA4 all-channel revenue fell 44.1% ($8,480.71 to $4,744.71), and organic accounts for $3,609.66 of that $3,736 drop. Organic's share of GA4 revenue fell to 55.0% from 73.3%, while its share of purchases held at 66.0% vs 64.4%. The agency does not run Google Ads for this client; untagged paid visits from other sources could still land in GA4's Organic Search channel.",
      series: [
        {
          change: "-58.1%",
          current: 2607.96,
          currentDisplay: "$2,607.96",
          label: "Organic revenue (GA4)",
          previous: 6217.62,
          previousDisplay: "$6,217.62",
          status: "watch",
        },
        {
          change: "-29.8%",
          current: 33,
          currentDisplay: "33",
          label: "Organic purchases (GA4)",
          previous: 47,
          previousDisplay: "47",
          status: "watch",
        },
        {
          change: "-40.3%",
          current: 79.03,
          currentDisplay: "$79.03",
          label: "Average order value (GA4)",
          previous: 132.29,
          previousDisplay: "$132.29",
          status: "watch",
        },
      ],
    },
    growth: {
      title: "Clicks eased, impressions fell further",
      insight:
        "Clicks fell 8.4% to 836 while impressions fell 27.7% to 50,541. Click-through rate improved to 1.65% from 1.31%, so most of the lost impressions were searches that rarely clicked. Both months had 31 days.",
      series: [
        {
          change: "-8.4%",
          current: 836,
          currentDisplay: "836",
          label: "Organic clicks",
          previous: 913,
          previousDisplay: "913",
          status: "watch",
        },
        {
          change: "-27.7%",
          current: 50541,
          currentDisplay: "50,541",
          label: "Search impressions",
          previous: 69943,
          previousDisplay: "69,943",
          status: "watch",
        },
      ],
    },
    nonbrand: {
      baseline: 913,
      baselineDisplay: "913",
      contributions: [
        { display: "-35", label: "RTIC 3-Gallon Halftime Water Cooler", value: -35 },
        { display: "-23", label: "Homepage", value: -23 },
        { display: "+20", label: "STATIC FR Pearl Snap Work Shirt (Alpha Red)", value: 20 },
        { display: "+12", label: "Stanley IceFlow Flip Straw 2.0 Bottle 50 oz", value: 12 },
        { display: "+8", label: "STATIC FR Western Pearl Snap Shirt (Navy)", value: 8 },
        { display: "-59", label: "All other pages", value: -59 },
      ],
      insight:
        "One summer product page, the RTIC 3-Gallon Halftime Water Cooler, lost 35 clicks (44 to 9). The homepage lost 23. Two new STATIC FR pearl snap shirt pages and the Stanley 50 oz bottle gained 40 clicks between them. The remaining 59 were spread thinly across other pages.",
      title: "Where the 77 lost clicks went, page by page",
      total: 836,
      totalDisplay: "836",
    },
    homepage: {
      title: "Search dipped a little, sessions and sales dipped more",
      insight:
        "Google clicks fell 8.4%, GA4 organic sessions fell 25.9%, and GA4 organic purchases fell 29.8%. In July GA4 counted more organic sessions (1,196) than Google clicks (913), and the two were close in August (886 vs 836), so part of the session drop may be non-Google organic traffic. That is one of the checks under way.",
      series: [
        {
          change: "-8.4%",
          current: 836,
          currentDisplay: "836",
          label: "Google clicks (GSC)",
          previous: 913,
          previousDisplay: "913",
          status: "watch",
        },
        {
          change: "-25.9%",
          current: 886,
          currentDisplay: "886",
          label: "Organic sessions (GA4)",
          previous: 1196,
          previousDisplay: "1,196",
          status: "watch",
        },
        {
          change: "-29.8%",
          current: 33,
          currentDisplay: "33",
          label: "Organic purchases (GA4)",
          previous: 47,
          previousDisplay: "47",
          status: "watch",
        },
      ],
    },
    devices: {
      title: "Mobile carries three quarters of clicks",
      insight:
        "Mobile clicks fell 7.0% to 640 and desktop fell 12.4% to 190. Mobile brings 76.6% of clicks. Tablet is negligible at 6 clicks.",
      series: [
        {
          change: "-7.0%",
          current: 640,
          currentDisplay: "640",
          label: "Mobile",
          previous: 688,
          previousDisplay: "688",
          status: "watch",
        },
        {
          change: "-12.4%",
          current: 190,
          currentDisplay: "190",
          label: "Desktop",
          previous: 217,
          previousDisplay: "217",
          status: "watch",
        },
        {
          change: "-25.0%",
          current: 6,
          currentDisplay: "6",
          label: "Tablet",
          previous: 8,
          previousDisplay: "8",
          status: "watch",
        },
      ],
    },
  },

  visualDirections: [],

  obstacles: [
    {
      obstacle:
        "GA4 organic revenue fell 58.1% and has not been checked against the Ecwid order report.",
      impact:
        "We cannot yet say whether revenue really fell by that much or whether a few large July orders inflated the comparison. With 33 and 47 orders, one or two big baskets can swing the month.",
      remediation:
        "Reconcile GA4 with the Ecwid order report for July and August and list the largest July organic orders with their share of revenue.",
      eta: "Before the September report.",
    },
    {
      obstacle: "GA4 lists pagespersession_user, an engagement event, as a key event.",
      impact:
        "It makes up most of GA4's organic key events (231 of 264 in August), so the key-event total overstates conversions if read as leads or sales.",
      remediation:
        "Report only purchases as conversions, and decide with the client whether pagespersession_user should stay marked as a key event in GA4.",
      eta: "Next report cycle.",
    },
    {
      obstacle: "Merchant Center needs a returns policy configured.",
      impact: "Missing return details can limit how products show in Google's free product listings.",
      remediation: "We are preparing a spec for your developer to configure the returns policy in Merchant Center.",
      eta: "Pending, needs your developer.",
    },
    {
      obstacle: "Search Console only has a URL-prefix property for https://www.rigoutfitters.com/.",
      impact: "Traffic to non-www or http versions of the site is not counted, so click totals may be slightly understated.",
      remediation: "Add a domain property for rigoutfitters.com and report from it going forward.",
      eta: "Next report cycle.",
    },
  ],

  technicalItems: [
    {
      issue: "GA4 organic revenue has not been reconciled with the Ecwid order report.",
      why: "Without a tie-out, a 58.1% revenue drop cannot be confirmed or sized correctly.",
      fix: "Compare GA4 organic purchases and revenue with Ecwid orders for July and August, and name the largest orders.",
      developerNote: "No ClickUp task yet. Raised in this report as the open problem.",
    },
    {
      issue: "The same Store H1 repeats across catalog URLs.",
      why: "Identical headings make catalog pages harder for Google to tell apart and rank for their own products.",
      fix: "Replace the repeated Store H1 with page-specific headings and confirm the change is live on the catalog URLs.",
      developerNote: "Heading template audit closed August 11 (ClickUp 868kkt4cv). The replacement is tracked in 868kkt4mw and still needs to be verified live.",
    },
    {
      issue: "Schema markup was missing on part of the catalog.",
      why: "Pages without structured data are less eligible for rich results in Google.",
      fix: "Installed on six URLs in August. Continue with the remaining catalog pages.",
      developerNote: "Written under ClickUp 868kq1zpm, installed under 868kq1zpt and 868kq1zpn.",
    },
    {
      issue: "Merchant Center returns policy is not configured.",
      why: "Incomplete merchant details can limit product visibility in Google's free listings.",
      fix: "Configure the returns policy in Merchant Center from the spec we provide.",
      developerNote: "Spec for the client developer tracked in ClickUp 868m2zp2c.",
    },
    {
      issue: "Search Console reporting uses a URL-prefix property (https://www only).",
      why: "Non-www and http traffic is left out of the click totals.",
      fix: "Add and verify a rigoutfitters.com domain property.",
      developerNote: "Needs a DNS verification record on the domain.",
    },
  ],

  dataNotes: [
    "Traffic source: Google Search Console API, URL-prefix property https://www.rigoutfitters.com/. No domain property is available yet, so non-www and http traffic is not included. The site runs WordPress with an Ecwid store.",
    "Current period: August 1-31, 2026. Previous period: July 1-31, 2026. Both months have 31 days. This is the first monthly report for Rig Outfitters, so July is a comparison point, not a prior report.",
    "Total clicks (836 vs 913) and impressions (50,541 vs 69,943) are exact and equal the sum of the device rows. CTR (1.65% vs 1.31%) and position (11.73 vs 10.82) are Search Console's averages.",
    "Brand method: brand is any query matching the regular expression (?i)(rig ?outfitters?|rigoutfitters) in the Search Console API. Brand search clicks were 187 vs 196 and other named search clicks 172 vs 194. Of the queries Google shows, 52.1% of clicks are brand.",
    "Hidden queries: Google withholds rare queries for privacy and reports their clicks only in the total. Searches Google does not show brought 477 clicks in August vs 523 in July, 57.1% of clicks in August and 57.3% in July. Their brand status is unknown, so this report does not state a brand vs non-brand share of all clicks. They are usually long, specific searches, so most are likely non-brand. The three groups add up exactly to total clicks in both months (913 to 836: brand -9, other named -22, not shown -46).",
    "Page movers: the waterfall uses the five pages with the largest absolute click change (all queries) and groups the rest as All other pages. It adds up exactly from 913 to 836.",
    "Revenue source: GA4 Data API, property 406057805, session default channel group = Organic Search. Organic revenue $2,607.96 on 33 purchases in August vs $6,217.62 on 47 in July; average order value $79.03 vs $132.29. This is GA4's own measurement and has not been reconciled with the Ecwid order report.",
    "Order concentration: organic purchases were 33 and 47. Order-level data was not pulled, so we cannot yet name how much of each month the largest orders carry. The swing is reported as one month, not a trend.",
    "All-channel GA4 context: revenue $4,744.71 vs $8,480.71 (-44.1%), purchases 50 vs 73 (-31.5%), sessions 1,720 vs 2,280 (-24.6%). Organic share of GA4 revenue was 55.0% vs 73.3%; organic share of purchases was 66.0% vs 64.4%.",
    "Conversions: GA4 organic key events were 264 vs 309, but 231 vs 262 of them are pagespersession_user, an engagement event, not a lead or sale. The only real conversion event is purchase (33 vs 47), so the key-event total is not reported as leads.",
    "The agency does not run Google Ads for this client. Paid visits without campaign tags from any source can still appear in GA4's Organic Search channel, and no GA4 tie-out against the store has been done yet.",
    "GA4 sessions and Search Console clicks measure different things and are not expected to match. GA4 organic also includes other search engines. The July gap (1,196 sessions vs 913 clicks) is larger than August's (886 vs 836).",
    "Completed work comes from ClickUp tasks closed in August 2026. Tasks closed in a bulk sweep without evidence of the work are not listed as delivered.",
  ],
};
