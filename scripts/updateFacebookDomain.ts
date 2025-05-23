import { facebookConfig } from '../config/facebook';

async function updateFacebookAppDomain() {
  try {
    // First, get an access token using the app secret
    const tokenResponse = await fetch(
      `https://graph.facebook.com/oauth/access_token?client_id=${facebookConfig.appId}&client_secret=${facebookConfig.appSecret}&grant_type=client_credentials`
    );
    const { access_token } = await tokenResponse.json();

    // Update the app domain
    const response = await fetch(
      `https://graph.facebook.com/v19.0/${facebookConfig.appId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          app_domains: [facebookConfig.appDomain],
          access_token,
        }),
      }
    );

    const result = await response.json();
    
    if (result.error) {
      console.error('Error updating Facebook app domain:', result.error);
    } else {
      console.log('Successfully updated Facebook app domain to:', facebookConfig.appDomain);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

updateFacebookAppDomain(); 