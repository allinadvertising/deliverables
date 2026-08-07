import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Short share-friendly aliases for the Piping Now audit suite. The canonical
  // URLs are the /piping-now-seo-analysis/* routes; these only exist so the
  // team can paste a shorter link internally.
  async redirects() {
    return [
      {
        destination: "/piping-now-seo-analysis",
        permanent: false,
        source: "/piping-now-seo",
      },
      {
        destination: "/piping-now-seo-analysis/gsc-performance",
        permanent: false,
        source: "/piping-now-seo/gsc",
      },
      {
        destination: "/piping-now-seo-analysis/gsc-indexation",
        permanent: false,
        source: "/piping-now-seo/indexation",
      },
      {
        destination: "/piping-now-seo-analysis/merchant-center",
        permanent: false,
        source: "/piping-now-seo/gmc",
      },
      {
        destination: "/piping-now-seo-analysis/ahrefs",
        permanent: false,
        source: "/piping-now-seo/links",
      },
    ];
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
