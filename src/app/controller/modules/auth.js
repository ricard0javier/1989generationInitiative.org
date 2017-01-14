// Actions
const LOGGED_IN = 'app/auth/LOGGED_IN';
const LOGGED_OUT = 'app/auth/LOGGED_OUT';

// Reducers
const initialState = {
  tokenId: ""
};
const reducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGGED_IN:
      return {
        ...state,
        tokenId: action.tokenId
      };

    case LOGGED_OUT:
      return {
        ...state,
        tokenId: ""
      };

    default:
      return state;
  }
};

// Action Creators
export const loggedInAuth = tokenId => {
  return {
    type: LOGGED_IN,
    tokenId
  };
};

export const loggedOutAuth = () => {
  return {
    type: LOGGED_OUT
  };
};

export default reducer;
