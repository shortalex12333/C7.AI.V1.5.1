interface Window {
  FB: {
    init: (params: {
      appId: string;
      cookie: boolean;
      xfbml: boolean;
      version: string;
    }) => void;
    login: (
      callback: (response: { authResponse?: { accessToken: string } }) => void,
      options?: { scope: string }
    ) => void;
    AppEvents: {
      logPageView: () => void;
    };
  };
} 