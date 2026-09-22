import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

export const rigOutfittersKickoffV2: KickoffV2Data = {
  printAriaLabel: "Print Rig Outfitters kickoff as PDF",
  footerNote: "Rig Outfitters SEO Action Plan | September 2026",
  cover: {
    clientName: "Rig Outfitters",
    subtitle: "A shared SEO action plan for online sales and local visibility.",
  },
  meta: [
    { label: "Period", value: "September to November 2026" },
    {
      label: "Business objective",
      value: "Grow online sales and improve local discovery in Hobbs",
    },
    { label: "Primary contact", value: "Josie, website and marketing" },
    { label: "Business approver", value: "Joe, products, pricing and offers" },
    { label: "Account manager", value: "Greg Swain" },
  ],
  summary: {
    title: "The plan in one page",
    objectiveLabel: "Business objective",
    objective:
      "Help more shoppers find and buy from Rig Outfitters by improving priority ecommerce pages, resolving catalog and Merchant Center issues, and building stronger local visibility for the Hobbs store.",
    lead:
      "The foundation is already underway. The technical audit, keyword research, Deep SEO Analysis, roadmap, August metadata work, six-page schema batch, Mailchimp review, and initial Portwest feasibility review are complete within their documented scope.",
    emphasis:
      "The next phase is shared but simple. Rig Outfitters supplies product facts, commercial priorities, access, and approvals. All In Advertising handles SEO research, writing, technical coordination, implementation within scope, and verification.",
  },
  strategy: {
    title: "3 Month Roadmap",
    gridClassName: "lg:grid-cols-3",
    operatingPrinciple:
      "Validate current conditions before implementation, work from exact URLs, and keep every action tied to an owner, approval, and proof of completion.",
    phases: [
      {
        accent: "blue",
        month: "Month 1",
        theme: "Confirm and unblock",
        objective:
          "Reconcile completed work, confirm the current catalog editing path, finish the Merchant Center returns policy specification, and export the current crawled-not-indexed URL set before choosing fixes.",
        deliverable:
          "Verified status register, access decision, returns policy handoff, and classified URL evidence",
        businessOutcome:
          "Both teams know what is complete, what is blocked, and what should move next without repeating work.",
      },
      {
        accent: "gold",
        month: "Month 2",
        theme: "Fix the catalog patterns",
        objective:
          "Use the classified URL evidence to address the largest valid catalog pattern, separate organic web and Shopping reporting, and prepare the first exact product and category optimization batch.",
        deliverable:
          "Catalog correction tranche, channel baseline, and approved priority URL list",
        businessOutcome:
          "Search work is focused on real product opportunities and measured by the correct channel.",
      },
      {
        accent: "blue",
        month: "Month 3",
        theme: "Turn priorities into growth",
        objective:
          "Diagnose current Merchant Center disapprovals, create client-review-ready FR workwear and Stanley content for exact URLs, and finalize one practical online promotion concept for boots or Q4.",
        deliverable:
          "Disapproval diagnosis, approved content release, and promotion brief",
        businessOutcome:
          "The account moves from diagnosis into product visibility, useful content, and a measurable sales opportunity.",
      },
    ],
  },
  focus: {
    title: "Six priorities for the shared plan",
    volumeLabel: "Evidence",
    scopeLabel: "Ownership",
    footnote:
      "This kickoff uses the client call transcripts through September 2, 2026, the July audit and KWR, the August Deep SEO Analysis and consolidated roadmap, and current ClickUp task descriptions and implementation comments reviewed on September 12, 2026. Historical issue counts must be refreshed before execution.",
    items: [
      {
        number: "01",
        title: "Lock the real starting point",
        businessObjective:
          "Keep the next plan focused on work that is still needed.",
        evidence:
          "August metadata implementation is closed, with 22 URL or path variants documented as passing. The repeated Store H1 was also documented as already resolved. Six-page schema installation is closed.",
        volume: "22 metadata checks passed",
        scopeImpact: "AIA verifies; no client action required",
        expectedImpact:
          "The team avoids repeating completed metadata and heading work and can focus resources on open priorities.",
        recommendedAction:
          "Create one status register that distinguishes completed work, verified live results, pending tasks, proposals, and items that need fresh evidence.",
        status: "P0, first action",
      },
      {
        number: "02",
        title: "Confirm how the catalog should be edited",
        businessObjective:
          "Make future product updates at the most reliable source without disrupting working fixes.",
        evidence:
          "The August implementation comment says AIA did not have direct Ecwid admin access and used a controlled WordPress metadata override. The record does not show that the client rejected access or that the request is still open today.",
        volume: "One access question to resolve",
        scopeImpact: "AIA confirms first; Josie coordinates only if access is still needed",
        expectedImpact:
          "Product data, SEO fields, and WordPress changes each have a clear editing owner.",
        recommendedAction:
          "Greg confirms whether access was requested and whether it remains necessary. If it is needed, give Josie the exact permission request. Preserve the working WordPress override until a replacement is tested.",
        status: "P0, verify before client request",
      },
      {
        number: "03",
        title: "Complete the Merchant Center business inputs",
        businessObjective:
          "Improve product eligibility and store trust using accurate business terms.",
        evidence:
          "The roadmap recorded an incomplete returns policy and 222 not-approved products in the August snapshot. A September specification task is pending, and the disapproval diagnosis is scheduled later.",
        volume: "August snapshot: 222 not approved",
        scopeImpact: "Joe approves terms; Josie supplies facts; AIA diagnoses and coordinates",
        expectedImpact:
          "Merchant Center reflects the real store policy and the team fixes disapprovals by source pattern instead of item by item.",
        recommendedAction:
          "Refresh the account status, approve the actual returns terms, complete the implementation handoff, then group current disapprovals by reason and fix the largest valid source issue.",
        status: "P0, current status required",
      },
      {
        number: "04",
        title: "Classify indexation before changing pages",
        businessObjective:
          "Protect useful product URLs and avoid spending content time on pages that should consolidate or remain unindexed.",
        evidence:
          "The August roadmap recorded 426 crawled-not-indexed pages and 226 404s, but the source audit did not include the full URL samples needed to confirm their composition.",
        volume: "August snapshot: 426 unindexed and 226 404",
        scopeImpact: "AIA exports and classifies; client confirms product relationships",
        expectedImpact:
          "Each group receives the right treatment: keep, improve, consolidate, redirect, remove, or leave unindexed.",
        recommendedAction:
          "Export fresh URL lists and classify them first. Ask Josie only for decisions AIA cannot infer, such as true replacements for retired products or whether similar categories serve different shoppers.",
        status: "P0, diagnosis before repair",
      },
      {
        number: "05",
        title: "Build the first product growth batch",
        businessObjective:
          "Focus organic work on products that can produce sales online and locally.",
        evidence:
          "Joe identified safety-toe boots as a strong ecommerce opportunity because they are practical to ship and carry good margins. FR apparel, Stanley, and RTIC also appear repeatedly in the client calls and SEO sources.",
        volume: "Start with exact URLs, not the full catalog",
        scopeImpact: "Client supplies facts and priorities; AIA writes and implements",
        expectedImpact:
          "Priority pages contain accurate buyer information and target demand that matches inventory and commercial value.",
        recommendedAction:
          "Joe confirms the product order. Josie supplies specifications, stock constraints, photos, and common questions. AIA selects exact URLs, researches demand, writes the SEO content, obtains factual approval, implements within scope, and verifies the live pages.",
        status: "P1, first content batch",
      },
      {
        number: "06",
        title: "Coordinate growth projects without mixing scope",
        businessObjective:
          "Use email, promotions, Portwest, and local visibility as clear opportunities with separate decisions.",
        evidence:
          "Josie asked for online promotion guidance on September 2. The Mailchimp review is complete, while platform migration is not. Portwest feasibility is documented, while supplier discovery, a firm quote, and implementation remain open.",
        volume: "Four related workstreams",
        scopeImpact: "Joe and Josie decide; Greg coordinates; AIA scopes each deliverable",
        expectedImpact:
          "Each opportunity can move forward with a clear owner, cost, approval, and measurement plan.",
        recommendedAction:
          "Prepare one boots or Q4 promotion brief, confirm the email platform and operating owner, obtain the Portwest representative contact for supplier discovery, and validate the current local profile and landing-page needs before proposing changes.",
        status: "P1, separate approval paths",
      },
    ],
  },
  execution: {
    title: "What each team owns",
    artifactsTitle: "Evidence, action, impact, and owners",
    examples: [
      {
        eyebrow: "Product content",
        title: "Turn store expertise into search-ready pages",
        currentLabel: "Client contribution",
        current: [
          "Priority, margin, inventory, specifications, photos, and common questions",
          "Factual review before implementation",
        ],
        targetLabel: "AIA delivery",
        target: [
          "Keyword and URL selection, copy, metadata, internal links, and implementation notes",
          "Live-page QA after approved implementation",
        ],
        decision:
          "Joe approves the product order. Josie confirms facts. Greg coordinates the approval path.",
        impact:
          "The client shares expertise without being assigned SEO writing that belongs to AIA.",
        proof:
          "Each approved URL has source inputs, final copy, implementation status, and a live QA record.",
      },
      {
        eyebrow: "Catalog health",
        title: "Diagnose the pattern before choosing the fix",
        currentLabel: "What is known",
        current: [
          "Historical GSC and Merchant Center counts identify material URL and product groups",
          "The source reports do not prove every URL has the same cause",
        ],
        targetLabel: "What must be proven",
        target: [
          "Fresh exports grouped by product, variant, category, facet, retired item, or other type",
          "A treatment and owner for every priority group",
        ],
        decision:
          "AIA decides the technical treatment. Rig Outfitters confirms only business facts and true product relationships.",
        impact:
          "The work fixes root causes and avoids unnecessary page changes.",
        proof:
          "Before and after exports, exact URL samples, live checks, and task-level completion evidence.",
      },
    ],
    artifacts: [
      {
        phase: "Complete",
        specialists: "AIA SEO, content, development, email, and account management",
        title: "Foundation and documented delivery",
        evidence:
          "Audit, KWR, Deep SEO Analysis, roadmap, August metadata, six-page schema, Mailchimp review, and Portwest feasibility work are documented as complete within their individual scopes.",
        recommendedAction:
          "Carry these forward as the baseline and record their limits. Do not present completed planning as proof that every recommendation is live.",
        expectedImpact:
          "The client sees progress clearly and the team starts the next phase from an accurate record.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO, Greg, Josie, Joe, and the implementation owner",
        title: "Status, access, returns, and indexation",
        evidence:
          "Current ClickUp tasks include the Merchant Center returns policy specification and crawled-not-indexed classification. Catalog access was unresolved in the August implementation comment.",
        recommendedAction:
          "Confirm current access, finalize the returns handoff, export current URL evidence, and record owner and acceptance criteria for each open item.",
        expectedImpact:
          "The next implementation tranche is based on current evidence and has no hidden ownership gaps.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO, development, analytics, and catalog owner",
        title: "Catalog correction and channel reporting",
        evidence:
          "October tasks include catalog variant consolidation and separate organic web and Shopping reporting. Classification must come first, and comparable periods and channel definitions must be confirmed.",
        recommendedAction:
          "Fix the largest verified catalog pattern, verify results, and report organic web and Shopping separately without claiming a combined net change unless overlap is ruled out.",
        expectedImpact:
          "The client receives a clearer performance story and the catalog work addresses a proven pattern.",
      },
      {
        phase: "Month 3",
        specialists: "AIA SEO, content writer, developer, Greg, Joe, and Josie",
        title: "Product visibility and content release",
        evidence:
          "November tasks include Merchant Center disapproval diagnosis and FR workwear and Stanley category content, with a client review gate before implementation.",
        recommendedAction:
          "Refresh the disapproval evidence, define exact category URLs, write and review the content, then implement only the approved release.",
        expectedImpact:
          "Priority products gain stronger visibility through accurate feed data and useful category content.",
      },
      {
        phase: "Parallel discovery",
        specialists: "Greg, AIA specialists, client developer, and Portwest representative",
        title: "Email, promotions, Portwest, and local visibility",
        evidence:
          "Each workstream has client interest, but each requires a different business decision, technical owner, or supplier input.",
        recommendedAction:
          "Keep separate briefs and approval gates. Confirm current pricing and ownership before migration, margin before promotions, supplier data before a Portwest quote, and current local assets before proposing local changes.",
        expectedImpact:
          "Growth ideas move forward without becoming unapproved delivery promises.",
      },
    ],
  },
  approval: {
    title: "Decisions and checkpoints",
    gates: [
      {
        timing: "Before asking the client for access",
        label: "Catalog",
        title: "Confirm whether direct Ecwid access is still required",
        detail:
          "Greg first checks whether access was requested or later granted. If it is still needed, Josie receives one exact permission request.",
      },
      {
        timing: "Before Merchant Center implementation",
        label: "Policy",
        title: "Joe approves the real returns terms",
        detail:
          "AIA can configure or coordinate the setting only after the business terms are confirmed and matched to the website.",
      },
      {
        timing: "Before catalog repairs",
        label: "Evidence",
        title: "Refresh and classify the affected URLs",
        detail:
          "Historical totals guide the investigation. Current URLs and root causes determine the fix.",
      },
      {
        timing: "Before content production",
        label: "Priority",
        title: "Approve exact products and category URLs",
        detail:
          "Boots and FR workwear lead the evaluation. Stanley and RTIC remain in the opportunity set. Local-only products use a local strategy.",
      },
      {
        timing: "Before content implementation",
        label: "Review",
        title: "Josie confirms facts and Greg confirms approval",
        detail:
          "AIA owns the writing. The client reviews product accuracy and business claims before the live change.",
      },
      {
        timing: "Before any promotion",
        label: "Offer",
        title: "Joe approves margin, inventory, duration, and channel",
        detail:
          "The promotion brief must identify the paid-media coordination owner and the measurement plan before launch.",
      },
      {
        timing: "Before a Portwest implementation quote",
        label: "Supplier",
        title: "Portwest confirms feed and order capabilities",
        detail:
          "The existing estimate is preliminary. A firm scope follows supplier discovery and a confirmed order mechanism.",
      },
    ],
    decisions: [
      {
        label: "AIA owns SEO writing and technical coordination",
        detail:
          "Rig Outfitters provides product knowledge, commercial priorities, factual review, and approvals.",
      },
      {
        label: "Website work runs through Josie",
        detail:
          "Josie is the day-to-day contact for the website, developer coordination, product facts, and marketing operations.",
      },
      {
        label: "Commercial decisions run through Joe",
        detail:
          "Joe approves priority products, pricing, margins, policies, offers, and major project direction.",
      },
      {
        label: "Closed tasks keep their documented limits",
        detail:
          "A closed metadata or schema task does not prove that all catalog pages were changed or that every roadmap recommendation is complete.",
      },
      {
        label: "Historical counts are investigation inputs",
        detail:
          "Issue totals from August are refreshed before execution and are not presented as confirmed current conditions.",
      },
      {
        label: "Related projects keep separate approval paths",
        detail:
          "Email migration, online promotions, Portwest integration, and local visibility each require their own owner, scope, cost, and success measure.",
      },
    ],
  },
};
