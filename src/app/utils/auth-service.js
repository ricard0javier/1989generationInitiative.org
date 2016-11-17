import Auth0Lock from "auth0-lock";
import {setTokenIntoStorage} from "../controller/container/user-info-container";

const AUTHENTICATED_EVENT = 'authenticated';

const newAuth0Lock = (clientId, domain) => {
  const options = {
    allowForgotPassword: false,
    allowSignUp: false,
    auth: {
      responseType: 'token'
    }
  };
  // instantiates Auth0 and store
  const auth0Lock = new Auth0Lock(clientId, domain, options);
  // saves the token in the local storage
  auth0Lock.on(AUTHENTICATED_EVENT, result => setTokenIntoStorage(result.idToken));
  return auth0Lock;
};

export const handleLogin = auth0Lock => () => auth0Lock.show();

// register the handler for authentication events
export const registerLoggedInListener = (auth0Lock, handler) => {
  auth0Lock.on(AUTHENTICATED_EVENT, result => handler(result.idToken));
};

export default newAuth0Lock;
