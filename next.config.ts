import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tong.visitkorea.or.kr",
        port: "",
        pathname: "/cms/**",
      },
      {
        protocol: "https",
        hostname: "festa-pick-file.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
