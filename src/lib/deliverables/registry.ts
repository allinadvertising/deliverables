/**
 * Every client deliverable this repo publishes, in one list.
 *
 * Each entry imports the deliverable's own data module and reads the client,
 * headline and period label out of it, so the dashboard always agrees with
 * the page it links to. Only `href`, `periodEnd` and `exportHref` are stated
 * here.
 *
 * Adding a deliverable: add its import and one line below. The drift guard
 * (`npm run check:deliverables`) fails the build if a route under
 * src/app/{reports,kickoff,piping-now-seo-analysis} has no entry.
 */
import { eightyEightGearKickoffV2 } from "@/lib/kickoff/88-gear-v2";
import { atlWeldingSupplyKickoffV2 } from "@/lib/kickoff/atl-welding-supply-v2";
import { awardsAtlantaKickoffV2 } from "@/lib/kickoff/awards-atlanta-v2";
import { awrRestorationKickoffV2 } from "@/lib/kickoff/awr-restoration-v2";
import { bigDawgBatsKickoffV2 } from "@/lib/kickoff/big-dawg-bats-v2";
import { cancookerKickoffV2 } from "@/lib/kickoff/cancooker-v2";
import { covertecProductsKickoffV2 } from "@/lib/kickoff/covertec-products-v2";
import { customSportsProductsKickoffV2 } from "@/lib/kickoff/custom-sports-products-v2";
import { electricMotorSportKickoffV2 } from "@/lib/kickoff/electric-motor-sport-v2";
import { excellRedLightKickoffV2 } from "@/lib/kickoff/excell-red-light-v2";
import { intradynKickoffV2 } from "@/lib/kickoff/intradyn-v2";
import { mkmPotteryToolsKickoffV2 } from "@/lib/kickoff/mkm-pottery-tools-v2";
import { nurtured9KickoffV2 } from "@/lib/kickoff/nurtured-9-v2";
import { originalClearBraKickoffV2 } from "@/lib/kickoff/original-clear-bra-v2";
import { penelopeKickoffV2 } from "@/lib/kickoff/penelope-v2";
import { racePartsSolutionsKickoffV2 } from "@/lib/kickoff/race-parts-solutions-v2";
import { raiseThemWellKickoffV2 } from "@/lib/kickoff/raise-them-well-v2";
import { rigOutfittersKickoffV2 } from "@/lib/kickoff/rig-outfitters-v2";
import { sportsDisplaysKickoffV2 } from "@/lib/kickoff/sportsdisplays-v2";
import { toicoKickoffV2 } from "@/lib/kickoff/toico-v2";
import type { KickoffV2Data } from "@/lib/kickoff/v2-types";
import { agDieselJunAug2026Report } from "@/lib/reports/ag-diesel-jun-aug-2026";
import { buriedTreasureFossilsAugust2026Report } from "@/lib/reports/buried-treasure-fossils-august-2026";
import { evChargeSolutionsAugust2026Report } from "@/lib/reports/ev-charge-solutions-august-2026";
import { everwhiteAugust2026Report } from "@/lib/reports/everwhite-august-2026";
import { fossilAgeMineralsAugust2026Report } from "@/lib/reports/fossil-age-minerals-august-2026";
import { penelopeAug2026Report } from "@/lib/reports/penelope-aug-2026";
import { hubMeta } from "@/lib/reports/pipingnow/hub";
import type { SuiteMeta } from "@/lib/reports/pipingnow/types";
import { pipingNowAugust2026Report } from "@/lib/reports/pipingnow-august-2026";
import { ritaniAugust2026Report } from "@/lib/reports/ritani-august-2026";
import { snowieJune2026Report } from "@/lib/reports/snowie-june-2026";
import { sportsDisplaysMayJul2026Report } from "@/lib/reports/sportsdisplays-may-jul-2026";
import { toicoJuly2026Report } from "@/lib/reports/toico-july-2026";
import type { ReportMeta } from "@/lib/reports/types";
import { vbeltGuysJuly2026Report } from "@/lib/reports/vbeltguys-july-2026";
import { vimProductsAugust2026Report } from "@/lib/reports/vim-products-august-2026";

