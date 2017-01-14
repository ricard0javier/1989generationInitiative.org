import {connect} from "react-redux";

import FooterComponent from "../../view/Footer";
import {login, logout} from "../../utils/auth-service";

// transforms the state to component properties
const mapStateToProps = state => {
  return {
    loginText: state.auth.tokenId === "" ? "Login" : "Logout",
    handleLogin: state.auth.tokenId === "" ? login : logout
  };
};

const FooterContainer = connect(mapStateToProps)(FooterComponent);

export default FooterContainer;
