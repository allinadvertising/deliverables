import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

export const awrRestorationKickoffV2: KickoffV2Data = {
  printAriaLabel: "Print AWR Restoration kickoff V2 as PDF",
  footerNote: "AWR Restoration SEO Strategy Kickoff | September 2026",
  cover: {
    clientName: "AWR Restoration",
    subtitle: "Your organic search strategy for the next three months.",
  },
  meta: [
    { label: "Period", value: "September to November 2026" },
    {
      label: "Business objective",
      value: "Rebuild a findable organic foundation across the six service cities",
    },
    {
      label: "Roadmap",
      value: "Measurement, legacy cleanup, structure, city coverage, authority",
    },
    {
      label: "Platform",
      value: "WordPress with Elementor, Rank Math, Google Cloud and GoDaddy",
    },
  ],
  summary: {
    title: "What changes first",
    objectiveLabel: "Business objective",
    objective:
      "Give AWR Restoration a site Google can measure, crawl cleanly and place in the right cities, so Kent, Renton, Tukwila, Maple Valley, Covington and Maplewood each have real pages for the services the crews actually perform.",
    lead:
      "The roadmap does not describe a content problem. The source audit checked the live service and city pages and found unique titles, unique meta descriptions, single H1s and 600 to 1,200 words of real copy. What those pages sit on is the problem: nobody has access to this site's Search Console, 62 of the 113 URLs Google can reach either redirect or fail, the homepage title targets Seattle while its H1 targets Washington State, and four of the six service-area cities have no service pages at all.",
    emphasis:
      "Organic is not the channel that lost this account $300,000 and it is not the channel that recovers it inside a quarter. Local Service Ads, the Google Business Profile and paid search produce emergency restoration calls at speed, and All In Advertising already manages two of them. This plan rebuilds the foundation underneath them over two to three quarters, and it should be presented that way.",
  },
  strategy: {
    title: "3 Month Roadmap",
    gridClassName: "lg:grid-cols-3",
    operatingPrinciple:
      "Restore the measurement and clear the legacy debt before publishing anything new onto it.",
    phases: [
      {
        accent: "blue",
        month: "Month 1",
        theme: "Get the measurement back and clear the debt",
        objective:
          "Verify a Search Console property All In Advertising controls, brief the client on what organic can and cannot deliver, freeze a dated baseline, then map the 62 legacy paths to live destinations and deploy them in one pass alongside the homepage geography fix.",
        deliverable:
          "Search Console access, expectation-reset brief, frozen baseline, legacy redirect map and deployment, homepage title and H1 realignment",
        businessOutcome:
          "The account stops working blind, the client hears the honest timeline from us rather than from a report, and more than half of what Google encounters on the domain stops leading nowhere.",
      },
      {
        accent: "gold",
        month: "Month 2",
        theme: "Settle the structure and learn from the page that ranks",
        objective:
          "Choose one URL convention before any new page is built, find out why one of fifteen identically built Kent service pages ranks and the other fourteen do not, rename the Tukwila slugs to match, and link the surviving in-area blog posts into the service pages they support.",
        deliverable:
          "Taxonomy decision, ranking-template diagnostic, Tukwila slug rename, blog consolidation and internal linking",
        businessOutcome:
          "The site settles on one address pattern before it triples in size, and the city build starts from a documented template rather than from a guess.",
      },
      {
        accent: "blue",
        month: "Month 3",
        theme: "Build the missing cities and rebuild local authority",
        objective:
          "Build the Renton service set first and measure it before the three smaller cities follow, run the local citation consistency audit that has never been run, open the directory and industry listing programme, then resubmit the sitemap and re-run the three blocked audit modules against real data.",
        deliverable:
          "Renton service pages, city volume research, citation audit and first outreach tranche, sitemap resubmission and audit re-run",
        businessOutcome:
          "Four of six cities stop being invisible for the work AWR does there, and the account gets its first honest Search Console baseline to measure everything after this against.",
      },
    ],
  },
  focus: {
    title: "Six priorities for organic recovery",
    volumeLabel: "Evidence",
    scopeLabel: "Scope impact",
    footnote:
      "Evidence comes from the AWR Restoration consolidated SEO roadmap dated 25 August 2026, built from the Deep SEO Analysis and its child modules and the SEO Action Items workbook, with Ahrefs data captured 2026-08-18. No Search Console data exists for this property, so every statement about what is indexed is inference from a crawl until priority 01 closes.",
    items: [
      {
        number: "01",
        title: "Get Search Console access back under our control",
        businessObjective:
          "See what Google actually does with this site instead of inferring it from a third-party crawl.",
        evidence:
          "No authenticated account has access to the property. Three of the five audit modules say so themselves: the indexation module was rebuilt from crawl evidence, the performance module is marked blocked, and the blog cannibalization analysis could not run at all.",
        volume: "3 of 5 modules ran blind",
        scopeImpact:
          "Gates the disavow, the sitemap re-run and the recovery baseline",
        expectedImpact:
          "The account gets impressions, coverage buckets and query data, which is the difference between knowing a page is not indexed and guessing that it is not ranking.",
        recommendedAction:
          "Verify a fresh domain property through GoDaddy DNS rather than chasing whoever holds the old verification, at owner level rather than restricted, and pull the full 16 months of history immediately - the retention window is already consuming the record of when the decline happened.",
        status: "P0, Week 1 gate",
      },
      {
        number: "02",
        title: "Say plainly what organic can and cannot deliver",
        businessObjective:
          "Protect the account by putting the organic timeline next to the channels that answer the phone.",
        evidence:
          "Annual revenue is down roughly $300,000 and the client expects qualified calls within 7 days of LSA activation. Ahrefs reports Domain Rating 5, one ranking keyword - asbestos removal kent, worth about 20 searches a month - and roughly 5 organic visits.",
        volume: "1 keyword, about 5 visits a month",
        scopeImpact:
          "Client briefing and channel coordination before this roadmap is presented",
        expectedImpact:
          "The client knows which channel brings calls next month and which one we are building for next year, instead of judging the organic work against a target it was never scoped to hit.",
        recommendedAction:
          "Greg Swain briefs Dwayne Palmer with two timelines in one conversation: what LSA, the Google Business Profile and Ads can do in weeks, and what organic can do in two to three quarters. Give organic a modest first milestone - measurable impressions across the Kent service set - rather than a call-volume promise.",
        status: "P0, before the first report",
      },
      {
        number: "03",
        title: "Map the 62 legacy paths and deploy them once",
        businessObjective:
          "Stop more than half of what Google encounters on the domain from leading nowhere.",
        evidence:
          "Ahrefs crawled 113 URLs on 2026-08-18: 51 returned 200, 50 redirected, 11 returned 404 and one returned another 4xx. Fifty plus eleven plus one is 62, and 113 minus 51 is 62 - every non-200 URL sits outside the current sitemap of roughly 55 live URLs.",
        volume: "62 dead or redirecting paths",
        scopeImpact:
          "Redirect map, 301 deployment, internal link repointing, out-of-area blog redirects",
        expectedImpact:
          "Whatever signal the legacy paths still hold is recovered in a single hop, on a domain that has almost no authority to spare in the first place.",
        recommendedAction:
          "Map each of the 62 by hand to its closest live equivalent - a legacy Kent mold path to the Kent mold removal page, not to the homepage - checking each for referring domains first, and let a path return 410 where nothing equivalent exists. Fold the out-of-area blog redirects for Meredith, Orillia and Benson Hill into the same map so the site takes one redirect change rather than two.",
        status: "P0, Weeks 2 to 4",
      },
      {
        number: "04",
        title: "Point the homepage at the cities the crews serve",
        businessObjective:
          "Align the strongest page on the domain with the places AWR actually works.",
        evidence:
          "The homepage title targets Seattle, a competitive restoration market the business does not operate in. The H1 targets Washington State, which is not a local intent at all. Kent, where fifteen service pages exist and the one ranking keyword sits, appears in neither signal.",
        volume: "2 hours on the strongest page",
        scopeImpact:
          "Homepage title, H1, supporting copy and links into each city hub",
        expectedImpact:
          "The front page of the site says where the business works, which is the cheapest change to a primary ranking signal anywhere in this roadmap.",
        recommendedAction:
          "Lead with Kent as the single primary city and name the surrounding cities in supporting copy rather than stuffing them into the title, since a title listing six cities ranks for none of them. Keep the Seattle-metro phrasing in the body - it is honest context for the area, and only the title and H1 are miscast.",
        status: "P0, Week 1 on-page",
      },
      {
        number: "05",
        title: "Choose one URL convention, and find out why one page ranks",
        businessObjective:
          "Settle the two open questions that shape every page built after them.",
        evidence:
          "Three URL conventions coexist: 15 flat Kent service pages, 5 nested Tukwila pages that repeat the city and state inside the slug, and 6 bare city hubs. Separately, those 15 Kent pages were built the same way and exactly one of them ranks, carrying the domain's entire organic traffic.",
        volume: "3 conventions, 1 ranking page",
        scopeImpact:
          "Taxonomy decision, Tukwila slug rename, ranking-template diagnostic",
        expectedImpact:
          "A five-page inconsistency does not become a twenty-five page one, and 28 hours of city building starts from a documented template instead of a guess.",
        recommendedAction:
          "Recommend standardising on the existing flat convention and applying it forward, because the Kent pages hold the only ranking on the domain and 62 redirects are already being redeployed. Then compare the asbestos removal Kent page against three Kent siblings on internal links, schema, word count, page age, referring domains and SERP competition - and record the answer either way.",
        status: "P1, Month 2 decision",
      },
      {
        number: "06",
        title: "Build the missing cities and the local citation base",
        businessObjective:
          "Give four cities pages for the services people search for there, and get the business listed where restoration customers and insurers look.",
        evidence:
          "Renton, Maple Valley, Covington and Maplewood carry only bare city hubs and no service pages - twenty service-city pages exist of roughly ninety possible, about 22 per cent coverage. On authority, 604 to 613 referring domains produce Domain Rating 5, only 135 are followed, and just three are doing real work: bbb.org, homeadvisor.com and expertise.com.",
        volume: "4 of 6 cities at zero pages",
        scopeImpact:
          "Renton first, then three smaller cities, plus the citation consistency audit",
        expectedImpact:
          "The site proves whether new city pages can rank on this domain before another sixteen hours follows them, and the authority work runs on the material local restoration businesses actually earn.",
        recommendedAction:
          "Build the Renton set first against the chosen convention, starting with the four highest-intent services, and measure it before Maple Valley, Covington and Maplewood follow. Research the search volume in those three before building - the honest answer may be two services each. Do not clone the Kent copy with the city name swapped. Start the authority work with the citation consistency audit across all six cities, then contractor licensing, IICRC and chamber listings, and adjuster referral networks.",
        status: "P1, Month 3 build",
      },
    ],
  },
  execution: {
    title: "What changes, who decides, and how we prove it",
    artifactsTitle: "Evidence, action, impact, and specialists",
    examples: [
      {
        eyebrow: "Homepage geography",
        title: "Realign the strongest page to the actual service area",
        currentLabel: "Current signal",
        current: [
          "The title targets Seattle, a market the business does not serve",
          "The H1 targets Washington State, which is not a local intent",
        ],
        targetLabel: "Target signal",
        target: [
          "One clear primary city, led by Kent where the pages and the ranking already are",
          "Surrounding cities named in supporting copy, with homepage links reaching each city hub",
        ],
        decision:
          "Confirm Kent as the primary city before the title and H1 are rewritten.",
        impact:
          "The homepage stops arguing for a market AWR does not operate in, for two hours of work.",
        proof:
          "Re-check the rendered title and H1 after the edit - the H1 may be an Elementor widget rather than a theme field.",
      },
      {
        eyebrow: "Legacy crawl graph",
        title: "Turn 62 dead addresses into one deployed decision",
        currentLabel: "Current pattern",
        current: [
          "62 of 113 crawled URLs redirect or fail, all of them outside the sitemap",
          "Internal links still point at paths that resolve through a redirect",
        ],
        targetLabel: "Target pattern",
        target: [
          "Each legacy path 301s in a single hop to its closest live equivalent",
          "Internal links repointed, and a re-crawl confirming the redirect share fell",
        ],
        decision:
          "Approve a destination for each of the 62 before anything is deployed, including which paths should return 410.",
        impact:
          "Nothing currently published is broken, so this is recovery of legacy signal rather than repair of live pages.",
        proof:
          "Re-crawl after deployment and confirm the redirect share fell rather than assuming it did, then resubmit the sitemap once - not between tranches.",
      },
    ],
    artifacts: [
      {
        phase: "Month 1",
        specialists: "Account team and AIA SEO",
        title: "Search Console property and frozen baseline",
        evidence:
          "No authenticated account has access, and no baseline exists. The figures available today are Domain Rating 5, one ranking keyword, roughly 5 monthly visits, 113 crawled URLs at 51 live, and 135 followed referring domains.",
        recommendedAction:
          "Verify a fresh domain property via GoDaddy DNS, pull the full history, and date the Ahrefs figures as the pre-work baseline before any redirect deploys.",
        expectedImpact:
          "Four other items become answerable, and the changes landing inside one window stop being a single unattributable movement.",
      },
      {
        phase: "Month 1",
        specialists: "Account manager and AIA SEO",
        title: "Expectation reset and channel coordination review",
        evidence:
          "Three channels are managed for this client and only organic is audited here. The client expects qualified calls within 7 days of LSA activation; organic delivers about 5 visits a month.",
        recommendedAction:
          "Sit the organic roadmap alongside the LSA and Ads plans in one internal review, then brief the client on both timelines before this deck is presented.",
        expectedImpact:
          "The overlapping work gets done once rather than three times, and the organic plan is judged on what it was scoped to do.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO and AIA developer",
        title: "Legacy path map and redirect deployment",
        evidence:
          "62 non-200 URLs sit outside a healthy sitemap of roughly 55 live URLs. Rank Math's redirection module already holds rules from a partially completed cleanup.",
        recommendedAction:
          "Read the existing Rank Math rules before writing the map so a duplicate rule does not create the chain this work is meant to remove, then deploy as one-to-one 301s and repoint the internal links.",
        expectedImpact:
          "The crawl graph stops sending Google in circles, and legacy citations are recovered rather than dropped.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO and account manager",
        title: "Taxonomy decision and ranking-template diagnostic",
        evidence:
          "Three URL conventions coexist across 20 service-city pages, and one of 15 identically built Kent pages ranks with no documented explanation.",
        recommendedAction:
          "Record the convention decision with the migration risk named, and compare the ranking page against its siblings without touching it - it is the only ranking asset on the domain.",
        expectedImpact:
          "Either a repeatable page-level advantage to apply across fourteen existing pages, or a plain statement that the SERP is simply weak.",
      },
      {
        phase: "Month 2",
        specialists: "Content and AIA SEO",
        title: "Blog hygiene and one-post-one-target linking",
        evidence:
          "Roughly 18 blog URLs include posts targeting Meredith in New Hampshire and Orillia in Ontario. The Renton flood damage post is currently the only content on the site targeting Renton at all.",
        recommendedAction:
          "Redirect the out-of-area posts inside the same map, refresh the in-area posts to read as local, and link each to the single service page it supports.",
        expectedImpact:
          "The blog stops claiming markets AWR cannot drive to, and the monthly content workstream already being paid for starts feeding the pages that book work.",
      },
      {
        phase: "Month 3",
        specialists: "Content, AIA SEO and account team",
        title: "Renton service set, citation audit and audit re-run",
        evidence:
          "Four of six cities have no service pages. Local citation consistency has never been audited, and on a local services account it affects rankings more directly than the backlink profile does.",
        recommendedAction:
          "Ship Renton and measure it before the three smaller cities follow, audit name, address and phone consistency across all six cities as the first hour of the authority work, then resubmit the sitemap and re-run the three blocked modules against real data.",
        expectedImpact:
          "The first genuine Search Console baseline this account has ever had, against a site that is finally findable in the cities it serves.",
      },
    ],
  },
  approval: {
    title: "Decisions and specialists before launch",
    gates: [
      {
        timing: "Week 1",
        label: "Access",
        title: "Search Console verification through GoDaddy DNS",
        detail:
          "Site access is not a constraint on this account - schema, content, metadata and internal link work already ship. The missing access is Search Console specifically, and the DNS route does not depend on the previous provider's cooperation.",
      },
      {
        timing: "Before presentation",
        label: "Positioning",
        title: "Review the organic plan next to LSA and Ads",
        detail:
          "Presenting an organic roadmap to a client in financial distress without the channels that produce calls beside it is how the organic work gets blamed for a gap it was never scoped to fill.",
      },
      {
        timing: "Before redirects",
        label: "Mapping",
        title: "Approve every destination, including the 410s",
        detail:
          "Deciding where a legacy path belongs is an editorial judgement about which service and which city. Handing a developer a raw export of 62 URLs makes it a guess.",
      },
      {
        timing: "Before any new URL",
        label: "Structure",
        title: "Lock the URL convention for all six cities",
        detail:
          "The recommendation is the conservative one - standardise on the existing flat pattern and apply it forward - because the Kent pages hold the only ranking on the domain and a second migration is a real risk.",
      },
      {
        timing: "Month 3 close",
        label: "Validation",
        title: "Resubmit once, then re-run the three blocked modules",
        detail:
          "Resubmit after the redirects, blog changes and slug renames have all deployed, not between them, and record the result as the recovery baseline rather than comparing it to the crawl-derived figures.",
      },
    ],
    decisions: [
      {
        label: "Report impressions before clicks for the first two quarters",
        detail:
          "On a domain at Domain Rating 5 the early signals are small: impressions before clicks, indexed pages before rankings. Track ranking keyword count, crawl status distribution, followed referring domains and indexed service-city pages - not total referring domains, which means nothing on this profile.",
      },
      {
        label: "Do not cut the content and schema workstream",
        detail:
          "The instinct under this much financial pressure will be to cut it. The live pages carry unique titles, unique meta descriptions, single H1s and 600 to 1,200 words of real copy - the on-page work is the one thing already functioning.",
      },
      {
        label: "Keep the disavow narrow, and ship Renton first",
        detail:
          "Disavow only the spam-flagged referring domain and the SEOExpress.org anchor cluster; a broad disavow would remove the directory citations this business depends on. And build Renton before the three smaller cities, so we learn whether new pages rank here before another sixteen hours follows them.",
      },
    ],
  },
};
