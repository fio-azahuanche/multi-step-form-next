/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
    output: "standalone", 
    basePath: isProd ? "/multi-step-form-next" : "", 
    assetPrefix: isProd ? "/multi-step-form-next/" : "",
    images: { unoptimized: true }, 
    ignoreDuringBuilds: true,
  };
export default nextConfig;
