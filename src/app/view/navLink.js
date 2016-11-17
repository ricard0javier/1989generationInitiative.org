import React, {PropTypes} from "react";
import {Link} from "react-router";

/**
* Renders a Link element which is colored to 'cyan' when the Link is active
*/
const NavLink = ({to, value}) => (
  <Link to={to} activeStyle={{color: 'cyan'}}>{value}</Link>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default NavLink;
