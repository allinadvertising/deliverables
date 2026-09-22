import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

export const electricMotorSportKickoffV2: KickoffV2Data = {
  printAriaLabel: "Print Electric Motor Sport kickoff V2 as PDF",
  footerNote: "Electric Motor Sport SEO Strategy Kickoff | September 2026",
  cover: {
    clientName: "Electric Motor Sport",
    subtitle: "Your organic search strategy for the next three months.",
  },
  meta: [
    { label: "Period", value: "September to November 2026" },
    {
      label: "Business objective",
      value:
        "Restore the revenue paths the migration broke, then build on what still sells",
    },
    {
      label: "Roadmap",
      value:
        "Shopping eligibility, evidence correction, directives, consolidation, winning pages",
    },
    {
      label: "Platform",
      value:
        "Magento behind Sucuri, with a separate developer still cleaning up the migration",
    },
  ],
  summary: {
    title: "What changes first",
    objectiveLabel: "Business objective",
    objective:
      "Turn the Google Shopping channel back on, stop the site giving Google contradictory instructions about what to index, and put the recovered attention behind the ME1616 and liquid-cooled motor pages that are already selling.",
    lead:
      "You told us the measure is orders and leads, not rankings, so the plan is sequenced that way. Every one of your 197 products is disapproved in Merchant Center for a single missing attribute - shipping weight - which means the entire Shopping channel is off, on both free listings and ads, for a reason that takes an afternoon to fix. Behind it sits the migration: 149K pages Google will not index against 1.8K it will, a sitemap that submits URLs robots.txt blocks, 30,496 filtered URLs with no canonical, and 2,947 pages returning server errors. Fourteen of the eighteen items in this roadmap are repair.",
    emphasis:
      "Two numbers in the audit need correcting before anything is built on them. The headline that 84.8 per cent of crawled pages return 4xx comes from a crawl that returned zero pages at 200 and zero 404s, which is what a firewall refusing a bot looks like rather than a broken site - and Sucuri sits in front of this store. And 58.3 per cent of the celebrated three-month impression growth came from one URL that robots.txt tells Google not to crawl. Fixing that URL will make the next report look worse before it looks better. We would rather say both of those now than defend them later.",
  },
  strategy: {
    title: "3 Month Roadmap",
    gridClassName: "lg:grid-cols-3",
    operatingPrinciple:
      "Restore the revenue paths first, correct the evidence before sizing work against it, and only then build on the pages that are already winning.",
    phases: [
      {
        accent: "blue",
        month: "Month 1",
        theme: "Switch the revenue channel back on and settle the evidence",
        objective:
          "Populate the shipping weights at the feed source, escalate the broken order emails to the people who own them, test whether Sucuri is blocking the crawlers that measured this site, brief both co-founders on the impression arithmetic, and agree the approval path. Then reconcile the sitemap with robots.txt and deploy the legacy redirects, host consolidation and duplicate resources merge in one pass.",
        deliverable:
          "Merchant Center weights, email escalation, crawler and firewall diagnostic, founder briefing, approval workflow, rebuilt sitemap, legacy and host redirects",
        businessOutcome:
          "Products become eligible to serve on Google again, the founders hear the honest version of the numbers from us before those numbers move, and the site stops telling Google two different things about the same URLs.",
      },
      {
        accent: "gold",
        month: "Month 2",
        theme: "Consolidate the duplicates and repair what returns errors",
        objective:
          "Add canonicals to the faceted category pages at template level, settle the pagination parameter question in the same decision rather than separately, sample the 6,336 noindex pages before touching any of them, and repair the 5xx, 404 and 401 responses - starting with the product pages Merchant Center re-reviews.",
        deliverable:
          "Category canonical template, parameter decision, noindex classification, response repair prioritised by product URL",
        businessOutcome:
          "Thirty thousand filtered URLs stop competing with the categories they filter, and the Shopping fix stops being undone by product pages that fail their re-review.",
      },
      {
        accent: "blue",
        month: "Month 3",
        theme: "Build on the pages that are already selling",
        objective:
          "Expand the ME1616 family and liquid-cooled motor pages with the specification detail a buyer needs, add product and organization structured data at template level rather than page by page, then re-read the crawled-not-indexed bucket 30 days after the consolidation has landed and size the content section against what is actually indexing.",
        deliverable:
          "ME1616 and liquid-cooled page expansion, product schema on the template, index quality re-read, content section scoped",
        businessOutcome:
          "The highest-value products get pages that answer every specification question a buyer or an AI answer asks, and the growth work is scoped against a site that can finally hold pages in the index.",
      },
    ],
  },
  focus: {
    title: "Six priorities for revenue recovery",
    volumeLabel: "Evidence",
    scopeLabel: "Scope impact",
    footnote:
      "Evidence comes from the Electric Motor Sport consolidated SEO roadmap dated 25 August 2026, built from the Deep SEO Analysis and its child modules and the SEO Action Items workbook. Search Console, Merchant Center, the generative AI report and Ahrefs were all captured 2026-08-19; the sitemap was last read by Google 2026-08-13. No independent live verification was run during consolidation, and five checks remain open. Effort figures are estimates - no Developer Review exists for this account.",
    items: [
      {
        number: "01",
        title: "Turn Google Shopping back on, and keep it on",
        businessObjective:
          "Restore the one revenue channel that is currently off entirely rather than merely underperforming.",
        evidence:
          "Merchant Center account 5738653731, captured 2026-08-19: 197 total products, 0 approved, 0 limited, 197 not approved. The account names missing shipping weights as the active blocker and reports no product clicks at all over the last 28 days across both the organic and the paid surface.",
        volume: "197 of 197 products disapproved",
        scopeImpact:
          "Feed-source weights, then product landing-page validation before re-review",
        expectedImpact:
          "Every product becomes eligible to appear on Google Shopping again. Three hours of work against a channel that is currently producing nothing at all.",
        recommendedAction:
          "Populate the weights at the feed source rather than product by product, so new products inherit the value - and check whether the attribute is empty in Magento itself before editing the feed, because a feed-level patch leaves every future product broken. Then validate that the product landing pages return 200 before requesting re-review. Search Console reports 2,947 server errors and 1,857 not-found pages, and a product whose landing page fails will simply be disapproved again for a different reason.",
        status: "P0, Week 1, 3 hours",
      },
      {
        number: "02",
        title: "Settle whether the site is broken or the firewall is blocking the tools",
        businessObjective:
          "Correct the evidence base before three months of repair work is sized against it.",
        evidence:
          "Ahrefs crawled 546 pages on 2026-08-19 and reported 0 at 200 OK, 83 redirects, 0 at 404 and 463 at other 4xx - the 84.8 per cent figure quoted in the executive diagnosis. Against that, Search Console reports 1.8K indexed pages and 35,067 impressions over 28 days, which a site returning 4xx to everything could not produce. Sucuri is the hosting and security layer and its bot rules were never inspected.",
        volume: "0 pages at 200 in a crawl of 546",
        scopeImpact:
          "Sizes the response repair, and affects every future crawl of this site",
        expectedImpact:
          "Either a firewall allowlist entry, or a confirmed repair job with a real page count behind it. Three hours decides which, and it stops a developer hunting for 463 broken pages that may not exist.",
        recommendedAction:
          "Request a sample of the 463 URLs with a normal browser user-agent and then with a crawler user-agent, and compare the status codes. Check the Sucuri firewall bot rules and allowlist. Until this reports, size the response repair from Search Console's 2,947 5xx and 1,857 404s, which come from a crawler nobody is blocking - and do not quote the 84.8 per cent figure to anyone as confirmed crawl health.",
        status: "P0, Week 1, 3 hours",
      },
      {
        number: "03",
        title: "Stop the sitemap and robots.txt contradicting each other",
        businessObjective:
          "Give Google one consistent statement of what this site wants indexed, and recover the legacy addresses still holding authority.",
        evidence:
          "Five confirmed contradictions: the sitemap submits catalog/category/view URLs that robots.txt disallows; it includes no-route, home, marine-worksheet and four Porto theme demo pages; it submits both resources.html and resources/resources.html; robots.txt declares the same sitemap twice; and the limit= parameter is disallowed while limit=all URLs earn impressions. Google reports 10,696 pages blocked by robots.txt and 99 indexed though blocked.",
        volume: "5 contradictions, 10,696 blocked pages",
        scopeImpact:
          "Sitemap rebuild, legacy catalog/view redirects, host and m1 consolidation, resources merge",
        expectedImpact:
          "The list of pages we give Google stops contradicting the rules we give Google, and the 1.7K referring domains pointing at old addresses start reaching pages that can convert them.",
        recommendedAction:
          "Rebuild the sitemap so it submits only canonical, crawlable, indexable URLs, and remove the duplicated sitemap declaration from robots.txt. In the same deployment, 301 the legacy catalog/view paths one-to-one to their clean product equivalents rather than to the homepage, consolidate /home, www and the m1 subdomain onto a single preferred host, and merge the duplicate resources path. Deploy these together - the site should take one redirect change, not four.",
        status: "P0 to P1, Weeks 2 to 4, 25 hours",
      },
      {
        number: "04",
        title: "Brief both founders before the numbers move the wrong way",
        businessObjective:
          "Protect the next three months of reporting by explaining the arithmetic in advance rather than defending it afterwards.",
        evidence:
          "Three-month impressions rose 34,442 and 20,079 of that - 58.3 per cent - came from one URL, www /ev-parts/motors/brushless-motors?limit=all, entering at position 33.9 and producing 69 clicks. That single URL also explains the position fall from 10.6 to 16.0. robots.txt disallows it. Separately, the most recent 28 days are down 10.0 per cent in clicks and 13.2 per cent in impressions: the recovery has stalled.",
        volume: "58.3 per cent of the impression gain",
        scopeImpact:
          "Founder briefing, frozen baseline, and how every monthly report is structured",
        expectedImpact:
          "Sara and Raul understand why impressions will fall and average position will improve at the same time, before it happens - which is what makes the rest of the reporting credible.",
        recommendedAction:
          "Brief both co-founders together, since both must approve, and show three numbers: the impression gain, the share of it coming from one disallowed URL, and the position effect. Prepare it as a single chart - the 58 per cent figure is the whole argument and it does not survive being written as a paragraph. Freeze the baseline before the sitemap work deploys, record the deployment date of every change, and report clicks and position together rather than impressions alone.",
        status: "P0, before the first report, 7 hours",
      },
      {
        number: "05",
        title: "Consolidate 30,496 duplicates and decide the parameter question",
        businessObjective:
          "Recover the crawl attention currently spent on filtered URLs and spend it on the product pages that sell.",
        evidence:
          "Google reports 30,496 pages as duplicate without a user-selected canonical, the largest site-side bucket, generated by Magento faceted navigation on battery_voltage, bb_type, voltage, capacity and similar attributes. A further 6,336 pages carry a noindex tag nobody has classified, and 95,843 are crawled and declined - an indexation rate of roughly 1.2 per cent of known pages.",
        volume: "30,496 duplicates, 6,336 noindex",
        scopeImpact:
          "Category canonical template, parameter decision, noindex sampling, response repair",
        expectedImpact:
          "The largest single-template fix available on this site. Filtered pages point back to the category they filter instead of competing with it, and the crawl budget returns to real product pages.",
        recommendedAction:
          "Apply the canonical at the template so every parameter combination inherits it, and settle the pagination parameter in the same decision - a canonical strategy and a robots disallow that disagree cancel each other out, which is part of how this site accumulated 149K not-indexed pages. Our recommendation on limit=all is to keep the disallow and add noindex where the URL can still be reached: position 33.9 on twenty thousand impressions produced 69 clicks. Sample the 6,336 noindex pages before removing anything - bulk-removing them would push thin pages into an index already declining 95,843.",
        status: "P1, Month 2, 32 hours",
      },
      {
        number: "06",
        title: "Build on the ME1616 and liquid-cooled pages that are already winning",
        businessObjective:
          "Invest in the only part of this site that is recovering, and the part that sells the highest-value products.",
        evidence:
          "Two independent Search Console reports agree on the same short list. Performance shows /me1616-pmac-water-cooled-motor.html at plus 94 clicks, /me1616-liquid-cooled-motor-drive-system.html at plus 86 and /motors/brushless/liquid-cooled-motors.html at plus 73. The generative AI report shows the same two pages leading 8.83K AI impressions across 307 pages, at 1,131 and 638.",
        volume: "8.83K AI impressions, 307 pages",
        scopeImpact:
          "Specification content, internal linking, product and organization structured data",
        expectedImpact:
          "The only items in this roadmap that build rather than repair, and the ones most likely to produce an order inside the quarter.",
        recommendedAction:
          "Expand these pages with what a buyer needs to specify a motor: full specifications, dimensions, compatible controllers and drive systems, application examples. Add Product structured data with the specification attributes populated, not just name and price, and extend it to the product template so all 197 products inherit it - manual installation on six URLs does not scale. Point the 25-URL bulk onsite work already in flight at these pages. Do not restructure their URLs. Re-measure at 60 days on clicks, not impressions.",
        status: "P1 to P2, Month 3, 44 hours",
      },
    ],
  },
  execution: {
    title: "What changes, who decides, and how we prove it",
    artifactsTitle: "Evidence, action, impact, and specialists",
    examples: [
      {
        eyebrow: "Shopping eligibility",
        title: "One missing attribute is holding the whole catalogue",
        currentLabel: "Current state",
        current: [
          "197 of 197 products disapproved, 0 approved and 0 under review",
          "No product clicks over 28 days on either the organic or the paid surface",
        ],
        targetLabel: "Target state",
        target: [
          "Shipping weights populated at the feed source, so new products inherit them",
          "Product landing pages confirmed at 200 before the re-review is requested",
        ],
        decision:
          "Confirm whether the weight attribute is missing in Magento or lost in the feed mapping before anything is edited.",
        impact:
          "An entire revenue channel switches back on for three hours of work, and it is the fastest visible win available on this account.",
        proof:
          "Re-check the account 48 hours after the weights are submitted, then again once the landing-page repair has landed.",
      },
      {
        eyebrow: "Impression arithmetic",
        title: "The recovery is mostly one URL Google was told not to crawl",
        currentLabel: "How it currently reads",
        current: [
          "Three-month impressions up 39.7 per cent, reported as recovery",
          "Average position down from 10.6 to 16.0, reported as a separate problem",
        ],
        targetLabel: "What the numbers actually say",
        target: [
          "20,079 of the 34,442 gain is one robots-disallowed URL at position 33.9",
          "That same URL is why the average position fell, and it produced 69 clicks",
        ],
        decision:
          "Agree with both founders that clicks and position lead the monthly report, and impressions appear only with this explanation attached.",
        impact:
          "The next report will show impressions falling and position improving simultaneously. Said in advance that is a fix; said afterwards it looks like a regression.",
        proof:
          "Freeze the baseline before the sitemap deploys and date every change, so each movement can be attributed to the work that caused it.",
      },
    ],
    artifacts: [
      {
        phase: "Month 1",
        specialists: "AIA PPC, AIA SEO and client",
        title: "Merchant Center shipping weights and feed validation",
        evidence:
          "197 products, 0 approved, missing shipping weights named as the blocker in account 5738653731. Search Console separately reports 2,947 5xx and 1,857 404 pages that would fail the same products at re-review.",
        recommendedAction:
          "Populate the weights at the source, confirm the feed data source is running and pulling correct product data, then re-review the 197 for secondary image, price and landing-page requirements once the weights clear.",
        expectedImpact:
          "The Shopping channel becomes eligible again, and the account gets a visible result inside week one.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO and AIA developer",
        title: "Crawler and firewall diagnostic, and the email escalation",
        evidence:
          "A crawl returning zero 200s and zero 404s on a site Google indexes 1.8K pages of. Separately, the store cannot create accounts, reset passwords or send order confirmations - reported by the client, tested by nobody, and sitting directly on the metric this account is measured by.",
        recommendedAction:
          "Compare browser and crawler user-agent responses against the Sucuri bot rules, and record the answer either way. Escalate the email failure to the founders and the separate developer in writing with a target date, without attempting to diagnose it - that system is not ours and not in this scope.",
        expectedImpact:
          "The repair work gets sized from a real measurement, and the people who can fix the order confirmations know what it is costing.",
      },
      {
        phase: "Month 1",
        specialists: "AIA developer and AIA SEO",
        title: "Sitemap rebuild, legacy redirects and host consolidation",
        evidence:
          "Five named contradictions between the sitemap and robots.txt. A catalog/product/view URL lost 21 clicks and 1,139 impressions in three months; the m1 subdomain ME1507 page fell from position 4.7 to unranked; /resources ranks for 21 branded queries at zero clicks.",
        recommendedAction:
          "Rebuild the sitemap, remove the duplicate declaration, then deploy the legacy, host and resources redirects as one-to-one 301s in a single pass. Put them in Magento's URL rewrite table so they survive future deployments, and check for referring domains before deciding which m1 URLs matter most.",
        expectedImpact:
          "Coverage reporting becomes readable, and link equity the migration scattered comes back to pages that can convert it.",
      },
      {
        phase: "Month 2",
        specialists: "AIA developer and AIA SEO",
        title: "Canonical template, parameter decision and noindex classification",
        evidence:
          "30,496 duplicates without a canonical from faceted navigation, 6,336 noindex pages nobody has sampled, and 118 pages that already carry a proper canonical - which shows the mechanism works where it is applied.",
        recommendedAction:
          "Identify the layered navigation extension before writing template code, apply the canonical at template level, and decide the parameter strategy in the same session so the two do not cancel out. Classify a sample of the noindex pages rather than bulk-editing them.",
        expectedImpact:
          "The largest structural fix available here, delivered as one template change rather than a URL list that never ships.",
      },
      {
        phase: "Month 2",
        specialists: "AIA developer and client developer",
        title: "Response repair, prioritised by product URL",
        evidence:
          "2,947 server errors, 1,857 not-found, 168 unauthorised and 74 soft 404s. Merchant Center re-reviews the landing page of every product, so these directly gate whether the Shopping fix holds.",
        recommendedAction:
          "Triage by type rather than by URL and lead with live product and category pages. A 5xx pattern at this scale on Magento is usually one cause, not 2,947 faults - diagnose before repairing. Confirm the 168 401s are intentionally gated, and if so exclude them from the sitemap rather than fixing them.",
        expectedImpact:
          "Products stop failing their Shopping review for reasons unrelated to the feed, and the site stops signalling to Google that it is unreliable.",
      },
      {
        phase: "Month 3",
        specialists: "Content, AIA SEO and AIA developer",
        title: "Winning page expansion, structured data and the index re-read",
        evidence:
          "The ME1616 and liquid-cooled pages lead both the click winners and the AI impressions. Against that, the site indexes roughly 1.2 per cent of its known pages, so new content published today joins the 95,843 rather than the 1.8K.",
        recommendedAction:
          "Expand and mark up the proven pages first. Then re-read the crawled-not-indexed bucket 30 days after the consolidation has deployed, size what remains from a sample rather than a census, and scope the product-led content section only once new pages are demonstrably indexing.",
        expectedImpact:
          "Investment lands on pages that already convert, and the content programme starts on a site that can hold it in the index.",
      },
    ],
  },
  approval: {
    title: "Decisions and specialists before launch",
    gates: [
      {
        timing: "Week 1",
        label: "Access",
        title: "Release the Magento admin sitemap configuration",
        detail:
          "This is recorded as blocked and waiting on the account manager, and the sitemap rebuild cannot start without it. It is the single access item standing between us and the first technical deployment.",
      },
      {
        timing: "Week 1",
        label: "Governance",
        title: "Agree one written approval path with both co-founders",
        detail:
          "Fourteen of the eighteen items change a Magento store that a third-party developer is actively rebuilding. Two approvers and two delivery parties is where a roadmap like this stalls - not on the work, on the queue. Two hours agreeing what gets batched, who signs and the expected turnaround is worth more than any single technical item here.",
      },
      {
        timing: "Before the first report",
        label: "Positioning",
        title: "Present the impression split to Sara and Raul together",
        detail:
          "Both must approve, and both need to hear the same three numbers at the same time. The fixes will remove 20,079 impressions, so the next report will show impressions falling and position improving at once.",
      },
      {
        timing: "Before the response repair",
        label: "Evidence",
        title: "Answer the firewall question before sizing twelve hours of work",
        detail:
          "The response repair is estimated at twelve hours and it is the least reliable figure in the roadmap. It cannot be sized honestly until we know whether the Ahrefs crawl measured the site or the security layer sitting in front of it.",
      },
      {
        timing: "Month 2 decision",
        label: "Structure",
        title: "Decide the canonical and parameter strategies together",
        detail:
          "A URL that is both disallowed and canonicalised sends Google two instructions and it can act on neither. These are presented as two items and they are one decision.",
      },
    ],
    decisions: [
      {
        label: "Report clicks and position, not impressions",
        detail:
          "Track five things monthly: Merchant Center approved product count, indexed against not-indexed with the four largest buckets shown separately, clicks and average position together, the ME1616 and liquid-cooled page group specifically, and orders from organic once the email system is fixed. Show impressions only with the arithmetic attached, and record the email fix date so any order data before it carries the caveat.",
      },
      {
        label: "Do not start link building, and do not bulk-remove the noindex tags",
        detail:
          "The domain already holds 1.7K referring domains and 97.7K historical backlinks - the asset exists, and the problem is that the pages it points at are broken, duplicated or unindexed. The redirects recover more of that equity than outreach would add. And removing 6,336 noindex directives would push thin pages into an index that is already declining 95,843 crawled pages.",
      },
      {
        label: "Benchmark against the peers you can actually reach",
        detail:
          "evwest, baldor and baumueller run Domain Rating 51 to 70 against this site's 27, and the source audit says so itself. The realistic near-term set is allelectricmotorsports.com, electricdriveengineering.com.au and a-lectricmotorsports.com. Targets nobody can hit are not a strategy on a site indexing 1.2 per cent of its pages.",
      },
    ],
  },
};
