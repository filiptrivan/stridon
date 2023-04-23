/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.boschtools.com', 'normand.ca', 'encrypted-tbn0.gstatic.com', 'panzura.com', 'www-de.wera.de']
  }
}

module.exports = nextConfig;

