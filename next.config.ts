import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // In dev we want the app at "/", but on GitHub Pages it is served under "/<repo>/".
  basePath: isProd ? "/lbti-test" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
