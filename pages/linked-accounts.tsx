import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default function LinkedAccounts() {
  useEffect(() => {
    // Initialize Facebook SDK after it's loaded
    if (window.FB) {
      window.FB.init({
        appId: '1039676121523538',
        cookie: true,
        xfbml: true,
        version: 'v19.0'
      });
      window.FB.AppEvents.logPageView();
    }
  }, []);

  const handleFacebookLogin = () => {
    if (window.FB) {
      window.FB.login((response: any) => {
        if (response.authResponse) {
          console.log('Successfully logged in with Facebook!');
          // Handle successful login here
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      }, {
        scope: 'email,public_profile'
      });
    }
  };

  return (
    <>
      <Head>
        <title>Linked Accounts - Celeste7</title>
        <meta name="description" content="Manage your linked social media accounts" />
      </Head>

      {/* Facebook SDK */}
      <Script
        id="facebook-sdk"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.fbAsyncInit = function() {
              FB.init({
                appId: '1039676121523538',
                cookie: true,
                xfbml: true,
                version: 'v19.0'
              });
              
              FB.AppEvents.logPageView();
            };

            (function(d, s, id){
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) {return;}
              js = d.createElement(s); js.id = id;
              js.src = "https://connect.facebook.net/en_US/sdk.js";
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
          `
        }}
      />

      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Linked Accounts
              </h3>
              <div className="mt-5">
                <div className="space-y-4">
                  {/* Facebook Login Button */}
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <svg className="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <div>
                        <h4 className="text-base font-medium text-gray-900">Facebook</h4>
                        <p className="text-sm text-gray-500">Connect your Facebook account</p>
                      </div>
                    </div>
                    <button
                      onClick={handleFacebookLogin}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 