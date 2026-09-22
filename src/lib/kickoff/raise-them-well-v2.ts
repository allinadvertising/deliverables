import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

export const raiseThemWellKickoffV2: KickoffV2Data = {
  printAriaLabel: "Print Raise Them Well kickoff V2 as PDF",
  footerNote: "Raise Them Well SEO Strategy Kickoff | September 2026",
  cover: {
    clientName: "Raise Them Well",
    subtitle:
      "SEO plan for September, October and November 2026 for raisethemwell.com.",
  },
  meta: [
    { label: "Period", value: "September to November 2026" },
    {
      label: "Goal",
      value: "Increase Google clicks to raisethemwell.com, and send more of them to product pages",
    },
    {
      label: "Plan",
      value:
        "Month 1: fix broken links and products. Month 2: update blog posts. Month 3: improve product pages.",
    },
    {
      label: "Platform",
      value: "Shopify. SEO and development work done by All In.",
    },
  ],
  summary: {
    title: "Summary",
    objectiveLabel: "Goal",
    objective:
      "Increase Google clicks to raisethemwell.com, and send more of them to product pages.",
    lead:
      "Google clicks went from 1,492 in February 2026 to 448 in August 2026. August 2025 had 952. The site's average Google position went from about 9 to about 19. There are three main reasons. 1) Blog posts are getting fewer clicks. The RSV post (how long is RSV contagious) is seasonal and had 231 clicks in February. The copper post (why take copper supplements for women) went from position 8 to 12. The holy basil post (is holy basil the same as basil) is shown as often as before, but fewer people click because Google shows an AI answer above it. 2) The redesign changed product web addresses. 17 old addresses need redirects, links from other websites such as Kitchen Stewardship and Growing Up Herbal now lead to error pages, and 3 products are unavailable in Google Shopping. 3) For the past year, most of the SEO budget went to the redesign, so the blog posts were not updated.",
    emphasis:
      "What is working: product pages are gaining clicks (the Mag-Go collection and the hand sanitizer spray page), and the blog posts are still the site's pages shown most often in Google's AI answers. The redesign is almost done, so starting this month the budget goes to SEO work. How we will work: you approve any change visitors will see before it goes live, every product that changes web address gets a redirect, and the monthly report uses the same numbers every time.",
  },
  strategy: {
    title: "3-month plan",
    gridClassName: "lg:grid-cols-3",
    operatingPrinciple:
      "Fix broken links and product listings first, then update the blog posts that used to get the most clicks, then improve product pages. Report the same numbers every month.",
    phases: [
      {
        accent: "gold",
        month: "Month 1 · September",
        theme: "Fix broken links and product listings",
        objective:
          "Add redirects for the 17 old web addresses. Fix the 3 products that are unavailable in Google Shopping, together with our Ads team. Check the podcast page before it launches. Update the RSV and holy basil posts. Record the August numbers as the starting point.",
        deliverable:
          "17 redirects live, 3 Shopping products fixed, podcast page checked, RSV and holy basil posts sent to you for review, starting numbers recorded",
        businessOutcome:
          "Links from other websites and Google Shopping lead to live product pages. The RSV post is updated before RSV season starts in October.",
      },
      {
        accent: "blue",
        month: "Month 2 · October",
        theme: "Update and combine blog posts",
        objective:
          "Update the copper and Miralax posts. Combine 5 overlapping posts into the stronger version and remove 4 low-traffic posts, after you approve the list. Review why 405 site pages are not in Google and why phone traffic fell more than desktop. Make the Mag-Go collection the main page for Mag-Go searches. Write 2 immune support product descriptions.",
        deliverable:
          "Copper and Miralax posts updated, 9 posts combined or removed with redirects, list of indexing and phone fixes, Mag-Go pages updated, 2 product descriptions written",
        businessOutcome:
          "Each blog topic has one page instead of two competing ones, and we have a fix list for November.",
      },
      {
        accent: "gold",
        month: "Month 3 · November",
        theme: "Improve product pages and report results",
        objective:
          "Add question-and-answer sections to the children's chewable vitamin, hand sanitizer spray and Mag-Go product pages. Write a third immune support product description. Create a checklist for new product launches. Send you a list of other websites that should update their links. Make the fixes found in October. Send the 3-month report.",
        deliverable:
          "3 product pages with question-and-answer sections, 1 product description, launch checklist, list of links to update, October fixes done, 3-month report and next-quarter plan",
        businessOutcome:
          "More search visitors land on product pages, and new products launch with the SEO basics in place.",
      },
    ],
  },
  focus: {
    title: "Six priorities",
    volumeLabel: "Numbers",
    scopeLabel: "Work involved",
    footnote:
      "Sources: Google Search Console site and page data (September 2025 to August 2026, pulled 16 September 2026); Deep SEO Analysis dated 12 September 2026 (Search Console indexing report, Google AI answers, Merchant Center, Ahrefs backlinks, blog overlap, web address review); intake call with the account manager on 3 August 2026; ClickUp task history. Page names in brackets are the web address after raisethemwell.com. Still to confirm: whether the podcast page is the last redesign page, the live web addresses for 3 products, and whether the March 2026 blog page redesign changed anything Google reads.",
    items: [
      {
        number: "01",
        title: "Redirect old product web addresses",
        businessObjective:
          "Send visitors from old links to the live product pages instead of error pages.",
        evidence:
          "During the redesign, several products changed web address two or three times. Examples: the Mag-Go powder had 4 older addresses, and the hand sanitizer spray had 2. Other websites still link to old addresses that now show an error page: Kitchen Stewardship (Mag-Go), Growing Up Herbal (zinc oxide powder, 3 articles), Constipation Gurus (Mag-Go) and the Podimo podcast page (kids probiotic chewables). Google Search Console lists 23 error pages and 79 redirected addresses.",
        volume: "17 redirects, 10 broken links from other websites",
        scopeImpact: "One redirect file uploaded in Shopify, no code",
        expectedImpact:
          "Visitors from those websites reach the live product page, and Google stops finding error pages.",
        recommendedAction:
          "Upload the 17 redirects in Shopify (Navigation > URL Redirects) and test each one. 3 of them wait on you to confirm the live web address: zinc oxide powder (/products/kid-safe-zinc-oxide-powder), kids probiotic chewables (/products/kids-probiotic-chewables) and the back-to-school bundle (/products/back-to-school-bundle). From now on, keep product web addresses short and add a redirect whenever one changes.",
        status: "High priority · Month 1 · 3 addresses to confirm",
      },
      {
        number: "02",
        title: "Fix the 3 products unavailable in Google Shopping",
        businessObjective:
          "Keep all products visible in Google Shopping.",
        evidence:
          "Merchant Center shows 52 products: 44 approved, 4 limited and 4 not approved. 3 products have the error \"product page unavailable\", which means Google could not open their product page. The likely cause is the web address changes in priority 01.",
        volume: "3 products unavailable, 8 limited or not approved",
        scopeImpact: "Shared with the Ads team, already in progress",
        expectedImpact:
          "All products can appear in Google Shopping again. This also helps the Google Ads campaigns.",
        recommendedAction:
          "Our Ads team is fixing the disapproved products (due 18 September). SEO matches the 3 unavailable products to their live product pages and sends the Ads team the correct web addresses.",
        status: "High priority · Month 1",
      },
      {
        number: "03",
        title: "Update the 4 blog posts with the most traffic",
        businessObjective:
          "Get more clicks from the blog posts that used to bring most visitors, and keep them in Google's AI answers.",
        evidence:
          "RSV post (/blogs/news/how-long-is-rsv-contagious): 231 clicks in February, the peak of RSV season. Holy basil post (/blogs/news/is-holy-basil-the-same-as-basil-answered): shown about 10,000 times in August, same as February, but clicks went from 38 to 16. Copper post (/blogs/news/why-take-copper-supplements-for-women): position went from 8 to 12 and clicks from 49 to 7. Miralax post (/blogs/news/dr-wiggy-why-not-miralax): stable, 8 clicks in August. Together these 4 posts account for over half of the site's 19,600 appearances in Google's AI answers.",
        volume: "4 posts, over half of the site's AI answer appearances",
        scopeImpact: "RSV and holy basil in September, copper and Miralax in October. Web addresses stay the same.",
        expectedImpact:
          "The RSV post is updated before RSV season, and the other posts have a better chance of moving back to page one.",
        recommendedAction:
          "For each post: update the facts, show the updated date, add a short answer at the top and a questions section, and link to the related products. You review each post before it goes live.",
        status: "High priority · Months 1 and 2 · your approval needed",
      },
      {
        number: "04",
        title: "Combine or remove 9 blog posts",
        businessObjective:
          "Stop two of the site's own posts from competing for the same Google searches.",
        evidence:
          "5 pairs of posts cover the same topic: copper (is it safe to take copper supplements / why take copper supplements for women), holy basil (what is holy basil used for / is holy basil the same as basil), rhodiola (what is rhodiola good for / how much rhodiola should I take per day), ashwagandha (what is ashwagandha / how ashwagandha works for women) and toxic-free (toxic-free certified / non-toxic vs toxic-free). 4 posts get almost no visits: don't use that hand sanitizer, could this be what you have been looking for, the Mag-Go Dr. Wiggy article, and top 8 facts every parent should know about RSV.",
        volume: "5 posts to combine, 4 to remove, 405 site pages not in Google",
        scopeImpact: "You approve the list, then we make the changes and add redirects",
        expectedImpact:
          "Each topic has one stronger page, and removed posts redirect so nobody lands on an error page.",
        recommendedAction:
          "Move the useful content from the weaker post of each pair into the stronger one (the second post named in each pair above), and redirect the weaker one. Remove the 4 low-traffic posts with redirects to the closest related page. Separately, review the 405 pages Google has not added to its index (178 of them Google visited and chose to leave out) and decide which to fix.",
        status: "Medium priority · Month 2 · your approval needed",
      },
      {
        number: "05",
        title: "Improve product pages",
        businessObjective:
          "Send more search visitors directly to product pages.",
        evidence:
          "Product pages are the only part of the site gaining clicks. The Mag-Go collection (/collections/mag-go) ranks near the top for \"mag go kids\" and had 55 clicks in August, the most of any page on the site. The hand sanitizer spray page had 10 clicks in August. The children's chewable vitamin, hand sanitizer spray and Mag-Go powder pages already appear in Google's AI answers. Merchant Center asks for more detailed descriptions on 14 immune support products. In the intake call, you asked for a product page review at every launch.",
        volume: "3 product pages in AI answers, 14 descriptions flagged",
        scopeImpact: "3 product descriptions and 3 question-and-answer sections, October and November",
        expectedImpact:
          "Product pages answer the questions shoppers search for, in Google and in AI answers.",
        recommendedAction:
          "Write descriptions for 3 of the 14 flagged immune support products (we will confirm which with you). Add question-and-answer sections to the children's chewable vitamin, hand sanitizer spray and Mag-Go powder pages. Make the Mag-Go collection the main page for Mag-Go searches. Create a checklist we run for every new product launch.",
        status: "Medium priority · Months 2 and 3 · your approval needed",
      },
      {
        number: "06",
        title: "Check the redesigned pages and report monthly",
        businessObjective:
          "Make sure the redesign is not hurting Google traffic, and track progress the same way every month.",
        evidence:
          "Clicks started falling in March 2026, the month the new blog page design launched. In the last 3 months, the number of times the site was shown on phones dropped 38%, while desktop went up 4%. No one has checked yet whether the new design changed titles, dates or links that Google reads.",
        volume: "Starting point: 448 clicks in August 2026",
        scopeImpact: "Checks in October, fixes in November, report every month",
        expectedImpact:
          "Any redesign problems are found and fixed, and each report compares the same numbers.",
        recommendedAction:
          "Check the podcast page before it launches. In October, review the new blog and product page designs and the phone version of the site. Fix the issues in November. Each month, report clicks, Google positions, Google Shopping status and AI answer appearances.",
        status: "High priority for the starting numbers · Medium for the checks · every month",
      },
    ],
  },
  execution: {
    title: "Details",
    artifactsTitle: "Work by month",
    examples: [
      {
        eyebrow: "Traffic",
        title: "Why clicks fell",
        currentLabel: "What the numbers show",
        current: [
          "1,492 clicks in February 2026, 448 in August 2026, 952 in August 2025",
          "The RSV post had 231 clicks in February, during RSV season",
          "The holy basil post is shown as often as before, but gets fewer clicks",
          "Old product web addresses from the redesign lead to error pages",
        ],
        targetLabel: "What the plan does",
        target: [
          "Update the RSV post in September, before RSV season",
          "Add short answers at the top of the posts, the format Google's AI answers use",
          "Add redirects for all 17 old web addresses",
          "Put more work into product pages, which are gaining clicks",
        ],
        decision:
          "Agree to compare each month with August 2026, and to compare winter months with last winter.",
        impact:
          "The RSV season does not make the numbers look better or worse than they are.",
        proof:
          "Monthly Search Console report with the same settings, plus Google Shopping status and AI answer appearances.",
      },
      {
        eyebrow: "Redesign",
        title: "The redesign is almost finished",
        currentLabel: "November 2025 to September 2026",
        current: [
          "A new page designed and built almost every month",
          "4 product descriptions written in August and September (kids probiotic chewables, Mag-Focus, Mag-Go powder, children's chewable vitamin)",
          "No regular monthly SEO tasks",
        ],
        targetLabel: "Starting September 2026",
        target: [
          "Monthly SEO tasks with dates in ClickUp",
          "Every new page checked before launch",
          "Short product web addresses, with a redirect whenever one changes",
        ],
        decision:
          "Confirm that the podcast page is the last page of the redesign, or tell us which pages are still coming.",
        impact:
          "New pages do not create new broken links, and SEO work happens every month.",
        proof:
          "Monthly task list in ClickUp and a launch check for each new page.",
      },
    ],
    artifacts: [
      {
        phase: "Month 1",
        specialists: "Account manager and SEO strategist, with you",
        title: "Kickoff questions",
        evidence:
          "3 product web addresses are not confirmed, the redesign end date is not confirmed, and the blog updates need your approval.",
        recommendedAction:
          "Confirm the live web addresses for zinc oxide powder, kids probiotic chewables and the back-to-school bundle; whether the podcast page is the last redesign page; and approval to update the RSV and holy basil posts.",
        expectedImpact: "September work can be finished before 3 October.",
      },
      {
        phase: "Month 1",
        specialists: "SEO specialist and the Ads team",
        title: "Redirects and Google Shopping",
        evidence:
          "17 old web addresses, 10 broken links from other websites, 3 products unavailable in Google Shopping.",
        recommendedAction:
          "Upload and test the 17 redirects in Shopify, and send the Ads team the live web addresses for the 3 products.",
        expectedImpact:
          "Old links and Google Shopping lead to live product pages.",
      },
      {
        phase: "Month 1",
        specialists: "Content writer and SEO strategist",
        title: "RSV and holy basil posts",
        evidence:
          "The RSV post was the top page last winter. The holy basil post is the site's page shown most often in AI answers.",
        recommendedAction:
          "Update both posts at their current web addresses and send them to you for review.",
        expectedImpact:
          "Both posts are up to date before winter.",
      },
      {
        phase: "Month 2",
        specialists: "Content writer, developer and SEO specialist",
        title: "Copper and Miralax posts, and the 9 blog posts",
        evidence:
          "The copper post dropped from page one. 5 pairs of posts cover the same topic and 4 posts get almost no visits.",
        recommendedAction:
          "Update the copper and Miralax posts. After your approval, combine or remove the 9 posts and add redirects.",
        expectedImpact: "One page per blog topic.",
      },
      {
        phase: "Month 2",
        specialists: "SEO specialist",
        title: "Pages missing from Google, and phone traffic",
        evidence:
          "405 of 585 site pages are not in Google. Phone appearances fell 38% while desktop went up 4%.",
        recommendedAction:
          "Group the missing pages by type, check the new page designs on phones, and list the fixes.",
        expectedImpact: "A fix list for November.",
      },
      {
        phase: "Months 2 and 3",
        specialists: "Content writer and SEO specialist",
        title: "Product descriptions and question-and-answer sections",
        evidence:
          "Merchant Center flags 14 immune support products. The children's chewable vitamin, hand sanitizer spray and Mag-Go powder pages appear in AI answers.",
        recommendedAction:
          "Write 3 immune support product descriptions and add question-and-answer sections to the 3 pages above. You review each one.",
        expectedImpact: "More visits to product pages from Google and Google Shopping.",
      },
      {
        phase: "Month 3",
        specialists: "SEO strategist and account manager",
        title: "Launch checklist and link updates",
        evidence:
          "You asked for a product page review at every launch. Other websites still link to old product web addresses.",
        recommendedAction:
          "A checklist we run for every new product, and a list of websites with the correct link, so you can ask them to update it.",
        expectedImpact:
          "New products launch with the SEO basics, and more outside links point to live pages.",
      },
      {
        phase: "Month 3",
        specialists: "Developer and SEO specialist",
        title: "October fixes and 3-month report",
        evidence: "Results of the October checks. August 2026 starting numbers.",
        recommendedAction:
          "Make the fixes, report the 3 months against August, and propose next quarter's blog and podcast topics.",
        expectedImpact:
          "You see what changed, and next quarter is planned from the results.",
      },
    ],
  },
  approval: {
    title: "Decisions we need from you",
    gates: [
      {
        timing: "Kickoff · 16 September",
        label: "Redesign",
        title: "Is the podcast page the last redesign page?",
        detail:
          "If more pages are coming, we check each one before it launches.",
      },
      {
        timing: "Kickoff · 16 September",
        label: "Products",
        title: "Live web addresses for 3 products",
        detail:
          "Zinc oxide powder, kids probiotic chewables and the back-to-school bundle. The other 14 redirects can go live now.",
      },
      {
        timing: "Kickoff · 16 September",
        label: "Blog",
        title: "Approval to update the RSV and holy basil posts",
        detail:
          "Same web addresses, updated information. Let us know if someone on your team should check the health information.",
      },
      {
        timing: "Before anything is published",
        label: "Review",
        title: "You review every blog post and product description",
        detail: "We write it, you check the facts and tone, then it is published.",
      },
      {
        timing: "Early October",
        label: "Blog posts",
        title: "Approve the 9 posts to combine or remove",
        detail:
          "Each removed post redirects to a related page, so no visitor lands on an error page.",
      },
      {
        timing: "Before the first report",
        label: "Reporting",
        title: "Agree on the starting numbers",
        detail:
          "August 2026 as the monthly starting point, and winter months compared with last winter because of RSV season.",
      },
    ],
    decisions: [
      {
        label: "Fix and update before adding new posts",
        detail:
          "No new blog posts this quarter. The existing posts still get searched for and need updating first.",
      },
      {
        label: "You approve visible changes",
        detail:
          "Blog posts, the 9-post cleanup and product descriptions wait for your approval. Redirects and technical fixes do not.",
      },
      {
        label: "Redirect every changed product web address",
        detail:
          "Product web addresses stay short and do not change without a redirect, so outside links keep working.",
      },
      {
        label: "Ads and SEO work together",
        detail:
          "The Ads team handles Google Ads and product disapprovals. SEO sends them the correct product pages and improves product descriptions.",
      },
      {
        label: "Raise Them Well and Momsanity are separate",
        detail:
          "Each brand has its own plan and its own monthly tasks.",
      },
      {
        label: "Same numbers every month",
        detail:
          "Clicks, Google positions, Google Shopping status and AI answer appearances, with the same settings each time.",
      },
    ],
  },
};
