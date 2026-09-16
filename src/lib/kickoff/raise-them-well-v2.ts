import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

export const raiseThemWellKickoffV2: KickoffV2Data = {
  printAriaLabel: "Print Raise Them Well kickoff V2 as PDF",
  footerNote: "Raise Them Well SEO Strategy Kickoff | September 2026",
  cover: {
    clientName: "Raise Them Well",
    subtitle:
      "Your organic search plan for the next three months: stop the leaks, bring back the articles that used to bring visitors, and grow the product pages.",
  },
  meta: [
    { label: "Period", value: "September to November 2026" },
    {
      label: "Business objective",
      value: "More revenue from raisethemwell.com, with organic search back on a growth path",
    },
    {
      label: "Roadmap",
      value: "Fix the leaks first, bring back the articles second, grow the product pages third.",
    },
    {
      label: "Platform",
      value: "Shopify. All SEO and development work handled by All In.",
    },
  ],
  summary: {
    title: "What happened, and what changes now",
    objectiveLabel: "Business objective",
    objective:
      "Get Google traffic growing again after the redesign, and point more of it at the products that make money.",
    lead:
      "Google clicks peaked at about 1,500 a month last winter and fell to about 450 in August, also below last August's 950. Three things explain most of it. First, the articles that brought most visitors are slipping: the RSV article is seasonal and earned 231 clicks in February alone, the copper article dropped from page one, and the holy basil article still shows up as often but people now read Google's AI answer instead of clicking. Second, the redesign renamed product web addresses, so links from partner blogs like Kitchen Stewardship and Growing Up Herbal now land on error pages, and 3 products are unavailable in Google Shopping. Third, over the past year most of the SEO budget went into the new site, so nobody was refreshing those articles.",
    emphasis:
      "The good news: people still search for what you write about, your articles are still the pages Google's AI answers show most often, and product pages like the hand sanitizer spray and the Mag-Go collection are growing. The new site is almost finished, so from this month the budget goes back to search. Three rules: nothing you would notice on the site goes live without your approval; renamed products always get a redirect; and we report the same numbers every month.",
  },
  strategy: {
    title: "3 Month Roadmap",
    gridClassName: "lg:grid-cols-3",
    operatingPrinciple:
      "Stop losing what the site already earned, refresh the articles people still search for, then grow the product pages, and show the same numbers every month.",
    phases: [
      {
        accent: "gold",
        month: "Month 1 · September",
        theme: "Stop the leaks",
        objective:
          "Send every old product address to the live product page, so partner links and Google stop hitting error pages. Get the 3 unavailable products back into Google Shopping with our Ads team. Check the new podcast page before it goes live. Start the RSV refresh before RSV season, and the holy basil refresh. Record the starting numbers.",
        deliverable:
          "Redirects live, Shopping products fixed, podcast page checked, two article refreshes sent for your review, starting numbers recorded",
        businessOutcome:
          "Visitors from partner blogs land on real products again, and the RSV article is ready before its busy season.",
      },
      {
        accent: "blue",
        month: "Month 2 · October",
        theme: "Bring the articles back",
        objective:
          "Refresh the copper and Miralax articles. Combine nine small or overlapping blog posts into the stronger ones, with your approval. Find out why the other half of the site's pages are not in Google, and why phone traffic dropped more. Point all Mag-Go searches at the Mag-Go collection. Write the first two immune support product pages.",
        deliverable:
          "Four articles refreshed, blog cleaned up, indexing and mobile findings, Mag-Go pages aligned, two product pages written",
        businessOutcome:
          "The articles that brought most visitors are up to date, and Google has fewer, stronger pages to choose from.",
      },
      {
        accent: "gold",
        month: "Month 3 · November",
        theme: "Grow the product pages",
        objective:
          "Add short question-and-answer sections to product pages that already show up in AI answers. Write a third immune support page. Build the checklist for every new product launch. Give your partner blogs the right links to update. Fix what the October checks found, and report the quarter.",
        deliverable:
          "Three product pages updated, launch checklist, partner link list, technical fixes, 90-day report and next-quarter plan",
        businessOutcome:
          "More of the traffic lands on pages that sell, and every new product launches ready for Google.",
      },
    ],
  },
  focus: {
    title: "Six priorities to turn the traffic around",
    volumeLabel: "Evidence",
    scopeLabel: "Scope impact",
    footnote:
      "Sources: Google Search Console monthly and page data (September 2025 to August 2026, read 16 September 2026), Deep SEO Analysis of 12 September 2026 (Search Console indexing, AI features, Merchant Center, Ahrefs backlinks, blog overlap, web address structure), the intake conversation of 3 August 2026, and the ClickUp work history. Still open: whether the podcast page is the last redesign page, the live web addresses for three products, and whether the March blog page redesign changed anything Google reads.",
    items: [
      {
        number: "01",
        title: "Send old product addresses to the live products",
        businessObjective:
          "Stop partner blogs and Google from landing on error pages.",
        evidence:
          "The same products changed web address two or three times during the redesign. Ten partner links, from sites like The Good Trade, Kitchen Stewardship and Growing Up Herbal, now end on error pages. Google reports 23 error pages and 79 old addresses.",
        volume: "17 old addresses mapped, 10 broken partner links",
        scopeImpact: "One redirect upload in Shopify, no code",
        expectedImpact:
          "Partner readers reach real products again, and Google stops wasting visits on old addresses.",
        recommendedAction:
          "Upload the redirect list in Shopify, after you confirm the live addresses for the zinc oxide powder, the kids probiotic chewables and the back-to-school bundle. Keep product addresses short and never change a live one without a redirect.",
        status: "P0 · Month 1 · 3 addresses to confirm with you",
      },
      {
        number: "02",
        title: "Get every product back into Google Shopping",
        businessObjective:
          "Keep products visible where shoppers compare and buy.",
        evidence:
          "Merchant Center shows 44 of 52 products approved. Three are unavailable because their product page could not be found, and Google estimates fixing open issues could bring about 6 percent more product clicks.",
        volume: "3 products unavailable, 8 limited or not approved",
        scopeImpact: "Shared with the Ads team, already in progress",
        expectedImpact:
          "Every product can show in Shopping again, which also helps your Google Ads results.",
        recommendedAction:
          "Our Ads team is clearing the disapproved products this week. SEO matches the 3 unavailable products to their live pages, so the fix sticks.",
        status: "P0 · Month 1",
      },
      {
        number: "03",
        title: "Refresh the four articles that bring most visitors",
        businessObjective:
          "Win back the readers the site used to get, and keep being quoted in Google's AI answers.",
        evidence:
          "The RSV article earned 231 clicks in February and is seasonal. Holy basil still appears about 10,000 times a month, but clicks fell from 38 to 16 as AI answers took them. Copper dropped from position 8 to 12 and from 49 to 7 clicks. Together these four articles hold over half of the site's 19,600 AI answer appearances.",
        volume: "4 articles, over half of AI answer appearances",
        scopeImpact: "Two in September, two in October, same web addresses",
        expectedImpact:
          "The RSV article is current before its busy season, and the others compete on page one again.",
        recommendedAction:
          "Update each article with current facts, a visible updated date, a short answer at the top, common questions, and links to the matching products. RSV first, then holy basil, copper and Miralax. You review every article before it goes live.",
        status: "P0 · Months 1 and 2 · your approval first",
      },
      {
        number: "04",
        title: "Fewer, stronger blog posts and pages",
        businessObjective:
          "Stop the site competing with itself in Google.",
        evidence:
          "Two copper articles and two holy basil articles compete for the same searches, and four very old posts get almost no visits. Only 180 of 585 known pages are in Google, and 178 were read by Google and left out.",
        volume: "9 posts to combine or retire, 405 pages not indexed",
        scopeImpact: "Your approval on the list, then redirects",
        expectedImpact:
          "Each topic has one strong page, and Google spends its time on the pages that matter.",
        recommendedAction:
          "Combine the overlapping posts into the stronger one and retire the four smallest, each with a redirect so no reader hits an error. Review the pages Google left out and decide which to improve. Point all Mag-Go searches at the Mag-Go collection.",
        status: "P1 · Month 2 · your approval first",
      },
      {
        number: "05",
        title: "Grow the product pages, the part that is already rising",
        businessObjective:
          "Send more search visitors straight to products.",
        evidence:
          "The hand sanitizer spray page is now a top-5 page for clicks, the Mag-Go collection ranks around position 5 for mag go kids, and product pages are the only part of the site growing. Merchant Center asks for better descriptions on 14 immune support products. You asked for a product page review at every launch.",
        volume: "14 product descriptions flagged",
        scopeImpact: "Five product pieces across October and November",
        expectedImpact:
          "Product pages answer the questions shoppers ask, in Google and in AI answers, and new launches start strong.",
        recommendedAction:
          "Write the top immune support product pages, add short question-and-answer sections to pages already appearing in AI answers, and turn your launch review into a checklist we run for every new product.",
        status: "P1 · Months 2 and 3 · your approval first",
      },
      {
        number: "06",
        title: "Check the new site, and measure the same way every month",
        businessObjective:
          "Make sure the new site helps search, and show progress you can check.",
        evidence:
          "The slide started in March, the month the new blog page design went live. Average position went from about 9 to about 19, and the phone drop was bigger than desktop. Nobody has checked yet whether the new design changed anything Google reads.",
        volume: "Starting point: 448 clicks in August",
        scopeImpact: "Checks in October, fixes in November, monthly report",
        expectedImpact:
          "Anything the redesign broke for Google gets found and fixed, and every report compares the same numbers.",
        recommendedAction:
          "Check the podcast page before launch. In October, review the new blog and product templates and the phone experience. Fix what we find in November. Report clicks, rankings, Shopping status and AI answer appearances every month.",
        status: "P0 baseline · P1 checks · every month",
      },
    ],
  },
  execution: {
    title: "What changes, who decides, and how we prove it",
    artifactsTitle: "Evidence, action, impact, and specialists",
    examples: [
      {
        eyebrow: "The traffic drop",
        title: "Part seasonal, part AI answers, part lost rankings, and all of it fixable",
        currentLabel: "What the numbers show",
        current: [
          "About 1,500 clicks in February, about 450 in August",
          "The RSV article alone had 231 clicks in February, its busy season",
          "Holy basil is seen as often as before, but fewer people click",
          "Old product addresses from the redesign send partner readers to error pages",
        ],
        targetLabel: "How the plan answers it",
        target: [
          "RSV refreshed in September, before the season starts",
          "Articles rewritten with short answers first, so AI answers keep quoting them",
          "Redirects for every renamed product",
          "More effort on product pages, the part that is growing",
        ],
        decision:
          "Agree that we judge progress month by month against August, and compare the winter months with last winter.",
        impact:
          "Everyone reads the same numbers, and the seasonal swing is not mistaken for success or failure.",
        proof:
          "Monthly Search Console report on the same settings, plus Shopping status and AI answer appearances.",
      },
      {
        eyebrow: "The redesign",
        title: "The new site is nearly done, so the budget goes back to search",
        currentLabel: "The last year",
        current: [
          "A new page design and build almost every month since November 2025",
          "Four product pages written in August and September",
          "No regular monthly SEO work in that time",
        ],
        targetLabel: "From September",
        target: [
          "A monthly SEO plan with clear tasks and dates",
          "Every new page checked before launch",
          "Product web addresses kept short and never changed without a redirect",
        ],
        decision:
          "Confirm the podcast page is the last redesign page, or tell us what is still coming.",
        impact:
          "The redesign stops creating new search problems, and search work runs every month.",
        proof:
          "Monthly task list in ClickUp and the launch check recorded for each new page.",
      },
    ],
    artifacts: [
      {
        phase: "Month 1",
        specialists: "Account manager and AIA SEO strategist with you",
        title: "Kickoff and three quick answers",
        evidence:
          "Three product addresses are unconfirmed, the redesign end date is unclear, and the article refreshes need your go-ahead.",
        recommendedAction:
          "Confirm the three live product addresses, whether the podcast page is the last redesign page, and approval to refresh the RSV and holy basil articles.",
        expectedImpact: "September work can ship before the next billing date.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO specialist, with the Ads team",
        title: "Redirects and Shopping fixes",
        evidence:
          "17 old addresses, 10 broken partner links, 3 products unavailable in Shopping.",
        recommendedAction:
          "Upload the redirects in Shopify, test each one, and give the Ads team the live product addresses.",
        expectedImpact:
          "Partner readers and Shopping shoppers land on real products.",
      },
      {
        phase: "Month 1",
        specialists: "Content writer and AIA SEO strategist",
        title: "RSV and holy basil refreshes",
        evidence:
          "RSV is seasonal and was the top page last winter. Holy basil holds the most AI answer appearances on the site.",
        recommendedAction:
          "Both articles updated on their current addresses and sent to you for review.",
        expectedImpact:
          "The two strongest articles are current before winter.",
      },
      {
        phase: "Month 2",
        specialists: "Content writer, AIA developer and AIA SEO",
        title: "Copper, Miralax and the blog clean-up",
        evidence:
          "Copper dropped off page one. Nine posts overlap or get almost no visits.",
        recommendedAction:
          "Two refreshes, then the approved posts combined or retired with redirects.",
        expectedImpact: "One strong article per topic.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO specialist",
        title: "Why pages are left out, and the phone drop",
        evidence:
          "405 of 585 known pages are not in Google. Phone visibility fell more than desktop.",
        recommendedAction:
          "Sort the left-out pages by type, check the new templates and the phone experience, and list the fixes.",
        expectedImpact: "A clear fix list for November.",
      },
      {
        phase: "Months 2 and 3",
        specialists: "Content writer and AIA SEO",
        title: "Product pages that answer questions",
        evidence:
          "14 immune support products flagged in Merchant Center. Hand sanitizer and vitamin D drops appear in AI answers.",
        recommendedAction:
          "Three immune support pages and two question-and-answer sections, each reviewed by you.",
        expectedImpact: "More product visits from search and Shopping.",
      },
      {
        phase: "Month 3",
        specialists: "AIA SEO strategist with the account manager",
        title: "Launch checklist and partner links",
        evidence:
          "You ask for a product page review at every launch. Partner blogs still link to old addresses.",
        recommendedAction:
          "A checklist we run for every new product, and a short list of link updates you can send your partners.",
        expectedImpact:
          "New products launch ready for Google, and partner links point at live pages.",
      },
      {
        phase: "Month 3",
        specialists: "AIA developer and AIA SEO",
        title: "Fixes and the 90-day report",
        evidence: "Findings from the October checks. The August starting point.",
        recommendedAction:
          "Fix what the checks found, report the quarter against the starting point, and propose next quarter's articles and podcast topics.",
        expectedImpact:
          "You see what moved, and the next quarter is planned on the results.",
      },
    ],
  },
  approval: {
    title: "Decisions before we start",
    gates: [
      {
        timing: "Kickoff · 16 September",
        label: "Redesign",
        title: "Is the podcast page the last redesign page?",
        detail:
          "If more pages are coming, we check each one before launch so the redesign does not create new search problems.",
      },
      {
        timing: "Kickoff · 16 September",
        label: "Products",
        title: "Live web addresses for three products",
        detail:
          "Zinc oxide powder, kids probiotic chewables and the back-to-school bundle. The other redirects go live right away.",
      },
      {
        timing: "Kickoff · 16 September",
        label: "Articles",
        title: "Go-ahead to refresh the RSV and holy basil articles",
        detail:
          "Same web addresses, updated facts. Tell us if a physician on your team should check the health facts.",
      },
      {
        timing: "Before copy goes live",
        label: "Review",
        title: "You review every article and product page",
        detail: "We write, you confirm the facts and the tone, then it publishes.",
      },
      {
        timing: "Early October",
        label: "Blog clean-up",
        title: "Approve the list of posts to combine or retire",
        detail:
          "Nine posts. Each old address forwards to the stronger post, so no reader is lost.",
      },
      {
        timing: "Before the first report",
        label: "Measurement",
        title: "Agree the starting point and how we compare",
        detail:
          "August as the monthly starting point, and winter compared with last winter because of the RSV season.",
      },
    ],
    decisions: [
      {
        label: "Fix the leaks before adding pages",
        detail:
          "No new blog posts this quarter. The existing articles still have the demand; they need updating first.",
      },
      {
        label: "Nothing visible goes live without your approval",
        detail:
          "Articles, blog clean-up and product copy all wait on your review. Redirects and behind-the-scenes fixes do not.",
      },
      {
        label: "Renamed products always get a redirect",
        detail:
          "Short, stable product addresses from now on, so partner links keep working.",
      },
      {
        label: "Ads and SEO work together",
        detail:
          "The Ads team owns Google Ads and product disapprovals. SEO supports them with live product pages and better product content.",
      },
      {
        label: "Raise Them Well and Momsanity stay separate",
        detail:
          "Each brand has its own plan and its own monthly tasks.",
      },
      {
        label: "Search is judged on the same numbers every month",
        detail:
          "Clicks, rankings, Shopping status and AI answer appearances, on the same settings each time.",
      },
    ],
  },
};
