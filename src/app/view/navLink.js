import React, {PropTypes} from "react";
import {Link} from "react-router";

const styles = {
  link: {
    textDecoration: 'none',
    display: 'block',
    padding: '1em',
    color: '#B19D64',
    borderBottomStyle: 'solid',
    borderBottomColor: '#B19D64',
    margin: '1em'
  },
  active: {
    color: 'cyan'
  }
};

/**
* Renders a Link element which is colored to 'cyan' when the Link is active
*/
const NavLink = ({to, value}) => (
  <Link style={styles.link} to={to} activeStyle={styles.active}>{value}</Link>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default NavLink;
