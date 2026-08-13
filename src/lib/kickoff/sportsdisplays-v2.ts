import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

/**
 * Source: "Sports Displays - Q3/Q4 2026 SEO Roadmap" (Google Sheets), Roadmap tab.
 * Underlying audits: SportsDisplays_1_GSC_Performance_Audit.md,
 * SportsDisplays_2_GSC_Coverage_Audit.md, SportsDisplays_3_ClickUp_Task_Summary.md,
 * all dated 2026-08-04. ClickUp list 901113461654.
 *
 * Hour estimates from the roadmap are deliberately not surfaced client-side, in line
 * with the Jordan feedback rule applied to the TOICO V2 deck.
 */
export const sportsDisplaysKickoffV2: KickoffV2Data = {
  printAriaLabel: "Print SportsDisplays kickoff as PDF",
  footerNote: "SportsDisplays SEO Strategy Kickoff · Q3-Q4 2026",
  cover: {
    clientName: "SportsDisplays",
    subtitle: "Your organic search strategy for the next three months.",
  },
  meta: [
    { label: "Window", value: "August to October 2026" },
    {
      label: "Primary objective",
      value: "Protect jersey framing revenue and release contracted scope",
    },
    { label: "Roadmap", value: "Seven phases, 22 tasks" },
    { label: "Platform", value: "BigCommerce" },
  ],
  summary: {
    title: "What changes first",
    objectiveLabel: "Business objective",
    objective:
      "Protect the revenue already flowing through the jersey framing category, release the sport-specific page work the client contracted for, and reclaim enough crawl budget that Google actually fetches those pages once they exist. The engagement was sold as a defined three-month project, so every phase has to end in something the client can see.",
    lead: "SportsDisplays does not have a problem that new content alone will fix. The audits dated August 4, 2026 found 135 URLs not indexed against 87 indexed, the site's second-largest traffic page missing from the submitted sitemap, four sport landing pages serving byte-identical text that Google has never fetched, and 23 completed tasks sitting unreleased in the approval queue. Production capacity is not the constraint on this account.",
    emphasis:
      "The sequence is deliberate: protect what already earns, release what is already built, then clear the crawl waste that is keeping new pages from being fetched at all.",
  },
  strategy: {
    title: "Seven phases across three months",
    gridClassName: "lg:grid-cols-3",
    operatingPrinciple:
      "Confirm provenance before consolidating, and differentiate pages before asking Google to index them.",
    phases: [
      {
        accent: "gold",
        month: "Phase 1",
        theme: "Protect revenue",
        objective:
          "Establish why two jersey framing URLs exist, move the optimized metadata onto the one that earns, and get the earning URLs into the sitemap before anything is redirected.",
        businessOutcome:
          "The site's second-largest traffic page stops losing ground while we work on it.",
        deliverable:
          "Written provenance on file, optimized title and description live on /shop/jersey-framing/, 11 earning URLs added to the sitemap, and a single-hop 301 verified.",
      },
      {
        accent: "gold",
        month: "Phase 2",
        theme: "Unblock contracted scope",
        objective:
          "Differentiate the four sport landing pages, release the two blocked page-build tasks, clear the approval backlog, and only then request indexing.",
        businessOutcome:
          "The sport-specific page strategy the client already purchased becomes visible, shipped work.",
        deliverable:
          "Four distinct sport pages live, the approval queue reduced below five tasks, and 10 commercial URLs submitted through URL Inspection.",
      },
      {
        accent: "blue",
        month: "Phase 3",
        theme: "Reclaim crawl budget",
        objective:
          "Remove the tag archives and duplicate URL forms absorbing crawl budget so Google can reach the pages that matter commercially.",
        businessOutcome:
          "New commercial pages get fetched instead of queueing behind archive URLs.",
        deliverable:
          "Tag archives set to noindex,follow with internal links reduced, a single trailing-slash form enforced, and the stalled utility-endpoint task closed out.",
      },
      {
        accent: "blue",
        month: "Phase 4",
        theme: "Repair blog architecture",
        objective:
          "Restore the /blog/ path separator a migration dropped, and stop the blog index emitting two URL patterns side by side.",
        businessOutcome:
          "Blog equity consolidates onto one set of URLs instead of splitting across malformed duplicates.",
        deliverable:
          "All posts resolving under /blog/, redirects applied for all 7 malformed URLs, the blog index template corrected, and one commercially relevant 404 recovered.",
      },
      {
        accent: "gold",
        month: "Phase 5",
        theme: "Organic shopping eligibility",
        objective:
          "Correct the product markup that disqualifies orderable inventory from organic Shopping surfaces, then reconcile the Merchant Center feed against the live catalogue.",
        businessOutcome:
          "Orderable products become eligible for Popular Products and free Shopping placements.",
        deliverable:
          "Accurate availability on all 13 sitemap products, Brand markup added, CollectionPage removed from product templates, and a written feed gap analysis.",
      },
      {
        accent: "blue",
        month: "Phase 6",
        theme: "Demand capture",
        objective:
          "Establish whether SERP features are absorbing clicks at stable positions, settle the AI crawler blocklist decision, and extend the sport-page pattern only once it is proven.",
        businessOutcome:
          "Further content investment follows evidence about where the clicks are actually going.",
        deliverable:
          "A documented SERP-displacement finding, a written client decision on the AI crawler blocklist, and four further vertical pages built to the proven standard.",
      },
      {
        accent: "blue",
        month: "Phase 7",
        theme: "Account health",
        objective:
          "Close the overdue planning checkpoint, work the open client lifecycle tasks, and re-measure coverage against the August baseline.",
        businessOutcome:
          "A client who is skeptical of marketing vendors sees both the cadence and the proof that the cleanup was real.",
        deliverable:
          "Planning session held and documented, lifecycle cadence current, and a re-run coverage audit measured against the August baseline.",
      },
    ],
  },
  focus: {
    title: "Four priorities for the next three months",
    volumeLabel: "Measured volume",
    scopeLabel: "Scope",
    footnote:
      "Figures come from the Search Console performance and coverage audits dated August 4, 2026. The ~90 Merchant Center product count is reported in the engagement brief and was not verified during the audit.",
    items: [
      {
        number: "01",
        status: "Phase 1 · Protect revenue",
        title: "Protect the page that already earns",
        businessObjective:
          "Two live URLs compete for the same jersey framing intent, and the optimized metadata sits on the one earning nothing.",
        volume: "381 clicks, 18,033 impressions",
        scopeImpact: "11 earning URLs absent from the sitemap",
        evidence:
          "/shop/jersey-framing/ earns 381 clicks and 18,033 impressions while /jersey-framing/ earns 0 clicks and 3 impressions at position 24.3. Both return 200 and self-canonicalize. The category page lost 174 clicks and fell from position 7.9 to 11.4 over 28 days, and serves a bare 'Jersey Framing' title with no meta description.",
        recommendedAction:
          "Confirm in writing when and why /jersey-framing/ was created, port the optimized title and description onto /shop/jersey-framing/, add the 11 missing URLs to xmlsitemap.php, then 301 in a single hop.",
        expectedImpact:
          "The site's second-largest traffic page carries its own optimized metadata and recovers toward page one on a URL the client asked us to protect.",
      },
      {
        number: "02",
        status: "Phase 2 · Unblock contracted scope",
        title: "Release the scope the client already bought",
        businessObjective:
          "The sport-specific page strategy is built and blocked, not missing. Release is the constraint, not production.",
        volume: "23 tasks awaiting approval",
        scopeImpact: "20 URLs Google has never fetched",
        evidence:
          "The four sport pages serve byte-identical rendered text (MD5 248edd5931fee89f6a969b2d8e66f73a) and no H1. Twenty URLs sit in Discovered - currently not indexed with no last-crawl date recorded, meaning Google has never fetched them. Twenty-three completed tasks wait at ready for approval, including a complete website build of 13 tasks that has been waiting since May 28, plus three full content cycles.",
        recommendedAction:
          "Write genuinely distinct copy, H1, title and meta for baseball, basketball, football and hockey; release the two blocked page-build tasks; work the approval backlog starting with the website build; then request indexing for the 10 commercial URLs.",
        expectedImpact:
          "The contracted sport-page strategy goes live and Google begins spending crawl budget on it instead of skipping four copies of one page.",
      },
      {
        number: "03",
        status: "Phases 3-4 · Crawl budget and blog",
        title: "Stop paying crawl budget for pages that cannot earn",
        businessObjective:
          "Google will not prioritise new commercial pages while half the crawl budget goes to tag archives and duplicate URL forms.",
        volume: "90 URLs crawled, not indexed",
        scopeImpact: "~45 tag archives, 7 malformed blog URLs",
        evidence:
          "Roughly 45 of the 90 URLs in Crawled - currently not indexed are /blog/tag/* archives, reached purely by internal linking since no tag URL appears in the sitemap. Three paths resolve at both slashed and unslashed forms. A blog migration dropped the slash after /blog, producing URLs such as /blogcommercial-display-for-sports-sports-display/, and the live blog index emits both patterns.",
        recommendedAction:
          "Apply noindex,follow to tag archives and cut the internal links feeding them, enforce a single trailing-slash form at the Cloudflare or server layer, and restore the /blog/ paths with redirects for all 7 malformed URLs plus a template fix.",
        expectedImpact:
          "Crawl budget moves from archives and duplicates to the commercial pages that need fetching, which is what makes Phase 2 indexing requests work.",
      },
      {
        number: "04",
        status: "Phase 5 · Organic shopping",
        title: "Make the catalogue eligible for organic Shopping",
        businessObjective:
          "Products that declare out of stock or omit Brand markup cannot appear in Popular Products or organic Shopping surfaces at all.",
        volume: "13 products in the sitemap",
        scopeImpact: "~90 approved in Merchant Center (reported)",
        evidence:
          "Three of 13 sitemap products declare schema.org/OutOfStock, one of them drawing 6,200 impressions and 16 clicks in 28 days. Seven of 13 lack Brand markup, including the top-gaining product page. All 13 declare CollectionPage alongside Product, which creates type ambiguity. Merchant Center was not accessed for the audit.",
        recommendedAction:
          "Confirm which products are genuinely orderable and set those to InStock, add Brand and strip CollectionPage from the product template, then map the approved Merchant Center feed against the sitemap and deliver a written gap analysis.",
        expectedImpact:
          "Orderable products become eligible for Popular Products and organic Shopping, and the gap between the feed and the sitemap becomes a costed remediation plan.",
      },
    ],
  },
  execution: {
    title: "What changes, who decides, and how we prove it",
    artifactsTitle: "Evidence, action, impact, and specialists",
    examples: [
      {
        eyebrow: "Jersey framing consolidation",
        title: "Put the optimized metadata on the page that earns",
        currentLabel: "Current state",
        current: [
          "/shop/jersey-framing/ — 381 clicks, bare 'Jersey Framing' title, no meta description",
          "/jersey-framing/ — 0 clicks at position 24.3, holds the optimized title and description",
        ],
        targetLabel: "Target state",
        target: [
          "One canonical jersey framing category URL",
          "Optimized title and description live on the page that ranks",
        ],
        decision:
          "Approve the provenance check as a gate: nothing is redirected until we know why both URLs exist.",
        impact:
          "Protects and recovers the site's second-largest traffic page, which the client explicitly flagged as protected.",
        proof:
          "The redirect resolves in a single hop, /shop/jersey-framing/ still self-canonicalizes, and position is monitored daily for two weeks against the 7.9 baseline.",
      },
      {
        eyebrow: "Sport landing pages",
        title: "Differentiate the pages before asking Google to index them",
        currentLabel: "Current state",
        current: [
          "Four sport pages serving byte-identical rendered text",
          "No H1 on any of the four; last crawled 'N/A'",
        ],
        targetLabel: "Target state",
        target: [
          "Distinct body copy, H1, title and meta per sport",
          "Indexing requested only after the copy is genuinely unique",
        ],
        decision:
          "Release the two blocked page-build tasks and confirm the content writer for the four-page build.",
        impact:
          "Delivers the sport-specific category strategy the client contracted for, in a form Google will spend crawl budget on.",
        proof:
          "Four pages with distinct rendered text and distinct H1s move out of Discovered - currently not indexed and start earning impressions.",
      },
    ],
    artifacts: [
      {
        phase: "Phase 1",
        specialists: "Account Management, Content and Development",
        title: "Protected consolidation record",
        evidence:
          "Written provenance for /jersey-framing/, plus before-and-after position tracking on the protected category page.",
        recommendedAction:
          "Approve the metadata port, the sitemap additions, and the single-hop redirect.",
        expectedImpact:
          "The second-largest traffic page keeps its rankings through the change instead of absorbing the risk.",
      },
      {
        phase: "Phase 2",
        specialists: "Account Management and Content",
        title: "Differentiated sport pages",
        evidence:
          "Four pages with distinct rendered text and H1s, measured against the byte-identical baseline.",
        recommendedAction:
          "Release the blocked build tasks and work the approval backlog of 23 tasks down to under five.",
        expectedImpact:
          "Contracted scope reaches production and starts attracting crawl attention.",
      },
      {
        phase: "Phases 3-4",
        specialists: "Development",
        title: "Crawl budget release",
        evidence:
          "Crawled - currently not indexed measured before and after the tag, trailing-slash and blog-path fixes.",
        recommendedAction:
          "Approve template-level noindex, the Cloudflare slash rule, and the blog redirect map.",
        expectedImpact:
          "Crawl budget shifts to commercial pages, making the Phase 2 indexing requests effective.",
      },
      {
        phase: "Phases 5-7",
        specialists: "SEO and Development",
        title: "Coverage re-measurement",
        evidence:
          "The opening August baseline of 135 not indexed against 87 indexed, re-run at the close of the engagement.",
        recommendedAction:
          "Approve the Merchant Center gap analysis and the closing coverage audit.",
        expectedImpact:
          "The client receives a measured proof point on an engagement sold as a defined cleanup project.",
      },
    ],
  },
  approval: {
    title: "Decisions and specialists before launch",
    gates: [
      {
        timing: "Kickoff",
        label: "Decision",
        title: "Approve Phase 1 before any redirect work",
        detail:
          "Neither jersey framing URL is touched until provenance is confirmed in writing. The client asked us to protect this page, so the sequence is provenance, metadata, sitemap, then redirect.",
      },
      {
        timing: "Before launch",
        label: "Access",
        title: "Confirm Merchant Center and Cloudflare access",
        detail:
          "The feed reconciliation and the trailing-slash rule both stall without them. Merchant Center was not accessed during the audit, so the ~90 approved products remain a reported figure.",
      },
      {
        timing: "Phase 1 close",
        label: "Evidence",
        title: "Monitor the protected page daily for two weeks",
        detail:
          "Confirm the single-hop redirect, continued self-canonicalization, and position recovery toward the 7.9 baseline.",
      },
      {
        timing: "Phase 2 close",
        label: "Measurement",
        title: "Confirm the sport pages are being crawled",
        detail:
          "Discovered - currently not indexed falls below 10 and the approval queue drops below five tasks.",
      },
      {
        timing: "Phase 7 close",
        label: "Proof",
        title: "Re-run the coverage audit against the baseline",
        detail:
          "Measure not-indexed count, bucket sizes, and indexed count against the opening baseline of 135 not indexed and 87 indexed.",
      },
    ],
    decisions: [
      {
        label: "Confirm the jersey framing history",
        detail:
          "Tell us when and why /jersey-framing/ was created, or confirm internal records are inconclusive, so consolidation can proceed without risking the page you asked us to protect.",
      },
      {
        label: "Release the approval backlog",
        detail:
          "Twenty-three completed tasks are waiting on review, including a complete website build of 13 tasks that has been waiting since May 28. Production capacity is not the constraint on this account; release is.",
      },
      {
        label: "Settle the AI crawler blocklist",
        detail:
          "robots.txt blocks roughly 30 AI agents including GPTBot, ClaudeBot and Google-Extended. This does not affect Google Search indexing, but it removes you from AI answer surfaces. Confirm whether it was deliberate.",
      },
    ],
  },
};
