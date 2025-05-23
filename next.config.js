/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['celeste7.ai'],
  },
  env: {
    FACEBOOK_APP_ID: '1039676121523538',
    FACEBOOK_CLIENT_ID: '3e1e72a717883162f769f27f2fc21e31',
  },
  trailingSlash: true,
  // Disable server-side features for static export
  experimental: {
    appDir: false,
  },
  // Ensure all pages are static
  staticPageGenerationTimeout: 120,
};

module.exports = nextConfig; 