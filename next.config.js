/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  // Configurações para otimização de Docker/Alpine
  output: 'standalone',
}

module.exports = nextConfig
