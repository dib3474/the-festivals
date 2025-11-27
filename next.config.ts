import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "tong.visitkorea.or.kr",
        port: "",
        pathname: "/cms/**",
      },
      {
        protocol: "https",
        hostname: "tong.visitkorea.or.kr",
        port: "",
        pathname: "/cms/**",
      },
    ],
  },
};

export default nextConfig;
