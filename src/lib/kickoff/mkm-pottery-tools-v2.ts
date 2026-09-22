import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

export const mkmPotteryToolsKickoffV2: KickoffV2Data = {
  printAriaLabel: "Print MKM Pottery Tools kickoff V2 as PDF",
  footerNote: "MKM Pottery Tools SEO Strategy Kickoff | September 2026",
  cover: {
    clientName: "MKM Pottery Tools",
    subtitle:
      "Your organic search strategy for the next three months: fewer, better pages that shoppers can actually find.",
  },
  meta: [
    { label: "Period", value: "September to November 2026" },
    {
      label: "Business objective",
      value: "Grow direct sales on mkmpotterytools.com, the channel with your best margin",
    },
    {
      label: "Roadmap",
      value: "Clear the clutter first, names and categories second, new content last.",
    },
    {
      label: "Platform",
      value: "WordPress, WooCommerce and Yoast SEO. All implementation handled by All In.",
    },
  ],
  summary: {
    title: "What changes first",
    objectiveLabel: "Business objective",
    objective:
      "Help potters who do not know MKM yet find the tools by what they are, starting with the lines that matter most to the business, and put all 1,520 products in front of Google Shopping at no media cost.",
    lead:
      "Your site earned 25,968 Google clicks in the last 12 months, and 78.9 percent of the clicks Google attributes to a search come from people who already know MKM. Shoppers who do not know the brand bring about 265 clicks a month. The reason is structural, not a lack of content. Google knows roughly 10,000 addresses on the site that it declines to index, and about 9,700 of them are auto-generated tag pages and add-to-cart links. The 55 category pages carry titles like Rounds Stamps - MKM, product names lead with the SKU, so the homepage ends up holding searches like pottery tools that a category should own. And the Merchant Center account has 0 of 6 setup steps done, so no product appears in free Shopping listings.",
    emphasis:
      "This is a consolidation programme: fewer, better pages before more pages. Month one ships before the 1 October invoice, as promised, and most of it is invisible on the page because it changes what Google sees, not what shoppers see. Three rules: names change but web addresses stay, so nothing that ranks today is lost; nothing customer-facing publishes before you approve it; and SEO is measured on the searches it controls, with the extra 2,000 dollars a month carried across search, Shopping, email and paid together.",
  },
  strategy: {
    title: "3 Month Roadmap",
    gridClassName: "lg:grid-cols-3",
    operatingPrinciple:
      "Take the clutter out of Google's view in one deploy, give the products names and categories people search for, then add the two guides the site is missing, and report the same numbers every month.",
    phases: [
      {
        accent: "gold",
        month: "Month 1 · September",
        theme: "Clear the way, before 1 October",
        objective:
          "One deploy: product tag pages set to noindex except the 47 that earn clicks, add-to-cart links made non-crawlable, sitemap and robots file moved to https and cleaned. Connect the WooCommerce feed to Merchant Center and switch on free listings. Write the naming convention and the value story for your approval. Record the baseline and decide on the spam links.",
        deliverable:
          "Crawl deploy live, Merchant Center connected, naming convention and value story ready for review, baseline recorded, access confirmed",
        businessOutcome:
          "Google spends its attention on products and categories, and your catalogue starts reaching Shopping results without waiting on rankings.",
      },
      {
        accent: "blue",
        month: "Month 2 · October",
        theme: "Categories that own their searches",
        objective:
          "Rewrite the 55 category titles and descriptions for the words shoppers use, and point pottery tools, pottery stamps and clay rollers at the pages that sell them instead of the homepage. Write category copy for Font Sets, Big Hand Rollers and Long Hand Rollers. Place the approved value story under the price on every product page. Settle the duplicate about, shop and rib pages. Review the first Shopping listings.",
        deliverable:
          "55 category titles live, homepage relinked, three category pages written, value story on every product page, duplicate pages redirected",
        businessOutcome:
          "Non-brand searches land on the category that sells the product, and every product page answers the price question next to the buy button.",
      },
      {
        accent: "gold",
        month: "Month 3 · November",
        theme: "Names applied, then grow",
        objective:
          "Apply the approved names to the priority lines without changing a single web address. Build the stamp ideas hub and a texture roller how-to guide. Check product data against the Shopping feed and mark up the guides for answer engines. Refocus product pages that ranked on measurement searches. Re-check the homepage targeting and read the quarter against the baseline.",
        deliverable:
          "Priority lines renamed, two guides live, product data and feed matched, 90-day report",
        businessOutcome:
          "The highest-value tools carry names people search for, and the next quarter is planned on measured results.",
      },
    ],
  },
  focus: {
    title: "Six priorities for direct website sales",
    volumeLabel: "Evidence",
    scopeLabel: "Scope impact",
    footnote:
      "Sources: Deep SEO Analysis of 4 September 2026 (Search Console through 27 August and 1 September, Merchant Center, sitemaps), live checks of robots.txt, the sitemap index, tag and duplicate pages on 14 September 2026, full-site keyword research of 14 September 2026 (Search Console 12 September 2025 to 11 September 2026, Ahrefs US estimates labelled as such), and the intake interview of 3 September 2026. Still open: which logins we hold for WordPress, Search Console, Merchant Center and hosting; whether Merchant Center setup sits with the SEO team; what the /shop/ address currently serves.",
    items: [
      {
        number: "01",
        title: "Take the clutter out of Google's view",
        businessObjective:
          "Let Google spend its crawl on products and categories, not on pages that were never meant to rank.",
        evidence:
          "About 22 percent of the addresses Google knows are indexed. 1,618 product tag pages sit in the sitemap, more than the 1,520 products, and 7,603 add-to-cart links are blocked but still discovered. Tag pages also take positions from products: the fish tag outranks the fish stamp page. But 47 tags earn real clicks, 3,174 in 12 months, led by the polymer clay texture roller tag with 721.",
        volume: "About 9,700 of 10,000 rejected addresses",
        scopeImpact: "One developer deploy, three changes",
        expectedImpact:
          "The largest indexation buckets fall over the following eight weeks, and product pages stop competing with tag lists of themselves.",
        recommendedAction:
          "Noindex product tags in Yoast and drop the tag sitemaps, keeping the 47 earning tags indexable until a category ranks in their place. Make the loop add-to-cart links non-crawlable. Move the sitemap and robots references to https, merge the two robots blocks, and take cart, checkout and account pages out of the sitemap.",
        status: "P0 · Month 1 · needs WordPress admin",
      },
      {
        number: "02",
        title: "Put 1,520 products in free Shopping listings",
        businessObjective:
          "Open a sales surface that does not depend on organic rankings.",
        evidence:
          "The Merchant Center account exists with 0 of 6 setup steps complete and no products. Free listings show any product with a price and an image in Google Shopping and image results. Decorating Disks, high on your list, have almost no search demand as a phrase, so the feed is where they can be found.",
        volume: "0 of 6 steps, 0 of 1,520 products listed",
        scopeImpact: "Connection in month 1, listing review in month 2",
        expectedImpact:
          "MKM products start appearing in Google Shopping and image results at no media cost, including the lines search alone cannot carry.",
        recommendedAction:
          "Connect the store through Google for WooCommerce, verify and claim the domain, set shipping and returns, enable free listings. Once the feed processes, fix disapprovals in bulk by attribute and match product data on the page to the feed. Paid Shopping is not part of this.",
        status: "P0 · Month 1 · confirm ownership and admin access",
      },
      {
        number: "03",
        title: "Names people search for, starting with Font Sets",
        businessObjective:
          "Make the priority tools findable by someone who does not know what a BHR is.",
        evidence:
          "Product names lead with the SKU, as you raised on the intake call. The Alphabet Font Sets, first on your priority list, sit under searches like letter stamps for clay, about 500 a month in keyword research estimates, where four competitors rank and MKM does not. Category titles read fish - MKM and HandRoller is written as one word.",
        volume: "Letter stamps for clay: MKM not ranking",
        scopeImpact: "Convention in month 1, applied in month 3",
        expectedImpact:
          "The highest-value lines carry the words shoppers type, with the code still visible for wholesale and repeat buyers.",
        recommendedAction:
          "Write one naming pattern per line with ten worked examples for your approval: descriptive name first, SKU as a suffix, for example Coneflower Big Hand Roller, BHR-147. Cover the lines in your priority order. Apply it to product and search titles once approved, without changing a web address. Geometric stamps and paddles stay out.",
        status: "P1 · Month 1 write · Month 3 apply · your approval first",
      },
      {
        number: "04",
        title: "Give categories the searches the homepage is holding",
        businessObjective:
          "Send commercial searches to the page that sells the product.",
        evidence:
          "Pottery tools is the biggest non-brand search on the site: 44,827 impressions and 747 clicks in 12 months at position 9.3, on the homepage. 88 queries have two or more pages competing. 112 queries already rank between positions 4 and 20 with 300 or more impressions each. Your 55 categories all carry the same thin brand-suffixed title pattern.",
        volume: "112 searches close to the top, 196,355 impressions",
        scopeImpact: "55 category titles plus homepage links, no new pages",
        expectedImpact:
          "Searches for pottery tools, pottery stamps and clay rollers land on the category that sells them, and the pages closest to the top move first.",
        recommendedAction:
          "Write one title and description per category from the naming pattern and the Search Console data, the priority lines by hand. Set one target page per commercial term and link to it from the homepage and the Stamps4Clay and Rollers4Clay pages. Retarget the homepage title to the brand and the full range. Settle the duplicate about, shop and rib pages with one redirect each.",
        status: "P1 · Month 2 · re-checked in Month 3",
      },
      {
        number: "05",
        title: "Tell the value story next to the buy button",
        businessObjective:
          "Answer the price question where the decision is made.",
        evidence:
          "On the intake call you described price as a storytelling problem, not a pricing problem. None of the differentiators appear on a product page: CNC carved for deeper impressions, clean release, oil dipped and lasting 20 years, seamless pattern, beveled edges, designed and tested by potters.",
        volume: "0 of 1,520 product pages carry it",
        scopeImpact: "One block, written once, placed in the product template",
        expectedImpact:
          "Every product page tells a first-time buyer why an MKM tool is worth the price, including the products nobody will rewrite one by one.",
        recommendedAction:
          "Write a short, factual value block for your approval in month one and place it under the price on every product page in one template change. Add intro copy to the Font Sets, Big Hand Rollers and Long Hand Rollers categories: what the tool is, the designs that sell, and why it lasts.",
        status: "P1 · Month 1 write · Month 2 live · your approval first",
      },
      {
        number: "06",
        title: "Measure what search can change",
        businessObjective:
          "Show progress in numbers you can check yourself, every month.",
        evidence:
          "In the last 90 days clicks fell 7.9 percent and impressions 16.4 percent, while average position improved from 7.39 to 6.95. Thousands of the lost impressions were measurement searches like how big is 4 cm that never bought anything. 164 new referring domains in 90 days are mostly link-seller spam in Ahrefs, a third-party estimate, and several are already dropping.",
        volume: "Baseline: 5,146 clicks in 90 days",
        scopeImpact: "Baseline in month 1, the same report monthly",
        expectedImpact:
          "Each month shows the same numbers moving, so results are visible without anyone taking them on trust.",
        recommendedAction:
          "Record the baseline and track brand terms plus the non-brand terms judged in this plan, desktop and mobile separately. Review the spam links and write the decision down; the default is to monitor, not disavow. Explain the desktop ranking gap, and close the public hosting subdomains.",
        status: "P0 baseline · P2 monitoring · every month",
      },
    ],
  },
  execution: {
    title: "What changes, who decides, and how we prove it",
    artifactsTitle: "Evidence, action, impact, and specialists",
    examples: [
      {
        eyebrow: "The goal framing",
        title: "An extra 2,000 dollars a month is a shared target, and search is measured on its part",
        currentLabel: "How the numbers read",
        current: [
          "Website revenue was about 186,000 dollars in 2025, with 155 orders in the last full month, so an average order near 100 dollars",
          "2,000 dollars more a month is about 20 extra orders, or roughly 1,000 to 1,330 extra visits at a 1.5 to 2 percent conversion rate",
          "Shoppers who do not know MKM bring about 265 search clicks a month today",
        ],
        targetLabel: "How the plan closes it",
        target: [
          "Search is judged on non-brand clicks and rankings for the terms named in this plan, measured monthly against the September baseline",
          "Free Shopping listings add product visibility from month one, independent of rankings",
          "Email and paid, the channels discussed on the intake call, carry the rest of the gap",
        ],
        decision:
          "Agree the baseline and the search terms search is judged on. The conversion rate is an assumption until your analytics confirm it.",
        impact:
          "Everyone judges the retainer on the same numbers, and the part search can change is visible within the quarter.",
        proof:
          "Monthly Search Console report on the same settings, with the Shopping listing status from Merchant Center.",
      },
      {
        eyebrow: "The naming convention",
        title: "Names change, web addresses stay, and the code moves to the end",
        currentLabel: "What a new shopper sees today",
        current: [
          "Product names that lead with the SKU code",
          "Category titles like fish - MKM and Rounds Stamps - MKM",
          "Five similar roller names, and HandRoller written as one word",
        ],
        targetLabel: "What the convention does",
        target: [
          "Design and product type first, code last: Coneflower Big Hand Roller, BHR-147",
          "One searcher phrase per line, so two lines never compete for the same search",
          "Every product keeps its current web address, so no ranking or link is lost",
        ],
        decision:
          "You approve the pattern and ten worked examples before anything is renamed. Geometric stamps, paddles and Fun Food Tools stay out.",
        impact:
          "Shoppers who search by what a tool is can find it, and repeat and wholesale buyers still find it by code.",
        proof:
          "Ten renamed products spot-checked live, code still visible, no web address changed, and the Shopping feed titles refreshed.",
      },
    ],
    artifacts: [
      {
        phase: "Month 1",
        specialists: "Account manager and AIA SEO strategist with you",
        title: "Access, ownership, and the baseline",
        evidence:
          "No source records which logins we hold. Every developer change needs WordPress admin, and Merchant Center needs an admin on the Google account that owns it.",
        recommendedAction:
          "Confirm WordPress admin with plugin rights, Search Console full access, Merchant Center admin and hosting panel access. Confirm who owns Merchant Center setup. Record the baseline.",
        expectedImpact:
          "Month one work has everything it needs to ship before 1 October.",
      },
      {
        phase: "Month 1",
        specialists: "AIA developer and AIA SEO",
        title: "The crawl deploy",
        evidence:
          "1,618 tag pages in the sitemap, 7,603 add-to-cart links discovered, sitemap and robots referencing http, two robots blocks, utility pages listed in the sitemap.",
        recommendedAction:
          "Tag noindex with the 47-tag keep list, non-crawlable cart links, https references, one robots block, a clean sitemap. Verified by fetching the sitemap, robots file and three tag pages after release.",
        expectedImpact:
          "Google's two largest rejected buckets start shrinking within eight weeks.",
      },
      {
        phase: "Month 1",
        specialists: "Merchant Center specialist",
        title: "Free Shopping listings connected",
        evidence:
          "0 of 6 setup steps complete, no product feed, 1,520 products in the sitemap.",
        recommendedAction:
          "Google for WooCommerce connected, domain verified and claimed, shipping and returns set, free listings enabled.",
        expectedImpact:
          "The catalogue enters Google Shopping and image results without media spend.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO strategist and content writer",
        title: "Naming convention, value story, link decision",
        evidence:
          "SKU-first names raised on the intake call. Six quality differentiators missing from product pages. Spam referring domains arriving since June.",
        recommendedAction:
          "Naming pattern with ten examples and the value block, both sent for your approval. Spam links classified and the decision recorded.",
        expectedImpact:
          "The two decisions that shape months two and three are in your hands before October.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO",
        title: "Category titles and homepage targeting",
        evidence:
          "Pottery tools at position 9.3 on the homepage. 55 categories with brand-suffixed titles. 88 queries with competing pages.",
        recommendedAction:
          "55 new category titles and descriptions, one target page per commercial term, homepage and landing page links pointed at those targets.",
        expectedImpact:
          "Commercial searches start landing on the page that sells the product.",
      },
      {
        phase: "Month 2",
        specialists: "Content writer, AIA developer and AIA SEO",
        title: "Category copy, value block, duplicate pages",
        evidence:
          "Font Sets, Big Hand Rollers and Long Hand Rollers categories are product grids with no copy. Two about pages, overlapping shop pages and four rib pages are all live.",
        recommendedAction:
          "Three category intros sent for your review, then published. Value block placed under the price site-wide. Survivors agreed, then one redirect each and menu links updated.",
        expectedImpact:
          "The highest-value categories explain what they sell, and each purpose has one page.",
      },
      {
        phase: "Month 3",
        specialists: "AIA developer, content writer and AIA SEO",
        title: "Names applied and two guides",
        evidence:
          "Approved convention from month one. One blog post on the site. Stamp ideas searches already reach the site.",
        recommendedAction:
          "Priority lines renamed in bulk with addresses unchanged. Stamp ideas hub and texture roller how-to guide, each with a short FAQ. Product data checked against the feed.",
        expectedImpact:
          "Priority tools carry searchable names, and the site answers the ideas and how-to searches it already appears for.",
      },
      {
        phase: "Month 3",
        specialists: "AIA SEO with the account manager",
        title: "The 90-day read and the open diagnoses",
        evidence:
          "Desktop position 9.27 against 5.46 on mobile. Product pages that lost measurement-search traffic. Hosting subdomains exposed as link targets.",
        recommendedAction:
          "Quarter read against the September baseline. Homepage targeting re-checked. Desktop gap explained or turned into a fix. Off-intent product copy refocused. Hosting subdomains closed.",
        expectedImpact:
          "You see what moved, and next quarter is planned on that evidence.",
      },
    ],
  },
  approval: {
    title: "Decisions and specialists before launch",
    gates: [
      {
        timing: "Kickoff · 15 September",
        label: "Access",
        title: "WordPress admin, Search Console, Merchant Center admin, hosting panel",
        detail:
          "Every month-one change needs WordPress admin with plugin rights. Access arriving late is the one thing that can push month one past 1 October.",
      },
      {
        timing: "Kickoff · 15 September",
        label: "Ownership",
        title: "Confirm who sets up Merchant Center",
        detail:
          "The gap is real whichever team owns it. Confirming the owner on the call keeps it from falling between teams.",
      },
      {
        timing: "Kickoff · 15 September",
        label: "Links",
        title: "Confirm nobody commissioned link building",
        detail:
          "The default decision on the new spam links is to monitor, not disavow. That changes if any of them were paid for.",
      },
      {
        timing: "Before the crawl deploy",
        label: "Keep list",
        title: "The 47 tag pages that earn clicks stay indexable",
        detail:
          "They earned 3,174 clicks in 12 months. They are released only once a category ranks in their place.",
      },
      {
        timing: "Before any rename",
        label: "Naming",
        title: "You approve the pattern and ten worked examples",
        detail:
          "Nothing is renamed and no web address changes. The pattern also sets the 55 category titles.",
      },
      {
        timing: "Before copy publishes",
        label: "Review",
        title: "You review the value block and the three category intros",
        detail:
          "All In writes the copy. You confirm the product facts and the claims before anything goes live.",
      },
      {
        timing: "Before any redirect",
        label: "Duplicates",
        title: "Agree which about, shop and rib pages survive",
        detail:
          "The about page is your copy, so the choice is yours. Each retired page redirects in one step.",
      },
      {
        timing: "Before the first report",
        label: "Measurement",
        title: "Agree the baseline and the search terms judged",
        detail:
          "Baseline from the September Search Console data. Non-brand clicks and rankings on the named terms lead every report.",
      },
    ],
    decisions: [
      {
        label: "Consolidation before content",
        detail:
          "No new pages until month three, and then only two guides. The site needs fewer, better pages before it needs more of them.",
      },
      {
        label: "Names change, web addresses stay",
        detail:
          "Renaming never changes a URL, so no ranking, link or bookmark is lost.",
      },
      {
        label: "Nothing customer-facing without your approval",
        detail:
          "The naming convention, the value block and the category copy all wait on your review.",
      },
      {
        label: "Decorating Disks go to Shopping, not search",
        detail:
          "Almost nobody searches for them by name, so they are found through the feed, email and paid rather than rankings.",
      },
      {
        label: "Out of scope this quarter",
        detail:
          "Geometric stamps and paddles by your call, Fun Food Tools, and the lowest-margin stamp lines for copy. Email, the subscription idea, the featured artist programme and the homepage redesign are separate projects.",
      },
      {
        label: "Search is judged on what it controls",
        detail:
          "Non-brand clicks and rankings lead the report. The revenue goal is carried across search, Shopping, email and paid.",
      },
    ],
  },
};
