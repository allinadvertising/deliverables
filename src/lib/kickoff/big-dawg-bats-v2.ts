import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

export const bigDawgBatsKickoffV2: KickoffV2Data = {
  printAriaLabel: "Print Big Dawg Bats kickoff V2 as PDF",
  footerNote: "Big Dawg Bats SEO Strategy Kickoff | September 2026",
  cover: {
    clientName: "Big Dawg Bats",
    subtitle:
      "Your organic search plan for the next three months: rolled bats first, the rolling service as the way in.",
  },
  meta: [
    { label: "Period", value: "September to November 2026" },
    {
      label: "Business objective",
      value: "About 1,000 bats sold in 2027, led by rolled bats",
    },
    {
      label: "Roadmap",
      value: "Protect first, build the rolled bats page second, grow third.",
    },
    {
      label: "Platform",
      value: "Shopify and the Google Shopping feed. Site changes handled by All In.",
    },
  ],
  summary: {
    title: "Where you stand today",
    objectiveLabel: "Business objective",
    objective:
      "Sell more bats online, rolled bats first, with the bat rolling service bringing buyers in.",
    lead:
      "Your site earned 27,907 Google clicks in the last 12 months. Most came from blog posts and service pages. Bat product and collection pages earned 2,320. Rolled bats, your first priority, has no page: those searches brought 8,876 impressions and only 117 clicks, landing on a blog post and the homepage. 124 products are now disapproved in Google Shopping, 121 of them in one week, right after the bat options changed. And the recent dip looks like the season ending: early September looks ahead of last year, which we confirm before the first report.",
    emphasis:
      "Three rules for the plan. Every word we write follows the language your agreement allows. No old link is redirected until the page it points to is ready. And search is measured on what it can move: bat-page clicks, rolled bats rankings and organic bat orders. Getting to 1,000 bats also needs the bigger catalogue, Shopping and ads working together.",
  },
  strategy: {
    title: "3 Month Roadmap",
    gridClassName: "lg:grid-cols-3",
    operatingPrinciple:
      "Get the words and the numbers right, fix Shopping, give rolled bats a real page, then point the blog at bats you can ship.",
    phases: [
      {
        accent: "gold",
        month: "Month 1 · September",
        theme: "Protect and fix",
        objective:
          "Turn your agreement into a one-page approved-language sheet and clean the restricted term out of titles and metadata. Find out why 124 products are disapproved in Shopping and fix the feed. Set the baseline on the right numbers and confirm GA4 records bat orders. Ship three quick site fixes: the robots file, three broken redirects and the homepage heading.",
        deliverable:
          "Approved-language sheet, titles cleaned, Shopping listings restored, baseline set, three site fixes live",
        businessOutcome:
          "No copy risk on your account, your products back in Shopping, and a starting point everyone agrees on.",
      },
      {
        accent: "blue",
        month: "Month 2 · October",
        theme: "Build rolled bats",
        objective:
          "Build the rolled bats page and rewrite the rolled baseball, softball, slowpitch and fastpitch collections. Make one page the bat rolling page and one page the glove steamer page. Title rolled bats in the feed as Rolled, year, model. Add a shop-this-bat link to the top review posts, map which blog posts to merge, and start earning links from suppliers and review sites.",
        deliverable:
          "Rolled bats page and four collections live, one bat rolling page, rolled feed titles, review posts linking to bats in stock",
        businessOutcome:
          "People searching for rolled bats land on a page where they can pick one and buy it.",
      },
      {
        accent: "gold",
        month: "Month 3 · November",
        theme: "Consolidate and grow",
        objective:
          "Merge the rolling, shaving and compression posts into the strongest article in each group, then redirect the rest. Agree how out-of-stock and retired bats behave before the catalogue grows. Tidy the payment pages and business schema. Keep earning links, and read the quarter against last year.",
        deliverable:
          "Three strongest articles rebuilt, blog redirects live, catalogue growth rules agreed, first links earned, 90-day report",
        businessOutcome:
          "Fewer, stronger pages, and a catalogue that can triple without breaking links.",
      },
    ],
  },
  focus: {
    title: "Six priorities for selling more bats",
    volumeLabel: "Evidence",
    scopeLabel: "Scope impact",
    footnote:
      "Sources: Deep SEO Analysis of 15 September 2026, full-site keyword research of 15 September 2026 (Search Console 16 September 2025 to 11 September 2026; Ahrefs figures are third-party estimates), Merchant Center captured 15 September 2026, live checks of the store on 15 September 2026, and the intake interview of 10 September 2026. Still open: the wording of your agreement, the monthly scope and reporting goals in writing, whether GA4 records organic bat orders, the reasons behind the Shopping disapprovals, and whether there is a business address for local listings.",
    items: [
      {
        number: "01",
        title: "Get the language right before any copy ships",
        businessObjective:
          "Protect the business while we write titles, descriptions and feed listings.",
        evidence:
          "You told us your agreement restricts an association term and two bat brands in rolled and shaved listings. The live store still has that term in 3 product titles and 75 of 241 product web addresses, and some older metadata. One of your two top blog articles reviews a bat from one of the restricted brands.",
        volume: "3 titles and 75 addresses carry the term",
        scopeImpact: "One language sheet, then a titles and metadata cleanup",
        expectedImpact:
          "Every page and listing we touch uses words you have approved and the agreement allows.",
        recommendedAction:
          "Share the agreement text, or a short summary from your lawyer. We turn it into a one-page sheet: words to avoid, approved substitutes like travel ball and 1.15 BPF, and where the rules apply. Then we clean titles, search titles, descriptions and image text. Web addresses stay as they are unless you decide otherwise, and redirects go in before any rename.",
        status: "P0 · Month 1 · waits on the agreement text",
      },
      {
        number: "02",
        title: "Put your bats back in Google Shopping",
        businessObjective:
          "Keep your listings showing where buyers see them first, above the organic results.",
        evidence:
          "124 products are disapproved in Shopping, 121 of them in the last seven days, and 121 are blocked as product page unavailable, right after the bat options were restructured. The feed holds 6,133 items for 3,082 variants, about twice as many, which points to the catalogue being sent twice.",
        volume: "124 not approved, up 121 in a week",
        scopeImpact: "Feed diagnosis and resync, then rolled feed titles",
        expectedImpact:
          "Your bats show again in Shopping results, without duplicates, under the words buyers type.",
        recommendedAction:
          "Export the disapproval reasons before changing anything. Keep one data source and resync the Shopify Google channel so listings carry the current options and links. Once the feed is clean, title rolled bats as Rolled, year, model in the feed and add missing descriptions, counted by product.",
        status: "P0 · Month 1 · feed titles in Month 2",
      },
      {
        number: "03",
        title: "Give rolled bats a page that sells",
        businessObjective:
          "Put your highest-value order in front of the people already searching for it.",
        evidence:
          "Rolled bats searches earned 8,876 impressions and 117 clicks in 12 months, landing on a blog post and the homepage. The rolled bats collection address returns a 404. Rolled bats is about 590 searches a month in keyword research estimates, and the sites ranking for it are small specialists.",
        volume: "8,876 impressions, 117 clicks, no page",
        scopeImpact: "One new page and four collection rewrites",
        expectedImpact:
          "Rolled bats searches land on a page where the shopper can pick a bat and buy it.",
        recommendedAction:
          "Build /collections/rolled-bats linking to every rolled collection, with a short, honest explainer, a break-in and not a magic distance gain, your compression-test videos once they are ready, and an FAQ. Rewrite the rolled baseball, softball, slowpitch and fastpitch collections in approved language. Link the rolling blog posts to the new page.",
        status: "P1 · Month 2 · after the language sheet",
      },
      {
        number: "04",
        title: "One clear page for bat rolling",
        businessObjective:
          "Point every bat rolling signal at the page that already wins.",
        evidence:
          "The Precision MAX rolling product page earned 1,050 clicks at position 8.3, while the rolling service page earned 3 and the rolling collection 2. Rolling blog posts compete for the same searches. People search rolling about eight times more than break-in. The homepage's main heading reads Attention!, and product pages carry it as a second heading.",
        volume: "1,050 clicks against 3 and 2",
        scopeImpact: "Title and heading changes, one site-wide heading fix",
        expectedImpact:
          "Google sees one clear bat rolling page and one clear glove steamer page, and every page's heading says what it sells.",
        recommendedAction:
          "Lead the rolling product page title and heading with bat rolling, and keep break-in and Precision MAX in the body. Rewrite the rolling posts to answer the question and link to the service. Decide together whether the extra service page and collection stay for navigation. Replace the Attention! heading in the theme. Same approach for the glove steamer.",
        status: "P1 · heading in Month 1 · pages in Month 2",
      },
      {
        number: "05",
        title: "Turn review traffic into bat sales",
        businessObjective:
          "Send blog readers to a bat you can actually ship.",
        evidence:
          "The top 5 blog posts take 62 percent of 11,658 blog clicks. The Combat Spec comparison earned 2,107 clicks, but the only Spec H1 in the store is sold out. 16 of 44 posts are about rolling, and 11 posts rank for bat rolling.",
        volume: "Top 5 posts: 62 percent of blog clicks",
        scopeImpact: "Links on 8 review posts, then three merges",
        expectedImpact:
          "Readers can go straight to a bat in stock, and each topic has one strong article instead of a dozen weak ones.",
        recommendedAction:
          "Add a shop-this-bat, or closest in stock, block to the top 8 review posts. New reviews only for models you stock, and none for the restricted brands until the language sheet clears it. Merge the rolling, shaving and compression posts into the strongest article in each group, then redirect the rest. Nothing with traffic is deleted.",
        status: "P1 · Month 2 links · Month 3 merges",
      },
      {
        number: "06",
        title: "Measure the right numbers and clean up behind the scenes",
        businessObjective:
          "Show real progress, compared season to season, and stop Google wasting visits.",
        evidence:
          "Clicks peaked at 4,058 in July and fell to 2,506 in August as the season ended, so month-to-month comparisons read as a decline. Early September looks ahead of last year, which a full year-over-year pull will confirm. GA4 has not yet been checked for organic bat orders. The robots file lost Shopify's default rules, which likely explains most of the 1,577 excluded pages; an export confirms it before the fix. 116 old addresses return a 404.",
        volume: "Baseline: 27,907 clicks in 12 months",
        scopeImpact: "Baseline and GA4 check, robots fix, redirects",
        expectedImpact:
          "Every report compares like season with like season, and Google spends its visits on real products and articles.",
        recommendedAction:
          "Set the baseline from Search Console date totals with a year-over-year column. Confirm GA4 records organic bat orders with revenue. Restore Shopify's default robots rules. Redirect the old addresses that still carry links or traffic to the closest live page, and fix the three broken redirects now.",
        status: "P0 baseline · P1 cleanup · monthly report",
      },
    ],
  },
  execution: {
    title: "What changes, who decides, and how we prove it",
    artifactsTitle: "Evidence, action, impact, and specialists",
    examples: [
      {
        eyebrow: "Reading the numbers",
        title: "The dip looks like the season, and search is measured on what it can move",
        currentLabel: "How the numbers looked",
        current: [
          "Clicks peaked at 4,058 in July and dropped to 2,506 in August",
          "That compares the height of the season with the months after it",
          "Bat pages earned 2,320 clicks in 12 months, about 46 orders a year at an assumed 2 percent conversion rate",
        ],
        targetLabel: "How we will report",
        target: [
          "Same months compared year over year: early September looks ahead of last year, confirmed before the first report",
          "Measured on bat-page clicks, rolled bats rankings and organic bat orders once GA4 is confirmed",
          "1,000 bats also depends on growing the catalogue to about 600 bats, Shopping and ads",
        ],
        decision:
          "Agree the reporting goals and the 2027 bat goal in writing. The conversion rate is an assumption until GA4 confirms it.",
        impact:
          "You judge the work on numbers that compare fairly, and the part search controls is visible within the quarter.",
        proof:
          "Monthly report from Search Console date totals with a year-over-year column, plus organic bat orders from GA4.",
      },
      {
        eyebrow: "Approved language",
        title: "One page of approved words, before any copy ships",
        currentLabel: "What is live today",
        current: [
          "The restricted term in 3 product titles and 75 product web addresses",
          "Some older metadata still carries it",
          "One of your two top blog articles reviews a bat from a restricted brand",
        ],
        targetLabel: "What the sheet covers",
        target: [
          "Words to avoid and approved substitutes, such as travel ball and 1.15 BPF",
          "Where the rules apply: titles, descriptions, headings, image text, feed titles, blog posts and ads",
          "How we describe rolled and shaved bats, including that altered bats are not game legal in high school or college play",
        ],
        decision:
          "You share the agreement text or a lawyer's summary and approve the sheet. Web addresses change only if you decide, with redirects ready first.",
        impact:
          "Every page, listing and ad we write stays inside the agreement, so marketing never puts the business at risk.",
        proof:
          "A product export showing the term gone from titles and metadata, and a re-check of a sample of live pages.",
      },
    ],
    artifacts: [
      {
        phase: "Month 1",
        specialists: "Account manager with you",
        title: "Scope, goals and tracking",
        evidence:
          "The monthly scope, reporting goals and 2027 bat goal are not written down. GA4 access was granted but not yet checked for bat orders.",
        recommendedAction:
          "Confirm services, the written bat goal, reporting goals, the approver and whether there is a business address. Check that GA4 records organic bat orders with revenue.",
        expectedImpact:
          "Everyone agrees what the three months are for and how progress is shown.",
      },
      {
        phase: "Month 1",
        specialists: "Account manager and AIA SEO with you",
        title: "Approved language and cleanup",
        evidence:
          "The restricted term appears in 3 product titles, 75 product web addresses and older metadata.",
        recommendedAction:
          "One-page approved-language sheet from your agreement. Titles, search titles, descriptions and image text cleaned in that order.",
        expectedImpact:
          "The restricted term disappears from everything a shopper or search engine reads.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO, feed specialist",
        title: "Shopping feed repair",
        evidence:
          "124 disapproved products, 121 blocked as page unavailable, 6,133 feed items for 3,082 variants.",
        recommendedAction:
          "Disapproval reasons exported, one data source kept, Shopify channel resynced, re-checked in 72 hours.",
        expectedImpact:
          "Your bats show in Shopping again, without duplicates.",
      },
      {
        phase: "Month 1",
        specialists: "AIA developer",
        title: "Three quick site fixes",
        evidence:
          "The robots file lost Shopify's defaults. Three old links return 404. The site-wide main heading is an Attention! notice.",
        recommendedAction:
          "Default robots rules restored with your custom lines on top. Three redirects added. The Attention! notice changed so each page has one heading that names what it sells.",
        expectedImpact:
          "Google spends its visits on real pages, and old links reach the right page.",
      },
      {
        phase: "Month 2",
        specialists: "Content writer and AIA SEO",
        title: "Rolled bats page and collections",
        evidence:
          "8,876 impressions and 117 clicks for rolled bats searches with no page to land on.",
        recommendedAction:
          "New rolled bats page with an honest explainer, an FAQ and your compression videos once they are ready. Four rolled collections rewritten in approved language.",
        expectedImpact:
          "Rolled bats searches reach a page that sells rolled bats.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO",
        title: "Bat rolling, glove steamer and feed titles",
        evidence:
          "The rolling product page wins with 1,050 clicks. Glove steamer searches split between a product and a collection.",
        recommendedAction:
          "One bat rolling page and one glove steamer page. Rolled bats titled Rolled, year, model in the feed. Shop-this-bat blocks on the top 8 reviews. First supplier and review-site links.",
        expectedImpact:
          "Your core service ranks as one page, and rolled bats match Shopping searches.",
      },
      {
        phase: "Month 3",
        specialists: "Content writer, AIA SEO and AIA developer",
        title: "Blog merges and redirects",
        evidence:
          "16 of 44 posts are about rolling, and 11 posts rank for bat rolling. Shaving and compression are split the same way.",
        recommendedAction:
          "Rolling, shaving and compression posts merged into their strongest article, then redirected. 404s that still carry value redirected in the same pass.",
        expectedImpact:
          "Each topic has one strong article, and old links reach it.",
      },
      {
        phase: "Month 3",
        specialists: "AIA SEO with the account manager and the catalogue project",
        title: "Growth rules, links and the 90-day read",
        evidence:
          "The catalogue is set to grow from about 200 to about 600 bats with automatic stock updates. Authority is very low, and so is every niche competitor's.",
        recommendedAction:
          "Rules for out-of-stock and retired bats before the sync is built. Payment pages hidden from search. Link earning continued. Quarter read year over year.",
        expectedImpact:
          "Growth adds pages that keep their rankings, and you see what moved.",
      },
    ],
  },
  approval: {
    title: "Decisions and specialists before launch",
    gates: [
      {
        timing: "Kickoff · 15 September",
        label: "Scope",
        title: "Confirm services, the 2027 bat goal and the reporting goals in writing",
        detail:
          "Includes who approves the work and whether there is a business address for local listings.",
      },
      {
        timing: "Kickoff · 15 September",
        label: "Language",
        title: "Share the agreement text or a summary from your lawyer",
        detail:
          "Titles, collections, feed titles and blog rewrites all wait on the approved-language sheet.",
      },
      {
        timing: "Before any copy",
        label: "Approval",
        title: "You approve the one-page language sheet",
        detail:
          "It sets the words we use everywhere: pages, listings, the blog and ads.",
      },
      {
        timing: "Before feed changes",
        label: "Shopping",
        title: "Read the disapproval reasons before fixing anything",
        detail:
          "The counts are variant-level and likely duplicated, so they will likely shrink once one data source is kept.",
      },
      {
        timing: "Before any rename",
        label: "Web addresses",
        title: "You decide whether any product address changes",
        detail:
          "Addresses stay as they are by default. If one changes, its redirect goes in first.",
      },
      {
        timing: "Before blog redirects",
        label: "Sequence",
        title: "The surviving article is rewritten first",
        detail:
          "Redirecting before the merge would lose the searches those posts still bring in.",
      },
      {
        timing: "Before the catalogue sync",
        label: "Growth",
        title: "Agree how out-of-stock and retired bats behave",
        detail:
          "Out of stock stays live and points to alternatives. A retired bat redirects to its collection or successor.",
      },
      {
        timing: "Before the first report",
        label: "Measurement",
        title: "Baseline from date totals, compared year over year",
        detail:
          "Bat-page clicks, rolled bats rankings and organic bat orders lead every report.",
      },
    ],
    decisions: [
      {
        label: "Rolled bats first, the rolling service second",
        detail:
          "They bring the highest-value orders, so they get the new page and the first rewrites.",
      },
      {
        label: "Shaving and repair are kept, not rebuilt",
        detail:
          "Their pages stay live, with a rolled bat cross-sell. The end cap replacement page is the single highest-click page on the site.",
      },
      {
        label: "Nothing ships outside the approved language",
        detail:
          "No new reviews of restricted brands until the sheet says so, and reviews only for bats you stock.",
      },
      {
        label: "No old link breaks",
        detail:
          "Every redirect is ready before a page moves, merges or retires.",
      },
      {
        label: "Search is judged on what it controls",
        detail:
          "Bat-page clicks, rolled bats rankings and organic bat orders. The 1,000-bat goal is shared with the catalogue, Shopping and ads.",
      },
      {
        label: "Outside this plan",
        detail:
          "City pages, Shopping ads (covered by the day-30 ads audit), the bat setup selector redesign and a backlink disavow.",
      },
    ],
  },
};
