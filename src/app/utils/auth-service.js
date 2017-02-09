import Auth0Lock from "auth0-lock";

const __AUTH0_CLIENT_ID__ = 'R2gTAzbJxhy6vgUD11nuTHFcrmxdtT2N';
const __AUTH0_DOMAIN__ = 'ricard0javier.eu.auth0.com';
const AUTHENTICATED_EVENT = 'authenticated';
const __ID_TOKEN_KEY__ = 'id_token';

let authInstance;
let localLogoutHandler;

const auth = (loginHandler, logoutHandler) => {
  const options = {
    autoclose: true,
    allowForgotPassword: false,
    allowSignUp: false,
    auth: {
      redirect: false,
      responseType: 'token'
    }
  };
  localLogoutHandler = logoutHandler;
  // instantiates Auth0 and store
  const auth0Lock = new Auth0Lock(__AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__, options);
  // saves the token in the local storage
  auth0Lock.on(AUTHENTICATED_EVENT, result => localStorage.setItem(__ID_TOKEN_KEY__, result.idToken));
  auth0Lock.on(AUTHENTICATED_EVENT, result => loginHandler(result.idToken));
  return auth0Lock;
};

export const getInstance = (loginHandler, logoutHandler) => {
  if (authInstance === undefined) {
    authInstance = auth(loginHandler, logoutHandler);

    const tokenId = localStorage.getItem(__ID_TOKEN_KEY__);
    if (tokenId !== undefined && tokenId !== null) {
      loginHandler(tokenId);
    }
  }

  return authInstance;
};

export const login = () => {
  getInstance().show({
    responseType: 'token',
    authParams: {
      state: window.location.pathname
    }
  });
};

export const logout = () => {
  localStorage.removeItem(__ID_TOKEN_KEY__);
  localLogoutHandler();
};
