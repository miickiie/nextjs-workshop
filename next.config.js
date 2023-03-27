/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This is the to allow the images to be loaded from the domain
  images: {
    domains: ['meow.senither.com'],
  },
}

module.exports = nextConfig
