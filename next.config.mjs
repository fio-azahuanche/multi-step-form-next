/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
    output: "export", 
    basePath: "/multi-step-form-next", 
    assetPrefix: "/multi-step-form-next/",
    images: { unoptimized: true }, 
    eslint: {
      ignoreDuringBuilds: true, 
    },  
  };
export default nextConfig;
