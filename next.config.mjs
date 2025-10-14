/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/acelera-vendas-2026',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
