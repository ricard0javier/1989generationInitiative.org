export const LOGGED_IN = 'LOGGED_IN';
export const handleLoggedIn = idToken => {
  return {
    type: LOGGED_IN,
    token: idToken
  };
};

export const LOGGED_OUT = 'LOGGED_OUT';
export const handleLoggedOut = () => {
  return {
    type: LOGGED_OUT
  };
};
