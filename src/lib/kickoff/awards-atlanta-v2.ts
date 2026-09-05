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
        "Sell more plaques, then acrylic, and bring direct web orders back from two or three a week toward the historical five to ten",
    },
    {
      label: "Roadmap",
      value:
        "Site access and safeguards, crawl control, URL consolidation, the subcategory template, plaque and acrylic pages, corporate intent pages, Merchant Center",
    },
    {
      label: "Platform",
      value:
        "Custom PHP catalogue on a database shared with signatureclassics.com, about 15 fs-awards.com store sites, SA Awards and SA Badges, deployed by your developer Todd",
    },
  ],
  summary: {
    title: "What changes first",
    objectiveLabel: "Business objective",
    objective:
      "Take the pages that cannot sell out of Google's view of the site, give every page that can sell one address and its own title, and put the plaque and acrylic pages in front of the buyers who are already searching for them.",
    lead:
      "The most important thing in this document is that the decline is not a demand problem. Nearly half of the site's non-brand visibility is a Coca-Cola employee store that cannot sell to the public: 263 Coca-Cola queries are 47 per cent of all non-brand impressions, and the crystal bottle alone draws 29,000 impressions nobody can buy from. Sixty-eight category and subcategory URLs exist twice because of letter case, all 116 subcategory pages serve the homepage title with no H1 and no copy, and the plaque and acrylic pages that carry the margin have no on-page text at all. Google is being asked to rank a site of which half is invisible to it and half is duplicated. The first month is a robots file, a rewrite rule, a template edit and three category descriptions, and every one of them is countable.",
    emphasis:
      "The numbers look worse than they are, and that matters for how we report to you. Ahrefs shows tracked keywords collapsing from about 1,000 in early 2023 to 27 today, but Search Console shows 380 to 430 pages earning impressions every month, so the Ahrefs series is a tracking artefact on a small site and we do not report from it. The Search Console property was created in March 2026, so 23 March to 31 August is its whole history: 1,668 clicks from 95,944 impressions, 69 per cent of them on the homepage. There is no year-over-year yet. Strip out Coca-Cola and youth sports and the real non-brand baseline is about 27,680 impressions and 257 clicks in five months. That is the number recovery is measured against, and three figures from the sales record that neither source supports are dropped from everything client-facing. Two things govern the whole plan. First, every technical change is deployed by Todd on a codebase we cannot yet log into, on a database shared with four other sites, so nothing ships until the credentials work and the safeguards are written. Second, plaques come first because you said so and the data agrees: a 105-dollar sale against about six dollars in cost, and the plaque child terms are open while the head terms are not.",
  },
  strategy: {
    title: "3 Month Roadmap",
    gridClassName: "lg:grid-cols-3",
    operatingPrinciple:
      "Get the door open before anything is scheduled, ship the three containment fixes in one deploy window, retitle the pages that already rank before writing anything new, and report on orders, calls and a baseline you can check yourself.",
    phases: [
      {
        accent: "blue",
        month: "Month 1",
        theme: "Open the door and contain the site",
        objective:
          "Get working credentials from Todd, write the one-page safeguards agreement for the shared database, and settle which of the SearchAtlas title changes are permanent. Then ship one deploy window: robots.txt and noindex for the Coca-Cola store, cart, account and vendor hosts; 301s for the 68 case-variant pairs with self-referencing canonicals; and a subcategory template that serves its own title, H1 and HTML links. On the fixed templates, retitle the plaque hub and the acrylic awards page against the keyword research, write the three category descriptions, complete the five Merchant Center setup tasks, and brief you on the baseline before the first report.",
        deliverable:
          "Access confirmed and safeguards written, deploy checklist for Todd, robots and noindex live, 68 pairs redirected, subcategory template fixed, plaque and acrylic retitles, three category descriptions, Merchant Center verified, baseline agreed",
        businessOutcome:
          "Google stops counting the Coca-Cola store and the wholesale mirrors as your site, every plaque, acrylic and badge page holds its whole signal on one address, and the acrylic page that already sits on page one gets a title that says what it sells.",
      },
      {
        accent: "gold",
        month: "Month 2",
        theme: "Build the missing pages and open Shopping",
        objective:
          "Create the four corporate intent categories in your order-entry system and write their copy: corporate awards, employee recognition awards, service awards and years of service, and retirement awards and plaques. Build the first Merchant Center feed from the plaque and acrylic products on the cleaned lowercase URLs. Rescue the four product pages that earn the only non-brand clicks on the site, add LocalBusiness schema and an Atlanta block to the homepage, consolidate the nine blog posts, make unknown category paths return a real 404, and export the not-indexed buckets once the template fixes have settled.",
        deliverable:
          "Four corporate intent pages live, first product feed submitted, four product pages retitled with schema, homepage local schema, blog consolidated, soft-404 route fixed, not-indexed buckets classified",
        businessOutcome:
          "Buyers searching for corporate, recognition, service and retirement awards find a page built for them instead of a competitor, your plaques and acrylic awards appear in free Shopping listings, and the brand and local positions the site converts today are protected.",
      },
      {
        accent: "blue",
        month: "Month 3",
        theme: "Refresh what ranks and decide the big change",
        objective:
          "Refresh the two blog guides Google and AI features already reward so they point at the pages that sell. Export the full backlink profile and decide, with your sign-off, whether any followed spam needs a disavow. Take the 530-product URL rewrite to the Developer Review as a decision with three questions rather than a ticket, and if the answers are clean, ship the 33 mapped products as a measured test tranche. Expand the Merchant Center feed if the plaque tranche is approved, and validate the quarter against the same windows we started with.",
        deliverable:
          "Pricing and recognition guides refreshed, backlink decision made, product URL rewrite scoped or shipped as a test tranche, feed expanded, quarter validated and next-quarter backlog written",
        businessOutcome:
          "The content that already draws readers sends them to order pages, the riskiest change on the account is made in a measured batch or not at all, and you see the same set of numbers moving month over month without taking anyone's word for it.",
      },
    ],
  },
  focus: {
    title: "Six priorities for revenue recovery",
    volumeLabel: "Evidence",
    scopeLabel: "Scope impact",
    footnote:
      "Evidence comes from the Awards Atlanta consolidated SEO roadmap of 2 September 2026, built from the Deep SEO Analysis of 2 September and its eight child audits, the full-site keyword research of 2 September, the intake interview of 25 August and the pre-strategy huddle of 26 August. Search Console is the source of truth for traffic and indexation, Ahrefs for keyword volumes and the link profile, and the keyword research SERP checks for what is winnable. Seven checks are still open: the Developer Review has not run because the CMS credentials failed on 25 August, the Search Console bucket URL lists were never exported, the Merchant Center product screens were not opened, the AI visibility device and country tabs were not captured, blog publish dates do not exist in the HTML, the fs-awards.com subdomain list rests on a site: search of 25 August, and the Ahrefs referring-domains report was unavailable.",
    items: [
      {
        number: "01",
        title: "Open the door before anything is scheduled",
        businessObjective:
          "Establish who can change your site, how it is protected, and which of the changes you already paid another tool for will survive cancelling it.",
        evidence:
          "Nobody at All In can currently edit the site. The CMS credentials failed on 25 August, the Website Dev Review is waiting on client, and your IT company previously denied SearchAtlas write access. The keyword research crawl of 2 September confirmed the SearchAtlas OTTO loader on every page rewriting titles and metas in the browser, so the titles visible today may be an overlay that disappears when that tool is cancelled. The database behind the catalogue is shared with signatureclassics.com, about 15 fs-awards.com store sites, SA Awards and SA Badges, so a template edit can reach sites we have never seen.",
        volume: "Gates five of the eight P0 items",
        scopeImpact:
          "Every technical change in the plan, and the baseline titles everything is measured against",
        expectedImpact:
          "This is the delivery constraint that governs the whole engagement. Every containment fix routes through Todd on a codebase All In has not seen, and winning him early with a tight checklist is the job.",
        recommendedAction:
          "Get working CMS and server credentials from Todd, not from you, and run the Developer Review. Write the one-page safeguards agreement: which hosts share the database, who deploys, whether there is a staging copy, backup before each deploy, and who checks the result. Compare view-source titles against rendered titles on ten pages and tell you which of your SearchAtlas metadata changes are permanent. Do not schedule the robots file, the redirects or the template edit until this is done, and route every ask through Todd with a checklist rather than through you.",
        status: "P0 · Kickoff · do first",
      },
      {
        number: "02",
        title: "Take the pages that cannot sell out of Google",
        businessObjective:
          "Stop nearly half of your non-brand visibility being content you cannot monetise, and stop Google indexing a wholesale ordering tool that carries no Awards Atlanta contact details by design.",
        evidence:
          "There is no robots.txt: the file returns 404, and the only sitemap holds five URLs dated 27 June 2006. Nothing on the site carries a noindex, so the Coca-Cola employee store, the cart and account pages, raw product images, the wholesale mirror signatureclassics.com and roughly 15 fs-awards.com store subdomains are all indexed and competing with the pages that sell. The Coca-Cola pages earned 29 clicks from 10,501 impressions in three months plus 101 AI-feature impressions, and 263 Coca-Cola queries are 47 per cent of all non-brand impressions on the property. You said it yourself on the intake call: the crystal bottle with 29,000 impressions cannot be sold to anyone.",
        volume: "47 per cent of non-brand impressions",
        scopeImpact:
          "One robots.txt, one noindex tag on 13 templates, and a sitewide noindex on the vendor hosts",
        expectedImpact:
          "The only Awards Atlanta pages in search become the ones a customer can buy from, every visibility number we report stops being inflated by pages that will never produce an order, and Merchant Center approval stops being at risk from duplicate catalogue hosts.",
        recommendedAction:
          "We write one robots.txt for www.awardsatlanta.com that disallows the zoom and mega image folders, and a one-page checklist naming every URL pattern and the exact tag per template. Todd deploys. The Coca-Cola pages are already indexed, so they need the noindex tag served and crawlable until they drop out, and only then a disallow; robots alone would freeze them in the index. On signatureclassics.com the current Disallow is replaced with a sitewide noindex for the same reason. Every fs-awards.com store subdomain gets a noindex, and we confirm the list with you because each one is its own host to Google. Do not touch the category or product pages in this deploy. Verify with a site: search per host after 14 days and the Search Console indexing report.",
        status: "P0 · Month 1 · one deploy window with 03",
      },
      {
        number: "03",
        title: "One address and one title per page",
        businessObjective:
          "Stop every plaque, acrylic and badge intent being split across two or more addresses, and give 116 pages a name of their own in Google.",
        evidence:
          "Google is ranking 68 category and subcategory URL pairs that differ only by letter case, plus homepage, index.php and http duplicates, and there is no canonical tag on any page. In the same three-month window /category/Badges earned 3 clicks and 1,181 impressions against /category/badges at 5 clicks and 619, so the two halves of one page are splitting one ranking. Search Console reports 65 pages as duplicate without a canonical and 218 as crawled but not indexed. The crawl of 2 September found every one of the 116 subcategory pages, including acrylic awards and wood plaques, serving the homepage title with no H1 and no copy, and their only links sit inside an inline JavaScript array, so a crawler that does not run scripts sees no path to them.",
        volume: "68 duplicate pairs, 116 pages on one title",
        scopeImpact:
          "One lowercase rewrite rule, one canonical line in the shared header, one subcategory template",
        expectedImpact:
          "This is the single change that touches the most pages for the fewest hours. Each product and category has one address in Google instead of two, and every plaque and acrylic child page becomes reachable without scripts. Every retitle in the plan depends on the subcategory template being able to carry a title of its own.",
        recommendedAction:
          "Ship the 114 non-product rows of the redirect map as 301s: every mixed-case slug to lowercase, the subcategory plaques and crystal duplicates into their category pages, index.php and http into the https homepage, and the duplicate builds and nested Crystal Cups paths to their real pages. Add a self-referencing lowercase canonical to every category, subcategory and product template in the same deploy. Change the subcategory template to emit the subcategory name in the title and H1, add a description slot, and render the subcategory list as plain anchor tags alongside the array. Redirect first, rename never, and do not ship the 33 product rows in this pass. Confirm before deploying whether the same template drives signatureclassics.com and the fs-awards sites, test the encoded ampersand and ++ slugs explicitly, then re-crawl and count 116 unique titles.",
        status: "P0 · Month 1 · same deploy window as 02",
      },
      {
        number: "04",
        title: "Plaques first, and the acrylic page that is already on page one",
        businessObjective:
          "Make your stated first priority concrete on the pages you already own, starting with the cheapest position gain on the account.",
        evidence:
          "Plaque intent sits on /category/plaques at 14 clicks and 952 impressions in three months, plus 11 subcategory URLs that earned zero clicks between them. The plaque cluster is 422 keywords and 51,180 monthly searches: the head terms plaque award at 5,700 and award plaque at 3,600 are keyword difficulty 52 to 56, but custom plaques at 2,600 is difficulty 6, wood plaque at 1,400 is difficulty 2, custom plaque at 1,300 is difficulty 1, retirement plaque at 1,300 is difficulty 3 and acrylic plaque at 800 is difficulty 0. The wood plaques page lost its only ranking, position 3 on a misspelling. On acrylic, the awards page already sits at position 8.5 for acrylic awards at 1,800 searches a month, on a live SERP where acrylicwarehouse.com at Domain Rating 2 holds position 6 and usacrylicawards.com at Domain Rating 13 holds position 8. Your basic plaque sells at 105 dollars against about six in cost, and Home Depot ordered 150 custom acrylic pieces at 80 to 90 dollars each.",
        volume: "51,180 plaque searches a month, acrylic at position 8.5",
        scopeImpact:
          "The plaque hub, the wood plaques page and the acrylic awards page, plus three category descriptions",
        expectedImpact:
          "Authority is not the blocker: K2 holds position 3 on award plaque at Domain Rating 30 and a Domain Rating 2 site holds position 6 on acrylic awards. A page already in the top ten on a term like that does not need links, it needs a title that says what it sells. The plaque children are the easiest commercial demand on the account and the site currently gives Google one thin category page and eleven orphaned subcategories to rank them with.",
        recommendedAction:
          "Retitle /category/plaques to lead with Award Plaques and carry custom plaques in the description, and link the hub to the certificate, wood, marble, acrylic, perpetual, corporate and engraved children in visible HTML. Give wood plaques its own title and H1 for wood plaque and wooden plaques. Promote the acrylic awards subcategory as the canonical acrylic page, retitle it to lead with Acrylic Awards and carry custom acrylic awards and acrylic trophies, and let the case merge fold the twins into it. Write three short category descriptions of roughly 200 to 300 words for the plaque hub, wood plaques and acrylic awards, leading with what the buyer gets and how to order, with the quantity-tier confusion kept off the page. Do not build new plaque URLs, do not create a second acrylic page, do not write trophies into any title or heading, and confirm every served title in view-source because of the SearchAtlas overlay.",
        status: "P0 · Month 1 · after the template fix in 03",
      },
      {
        number: "05",
        title: "Build the corporate pages every competitor has",
        businessObjective:
          "Give the buyer who searches by occasion rather than by material a page built for them, because today that buyer lands on a competitor.",
        evidence:
          "The corporate cluster is 633 keywords and 32,760 monthly searches with zero of them in the top ten today: corporate awards at 1,800 a month at difficulty 12 with the best cost per click in the pull at four dollars, employee recognition awards at 1,000, recognition awards at 900, service awards at 700, years of service award at 450, and retirement awards and employee of the year plaque at 150 at difficulty 0. The live SERP for corporate awards is Edco, FineAwards, K2 at Domain Rating 30, Crown and Awards.com, each on a dedicated corporate awards page. On your site, corporate exists as a three-product subcategory under Trophies, service awards as a twelve-product subcategory under Acrylic with no copy, and employee recognition and retirement appear nowhere. You never said recognition or service award in an hour of interview, and the site mirrors you; search does not.",
        volume: "32,760 searches a month, none in the top ten",
        scopeImpact:
          "Four new categories in the order-entry system, four pieces of copy, links back to the plaque and acrylic hubs",
        expectedImpact:
          "This is the missing-page layer the sales record diagnosed and the SERP confirms. Your second target market, 25-employee firms giving 10 to 15 awards at year end, searches exactly these terms. You can create a category in your order-entry system in minutes, so the build cost is low and the work is copy and placement.",
        recommendedAction:
          "Create four intent categories and write their copy: corporate awards as the parent, employee recognition awards, service awards and years of service, and retirement awards and plaques. Each page merchandises existing plaque, acrylic and crystal products by use rather than material, links back to the plaque and acrylic hubs, and carries a bulk-quote path, which is the only on-page hook the nomination-programme market has. Treat employee recognition as a secondary target under the corporate page rather than a headline, because its SERP is shared with HR software at Domain Rating 77 to 92. We supply the names, lowercase hyphenated slugs, titles and copy; you create the categories; Todd places the copy. Sequence after the template fix so the new pages serve their own titles from day one.",
        status: "P1 · Month 2 · after access and the template fix",
      },
      {
        number: "06",
        title: "Stand up Merchant Center, plaques first",
        businessObjective:
          "Start the organic Shopping service you purchased, on a feed that will be approved rather than one that spends its first month on disapprovals.",
        evidence:
          "The Merchant Center overview captured on 2 September reads zero of five setup tasks complete: website ownership unverified, business address missing, no data source, no products and store quality unavailable. Account-level clicks are 108 in 28 days, down 3.6 per cent, most likely free-listing remnants. There is no product feed, and a feed built on today's URLs would submit case-variant, parameterised and duplicate addresses: 530 of the 777 URLs Google sees are product.php?id= pages with no canonical, and two product pages return 403. Product pages convert impressions at 2.09 per cent against 0.46 per cent for categories, so this is where buyers actually click on this site.",
        volume: "0 of 5 setup tasks, no feed, 108 clicks in 28 days",
        scopeImpact:
          "Verification and business details now, then a plaque and acrylic feed on clean URLs",
        expectedImpact:
          "Shopping is the channel most likely to produce the first countable orders for a business that judges on transactions. Verification and the business address can happen while the site cleanup is in progress, and nothing else in the Shopping workstream can start until they are done.",
        recommendedAction:
          "Complete the five setup tasks now: verify ownership through the Search Console property that already exists, add the business address and contact details, confirm the shipping and returns policy pages exist on the site, and link Search Console and GA4. Do not add products yet. In month two, build the first feed from the highest-margin plaque products and the acrylic range only, on lowercase canonical URLs, with titles written from the keyword research terminology map rather than internal SKU names, and resolve the two 403 pages before submission. Use stable image paths, because the site adds a per-session cache-buster to every image URL. Do not submit the full 4,000-product catalogue; expand only after the first tranche is approved and store quality is visible, and track item issues weekly for the first month.",
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
        title: "The tools say collapse, the source of truth says a small site with half its visibility unsellable",
        currentLabel: "How the numbers read at first glance",
        current: [
          "Ahrefs tracked keywords down from about 1,000 in early 2023 to 27 today",
          "Three-month impressions down 11.6 per cent with average position 9.92 to 12.56",
          "Sales record: 87 page-one keywords, 1,300 searches for quick turn acrylic awards, 590 for same day awards",
        ],
        targetLabel: "What the numbers actually say",
        target: [
          "Search Console shows 380 to 430 pages earning impressions every month, so the Ahrefs series is a tracking artefact and is not used",
          "The property is five months old, so 1,668 clicks from 95,944 impressions is the whole history and there is no year-over-year yet",
          "With Coca-Cola and youth sports removed, the real non-brand baseline is about 27,680 impressions and 257 clicks in five months, and the three sales figures are not supported by either source and are dropped",
        ],
        decision:
          "Agree the baseline before the first report: property-level totals with Coca-Cola and sports removed, clicks and orders leading rather than rankings, and no third-party keyword chart as the headline.",
        impact:
          "You verify every number with your own tools and have ended agency relationships over opacity. A first report that leads with figures you can contradict in Search Console costs the account before the first fix ships. Said in advance this is a baseline; said afterwards it is an excuse.",
        proof:
          "The property-level Search Console pull of 2 September, which page-level sums will always exceed because a query showing two pages counts twice.",
      },
      {
        eyebrow: "The authority read",
        title: "Missing pages are the blocker, not links, and the spam campaign is mostly harmless",
        currentLabel: "What the deep audit recommended",
        current: [
          "A link-quality crisis: 16.7 per cent of links followed, an active spam campaign since April 2026, disavow in weeks one to two",
          "29 organic keywords against competitors at 1,000 or more, so build local citations and industry links to close the gap",
        ],
        targetLabel: "What the keyword research SERP checks found",
        target: [
          "The largest spam anchor, 227 links across 41 domains, is entirely nofollow, and the keyword collapse it was blamed for is contradicted by Search Console",
          "A Domain Rating 2 site holds position 6 on acrylic awards and K2 at Domain Rating 30 holds position 3 on corporate awards, against your 28",
        ],
        decision:
          "No link-building programme and no month-one disavow. Export the full backlink profile in month three, isolate anything both followed and manipulative, and only then prepare a disavow file for your sign-off. Spend the effort on the pages.",
        impact:
          "A disavow is irreversible without a reconsideration request and would not change what the site ranks for. You hear about the spam links as monitoring, not as a crisis, and the money goes to the plaque, acrylic and corporate pages that the SERPs show are winnable at your authority.",
        proof:
          "The Ahrefs anchors capture of 2 September showing 0 dofollow on the SEOExpress anchor, and the live SERP checks of 1 September on acrylic awards, award plaque and corporate awards.",
      },
    ],
    artifacts: [
      {
        phase: "Month 1",
        specialists: "Account manager, AIA developer and AIA SEO with Todd",
        title: "Access, the safeguards agreement and the SearchAtlas answer",
        evidence:
          "The CMS credentials failed on 25 August and the Developer Review is waiting on client. The SearchAtlas OTTO loader rewrites titles and metas on every page in the browser, and the database behind the catalogue serves four other sites we have never seen. Pulse tracking is written and not installed, so orders and calls are not yet attributed.",
        recommendedAction:
          "The credentials ask goes to Todd with a checklist, not to you. We write the one-page agreement covering which hosts share the database, who deploys, backup before each deploy and who checks the result, and we compare source and rendered titles on ten pages so you know which metadata changes survive cancelling SearchAtlas. Pulse goes in with your approval for call tracking so month one is attributed from the start.",
        expectedImpact:
          "You know exactly who can change your site and how it is protected, and the first deploy happens against a written agreement rather than a hope.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO and AIA developer with Todd",
        title: "The containment deploy: robots, noindex, 68 redirects and the subcategory template",
        evidence:
          "robots.txt returns 404, the sitemap is from 2006, the Coca-Cola store and the vendor hosts are indexed, 68 URL pairs differ only by case with no canonical anywhere, and all 116 subcategory pages carry the homepage title with links only in a JavaScript array. Search Console reports 218 pages crawled but not indexed and 65 duplicates without a canonical.",
        recommendedAction:
          "We deliver the exact robots file, the exact tag per template, the 114-row redirect list and the template specification so Todd copies rather than composes. The three items ship in one deploy window so the platform is opened once. AIA's developer reviews the diff and QAs the rows; Todd deploys. We confirm before deploy whether the subcategory template also drives signatureclassics.com and the fs-awards sites. After deploy we re-fetch robots, request each pair and confirm one hop, and re-crawl for 116 unique titles. We do not treat the deploy as done until those checks pass.",
        expectedImpact:
          "Half of the site's non-brand impressions leave the baseline, 68 duplicate pairs merge, and 116 pages get their own titles in a single window.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO and content writer with Todd",
        title: "Plaque hub, acrylic retitle, three category descriptions and Merchant Center setup",
        evidence:
          "The plaque hub carries a generic title and links to none of its children, the acrylic awards page sits at position 8.5 on a SERP a Domain Rating 2 site is winning, and neither page has any copy. Merchant Center has zero of five setup tasks complete.",
        recommendedAction:
          "Retitle the plaque hub and the acrylic page against the keyword research, link the hub to its children in visible HTML, and write the three descriptions to what each page needs, roughly 200 to 300 words, using the terminology map as the vocabulary. Todd pastes the copy into the description slot the template fix adds, and we confirm it is visible in the served HTML rather than injected by SearchAtlas. In parallel we complete the Merchant Center verification, business details, policy pages and Search Console and GA4 links, and screenshot the finished checklist for the first report.",
        expectedImpact:
          "The three pages that matter most to the plaque-first goal read like the pages competitors win with, and the Merchant Center account is ready for a feed the moment the URLs are clean.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO with the account manager and you",
        title: "The baseline briefing and the turnaround question",
        evidence:
          "The first report will show a five-month-old property, an Ahrefs history that looks like a collapse, and a non-brand baseline that is half Coca-Cola. Separately, twelve speed keywords are held on one open question: your site says one to two weeks, the homepage meta says 72 hours, and product pages say rush available.",
        recommendedAction:
          "One call before the first report: the property is five months old so there is no year-over-year yet, the baseline is reported with Coca-Cola and sports removed, third-party tools understate you and why, and the three unsourced sales figures are gone from everything client-facing. Then one question: what turnaround can you commit to on plaques and acrylic. That answer decides whether a quick-ship page ever exists and what the category copy can promise. No ranking chart; orders, calls and the countable work list lead.",
        expectedImpact:
          "You see a baseline you can check yourself and agree what recovery is measured against before the first fix goes live.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO and content writer with you and Todd",
        title: "Corporate intent pages and the first product feed",
        evidence:
          "Every competitor holding the corporate vocabulary has a dedicated corporate page and the site has none, against 32,760 monthly searches with zero in the top ten. There is no product feed, and 530 product pages live on parameterised URLs with no canonical and two returning 403.",
        recommendedAction:
          "You create the four categories in the order-entry system; we supply names, slugs, titles and four pieces of copy that merchandise existing plaque, acrylic and crystal products by occasion with a bulk-quote path; Todd places the copy. Once the robots, redirect and canonical work has settled, we build the first feed from the plaque and acrylic products only, on lowercase canonical URLs, with titles from the terminology map, stable image paths and the two 403 pages resolved. Todd exports SKU, title, price, image, availability and URL as a scheduled file; if that export has to be built, his time sits outside our estimate.",
        expectedImpact:
          "Occasion-driven buyers find a page built for them, and your plaques and acrylic awards appear in free Shopping listings with clean, approved pages behind them.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO and AIA developer with Todd",
        title: "Product page rescue, homepage local schema, blog consolidation, soft 404s and the not-indexed export",
        evidence:
          "The four product pages that earn real clicks are slipping: SP504 from position 17.23 to 21.45 while impressions grew, SS102 from 16 clicks to 1 and SS101 from 10 to 0 over three months. The homepage holds 69 per cent of all clicks and atlanta awards slipped from position 1.17 to 3.8 in a month while Edco and Crown hold Atlanta pages at positions 5 and 7. Nine blog posts share one title tag and earn 5 clicks between them, one of them ranking for your brand name against the homepage. Any unknown category path returns 200 with the homepage title, and Search Console reports 18 soft 404s.",
        recommendedAction:
          "Retitle the four product pages in keyword research vocabulary with a specification block, Product schema and links from their hubs, without changing their URLs. Keep the homepage title brand-exact, add Organization and LocalBusiness schema and a short Atlanta block, and confirm the Google Business Profile matches; no separate Atlanta page, because it would split the position the homepage already holds. Decide the nine posts: merge the three recognition posts into one, redirect one to about, remove three including the sports post you cede on purpose, and give the retained posts unique titles and a visible date. Make unknown slugs return a real 404 and fix the relative link that manufactures nested paths. Then, once the containment fixes have been live two weeks, export all six not-indexed buckets and give each URL pattern a decision, because acting on today's 218 would mean doing the triage twice.",
        expectedImpact:
          "The only non-brand pages producing clicks stop sliding, the brand and local positions are defended, the blog stops competing with the homepage, and the index report starts showing the fixes as validated.",
      },
      {
        phase: "Month 3",
        specialists: "AIA SEO, content writer and AIA developer with Todd and the Developer Review",
        title: "Blog refresh, backlink decision, the product URL rewrite decision and the quarter validation",
        evidence:
          "The custom award pricing guide earns 464 impressions at position 9.46 and 93 AI-feature impressions, the third highest on the site, and does not link to the pages that sell. The link profile is Domain Rating 28 with 16.7 per cent of links followed and an unsolicited spam campaign whose largest anchor is nofollow. The audit proposes rewriting all 530 product URLs to /product/SKU on a catalogue whose database serves four other sites, and nobody has sized it because nobody has logged in.",
        recommendedAction:
          "Refresh the pricing guide with an FAQ block and links to the plaque, acrylic and corporate pages, and rebuild the recognition guide as the single post absorbing the two merged into it. Export the full backlink report with the follow filter and decide the disavow with your sign-off, excluding your own fs-awards image links. Take the product URL rewrite to the Developer Review with three questions: can the rewrite layer serve /product/SKU with a 301 without touching the database, do the other hosts inherit the rule, and what does it cost. If the answers are clean, ship the 33 mapped products as a test tranche and measure for 30 days before the remaining 497. Do not migrate platforms to get this. Close the quarter on the same Search Console windows we opened it on, with the Merchant Center item issues and each bucket's validation state, and write the next-quarter backlog from what moved.",
        expectedImpact:
          "The content Google already trusts sends readers to order pages, the riskiest change on the account is made in a measured batch or not at all, and the quarter is reported in a shape you can verify.",
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
          "The CMS credentials failed on 25 August and the Developer Review is waiting on client. Every technical change in this plan is deployed by Todd on a database shared with signatureclassics.com, the fs-awards.com store sites, SA Awards and SA Badges. We need the credentials routed through Todd with a checklist, and a one-page agreement on which hosts share the database, who deploys, backup before each deploy and who QAs, before the first deploy is scheduled. Nothing else in month one can start without it.",
      },
      {
        timing: "Kickoff",
        label: "Priority",
        title: "Confirm plaques first, acrylic second, and who creates the four corporate categories",
        detail:
          "On the intake call the answer to which category to grow was plaques, hands down, with acrylic second, and the data agrees on both: the plaque child terms are open at keyword difficulty 0 to 6, and the acrylic page is already at position 8.5. We have planned the whole quarter in that order. The corporate intent pages in month two need four categories created in your order-entry system, which you said takes minutes; we need to confirm on this call that you will create them, otherwise they route through Todd.",
      },
      {
        timing: "Before the first report",
        label: "Measurement",
        title: "Agree the baseline and answer the turnaround question",
        detail:
          "The property is five months old, Ahrefs history is a tracking artefact, and 47 per cent of non-brand impressions are Coca-Cola. We report property-level Search Console totals with Coca-Cola and youth sports removed, lead with orders and calls from Pulse, and drop the three sales-record figures the data does not support. On the same call we need one answer only you can give: the turnaround you can commit to on plaques and acrylic, because twelve keywords and any quick-ship page wait on it.",
      },
      {
        timing: "Before the feed",
        label: "Sequence",
        title: "Robots, redirects and canonicals live before any product is submitted",
        detail:
          "A feed submitted on today's URLs carries the duplicate hosts, case variants and two 403 pages into Merchant Center and spends its first month on disapprovals rather than sales. The setup tasks happen now; the feed waits for the containment deploy to land and settle, and it starts with the plaque and acrylic products rather than the 4,000-product catalogue.",
      },
      {
        timing: "Before any product URL rewrite",
        label: "Structure",
        title: "The Developer Review answers three questions first",
        detail:
          "Rewriting 530 product URLs is the largest and riskiest change proposed anywhere in the audit, on the only pages that convert, on a database shared with four other sites. It is held as a month-three decision: can the rewrite layer serve the new URL with a 301 without touching the database, do the other hosts inherit the rule, and what does it cost. Only then a 33-product test tranche, measured for 30 days.",
      },
    ],
    decisions: [
      {
        label: "Do not start link building or file a month-one disavow",
        detail:
          "The largest spam anchor is entirely nofollow, the keyword collapse it was blamed for is contradicted by Search Console, and a disavow is irreversible. The SERP checks show a Domain Rating 2 site at position 6 on acrylic awards and K2 at Domain Rating 30 at position 3 on corporate awards, so authority is not what is holding this site back. Missing pages are. The backlink profile is exported and decided in month three with your sign-off, and any citation cleanup sits inside the Google Business Profile check.",
      },
      {
        label: "Do not build a quick-ship or same-day page until turnaround is settled",
        detail:
          "The keyword research found same day awards at 350 searches on a SERP part-owned by a company named Same Day Awards, quick ship awards at zero, and your own site promising one to two weeks while the homepage meta says 72 hours. A page promising speed the fulfilment cannot match converts worse than no page. The twelve speed keywords are held on your answer.",
      },
      {
        label: "Signs, Coca-Cola, youth sports and trophies head terms are excluded on purpose",
        detail:
          "The Signs division is wholesale to Fastsigns and Signarama franchises and stays out of public marketing so it does not compete with its own resellers, which is why more than 4,000 monthly searches of ADA signage demand are recorded and not targeted. The Coca-Cola pages are leaving the index rather than being improved. You cede sports trophies to Crown, so the Georgia sports post is removed rather than refreshed. The word trophies goes in no title or heading; the terminology map explains why.",
      },
      {
        label: "Do not migrate to Shopify to get any of this",
        detail:
          "You rejected a 30,000-dollar migration quote on 25 August and the sales handoff is explicit that Shopify is not to be presented as a shortcut. Everything specified in this plan can be implemented by Todd on the existing catalogue: a robots file, a rewrite rule, a canonical line, a template edit, copy in a description slot and a scheduled product export. Thirty-one years of rankings do not move casually.",
      },
    ],
  },
};