import type { DeliverableEntry } from "./types";

type Placement = {
  exportHref?: string;
  href: string;
  periodEnd: string;
};

/**
 * Takes anything carrying a `ReportMeta` — the storytelling reports
 * (`SeoStoryReportData`) and the revenue reports (`RevenueReportData`) are
 * different shapes but share that header.
 */
function fromReport(
  report: { meta: ReportMeta },
  placement: Placement,
): DeliverableEntry {
  return {
    client: report.meta.client,
    headline: report.meta.coverHeadline,
    kind: "seo-report",
    periodLabel: report.meta.currentPeriod,
    ...placement,
  };
}

/**
 * Decks label their engagement window inconsistently — "Period" on most,
 * "Window" on CanCooker and SportsDisplays, "Quarter" on TOICO — so take
 * whichever one the deck happens to use rather than restating the dates.
 */
function fromKickoff(
  deck: KickoffV2Data,
  placement: Placement,
): DeliverableEntry {
  const period = deck.meta.find((item) =>
    ["period", "quarter", "window"].includes(item.label.toLowerCase()),
  );

  return {
    client: deck.cover.clientName,
    headline: deck.cover.subtitle,
    kind: "kickoff",
    periodLabel: period?.value ?? "",
    ...placement,
  };
}

function fromSuite(meta: SuiteMeta, placement: Placement): DeliverableEntry {
  return {
    client: meta.client,
    headline: meta.coverHeadline,
    kind: "analysis-suite",
    periodLabel: meta.date,
    ...placement,
  };
}

/**
 * Newest first, then by client. `exportHref` is set only on deliverables
 * produced on or after 2026-09-22, when the HTML export became required.
 */
