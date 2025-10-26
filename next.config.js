/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true, // For static export compatibility if needed
  },
  output: 'standalone',
}

export default nextConfig

