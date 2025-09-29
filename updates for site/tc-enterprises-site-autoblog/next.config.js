require('dotenv').config({ path: './.env.local' });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {},
  output: process.env.EXPORT_STATIC === 'true' ? 'export' : undefined
};

module.exports = nextConfig;
