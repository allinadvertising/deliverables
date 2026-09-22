import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

export const racePartsSolutionsKickoffV2: KickoffV2Data = {
  printAriaLabel: "Print Race Part Solutions kickoff V2 as PDF",
  footerNote: "Race Part Solutions SEO Strategy Kickoff | September 2026",
  cover: {
    clientName: "Race Part Solutions",
    subtitle: "Your organic search strategy for the next three months.",
  },
  meta: [
    { label: "Period", value: "September to November 2026" },
    {
      label: "Business objective",
      value: "Grow non-brand revenue and recover qualified retail demand",
    },
    { label: "Roadmap", value: "Ticketed technical, feed, category, and QA waves" },
    {
      label: "Platform",
      value: "Custom ecommerce site, sitemap generator, redirect layer",
    },
  ],
  summary: {
    title: "What changes first",
    objectiveLabel: "Business objective",
    objective:
      "Use SEO to reverse the revenue trend by bringing more non-brand buyers to Race Part Solutions, prioritizing house-made RPS inventory, and measuring organic impact through orders, revenue, and qualified product discovery.",
    lead:
      "Race Part Solutions has a large product catalog, strong manufacturing value, and real demand clusters, but the updated roadmap shows the first quarter needs tighter execution sequencing. The sitemap points to 1,641 non-www URLs that return 404, while 14,259 indexable URLs are missing from sitemap coverage.",
    emphasis:
      "The new sequence is more specific: ship the Month 1 technical and Merchant Center waves first, build the first three P1 category pages in Month 2, resolve KWR priority decisions before the rest of the roadmap is ticketed, then use Month 3 for lean template, schema, validation, and P2 category work.",
  },
  strategy: {
    title: "3 Month Roadmap",
    gridClassName: "lg:grid-cols-3",
    operatingPrinciple:
      "Use the ClickUp ticket plan as the execution spine, but keep client-facing updates focused on revenue, orders, and priority product discovery.",
    phases: [
      {
        accent: "blue",
        month: "Month 1",
        theme: "Ship the technical and feed foundation",
        objective:
          "Run the technical foundation wave, confirm GSC substitute validation, and start the Merchant Center scope and feed first pass.",
        deliverable: "Technical foundation, crawl QA, and feed access baseline",
        businessOutcome:
          "Google receives a clean preferred domain signal, the team has evidence even while GSC access is unresolved, and shopping visibility work starts from the correct account and feed path.",
      },
      {
        accent: "gold",
        month: "Month 2",
        theme: "Build the first category tranche",
        objective:
          "Stabilize URL rules, brief and build the first three P1 category pages, apply KWR vocabulary rules, and resolve client priority conflicts before ticketing the remaining growth work.",
        deliverable: "First P1 category tranche and KWR decision release",
        businessOutcome:
          "The first clean category pages go live with the right search language, while open client decisions are handled before they create rework.",
      },
      {
        accent: "blue",
        month: "Month 3",
        theme: "Validate and extend the system",
        objective:
          "Use a lean third-month wave for heading and Product JSON-LD work, crawl-based validation, P2 category build or optimization, and durable platform URL rules.",
        deliverable: "Template, schema, validation, P2, and governance wave",
        businessOutcome:
          "The team proves what improved, expands only after the first category tranche is stable, and leaves practical rules so the same platform issues do not return.",
      },
    ],
  },
  focus: {
    title: "Six priorities for organic revenue recovery",
    volumeLabel: "Evidence",
    scopeLabel: "Scope impact",
    footnote:
      "Evidence comes from the Race Part Solutions consolidated SEO roadmap, technical and content SEO audit, keyword strategy, and intake materials dated August 2026. Search Console access for the canonical HTTPS or domain property was not available, so early validation should use crawl and Ahrefs evidence until access is granted.",
    items: [
      {
        number: "01",
        title: "Fix the sitemap host and preferred-domain redirects",
        businessObjective:
          "Make the site crawlable on the domain customers and search engines should trust.",
        evidence:
          "The XML sitemap points to 1,641 URLs on the non-www host, and deep non-www paths return 404 while the www versions return 200.",
        volume: "1,641 sitemap URLs on the wrong host",
        scopeImpact: "Sitemap index, deep product paths, preferred-domain rules",
        expectedImpact:
          "Google stops receiving dead sitemap URLs and can crawl the canonical www product inventory more reliably.",
        recommendedAction:
          "Set the sitemap generator to https://www.racepartsolutions.com, regenerate XML sitemaps, add a catch-all non-www to www 301 rule, and resubmit the clean sitemap.",
        status: "P0, launch foundation",
      },
      {
        number: "02",
        title: "Clean browse, parameter, and index.php duplication",
        businessObjective:
          "Stop splitting ranking signals across duplicate internal-search and tracking URLs.",
        evidence:
          "The audit found 31,621 browse URLs with query parameters, 19,324 parameterized item URLs from internal links, 637 index.php browse URLs, and 1,508 index.php item URLs.",
        volume: "212,528 near-duplicate pairs",
        scopeImpact: "Browse pages, product URLs, internal links, canonical tags",
        expectedImpact:
          "More authority consolidates into clean product and category URLs, giving priority pages a stronger chance to rank.",
        recommendedAction:
          "301 index.php paths to clean equivalents, canonicalize faceted browse pages, remove product tracking parameters from internal links, and keep only clean URLs in sitemap files.",
        status: "P0, consolidation",
      },
      {
        number: "03",
        title: "Build category pages around house-made demand",
        businessObjective:
          "Prioritize product families where search demand and RPS manufacturing margin work together.",
        evidence:
          "The updated ticket plan keeps five P1 category targets, but schedules the first Month 2 tranche around /v-band-clamps, /o2-sensor-bungs, and /t-bolt-clamps before the remaining P1 pages scale. Mandrel bend terms sit inside the Intercooler Piping cluster with 400 searches per month combined.",
        volume: "First 3 P1 pages in Month 2",
        scopeImpact: "Category briefs, copy, URL structures, launch QA",
        expectedImpact:
          "Retail buyers can land on focused commercial pages instead of generic browse results, with the first build weighted toward higher-margin RPS-made inventory.",
        recommendedAction:
          "Brief, draft, build, and QA /v-band-clamps, /o2-sensor-bungs, and /t-bolt-clamps first. Keep /turbo-flanges and /intercooler-piping in the P1 set after the first tranche is stable, with mandrel bends handled as an on-page child topic of /intercooler-piping instead of a separate URL.",
        status: "P1, first category tranche",
      },
      {
        number: "04",
        title: "Run the Merchant Center first pass",
        businessObjective:
          "Make product visibility competitive where Google places Shopping results above organic listings.",
        evidence:
          "The updated roadmap creates a Month 1 Merchant Center parent with subtasks to locate or scope the account, audit price, availability, and product eligibility, then apply a first feed remediation tranche.",
        volume: "3 Month 1 feed subtasks",
        scopeImpact: "Merchant Center, product feed, product titles, price and availability",
        expectedImpact:
          "Product titles, feed labels, availability, and pricing can support organic shopping eligibility and product discovery without promising a specific revenue lift.",
        recommendedAction:
          "Confirm or locate the Merchant Center path, audit representative products from V-Bands, Turbo Flanges, and O2 Bungs, then apply the highest-impact title, category, price, and availability fixes within the first tranche.",
        status: "P0, Month 1 feed wave",
      },
      {
        number: "05",
        title: "Run a lean template, schema, and validation wave",
        businessObjective:
          "Make each important page explain its product, category, and offer clearly.",
        evidence:
          "The Month 3 ticket plan narrows this into a template cleanup, schema, and validation wave with a 2-hour dev tranche for heading/template and Product JSON-LD work, plus crawl-based validation while GSC access remains unresolved.",
        volume: "2h dev tranche plus QA",
        scopeImpact: "Heading order, product schema, crawl validation, P2 categories",
        expectedImpact:
          "Search snippets and page topics become cleaner at scale, especially for product and category pages that should support revenue.",
        recommendedAction:
          "Use the lean dev tranche for the highest-impact template and Product JSON-LD work, validate with crawl-based checks, then build or optimize P2 pages only after P1 category pages are approved.",
        status: "P2, Month 3 wave",
      },
      {
        number: "06",
        title: "Resolve KWR and client priority decisions",
        businessObjective:
          "Show progress in the language the client cares about: traffic that turns into sales.",
        evidence:
          "The updated roadmap adds a Month 2 decision task for Dual Seal, Mandrel bends, Silicone Hoses, Billet Merges, and Billet 90s because client priority collections do not fully align with KWR and margin guidance.",
        volume: "5 named client priority decisions",
        scopeImpact: "KWR language, category order, metadata, feed guidance",
        expectedImpact:
          "The team avoids building the wrong pages, over-prioritizing lower-margin volume, or using internal language customers do not search.",
        recommendedAction:
          "Prepare the AM and SEO decision note, apply variant rules for terms like o2 sensor bung, 02 sensor bung, v band clamp, and t bolt clamp, and finalize the remaining page and feed guidance after those calls are made. Treat mandrel bends as support language for Intercooler Piping unless the client approves a different strategy.",
        status: "P1, before remaining tickets",
      },
    ],
  },
  execution: {
    title: "What changes, who decides, and how we prove it",
    artifactsTitle: "Evidence, action, impact, and specialists",
    examples: [
      {
        eyebrow: "Preferred domain",
        title: "Send Google to the live www product catalog",
        currentLabel: "Current signal",
        current: [
          "Sitemap URLs use the non-www host",
          "Deep non-www product paths return 404",
        ],
        targetLabel: "Target signal",
        target: [
          "Sitemap URLs use https://www.racepartsolutions.com",
          "Every non-www deep path 301s to its www equivalent",
        ],
        decision:
          "Approve the redirect and sitemap release as the first technical deployment.",
        impact:
          "The site stops asking Google to crawl dead sitemap URLs and gives the product catalog one preferred home.",
        proof:
          "A post-release crawl confirms clean sitemap URLs, 301 non-www redirects, and 200-status www destinations.",
      },
      {
        eyebrow: "Category architecture",
        title: "Build clean buyer destinations in tranches",
        currentLabel: "Current pattern",
        current: [
          "/browse?category=9354 and page variants compete with each other",
          "The first Month 2 build covers only the first three P1 category pages",
        ],
        targetLabel: "Target pattern",
        target: [
          "/v-band-clamps, /o2-sensor-bungs, and /t-bolt-clamps become clean entry points first",
          "Internal links point to canonical product URLs without tracking parameters",
        ],
        decision:
          "Approve the first three P1 pages and confirm the remaining P1 pages wait for tranche results.",
        impact:
          "Buyers searching for high-value parts land on understandable category pages, and the team can QA one tranche before scaling.",
        proof:
          "Launch QA checks title, H1, meta, canonical, indexability, internal links, and product relevance on the first three pages.",
      },
    ],
    artifacts: [
      {
        phase: "Month 1",
        specialists: "AIA SEO, account team, web or platform owner",
        title: "Technical foundation ticket wave",
        evidence:
          "The updated roadmap groups sitemap host repair, non-www redirects, sitemap exclusions, duplicate URL fixes, browse canonicals, and crawl substitute QA into the first technical sequence.",
        recommendedAction:
          "Run the technical tickets in dependency order, with the sitemap host marked for escalation and redirects and sitemap exclusions ready after ownership is confirmed.",
        expectedImpact:
          "Google receives live canonical URLs and the team has a clean baseline for the next phase.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO and account team",
        title: "Merchant Center scope and feed first pass",
        evidence:
          "The roadmap now has a dedicated Month 1 Merchant Center parent and three direct subtasks for account path, eligibility audit, and first remediation.",
        recommendedAction:
          "Locate or scope the Merchant Center account, audit priority product title, price, availability, category, and disapproval status, then apply the first feed remediation tranche.",
        expectedImpact:
          "Performance conversations can focus on organic revenue, orders, non-brand traffic, and priority product discovery.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO, content, web or platform owner",
        title: "Duplicate URL consolidation plan",
        evidence:
          "The audit identifies index.php duplicates, browse parameter duplication, and parameterized product links as major crawl and duplication drivers.",
        recommendedAction:
          "Map redirects, canonicals, internal-link rules, sitemap exclusions, and release QA for each duplicate URL family.",
        expectedImpact:
          "Ranking signals consolidate around clean URLs before new category work scales in Month 2.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO, content, account team",
        title: "First P1 category buildout",
        evidence:
          "The updated ticket plan schedules SEO briefs, content copy, URL structures, and QA for the first three P1 pages before scaling the remaining P1 set.",
        recommendedAction:
          "Brief, draft, create, and QA /v-band-clamps, /o2-sensor-bungs, and /t-bolt-clamps using KWR terms and product group evidence.",
        expectedImpact:
          "High-intent shoppers get clearer landing pages for the product families most tied to revenue recovery.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO and AM",
        title: "KWR metadata and priority decision note",
        evidence:
          "The roadmap calls out unresolved decisions for Dual Seal, Mandrel bends, Silicone Hoses, Billet Merges, and Billet 90s before the remaining roadmap is ticketed.",
        recommendedAction:
          "Apply KWR variant rules to title, H1, and feed guidance, then prepare an AM-facing decision note for the named product conflicts. Clarify that Mandrel bends are covered under /intercooler-piping as child terms, not as a standalone category URL.",
        expectedImpact:
          "The team uses customer search language and client priorities without creating avoidable rework.",
      },
      {
        phase: "Month 3",
        specialists: "AIA SEO, content, web or platform owner",
        title: "Template cleanup, schema, and validation wave",
        evidence:
          "The crawl shows missing H1s and meta descriptions, duplicate product descriptions, long product titles, homepage title leakage, no product structured data, and unresolved GSC access.",
        recommendedAction:
          "Use the 2-hour dev tranche for heading/template and Product JSON-LD work, validate with crawl-based checks, build or optimize approved P2 category pages, and document durable platform rules.",
        expectedImpact:
          "Product and category pages become more distinct, the team can prove issue reduction, and future platform updates follow the same SEO standard.",
      },
    ],
  },
  approval: {
    title: "Decisions and specialists before launch",
    gates: [
      {
        timing: "Kickoff",
        label: "Access",
        title: "Grant canonical Search Console access or approve substitute QA",
        detail:
          "The current evidence says the HTTPS www or domain property is not available. Until access is granted, Month 1 and Month 3 validation should rely on crawl and Ahrefs substitutes.",
      },
      {
        timing: "Kickoff",
        label: "Feed",
        title: "Confirm Merchant Center and feed ownership",
        detail:
          "Shopping results appear for priority product clusters, so feed access and product eligibility need to be confirmed before optimization is planned.",
      },
      {
        timing: "Before Month 2",
        label: "Scope",
        title: "Confirm the first three P1 category URLs",
        detail:
          "Approve /v-band-clamps, /o2-sensor-bungs, and /t-bolt-clamps as the first build tranche, with /turbo-flanges and /intercooler-piping following after QA.",
      },
      {
        timing: "Before remaining tickets",
        label: "Products",
        title: "Resolve named product priority conflicts",
        detail:
          "Prepare decisions for Dual Seal naming, Mandrel bends placement under Intercooler Piping, Silicone Hoses demotion rationale, Billet Merges demand, and Billet 90s mapping or volume pull.",
      },
      {
        timing: "Month 2",
        label: "Naming",
        title: "Apply KWR vocabulary rules",
        detail:
          "Use winning variants such as o2 sensor bung, 02 sensor bung, v band clamp, and t bolt clamp in titles, H1s, feed titles, synonyms, and page briefs.",
      },
    ],
    decisions: [
      {
        label: "Approve the ticketed Month 1 sequence",
        detail:
          "Run technical foundation and Merchant Center first-pass work before investing heavily in new page copy.",
      },
      {
        label: "Build category pages in tranches",
        detail:
          "Start with the first three P1 pages in Month 2, QA them, then decide how quickly to scale Turbo Flanges, Intercooler Piping with Mandrel bends as child terms, and P2 targets.",
      },
      {
        label: "Resolve product priorities before more tickets",
        detail:
          "Dual Seal, Mandrel bends, Silicone Hoses, Billet Merges, and Billet 90s need AM and SEO alignment before the remaining content and metadata work is locked.",
      },
    ],
  },
};
