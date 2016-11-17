import {getTokenFromStorage} from "../container/user-info-container";
import {LOGGED_IN, LOGGED_OUT} from "../action/auth-actions";

const initialState = {
  token: getTokenFromStorage()
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGGED_IN:
      return Object.assign({}, state, {token: action.token});

    case LOGGED_OUT:
      return Object.assign({}, state, {token: action.token});

    default:
      return state;
  }
};

export default authReducer;
