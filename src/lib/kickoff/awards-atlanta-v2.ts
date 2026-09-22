import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

export const awardsAtlantaKickoffV2: KickoffV2Data = {
  printAriaLabel: "Print Awards Atlanta kickoff V2 as PDF",
  footerNote: "Awards Atlanta SEO Strategy Kickoff | September 2026",
  cover: {
    clientName: "Awards Atlanta",
    subtitle: "Your organic search strategy for the next three months.",
  },
  meta: [
    { label: "Period", value: "September to November 2026" },
    {
      label: "Business objective",
      value:
        "Sell more plaques, then acrylic. Bring direct web orders back from 2 to 3 a week toward 5 to 10.",
    },
    {
      label: "Roadmap",
      value:
        "Site access, crawl control, URL consolidation, plaque and acrylic pages, corporate pages, Merchant Center",
    },
    {
      label: "Platform",
      value:
        "Custom PHP catalogue on a database shared with four other sites. Deployed by your developer, Todd.",
    },
  ],
  summary: {
    title: "What changes first",
    objectiveLabel: "Business objective",
    objective:
      "Remove the pages that cannot sell from Google, give every page that can sell one address and its own title, and put plaques and acrylic in front of buyers already searching for them.",
    lead:
      "The decline is not a demand problem. Nearly half of your non-brand visibility is a Coca-Cola employee store that cannot sell to the public. 68 category URLs exist twice because of letter case. All 116 subcategory pages carry the homepage title with no copy. The plaque and acrylic pages that carry the margin have no text at all. Month one is a robots file, a rewrite rule, a template edit and three category descriptions.",
    emphasis:
      "The numbers look worse than they are. Ahrefs shows keywords collapsing from 1,000 to 27; Search Console shows 380 to 430 pages earning impressions every month, so Ahrefs is a tracking artefact and we do not report from it. The Search Console property is five months old, so there is no year-over-year yet. With Coca-Cola and sports removed, the real baseline is about 27,680 impressions and 257 clicks. Two things govern the plan: nothing ships until we can log in and the shared-database safeguards are written, and plaques come first because you said so and the data agrees, a 105-dollar sale against six dollars in cost.",
  },
  strategy: {
    title: "3 Month Roadmap",
    gridClassName: "lg:grid-cols-3",
    operatingPrinciple:
      "Open the door first, ship the containment fixes in one deploy, retitle what already ranks before writing anything new, and report on orders and a baseline you can check yourself.",
    phases: [
      {
        accent: "blue",
        month: "Month 1",
        theme: "Open the door and contain the site",
        objective:
          "Get credentials from Todd and write the safeguards agreement. Then one deploy window: robots and noindex for Coca-Cola, cart and vendor hosts; 301s for the 68 case-variant pairs with canonicals; a subcategory template that serves its own title and links. Retitle the plaque hub and acrylic page, write three category descriptions, complete Merchant Center setup, and agree the baseline.",
        deliverable:
          "Access and safeguards, deploy checklist, robots and noindex live, 68 pairs redirected, template fixed, plaque and acrylic retitles, three descriptions, Merchant Center verified, baseline agreed",
        businessOutcome:
          "Google stops counting the Coca-Cola store and the wholesale mirrors as your site, and every plaque and acrylic page holds its whole signal on one address.",
      },
      {
        accent: "gold",
        month: "Month 2",
        theme: "Build the missing pages and open Shopping",
        objective:
          "Create four corporate intent pages: corporate awards, employee recognition, service awards, retirement awards. Submit the first Merchant Center feed from plaque and acrylic products on clean URLs. Rescue the four product pages that earn the only non-brand clicks, add local schema to the homepage, consolidate the blog, and fix the soft-404 route.",
        deliverable:
          "Four corporate pages live, first feed submitted, four product pages retitled, homepage local schema, blog consolidated, soft 404s fixed, not-indexed buckets classified",
        businessOutcome:
          "Corporate buyers find a page built for them instead of a competitor, and your plaques and acrylic awards appear in free Shopping listings.",
      },
      {
        accent: "blue",
        month: "Month 3",
        theme: "Refresh what ranks and decide the big change",
        objective:
          "Refresh the two blog guides Google already rewards so they link to order pages. Decide the backlink question with your sign-off. Take the 530-product URL rewrite to the Developer Review as a decision, and if clean, ship 33 products as a test tranche. Expand the feed and validate the quarter on the same windows we started with.",
        deliverable:
          "Two guides refreshed, backlink decision, product URL rewrite scoped or tested, feed expanded, quarter validated",
        businessOutcome:
          "The riskiest change on the account is made in a measured batch or not at all, and you see the same numbers moving month over month.",
      },
    ],
  },
  focus: {
    title: "Six priorities for revenue recovery",
    volumeLabel: "Evidence",
    scopeLabel: "Scope impact",
    footnote:
      "Evidence from the consolidated SEO roadmap of 2 September 2026, the Deep SEO Analysis and its eight child audits, the full-site keyword research, and the intake interview of 25 August. Search Console governs traffic and indexation, Ahrefs governs volumes and links, and live SERP checks govern what is winnable. Still open: the Developer Review (credentials failed 25 August), the Search Console bucket exports, the Merchant Center product screens, and the fs-awards.com subdomain list.",
    items: [
      {
        number: "01",
        title: "Open the door before anything is scheduled",
        businessObjective:
          "Establish who can change your site, how it is protected, and which SearchAtlas changes will survive cancelling it.",
        evidence:
          "CMS credentials failed on 25 August and the Developer Review is waiting on client. The SearchAtlas loader rewrites titles in the browser on every page, so today's titles may be an overlay. The database is shared with signatureclassics.com, about 15 fs-awards.com sites, SA Awards and SA Badges, so a template edit can reach sites we have never seen.",
        volume: "Gates five of the eight P0 items",
        scopeImpact: "Every technical change in the plan",
        expectedImpact:
          "This is the delivery constraint for the whole engagement. Every fix routes through Todd on a codebase we have not seen.",
        recommendedAction:
          "Get credentials through Todd, not you. Write a one-page agreement: which hosts share the database, who deploys, backup before each deploy, who checks. Compare source and rendered titles on ten pages so you know which SearchAtlas changes are permanent. Nothing is scheduled until this is done.",
        status: "P0 · Kickoff · do first",
      },
      {
        number: "02",
        title: "Take the pages that cannot sell out of Google",
        businessObjective:
          "Stop nearly half of your visibility being content you cannot monetise.",
        evidence:
          "No robots.txt, a five-URL sitemap from 2006, no noindex anywhere. The Coca-Cola store, cart, account pages, raw images, the wholesale mirror and about 15 fs-awards.com subdomains are all indexed. Coca-Cola queries are 47 per cent of non-brand impressions; the crystal bottle alone draws 29,000 impressions nobody can buy from.",
        volume: "47 per cent of non-brand impressions",
        scopeImpact: "One robots file, one noindex tag on 13 templates, sitewide noindex on the vendor hosts",
        expectedImpact:
          "The only Awards Atlanta pages in search become the ones a customer can buy from, and reported numbers stop being inflated by pages that never produce an order.",
        recommendedAction:
          "We write the robots file and a checklist naming every URL pattern and tag; Todd deploys. Coca-Cola pages are already indexed, so they get noindex first and a disallow only once they drop out. Sitewide noindex on signatureclassics.com and every fs-awards.com store. Do not touch category or product pages. Verify per host at 14 days.",
        status: "P0 · Month 1 · one deploy window with 03",
      },
      {
        number: "03",
        title: "One address and one title per page",
        businessObjective:
          "Stop every plaque, acrylic and badge page splitting its ranking across two addresses, and give 116 pages a name of their own.",
        evidence:
          "68 URL pairs differ only by letter case with no canonical on any page: /category/Badges earns 1,181 impressions against /category/badges at 619 in the same window. All 116 subcategory pages serve the homepage title, no H1, no copy, and their only links sit in a JavaScript array. Search Console reports 218 pages crawled but not indexed.",
        volume: "68 duplicate pairs, 116 pages on one title",
        scopeImpact: "One rewrite rule, one canonical line, one template",
        expectedImpact:
          "The change that touches the most pages for the fewest hours. Every retitle in the plan depends on the template being able to carry a title of its own.",
        recommendedAction:
          "301 every mixed-case slug to lowercase, plus index.php, http and duplicate builds to their real pages. Add a self-referencing canonical to every template. Change the subcategory template to emit its own title, H1, a description slot and plain HTML links. Redirect first, rename never. Confirm the template does not also drive the vendor sites. Re-crawl for 116 unique titles.",
        status: "P0 · Month 1 · same deploy window as 02",
      },
      {
        number: "04",
        title: "Plaques first, and the acrylic page already on page one",
        businessObjective:
          "Make your stated priority concrete on pages you already own, starting with the cheapest gain on the account.",
        evidence:
          "Plaques: 51,180 searches a month. The head terms are difficulty 52 to 56, but custom plaques (2,600), wood plaque (1,400), custom plaque (1,300) and retirement plaque (1,300) are difficulty 1 to 6. The hub earns 14 clicks and its 11 children earn zero. Acrylic awards, 1,800 a month: you already sit at position 8.5 on a SERP where a Domain Rating 2 site holds position 6.",
        volume: "51,180 plaque searches, acrylic at position 8.5",
        scopeImpact: "Plaque hub, wood plaques, acrylic awards, three descriptions",
        expectedImpact:
          "Authority is not the blocker. A page already in the top ten does not need links, it needs a title that says what it sells.",
        recommendedAction:
          "Retitle the plaque hub to lead with Award Plaques and link its children in visible HTML. Give wood plaques its own title. Promote acrylic awards as the canonical acrylic page and retitle it. Write three 200 to 300 word descriptions. No new plaque URLs, no second acrylic page, and never the word trophies in a heading.",
        status: "P0 · Month 1 · after the template fix",
      },
      {
        number: "05",
        title: "Build the corporate pages every competitor has",
        businessObjective:
          "Give the buyer who searches by occasion a page built for them. Today that buyer lands on a competitor.",
        evidence:
          "Corporate awards 1,800 a month, employee recognition 1,000, service awards 700, retirement awards 150 at difficulty 0. The cluster is 32,760 searches with zero in the top ten. Every top result is a dedicated corporate page: Edco, FineAwards, K2, Crown. On your site, corporate is a three-product subcategory under Trophies and retirement appears nowhere.",
        volume: "32,760 searches a month, none in the top ten",
        scopeImpact: "Four new categories, four pieces of copy",
        expectedImpact:
          "Your second target market, 25-employee firms giving 10 to 15 awards at year end, searches exactly these terms. You can create a category in minutes.",
        recommendedAction:
          "Four pages: corporate awards as parent, employee recognition, service awards, retirement awards. Each merchandises existing products by occasion, links to the plaque and acrylic hubs, and carries a bulk-quote path. We supply names, slugs and copy; you create the categories; Todd places the copy.",
        status: "P1 · Month 2 · after access and the template fix",
      },
      {
        number: "06",
        title: "Stand up Merchant Center, plaques first",
        businessObjective:
          "Start the Shopping service you purchased on a feed that gets approved.",
        evidence:
          "Merchant Center shows zero of five setup tasks complete, no products, no feed. 530 of the 777 URLs Google sees are product.php pages with no canonical and two return 403. Product pages convert impressions at 2.09 per cent against 0.46 for categories, so this is where buyers click.",
        volume: "0 of 5 setup tasks, no feed",
        scopeImpact: "Verification now, a plaque and acrylic feed on clean URLs in month two",
        expectedImpact:
          "Shopping is the channel most likely to produce the first countable orders for a business that judges on transactions.",
        recommendedAction:
          "Complete verification, business address, policy pages and the GA4 link now. In month two, build the first feed from plaque and acrylic products only, on lowercase URLs, with titles from the keyword research, not SKU names. Do not submit the full 4,000-product catalogue until the first tranche is approved.",
        status: "P1 · Month 1 setup, Month 2 feed",
      },
    ],
  },
  execution: {
    title: "What changes, who decides, and how we prove it",
    artifactsTitle: "Evidence, action, impact, and specialists",
    examples: [
      {
        eyebrow: "The measurement framing",
        title: "The tools say collapse. The source of truth says half the visibility is unsellable.",
        currentLabel: "How the numbers read at first glance",
        current: [
          "Ahrefs keywords down from about 1,000 to 27",
          "Three-month impressions down 11.6 per cent",
          "Sales record: 87 page-one keywords, 590 searches for same day awards",
        ],
        targetLabel: "What the numbers actually say",
        target: [
          "Search Console shows 380 to 430 pages earning impressions every month; Ahrefs is not used",
          "The property is five months old: 1,668 clicks is the whole history, no year-over-year yet",
          "Without Coca-Cola and sports the baseline is 27,680 impressions and 257 clicks; the sales figures are unsupported and dropped",
        ],
        decision:
          "Agree the baseline before the first report: Search Console totals with Coca-Cola and sports removed, orders and calls leading, no ranking chart as the headline.",
        impact:
          "You verify every number yourself. A first report you can contradict costs the account before the first fix ships.",
        proof: "The property-level Search Console pull of 2 September.",
      },
      {
        eyebrow: "The authority read",
        title: "Missing pages are the blocker, not links",
        currentLabel: "What the audit recommended",
        current: [
          "A link-quality crisis and a disavow in weeks one to two",
          "Build citations and industry links to close a keyword gap",
        ],
        targetLabel: "What the SERP checks found",
        target: [
          "The largest spam anchor, 227 links, is entirely nofollow",
          "A Domain Rating 2 site holds position 6 on acrylic awards; K2 at Domain Rating 30 holds position 3 on corporate awards, against your 28",
        ],
        decision:
          "No link building and no month-one disavow. Export the profile in month three and decide with your sign-off.",
        impact:
          "A disavow is irreversible and would not change what the site ranks for. The effort goes to the pages instead.",
        proof: "Ahrefs anchors capture and live SERP checks, 1 and 2 September.",
      },
    ],
    artifacts: [
      {
        phase: "Month 1",
        specialists: "Account manager, AIA developer and AIA SEO with Todd",
        title: "Access, safeguards and the SearchAtlas answer",
        evidence:
          "Credentials failed on 25 August. SearchAtlas rewrites titles in the browser. The database serves four other sites. Pulse tracking is written but not installed.",
        recommendedAction:
          "Credentials through Todd with a checklist. One-page safeguards agreement. Source-versus-rendered title check on ten pages. Pulse installed with your approval so orders and calls are attributed from month one.",
        expectedImpact:
          "You know who can change your site and how it is protected before the first deploy.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO and AIA developer with Todd",
        title: "The containment deploy",
        evidence:
          "No robots, a 2006 sitemap, vendor hosts indexed, 68 case-variant pairs with no canonical, 116 subcategory pages on the homepage title.",
        recommendedAction:
          "We deliver the exact robots file, tag per template, 114-row redirect list and template spec so Todd copies rather than composes. All three ship in one window. After deploy: re-fetch robots, request each pair for one hop, re-crawl for 116 unique titles.",
        expectedImpact:
          "Half the non-brand impressions leave the baseline, 68 pairs merge and 116 pages get their own titles in a single window.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO and content writer with Todd",
        title: "Plaque hub, acrylic retitle, three descriptions, Merchant Center setup",
        evidence:
          "The plaque hub links to none of its children, the acrylic page sits at position 8.5, and neither has copy. Merchant Center is at zero of five tasks.",
        recommendedAction:
          "Retitle both pages against the keyword research, write three descriptions, and confirm the copy is in the served HTML rather than injected by SearchAtlas. Complete Merchant Center verification in parallel.",
        expectedImpact:
          "The pages that matter most to plaques read like the pages competitors win with, and Merchant Center is ready for a feed.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO with the account manager and you",
        title: "The baseline briefing and the turnaround question",
        evidence:
          "The first report will show a five-month-old property and a baseline that is half Coca-Cola. Twelve speed keywords are held on one question: your site says one to two weeks, the homepage meta says 72 hours.",
        recommendedAction:
          "One call: why the baseline excludes Coca-Cola and sports, why third-party tools understate you, and one question: what turnaround you can commit to on plaques and acrylic. That answer decides whether a quick-ship page ever exists.",
        expectedImpact:
          "You agree what recovery is measured against before the first fix goes live.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO and content writer with you and Todd",
        title: "Corporate pages and the first product feed",
        evidence:
          "32,760 corporate searches a month with zero in the top ten. No product feed; 530 product URLs with no canonical.",
        recommendedAction:
          "You create four categories; we write four pieces of copy; Todd places them. Once the redirects have settled, the first feed goes in from plaque and acrylic products on clean URLs with stable image paths and the two 403 pages fixed.",
        expectedImpact:
          "Occasion-driven buyers find you, and your plaques appear in free Shopping listings.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO and AIA developer with Todd",
        title: "Product rescue, homepage local schema, blog, soft 404s, not-indexed export",
        evidence:
          "SP504 slipped from position 17 to 21 while demand grew; SS102 fell from 16 clicks to 1. Atlanta awards slipped from 1.17 to 3.8 while Edco and Crown hold Atlanta pages. Nine blog posts share one title and earn 5 clicks. Unknown paths return 200 as the homepage.",
        recommendedAction:
          "Retitle the four product pages with schema. Add LocalBusiness schema and an Atlanta block to the homepage, no separate Atlanta page. Merge, redirect or remove the nine posts and give survivors unique titles. Make unknown slugs return a real 404. Two weeks after the containment deploy, export the not-indexed buckets and decide each pattern.",
        expectedImpact:
          "The only non-brand pages earning clicks stop sliding, brand and local are defended, and the index report starts validating the fixes.",
      },
      {
        phase: "Month 3",
        specialists: "AIA SEO, content writer and AIA developer with the Developer Review",
        title: "Blog refresh, backlink decision, product URL decision, quarter validation",
        evidence:
          "The pricing guide draws 464 impressions and 93 AI-feature impressions but links to nothing that sells. The audit proposes rewriting 530 product URLs on a shared database nobody has sized.",
        recommendedAction:
          "Refresh the pricing and recognition guides with links to order pages. Export the backlink profile and decide the disavow with your sign-off. Ask the Developer Review three questions on the URL rewrite: can it 301 without touching the database, do other hosts inherit it, what does it cost. If clean, ship 33 products as a test and measure 30 days. Close the quarter on the same windows we opened it on.",
        expectedImpact:
          "Content that already ranks sends readers to order pages, and the riskiest change is made in a measured batch or not at all.",
      },
    ],
  },
  approval: {
    title: "Decisions and specialists before launch",
    gates: [
      {
        timing: "Kickoff",
        label: "Access",
        title: "Working credentials via Todd and the safeguards agreement in writing",
        detail:
          "Every technical change is deployed by Todd on a database shared with four other sites. We need credentials routed through Todd and a one-page agreement on who deploys, backups and QA before the first deploy is scheduled.",
      },
      {
        timing: "Kickoff",
        label: "Priority",
        title: "Confirm plaques first, acrylic second, and who creates the four corporate categories",
        detail:
          "The quarter is planned in the order you gave us and the data agrees. The corporate pages need four categories created in your order-entry system; confirm you will create them, otherwise they route through Todd.",
      },
      {
        timing: "Before the first report",
        label: "Measurement",
        title: "Agree the baseline and answer the turnaround question",
        detail:
          "We report Search Console totals with Coca-Cola and sports removed, lead with orders and calls, and drop the three unsupported sales figures. We also need the turnaround you can commit to on plaques and acrylic.",
      },
      {
        timing: "Before the feed",
        label: "Sequence",
        title: "Robots, redirects and canonicals live before any product is submitted",
        detail:
          "A feed on today's URLs carries duplicates and 403s into Merchant Center and spends its first month on disapprovals. Setup now, feed after the containment deploy settles, plaques and acrylic only.",
      },
      {
        timing: "Before any product URL rewrite",
        label: "Structure",
        title: "The Developer Review answers three questions first",
        detail:
          "Rewriting 530 product URLs is the riskiest change in the audit, on the only pages that convert. Held as a month-three decision, then a 33-product test tranche measured for 30 days.",
      },
    ],
    decisions: [
      {
        label: "No link building and no month-one disavow",
        detail:
          "The largest spam anchor is nofollow, the keyword collapse is a tracking artefact, and sites at Domain Rating 2 to 30 hold the positions you want. Missing pages are the blocker. Backlinks are reviewed in month three with your sign-off.",
      },
      {
        label: "No quick-ship page until turnaround is settled",
        detail:
          "Same day awards has 350 searches on a SERP part-owned by a company of that name, and your site promises one to two weeks. A page promising speed the fulfilment cannot match converts worse than no page.",
      },
      {
        label: "Signs, Coca-Cola, youth sports and trophies head terms are excluded on purpose",
        detail:
          "Signs are wholesale to your resellers. Coca-Cola pages are leaving the index. You cede sports trophies to Crown. The word trophies goes in no title or heading.",
      },
      {
        label: "No Shopify migration",
        detail:
          "You rejected a 30,000-dollar quote on 25 August. Everything in this plan is a robots file, a rewrite rule, a template edit, copy in a description slot and a product export, all on the existing catalogue.",
      },
    ],
  },
};
