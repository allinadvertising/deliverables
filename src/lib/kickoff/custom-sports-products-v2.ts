import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

export const customSportsProductsKickoffV2: KickoffV2Data = {
  printAriaLabel: "Print Custom Sports Products kickoff V2 as PDF",
  footerNote: "Custom Sports Products SEO Strategy Kickoff | September 2026",
  cover: {
    clientName: "Custom Sports Products",
    subtitle: "Your organic search strategy for the next three months.",
  },
  meta: [
    { label: "Period", value: "September to November 2026" },
    {
      label: "Business objective",
      value:
        "Protect a recovery that is already under way and accelerate it on the categories that carry the revenue",
    },
    {
      label: "Roadmap",
      value:
        "Crawl control, editing access, home page and brand term, hub consolidation, ball categories, Shopping quality",
    },
    {
      label: "Platform",
      value:
        "Custom self-hosted platform, ASP and PHP mixed, no repository and no staging environment",
    },
  ],
  summary: {
    title: "What changes first",
    objectiveLabel: "Business objective",
    objective:
      "Restrain what Google is allowed to crawl, stop the duplicate pages splitting the equity on your best categories, and put the recovered attention behind the custom sports balls that are already gaining into their season.",
    lead:
      "The most important thing in this document is that the site is already recovering, and it started before we arrived. Against the same summer weeks last year, clicks are up 23.9 per cent from 1,390 to 1,722, average position improved from 38.09 to 14.09, CTR nearly doubled from 0.45 to 0.89 per cent, and Shopping clicks are up 27.7 per cent over 28 days. Ahrefs, pulled independently a day later, agrees on every one of those metrics. The site now earns 24 per cent more clicks from 37 per cent fewer impressions, because the impressions it lost were the page-three and page-four impressions that were never producing anything. Our job is to protect that and speed it up, not to claim it.",
    emphasis:
      "What is holding the ceiling down is technical. Google has discovered 4,740 URLs on a site of roughly 2,000 real pages, and it has declined to index 2,870 of them. robots.txt disallows nothing at all and carries no sitemap directive, so every design-preview screen, every discount pop-up and every internal search result is fully crawlable. The sitemap then makes it worse: of the 1,367 URLs it declares, only 68 are clean modern URLs, so the one file that tells Google what matters on this site is currently pointing at price pop-ups and preview screens and away from the ball category pages that are winning. Two corrections belong here as well. The competitor authority figures in the deep audit cannot be right, because Domain Rating is capped at 100 and the audit cites rivals at 88 to 129; a fresh pull puts the real niche rivals at Domain Rating 2 to 27 against your 27, so authority is not the blocker on this account. And the home page alone accounts for 46 per cent of the quarterly click decline, which makes it the largest single recoverable number in the plan.",
  },
  strategy: {
    title: "3 Month Roadmap",
    gridClassName: "lg:grid-cols-3",
    operatingPrinciple:
      "Close the crawl paths before anything else, make the cheap structural fix and measure it before commissioning the expensive content fix, and press the categories that are already winning while their season is open.",
    phases: [
      {
        accent: "blue",
        month: "Month 1",
        theme: "Close the crawl paths and settle the story",
        objective:
          "Write the crawl-control specification for robots, noindex and the sitemap, and get it deployed by whoever owns the server. In parallel, decide the hub map before anything is redirected, write the ball category copy so it is ready the moment publishing opens, configure the Merchant Center return service, file the spam disavow, and brief you on what the numbers actually say before the first report lands.",
        deliverable:
          "Crawl-control specification and deploy, hub consolidation map, ball category copy and schema, Merchant Center returns, disavow filed, measurement framing agreed",
        businessOutcome:
          "Google stops spending its attention on parts of the site that were never meant to be found, and the two access blockers that gate the revenue work get named, dated and owned rather than noted.",
      },
      {
        accent: "gold",
        month: "Month 2",
        theme: "Consolidate the duplicates and reclaim the home page",
        objective:
          "Rebuild the sitemap from the live category and product inventory rather than filtering the old one, close the wildcard preview subdomain, implement the hub redirects decided in month one, consolidate the home page onto a single URL, consolidate the trading-card cluster without losing the pages AI answers are quoting, and embed the quantity-discount table into the product pages.",
        deliverable:
          "Rebuilt sitemap, preview subdomain closed, hub redirects live, home page on one URL, card cluster consolidated, discount table embedded",
        businessOutcome:
          "Each category stops splitting its search visibility across two pages, the brand term stops being contested by three copies of your own home page, and the pricing that decides a team order becomes readable by both customers and Google.",
      },
      {
        accent: "blue",
        month: "Month 3",
        theme: "Finish the URL alignment and make the reporting honest",
        objective:
          "Point the legacy and Shopping landing URLs at the modern canonical pages, profile the 6.46 second desktop load, close the remaining Merchant Center store-quality signals including the free-shipping question, review the error and exclusion buckets that were counted but never listed, and stand up seasonality-adjusted and year-over-year reporting.",
        deliverable:
          "Legacy and Shopping URLs aligned, desktop speed profiled and prioritised, store-quality signals closed, exclusion buckets reviewed, reporting live",
        businessOutcome:
          "Shopping and organic traffic land on the same modern pages instead of splitting between old and new versions of the same product, and you see the same picture every month in a shape that shows whether the work is landing rather than whether it is summer.",
      },
    ],
  },
  focus: {
    title: "Six priorities for revenue recovery",
    volumeLabel: "Evidence",
    scopeLabel: "Scope impact",
    footnote:
      "Evidence comes from the Custom Sports Products consolidated SEO roadmap of September 2026, built from the Deep SEO Analysis and its seven child audits of 2026-09-02 and 2026-09-03 and the full-site keyword research of 2026-09-03. Google Search Console is the source of truth for organic performance, Merchant Center for product visibility, and Ahrefs as independent corroboration. No site crawl has been run, so the hub inventory, the count of live legacy product.asp URLs and the contents of the 228 noindexed pages are all still open, and the wildcard preview subdomain was seen in a Search Console report but not re-fetched to confirm it is still live.",
    items: [
      {
        number: "01",
        title: "Close the crawl paths the platform leaves wide open",
        businessObjective:
          "Stop Google forming its impression of this site from preview screens and price pop-ups instead of the pages that sell.",
        evidence:
          "The live robots.txt fetched on 2026-09-02 is two lines, a wildcard user-agent and an empty disallow, with no sitemap directive. Search Console on the same date reports 1,870 URLs indexed against 2,870 not indexed, so Google has found 4,740 URLs on a site of roughly 700 products and about 2,000 legitimate pages. The two largest not-indexed buckets, 1,083 crawled-currently-not-indexed and 332 duplicate-without-canonical, are dominated by /lab/imod_display_pres.php, /lab/shop_addons.php3 and /ideacenter/discounts.asp. Those two path prefixes therefore sit behind 1,415 URLs, which is 49 per cent of everything Google has looked at and rejected.",
        volume: "49 per cent of the not-indexed set",
        scopeImpact:
          "One robots.txt file, one meta robots tag, and the template list it belongs on",
        expectedImpact:
          "The single cheapest large move available on this account. It needs no client access, no content and no decision from anyone, and it closes the crawl paths behind roughly half the URLs Google has rejected.",
        recommendedAction:
          "Disallow /lab/ and /ideacenter/discounts.asp and add the sitemap directive. Keep noindex separate from disallow, because they are not interchangeable: a disallowed page can never be fetched, so Google never sees a noindex on it. Anything already indexed gets noindex first and a disallow only once it has dropped out; the /lab/ family is almost entirely crawled-not-indexed and can be blocked immediately. Do not disallow /ideacenter/ as a whole, because the legacy /ideacenter/product.asp URLs are 301-redirecting correctly to clean pages and blocking them would strand a migration that is working. Then rebuild the sitemap from the live category and product inventory rather than filtering the existing file, because filtering yields 68 URLs and hides the real problem, which is that most of your clean pages are not in the file at all.",
        status: "P0 · Month 1 · specification then deploy",
      },
      {
        number: "02",
        title: "Open the meta-title field and the category pages",
        businessObjective:
          "Give the on-page half of this roadmap a route to production, because today it does not have one.",
        evidence:
          "Confirmed live on the intake call of 2026-09-01: the meta title differs from the visible product title, which proves a separate field exists, but it is not in the editable list. Category and collection pages are generated dynamically through departments and only the owner can change them. Every content and on-page item in this plan terminates at one of those two constraints, and the keyword research adds two more that need pages built: a sports-banner page against 700 searches a month at keyword difficulty 0, and photo ornaments against 5,700 a month at difficulty 6.",
        volume: "2 blocked fields, 5 blocked page groups",
        scopeImpact:
          "Gates the ball categories, the card cluster, the home page copy and both new seasonal pages",
        expectedImpact:
          "This is the gate. The technical items can proceed through your platform developer; the revenue items cannot proceed at all until this is resolved, and both new pages carry seasonal deadlines that close.",
        recommendedAction:
          "Two asks, tracked to completion rather than noted. First, name the meta-title database field and add it to the product editor, then let us confirm it by editing one title end to end and seeing it change in the page source. Second, agree the route for category pages: either the department editor is opened to the team, or one person is trained on it, or All In is given the access, and if none of those is possible then agree that we supply the copy and it gets published on a named turnaround. Do not accept agreement in principle on either one. Ask for the field name and a date, and put both in writing.",
        status: "P0 · Kickoff · tracked to completion",
      },
      {
        number: "03",
        title: "Recover the home page and the brand term",
        businessObjective:
          "Win back the one ranking loss a customer notices without being told, and the largest single recoverable number on the account.",
        evidence:
          "Quarter on quarter the home page fell from 483 clicks to 226, with impressions down from 49,649 to 33,370 and position from 12.7 to 15.7. That one page is 46 per cent of the site's entire 559-click quarterly decline. The brand queries moved with it: custom sports products from position 1.4 to 4.5 losing 107 clicks, and customsportsproducts from 1.0 to 6.9. The page is separately indexed at /, /index.asp and /index.asp?mobilemin=1, and on the queries custom sports and customsports all three rank at the same position, which confirms it is one page indexed three times. Ahrefs agrees independently, with home-page traffic down 36 per cent and branded intent down 103.",
        volume: "46 per cent of the quarterly decline",
        scopeImpact:
          "Three home-page URLs, the root parameter URLs, and 27 URLs ranking on the brand term",
        expectedImpact:
          "Your company name returns your company home page in first place, from one address rather than three. This is the only major loss on the account that seasonality does not explain.",
        recommendedAction:
          "Do the cheap structural half first and measure it before doing the expensive half. Redirect /index.asp and /index.asp?mobilemin=1 to / with 301s, confirm the home page canonicalises to itself, and handle the root parameter URLs such as /?product= the same way. Then wait four weeks and re-read the brand SERP before commissioning any content work, because if the duplication was the cause the position recovers on its own and the content is better spent on the ball pages. Do not rewrite the home page first. At 1,783 AI-feature impressions over three months it is the most AI-visible URL on the site, and changing its content before understanding why it slipped risks the one surface that is growing.",
        status: "P1 · Month 2 · structure first, then measure",
      },
      {
        number: "04",
        title: "Consolidate the duplicate hub pages, soccer balls first",
        businessObjective:
          "Stop two of your own pages competing for the same customer, starting with the one where it is actively costing clicks.",
        evidence:
          "From 8,040 Search Console query-page pairs covering 2026-06-01 to 2026-08-28: /custom-soccer-balls takes 16 clicks on 2,814 impressions while /custom-soccer-balls-hub takes 13 on 6,931, and on the query custom soccer balls the hub sits at position 26.4 and the main page at 17.6, so neither ranks and both are being served. The football, basketball, trading-card, football-gifts and photo-cutouts hubs all take zero clicks against their main pages. Buttons is fragmented across six pages, each holding 181 to 479 impressions and none converting. Ahrefs adds that some hubs are not merely splitting equity but collapsing, with /baseball-team-gifts-hub, /team-gifts and /cutouts all marked Lost.",
        volume: "12 named hub pages, 6 button pages",
        scopeImpact:
          "One canonical page per intent, then redirects and canonical tags",
        expectedImpact:
          "One page per thing the customer is looking for, chosen deliberately rather than left to Google. Soccer balls is first because it is the only pair where both URLs take clicks, and it sits in your number-one revenue category.",
        recommendedAction:
          "Decide before implementing. Crawl the hub set, read each hub page, and record for each intent which URL survives and what happens to the other, using one of three outcomes: redirect the hub where it is a pure duplicate, which covers footballs, basketballs, trading cards, football gifts and cutouts on current evidence; keep it and retarget it to a genuinely broader term with internal links down to the children where it is acting as a real parent; or leave it pending more data. Do not redirect anything before reading the page. Two of these hubs currently outrank the page they would be redirected into, and redirecting the stronger URL into the weaker one loses ground rather than gaining it. The proof this is achievable is already on your site, because the legacy-to-clean migration used the same mechanism and worked.",
        status: "P0 to P1 · decide Month 1, deploy Month 2",
      },
      {
        number: "05",
        title: "Press the ball categories while their season is open",
        businessObjective:
          "Put the content where every independent signal on this account already points.",
        evidence:
          "Quarter on quarter the ball pages gained 284 clicks between them: basketballs up 72 to 99, volleyballs up 67 to 129, footballs up 63 to 93, plus pennants, softballs, soccer balls, hockey pucks and buttons, most with improving positions into the fall season. Ahrefs corroborates with basketballs up 565 per cent, volleyballs up 383 per cent and baseballs up 55 per cent. The keyword research puts about 145,000 impressions sitting at positions 10 to 20 across the ball cluster, the largest latent-demand pool on the site, on terms that are winnable: custom basketball at 1,800 a month and keyword difficulty 1, custom football at 1,200 at difficulty 0, personalized basketball at 600, custom volleyball at 300. The closest rival, makeaball.com, sits at Domain Rating 27, identical to yours, and you already rank about seventh on custom basketball.",
        volume: "145,000 impressions at positions 10 to 20",
        scopeImpact:
          "Basketballs, volleyballs, footballs, baseballs and soccer balls first, then softballs and hockey pucks",
        expectedImpact:
          "This is where the money is and every source agrees: your own first-ranked category, the highest ticket at about 30 dollars for a football against 3 dollars for a button, 70 to 80 per cent margin, an open competitive field at equal authority, the largest demand pool on the site, and pages already moving the right way. The risk is not choosing wrongly, it is arriving after the fall season has passed.",
        recommendedAction:
          "Write each page against what the customer needs to decide: sizes and materials offered, the in-house manufacturing and next-day turnaround that separates you from drop shippers, minimum quantities, and the use cases for coaches and teams. Write it in short extractable statements rather than paragraphs of atmosphere, because the same shape that answers a buyer's question is the shape AI answers quote, and these pages already carry real AI visibility at 793 impressions on footballs and 591 on basketballs. Specify Product and FAQ schema alongside the copy. Do not wait for editing access to start writing, so the copy is ready the moment that gate opens, and do not write new copy onto the soccer-ball page before the hub decision is settled.",
        status: "P1 · Month 1 copy, publish on access",
      },
      {
        number: "06",
        title: "Close the Merchant Center gaps holding Shopping back",
        businessObjective:
          "Accelerate the Shopping recovery you hired us for, on a feed that is already healthy.",
        evidence:
          "Merchant Center account 368377, read 2026-09-02: 537 of 540 products approved, so feed integrity is not the problem, and Shopping clicks are up 27.7 per cent over 28 days with free listings up 13.7 per cent. Store quality rates Great, one tier below the top, with specific gaps: return cost Incomplete because the return service is not configured and the return window reads 0 days against a competitor benchmark of about 34.7 days; high-resolution images at 3 per cent; desktop load at 6.46 seconds, the worst tier Google reports; PayPal as the only detected eWallet; no promotions running; and shipping at $3.73 against competitors at zero.",
        volume: "537 of 540 approved, quality one tier below top",
        scopeImpact:
          "Returns, images, desktop speed, payments, promotions and the shipping decision",
        expectedImpact:
          "Store quality is what decides how competitively your listings are shown, and a missing signal is worse than a poor score because Google cannot rate what is not configured. Returns is the cheapest item on the account and moves two rated metrics plus a warning.",
        recommendedAction:
          "Configure the return service and set a window you will genuinely honour rather than the one that scores best, because a 30-day window disputed on the first return is worse than a 14-day one you stand behind. On images, ask first whether higher-resolution originals already exist, because for a business with roots in photo finishing this is very probably an export and upload rather than a photography project. Profile the desktop load before committing to a fix, since desktop carries 62 per cent of your impressions and converts them at half the rate of mobile. Free shipping is a pricing decision for you, not an SEO recommendation, and it should be presented with the margin arithmetic attached: at 70 to 80 per cent margin on a $75 average order, absorbing $3.73 is affordable, and Google is benchmarking you against competitors who offer it.",
        status: "P1 to P2 · Month 1 returns, Month 3 the rest",
      },
    ],
  },
  execution: {
    title: "What changes, who decides, and how we prove it",
    artifactsTitle: "Evidence, action, impact, and specialists",
    examples: [
      {
        eyebrow: "The measurement framing",
        title: "The two biggest numbers point down, and both describe a recovery",
        currentLabel: "How the numbers currently read",
        current: [
          "Impressions down 37.3 per cent year on year, from 307,846 to 192,875",
          "Clicks down 24.5 per cent quarter on quarter, a net loss of 559",
        ],
        targetLabel: "What the numbers actually say",
        target: [
          "Clicks up 23.9 per cent year on year while average position moved from 38.09 to 14.09",
          "Of the 559-click quarterly drop, 257 is the home page, 167 the card cluster and 238 legacy URLs that were verified as redirecting correctly, so that traffic moved rather than left",
        ],
        decision:
          "Agree that this account is reported year on year and seasonally adjusted, not month against month, and that clicks and position lead rather than impressions.",
        impact:
          "A seasonal business reported month against month shows a decline every summer and a recovery every spring regardless of what the work achieved. Said in advance this is context; said afterwards it looks like an excuse.",
        proof:
          "The ball categories gained 284 clicks over the same quarter, and Ahrefs, pulled independently a day later, agrees on every metric.",
      },
      {
        eyebrow: "The competitive read",
        title: "Authority is not the blocker, and the audit's own figures prove it",
        currentLabel: "What the deep audit stated",
        current: [
          "Rivals at Domain Rating 88 to 129 against this site's 27",
          "A structural authority disadvantage requiring an editorial link-building programme",
        ],
        targetLabel: "What a fresh pull found",
        target: [
          "Domain Rating is capped at 100, so 103, 119, 125 and 129 cannot be real values",
          "The true niche rivals sit at 27, 19, 13, 9 and 2.3 against your 27, and live SERPs show sites at Domain Rating 0 to 27 holding top spots",
        ],
        decision:
          "Treat the authority gap as unproven, drop the link-building programme from the plan, and spend that effort on the pages instead.",
        impact:
          "You are a co-leader in your niche rather than an underdog in it, which changes what the next three months should be spent on. The broad marketplaces at high authority have near-zero keyword overlap with you.",
        proof:
          "You already rank about seventh on custom basketball, beside makeaball.com at the same Domain Rating 27.",
      },
    ],
    artifacts: [
      {
        phase: "Month 1",
        specialists: "AIA SEO, AIA developer and the client's platform developer",
        title: "Crawl-control specification, deploy and verification",
        evidence:
          "robots.txt disallows nothing and carries no sitemap directive, and the two path prefixes it should close sit behind 1,415 of the 2,870 URLs Google has declined to index. CMS access has been granted, but that is product-record access: it does not include the web root where robots.txt lives, the page templates that carry meta robots tags, or the sitemap generator.",
        recommendedAction:
          "We deliver the exact file contents, the exact meta tag and the list of templates it belongs on, so your developer copies rather than composes. Do not close this on deploy: re-fetch robots.txt, run it through the Search Console robots tester, and inspect three /lab/ URLs and three /product_search.asp URLs in the URL Inspection tool to confirm the directives are being read. Search Console currently reports 17 URLs blocked despite a file that blocks nothing, so do not treat that count as evidence the file is working.",
        expectedImpact:
          "The crawl-control changes are live and confirmed working rather than sitting in a document waiting for someone to pick them up.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO with the account manager and the client",
        title: "The access asks and the recovery briefing",
        evidence:
          "The meta-title field is not exposed in the editor and category pages can only be changed by the owner. Separately, this is a month-to-month engagement whose first report will land on a client primed to see decline, with the two largest numbers on the page both pointing down.",
        recommendedAction:
          "Take both to the kickoff on 2026-09-05. On access, ask for the field name and a date rather than agreement in principle. On the numbers, lead with the year-on-year comparison and the position move from 38 to 14, explain that the lost impressions were the ones that never converted, then show that the ball categories are the strongest gainers on the site. Be equally direct about what is genuinely down, which is the home page and the brand term. Do not present the recovery as something All In produced, because it predates the engagement and saying so is what makes the rest credible.",
        expectedImpact:
          "The revenue work gets a route to production, and the reporting conversation happens before the report rather than after it.",
      },
      {
        phase: "Month 1",
        specialists: "AIA SEO with the client",
        title: "Merchant Center returns and the spam disavow",
        evidence:
          "Return cost rates Incomplete because the service is not configured, on an account where Shopping is a core reason for the engagement and is already up 27.7 per cent. Separately, the largest single anchor in the backlink profile is an SEO-service testimonial-spam block appearing across 215 referring domains, alongside PBN, gambling and casino anchors, and the profile added 190 referring domains in three months.",
        recommendedAction:
          "Configure the return service and window, then confirm that return cost has moved from Incomplete to a rating and the missing-signals warning has cleared. On the links, file the disavow and set up monthly monitoring, and stop there. Most of the spam is nofollow so the direct harm today is limited, but a pattern that adds 215 domains carrying one fabricated testimonial about your domain is an active campaign rather than historical noise.",
        expectedImpact:
          "Shopping listings stop being marked down for a policy the business already honours informally, and any new spam gets caught within the month rather than a year later.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO, AIA developer and the client's platform developer",
        title: "Sitemap rebuild, preview subdomain and the hub redirects",
        evidence:
          "The sitemap declares 1,367 URLs of which 68 are clean, while /custom-volleyballs at 129 clicks, /custom-basketballs at 99 and /custom-footballs at 93 sit among those 68. Separately, a wildcard UUID subdomain is serving the design-preview pages publicly and Google is crawling it as duplicate content, which robots.txt on the main host does not govern because it is a different hostname.",
        recommendedAction:
          "Build the sitemap from the live category and product inventory, one entry per canonical indexable revenue-relevant page and nothing else, then resubmit and watch discovered-versus-indexed rather than declaring success on submission. Close the wildcard subdomain at the host or DNS layer, and ask why a customer-facing design session is reachable on a public hostname at all. Deploy the hub redirects in the same pass so the platform is opened once rather than three times.",
        expectedImpact:
          "The list of pages Google is asked to crawl finally matches the list of pages that make money, and the preview pages stop appearing as a second copy of the site.",
      },
      {
        phase: "Month 2",
        specialists: "AIA SEO with the client's platform developer",
        title: "Home page consolidation, card cluster and the discount table",
        evidence:
          "The home page is indexed at three URLs and is 46 per cent of the quarterly decline. About fourteen overlapping trading-card pages compete for the same maker, template and sizes intent, and the cluster is losing position while carrying the site's strongest AI visibility at 1,661 impressions on /trading-card-sizes and 1,637 on /trading-card-maker. The quantity-discount table sits behind a pop-up served from /ideacenter/discounts.asp, with no canonical tag and one indexable page per product-and-price combination.",
        recommendedAction:
          "Consolidate the home page, then wait four weeks and re-read the brand SERP before commissioning content. On the cards, consolidate the URLs while preserving the content, because the obvious cleanup of deleting the zero-click satellites would remove the pages AI answers are quoting; this is a defend, not a growth engine. Render the discount table inline in the product template in served HTML rather than injected after load, verify it live on a sample, and only then retire the pop-up route.",
        expectedImpact:
          "Equity stops splitting across your own duplicates, and the number that decides a team order stops hiding behind a button from both customers and crawlers.",
      },
      {
        phase: "Month 3",
        specialists: "AIA SEO, AIA developer and the client's platform developer",
        title: "Legacy and Shopping URL alignment, speed, and the reporting build",
        evidence:
          "Legacy product.asp URLs still return 200 and compete with the modern clean pages, and the Shopping feed's landing URLs canonicalise into those legacy pages rather than the modern ones, so every Shopping click on those products consolidates equity into a page the organic plan is trying to retire. Desktop loads in 6.46 seconds on the surface carrying 62 per cent of impressions. There is no reporting on this account today.",
        recommendedAction:
          "Align the legacy and feed URLs to the modern canonicals, and note that the count of live legacy URLs is unknown until a crawl is run, so the redirect map in hand is a starter set rather than a finished one. Profile the desktop load before committing to remediation. Build reporting around revenue, orders, organic and Shopping contribution and seasonality-adjusted trends, and review the 228 noindexed pages while you are there, because a category or product page carrying a noindex tag never appears in any report as a loss, it simply is not there.",
        expectedImpact:
          "Shopping and organic land on the same pages, and the account gets a monthly view that shows whether the work is landing rather than whether it is summer.",
      },
    ],
  },
  approval: {
    title: "Decisions and specialists before launch",
    gates: [
      {
        timing: "Kickoff, 2026-09-05",
        label: "Delivery",
        title: "Name the person who deploys server-level changes",
        detail:
          "Eight of the twenty-one items in this plan depend on someone at your end putting a file on the server, and no named platform developer appears in any document we hold. The platform is custom and self-hosted with no repository and no staging environment, and CMS access covers product records, not the web root, the page templates or the sitemap generator. Establishing who that person is, and whether All In can be given direct web-root access, is worth more to this engagement than any further analysis.",
      },
      {
        timing: "Kickoff, 2026-09-05",
        label: "Access",
        title: "Expose the meta-title field and agree the category-page route",
        detail:
          "The meta title demonstrably exists as a separate field because it differs from the visible product title, but it is not in the editor. Category pages are generated through departments and only the owner can change them. Both the sports-banner page and the photo-ornaments page the keyword research recommends need creating, and both carry seasonal deadlines. We need the field name and a date, and a named route for category pages.",
      },
      {
        timing: "Kickoff, 2026-09-05",
        label: "Priority",
        title: "Settle banners and balls against trading cards",
        detail:
          "Asked which single category to grow, the answer was trading cards; asked where the path to 500,000 dollars runs, the answer was banners and balls, with trading cards explicitly discounted as high volume and low price. The data backs the second answer: cards earn the most clicks today at 904 over twelve months but on a low ticket and against a free-template market, while balls carry 145,363 impressions at higher ticket. We have planned on balls first with ornaments elevated and cards defended, and this is the item to confirm.",
      },
      {
        timing: "Before the first report",
        label: "Measurement",
        title: "Agree what success looks like on a seasonal account",
        detail:
          "Spring is the peak, July the trough and August is already recovering. Reported month against month, this business shows a decline every summer and a recovery every spring regardless of what the work achieved. We report year on year and seasonally adjusted, lead with clicks and position rather than impressions, and tie the result to revenue, orders and Shopping contribution.",
      },
      {
        timing: "Before any hub redirect",
        label: "Structure",
        title: "Read each hub page before deciding what happens to it",
        detail:
          "Two of the hub pages currently outrank the page they would be redirected into, and /custom-soccer-balls-hub still outranks its main page on Ahrefs organic traffic. Redirecting the stronger URL into the weaker one loses ground rather than gaining it. The decision and the deployment are deliberately separate items for that reason.",
      },
    ],
    decisions: [
      {
        label: "Do not start a link-building programme",
        detail:
          "The audit's authority recommendation rests on competitor figures that cannot be correct, because Domain Rating is capped at 100 and the figures cited run to 129. A fresh pull puts your closest rivals at 27, 19, 13, 9 and 2.3 against your 27, and live SERPs show sites at Domain Rating 0 to 27 holding top spots across balls, cards and ornaments. Authority is not what is holding this site back. File the disavow, monitor monthly, and spend the effort on the pages.",
      },
      {
        label: "Do not chase the generic vinyl banner head",
        detail:
          "The 3,100-a-month vinyl banner term is a commodity-print result owned by Vistaprint and Walgreens at keyword difficulty 47 to 66, with a local pack, and it is not your fast-turnaround sports niche. The winnable demand is sports banner at 700 a month, baseball team banner at 300 and senior sports banner at 150, all at keyword difficulty 0. There is currently no banner category page on the site at all, so this demand has nowhere to land.",
      },
      {
        label: "Name the designer completion rate as the ceiling, and support the replacement",
        detail:
          "The product designer converts 25 per cent, so three of four customers abandon it and any traffic gain lands on a funnel that drops most of it. This sits outside SEO scope and we are not proposing to fix it, but it caps what any ranking recovery can be worth and it belongs in the plan as a named dependency. Confirming the new AI designer's launch date matters to this roadmap, because it is the multiplier on everything else in it.",
      },
      {
        label: "Elevate photo ornaments ahead of its stated rank",
        detail:
          "Ornaments was ranked sixth and called under-promoted, and the data argues for moving it up. Photo ornaments runs 5,700 a month at keyword difficulty 6, personalized photo ornaments 700 at difficulty 2, and sports christmas ornaments 500 at difficulty 0, with a Domain Rating 3 site holding position 5 on the live result. The site earns 35 clicks there today and the fourth-quarter season is about to arrive, so this one is sequenced by its deadline rather than by its stated rank.",
      },
    ],
  },
};
