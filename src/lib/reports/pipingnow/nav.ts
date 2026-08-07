import type { SuiteNavItem } from "./types";

export const suiteBasePath = "/piping-now-seo-analysis";

export const suiteNav: SuiteNavItem[] = [
  { href: `${suiteBasePath}`, label: "Overview" },
  { href: `${suiteBasePath}/action-plan`, label: "Action Plan" },
  { href: `${suiteBasePath}/gsc-performance`, label: "GSC Performance" },
  { href: `${suiteBasePath}/gsc-indexation`, label: "Indexation" },
  { href: `${suiteBasePath}/merchant-center`, label: "Merchant Center" },
  { href: `${suiteBasePath}/ahrefs`, label: "Ahrefs" },
  { href: `${suiteBasePath}/blog-cannibalization`, label: "Blog Cannibalization" },
  { href: `${suiteBasePath}/ai-search-visibility`, label: "AI Search" },
  { href: `${suiteBasePath}/data-appendix`, label: "Data Appendix" },
];
