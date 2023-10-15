/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['dynamic.brandcrowd.com']
  },
}

export default nextConfig
