require('dotenv').config({ path: './.env.local' });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {},
  output: process.env.EXPORT_STATIC === 'true' ? 'export' : undefined,
  async redirects() {
    return [
      { source: '/pricing', destination: '/vector-conversion', permanent: true },
      { source: '/how-it-works', destination: '/vector-conversion', permanent: true },
      { source: '/services', destination: '/vector-conversion', permanent: true },
      { source: '/services/software', destination: '/projects', permanent: true },
      { source: '/portfolio', destination: '/projects', permanent: true },
      { source: '/portfolio/:slug', destination: '/projects/:slug', permanent: true },
      { source: '/artwork', destination: '/vector-conversion', permanent: true },
      { source: '/case-studies', destination: '/projects', permanent: true },
    ]
  }
};

module.exports = nextConfig;
