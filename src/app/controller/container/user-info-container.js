import {connect} from "react-redux";
import UserInfo from "../../view/user-info";
import {handleLoggedOut} from "../action/auth-actions";

// define the package constants
const __ID_TOKEN_KEY__ = 'id_token';

/**
 * Returns the ID_TOKEN from the local storage
 */
export const getTokenFromStorage = () => {
  return localStorage.getItem(__ID_TOKEN_KEY__);
};

/**
 * Sets the ID_TOKEN into the local storage
 */
export const setTokenIntoStorage = idToken => {
  localStorage.setItem(__ID_TOKEN_KEY__, idToken);
};

// transforms the state to component properties
const mapStateToProps = state => {
  return {
    isLoggedIn: Boolean(state.auth.token)
  };
};

// creates functions that uses the redux dispatch and pass those function as props
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleLogin: ownProps.route.handleLogin,

    handleLogout: () => {
      localStorage.removeItem(__ID_TOKEN_KEY__);
      dispatch(handleLoggedOut());
    }
  };
};

const UserInfoContainer = connect(mapStateToProps, mapDispatchToProps)(UserInfo);

export default UserInfoContainer;
