import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

export const originalClearBraKickoffV2: KickoffV2Data = {
  printAriaLabel: "Print Original Clear Bra kickoff V2 as PDF",
  footerNote: "Original Clear Bra SEO Strategy Kickoff | September 2026",
  cover: {
    clientName: "Original Clear Bra",
    subtitle: "Your organic search strategy for the next three months.",
  },
  meta: [
    { label: "Period", value: "September to November 2026" },
    {
      label: "Business objective",
      value:
        "Bring back the new-customer searches for clear bra, ceramic coating and tint in Salt Lake City and St. George, measured in calls and quote forms",
    },
    {
      label: "Roadmap",
      value:
        "Finish the host move, remove the leftover demo pages, give every button a quote path, build the paint protection page, then move ranking weight off the homepage",
    },
    {
      label: "Platform",
      value:
        "WordPress on SiteGround, moved this week. All in One SEO plugin, page-builder theme. AIA Dev holds the install; the old developer holds only DNS.",
    },
  ],
  summary: {
    title: "What changes first",
    objectiveLabel: "Business objective",
    objective:
      "Tell Google the site lives at originalclearbra.com again, clean out the demo pages, send every main button to a phone number or quote form, and then build one strong paint protection page so the category you want to grow has a page that can rank.",
    lead:
      "Your brand is healthy. People who search for Original Clear Bra still find you, at about 110 visits a month. What collapsed is the new-customer demand: searches for clear bra, paint protection, ceramic coating and tint without your name fell from about 388 visits a month to about 40. The homepage carries 81.6 per cent of your traffic and it lost 72 per cent. Nothing on the site ranks for the generic service terms your local competitors win. The audit on 4 September found the reasons and they are all fixable. One thing has changed since then: the site was moved to SiteGround this week, and the move is unfinished in the one way that matters for search. Your domain currently redirects to a temporary SiteGround address, and every page tells Google that address is the real one.",
    emphasis:
      "One hour on the migration is worth more than everything else in this plan combined. It is first, and it is on a ticket that already exists.",
  },
  strategy: {
    title: "Three months, three moves",
    gridClassName: "lg:grid-cols-3",
    operatingPrinciple:
      "Fix the foundation before adding anything new. Then put the ranking weight on one page per service, starting with paint protection. Measure everything in calls and quote forms, not rankings.",
    phases: [
      {
        accent: "blue",
        month: "Month 1",
        theme: "Stop the bleeding and set the baseline",
        objective:
          "Restore originalclearbra.com as the site address and retire the temporary hostname, then verify it on all 24 pages and submit the sitemap. Remove the duplicate homepage with the law-firm demo, the three empty footer template pages and the thin products hub. Create a quote page and point the Schedule an Installation buttons at it. Fix the St. George page that describes Salt Lake City, remove the car wrap promise from both location pages, and settle the 3M claim on the tint page. Build the keyword research case for paint protection, ceramic, tint and paint correction in both cities. Write the first batch of 20 titles, descriptions and headings for the legacy pages. Brief you before the first report.",
        deliverable:
          "Migration verified, demo pages gone, quote page live, on-page corrections shipped, keyword case ready for approval, 20 onsites published, first-cycle briefing",
        businessOutcome:
          "Google indexes your domain instead of a temporary address you do not own, and every visitor who clicks the main button reaches a phone number or a quote form instead of a do-it-yourself page.",
      },
      {
        accent: "gold",
        month: "Month 2",
        theme: "Build the revenue page",
        objective:
          "Write the flagship paint protection page to the approved keyword case: what clear bra is and why the name is yours, custom installation against die-cut, rolled edges, self-healing, the honest limits, Suntek film, the free loaner fleet, both stores and the quote button. Write the paint correction page that has never existed. Decide which URL survives for window tint and for paint protection and redirect the legacy pages into them. Fix the theme component that prints every heading twice. Add valid local business markup for each store. Route call and form leads into GA4 alongside the Ads tracking build so one container counts both. Finish the keyword map with one target per page.",
        deliverable:
          "Flagship paint protection page, paint correction page, tint and paint protection consolidated to one URL each, one H1 per page, per-location schema, lead tracking live, keyword map complete, 20 onsites",
        businessOutcome:
          "The category you want to grow has one page written to the terms buyers use, and organic calls and form leads are counted from this month on.",
      },
      {
        accent: "blue",
        month: "Month 3",
        theme: "Move the weight and prove it",
        objective:
          "Rebuild the performance baseline from Search Console once access lands and confirm or correct the audit's numbers in writing. Link the service and location pages from the homepage body and from each other. Read Search Console for the do-it-yourself page and the flagship, and redirect the do-it-yourself page only if the flagship is already getting impressions for the clear bra terms. Rewrite the ceramic coating page around your three products and the St. George page for St. George. Pull the AI visibility baseline and brief the factual Suntek against XPEL and 3M comparison page. Close the technical hygiene items on the new host and test everything shipped in months one and two.",
        deliverable:
          "First-party baseline, internal link map applied, do-it-yourself redirect decided on data, ceramic and St. George rewrites, AI baseline and comparison brief, uppercase URLs and HSTS fixed, live QA pass, 20 onsites",
        businessOutcome:
          "Ranking weight moves from the homepage to the pages built for each service, and the report reads from Google's own numbers instead of third-party estimates.",
      },
    ],
  },
  focus: {
    title: "Six priorities for lead recovery",
    volumeLabel: "Evidence",
    scopeLabel: "Scope impact",
    footnote:
      "Evidence comes from the Original Clear Bra consolidated SEO roadmap of 11 September 2026, built from the Deep SEO Analysis of 4 September 2026, the intake interview of 2 September 2026 and the keyword research plan of 10 September 2026. Every technical and on-page item was re-checked live on 11 September on all 24 sitemap URLs. Traffic and ranking figures are third-party estimates until Search Console access is granted; the migration finding, the demo pages, the button routing and the copy errors are confirmed on the live site.",
    items: [
      {
        number: "01",
        title: "Finish the host migration before Google re-homes the site",
        businessObjective:
          "Keep the brand traffic you still have on a domain you own.",
        evidence:
          "Checked live on 11 September at noon: originalclearbra.com, with and without www, returns a 301 to fulfillmenta.sg-host.com. Every inner page on your domain declares the SiteGround address as its canonical, the Salt Lake City page has 34 internal links to the SiteGround address and none to your domain, the sitemap lists 24 URLs all on the SiteGround address, and robots.txt on both hosts declares the SiteGround sitemap. The SiteGround copy serves the full site at 200 with no noindex. None of this existed when the audit was written on 4 September.",
        volume: "Root domain 301s to a temp host, 24 of 24 URLs affected",
        scopeImpact:
          "Two WordPress settings, one database search-and-replace, one redirect rule, one sitemap regeneration",
        expectedImpact:
          "Left for a few crawl cycles this hands the 81.6 per cent of traffic the homepage carries, and the branded demand that is the one healthy thing on the account, to a hostname SiteGround will eventually delete. Fixed today, nothing is lost and the audit's before-and-after still reads.",
        recommendedAction:
          "Set the WordPress home and site URL to https://originalclearbra.com, run a search-and-replace from the SiteGround address to your domain including serialised options so the page-builder content and the SEO plugin settings follow, flush caches, and make the SiteGround hostname redirect every path to the same path on your domain. Regenerate the sitemap and confirm robots.txt names it on your domain. Then we independently re-fetch all 24 pages, the host variants and the sitemap, and submit the sitemap in Search Console as soon as access lands. A canonical tag pointing back at your domain is not a substitute for fixing the site URL.",
        status: "P0 · today, on the existing Site Hosting ticket",
      },
      {
        number: "02",
        title: "Remove the law-firm demo pages and the empty templates",
        businessObjective:
          "Give Google one homepage about one business.",
        evidence:
          "The duplicate homepage at /home/ still serves the theme's law-firm demo, with the heading Special Approach, Dedicated Attorneys and four family-law sections, and it is listed in the sitemap. Three footer template pages and the products hub are live at 200, weigh 390 to 462 KB, carry no description and no heading, and sit in the sitemap. You raised this yourself at the sales meeting and it was due to come down the morning after access was granted. It is still live a week later.",
        volume: "5 junk URLs in a 24-URL sitemap",
        scopeImpact:
          "Delete or unpublish one page, noindex four, strip leftover demo code, purge caches",
        expectedImpact:
          "The audit rates this Critical. A second homepage about family law on a domain whose real homepage carries 81.6 per cent of traffic confuses what the site is about, and the audit saw the cached demo version served on the real homepage during its crawl.",
        recommendedAction:
          "Delete /home/ and redirect it to the root. Set the three footer templates and /products/ to noindex in the SEO plugin and exclude them from the sitemap, or delete the templates if the theme does not need them published. Search the live homepage source for the demo theme's leftovers and strip them. Purge the SiteGround and plugin caches, then re-fetch all five URLs and the homepage to confirm. Sequenced right after the migration fix so the redirects are written against the right host.",
        status: "P0 · Month 1, reopened",
      },
      {
        number: "03",
        title: "Send every main button to a phone number or a quote form",
        businessObjective:
          "Stop losing the visitors who already want to buy.",
        evidence:
          "The three Schedule an Installation buttons on the homepage link to the discontinued do-it-yourself installation page. The site has no contact or quote page: /contact/, /contact-us/ and /get-a-quote/ all return 404. The only lead form is the one embedded on the homepage. Your whole strategy is retail installation, and the main action on the page that gets the traffic tells people to install the film themselves.",
        volume: "3 buttons, 0 quote pages, 3 URLs returning 404",
        scopeImpact:
          "One new quote page, three buttons repointed, the same button added to five service and location pages",
        expectedImpact:
          "This is the conversion the engagement is measured on. Every service page gets one place to send buyers, and the quote page becomes the place where form and call tracking lives.",
        recommendedAction:
          "Create a /get-a-quote/ page carrying the existing form, both store phone numbers and the free loaner car line. Repoint all three homepage buttons to it and add the same button to the paint protection, ceramic, tint, Salt Lake City and St. George pages. Confirm click-to-call is visible above the fold on mobile for both stores. No booking or self-scheduling flow: you ruled that out because job length depends on the vehicle.",
        status: "P0 · Month 1",
      },
      {
        number: "04",
        title: "Correct the pages that promise services you do not offer",
        businessObjective:
          "Stop the search result from contradicting what you sell.",
        evidence:
          "The St. George page description names Salt Lake City and the body references Salt Lake six times. Both location page titles read Utah Car Wrap and Window Tinting and offer car wrap installation; you tried wrapping and stopped. The window tinting page promises Premium 3M window film; you ended the 3M relationship over warranty claims and sometimes lose sales over the name. Seventeen of the 24 pages share one brand-only title with no description and no heading at all.",
        volume: "17 legacy pages with no description or heading, 3 pages with wrong claims",
        scopeImpact:
          "Three batches of 20 title, description and heading rewrites, corrections first",
        expectedImpact:
          "The legacy pages are not competing for anything because Google is shown nothing to rank them for. This is the contracted recurring work and the cheapest ranking lever on a 24-page site, and it also removes the wrong promises from the text Google shows under your name.",
        recommendedAction:
          "Batch one in month one: rewrite the St. George title, description and body for St. George, remove car wrap from both location pages, fold the loaner car line into both location descriptions, and write a title, description and single heading for the 17 legacy pages. Batch two in month two re-tunes the six newer pages against the keyword research and adds image alt text. Batch three in month three covers the new pages. One question for you first: which tint film do you actually install? If it is not 3M we replace the claim with the real supplier or the warranty language. We will not assume either way.",
        status: "P0 to P1 · Month 1 corrections, ongoing batches",
      },
      {
        number: "05",
        title: "Build the paint protection page and the paint correction page",
        businessObjective:
          "Give the category you want to grow one page that can rank for it.",
        evidence:
          "Paint protection intent is split across three URLs: the legacy clear bra page, the PPF product page and the homepage, and none of them says custom installation, rolled edges, self-healing, Suntek film, the loaner fleet or 31 years. Google currently ranks the discontinued do-it-yourself page for clear bra at 3,900 searches a month, at position 11, and for clear bra installer. Paint correction has never been published: the URL returns 404. The Salt Lake City page is newly ranking for clear bra installer near me, which proves a focused page can win these terms quickly.",
        volume: "clear bra at 3,900 searches a month, held by the wrong page",
        scopeImpact:
          "One 1,000-word flagship page, one 500-word paint correction page, both reviewed by you for accuracy",
        expectedImpact:
          "Everything else in this plan removes noise. This is the page the noise was hiding, and it is the page that takes the clear bra and installer terms from the do-it-yourself page once it is ranking.",
        recommendedAction:
          "Write the flagship in month two from the approved keyword case: what clear bra is and why the name is yours, custom against die-cut with the transition-line explanation, rolled edges and self-healing in short plain statements, the honest limits, Suntek by Eastman and the warranty record, the free loaner fleet, both stores with click-to-call and the quote button, and an FAQ block for the price and edge questions. Write the paint correction page around low-RPM correction, when it is needed and the pairing with ceramic. No XPEL criticism, no 3M as an offer, no DIY language. Then consolidate: window tint survives at one URL, paint protection survives at the flagship, and the legacy pages redirect into them. The do-it-yourself page is redirected only in month three, and only if Search Console shows the flagship already earning impressions for the clear bra terms.",
        status: "P1 · Month 2 build, Month 3 redirect decision",
      },
      {
        number: "06",
        title: "Get access and count the leads",
        businessObjective:
          "Report in calls, quote forms and booked jobs, from Google's own data.",
        evidence:
          "Neither AIA account has Search Console, GA4 or Business Profile access, so every traffic and ranking figure in the audit is a third-party estimate. Leads are phone calls to two stores and form emails to you, and none of them is measured. The Ads team is building conversion tracking in the same tag container in parallel. The first report lands on 25 September.",
        volume: "3 access grants outstanding, 0 lead events tracked",
        scopeImpact:
          "Three access grants, one set of GA4 lead events shared with Ads, one baseline rebuilt from Search Console",
        expectedImpact:
          "Without Search Console the brand against non-brand story the whole plan rests on cannot be confirmed, and the migration cannot be checked in Google's index. Without lead events the lead goal has no denominator. Two teams instrumenting the same container separately is how leads get double-counted.",
        recommendedAction:
          "Grant Search Console owner or full access, GA4 editor access and Business Profile manager access for both stores to fulfillment@allinadvertising.com, each tracked to a date. In month two we route form submissions and click-to-call into GA4 as key events alongside the Ads build so both reports read the same numbers. In month three we pull twelve months of Search Console data, split brand and non-brand, and confirm or correct the audit's headline in writing. We also check whether any SiteGround URL was indexed during the migration window and request removal.",
        status: "P0 access now · P1 tracking Month 2 · P2 baseline Month 3",
      },
    ],
  },
  execution: {
    title: "What changes, who decides, and how we prove it",
    artifactsTitle: "Evidence, action, impact, and specialists",
    examples: [
      {
        eyebrow: "The migration",
        title: "The audit was right, and the site moved under it",
        currentLabel: "What the audit found on 4 September",
        current: [
          "Insecure and www variants resolve correctly to the primary domain",
          "Robots rules clean, sitemap present and fresh, 404s handled properly",
        ],
        targetLabel: "What the live check found on 11 September",
        target: [
          "originalclearbra.com and its www and http variants all 301 to fulfillmenta.sg-host.com",
          "Canonicals, internal links, the sitemap and robots.txt all name the SiteGround address, and the staging copy serves the full site at 200 with no noindex",
        ],
        decision:
          "Fix the site URL the same day, redirect the staging hostname, and verify independently on every URL before any other technical change is made.",
        impact:
          "Every other item in this plan reads a URL. Until the domain serves itself, redirects written for the cleanup would be written against the wrong host, and the audit's before-and-after cannot be read.",
        proof:
          "A written pass on all 24 URLs, the four host variants and the sitemap, and the first sitemap submission in Search Console.",
      },
      {
        eyebrow: "The diagnosis",
        title: "Brand held, non-brand collapsed, and one page carries everything",
        currentLabel: "What the numbers say today",
        current: [
          "About 151 organic visits a month, down about 351 from the prior period",
          "Branded visits stable at about 110; non-branded down from about 388 to about 40",
          "Homepage carries 81.6 per cent of traffic and lost 72 per cent; zero rankings for generic PPF, ceramic or tint terms",
        ],
        targetLabel: "What that means for the plan",
        target: [
          "Links are not the fix. The losses are relevance and page structure, and the local terms are low difficulty",
          "One page per service and per location, starting with paint protection, is how the weight moves off the homepage",
        ],
        decision:
          "Do not start a link-building programme. Spend the hours on the pages, the buttons and the measurement, and re-read the link growth each cycle instead.",
        impact:
          "The 228 new referring domains in three months with no authority growth are read, not acted on. If they turn out to be paid or injected we raise a disavow decision as its own item; we do not disavow a DR 2 profile on a guess.",
        proof:
          "The same baseline set pulled each cycle, and the audit's headline confirmed or corrected from Search Console in month three.",
      },
      {
        eyebrow: "The first report",
        title: "The first cycle is cleanup and measurement, not rankings",
        currentLabel: "Where the account stands",
        current: [
          "Business down 25 to 40 per cent; Salt Lake went from 12 to 15 bras a day to about 5",
          "First report due 25 September, nine working days into the engagement, with no first-party data yet",
        ],
        targetLabel: "What the first report will show",
        target: [
          "The migration found and fixed with the verification attached",
          "The demo pages gone, the quote page live, the copy corrections shipped, the keyword case ready, 20 onsites published",
          "A baseline labelled as third-party until Search Console access lands",
        ],
        decision:
          "You hear about the migration issue from us with the fix attached, before the report, and we do not promise a lead number for the first cycle.",
        impact:
          "On this account the first report is a trust event. Presenting estimates as results, or letting you find the redirect yourself, costs more than any first-cycle ranking movement can earn back.",
        proof:
          "The flagship paint protection page and the paint correction page arrive in cycle two, and lead events are counted from the same month.",
      },
    ],
    artifacts: [
      {
        phase: "Month 1",
        specialists: "AIA Dev on the Site Hosting ticket, then AIA SEO Strategist",
        title: "Migration fix and independent verification",
        evidence:
          "The root domain redirects to the SiteGround staging hostname and every canonical, link, sitemap entry and robots directive names it. The staging host serves the full site at 200. Both hostnames resolve to the same server.",
        recommendedAction:
          "Set the WordPress home and site URL, run the search-and-replace including serialised options, flush caches, redirect the staging hostname path for path, regenerate the sitemap. Then crawl all 24 URLs on your domain and confirm 200, a self-referencing canonical, no SiteGround string anywhere in the source, one sitemap with 24 live URLs, robots.txt declaring it, and the staging host redirecting. Log anything failing back onto the hosting ticket with the URL.",
        expectedImpact:
          "Your domain serves itself before Google has re-evaluated the homepage, and the pass is written down by someone other than the person who did the fix.",
      },
      {
        phase: "Month 1",
        specialists: "AIA Dev with AIA SEO Strategist",
        title: "Demo removal, quote page and copy corrections",
        evidence:
          "Duplicate homepage with law-firm content in the sitemap. Three empty footer templates and a thin products hub indexable. Three main buttons routed to the do-it-yourself page with no quote page on the site. St. George describing Salt Lake City, car wrap offered on both location pages, 3M promised on the tint page.",
        recommendedAction:
          "Delete /home/ and redirect it to the root, noindex the four thin pages and drop them from the sitemap, strip the demo leftovers, purge caches. Create /get-a-quote/ and repoint the buttons. Ship the St. George, car wrap and 3M corrections inside the first onsite batch. Ask you one line about the tint film before the 3M change is made.",
        expectedImpact:
          "One homepage, one topic, a sitemap that lists only pages meant to rank, and a main action that leads to a phone number or a form on every page.",
      },
      {
        phase: "Month 1 and 2",
        specialists: "AIA SEO Strategist, with Jordan Leavitt for approval",
        title: "Keyword research: the case, then the map",
        evidence:
          "No keyword research exists yet. The audit's six-page plan, three services in each city, is a hypothesis: St. George may not carry enough demand for three pages. The flagship page cannot be written without knowing which terms it targets, and the competitor set must come from the local results, not from tools that surface national brands and forums.",
        recommendedAction:
          "Month one: the case. URL inventory, baseline and cluster expansion for clear bra, paint protection film, ceramic coating, window tint and paint correction, geo intent checked in the live results for Salt Lake City and St. George, the brand-term decision, the local competitor set, and the push-backs confirmed or dropped. Month two: the map. One primary term per page for all 24 pages plus the new ones, the vehicle and film-comparison reserve clusters, the excluded-on-purpose list with volumes, and briefs for the ceramic, St. George and comparison pages.",
        expectedImpact:
          "The flagship page is written to real terms, the St. George question is settled on data, and every later content order has a brief.",
      },
      {
        phase: "Month 2",
        specialists: "AIA Content with AIA Dev, reviewed by you for accuracy",
        title: "Flagship paint protection page, paint correction page, consolidation",
        evidence:
          "Three URLs share the paint protection intent and two share window tint. The do-it-yourself page holds the clear bra and installer terms. Paint correction returns 404. The newer pages print every heading twice, and the homepage carries invalid local business markup while the location pages carry none.",
        recommendedAction:
          "Publish the flagship and the paint correction page. Decide which URL survives for tint and for paint protection and redirect the legacy pages into them through the SEO plugin. Leave the do-it-yourself page alone until month three. Fix the theme's headline component so it renders one heading. Replace the homepage schema with one valid local business entity per store and add the matching entity to each location page, validated in the Rich Results test.",
        expectedImpact:
          "One paint protection page and one tint page carry all the intent, both stores are described to Google as local businesses on the pages that should rank locally, and the homepage validates.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO Specialist, coordinated with the Ads conversion-tracking ticket",
        title: "Lead tracking in one container",
        evidence:
          "Tag Manager loads on the site and a Contact Form 7 form exists, but no form or call events are tracked. The Ads team is building conversion tracking in parallel. Pulse mapping and a CRM review workflow are also planned.",
        recommendedAction:
          "After GA4 access lands and the quote page exists, route form submissions and click-to-call as GA4 key events tagged by source, with the same events feeding the Ads conversions. If a call-tracking number pool is bought it goes on the quote page and the location pages, never on the Business Profile. No second measurement layer in Pulse before the GA4 events exist.",
        expectedImpact:
          "Organic calls and form leads appear in GA4 by source from cycle two, and the Ads and SEO reports read the same events.",
      },
      {
        phase: "Month 3",
        specialists: "AIA SEO Strategist with AIA Dev and AIA Content",
        title: "Baseline, internal links, redirect decision, rewrites, hygiene",
        evidence:
          "The whole diagnosis rests on third-party estimates until Search Console is read. The homepage links to the priority pages only through navigation. The do-it-yourself redirect is a decision that needs first-party data. The ceramic page says nothing about the three products and the St. George page is a copy. Uppercase URLs serve duplicates, HSTS is absent, pages weigh 390 to 546 KB.",
        recommendedAction:
          "Rebuild the baseline from twelve months of Search Console data and confirm or correct the audit's headline. Apply a link map: a services block on the homepage, each service page linked to both locations, each location to all four services. Read Search Console for the do-it-yourself page and the flagship, and redirect only if the flagship is already earning impressions; otherwise hold and record the numbers. Rewrite ceramic and St. George from the keyword briefs. Pull the AI visibility baseline and brief the comparison page for December. Add the lowercase rewrite rule and the HSTS header, profile the three heaviest templates, and test everything shipped since month one.",
        expectedImpact:
          "Ranking weight moves from the homepage to the service pages, nothing is redirected on a guess, the report reads from first-party data, and the speed work is scoped rather than guessed.",
      },
    ],
  },
  approval: {
    title: "What we need from you, and what we are choosing not to do",
    gates: [
      {
        timing: "Today",
        label: "Migration",
        title: "Confirm the hosting ticket owner can finish the migration today",
        detail:
          "The fix is one hour on a ticket that already exists, assigned to AIA Dev. DNS already points at SiteGround, so nothing waits on the old developer. We need the go-ahead to make the site URL change and the staging redirect now, before Google's next crawl of the homepage.",
      },
      {
        timing: "Next call",
        label: "Access",
        title: "Grant Search Console, GA4 and Business Profile access with dates",
        detail:
          "Search Console owner or full access on the domain property, GA4 editor access, and Business Profile manager access for both stores, to fulfillment@allinadvertising.com. Each one tracked to a date. Until Search Console lands, every performance figure we report is a third-party estimate and we will label it as one.",
      },
      {
        timing: "Next call",
        label: "Facts",
        title: "Which tint film do you install, and who reviews the copy",
        detail:
          "The tint page promises 3M film. Your PPF relationship with 3M ended, but you did not name the tint supplier, so we will not change the claim without asking. Separately, we assume AIA writes the paint protection and paint correction pages and you review them for technical accuracy, because you are the only source for the origin story, the supplier history and the honest limits. Confirm both.",
      },
      {
        timing: "Before 25 September",
        label: "Measurement",
        title: "Agree what the first report is",
        detail:
          "The first cycle has nine working days and carries the migration fix, the cleanup and the keyword case. The first report is a baseline: what was found, what was fixed, what was verified, and what is still third-party. We are not promising a lead number for cycle one. The paint protection page and lead tracking arrive in cycle two, and the first-party baseline in cycle three.",
      },
      {
        timing: "Month 2, after the keyword case",
        label: "Structure",
        title: "Approve the keyword case before the flagship is written",
        detail:
          "The keyword case names the terms for the paint protection page, settles whether St. George carries enough demand for three service pages or one strong location page, and confirms or drops the five push-backs below. It needs Jordan's approval before content is ordered, and it is why the flagship page is a month-two item rather than month one.",
      },
    ],
    decisions: [
      {
        label: "Do not start a link-building programme",
        detail:
          "The 727 tracked links are all low authority and 65 per cent are nofollow, and 228 domains arrived in three months with no authority growth. The losses are relevance and page structure, not authority, and the local terms are low difficulty. We read the link growth each cycle and raise a disavow decision only if the pattern looks paid or injected. The retainer's hours go to the pages, the buttons and the measurement.",
      },
      {
        label: "Do not redirect the do-it-yourself page until the flagship ranks",
        detail:
          "It is the one page that still holds a non-brand term: clear bra at 3,900 searches a month, at position 11. Redirected early, the term is lost rather than moved. In month three we read Search Console for both pages and redirect only if the flagship is already earning impressions for the clear bra terms. Otherwise we hold and reassess in December, with the numbers recorded either way.",
      },
      {
        label: "Do not chase the national head terms",
        detail:
          "Paint protection film and PPF as bare national terms belong to XPEL, 3M and Suntek at far higher authority than your domain rating of 2. The winnable demand is the local tail: clear bra, paint protection, ceramic and tint paired with Salt Lake City and St. George, and the installer intent. XPEL and 3M are addressed once, on a factual comparison page in December, with no accusations.",
      },
      {
        label: "Do not commit to six service-by-city pages yet",
        detail:
          "The audit proposed three services in each city. That came from the audit, not from you, and St. George may not carry the demand. Month three rewrites the ceramic page and the St. George page. If the keyword case shows St. George supports service-by-city pages, they become the December content order. If not, one strong St. George page and the effort goes to Salt Lake City.",
      },
      {
        label: "Do not build a pricing page or a booking flow",
        detail:
          "Utah is a price-led market, but price is a sales objection, not a search behaviour. A pricing FAQ on the paint protection page covers the searches that exist. Self-scheduling is ruled out because job length depends on the vehicle, so every button leads to a call or a quote form. Social media is not a lead channel in this plan.",
      },
    ],
  },
};
