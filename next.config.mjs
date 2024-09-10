/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['mr-portfolio.s3.eu-north-1.amazonaws.com'],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
