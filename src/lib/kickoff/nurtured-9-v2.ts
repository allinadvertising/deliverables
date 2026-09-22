import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

export const nurtured9KickoffV2: KickoffV2Data = {
  printAriaLabel: "Print Nurtured 9 kickoff V2 as PDF",
  footerNote: "Nurtured 9 SEO Strategy Kickoff | September 2026",
  cover: {
    clientName: "Nurtured 9",
    subtitle: "Your organic search strategy for the next three months.",
  },
  meta: [
    { label: "Period", value: "September to November 2026" },
    {
      label: "Business objective",
      value: "Recover commercial listings and organic revenue paths",
    },
    {
      label: "Roadmap",
      value: "Intent map, consolidation, authority, and validation",
    },
    {
      label: "Platform",
      value: "Squarespace, Merchant Center, GA4, and GoDataFeed",
    },
  ],
  summary: {
    title: "What changes first",
    objectiveLabel: "Business objective",
    objective:
      "Help Nurtured 9 turn existing rankings and guide traffic into stronger commercial discovery by giving each priority pregnancy, baby shower, new mom, and gift-box intent one clear owning URL.",
    lead:
      "The roadmap shows that Nurtured 9 does not have a simple content-volume problem. The site already appears for important searches, including position 3 for 'pregnancy gift box', but Google is ranking the homepage while the priority collection appears as a sitelink instead of earning its own result.",
    emphasis:
      "The sequence is deliberate: separate the priority commercial URLs first, consolidate competing guide and collection signals second, then use authority, merchant eligibility, and validation work to prove the recovery.",
  },
  strategy: {
    title: "3 Month Roadmap",
    gridClassName: "lg:grid-cols-3",
    operatingPrinciple:
      "Make one page own one intent before adding new pages or scaling content production.",
    phases: [
      {
        accent: "blue",
        month: "Month 1",
        theme: "Reclaim the collection listings",
        objective:
          "Use the client-priority category, subscription, and bestseller pages to build the gift-intent URL map, then rewrite titles, H1s, intro copy, and internal links so each priority page describes its own intent.",
        deliverable:
          "Intent map, priority on-page refresh, Merchant Center issue list, and first developer fix",
        businessOutcome:
          "The pages Lindsey named become clearer commercial destinations, while seven unavailable product pages and one broken earned backlink move into a contained fix path.",
      },
      {
        accent: "gold",
        month: "Month 2",
        theme: "Consolidate the cluster and route the equity",
        objective:
          "Turn the intent map into merge, delete, redirect, and refresh decisions, consolidate overlapping gift-guide pages, and route ranking guides into the commercial pages that sell.",
        deliverable:
          "Signed-off redirect map, guide consolidation, internal-link deployment, and rich-result work",
        businessOutcome:
          "The site stops splitting its own authority across competing URLs and starts sending existing informational demand toward the exact commercial destinations the client prioritized.",
      },
      {
        accent: "blue",
        month: "Month 3",
        theme: "Close the authority gap and prove the recovery",
        objective:
          "Implement indexation verdicts, reclaim non-www link equity, document anchor-profile risk, scope the next hub-and-spoke structure, and validate whether the priority pages earn standalone listings.",
        deliverable:
          "Indexation implementation, authority cleanup, next-quarter architecture, and recovery validation",
        businessOutcome:
          "The plan moves beyond edits into measurable proof: cleaner indexation, stronger domain signals, better merchant eligibility, and a next-quarter structure that prevents the same fragmentation from returning.",
      },
    ],
  },
  focus: {
    title: "Six priorities for commercial SEO recovery",
    volumeLabel: "Evidence",
    scopeLabel: "Scope impact",
    footnote:
      "Evidence comes from the Nurtured 9 consolidated roadmap, competitive diagnosis, project detail, allocation assumptions, and deferred-decision tabs dated August 2026.",
    items: [
      {
        number: "01",
        title: "Give each gift intent one owning URL",
        businessObjective:
          "Make Google choose the right commercial page instead of defaulting to the homepage.",
        evidence:
          "The roadmap identifies 1,551 queries with more than one Nurtured 9 URL competing, across 70 editorial URLs and at least four commercial URLs in the pregnancy gift box cluster.",
        volume: "1,551 multi-URL queries",
        scopeImpact:
          "Priority categories, subscription page, six bestseller products, and 70 editorial URLs",
        expectedImpact:
          "Collections and commercial pages have a better chance to earn their own search result instead of being folded into homepage sitelinks.",
        recommendedAction:
          "Create the Month 1 gift-intent URL map using the top category pages, second-tier pages, subscription page, and six bestselling products as the commercial priority layer.",
        status: "P1, Month 1 foundation",
      },
      {
        number: "02",
        title: "Rewrite priority page signals before adding more content",
        businessObjective:
          "Convert existing rankings into clicks by making the priority pages self-describing.",
        evidence:
          "/pregnancy-gift-boxes holds position 3 or better for several commercial terms, but appears as a sitelink titled 'Pregnancy' and earns close to zero clicks across those terms.",
        volume: "8 priority category and subscription pages",
        scopeImpact:
          "Titles, H1s, intro copy, internal links, SERP copy, and page differentiation",
        expectedImpact:
          "Existing rankings can become clearer listings for pregnancy gift box, new mom gift box, baby shower gift, trimester, and subscription intent.",
        recommendedAction:
          "Refresh /curate-your-own-gift-box-for-mom, /pregnancy-gift-box, /pregnancy-gift-boxes, /new-mom-gift-boxes, /shop-baby-gifts, /baby-shower-gifts-for-mom, /shop-pregnancy-gifts-by-trimester, and the Luxe subscription page.",
        status: "P1, Month 1 on-page",
      },
      {
        number: "03",
        title: "Protect the shopping surface that is already visible",
        businessObjective:
          "Keep product discovery strong while organic collection listings are being repaired.",
        evidence:
          "Merchant Center shows 131 of 287 products with issues: 7 unavailable product pages, 124 personalized-advertising policy flags, and 5 products Google found outside the controlled feed.",
        volume: "131 product-feed issues",
        scopeImpact:
          "Merchant Center, GoDataFeed, product availability, policy wording, price, and eligibility",
        expectedImpact:
          "Products that already appear in Shopping blocks are less likely to lose demand through unavailable pages or eligibility problems.",
        recommendedAction:
          "Pull item-level issue lists, classify policy-sensitive wording, restore seven unavailable product pages, and reconcile the five Google-discovered products through GoDataFeed.",
        status: "P1, Month 1 feed wave",
      },
      {
        number: "04",
        title: "Consolidate overlapping guides and redirect decisions",
        businessObjective:
          "Stop the site from competing with itself on the same gift queries.",
        evidence:
          "The roadmap carries 11 merge opportunities, 38 delete opportunities, five overlapping gift-guide pages, and terms such as 'unique baby shower gifts for mom to be' with nine internal URLs competing.",
        volume: "About 49 merge or delete decisions",
        scopeImpact:
          "Gift guides, redirect map, internal links, consolidation QA, and developer URL mappings",
        expectedImpact:
          "The site's own authority concentrates around fewer, clearer URLs instead of being split across older editorial pages.",
        recommendedAction:
          "Work every merge and delete decision against the Month 1 intent map, then implement the signed-off redirect map and guide refresh in Month 2.",
        status: "P1, Month 2 consolidation",
      },
      {
        number: "05",
        title: "Route winning guides into bestseller product paths",
        businessObjective:
          "Turn informational attention into visits to the products the client says sell best.",
        evidence:
          "The roadmap names six bestseller destinations, and notes that ranking guides are not yet connected strongly enough to the pages that sell.",
        volume: "6 bestseller product pages",
        scopeImpact:
          "Internal links from winning guides, new mom pages, subscription pages, and commercial destinations",
        expectedImpact:
          "The site can use existing guide traffic to support product discovery without creating additional competing sales pages.",
        recommendedAction:
          "Add contextual links from winning guides into /new-mom-gift-boxes and the six bestselling products in Lindsey's stated order.",
        status: "P1, Month 2 routing",
      },
      {
        number: "06",
        title: "Close the domain-level authority and validation gap",
        businessObjective:
          "Compete with stronger domains and prove whether the recovery is working.",
        evidence:
          "Competitors outranking Nurtured 9 for 'pregnancy gift box' sit at DR 50 and DR 46, while Nurtured 9 is DR 27 and has 452 links from 425 referring domains still pointing at the non-www root.",
        volume: "425 referring domains to reclaim",
        scopeImpact:
          "Non-www link reclamation, anchor profile review, SERP validation, Merchant Center validation, and next-quarter hub planning",
        expectedImpact:
          "The priority pages get cleaner authority signals, and the team can validate standalone listings, merchant eligibility, and indexation outcomes before the next roadmap cycle.",
        recommendedAction:
          "Reclaim high-value non-www links, document the SEOExpress anchor cluster, validate the priority pages, and scope the six-cluster hub-and-spoke model for next quarter.",
        status: "P1, Month 3 proof",
      },
    ],
  },
  execution: {
    title: "What changes, who decides, and how we prove it",
    artifactsTitle: "Evidence, action, impact, and specialists",
    examples: [
      {
        eyebrow: "Collection listings",
        title: "Move priority collections out from under the homepage",
        currentLabel: "Current signal",
        current: [
          "The homepage ranks for 'pregnancy gift box'",
          "/pregnancy-gift-boxes appears as a sitelink titled 'Pregnancy'",
        ],
        targetLabel: "Target signal",
        target: [
          "Each commercial intent has one owning page",
          "Titles, H1s, intro copy, and internal links reinforce that ownership",
        ],
        decision:
          "Approve the Month 1 intent map before redirects, refreshes, or new pages are built.",
        impact:
          "Priority pages can earn standalone listings and clicks instead of being hidden behind homepage sitelinks.",
        proof:
          "SERP checks confirm whether the named category, subscription, and bestseller pages appear as their own results.",
      },
      {
        eyebrow: "Guide consolidation",
        title: "Turn overlapping advice pages into commercial support",
        currentLabel: "Current pattern",
        current: [
          "Five gift-guide pages overlap the priority clusters",
          "Some queries have five to nine internal URLs competing",
        ],
        targetLabel: "Target pattern",
        target: [
          "One surviving guide or page owns each informational intent",
          "Contextual links route readers into the right category or product page",
        ],
        decision:
          "Approve merge, delete, refresh, and redirect decisions before developer implementation.",
        impact:
          "Nurtured 9 keeps useful guide equity while reducing internal competition.",
        proof:
          "A finished mapping sheet and post-implementation QA confirm redirects, internal links, and surviving page intent.",
      },
    ],
    artifacts: [
      {
        phase: "Month 1",
        specialists: "AIA SEO, content, and account team",
        title: "Gift-intent URL map",
        evidence:
          "The roadmap identifies six commercial clusters, top and second-tier priority pages, six bestselling products, and 1,551 queries with multiple competing URLs.",
        recommendedAction:
          "Classify each URL as primary, supporting, merge, or prune before page edits and redirects begin.",
        expectedImpact:
          "The team gets one shared source for which page should rank for each priority gift intent.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO, paid, and developer",
        title: "Merchant Center and unavailable-page fix",
        evidence:
          "Seven product pages are unavailable, 124 items carry personalized-advertising policy flags, and one earned candle backlink ends in a 404 after a redirect chain.",
        recommendedAction:
          "Classify item-level issues, restore the seven product URLs, and map the broken candle URL to a live relevant destination.",
        expectedImpact:
          "Shopping visibility and earned-link value are protected while broader SEO consolidation begins.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO, content, and developer",
        title: "Redirect map and guide consolidation",
        evidence:
          "Month 2 includes 11 merge decisions, 38 delete decisions, five overlapping gift-guide refreshes, and redirect-chain cleanup.",
        recommendedAction:
          "Turn the Month 1 intent map into a signed-off mapping sheet, refresh the surviving guides, and implement approved 301s.",
        expectedImpact:
          "Authority flows into the right pages instead of being diluted by competing guides and legacy URLs.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO, content, and paid",
        title: "Rich results and merchant eligibility",
        evidence:
          "Non-brand top-three impressions rose 77.3 percent year over year while top-three clicks fell 6.4 percent, pointing to click-through compression.",
        recommendedAction:
          "Add product, review, and breadcrumb schema to the priority page set, check merchant listing eligibility, and rewrite SERP copy for differentiation.",
        expectedImpact:
          "Priority pages become better equipped to earn clicks and citations before Q4 gifting demand peaks.",
      },
      {
        phase: "Month 3",
        specialists: "AIA SEO and developer",
        title: "Indexation verdict implementation",
        evidence:
          "The roadmap identifies 199 Crawled, currently not indexed URLs and 111 Discovered, currently not indexed URLs that need keep, improve, noindex, redirect, or remove decisions.",
        recommendedAction:
          "Apply approved noindex, redirect, and remove outcomes through Squarespace page settings and URL mappings.",
        expectedImpact:
          "Google receives a cleaner set of pages to evaluate, with fewer low-value URLs competing for crawl and intent.",
      },
      {
        phase: "Month 3",
        specialists: "AIA SEO and account team",
        title: "Authority, brand result, and next-quarter architecture",
        evidence:
          "The competitive diagnosis points to a DR 27 versus DR 50 and DR 46 gap, 425 referring domains on the non-www root, and 34 URLs surfacing for the brand query.",
        recommendedAction:
          "Reclaim non-www links, review branded SERP presentation, validate priority page listings, and scope the six-cluster hub-and-spoke model.",
        expectedImpact:
          "The recovery is measured at the listing, click, authority, and eligibility levels before the next content cycle is built.",
      },
    ],
  },
  approval: {
    title: "Decisions and specialists before launch",
    gates: [
      {
        timing: "Kickoff",
        label: "Priority",
        title: "Confirm the client-priority page set",
        detail:
          "Use the named top category pages, second-tier pages, subscription page, and six bestselling products as the first commercial layer for the intent map.",
      },
      {
        timing: "Kickoff",
        label: "Access",
        title: "Confirm Merchant Center, GoDataFeed, and GA4 access",
        detail:
          "Merchant Center blocks the item-level product issue list, GoDataFeed blocks the five Google-discovered products, and GA4 blocks purchase-rate reconciliation.",
      },
      {
        timing: "Before ticketing",
        label: "Scope",
        title: "Confirm monthly delivery capacity",
        detail:
          "The roadmap sizes 121 total hours and 86 P1 hours across three months, so AM and strategy should confirm the practical monthly delivery line before tickets are raised.",
      },
      {
        timing: "Before redirects",
        label: "Mapping",
        title: "Approve every merge, delete, and redirect destination",
        detail:
          "Nothing should redirect until the owning URL is confirmed as genuinely relevant to the source URL and search intent.",
      },
      {
        timing: "Month 3 close",
        label: "Validation",
        title: "Measure standalone listings, not only average position",
        detail:
          "The success test is whether the named category, subscription, and bestseller pages earn their own listings, clicks, and merchant eligibility.",
      },
    ],
    decisions: [
      {
        label: "Treat fragmentation as the main problem",
        detail:
          "The first quarter should focus on intent ownership, on-page differentiation, consolidation, and routing before any new editorial production.",
      },
      {
        label: "Protect Q4 gifting demand",
        detail:
          "Baby shower, new mom, pregnancy gift box, trimester, and postpartum work stay in the September to November plan, while Valentine's Day and Mother's Day wait for their seasonal cycles.",
      },
      {
        label: "Scope next-quarter growth without building it too early",
        detail:
          "Luxury, corporate gifting, and the 'gifts for new moms' head term should be architected in Month 3, then built after the current intent map is stable.",
      },
    ],
  },
};
