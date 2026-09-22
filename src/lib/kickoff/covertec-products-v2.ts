import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

export const covertecProductsKickoffV2: KickoffV2Data = {
  printAriaLabel: "Print CoverTec Products kickoff V2 as PDF",
  footerNote: "CoverTec Products SEO Strategy Kickoff | September 2026",
  cover: {
    clientName: "CoverTec Products",
    subtitle:
      "Your organic search plan for the next three months: win back what you already earned, then grow the house made lines.",
  },
  meta: [
    { label: "Period", value: "September to November 2026" },
    {
      label: "Business objective",
      value: "Grow website revenue at least 25 percent a year",
    },
    {
      label: "Roadmap",
      value: "Stop the leaks first, recover tile and vinyl second, grow concrete third.",
    },
    {
      label: "Platform",
      value: "WordPress and WooCommerce, plus the Google Merchant Center feed.",
    },
  ],
  summary: {
    title: "Where you stand today",
    objectiveLabel: "Business objective",
    objective:
      "Grow website revenue at least 25 percent a year, led by the sealers and coatings you make yourselves.",
    lead:
      "CoverTec is not starting from zero. The site earns about 15,900 Google clicks a quarter, and your how-to guides show up about 391,000 times in Google's AI answers. What holds it back:",
    leadBullets: [
      "61 of your 216 products (28 percent) cannot show in Google Shopping and free listings in the United States, 58 of them because the price in the feed does not match the price on the page.",
      "Only about 27 percent of the pages Google knows are indexed. Google spends its visits on feed links and sort filters instead of products.",
      "Your best guides and hero products slipped one to five positions in the last three months. The paver sealing guide went from 1,365 to 580 clicks.",
      "Up to five pages compete for the same tile sealer searches, so none of them reaches the top three.",
    ],
    emphasis:
      "This is a recovery plan, not a rebuild. Three rules guide it:",
    emphasisBullets: [
      "Fix what already costs sales before writing anything new: the Shopping feed comes first.",
      "Every page gets one job before we rewrite it, so our own pages stop competing with each other.",
      "Your team approves every piece of copy before it goes live, and no old link breaks along the way.",
    ],
  },
  strategy: {
    title: "3 Month Roadmap",
    gridClassName: "lg:grid-cols-3",
    operatingPrinciple:
      "Reopen the products Google is hiding, clear the crawl clutter, give every tile page one clear job, then build the concrete hub on a clean foundation.",
    phases: [
      {
        accent: "gold",
        month: "Month 1 · September",
        theme: "Stop the leaks",
        objective:
          "Fix the price mismatch that blocks 61 products in Shopping. Remove the old 2013 sitemaps from Search Console and point every internal link at the secure www site. Stop Google crawling feed links and sort filters. Map the 81 broken addresses to live pages. Audit the spam backlinks. Decide which tile page owns which search. Refresh the two guides that lost the most clicks.",
        deliverable:
          "Full catalog eligible in Shopping, cleaner crawl, broken links redirected, tile page roles set, two guides refreshed",
        businessOutcome:
          "Your products are back where buyers see them first, and Google starts spending its time on pages that can sell.",
      },
      {
        accent: "blue",
        month: "Month 2 · October",
        theme: "Recover tile and vinyl",
        objective:
          "Rewrite the tile sealers category, the ceramic and porcelain landing page, GlazeGuard, VinylGuard gloss and the laminate floor sealer, each in its own role. Merge the old blog category pages into the matching product categories. Map the anti slip pages into one. Sharpen search titles on pages that already sit just below the top three. Submit the disavow file after review.",
        deliverable:
          "Five tile and vinyl pages refreshed, duplicate category pages merged, anti slip plan approved, disavow submitted",
        businessOutcome:
          "Your house made tile and vinyl sealers move from positions 4 to 6 toward the top three.",
      },
      {
        accent: "gold",
        month: "Month 3 · November",
        theme: "Grow concrete",
        objective:
          "Build the concrete sealers hub for your penetrating, topical and wet look sealers. Launch one anti slip page in place of four weak ones. Refresh StrongSeal Wetlook, the oil off concrete guide and the ceramic tile sealer guide. Link the strongest pages to the priority products. Clean up mixed case addresses and prepare the link building target list.",
        deliverable:
          "Concrete hub live, one anti slip page, three refreshes, internal links placed, link target list ready, 90-day report",
        businessOutcome:
          "Concrete, your largest growth opportunity, has a page that can compete, and you see what the quarter moved.",
      },
    ],
  },
  focus: {
    title: "Six priorities for growing revenue",
    volumeLabel: "Evidence",
    scopeLabel: "Scope impact",
    footnote:
      "Sources: Deep SEO Analysis of 15 September 2026, SEO Action Items workbook, full-site keyword research of 16 September 2026 (Search Console data; Ahrefs figures are third-party estimates), Merchant Center diagnostics for the last 28 days, and the sales handoff of 9 September 2026. Still open: your top products and priority lines, the business KPIs, named competitors, the be careful list of cleaners and resold items, the grout sealer decision, and a working WordPress login for our team.",
    items: [
      {
        number: "01",
        title: "Put every product back in Google Shopping",
        businessObjective:
          "Keep your products on the surface that converts best, above the organic results.",
        evidence:
          "61 of 216 products are blocked in the United States: 58 for a price mismatch between the feed and the product page, the rest for a missing price. Free listings earned 586 clicks in 28 days at an average position of 1.9, even with 28 percent of the catalog missing.",
        volume: "61 of 216 products blocked",
        scopeImpact: "Feed price repair, then a monthly eligibility check",
        expectedImpact:
          "The full catalog can show in free listings and Shopping in the United States.",
        recommendedAction:
          "Export the 61 products and compare feed price, page price and the price in the product data for each. Fix the source, usually sale price dates, tax handling or kit and variation pricing. Fill the missing prices, refresh the feed and re-check diagnostics. Checked every month after that.",
        status: "P0 · Month 1 · first ticket",
      },
      {
        number: "02",
        title: "Let Google spend its visits on products",
        businessObjective:
          "Get more of your real product and guide pages into Google's index.",
        evidence:
          "Google knows about 1,777 addresses but the sitemap lists 424. 746 pages are crawled but not indexed, mostly feed links, sort filters and pagination. The old http sitemap from 2013 and a non www sitemap are still submitted, and the old http homepage still shows for brand searches. 81 addresses return a 404.",
        volume: "About 27 percent of known pages indexed",
        scopeImpact: "Crawl rules, sitemap cleanup, 404 redirects",
        expectedImpact:
          "Only the secure www homepage shows for your brand, and the crawled but not indexed pile starts to shrink.",
        recommendedAction:
          "Remove the old sitemap submissions. Block feed links and sort filters only, tested against real pages before going live. Replace old http links inside the site. Redirect each broken address that still has links or traffic to its closest live page.",
        status: "P0 · Month 1",
      },
      {
        number: "03",
        title: "Win back the guides Google and AI answers rely on",
        businessObjective:
          "Keep the guides that bring contractors and homeowners to your products.",
        evidence:
          "In three months the paver sealing guide fell from 1,365 to 580 clicks, the matte tile to glossy guide from 1,869 to 1,299, and the ceramic tile sealer guide from 300 to 143. These guides carry most of your 391,000 AI answer impressions, a quarter of all your impressions.",
        volume: "391,000 AI answer impressions",
        scopeImpact: "Two guides in Month 1, one in Month 3",
        expectedImpact:
          "The guides return to page one top five and keep their place in AI answers.",
        recommendedAction:
          "Refresh each guide against today's results and the keyword research: current steps, the right CoverTec product, an FAQ that matches what people ask, a sharper title, and a link to the matching product and category. You approve the copy before it goes live.",
        status: "P1 · Month 1 and Month 3 · after your approval",
      },
      {
        number: "04",
        title: "Give each tile and vinyl page one job",
        businessObjective:
          "Move GlazeGuard and VinylGuard, your house made core, into the top three.",
        evidence:
          "Five pages compete for tile sealer and ceramic tile sealer. Tile sealer (about 2,000 searches a month) ranks around 9, porcelain tile sealer around 11.6, and the ceramic and porcelain page fell from 774 to 341 clicks. VinylGuard gloss dropped from 1,142 to 716 clicks and the laminate floor sealer from 1,402 to 985.",
        volume: "5 pages competing for one search",
        scopeImpact: "Page roles in Month 1, five rewrites in Month 2",
        expectedImpact:
          "One clear page per search, with GlazeGuard and VinylGuard pages climbing into the top three.",
        recommendedAction:
          "Set the roles first: the category for shoppers comparing, the porcelain page for porcelain questions, the product page for GlazeGuard itself. Then rewrite each page to its role and link the others to it. Same approach for VinylGuard and the laminate sealer.",
        status: "P1 · roles Month 1 · copy Month 2",
      },
      {
        number: "05",
        title: "Consolidate the pages that split your rankings",
        businessObjective:
          "Turn several weak pages into one page that can rank.",
        evidence:
          "Blog category archives compete with WooCommerce product categories, and the weaker archive often wins. Anti slip is spread across four categories, two products and two blog posts, earning almost nothing across 217 keywords and about 7,660 searches a month.",
        volume: "Anti slip: 217 keywords, near zero clicks",
        scopeImpact: "Category merge in Month 2, anti slip page in Month 3",
        expectedImpact:
          "One authoritative page per topic, and the anti slip cluster finally earns clicks.",
        recommendedAction:
          "Redirect each blog category archive to its product category and remove it from menus. Pick one primary anti slip page, merge the overlapping posts into it and redirect the rest. Products stay products. Nothing with traffic is deleted.",
        status: "P1 · Month 2 and Month 3",
      },
      {
        number: "06",
        title: "Build concrete on a clean foundation",
        businessObjective:
          "Open the largest growth opportunity for the sealers you make.",
        evidence:
          "Concrete is the biggest volume on the site: 49 priority terms and about 43,850 searches a month. Concrete sealer (about 21,000 a month) ranks around 15.7, and wet look concrete sealer does not rank at all. There is no strong concrete landing page. The backlink profile also carries spam and link network anchors that can hold rankings down.",
        volume: "About 43,850 searches a month",
        scopeImpact: "Concrete hub and refreshes in Month 3, link cleanup from Month 1",
        expectedImpact:
          "A concrete sealer hub that can compete for the head term, backed by a clean catalog and a clean link profile.",
        recommendedAction:
          "Build the hub for penetrating, topical and wet look sealers, refresh StrongSeal Wetlook and the oil off concrete guide. Garage and epoxy coatings stay out. Audit the spam links in Month 1 and submit a disavow after review in Month 2.",
        status: "P2 · Month 3 · links from Month 1",
      },
    ],
  },
  execution: {
    title: "What changes, who decides, and how we prove it",
    artifactsTitle: "Evidence, action, impact, and specialists",
    examples: [
      {
        eyebrow: "The fastest revenue",
        title: "The Shopping feed comes before any new content",
        currentLabel: "What is live today",
        current: [
          "61 of 216 products blocked in the United States",
          "58 blocked because the feed price and the page price do not match",
          "Free listings already earn clicks at an average position of 1.9",
        ],
        targetLabel: "What changes in Month 1",
        target: [
          "Each blocked product checked: feed price, page price and product data price",
          "The cause fixed at the source, not product by product by hand",
          "Diagnostics re-checked every month and reported",
        ],
        decision:
          "Tell us if Google Shopping ads run from the same feed, so paid and organic stay in sync.",
        impact:
          "Every product you sell can be found where buyers compare prices, with no new page written.",
        proof:
          "Merchant Center approved and blocked counts before and after, in the monthly report.",
      },
      {
        eyebrow: "Tile sealers",
        title: "One page per search, so GlazeGuard stops competing with itself",
        currentLabel: "How it works today",
        current: [
          "Five pages compete for tile sealer and ceramic tile sealer",
          "Tile sealer ranks around 9, porcelain tile sealer around 11.6",
          "The ceramic and porcelain page lost more than half its clicks",
        ],
        targetLabel: "How it will work",
        target: [
          "Tile sealers category answers shoppers comparing products",
          "The ceramic and porcelain page answers porcelain questions",
          "The GlazeGuard product page sells GlazeGuard, and all three link to each other",
        ],
        decision:
          "Confirm your top five and top ten products so the rewrites favor the lines with the best margin.",
        impact:
          "Your highest-margin house made line moves toward the top three for the searches that already find you.",
        proof:
          "Search Console positions and clicks for the tile sealer terms, month over month and year over year.",
      },
    ],
    artifacts: [
      {
        phase: "Month 1",
        specialists: "Account manager with you",
        title: "Goals, products and access",
        evidence:
          "The sales handoff did not confirm KPIs, competitors, priority product lines or your top products. Our team's WordPress login is not working yet.",
        recommendedAction:
          "Confirm goals and KPIs, the top 5 and top 10 products, the be careful list of cleaners and resold items, and a working WordPress login.",
        expectedImpact:
          "The plan is weighted to the products you make and want to grow.",
      },
      {
        phase: "Month 1",
        specialists: "Merchant Center specialist",
        title: "Shopping feed price repair",
        evidence:
          "61 products blocked, 58 of them for a price mismatch.",
        recommendedAction:
          "Each blocked product compared and fixed at the source, missing prices filled, feed refreshed and re-checked.",
        expectedImpact:
          "The full catalog is eligible to show again in the United States.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO and AIA developer",
        title: "Crawl and sitemap cleanup",
        evidence:
          "Old 2013 and non www sitemaps still submitted, feed links crawled as pages, 81 broken addresses.",
        recommendedAction:
          "Old sitemaps removed, feed and sort rules added and tested, internal http links replaced, broken addresses redirected.",
        expectedImpact:
          "Google spends its time on products and guides, and old links land on live pages.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO and content writer",
        title: "Tile page roles and two guide refreshes",
        evidence:
          "Five pages compete for tile sealer. The paver and matte tile guides lost the most clicks.",
        recommendedAction:
          "One role per tile page. The paver wet look guide and the matte tile glossy guide refreshed after your approval.",
        expectedImpact:
          "Your two strongest guides start to recover, and the tile rewrites have a clear map.",
      },
      {
        phase: "Month 2",
        specialists: "Content writer and AIA SEO",
        title: "Tile and vinyl page rewrites",
        evidence:
          "GlazeGuard, VinylGuard and the laminate sealer pages lost clicks and positions.",
        recommendedAction:
          "Five pages rewritten to their roles: tile sealers category, ceramic and porcelain page, GlazeGuard, VinylGuard gloss and laminate floor sealer.",
        expectedImpact:
          "The house made tile and vinyl lines move toward the top three.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO and AIA developer",
        title: "Category merge, titles and disavow",
        evidence:
          "Blog categories compete with product categories. 756 searches sit at positions 4 to 20 with low click through. Spam anchors in the backlink profile.",
        recommendedAction:
          "Blog categories redirected to product categories, sharper titles on pages close to the top, anti slip plan mapped, disavow submitted after review.",
        expectedImpact:
          "Rankings stop splitting, and pages already close to the top earn more clicks.",
      },
      {
        phase: "Month 3",
        specialists: "Content writer and AIA SEO",
        title: "Concrete hub and anti slip page",
        evidence:
          "About 43,850 concrete searches a month with no strong landing page. Anti slip spread across eight pages.",
        recommendedAction:
          "Concrete sealers hub built, StrongSeal Wetlook and the oil off concrete guide refreshed, one anti slip page with the rest redirected, ceramic tile sealer guide refreshed.",
        expectedImpact:
          "Your growth line has a page that can compete, and anti slip earns clicks for the first time.",
      },
      {
        phase: "Month 3",
        specialists: "AIA SEO and AIA developer",
        title: "Internal links, links plan and the 90-day read",
        evidence:
          "Priority products sit at positions 6 to 16 with few links from your strongest pages. Specialist competitors earn links CoverTec could earn too.",
        recommendedAction:
          "Links added from the homepage and top guides to priority products, mixed case addresses fixed, a link building target list prepared, quarter read year over year.",
        expectedImpact:
          "Priority pages move up without new content, and you see what the quarter moved.",
      },
    ],
  },
  approval: {
    title: "Decisions and specialists before launch",
    gates: [
      {
        timing: "Kickoff",
        label: "Goals",
        title: "Confirm the business KPIs and the 25 percent revenue goal in writing",
        detail:
          "Includes the competitors you watch and who approves the work on your side.",
      },
      {
        timing: "Kickoff",
        label: "Products",
        title: "Share your top 5 and top 10 products and your priority lines",
        detail:
          "Also the be careful list: cleaners and resold items we should not push.",
      },
      {
        timing: "Kickoff",
        label: "Access",
        title: "A working WordPress login for our team",
        detail:
          "Every site change and every content implementation waits on it.",
      },
      {
        timing: "Before the feed fix",
        label: "Shopping",
        title: "Tell us if Shopping ads use the same feed",
        detail:
          "The price fix touches the feed that ads may also use, so paid and organic change together.",
      },
      {
        timing: "Before any copy",
        label: "Approval",
        title: "You approve each content list before writing starts",
        detail:
          "Two guides in Month 1, five tile and vinyl pages in Month 2, the concrete and anti slip pages in Month 3.",
      },
      {
        timing: "Before the disavow",
        label: "Links",
        title: "The disavow list is reviewed before it is submitted",
        detail:
          "Legitimate links like YouTube, Wikipedia, the BBB and Yellow Pages are never included.",
      },
      {
        timing: "Before any redirect",
        label: "Sequence",
        title: "The page that stays is ready before others point to it",
        detail:
          "Broken links first, then categories, then anti slip, so no redirect chains form.",
      },
      {
        timing: "Before the first report",
        label: "Measurement",
        title: "Revenue in GA4 matches WooCommerce",
        detail:
          "The tracking repair already in progress lets us report organic revenue against the 25 percent goal.",
      },
    ],
    decisions: [
      {
        label: "The feed comes first",
        detail:
          "Reopening 61 blocked products is the fastest revenue in the plan, so it is the first ticket.",
      },
      {
        label: "House made lines lead",
        detail:
          "GlazeGuard, VinylGuard and the concrete sealers get the rewrites. Resold items are not pushed.",
      },
      {
        label: "Grout sealer is your call",
        detail:
          "About 15,000 searches a month, but no dedicated grout product. Position GlazeGuard for grout, add a grout product, or leave it.",
      },
      {
        label: "Garage and epoxy coatings stay out",
        detail:
          "Along with cleaners and the most competitive paver sealer term, unless you tell us otherwise at kickoff.",
      },
      {
        label: "No old link breaks",
        detail:
          "Every redirect is ready before a page moves, merges or retires. Nothing with traffic is deleted.",
      },
      {
        label: "Outside this plan",
        detail:
          "Link outreach execution, removing thin pages (the list is prepared in Month 3 for your approval) and the remaining title rewrites move to the next quarter.",
      },
    ],
  },
};
