import type { RevenueReportData } from "@/lib/reports/revenue-types";

export const sportsDisplaysMayJul2026Report: RevenueReportData = {
  meta: {
    action:
      "Establish why Google converted at 0.72% while Bing and Yahoo! converted at 2.99% and 2.30%, then decide whether the Google entry experience or the Google traffic mix is the constraint.",
    client: "SportsDisplays",
    coverHeadline: "Revenue held steady. The mix underneath it did not.",
    currentPeriod: "May 1 - July 31, 2026",
    previousPeriod: "the preceding month in each comparison",
    property: "https://sportsdisplays.com/",
    reportType: "Organic Revenue Performance Report",
    source:
      "BigCommerce Analytics - Marketing (visit origin drill-down), Orders report, and order line items",
  },
  executiveSummary:
    "Organic search produced $15,456.26 from 37 orders and 4,332 visits across the three months ending July 31, 2026. Monthly revenue barely moved - $4,949.00, $5,259.82, and $5,247.44 - but the composition changed sharply underneath that flat line. June earned more from fewer orders as average order value rose 25.6% to $478.17, then July reversed it, taking two more orders at a 15.6% lower average. Google's share of organic revenue swung from 73% in May to 95% in June and back to 69% in July, with Bing and Yahoo! supplying the difference. Product revenue rotated just as hard: Classic Framing Jersey + Name carried May and June, then produced nothing in July, while Classic Framing Jersey + 1 or 2 Photos jumped to $1,903.00 after two quiet months.",
  channelContext:
    "Organic Search here means the BigCommerce traffic source \"Search\", which excludes Adwords and other paid visits. Every monthly figure reconciles to the $15,456.26 channel total.",
  powerLines: [
    {
      area: "Revenue",
      statement:
        "Organic revenue was effectively flat across all three months, moving less than $311 between the highest and lowest month.",
      status: "positive",
    },
    {
      area: "Order value",
      statement:
        "June and July pulled in opposite directions: average order value rose 25.6% to $478.17, then fell 15.6% to $403.65.",
      status: "watch",
    },
    {
      area: "Search engines",
      statement:
        "Google carried 95% of June revenue but only 69% of July, as Bing and Yahoo! together contributed $1,601.60 in July alone.",
      status: "watch",
    },
    {
      area: "Conversion",
      statement:
        "Bing converted 2.99% of its visits and Yahoo! 2.30%, against Google's 0.72% across the same window.",
      status: "watch",
    },
    {
      area: "Products",
      statement:
        "Only four of the ten products sold in all three months, and June's top seller contributed nothing in July.",
      status: "watch",
    },
  ],
  windowTotals: {
    title: "Three months at a glance",
    insight:
      "Revenue, orders, and visits stayed within a narrow band every month, so the story is in the mix rather than the trend.",
    months: [
      {
        aovDisplay: "$380.69",
        conversionDisplay: "0.93%",
        label: "May 2026",
        ordersDisplay: "13",
        revenue: 4949,
        revenueDisplay: "$4,949.00",
        visitsDisplay: "1,394",
      },
      {
        aovDisplay: "$478.17",
        conversionDisplay: "0.77%",
        label: "June 2026",
        ordersDisplay: "11",
        revenue: 5259.82,
        revenueDisplay: "$5,259.82",
        visitsDisplay: "1,423",
      },
      {
        aovDisplay: "$403.65",
        conversionDisplay: "0.86%",
        label: "July 2026",
        ordersDisplay: "13",
        revenue: 5247.44,
        revenueDisplay: "$5,247.44",
        visitsDisplay: "1,515",
      },
    ],
    total: {
      aovDisplay: "$417.74",
      conversionDisplay: "0.85%",
      label: "May - July 2026",
      ordersDisplay: "37",
      revenue: 15456.26,
      revenueDisplay: "$15,456.26",
      visitsDisplay: "4,332",
    },
  },
  comparisons: [
    {
      currentLabel: "June 2026",
      previousLabel: "May 2026",
      title: "June: more revenue from fewer orders",
      insight:
        "June added $310.82 of revenue while taking two fewer orders. The entire gain came from order value, which rose $97.48 per order, and conversion rate slipped even though visits grew.",
      metrics: [
        {
          change: "+6.3%",
          current: 5259.82,
          currentDisplay: "$5,259.82",
          direction: "up",
          label: "Organic revenue",
          previous: 4949,
          previousDisplay: "$4,949.00",
          status: "positive",
        },
        {
          change: "-15.4%",
          current: 11,
          currentDisplay: "11",
          direction: "down",
          label: "Orders",
          previous: 13,
          previousDisplay: "13",
          status: "watch",
        },
        {
          change: "+25.6%",
          current: 478.17,
          currentDisplay: "$478.17",
          direction: "up",
          label: "Average order value",
          previous: 380.69,
          previousDisplay: "$380.69",
          status: "positive",
        },
        {
          change: "+2.1%",
          current: 1423,
          currentDisplay: "1,423",
          direction: "up",
          label: "Organic visits",
          previous: 1394,
          previousDisplay: "1,394",
          status: "positive",
        },
        {
          change: "-0.16 points",
          current: 0.77,
          currentDisplay: "0.77%",
          direction: "down",
          label: "Conversion rate",
          previous: 0.93,
          previousDisplay: "0.93%",
          status: "watch",
        },
      ],
    },
    {
      currentLabel: "July 2026",
      previousLabel: "June 2026",
      title: "July: more orders at a lower value",
      insight:
        "July gave back almost exactly what June gained. Revenue finished $12.38 lower despite two additional orders and 92 additional visits, because average order value fell $74.52. Conversion rate recovered to 0.86%.",
      metrics: [
        {
          change: "-0.2%",
          current: 5247.44,
          currentDisplay: "$5,247.44",
          direction: "down",
          label: "Organic revenue",
          previous: 5259.82,
          previousDisplay: "$5,259.82",
          status: "watch",
        },
        {
          change: "+18.2%",
          current: 13,
          currentDisplay: "13",
          direction: "up",
          label: "Orders",
          previous: 11,
          previousDisplay: "11",
          status: "positive",
        },
        {
          change: "-15.6%",
          current: 403.65,
          currentDisplay: "$403.65",
          direction: "down",
          label: "Average order value",
          previous: 478.17,
          previousDisplay: "$478.17",
          status: "watch",
        },
        {
          change: "+6.5%",
          current: 1515,
          currentDisplay: "1,515",
          direction: "up",
          label: "Organic visits",
          previous: 1423,
          previousDisplay: "1,423",
          status: "positive",
        },
        {
          change: "+0.09 points",
          current: 0.86,
          currentDisplay: "0.86%",
          direction: "up",
          label: "Conversion rate",
          previous: 0.77,
          previousDisplay: "0.77%",
          status: "positive",
        },
      ],
    },
  ],
  rankings: [
    {
      title: "Organic revenue by search engine",
      insight:
        "Google concentrated to 95% of revenue in June, then fell back to 69% in July as Bing and Yahoo! together delivered $1,601.60. Each column sums to that month's channel revenue.",
      periods: [
        {
          label: "May 2026",
          totalDisplay: "$4,949.00",
          items: [
            { detail: "9 orders", display: "$3,589.00", label: "Google", value: 3589 },
            { detail: "2 orders", display: "$812.00", label: "Bing", value: 812 },
            { detail: "1 order", display: "$274.00", label: "Yahoo!", value: 274 },
            { detail: "1 order", display: "$274.00", label: "DuckDuckGo", value: 274 },
          ],
        },
        {
          label: "June 2026",
          totalDisplay: "$5,259.82",
          items: [
            { detail: "10 orders", display: "$4,981.72", label: "Google", value: 4981.72 },
            { detail: "1 order", display: "$278.10", label: "Bing", value: 278.1 },
          ],
        },
        {
          label: "July 2026",
          totalDisplay: "$5,247.44",
          items: [
            { detail: "9 orders", display: "$3,645.84", label: "Google", value: 3645.84 },
            { detail: "1 order", display: "$807.00", label: "Yahoo!", value: 807 },
            { detail: "3 orders", display: "$794.60", label: "Bing", value: 794.6 },
          ],
        },
      ],
    },
    {
      title: "Organic revenue by product",
      insight:
        "Every product with revenue in a given month is listed, so each column sums to that month's line-item total. Four of the ten products sold in all three months; the rest appeared and disappeared, including the June leader, which produced nothing in July.",
      periods: [
        {
          label: "May 2026",
          totalDisplay: "$4,949.00",
          items: [
            { display: "$1,739.00", label: "Classic Framing Jersey Only", value: 1739 },
            { display: "$1,350.00", label: "Classic Framing Jersey + Name", value: 1350 },
            { display: "$548.00", label: "Classic Framing Jersey + 1 or 2 Photos", value: 548 },
            { display: "$548.00", label: "Classic Framing Jersey + Photo + 2 Cards + Name", value: 548 },
            { display: "$440.00", label: "Executive Framing Jersey + 2 Photos + Name", value: 440 },
            { display: "$324.00", label: "Custom Classic Jersey Framing", value: 324 },
          ],
        },
        {
          label: "June 2026",
          totalDisplay: "$5,240.00",
          items: [
            { display: "$2,137.00", label: "Classic Framing Jersey + Name", value: 2137 },
            { display: "$864.00", label: "Executive Framing Jersey + 2 Photos + Name", value: 864 },
            { display: "$648.00", label: "Custom Classic Jersey Framing", value: 648 },
            { display: "$583.00", label: "Classic Framing Jersey Only", value: 583 },
            { display: "$309.00", label: "Classic Framing Jersey + 2 Photos + Nameplate", value: 309 },
            { display: "$274.00", label: "Classic Framing Jersey + 1 or 2 Photos", value: 274 },
            { display: "$240.00", label: "Golf Pin Flag Framing", value: 240 },
            { display: "$185.00", label: "Pictures", value: 185 },
          ],
        },
        {
          label: "July 2026",
          totalDisplay: "$5,251.00",
          items: [
            { display: "$1,903.00", label: "Classic Framing Jersey + 1 or 2 Photos", value: 1903 },
            { display: "$807.00", label: "Classic Framing Jersey + 2 Photos + Nameplate", value: 807 },
            { display: "$648.00", label: "Custom Classic Jersey Framing", value: 648 },
            { display: "$548.00", label: "Classic Framing Jersey Only", value: 548 },
            { display: "$465.00", label: "Executive Framing Jersey + 2 Photos", value: 465 },
            { display: "$440.00", label: "Executive Framing Jersey + 2 Photos + Name", value: 440 },
            { display: "$440.00", label: "Pictures", value: 440 },
          ],
        },
      ],
    },
  ],
  dataNotes: [
    "Search-engine figures come from Analytics > Marketing > Visit origin details, drilled into Search. The three monthly columns sum to the $15,456.26 channel total exactly.",
    "Product figures were built by isolating the orders whose source is \"Search\" in the Orders report, then reading each order's line items. The Merchandising report cannot be filtered by traffic source.",
    "Line-item revenue totals $15,440.00 against the $15,456.26 channel total. The $16.26 gap is $74.56 of tax added and $58.30 of line-item discounts subtracted at order level. By month the variance is $0.00 in May, +$19.82 in June, and -$3.56 in July, which is why the product columns show $4,949.00, $5,240.00, and $5,251.00.",
    "A revenue-per-product-per-search-engine cross-tab is not available. BigCommerce attributes the search engine at visit level and the product at order level, and never joins them, so the engine and product views are independent cuts of the same revenue.",
    "The product view uses the product page URL. The platform's own landing-page and keyword reporting returned all revenue as \"Unattributed\", so per-landing-page revenue is not obtainable.",
    "Baidu, Ecosia, and Yandex delivered 2, 5, and 2 visits respectively across the full window and produced no revenue or orders. They are excluded from the search-engine chart and are not part of any monthly ranking.",
    "Conversion rate is orders divided by visits; average order value is channel revenue divided by orders. Both are derived, not reported directly by BigCommerce.",
    "No prior three-month baseline (February to April 2026) was supplied, so this report compares months inside the window rather than window against window.",
    "No Search Console click, impression, or ranking data was supplied. This report covers revenue only and makes no claim about search visibility.",
  ],
};
