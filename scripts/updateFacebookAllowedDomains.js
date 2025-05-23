const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const facebookConfig = require('../config/facebook.js');

async function updateFacebookAllowedDomains() {
  try {
    // Get app access token
    const tokenResponse = await fetch(
      `https://graph.facebook.com/oauth/access_token?client_id=${facebookConfig.appId}&client_secret=${facebookConfig.appSecret}&grant_type=client_credentials`
    );
    const { access_token } = await tokenResponse.json();

    // Update the allowed domains for the JS SDK
    const response = await fetch(
      `https://graph.facebook.com/v19.0/${facebookConfig.appId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          app_domains: [facebookConfig.allowedDomain],
          access_token,
        }),
      }
    );

    const result = await response.json();

    if (result.error) {
      console.error('Error updating Facebook allowed domains:', result.error);
    } else {
      console.log('Successfully updated Facebook allowed domains to:', facebookConfig.allowedDomain);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

updateFacebookAllowedDomains(); 