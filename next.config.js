/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  env: {
    FACEBOOK_APP_ID: '1039676121523538',
    FACEBOOK_CLIENT_ID: '3e1e72a717883162f769f27f2fc21e31',
  },
  trailingSlash: true,
  // Disable server-side features for static export
  // Ensure all pages are static
  staticPageGenerationTimeout: 120,
  // Ensure index.html is generated at the root
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/404': { page: '/404' },
      // Add other routes as needed
    };
  },
};

module.exports = nextConfig; 