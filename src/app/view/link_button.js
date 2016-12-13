import React, {PropTypes} from "react";

import {handleClick} from '../utils/analytis';

const styles = {
  linkButton: {
    display: "flex",
    color: '#B19D64',
    borderRadius: "20px",
    border: "solid 1px rgb(177, 157, 100)",
    textAlign: "center",
    width: "14em",
    height: "3em",
    marginTop: "0.5em",
    padding: '1em'
  },
  link: {
    color: '#B19D64',
    textDecoration: 'none',
    whiteSpace: 'nowrap'
  },
  linkIcon: {
    paddingRight: '1em'
  }
};

const LinkButton = ({href, text}) => (
  <a style={styles.link} href={href} onClick={handleClick(href)} target="_blank">
    <div style={styles.linkButton}>
      <div style={styles.linkIcon}><i className="fa fa-download"/></div>
      <div><span>{text}</span></div>
    </div>
  </a>
);

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default LinkButton;
