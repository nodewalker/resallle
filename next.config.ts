import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [new URL("https://fakestoreapi.ru/files/**")],
  },
};

export default nextConfig;
