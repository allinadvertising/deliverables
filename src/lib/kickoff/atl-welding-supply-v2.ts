import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

export const atlWeldingSupplyKickoffV2: KickoffV2Data = {
  printAriaLabel: "Print ATL Welding Supply kickoff V2 as PDF",
  footerNote: "ATL Welding Supply SEO Strategy Kickoff | September 2026",
  cover: {
    clientName: "ATL Welding Supply",
    subtitle: "Your organic search strategy for the next three months.",
  },
  meta: [
    { label: "Period", value: "September to November 2026" },
    {
      label: "Business objective",
      value:
        "Recover ecommerce revenue by fixing the URL structure, with visible movement in filler metals and cutting equipment inside 90 days",
    },
    {
      label: "Roadmap",
      value:
        "Tag-path canonicals, Shopping feed cleanup, filler-metals collections, winning-page migrations, cutting equipment pages, measurement",
    },
    {
      label: "Platform",
      value: "Shopify, Simprosys feed, Google Ads run by an outside vendor",
    },
  ],
  summary: {
    title: "What changes first",
    objectiveLabel: "Business objective",
    objective:
      "Give every category one URL, send Google clean product links from the Shopping feed, and build the filler-metals pages that do not exist yet.",
    lead:
      "Clicks fell 28.9 per cent in the last three months against the previous three, from 4,627 to 3,292, and average position slid from 17.6 to 20.9. It was a slide from March to June, on every device, almost all non-brand. The last 28 days are flat, so the fall has stopped but not reversed. Summer explains at most a third of it. Your own read is right: cutting torches sit at position 19, filler metal wire at 40.",
    emphasis:
      "The cause is structural, in three places. Shopify creates a URL for every tag inside every collection: 191 of these tag pages, none in the sitemap, earned 1,046 clicks last year, and in eleven categories the tag page outranks the real collection. Regulator gauges shows it plainly, 302 clicks on the tag page against 22 on the collection, same 22 products. Second, filler metals has no landing pages: the MIG wire collection is a 404, and the whole category earned 11 named clicks from 31,000 impressions last quarter. Third, the Merchant Center feed sends tracking URLs labeled as paid, which has put 9,784 junk URLs into Search Console and hides your best-converting traffic, free product listings, whose impressions halved since April. Your pages are fine. The 6011 rod page ranks on page one with one clean URL, and it is the model.",
  },
  strategy: {
    title: "3 Month Roadmap",
    gridClassName: "lg:grid-cols-3",
    operatingPrinciple:
      "Structure first, pages second. Nothing new unless a category has no home. Nothing redirected until the destination carries the same products and copy. Every number is one you can reproduce in your own accounts.",
    phases: [
      {
        accent: "blue",
        month: "Month 1",
        theme: "One URL per category",
        objective:
          "Baseline Search Console and Merchant Center. Point every tag page at its parent collection and stop the menu linking to tag pages. Fix the feed URLs after clearing it with your Ads vendor. Build and write the four filler-metals collections.",
        deliverable:
          "Baseline captured, tag canonicals live, feed URLs clean, filler-metals collections built",
        businessOutcome:
          "Google stops splitting categories across duplicate pages, and the growth category finally has pages that can rank.",
      },
      {
        accent: "gold",
        month: "Month 2",
        theme: "Move the winners, press the margin",
        objective:
          "Migrate the categories where a tag page currently wins, regulator gauges and brand cutting tips first. Redirect dead products that still had clicks, hide warranty SKUs, clean up Merchant Center in both countries. Start the cutting equipment page tranche.",
        deliverable:
          "Winning tag pages consolidated, 404s redirected, Merchant Center clean, first page tranche live",
        businessOutcome:
          "Your highest-margin category ranks on pages you control, and the biggest near-page-one pool starts moving.",
      },
      {
        accent: "blue",
        month: "Month 3",
        theme: "Measure and extend",
        objective:
          "Report filler metals and cutting equipment against the September baseline. Merge the competing blog posts, add a product path to the twin-hose post, refresh the Lincoln pages, scope the site search fix.",
        deliverable:
          "90-day report, blog consolidated, twin-hose post selling, Lincoln pages refreshed, site search scoped",
        businessOutcome:
          "You see whether the structure work reversed the slide, in your own tools.",
      },
    ],
  },
  focus: {
    title: "Six priorities for revenue recovery",
    volumeLabel: "Evidence",
    scopeLabel: "Scope impact",
    footnote:
      "Sources: Deep SEO Analysis of 5 September 2026, the SEO Action Items workbook, and the keyword research of 7 September 2026. Last 3 months is 5 June to 2 September 2026; previous 3 months is 7 March to 4 June 2026. Only the www Search Console property is shared with us. No third-party estimates appear in this document.",
    items: [
      {
        number: "01",
        title: "Point every tag page at its parent collection",
        businessObjective:
          "Stop Google splitting each category across two to four copies of the same page.",
        evidence:
          "191 tag pages, none in the sitemap, earned 1,046 clicks in twelve months. 68 categories are served at two or more URLs. In eleven the tag page is the one that ranks. The site does have canonical tags; the fault is that tag pages point at themselves.",
        volume: "191 tag pages, 68 split categories",
        scopeImpact: "One template change plus the menu and filter links",
        expectedImpact:
          "Each category consolidates on one URL within six to eight weeks. This is the duplication problem you signed for, and it is one theme change.",
        recommendedAction:
          "Set the canonical on every /collections/[collection]/[tag] URL to its parent collection and remove tag links from navigation, breadcrumbs and filters. Test on regulator gauges first. Do not redirect anything yet; the eleven winning tag pages are handled in month two.",
        status: "P0 · Month 1 · needs Shopify theme access",
      },
      {
        number: "02",
        title: "Give filler metals the pages it does not have",
        businessObjective:
          "Put a landing page under the category you chose to grow.",
        evidence:
          "No MIG welding wire collection exists; the URL is a 404. Welding rods exist only as a tag page. TIG rods are split across two URLs. Filler metals earned 11 named clicks from 31,000 impressions last quarter and lost 65 per cent of its clicks. Buyers say rod, not electrode, and 6011, not E6011.",
        volume: "11 clicks from 31,000 impressions",
        scopeImpact: "Four collections: MIG wire, welding rods, TIG rods, flux core",
        expectedImpact:
          "This is the 90-day proof point. Repeat-purchase demand with no page to land on.",
        recommendedAction:
          "Create collections on the tags that already exist. Write 150 to 250 words each in buyer vocabulary with a short spec table. Put filler metals in the top row of the menu. Redirect the tag pages only after the collections are live. Copy can start now; publishing waits on admin access.",
        status: "P0 · Month 1 · copy now, publish on access",
      },
      {
        number: "03",
        title: "Send Google clean product URLs from the Shopping feed",
        businessObjective:
          "Make your best-converting traffic readable and stop it being reported as paid.",
        evidence:
          "Free listings convert at 2.19 per cent against 0.54 per cent for standard results, and their impressions halved from April to August. The feed sends URLs with currency, variant, a token and utm_medium set to cpc, so 463 of 464 free-listing clicks land on junk URLs, half with a broken ampersand. Search Console now holds 9,784 of them.",
        volume: "9,784 parameter URLs, free listings halved",
        scopeImpact: "One setting in the Simprosys app, agreed with the Ads vendor",
        expectedImpact:
          "One number per product, a Shopping organic channel in GA4, and the ability to prove the result of this engagement.",
        recommendedAction:
          "Send the plain product URL, relabel the UTM values so GA4 reads organic shopping, fix the escaping. First confirm who holds admin on Merchant Center and the feed, and that the Ads vendor's campaigns do not depend on those values.",
        status: "P0 · Month 1 · vendor coordination first",
      },
      {
        number: "04",
        title: "Move the winning tag pages onto real collections",
        businessObjective:
          "Get your highest-margin category ranking on pages in your sitemap without losing what it already holds.",
        evidence:
          "Brand cutting tips rank on tag pages: Purox 118 clicks, Airco 142, Oxweld 74, Meco 95, Rego 43, Marquette 94, none in the sitemap. Torch kits has 13,788 impressions on a tag page and no collection. Airco already has a real collection, and it gained clicks last quarter.",
        volume: "Six brand tip pages, 566 clicks, no sitemap",
        scopeImpact: "Regulator gauges, six brand tip collections, torch kits",
        expectedImpact:
          "The collection inherits the ranking instead of competing with it.",
        recommendedAction:
          "For each winner, copy its title and body onto the real collection, confirm the products match, then redirect. Create a collection per tip brand, as Airco has. Month two, after the canonical change settles.",
        status: "P1 · Month 2 · match before redirect",
      },
      {
        number: "05",
        title: "Press the cutting equipment pages just off page one",
        businessObjective:
          "Convert the largest near-page-one pool in the category that makes the most money.",
        evidence:
          "Cutting equipment holds 129,000 impressions at positions 11 to 20, the largest such pool on the site, and lost 31 per cent of its clicks last quarter. The named losers are these pages: the small combination torch from 77 to 46 clicks, the 8-MFA heating tip from 62 to 35.",
        volume: "129,000 impressions at positions 11 to 20",
        scopeImpact: "The monthly page tranche, cutting equipment first",
        expectedImpact:
          "Cluster position moves from 21 toward 15 by the November review.",
        recommendedAction:
          "Rewrite titles without buy and shop stacking, add the qualifiers buyers use (propane, acetylene, rosebud, 180 degree), move the Q and A blocks below the product grid, link in from the hose and torch-tip posts. Use the 6011 rod page as the template.",
        status: "P1 · Month 2 · after the structure settles",
      },
      {
        number: "06",
        title: "Protect the content that works, merge the rest",
        businessObjective:
          "Turn the one page Google already trusts into a sales path, and stop your posts competing with each other.",
        evidence:
          "The twin welding hose post earns 87 per cent of blog clicks, ranks 1.2 for grade r welding hose, and is your top page in Google AI features, yet links to no hose product. Two helmet posts and two accessories posts split the same queries, and two draft duplicates are still live.",
        volume: "One post is 87 per cent of blog clicks",
        scopeImpact: "Twin-hose post, two merges, two redirects",
        expectedImpact:
          "Your best content starts selling hose, and the AI visibility survives the cleanup.",
        recommendedAction:
          "Add hose product links to the twin-hose post and change nothing else. Merge the helmet explainer into the buying guide, keeping its wording as a labeled section. Merge the accessories posts. Redirect the drafts. No new posts; scope excludes them.",
        status: "P2 · Month 3 · keep the AI-quoted sections",
      },
    ],
  },
  execution: {
    title: "What changes, who decides, and how we prove it",
    artifactsTitle: "Evidence, action, impact, and specialists",
    examples: [
      {
        eyebrow: "The measurement framing",
        title: "Revenue is down for two reasons, and search controls one",
        currentLabel: "How the numbers read",
        current: [
          "Revenue about $1.8M in 2024, $1.4M in 2025, $1.0M to $1.2M projected for 2026",
          "Clicks down 28.9 per cent quarter on quarter",
        ],
        targetLabel: "What they mean",
        target: [
          "Your diagnosis stands: the Lincoln price rise, MAP and freight are supply-side, and no ranking reverses them",
          "The part search controls is a structural slide on the categories you said matter most",
        ],
        decision:
          "Measure this engagement on filler metals and cutting equipment moving in your own Search Console against the September baseline, not on the full revenue gap.",
        impact:
          "Said now, this is context. Said in November, it is an excuse.",
        proof:
          "Filler metals at 11 clicks and position 34, cutting equipment at 243 clicks and position 21, both visible in Search Console with the compare filter.",
      },
      {
        eyebrow: "The consolidation rule",
        title: "The obvious fix would delete the pages that rank",
        currentLabel: "A standard cleanup",
        current: [
          "Canonical every tag page to its collection and redirect them all at once",
          "Treat the sitemap collection as the winner",
        ],
        targetLabel: "What the evidence requires",
        target: [
          "In eleven categories the tag page is the one Google chose: regulator gauges at position 7.8 with 302 clicks against its collection at 22",
          "Redirecting the stronger page into the weaker one loses the ranking, so every consolidation names the winner first",
        ],
        decision:
          "The canonical change and the redirects are separate months. Nothing is redirected until the destination matches.",
        impact:
          "This also explains why people cannot find things: the menu points at pages Google buried, and the pages Google chose are linked from nowhere.",
        proof:
          "Airco cutting tips has a real collection and gained clicks last quarter, 4 to 15. The other five brands follow that pattern.",
      },
    ],
    artifacts: [
      {
        phase: "Month 1",
        specialists: "AIA developer, account manager for access",
        title: "Tag canonical and navigation change",
        evidence:
          "191 self-canonical tag pages and a theme that links to them from navigation and filters. Needs Shopify theme access, not yet held.",
        recommendedAction:
          "One template change plus menu edits. Test on regulator gauges. Verify in Search Console as tag pages move into the alternate-canonical bucket.",
        expectedImpact: "One page per category in Google's eyes.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO strategist and content writer",
        title: "Filler-metals collections and copy",
        evidence:
          "MIG wire is a 404, rods are tag-only, TIG rods are split, and the parent collection has a one-line description.",
        recommendedAction:
          "Set the collection targets and product rules, write 150 to 250 words each in buyer vocabulary, publish once admin access is confirmed, then redirect the tag pages.",
        expectedImpact:
          "Each filler-metals subcategory has one URL with quotable copy.",
      },
      {
        phase: "Month 1",
        specialists: "AIA developer and strategist, account manager, Ads vendor",
        title: "Baseline, feed cleanup and access",
        evidence:
          "Free-listing clicks land on cpc-tagged junk URLs. Only the www Search Console property is shared. Feed and Merchant Center admin ownership is unconfirmed.",
        recommendedAction:
          "Capture the baseline first. Confirm admin ownership and clear the change with the vendor. Then fix the feed URL. Ask for the domain property in Search Console.",
        expectedImpact:
          "Every later claim can be proven against a dated baseline, and the best-converting channel reports cleanly.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO strategist and developer",
        title: "Winning-page migrations, redirects and warranty SKUs",
        evidence:
          "Regulator gauges, six brand tip pages and torch kits rank on tag pages. 379 dead product URLs return 404 with no redirect. About 20 warranty SKUs sit in the sitemap and feed.",
        recommendedAction:
          "Match, then redirect, regulator gauges first. Redirect only the dead URLs that had clicks, about 30 to 60. Noindex the warranty SKUs and drop them from the feed.",
        expectedImpact:
          "High-margin pages on sitemap URLs, fewer 404s, no crawl waste on SKUs that cannot rank.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO strategist",
        title: "Cutting equipment tranche and Merchant Center hygiene",
        evidence:
          "129,000 impressions at positions 11 to 20. 35 products with Merchant Center issues, mostly missing weights and mis-classified gloves and tips. Canada store quality shows missing signals on a market worth 7 per cent of clicks.",
        recommendedAction:
          "Optimize the highest-impression cutting pages. Request reviews, add weights, complete the Canada signals once you confirm shipping rates. Sale prices and promotion badges only where MAP allows.",
        expectedImpact:
          "The near-page-one pool moves, not-approved count falls toward zero, Canada reads as a complete store.",
      },
      {
        phase: "Month 3",
        specialists: "AIA SEO strategist, content writer, developer",
        title: "90-day report, blog merges, Lincoln refresh, search scope",
        evidence:
          "You asked for movement in Search Console within 90 days. The Lincoln 180i MP fell from 118 to 60 clicks across five URL variants. Site search returns whole torches for tip queries.",
        recommendedAction:
          "Compare the two clusters and free listings against the baseline. Deliver the blog merges. Refresh the Lincoln pages once the feed cleanup collapses their variants. Scope site search and say whether it is SEO, dev or a separate quote.",
        expectedImpact:
          "A clear answer on whether the structure work reversed the slide.",
      },
    ],
  },
  approval: {
    title: "Decisions and specialists before launch",
    gates: [
      {
        timing: "Kickoff, 11 September 2026",
        label: "Access",
        title: "Grant Shopify theme access, Simprosys access and the domain property",
        detail:
          "Every month-one item stops at access we do not hold: theme access for the canonical change, the feed app for the URL fix, admin for the new collections, and the domain property in Search Console. We need each with a date.",
      },
      {
        timing: "Kickoff, 11 September 2026",
        label: "Vendor",
        title: "Agree the feed tracking change with your Ads vendor",
        detail:
          "The fix relabels UTM values the outside Google Ads vendor may rely on. We need to know who holds admin on Merchant Center and the feed, and the vendor's confirmation that paid campaigns are unaffected.",
      },
      {
        timing: "Kickoff, 11 September 2026",
        label: "Naming",
        title: "Confirm Harris and Victor are two brands",
        detail:
          "The intake transcript records your top tip brands as one name, Harrison Victor. We believe they are Harris and Victor. Nothing is written for the tip pages until this is confirmed.",
      },
      {
        timing: "Before the first report",
        label: "Measurement",
        title: "Agree that success is cluster movement in your own tools",
        detail:
          "Twice-monthly reviews, revenue first. Filler metals and cutting equipment compared against the September baseline. The revenue gap has a supply-side cause, and this engagement is not measured against it.",
      },
      {
        timing: "Before any redirect",
        label: "Structure",
        title: "Match products and copy before redirecting a winning page",
        detail:
          "In eleven categories the tag page is the one that ranks. Redirecting it into an empty collection turns a page-one ranking into nothing. Canonicals in month one, redirects in month two.",
      },
      {
        timing: "Kickoff, 11 September 2026",
        label: "Scope",
        title: "Decide whether technical guide content is in or out",
        detail:
          "Scope says no blogs. But 900 guide-style queries sit on 11,426 impressions you already earn, and your best page is a guide. Your call, not our recommendation.",
      },
    ],
    decisions: [
      {
        label: "Machines are not first, despite being the biggest cluster",
        detail:
          "Machines carry more impressions than any cluster and sit sixth. You attribute the sales drop to Lincoln pricing, MAP and shipping, not visibility. Ranking a machine better does not fix a price problem. The Lincoln pages get refreshed in month three.",
      },
      {
        label: "No third-party numbers in anything you see",
        detail:
          "No search volume, difficulty or traffic estimates appear here. Tool data settled naming questions internally and stays internal. The backlink check was blocked and is kept as an internal diagnostic for November if the clusters have not moved.",
      },
      {
        label: "Stay inside MAP on every Merchant Center lever",
        detail:
          "Sale prices only where the manufacturer allows advertised discounts; promotion badges such as free shipping or bundled extras elsewhere. Nothing changes the advertised price on a MAP item. We need your list of which brands permit discounts.",
      },
      {
        label: "Site search is flagged, not promised",
        detail:
          "You named people not finding things as the top problem. Search relevance is conversion work outside strict SEO scope, so month three scopes it and tells you whether it is SEO, dev or a separate quote. The URL and menu work is the half SEO fixes on its own.",
      },
    ],
  },
};
