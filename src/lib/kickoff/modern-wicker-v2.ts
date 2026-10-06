import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

export const modernWickerKickoffV2: KickoffV2Data = {
  printAriaLabel: "Print Modern Wicker kickoff V2 as PDF",
  footerNote: "Modern Wicker SEO Strategy Kickoff | October 2026",
  cover: {
    clientName: "Modern Wicker",
    subtitle:
      "Your organic search plan for the next three months: make your products reachable, then win back the cushion searches you are losing.",
  },
  meta: [
    { label: "Period", value: "October to December 2026" },
    {
      label: "Business objective",
      value: "Recover organic clicks, starting with replacement cushions, and own the wicker searches",
    },
    {
      label: "Roadmap",
      value: "Open the path to your products first, then recover cushions, then clean up the blog.",
    },
    {
      label: "Platform",
      value: "Shopify, plus Google Merchant Center. Your team ships every change.",
    },
  ],
  summary: {
    title: "Where you stand today",
    objectiveLabel: "Business objective",
    objective:
      "Recover the organic clicks you lost this year, starting with replacement cushions, and make your collection pages win the wicker searches your buyers use.",
    lead:
      "Modern Wicker has the catalogue to win these searches: 2,688 products, 385 collections and 12,400 entries in Merchant Center. The problem is not how much you sell, it is that Google cannot reach most of it:",
    leadBullets: [
      "336 of your 366 collection pages contain no links to any product. The product grid is drawn by an app after the page loads, so Google sees a collection page with nothing in it.",
      "One line in your robots file switches off every crawl protection Shopify gives you, and only for Google. Google knows 12,220 addresses on your site and has indexed 2,890 of them.",
      "287 products are rejected in Merchant Center, 285 of them for one invalid price field, so they cannot appear in Shopping or free listings.",
      "Every page on the site carries an unfinished headline from a popup app, which blurs the signal of the wicker headlines you updated this year.",
    ],
    emphasis:
      "This is a plumbing quarter, not a content quarter. Three rules guide it:",
    emphasisBullets: [
      "Fix the path to your products before writing anything new. Content cannot rank on pages Google never reaches.",
      "Replacement cushions lead the recovery work, because that is the loss you raised and the category where demand is proven.",
      "Everything here is a specification your team deploys, so every item names what to change, where, and how we will verify it.",
    ],
  },
  strategy: {
    title: "3 Month Roadmap",
    gridClassName: "lg:grid-cols-3",
    operatingPrinciple:
      "Point Google at your products, give every page one clear headline and one clear job, then recover the cushion category and tidy the blog.",
    phases: [
      {
        accent: "gold",
        month: "Month 1 · October",
        theme: "Open the path to your products",
        objective:
          "Agree who deploys theme changes and how fast. Remove the robots file rule that cancels Shopify's crawl protections, and stop the tracking sandbox pages being crawled. Specify a server-rendered product list for the collection templates. Remove the junk headline from the popup template and the duplicate collection headlines. Fix the bed collection address. Finish the outdoor term split that was started in June. Clear the 285 price rejections in Merchant Center. Set a policy for promotional pages before the Black Friday page adds another. Freeze a measurement baseline and brief you on it.",
        deliverable:
          "Crawl control specification, collection product list specification, headline fixes, Merchant Center feed repair, promotional URL policy, frozen baseline",
        businessOutcome:
          "Google starts spending its visits on products instead of sandbox and filter pages, and your catalogue becomes reachable for the first time.",
      },
      {
        accent: "blue",
        month: "Month 2 · November",
        theme: "Recover the cushion category",
        objective:
          "Brief the North Cape custom cushion page you have been asking for and link it from the hub, the navigation and the homepage. Give every product page at least four related product links. Map the 740 broken addresses and fix the validation that failed once already. Decide which blog posts stop competing with your collection pages. Merge fourteen near-duplicate posts into three. Clear the return cost flag and the shipping annotation in Merchant Center. Rewrite the titles and descriptions on the collections that carry your impressions.",
        deliverable:
          "North Cape cushion brief, related products specification, redirect map, blog consolidation plan, Merchant Center store quality fixes, collection metadata",
        businessOutcome:
          "The category you are losing gets a page built for the searches people actually make, and your products start passing authority to each other.",
      },
      {
        accent: "gold",
        month: "Month 3 · December",
        theme: "Tidy the estate and prove it worked",
        objective:
          "Consolidate ten blog paths into three and retire the posts that earn nothing, with every old address redirected in one hop. Turn the blog posts that AI answers already cite into pages that send readers to collections and products. Decide which of the 238 collections with no impressions stay indexable. Add the cushion products Google says shoppers are searching for from brands you already sell. Complete the competitor and backlink analysis once access is in place. Verify what shipped and what it moved.",
        deliverable:
          "Blog consolidation live, AI citation to conversion briefs, indexable estate decision, cushion product list, competitive analysis, implementation QA record",
        businessOutcome:
          "A smaller, stronger site where every page earns its place, and a written record of what your team shipped and what it changed.",
      },
    ],
  },
  focus: {
    title: "Six priorities for recovering organic revenue",
    volumeLabel: "Evidence",
    scopeLabel: "Scope impact",
    footnote:
      "Sources: Deep SEO Analysis of 24 September 2026, SEO Action Items workbook, Search Console data through 22 September 2026, live page checks on 366 collection pages and the robots file on 24 September 2026, and Merchant Center diagnostics. Hours: 33.5 across the quarter against a planning capacity of 33.3. Still open: who deploys theme changes and how quickly, and access for the competitor and backlink analysis.",
    items: [
      {
        number: "01",
        title: "Make your products reachable from your collections",
        businessObjective:
          "Give 2,688 products a path Google can follow, so they can rank at all.",
        evidence:
          "336 of 366 collection pages contain zero product links in the page Google receives. Replacement cushions and outdoor patio seating return none, wicker rocking chairs returns one. The grids are drawn by the Searchanise app after the page loads. This is also why the June audit found 3,010 products missing from the site's own map.",
        volume: "336 of 366 collections with no product links",
        scopeImpact: "Written specification plus a scoping call with your developer",
        expectedImpact:
          "Every collection serves at least its first page of products as real links, so product pages start receiving internal link value and recover impressions.",
        recommendedAction:
          "Add a server-rendered product list to the collection template. The app grid can stay as the visible experience, layered over the list. What matters is that real links to product pages exist in the page before any script runs. We write the specification and a reference snippet, and scope the build with your developer.",
        status: "P0 · Month 1 · the highest-value change in the plan",
      },
      {
        number: "02",
        title: "Stop sending Google to pages that cannot sell",
        businessObjective:
          "Spend Google's limited attention on products instead of tracking and filter pages.",
        evidence:
          "Your robots file opens with a rule for Google alone and leaves it empty, which cancels every protection Shopify provides, including the rules for sort, search and cart pages. The result: of a 1,026 page sample Google excluded, 963 are tracking sandbox pages, a family that grew from 2,168 to 2,485 in five weeks. Google knows 12,220 addresses and has indexed 2,890.",
        volume: "12,220 known addresses, 2,890 indexed",
        scopeImpact: "One file, two edits, one deploy",
        expectedImpact:
          "Within four weeks the excluded and duplicate buckets stop growing and start to fall, and crawling reaches product pages.",
        recommendedAction:
          "Delete the custom Google rule and its empty line, and add one rule that keeps the tracking sandbox addresses out. Ship both together and nothing else in the same deploy, so the before and after proves the change. This is the cheapest item in the plan and it gates everything else.",
        status: "P0 · Month 1 · first ticket after the deployment route is agreed",
      },
      {
        number: "03",
        title: "Rebuild replacement cushions, the loss you raised",
        businessObjective:
          "Recover the category you told us is falling, where demand is already proven.",
        evidence:
          "Cushions are the largest declining category on the site. North Cape sells custom replacement cushions and there is no page for them. Separately, Google reports 190 chair and sofa cushion products that United States shoppers search for, from brands you already sell, that the store does not list.",
        volume: "190 cushion products in proven demand",
        scopeImpact: "One new page in Month 2, the product list in Month 3",
        expectedImpact:
          "A page that ranks for custom cushion and North Cape cushion searches, and direct coverage of demand currently going to competitors.",
        recommendedAction:
          "We brief the North Cape custom cushion page and the links into it from the cushion hub, the navigation dropdown and the homepage. Your team writes and builds it. In Month 3 we pull and map the 190 product list so you can decide what to add.",
        status: "P1 · Month 2 and Month 3",
      },
      {
        number: "04",
        title: "Put 287 rejected products back in Shopping",
        businessObjective:
          "Stop losing shelf space on the surface where buyers compare before they click.",
        evidence:
          "287 products are not approved in Merchant Center and 285 of them are blocked by an invalid price value, concentrated in fabric and finish swatches. Separately, return cost is flagged incomplete, and Google is still recommending a free shipping offer you have been running since July.",
        volume: "287 products rejected, 285 for one cause",
        scopeImpact: "Feed repair in Month 1, store settings in Month 2",
        expectedImpact:
          "Rejections fall to near zero, the approved count stops sliding week on week, and your shipping offer shows on your listings.",
        recommendedAction:
          "We specify the price fix at the source rather than product by product, and the swatch handling that caused most of it. Then clear the return cost flag and publish the shipping annotation so listings reflect what you already offer.",
        status: "P0 · Month 1 · feed. P1 · Month 2 · store quality",
      },
      {
        number: "05",
        title: "Give every page one headline that describes it",
        businessObjective:
          "Make the wicker headline work you did this year start counting.",
        evidence:
          "Every page on the site renders an unfinished template placeholder as its main headline, injected by a popup app. The homepage carries three main headlines as a result. Four collections also duplicate their own headline. Twenty collections carry page titles over 70 characters, including the second most seen page on the site, so the words that make them distinct are cut off in search results.",
        volume: "Every page affected, 20 titles cut off",
        scopeImpact: "One template change, then metadata in Months 1 and 2",
        expectedImpact:
          "One clear headline per page, and titles that survive to the search result with the wicker terms intact.",
        recommendedAction:
          "Change the popup headline element to ordinary text so the visible behaviour does not change, remove the duplicate collection headlines, then rewrite titles to fit inside 60 characters and descriptions inside 155, starting with the collections that carry your impressions.",
        status: "P0 · Month 1 · headlines. P1 · Month 2 · the rest of the metadata",
      },
      {
        number: "06",
        title: "Make the blog send visitors, not just citations",
        businessObjective:
          "Turn the content AI answers already trust into visits to your collections.",
        evidence:
          "Forty-nine blog posts produce 57 percent of your appearances in AI answers, while blog clicks fell 55.7 percent. The blog is spread across ten separate blog paths, two of them empty, and half of the 72 posts earn nothing. Four posts compete with collection pages for commercial searches and contribute one click between them.",
        volume: "57 percent of AI appearances, clicks down 55.7 percent",
        scopeImpact: "Consolidation in Month 2, migration and briefs in Month 3",
        expectedImpact:
          "Three blog paths instead of ten, around 29 posts instead of 72, each one earning, and the cited posts linking into collections and products.",
        recommendedAction:
          "Merge fourteen near-duplicate posts into three, point the four competing posts at the collections that can convert, consolidate the blog paths with every old address redirected in one hop, and brief the cited posts to link into the matching collections and products.",
        status: "P1 and P2 · Months 2 and 3",
      },
    ],
  },
  execution: {
    title: "How the quarter runs",
    artifactsTitle: "What you receive, month by month",
    examples: [
      {
        eyebrow: "The change that unlocks the rest",
        title: "Collections that actually link to your products",
        currentLabel: "What Google sees today",
        current: [
          "336 of 366 collection pages with no product links at all",
          "Replacement cushions and outdoor patio seating: zero product links",
          "2,688 products reachable only through search and the sitemap",
        ],
        targetLabel: "What changes",
        target: [
          "Each collection serves its first page of products as real links",
          "The app grid stays as the shopper experience, layered over the list",
          "Product pages start receiving internal link value from their category",
        ],
        decision:
          "Confirm who builds this, Rey or another developer, and the turnaround we should plan around. The specification is ours, the deploy is yours.",
        impact:
          "This is the mechanism behind almost every indexing symptom in the audit, including the 3,010 products missing from your own sitemap in June.",
        proof:
          "Product links counted on the 37 collections that carry 95 percent of your clicks, with scripts disabled, before and after the change.",
      },
      {
        eyebrow: "Replacement cushions",
        title: "The category you raised gets its own page and its own products",
        currentLabel: "Where it stands",
        current: [
          "Cushions are the largest declining category on the site",
          "North Cape custom cushions have no page at all",
          "190 cushion products in proven demand are not listed",
        ],
        targetLabel: "Where it goes",
        target: [
          "A North Cape custom cushion page, linked from the hub, the menu and the homepage",
          "The cushion hub serving crawlable links to every cushion product",
          "A mapped list of the 190 products, for you to decide what to add",
        ],
        decision:
          "Confirm which cushion brands you want to lead with, so the page and the product list follow your margins rather than our guess.",
        impact:
          "Demand that currently goes to competitors starts landing on pages you own, in the category you asked us to recover first.",
        proof:
          "Search Console clicks and positions for custom cushion and brand cushion searches, month over month.",
      },
    ],
    artifacts: [
      {
        phase: "Month 1",
        specialists: "Account manager with you",
        title: "Deployment route and turnaround",
        evidence:
          "Seven of the ten first-cycle fixes are theme or app changes, and our team holds no theme access.",
        recommendedAction:
          "Agree in writing who deploys theme changes, whether we can hold a theme editor login for the crawl file specifically, and what turnaround to expect on a one line change.",
        expectedImpact:
          "Every specification has a named deployer and a date, so a slipped fix is visible rather than silent.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO",
        title: "Crawl control specification",
        evidence:
          "The custom Google rule cancels Shopify's crawl protections, and tracking sandbox pages grew from 2,168 to 2,485 in five weeks.",
        recommendedAction:
          "A two edit specification for the robots file, deployed on its own, then verified by re-fetching the file and re-exporting the index report at four weeks.",
        expectedImpact:
          "Crawling returns to products, and the excluded and duplicate buckets start to fall.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO with your developer",
        title: "Collection product list specification",
        evidence:
          "336 of 366 collections serve no product links.",
        recommendedAction:
          "A written specification, a reference snippet, and one scoping call with your developer so the build is estimated before it is committed.",
        expectedImpact:
          "Your catalogue becomes crawlable, which is the condition for every ranking gain in this plan.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO and Merchant Center specialist",
        title: "Headline fixes, feed repair and promotional policy",
        evidence:
          "An unfinished headline on every page, 285 price rejections, and seventeen promotional collections live with a Black Friday page about to add another.",
        recommendedAction:
          "Popup headline changed to ordinary text, duplicate collection headlines removed, price rejections fixed at source, and a one page policy for promotional URLs.",
        expectedImpact:
          "Your products return to Shopping, your headlines describe your pages, and Q4 does not leave new orphan pages behind.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO and account manager",
        title: "Frozen baseline and briefing",
        evidence:
          "There is no stored baseline to prove the crawl fixes worked, and this quarter's headline numbers read worse than the arithmetic says.",
        recommendedAction:
          "Capture and store the baseline, then walk you through what improved before the first report of the new roadmap.",
        expectedImpact:
          "Every later claim about recovery is provable against stored evidence rather than argued.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO and content writer",
        title: "Cushion recovery and related products",
        evidence:
          "No North Cape custom cushion page, and product pages link to one other product across a 2,688 product catalogue.",
        recommendedAction:
          "The cushion page brief and its internal links, plus a specification for at least four related product links on every product page.",
        expectedImpact:
          "The declining category gets a page built for real demand, and link value moves between products instead of stopping.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO",
        title: "Broken address map and blog decisions",
        evidence:
          "740 addresses return errors and a fix validation already failed once. Fourteen near-duplicate posts split their impressions, and four posts compete with collections.",
        recommendedAction:
          "A redirect map your team imports, the merge plan for the duplicate posts, and the decision on which posts stop competing with collection pages.",
        expectedImpact:
          "Validation passes, and commercial searches consolidate onto the pages that can convert them.",
      },
      {
        phase: "Month 3",
        specialists: "AIA SEO and content writer",
        title: "Blog consolidation and AI citation briefs",
        evidence:
          "Ten blog paths, two empty, half of 72 posts earning nothing, while 49 posts carry 57 percent of your AI answer appearances.",
        recommendedAction:
          "The consolidation mapping and deployment order, so no new broken addresses appear, plus briefs that turn cited posts into pages that link to collections and products.",
        expectedImpact:
          "A smaller blog that earns, and citations that start sending visitors.",
      },
      {
        phase: "Month 3",
        specialists: "AIA SEO and account manager",
        title: "Estate decision, cushion products and verification",
        evidence:
          "238 of 366 collections recorded no impressions in three months. The competitor and backlink analysis could not be completed without access.",
        recommendedAction:
          "A recommendation on which collections stay indexable, the mapped list of 190 cushion products, the competitive analysis once access is in place, and a written record of what your team shipped and whether it worked.",
        expectedImpact:
          "A focused site, a shopping list based on confirmed demand, and evidence of what the quarter moved.",
      },
    ],
  },
  approval: {
    title: "How we work together",
    gates: [
      {
        timing: "Before anything ships",
        label: "Deployment",
        title: "Your team deploys every change in this plan",
        detail:
          "We write the specification, your developer ships it. Month 1 starts by agreeing who that is and what turnaround to expect.",
      },
      {
        timing: "Before the crawl fix",
        label: "Sequence",
        title: "The crawl file ships on its own",
        detail:
          "No other theme change rides along with it, so the before and after proves which change worked.",
      },
      {
        timing: "Before any redirect",
        label: "No broken links",
        title: "Every old address resolves in one hop",
        detail:
          "The blog consolidation is the one place where a mistake creates errors at scale, so the mapping is checked before it is deployed.",
      },
      {
        timing: "Before writing starts",
        label: "Approval",
        title: "You approve each content item",
        detail:
          "The North Cape cushion page in Month 2, the blog merges and the citation briefs in Month 3.",
      },
      {
        timing: "At four weeks",
        label: "Verification",
        title: "Two open questions get answered, not carried",
        detail:
          "Some crawl symptoms can only be read four weeks after the robots fix. Either they close as consequences of it, or a second cause is named and scoped.",
      },
    ],
    decisions: [
      {
        label: "Crawl before content",
        detail:
          "Writing for pages Google cannot reach would waste the quarter. The path to your products comes first.",
      },
      {
        label: "Cushions lead the recovery",
        detail:
          "It is the category you raised, the largest decline, and the one with demand we can point at.",
      },
      {
        label: "The blog gets smaller",
        detail:
          "Around 29 posts instead of 72, kept on three paths instead of ten. Nothing earning is deleted, and you approve the retirement list.",
      },
      {
        label: "Promotional pages need a rule",
        detail:
          "Seventeen seasonal collections are live and indexable. One promotional address, reused each season, instead of a new one every campaign.",
      },
      {
        label: "We verify what you ship",
        detail:
          "Since nothing here is deployed by us, the quarter ends with a written check of what was implemented and whether it worked.",
      },
      {
        label: "Outside this plan",
        detail:
          "Link building execution and new collection content wait for the next quarter, once the competitor and backlink analysis exists and the crawl path is proven.",
      },
    ],
  },
};