export const deliverables: DeliverableEntry[] = [
  // SEO reports
  fromReport(agDieselJunAug2026Report, {
    href: "/reports/ag-diesel/jun-aug-2026",
    periodEnd: "2026-08-31",
  }),
  fromReport(buriedTreasureFossilsAugust2026Report, {
    href: "/reports/buried-treasure-fossils/august-2026",
    periodEnd: "2026-08-31",
  }),
  fromReport(evChargeSolutionsAugust2026Report, {
    href: "/reports/ev-charge-solutions/august-2026",
    periodEnd: "2026-08-31",
  }),
  fromReport(everwhiteAugust2026Report, {
    href: "/reports/everwhite/august-2026",
    periodEnd: "2026-08-31",
  }),
  fromReport(fossilAgeMineralsAugust2026Report, {
    href: "/reports/fossil-age-minerals/august-2026",
    periodEnd: "2026-08-31",
  }),
  fromReport(penelopeAug2026Report, {
    href: "/reports/penelope/aug-2026",
    periodEnd: "2026-08-31",
  }),
  fromReport(pipingNowAugust2026Report, {
    href: "/reports/pipingnow/august-2026",
    periodEnd: "2026-08-31",
  }),
  fromReport(ritaniAugust2026Report, {
    href: "/reports/ritani/august-2026",
    periodEnd: "2026-08-31",
  }),
  fromReport(snowieJune2026Report, {
    href: "/reports/snowie/june-2026",
    periodEnd: "2026-06-30",
  }),
  fromReport(sportsDisplaysMayJul2026Report, {
    href: "/reports/sportsdisplays/may-jul-2026",
    periodEnd: "2026-07-31",
  }),
  fromReport(toicoJuly2026Report, {
    href: "/reports/toico/july-2026",
    periodEnd: "2026-07-26",
  }),
  fromReport(vbeltGuysJuly2026Report, {
    href: "/reports/vbeltguys/july-2026",
    periodEnd: "2026-07-31",
  }),
  fromReport(vimProductsAugust2026Report, {
    href: "/reports/vim-products/august-2026",
    periodEnd: "2026-08-31",
  }),

  // Kickoff decks
  fromKickoff(eightyEightGearKickoffV2, {
    href: "/kickoff/88-gear/v2",
    periodEnd: "2026-11-30",
  }),
  fromKickoff(atlWeldingSupplyKickoffV2, {
    href: "/kickoff/atl-welding-supply/v2",
    periodEnd: "2026-11-30",
  }),
  fromKickoff(awardsAtlantaKickoffV2, {
    href: "/kickoff/awards-atlanta/v2",
    periodEnd: "2026-11-30",
  }),
  fromKickoff(awrRestorationKickoffV2, {
    href: "/kickoff/awr-restoration/v2",
    periodEnd: "2026-11-30",
  }),
  fromKickoff(bigDawgBatsKickoffV2, {
    href: "/kickoff/big-dawg-bats/v2",
    periodEnd: "2026-11-30",
  }),
  fromKickoff(cancookerKickoffV2, {
    href: "/kickoff/cancooker/v2",
    periodEnd: "2026-11-30",
  }),
  fromKickoff(covertecProductsKickoffV2, {
    href: "/kickoff/covertec-products/v2",
    periodEnd: "2026-11-30",
  }),
  fromKickoff(customSportsProductsKickoffV2, {
    href: "/kickoff/custom-sports-products/v2",
    periodEnd: "2026-11-30",
  }),
  fromKickoff(electricMotorSportKickoffV2, {
    href: "/kickoff/electric-motor-sport/v2",
    periodEnd: "2026-11-30",
  }),
  fromKickoff(excellRedLightKickoffV2, {
    href: "/kickoff/excell-red-light/v2",
    periodEnd: "2026-12-31",
  }),
  fromKickoff(intradynKickoffV2, {
    href: "/kickoff/intradyn/v2",
    periodEnd: "2026-10-31",
  }),
  fromKickoff(mkmPotteryToolsKickoffV2, {
    href: "/kickoff/mkm-pottery-tools/v2",
    periodEnd: "2026-11-30",
  }),
  fromKickoff(nurtured9KickoffV2, {
    href: "/kickoff/nurtured-9/v2",
    periodEnd: "2026-11-30",
  }),
  fromKickoff(originalClearBraKickoffV2, {
    href: "/kickoff/original-clear-bra/v2",
    periodEnd: "2026-11-30",
  }),
  fromKickoff(penelopeKickoffV2, {
    href: "/kickoff/penelope/v2",
    periodEnd: "2026-10-31",
  }),
  fromKickoff(racePartsSolutionsKickoffV2, {
    href: "/kickoff/race-parts-solutions/v2",
    periodEnd: "2026-11-30",
  }),
  fromKickoff(raiseThemWellKickoffV2, {
    href: "/kickoff/raise-them-well/v2",
    periodEnd: "2026-11-30",
  }),
  fromKickoff(rigOutfittersKickoffV2, {
    href: "/kickoff/rig-outfitters/v2",
    periodEnd: "2026-11-30",
  }),
  // Served from a non-/v2 path: the link is already out with the client.
  fromKickoff(sportsDisplaysKickoffV2, {
    href: "/kickoff/sportsdisplays",
    periodEnd: "2026-10-31",
  }),
  fromKickoff(toicoKickoffV2, {
    href: "/kickoff/toico/v2",
    periodEnd: "2026-09-30",
  }),

  // Analysis suites. One entry per suite: the hub is the way in, and its
  // eight child pages are navigated from there.
  fromSuite(hubMeta, {
    href: "/piping-now-seo-analysis",
    periodEnd: "2026-08-07",
  }),
].sort(
  (a, b) =>
    b.periodEnd.localeCompare(a.periodEnd) || a.client.localeCompare(b.client),
);
