import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

export const eightyEightGearKickoffV2: KickoffV2Data = {
  printAriaLabel: "Print 88 Gear kickoff V2 as PDF",
  footerNote: "88 Gear SEO Strategy Kickoff | September 2026",
  cover: {
    clientName: "88 Gear",
    subtitle: "Your organic search strategy for the next three months.",
  },
  meta: [
    { label: "Period", value: "September to November 2026" },
    {
      label: "Business objective",
      value: "Grow organic sales while keeping paid media steady",
    },
    { label: "Roadmap", value: "Access, feed, crawl, snow, conversion" },
    { label: "Platform", value: "Shopify, Merchant Center, GA4 and GTM pending" },
  ],
  summary: {
    title: "What changes first",
    objectiveLabel: "Business objective",
    objective:
      "Use SEO to help 88 Gear grow online revenue toward the owner's $1.5M to $1.6M goal by improving organic Shopping eligibility, cleaning Shopify URL waste, and turning collection and guide visibility into product discovery.",
    lead:
      "88 Gear is already visible. Search Console shows 25,643 clicks from 5,723,815 impressions over 12 months, but collections earn 45.8% of impressions at only 0.27% CTR while products convert impressions at 0.59% CTR. The gap is not demand, it is how commercial demand lands.",
    emphasis:
      "The first month should deliver visible wins before the 2026-09-20 invoice: confirm access, repair feed eligibility, contain crawl waste, clean the highest-impact empty collections, and move snow work first because it was already promised before winter traffic.",
  },
  strategy: {
    title: "3 Month Roadmap",
    gridClassName: "lg:grid-cols-3",
    operatingPrinciple:
      "Fix the systems that directly affect revenue reporting, product eligibility, and collection quality before building broader growth content.",
    phases: [
      {
        accent: "blue",
        month: "Month 1",
        theme: "Access, feed, and snow-first containment",
        objective:
          "Confirm Shopify, GSC, GA4, GTM, Merchant Center, Google Ads, Meta, and Omnisend access, fix Merchant Center feed attributes, rewrite robots controls, start product URL consolidation, clean priority empty collections, and map the first snow collections.",
        deliverable: "Month-one deliverables before the September 20 invoice",
        businessOutcome:
          "The client sees tangible movement in the first billing cycle: product eligibility improves, crawl waste starts shrinking, empty navigation pages stop wasting demand, and the snow promise is protected.",
      },
      {
        accent: "gold",
        month: "Month 2",
        theme: "URL hygiene and content conversion",
        objective:
          "Group the remaining crawled-not-indexed patterns, run a controlled redirect and canonical cleanup tranche, merge cannibalizing blog posts, and add stronger product paths from high-ranking guides.",
        deliverable: "Crawled-not-indexed, handle hygiene, and guide-to-product release",
        businessOutcome:
          "Existing authority starts feeding products and collections instead of leaking into old app paths, typo handles, empty pages, or informational dead ends.",
      },
      {
        accent: "blue",
        month: "Month 3",
        theme: "Growth, authority, and reporting refinement",
        objective:
          "Select the next collection title and internal-link batch, monitor spam anchors, scope one size-chart authority asset, and refine reporting around revenue, organic orders, AOV, Organic Shopping, and collection performance.",
        deliverable: "Growth and authority refinement plan",
        businessOutcome:
          "The account moves from cleanup into sustainable growth while staying scoped to what the first two months prove.",
      },
    ],
  },
  focus: {
    title: "Six priorities for organic revenue growth",
    volumeLabel: "Evidence",
    scopeLabel: "Scope impact",
    footnote:
      "Evidence comes from the 88 Gear consolidated SEO roadmap, KWR, SEO action items, Deep SEO Analysis, and Knowledge Center context dated August and September 2026. The plan treats the supplied 88 Gear Drive folder as the source of truth.",
    items: [
      {
        number: "01",
        title: "Confirm access and revenue reporting first",
        businessObjective:
          "Make sure every fix can be deployed and measured against sales, not just rankings.",
        evidence:
          "The Deep SEO records Shopify, GA4, GTM, Merchant Center, GSC, Google Ads, Meta, and Omnisend access as open or pending, and the client technical profile was empty when the audit was written.",
        volume: "First SEO-credit gate",
        scopeImpact: "Shopify, GSC, GA4, GTM, Merchant Center, Google Ads, Meta, Omnisend",
        expectedImpact:
          "The team can tie work back to organic revenue, orders, AOV, Organic Shopping, and collection performance once implementation starts.",
        recommendedAction:
          "Confirm and document access before implementation, then set the first reporting baseline before the 2026-09-02 strategy review and the 2026-09-20 invoice window.",
        status: "P0, do first",
      },
      {
        number: "02",
        title: "Fix Merchant Center eligibility in week one",
        businessObjective:
          "Recover product visibility without depending on more paid spend.",
        evidence:
          "Merchant Center shows 3.32K products missing age group, 3.82K missing gender, missing prices, 183 products not approved, 35 limited products, and product clicks down 34.7% in the last 28 days.",
        volume: "13.36K product clicks, down 34.7%",
        scopeImpact: "Feed rules, Shopify source fields, price, gender, age group, approvals",
        expectedImpact:
          "More products become eligible for Google Shopping surfaces, giving the team an early visible win while paid remains steady.",
        recommendedAction:
          "Fix age group, gender, and missing price mapping through feed rules or Shopify fields, coordinate with the outside paid-media provider, and recheck status after Merchant Center refreshes.",
        status: "P0, fastest visible win",
      },
      {
        number: "03",
        title: "Contain Shopify crawl and URL waste",
        businessObjective:
          "Stop technical debt from splitting product equity and distracting Google from real shopping pages.",
        evidence:
          "The Deep SEO shows 23K not-indexed pages, 10,831 canonical alternates, 2,626 redirects, 2,514 blocked by robots.txt, 1,063 long-standing 404s, and 4,238 crawled-but-not-indexed URLs.",
        volume: "23K not indexed, 4.96K indexed",
        scopeImpact: "Robots.txt, /products/ URLs, /a/s/ paths, vendor paths, variants, suffix handles",
        expectedImpact:
          "Product authority consolidates behind clean Shopify URLs and crawl attention shifts away from feeds, filters, legacy app paths, and dead product handles.",
        recommendedAction:
          "Rewrite robots controls, consolidate collection-relative and vendor product URLs to /products/handle, 301 legacy /a/s/products/ paths, and canonicalize variant URLs without breaking variant selection.",
        status: "P0, technical containment",
      },
      {
        number: "04",
        title: "Clean empty collections and lead with snow",
        businessObjective:
          "Convert existing impressions before creating new demand and honor the winter commitment.",
        evidence:
          "KWR found 50 empty collections earning 50,848 impressions per year, 29 of them linked from the main navigation. Snow was promised first, and the first three snow clusters carry 994K combined mapped search volume.",
        volume: "50 empty collections, 994K snow volume",
        scopeImpact: "Navigation, collection pages, snowboards, bindings, boots, jackets, pants, gloves",
        expectedImpact:
          "Searchers stop landing on empty shelves, and 88 Gear has useful snow destinations ready before seasonal demand peaks.",
        recommendedAction:
          "Decide whether to fill, merge, noindex, or remove empty navigation collections. Start snow work with accessories, boards and bindings, and outerwear, including the snow-googles handle typo and Snow Pants naming.",
        status: "P1, month-one content focus",
      },
      {
        number: "05",
        title: "Turn ranking guides and blogs into product paths",
        businessObjective:
          "Use existing content authority to support commercial pages and sales.",
        evidence:
          "The wakeboard size chart ranks position 2 for a 1.5K keyword, the life vest size guide ranks position 1, and GSC AI features show 113K AI impressions. Blog cannibalization includes foot-straps, reef posts, and Mission Echo product intent.",
        volume: "113K AI impressions",
        scopeImpact: "Guides, blog posts, wakesurf collections, reef guide, product CTAs",
        expectedImpact:
          "Informational assets keep their value while sending more visitors to relevant collections and products.",
        recommendedAction:
          "Merge or redirect cannibalizing posts where needed, then add product CTAs, brand comparison links, and collection links to the highest-value guides.",
        status: "P1, conversion path",
      },
      {
        number: "06",
        title: "Protect authority and align category language",
        businessObjective:
          "Compete against manufacturers and retail rivals using the categories customers actually search.",
        evidence:
          "Ahrefs shows DR 14 while direct competitors sit at DR 33 or higher, plus a spam-anchor wave from 227 referring domains. KWR also resolves key naming decisions: Ballast Bags and Pumps, Foil Boards, and Snow Pants.",
        volume: "2,442 striking-distance queries",
        scopeImpact: "Backlinks, collection names, titles, metas, internal links, future content",
        expectedImpact:
          "88 Gear protects existing rankings, avoids risky link cleanup, and builds category pages around verified demand instead of internal wording.",
        recommendedAction:
          "Freeze purchased link acquisition, monitor spam monthly, build linkable assets from size charts, and approve the terminology map before category renames or new pages.",
        status: "P2, growth guardrail",
      },
    ],
  },
  execution: {
    title: "What changes, who decides, and how we prove it",
    artifactsTitle: "Evidence, action, impact, and specialists",
    examples: [
      {
        eyebrow: "Commercial landing pages",
        title: "Fix empty collections before adding more content",
        currentLabel: "Current state",
        current: [
          "Fifty empty collections earn impressions with nothing to buy",
          "Twenty-nine empty collections are still linked from main navigation",
        ],
        targetLabel: "Target state",
        target: [
          "Each empty collection has a fill, merge, noindex, or remove decision",
          "Snow pages are ready before winter traffic",
        ],
        decision:
          "Approve the empty-collection decisions and the snow-first collection order.",
        impact:
          "Month-one content work starts with pages that already get demand and can affect revenue faster.",
        proof:
          "Live Shopify checks confirm product availability, navigation status, title, meta, H1, and indexation decision for each priority collection.",
      },
      {
        eyebrow: "Product eligibility",
        title: "Make products eligible where shoppers already search",
        currentLabel: "Current feed",
        current: [
          "3.32K products missing age group",
          "3.82K products missing gender, plus missing prices and disapprovals",
        ],
        targetLabel: "Target feed",
        target: [
          "Feed rules or Shopify fields populate required attributes",
          "Priority products are rechecked after Merchant Center refreshes",
        ],
        decision:
          "Confirm Merchant Center ownership and paid-media coordination before feed changes.",
        impact:
          "Product visibility can improve in Shopping surfaces without breaking paid campaigns.",
        proof:
          "Merchant Center shows reduced attribute warnings, fewer disapprovals, and a documented click trend after refresh.",
      },
    ],
    artifacts: [
      {
        phase: "Month 1",
        specialists: "AIA SEO, AM, owner, platform and analytics owners",
        title: "Access and reporting baseline",
        evidence:
          "The roadmap marks access as the first gate because Shopify, GA4, GTM, GSC, Merchant Center, Google Ads, Meta, and Omnisend access affect deployment and reporting.",
        recommendedAction:
          "Confirm access, document what All In can edit, and establish reporting around organic revenue, orders, AOV, Organic Shopping, and collection performance.",
        expectedImpact:
          "The team can move quickly without reporting only rankings or creating implementation blockers.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO, feed specialist, paid-media coordination",
        title: "Merchant Center first pass",
        evidence:
          "Feed issues include thousands of missing age group and gender attributes, missing prices, 183 not-approved products, and a 34.7% click drop.",
        recommendedAction:
          "Repair the highest-confidence feed attributes and coordinate campaign-sensitive fields with the outside paid-media provider.",
        expectedImpact:
          "The first visible win is tied to products and Shopping eligibility, not just a planning document.",
      },
      {
        phase: "Month 1",
        specialists: "AIA Dev, AIA SEO, Shopify owner",
        title: "Robots and Shopify URL containment",
        evidence:
          "The audit shows robots-blocked commercial risk, canonical alternates, redirect buckets, long-standing 404s, /a/s/ paths, vendor paths, and variant URL signal splits.",
        recommendedAction:
          "Rewrite robots controls, consolidate product URL variants, map legacy app paths, and validate with GSC and crawl checks.",
        expectedImpact:
          "Google spends more time on real products and collections and less on machine-generated or dead URL space.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO, content, Shopify collection owner",
        title: "Empty collections and snow-first plan",
        evidence:
          "KWR identifies 50 empty collections with 50,848 annual impressions and places snow accessories, boards and bindings, and outerwear first because snow was promised.",
        recommendedAction:
          "Make collection decisions, map first snow URLs and keyword angles, prepare briefs, and QA SEO fields and internal links.",
        expectedImpact:
          "The first content credits go to pages that can protect client confidence before winter demand.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO, AIA Dev, content",
        title: "Handle hygiene and guide-to-product conversion",
        evidence:
          "The roadmap queues crawled-not-indexed grouping, redirect and typo handle cleanup, blog cannibalization, and guide CTA work for Month 2.",
        recommendedAction:
          "Group remaining URL patterns, run a 2-hour cleanup tranche, select blog and guide URLs with KWR context, and refresh the first asset.",
        expectedImpact:
          "Existing rankings and guides start supporting commercial pages instead of competing with them.",
      },
      {
        phase: "Month 3",
        specialists: "AIA SEO, content, AM",
        title: "Growth, authority, and reporting refinement",
        evidence:
          "Month 3 is intentionally light until Month 1 and Month 2 results are known, with focus on collection titles, internal links, spam monitoring, and one linkable size-chart asset.",
        recommendedAction:
          "Select the next approved collection batch, monitor spam anchors, scope one linkable guide enhancement, and refine reporting for business outcomes.",
        expectedImpact:
          "88 Gear scales from cleanup into growth without overbuilding tickets before evidence comes back.",
      },
    ],
  },
  approval: {
    title: "Decisions and specialists before launch",
    gates: [
      {
        timing: "Kickoff",
        label: "Access",
        title: "Confirm edit and reporting access",
        detail:
          "Shopify, GSC, GA4, GTM, Merchant Center, Google Ads, Meta, and Omnisend access should be confirmed before implementation or revenue reporting starts.",
      },
      {
        timing: "Week 1",
        label: "Feed",
        title: "Coordinate Merchant Center with paid media",
        detail:
          "Feed changes should improve Organic Shopping eligibility while protecting paid Shopping campaigns run by the outside provider.",
      },
      {
        timing: "Month 1",
        label: "Collections",
        title: "Approve empty-collection decisions",
        detail:
          "The team needs fill, merge, noindex, or remove decisions for empty nav collections such as kneeboards, electric-sunglasses, brigade-wakesufers, womens-wakeboards, billabong-life-vests, and wake-skates.",
      },
      {
        timing: "Month 1",
        label: "Seasonality",
        title: "Approve the snow-first order",
        detail:
          "Snow should lead because it was promised ahead of winter traffic, with snow accessories, boards and bindings, and outerwear prioritized first.",
      },
      {
        timing: "Before growth",
        label: "Naming",
        title: "Approve category terminology",
        detail:
          "Confirm Ballast Bags and Pumps, Foil Boards instead of efoil, Snow Pants for pants pages, and the $100 online price-floor treatment for Crocs boots.",
      },
    ],
    decisions: [
      {
        label: "Lead with month-one deliverables",
        detail:
          "The first client-facing progress story should show access, Merchant Center, crawl containment, empty collection cleanup, and snow progress before the September 20 invoice.",
      },
      {
        label: "Protect revenue reporting",
        detail:
          "Updates should lead with organic revenue, orders, AOV, Organic Shopping, and collection performance once tracking access is confirmed.",
      },
      {
        label: "Respect category guardrails",
        detail:
          "Avoid women's overall, eyewear, low-ticket apparel, thin-stock items, and unsupported efoil targeting unless the owner changes direction.",
      },
    ],
  },
};
