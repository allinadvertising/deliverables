import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

export const racePartsSolutionsKickoffV2: KickoffV2Data = {
  printAriaLabel: "Print Race Parts Solutions kickoff V2 as PDF",
  footerNote: "Race Parts Solutions SEO Strategy Kickoff | August 2026",
  cover: {
    clientName: "Race Parts Solutions",
    subtitle: "Your organic search strategy for the next three months.",
  },
  meta: [
    { label: "Period", value: "September to November 2026" },
    {
      label: "Business objective",
      value: "Grow non-brand revenue and recover qualified retail demand",
    },
    { label: "Roadmap", value: "Repair, consolidate, build demand" },
    {
      label: "Platform",
      value: "Custom ecommerce site, sitemap generator, redirect layer",
    },
  ],
  summary: {
    title: "What changes first",
    objectiveLabel: "Business objective",
    objective:
      "Use SEO to reverse the revenue trend by bringing more non-brand buyers to Race Parts Solutions, prioritizing house-made RPS inventory, and measuring organic impact through orders, revenue, and qualified product discovery.",
    lead:
      "Race Parts Solutions has a large product catalog, strong manufacturing value, and real demand clusters, but the current crawl signals make Google work too hard. The sitemap points to 1,641 non-www URLs that return 404, while 14,259 indexable URLs are missing from sitemap coverage.",
    emphasis:
      "The next three months should fix the technical foundation first, consolidate duplicate browse and index.php signals, then build clean category destinations around the product families most likely to support revenue.",
  },
  strategy: {
    title: "3 Month Roadmap",
    gridClassName: "lg:grid-cols-3",
    operatingPrinciple:
      "Lead with revenue and orders, then show the SEO work that made priority products easier to find.",
    phases: [
      {
        accent: "blue",
        month: "Month 1",
        theme: "Repair the crawl foundation",
        objective:
          "Fix the sitemap host, add a catch-all non-www to www redirect, remove utility and parameter URLs from sitemap files, and confirm Merchant Center and Search Console access.",
        deliverable: "Technical foundation and access baseline",
        businessOutcome:
          "Google receives a clean preferred domain signal, the team can validate releases, and organic shopping work can start from the right access point.",
      },
      {
        accent: "gold",
        month: "Month 2",
        theme: "Consolidate demand paths",
        objective:
          "Resolve index.php duplicates, canonicalize faceted browse URLs, strip internal product tracking parameters, and approve the first clean category URLs.",
        deliverable: "Duplicate consolidation and category architecture release",
        businessOutcome:
          "More ranking value points to the pages customers should actually land on, instead of being split across internal search and duplicate URL patterns.",
      },
      {
        accent: "blue",
        month: "Month 3",
        theme: "Scale product visibility",
        objective:
          "Repair browse headings and meta descriptions, fix homepage template leaks, improve product titles and descriptions, add Product structured data, and document durable URL rules.",
        deliverable: "Template, product, and governance rollout",
        businessOutcome:
          "Priority products and categories become clearer to shoppers and search engines, while future site work follows the same SEO rules.",
      },
    ],
  },
  focus: {
    title: "Six priorities for organic revenue recovery",
    volumeLabel: "Evidence",
    scopeLabel: "Scope impact",
    footnote:
      "Evidence comes from the Race Parts Solutions consolidated SEO roadmap, technical and content SEO audit, keyword strategy, and intake materials dated August 2026. Search Console access for the canonical HTTPS or domain property was not available, so early validation should use crawl and Ahrefs evidence until access is granted.",
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
          "The keyword strategy prioritizes V-Bands at 10,280 US searches per month and 96% house-made, O2 and weld-on bungs at 4,900 searches, T-Bolt Clamps at 2,030 searches and 100% house-made, plus Turbo Flanges and Intercooler Piping.",
        volume: "Five P1 category destinations",
        scopeImpact: "Category architecture, internal links, product grouping",
        expectedImpact:
          "Retail buyers can land on focused commercial pages instead of generic browse results, with the first build weighted toward higher-margin RPS-made inventory.",
        recommendedAction:
          "Approve clean pages for /v-band-clamps, /o2-sensor-bungs, /t-bolt-clamps, /turbo-flanges, and /intercooler-piping, then rewrite /turbo-piping and /air-fuel-delivery in place.",
        status: "P1, revenue architecture",
      },
      {
        number: "04",
        title: "Confirm Merchant Center scope and feed access",
        businessObjective:
          "Make product visibility competitive where Google places Shopping results above organic listings.",
        evidence:
          "Every checked priority cluster showed Shopping results, and the roadmap notes that Merchant Center access and feed status still need confirmation.",
        volume: "3 verified Shopping-block clusters",
        scopeImpact: "Merchant Center, product feed, product titles, price and availability",
        expectedImpact:
          "Product titles, feed labels, availability, and pricing can support organic shopping eligibility and product discovery without promising a specific revenue lift.",
        recommendedAction:
          "Confirm Merchant Center ownership, audit the active feed, align product titles with winning keyword variants, and check price and availability fields before optimization.",
        status: "P0, access gate",
      },
      {
        number: "05",
        title: "Repair headings, metadata, and structured data",
        businessObjective:
          "Make each important page explain its product, category, and offer clearly.",
        evidence:
          "The audit found 11,203 URLs without an H1, 11,200 missing meta descriptions, 6,372 titles over 60 characters, 3,016 duplicate meta descriptions, and no structured data across 14,259 URLs.",
        volume: "14,259 URLs without structured data",
        scopeImpact: "Browse templates, product templates, homepage, schema",
        expectedImpact:
          "Search snippets and page topics become cleaner at scale, especially for product and category pages that should support revenue.",
        recommendedAction:
          "Fix the newsletter H2 placement, add browse H1 and meta rules, repair the homepage title leak, put product names first in titles, and add Product, Offer, BreadcrumbList, and Organization schema where applicable.",
        status: "P1, template scale",
      },
      {
        number: "06",
        title: "Align reporting around orders and product discovery",
        businessObjective:
          "Show progress in the language the client cares about: traffic that turns into sales.",
        evidence:
          "The intake and handoff materials frame the goal as reversing the revenue line, getting non-brand buyers to the site, and reporting organic revenue, orders, non-brand sessions, Merchant Center performance, and category-page performance.",
        volume: "Non-brand organic around 63 visits per month",
        scopeImpact: "Reporting, access, top-product list, category approvals",
        expectedImpact:
          "Biweekly updates stay focused on business movement first, with keyword counts used only as supporting evidence.",
        recommendedAction:
          "Secure canonical Search Console access, confirm analytics and ecommerce revenue visibility, get John's top 10 to 20 product list, and map the first reporting view around revenue, orders, non-brand traffic, and priority-category performance.",
        status: "P0, measurement",
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
        title: "Replace internal search URLs with clean buyer destinations",
        currentLabel: "Current pattern",
        current: [
          "/browse?category=9354 and page variants compete with each other",
          "Product links carry category and brand tracking parameters",
        ],
        targetLabel: "Target pattern",
        target: [
          "/v-band-clamps and related category pages become clean entry points",
          "Internal links point to canonical product URLs without tracking parameters",
        ],
        decision:
          "Approve the first P1 category URL set and confirm it fits the no-rebuild scope.",
        impact:
          "Buyers searching for high-value parts land on understandable category pages instead of duplicated internal-search results.",
        proof:
          "Crawl validation shows canonical category URLs, stripped product parameters, and internal links pointing at the approved destinations.",
      },
    ],
    artifacts: [
      {
        phase: "Month 1",
        specialists: "AIA SEO, account team, web or platform owner",
        title: "Sitemap and redirect release brief",
        evidence:
          "The roadmap confirms a sitemap host mismatch and missing catch-all redirects for deep non-www URLs.",
        recommendedAction:
          "Document the exact redirect and sitemap generator changes, coordinate release ownership, and verify with a fresh crawl.",
        expectedImpact:
          "Google receives live canonical URLs and the team has a clean baseline for the next phase.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO and account team",
        title: "Access and measurement baseline",
        evidence:
          "Search Console access is not available for the canonical HTTPS or domain property, and Merchant Center status is still open.",
        recommendedAction:
          "Request Search Console, analytics, ecommerce, Merchant Center, and feed access, then define the first order and revenue reporting view.",
        expectedImpact:
          "Performance conversations can focus on organic revenue, orders, non-brand traffic, and priority product discovery.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO, content, web or platform owner",
        title: "Duplicate URL consolidation plan",
        evidence:
          "The audit identifies index.php duplicates, browse parameter duplication, and parameterized product links as major crawl and duplication drivers.",
        recommendedAction:
          "Map redirects, canonicals, internal-link rules, sitemap exclusions, and release QA for each duplicate URL family.",
        expectedImpact:
          "Ranking signals consolidate around clean URLs before new category work scales.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO, content, account team",
        title: "Priority category buildout",
        evidence:
          "The keyword strategy ranks V-Bands, O2 Sensor Bungs, T-Bolt Clamps, Turbo Flanges, and Intercooler Piping as the first clean category opportunities.",
        recommendedAction:
          "Approve page names, product groupings, internal links, and first copy rules for the P1 category pages.",
        expectedImpact:
          "High-intent shoppers get clearer landing pages for the product families most tied to revenue recovery.",
      },
      {
        phase: "Month 3",
        specialists: "AIA SEO, content, web or platform owner",
        title: "Template and product metadata rollout",
        evidence:
          "The crawl shows missing H1s and meta descriptions, duplicate product descriptions, long product titles, homepage title leakage, and no product structured data.",
        recommendedAction:
          "Deploy browse, homepage, and product-template rules, then validate representative pages with a fresh crawl.",
        expectedImpact:
          "Product and category pages become more distinct, more useful in search results, and easier to maintain.",
      },
    ],
  },
  approval: {
    title: "Decisions and specialists before launch",
    gates: [
      {
        timing: "Kickoff",
        label: "Access",
        title: "Grant canonical Search Console access",
        detail:
          "The current evidence says the HTTPS www or domain property is not available. Until access is granted, validation should rely on crawl and Ahrefs substitutes.",
      },
      {
        timing: "Kickoff",
        label: "Feed",
        title: "Confirm Merchant Center and feed ownership",
        detail:
          "Shopping results appear for priority product clusters, so feed access and product eligibility need to be confirmed before optimization is planned.",
      },
      {
        timing: "Before build",
        label: "Scope",
        title: "Confirm the first clean category URLs",
        detail:
          "Approve the P1 category set and confirm the 8 to 10 clean category destinations fit within the no website rebuild scope.",
      },
      {
        timing: "Before content",
        label: "Products",
        title: "Share the top product list and house-made prefixes",
        detail:
          "John's top 10 to 20 products and the confirmed house-made SKU prefixes will help prioritize pages by revenue value, not search volume alone.",
      },
      {
        timing: "Month 2",
        label: "Naming",
        title: "Decide how to position Dual Seal Connectors",
        detail:
          "The product line is 100% house-made but has no measurable demand under that name, so it needs a naming decision before SEO page creation.",
      },
    ],
    decisions: [
      {
        label: "Approve technical foundation first",
        detail:
          "Sitemap, redirect, duplicate URL, and access work should happen before the team invests heavily in new page copy.",
      },
      {
        label: "Prioritize house-made RPS inventory",
        detail:
          "The keyword strategy shows that search volume alone can push low-margin resold products too high. Category order should favor search demand, manufacturing margin, and product availability together.",
      },
      {
        label: "Report business outcomes before keyword counts",
        detail:
          "Biweekly updates should lead with organic revenue, orders, non-brand sessions, Merchant Center or organic shopping visibility, and category-page performance.",
      },
    ],
  },
};
