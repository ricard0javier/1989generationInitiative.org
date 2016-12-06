import React, {PropTypes} from "react";
import {Link} from "react-router";

const styles = {
  link: {
    textDecoration: 'none',
    display: 'block',
    padding: '1em 0.5em 1em 0.5em',
    color: '#B19D64',
    borderBottom: '1px solid #B19D64',
    margin: '1em',
    whiteSpace: 'nowrap'
  },
  active: {
    borderTop: '1px solid #B19D64'
  }
};

/**
* Renders a Link element which is colored to 'cyan' when the Link is active
*/
const NavLink = ({to, value, isExternalLink}) => {
  if (isExternalLink) {
    return (
      <a style={styles.link} target="_blank" href="http://89ers.blogactiv.eu">{value}</a>
    );
  }
  return (
    <Link style={styles.link} to={to} activeStyle={styles.active}>{value}</Link>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isExternalLink: PropTypes.boolean
};

export default NavLink;
