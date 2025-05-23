/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['celeste7.ai'],
  },
  env: {
    FACEBOOK_APP_ID: '1039676121523538',
    FACEBOOK_CLIENT_ID: '3e1e72a717883162f769f27f2fc21e31',
  }
};

module.exports = nextConfig; 