/** @type {import('next').NextConfig} */
const {i18n} = require('./next-i18next.config')
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.boschtools.com', 'normand.ca', 'encrypted-tbn0.gstatic.com', 'panzura.com', 'www-de.wera.de', 'i00.eu', 'images.pexels.com']
  },
  i18n,
}

module.exports = nextConfig;

