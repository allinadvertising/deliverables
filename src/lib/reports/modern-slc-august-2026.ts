import type { SeoStoryReportData } from "@/lib/reports/types";

// Modern SLC, August 2026 vs July 2026. Lead generation client (no online store).
// Raw figures: output/modern-slc-august-2026/data.json. Must pass scripts/validate_report.mts.
export const modernSlcAugust2026Report: SeoStoryReportData = {
  businessObjective:
    "Grow organic search visibility and patient inquiries for Modern SLC's injection and aesthetics services in the Salt Lake City and Holladay area, and make organic leads measurable so the program can be judged on bookings, not only traffic.",

  technicalLabels: {
    fix: "Next action",
    issue: "Issue",
    why: "Business risk",
  },

  visualSection: {
    eyebrow: "Performance",
    intro:
      "This is the first report in this format, so it also sets the baseline the next reports build on. Organic clicks fell in August, and the loss was spread across many pages rather than one broken page. Organic leads cannot be counted yet because the site's analytics records no booking or form events.",
    title: "Organic search performance, August vs July",
  },

  meta: {
    action:
      "Turn on lead measurement first: add booking and contact form key events to the GA4 property (held in the website vendor's account), or share a monthly booking export by source. In parallel, start the roadmap work delivered in August and review the service pages that lost the most clicks, starting with peptide therapy.",
    client: "Modern SLC",
    coverHeadline:
      "Organic clicks fell 10.8% to 1,054 in August, and the loss was spread across many pages. Organic leads are not measured yet, so turning on booking and form tracking is the first priority.",
    currentPeriod: "August 1-31, 2026",
    previousPeriod: "July 1-31, 2026",
    property: "modernslc.com",
    reportType: "Monthly Organic Search Performance Report",
    source: "Google Search Console (API) + Google Analytics 4 (API) + ClickUp delivery records",
  },

  executiveSummary:
    "Organic search brought 1,054 clicks in August, down 10.8% from 1,181 in July, on 4.8% fewer impressions. All three kinds of search lost clicks: searches for Modern SLC by name fell from 279 to 245 (-34), other named searches from 251 to 191 (-60), and searches Google does not show from 651 to 618 (-33). Those hidden searches are 58.6% of clicks, so their brand status is unknown. They are usually long, specific searches, so most are likely non-brand, but that cannot be confirmed. The loss was broad. The five pages that moved most account for 38 lost clicks net, led by the peptide therapy page (61 to 39 clicks as its average position slipped from 23.8 to 28.1), while the eyebrow waxing guide grew from 99 to 119. The other 89 lost clicks were spread across the rest of the site. GA4 agrees on direction, with organic sessions down 6.3% to 1,571. What we cannot report yet is leads: GA4 recorded zero key events in both months, so organic bookings and form submissions are not measured. August's work was mostly planning: the SEO roadmap and its developer review, two backlinks, and an on-page optimization batch that closed on August 28, too late to affect this month's numbers.",

  powerLines: [
    {
      area: "Traffic",
      statement:
        "Organic clicks fell 10.8% to 1,054. Brand searches lost 34, other named searches 60, and searches Google does not show 33. Hidden searches are 58.6% of clicks, so the full brand split is unknown.",
      status: "watch",
    },
    {
      area: "Leads",
      statement:
        "Organic leads are not yet measured. GA4 recorded zero key events in July and August, so bookings and form submissions cannot be tied to search.",
      status: "unavailable",
    },
    {
      area: "Rankings",
      statement:
        "Average position held steady (18.67 vs 18.84), but the peptide therapy page slipped from 23.8 to 28.1 and brand searches for \"modern slc\" moved from position 1.3 to 3.5.",
      status: "watch",
    },
    {
      area: "Delivery",
      statement:
        "The August SEO roadmap, its developer review and time estimates, two backlinks, and an on-page optimization batch were delivered.",
      status: "positive",
    },
  ],

  journeyWorkstreams: [
    {
      businessPriority: "Know where the organic traffic comes from and where it is slipping.",
      name: "Traffic baseline and diagnosis",
      started:
        "Organic clicks stood at 1,181 in July: 279 from searches naming Modern SLC, 251 from other named searches, and 651 (55.1%) from searches Google does not show.",
      work:
        "We compared August with July in Search Console by brand searches, other named searches and searches Google does not show, by device, and by page, and checked the direction against GA4 organic sessions.",
      result:
        "Clicks fell 10.8% to 1,054. Mobile carried most of the drop (881 to 770 clicks) while mobile impressions held flat, and no single page explains the loss: the five biggest movers net to 38 lost clicks and the rest of the site to 89.",
      next:
        "Track the same cuts next month so the roadmap work can be measured against this baseline.",
    },
    {
      businessPriority: "Count the patients organic search brings in, not only the visits.",
      name: "Lead measurement",
      started:
        "The GA4 property sits in the website vendor's account and has no key events configured, so it recorded zero leads from any channel in July and August.",
      work:
        "We confirmed the gap through the GA4 API: 1,571 organic sessions in August with no booking, call, or form events attached.",
      result:
        "Organic traffic is measurable; organic leads are not. Any claim about leads or revenue from search would be a guess, so this report makes none.",
      next:
        "Add booking and contact form key events in GA4, or share a monthly booking export by source, so the next report can count organic leads.",
    },
    {
      businessPriority: "Plan the work that recovers and grows non-brand demand.",
      name: "Roadmap and developer review",
      started: "The engagement needed a prioritized plan for the site's service pages and content.",
      work:
        "We consolidated the site data, built the August SEO roadmap, and had a developer review it and estimate the time for each item.",
      result:
        "The roadmap was delivered on August 24 with developer time estimates, ready to schedule.",
      next: "Schedule and ship the roadmap items, starting with the pages that lost the most clicks.",
    },
    {
      businessPriority: "Strengthen the pages that already earn impressions.",
      name: "On-page and authority work",
      started:
        "Service pages such as peptide therapy, Botox, and PRP sit on page two or three of Google on average, and informational guides earn many of the site's impressions.",
      work: "We completed an on-page optimization batch and placed two backlinks from the July allocation.",
      result:
        "The on-page batch closed on August 28, so its effect, if any, will show from September onward. August's numbers do not reflect it.",
      next: "Measure the optimized pages against this baseline in the September report.",
    },
  ],

  completedWork: [
    {
      completedOn: "August 17, 2026",
      evidence: "Closed August 17. Reviewed the roadmap items for build effort and estimated developer time (initial review closed August 11).",
      owner: "Developer",
      title: "Completed the developer review and time estimates",
    },
    {
      completedOn: "August 17, 2026",
      evidence: "Closed August 17. The two backlinks allocated to July.",
      owner: "Account Manager",
      title: "Placed two backlinks",
    },
    {
      completedOn: "August 24, 2026",
      evidence: "Closed August 24, after the data consolidation step closed August 12.",
      owner: "SEO Strategist",
      title: "Delivered the August SEO roadmap",
    },
    {
      completedOn: "August 28, 2026",
      evidence: "Closed August 28, under the September on-page batch.",
      owner: "SEO Specialist",
      title: "Completed an on-page optimization batch",
    },
  ],

  kpiRows: [
    {
      metric: "Organic clicks",
      previous: "1,181",
      current: "1,054",
      change: "-10.8%",
      businessMeaning: "Fewer visits from Google search. The loss was spread across many pages, not one.",
      status: "watch",
    },
    {
      metric: "Brand clicks (searches naming Modern SLC)",
      previous: "279",
      current: "245",
      change: "-12.2%",
      businessMeaning: "Searches for Modern SLC by name. Average position on these searches eased from 1.38 to 3.69.",
      status: "watch",
    },
    {
      metric: "Other named searches",
      previous: "251",
      current: "191",
      change: "-23.9%",
      businessMeaning:
        "Searches Google shows that do not match the brand name, such as Botox, lip filler and med spa searches. The largest of the three losses (60 of 127).",
      status: "watch",
    },
    {
      metric: "Searches Google does not show",
      previous: "651",
      current: "618",
      change: "-5.1%",
      businessMeaning:
        "Google withholds rare searches for privacy, so their brand status is unknown. They are 58.6% of clicks. They are usually long, specific searches, so most are likely non-brand.",
      status: "watch",
    },
    {
      metric: "Search impressions",
      previous: "141,451",
      current: "134,672",
      change: "-4.8%",
      businessMeaning: "The site was shown slightly less often, and clicked less often when shown (CTR 0.78% vs 0.83%).",
      status: "watch",
    },
    {
      metric: "Organic sessions (GA4)",
      previous: "1,677",
      current: "1,571",
      change: "-6.3%",
      businessMeaning: "Site analytics confirms the same direction as Search Console.",
      status: "watch",
    },
    {
      metric: "Organic leads",
      previous: "Not yet measured",
      current: "Not yet measured",
      change: "n/a",
      businessMeaning:
        "GA4 has no booking or form key events, so leads from search cannot be counted yet. This is the first measurement fix.",
      status: "neutral",
    },
  ],

  kpiDisclosure:
    "Traffic figures come from the Google Search Console URL-prefix property https://modernslc.com/ through the API, August 1-31 vs July 1-31, 2026 (both 31 days). Clicks and impressions are exact API totals and match the sum of the device rows. Clicks are split three ways: brand searches (queries matching \"modern slc\" or \"modernslc\"), other named searches (every other query Search Console lists), and searches Google does not show (total minus every listed query), whose brand status is unknown. Organic sessions come from the GA4 Data API (channel group Organic Search). GA4 recorded zero key events on every channel in both months, so organic leads are shown as not yet measured and no revenue is reported.",

  conversionPlan: {
    owner: "SEO Strategist + Account Manager",
    sourcePriority:
      "Add booking and contact form key events to the GA4 property held in the website vendor's account. If that is not possible, the client shares a monthly export from the booking system that shows how each patient found the practice.",
    nextReportExpectation:
      "Once tracking is live, the next report counts organic leads (bookings and form submissions) for the first time and uses that month as the lead baseline.",
  },

  performanceCharts: {
    growth: {
      title: "Clicks fell faster than visibility",
      insight:
        "Clicks fell 10.8% while impressions fell 4.8%, so the site was both shown less and clicked less when shown. Both months had 31 days.",
      series: [
        {
          change: "-10.8%",
          current: 1054,
          currentDisplay: "1,054",
          label: "Organic clicks",
          previous: 1181,
          previousDisplay: "1,181",
          status: "watch",
        },
        {
          change: "-4.8%",
          current: 134672,
          currentDisplay: "134,672",
          label: "Search impressions",
          previous: 141451,
          previousDisplay: "141,451",
          status: "watch",
        },
      ],
    },
    nonbrand: {
      baseline: 1181,
      baselineDisplay: "1,181",
      contributions: [
        { display: "-34", label: "Brand searches", value: -34 },
        { display: "-60", label: "Other named searches", value: -60 },
        { display: "-33", label: "Searches Google does not show", value: -33 },
      ],
      insight:
        "Other named searches lost the most, 60 of the 127 lost clicks. Brand searches lost 34, and brand average position eased from 1.38 to 3.69, most visibly on \"modern slc\" itself (1.3 to 3.5). Searches Google does not show lost 33; they are 58.6% of clicks and their brand status is unknown, though most are likely non-brand.",
      title: "All three kinds of search lost clicks",
      total: 1054,
      totalDisplay: "1,054",
    },
    homepage: {
      title: "The pages that moved most",
      insight:
        "The peptide therapy page, the RF microneedling guide, the PRP and PRF page, and the homepage lost 58 clicks between them. Peptide therapy led the loss, as its average position slipped from 23.8 to 28.1 on flat impressions. The eyebrow waxing guide, the site's top non-homepage page, grew by 20. Together the biggest movers explain only part of the drop; the other 89 lost clicks were spread thinly across the rest of the site.",
      series: [
        {
          change: "-36.1%",
          current: 39,
          currentDisplay: "39",
          label: "Peptide therapy page",
          previous: 61,
          previousDisplay: "61",
          status: "watch",
        },
        {
          change: "-43.8%",
          current: 18,
          currentDisplay: "18",
          label: "RF microneedling guide",
          previous: 32,
          previousDisplay: "32",
          status: "watch",
        },
        {
          change: "-50.0%",
          current: 10,
          currentDisplay: "10",
          label: "PRP and PRF page",
          previous: 20,
          previousDisplay: "20",
          status: "watch",
        },
        {
          change: "+20.2%",
          current: 119,
          currentDisplay: "119",
          label: "Eyebrow waxing guide",
          previous: 99,
          previousDisplay: "99",
          status: "positive",
        },
      ],
    },
    devices: {
      title: "Mobile carried the decline",
      insight:
        "Mobile clicks fell 12.6% (881 to 770) even though mobile impressions held flat, so mobile searchers saw the site as often but clicked less. Desktop fell 4.1%. Tablet is negligible (5 clicks).",
      series: [
        {
          change: "-12.6%",
          current: 770,
          currentDisplay: "770",
          label: "Mobile",
          previous: 881,
          previousDisplay: "881",
          status: "watch",
        },
        {
          change: "-4.1%",
          current: 279,
          currentDisplay: "279",
          label: "Desktop",
          previous: 291,
          previousDisplay: "291",
          status: "watch",
        },
      ],
    },
  },

  visualDirections: [],

  obstacles: [
    {
      obstacle:
        "GA4 records zero key events on every channel in July and August. The property sits in the website vendor's account.",
      impact:
        "Organic leads and bookings cannot be counted, so the program can only be judged on traffic, not on patients.",
      remediation:
        "Add booking and contact form key events in GA4, or have the client share a monthly booking export by source.",
      eta: "Requested now; first lead numbers in the report after tracking goes live.",
    },
    {
      obstacle:
        "Other named searches fell from 251 to 191 clicks and searches Google does not show from 651 to 618, and the loss is spread across many pages rather than one fixable issue.",
      impact: "Fewer new patients discovering the practice through treatment searches.",
      remediation:
        "Ship the August roadmap, and review the pages that lost the most clicks (peptide therapy, RF microneedling, PRP and PRF) for rankings and on-page fit.",
      eta: "Starting September; measured against this baseline.",
    },
    {
      obstacle:
        "Average position on brand searches eased from 1.38 to 3.69, including \"modern slc\" moving from 1.3 to 3.5.",
      impact: "People searching for the practice by name see other results above the website first.",
      remediation:
        "Check the live results for the brand terms to see what now ranks above the site, then decide on the fix.",
      eta: "Checked before the September report.",
    },
  ],

  technicalItems: [
    {
      issue: "No booking, call, or form key events are configured in GA4.",
      why: "Without them, organic leads cannot be counted and SEO cannot be tied to bookings.",
      fix: "Add booking and contact form key events in the vendor-held GA4 property, or use a monthly booking export by source.",
      developerNote: "Confirmed through the GA4 Data API: 0 key events on all channels in July and August.",
    },
    {
      issue:
        "The peptide therapy page lost 22 clicks (61 to 39) as its average position slipped from 23.8 to 28.1, with impressions flat.",
      why: "It is one of the site's highest-impression service pages (13,775 in August), so small ranking losses cost real visits.",
      fix: "Review the page against the pages now outranking it and fold the findings into the roadmap work.",
      developerNote: "From the Search Console pages report, August vs July.",
    },
    {
      issue:
        "Google Business Profile visits land on a tagged homepage URL, which Search Console reports as its own page (394 clicks in August, the site's largest single entry).",
      why: "The tag is useful for tracking, but homepage performance is split across two rows, and the tagged URL should point search engines to the clean homepage.",
      fix: "Confirm the tagged URL's canonical points to https://modernslc.com/ and read both rows together in future reports.",
      developerNote: "Verification item; no problem has been confirmed.",
    },
  ],

  dataNotes: [
    "Traffic source: Google Search Console URL-prefix property https://modernslc.com/, pulled through the Search Console API. The URL-prefix property does not include other host variants (for example www or http), if any receive traffic.",
    "Current period: August 1-31, 2026. Previous period: July 1-31, 2026. Both months have 31 days.",
    "Total clicks (1,054 vs 1,181) and impressions (134,672 vs 141,451) are exact API totals and equal the sum of the device rows. CTR (0.78% vs 0.83%) and average position (18.67 vs 18.84) are the API values.",
    "Brand method: brand = queries matching the regular expression (?i)(modern ?slc). Brand clicks 245 vs 279; other named searches 191 vs 251. Near-brand searches such as \"slc modern\" and \"modern aesthetics\" do not match the pattern and count as other named searches.",
    "Searches Google does not show: Google withholds rare queries for privacy and reports only their clicks. They were 618 of 1,054 clicks in August (58.6%) and 651 of 1,181 in July (55.1%). Their brand status is unknown, so this report does not state a brand or non-brand share of total clicks. They are usually long, specific searches, so most are likely non-brand. A simple total-minus-brand figure (809 vs 902) would count all of them as non-brand.",
    "Page movers: the five pages with the largest click change net to -38 clicks (peptide therapy -22, eyebrow waxing guide +20, RF microneedling guide -14, homepage -12, PRP and PRF page -10); all other pages net to -89.",
    "Google Business Profile links point to the homepage with tracking tags (utm_medium=organic). Search Console reports that URL separately (394 clicks in August vs 402 in July) from the plain homepage (165 vs 177). Because of the organic medium tag, GA4 may count those visits as Organic Search.",
    "GA4 source: property 444276499 (held in the website vendor's account), Data API, channel group Organic Search. Organic sessions 1,571 vs 1,677. All-channel sessions rose to 4,292 from 3,520, so organic's share of sessions fell to 36.6% from 47.6%; this report does not attribute the all-channel rise to any channel.",
    "GA4 recorded 0 key events, 0 purchases, and 0 revenue on every channel in both months. That means lead tracking is not set up, not that there were no leads. No lead or revenue figure is reported or estimated.",
    "The agency also runs Google Ads for Modern SLC. Search Console clicks are organic only, so paid clicks are not included in the traffic figures.",
    "This is the first report in this format; July is used as the comparison month. Completed work comes from ClickUp task closures in August 2026.",
  ],
};
