import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

/**
 * Sources: CanCooker 3-Month SEO Road Map, Keyword Strategy v2 executive
 * summary, and live verification log, all August 2026.
 */
export const cancookerKickoffV2: KickoffV2Data = {
  printAriaLabel: "Print CanCooker kickoff as PDF",
  footerNote: "CanCooker SEO Strategy Kickoff · September to November 2026",
  cover: {
    clientName: "CanCooker",
    subtitle: "Your organic search strategy for the next three months.",
  },
  meta: [
    { label: "Window", value: "September to November 2026" },
    {
      label: "Primary objective",
      value: "Move non-brand demand from recipes into product discovery",
    },
    { label: "Roadmap", value: "Three months, 13 projects" },
    { label: "Platform", value: "Shopify" },
  ],
  summary: {
    title: "What changes first",
    objectiveLabel: "Business objective",
    objective:
      "Turn CanCooker's organic visibility into a commercial acquisition channel by fixing the templates that weaken every page, moving page-two product terms onto stronger buying paths, and building the category and occasion pages customers search before they know the brand.",
    lead: "CanCooker already has organic demand, but the wrong part of the site is carrying it. The keyword strategy found 63,853 clicks and 3.24M impressions over 12 months, while the recipe blog competes against major food publishers and non-brand product coverage remains close to zero.",
    emphasis:
      "The sequence is deliberate: take the fastest product wins, repair the Shopify templates that blur page meaning, then build seasonal and category destinations that match how new customers search.",
  },
  strategy: {
    title: "Three months of SEO execution",
    gridClassName: "lg:grid-cols-3",
    operatingPrinciple:
      "Prioritize work that either fixes a shared Shopify root cause or moves existing product-intent visibility closer to revenue.",
    phases: [
      {
        accent: "gold",
        month: "Month 1",
        theme: "Fix the template, take the fast wins",
        objective:
          "Optimize page-two product terms, fix the cart and recipe heading defects, repair the corrupted title, publish the tailgating hub, and verify Core Web Vitals before committing developer budget.",
        businessOutcome:
          "Products that already show up in search start moving toward page one while every template gets a cleaner topic signal.",
        deliverable:
          "Ten product pages optimized, one shared heading deploy shipped and QA'd, one live title corrected, one tailgating hub published, and speed evidence confirmed.",
      },
      {
        accent: "blue",
        month: "Month 2",
        theme: "Stop the duplication, own the season",
        objective:
          "Apply the recipe archive and pagination indexation fix, clean collection headings and empty categories, write commercial metadata, and publish the deer and hunting season hub.",
        businessOutcome:
          "Google stops spending crawl attention on duplicate archives, and CanCooker has seasonal landing pages live while demand exists.",
        deliverable:
          "Archive pagination rules deployed, collection headings cleaned, empty category decisions recorded, about 50 commercial descriptions written, and one deer season hub published.",
      },
      {
        accent: "gold",
        month: "Month 3",
        theme: "Scale metadata, build the category gap",
        objective:
          "Build the steam cooker and outdoor cooker category page, scale recipe metadata, clean title construction and redirects, and scope the fish fry cluster for the next cycle.",
        businessOutcome:
          "The site gains a commercial page for pre-brand category searches and prepares the largest next-quarter opportunity without rushing it.",
        deliverable:
          "One category page built, recipe metadata scaled by impression priority, title and redirect hygiene ticket shipped, and fish fry briefs ready for next quarter.",
      },
    ],
  },
  focus: {
    title: "Four priorities for organic growth",
    volumeLabel: "Measured volume",
    scopeLabel: "Scope",
    footnote:
      "Figures come from the August 2026 keyword strategy, three-month road map, and live verification log. Click uplift is directional modelling, not a forecast.",
    items: [
      {
        number: "01",
        status: "Month 1 · Fast revenue path",
        title: "Move page-two product terms toward page one",
        businessObjective:
          "CanCooker has product pages already ranking close to the click zone, which makes on-page optimization the fastest useful work in the plan.",
        volume: "796 non-brand queries at positions 4 to 20",
        scopeImpact: "Ten existing product pages first",
        evidence:
          "The keyword strategy models roughly 66,800 additional visits a year if the broader striking-distance set moves to position 3. The most actionable terms include jerky gun, portable griddle, pepper seasoning, all purpose seasoning, batter bowl, and steampot.",
        recommendedAction:
          "Rewrite titles, H1s, opening copy, and internal links on the ten product pages already eligible to move.",
        expectedImpact:
          "Buying-intent pages gain stronger relevance without waiting for new development or net-new content production.",
      },
      {
        number: "02",
        status: "Month 1 · Shared template fix",
        title: "Fix headings before scaling content",
        businessObjective:
          "Every future page improvement depends on Google and customers seeing the actual page topic first.",
        volume: "832 pages plus 528 recipe pages",
        scopeImpact: "Two Shopify theme edits",
        evidence:
          "The cart drawer places three headings before the real page heading on all 832 pages, and 201 of 202 sampled recipe pages had no H1. Recipes represent 76 percent of the indexable site.",
        recommendedAction:
          "Convert cart drawer labels from headings to ordinary text and promote the recipe name to the recipe page H1 in one deploy.",
        expectedImpact:
          "A small theme release removes 1,664 flagged rows and gives recipe content a usable page topic before metadata and hub work scales.",
      },
      {
        number: "03",
        status: "Months 1-2 · Seasonal demand",
        title: "Publish occasion hubs while the seasons are live",
        businessObjective:
          "CanCooker's strongest seasonal uses need pages that route search demand into products instead of leaving the blog organized dish by dish.",
        volume: "21,290 tailgating searches per month",
        scopeImpact: "Tailgating hub and deer season hub",
        evidence:
          "The road map uses Email Marketing Strategy Kick Off input that CanCooker's revenue season runs tailgating, then deer and hunting season, then the holidays. The camping and outdoor meals cluster totals 52,160 searches a month at 1.2 percent coverage.",
        recommendedAction:
          "Publish a tailgating hub in Month 1 and a deer and hunting season hub in Month 2, each linking existing recipes to suitable products.",
        expectedImpact:
          "Search and email support the same buying moments, with landing pages live before seasonal demand passes.",
      },
      {
        number: "04",
        status: "Months 2-3 · Crawl and category gap",
        title: "Stop duplicate archive waste and build the missing category page",
        businessObjective:
          "Customers who do not know the brand search product categories, but Google is also being offered duplicate archive pages instead of a clear commercial destination.",
        volume: "Steamer pot 7,000 searches per month",
        scopeImpact: "81 tag pages, 43 paginated listings, one category build",
        evidence:
          "Recipe tag pages and paginated listings self-canonicalize, share the heading Recipe, and have no meta description. The keyword strategy also found no page targeting steam cooker, steamer pot, outdoor cooker, portable cooktop, or campfire cooking kit language.",
        recommendedAction:
          "Noindex,follow page-two archive and collection pagination, then build the steam cooker and outdoor cooker commercial category page.",
        expectedImpact:
          "Crawl attention moves away from duplicate archives, and CanCooker gets a page for customers searching before they know the brand exists.",
      },
    ],
  },
  execution: {
    title: "What changes, who decides, and how we prove it",
    artifactsTitle: "Evidence, action, impact, and specialists",
    examples: [
      {
        eyebrow: "Product terms already close",
        title: "Optimize the pages that are already almost there",
        currentLabel: "Current state",
        current: [
          "796 non-brand queries rank positions 4 to 20",
          "Batter bowl has 15,988 impressions and 61 clicks",
        ],
        targetLabel: "Target state",
        target: [
          "Ten live product pages aligned to the terms finding them",
          "Internal links added from relevant recipe and hub content",
        ],
        decision:
          "Approve the first ten product pages before new category builds begin.",
        impact:
          "Captures the fastest product-intent gains in the plan without adding new pages.",
        proof:
          "Track term movement, impressions, and clicks against the pre-optimization page-two baseline.",
      },
      {
        eyebrow: "Archive duplication",
        title: "Let useful pages rank, keep duplicate listings crawlable only",
        currentLabel: "Current state",
        current: [
          "81 recipe tag pages and 43 paginated listings are indexable",
          "Paginated URLs self-canonicalize and share the heading Recipe",
        ],
        targetLabel: "Target state",
        target: [
          "Page two onward set to noindex,follow",
          "First archive pages carry descriptive headings and metadata",
        ],
        decision:
          "Confirm the indexation rule before metadata is written at scale.",
        impact:
          "Reduces duplicate archive signals and protects crawl attention for recipes, products, and hubs.",
        proof:
          "Post-release QA confirms meta robots, canonical targets, headings, and Search Console coverage movement.",
      },
    ],
    artifacts: [
      {
        phase: "Month 1",
        specialists: "SEO, Development and Content",
        title: "Fast-win release package",
        evidence:
          "Ten product terms at striking distance, shared heading defects verified live, and tailgating demand mapped before peak season.",
        recommendedAction:
          "Approve product-page updates, one Shopify heading deploy, the corrupted-title fix, and the tailgating hub.",
        expectedImpact:
          "Product-intent pages gain relevance while shared template signals stop weakening the site.",
      },
      {
        phase: "Month 2",
        specialists: "Development, SEO and Content",
        title: "Indexation and seasonality package",
        evidence:
          "Recipe archive and pagination duplication validated against live URLs and GSC coverage regressions.",
        recommendedAction:
          "Approve the archive noindex,follow rule, commercial metadata batch, empty category decisions, and deer season hub.",
        expectedImpact:
          "Duplicate listing pages stop competing with useful pages, and seasonal content goes live while demand still exists.",
      },
      {
        phase: "Month 3",
        specialists: "SEO, Development and Content",
        title: "Category and catalogue scale package",
        evidence:
          "Non-brand category language has no target page, and about 500 recipe pages need repeatable metadata cleanup.",
        recommendedAction:
          "Approve the steam cooker and outdoor cooker page, recipe metadata scaling, title and redirect hygiene, and fish fry scoping.",
        expectedImpact:
          "CanCooker starts owning pre-brand commercial searches while the next-quarter fish fry opportunity is ready to build properly.",
      },
      {
        phase: "Before ticketing",
        specialists: "Account Management",
        title: "Scope confirmation",
        evidence:
          "Scope of Work was not found, monthly contracted quantities are unknown, and the plan falls back to one developer ticket per month.",
        recommendedAction:
          "Confirm the sold SEO scope, developer-ticket allowance, and AM priorities before implementation tickets are raised.",
        expectedImpact:
          "The launch package matches what was sold and avoids overcommitting development capacity.",
      },
    ],
  },
  approval: {
    title: "Decisions and specialists before launch",
    gates: [
      {
        timing: "Kickoff",
        label: "Decision",
        title: "Approve the September product and template package",
        detail:
          "Start with the ten product-page optimizations, cart drawer heading fix, recipe H1 fix, corrupted title repair, and tailgating hub.",
      },
      {
        timing: "Month 1 close",
        label: "Evidence",
        title: "Verify the shared Shopify heading release",
        detail:
          "QA a sample of product, collection, recipe, blog, and CMS templates to confirm the real page topic is the first meaningful heading.",
      },
      {
        timing: "Month 2 close",
        label: "Measurement",
        title: "Confirm archive indexation behavior",
        detail:
          "Check meta robots, canonicals, headings, and early Search Console coverage movement after archive and pagination rules ship.",
      },
      {
        timing: "Month 3 close",
        label: "Planning",
        title: "Approve the fish fry build for next quarter",
        detail:
          "At the end of Month 3, decide whether the fish fry and batter keyword opportunity, worth about 54,530 monthly searches, should become the next full content project for the following quarter.",
      },
    ],
    decisions: [
      {
        label: "Confirm SEO scope and developer allowance",
        detail:
          "The road map assumes one developer ticket per month because the Scope of Work could not be found. Confirm this matches what was sold before implementation begins.",
      },
      {
        label: "Approve archive indexation rules",
        detail:
          "Decide that page two onward for recipe archives and paginated collections should be noindex,follow before metadata work scales.",
      },
      {
        label: "Decide what AI discovery files should say",
        detail:
          "agents.md, llms.txt, llms-full.txt, and sitemap_agentic_discovery.xml are live. This is a positioning decision, so it needs AM approval before work is scheduled.",
      },
    ],
  },
};
