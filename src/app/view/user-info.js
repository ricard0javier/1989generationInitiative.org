import React, {PropTypes} from "react";
import {ButtonToolbar, Button} from "react-bootstrap";

const UserInfo = ({isLoggedIn, handleLogin, handleLogout}) => {
  const text = isLoggedIn ? "Logout" : "Login";
  const handler = isLoggedIn ? handleLogout : handleLogin;

  return (
    <div>
      <h2>{text}</h2>
      <ButtonToolbar>
        <Button bsStyle="primary" onClick={handler}>{text}</Button>
      </ButtonToolbar>
    </div>
  );
};

UserInfo.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired
};

export default UserInfo;
