import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/kcp-blog",
        destination: "/blog/kcp-blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
