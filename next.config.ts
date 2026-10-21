import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Off-niche pages retired in the billing-only refocus. */
  async redirects() {
    return [
      {
        source: "/solutions/healthcare-platform",
        destination: "/solutions/medical-billing-software",
        permanent: true,
      },
      {
        source: "/services/healthcare-seo",
        destination: "/services/medical-billing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
