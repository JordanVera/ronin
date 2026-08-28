import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prestigeeventshouston.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/locations",
        destination: "/locations/ronin-harrisburg",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
