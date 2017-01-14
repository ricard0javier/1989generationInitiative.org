import React, {PropTypes} from "react";
import {Button} from "react-bootstrap";

import {handleClick} from '../utils/analytics';

const styles = {
  linkButton: {
    display: "flex",
    width: "14em",
    marginTop: "0.5em"
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

const LinkButton = ({href, text, faIconClass}) => {
  const finalFaIconClass = faIconClass || "fa fa-download";
  return (
    <a style={styles.link} href={href} onClick={handleClick(href)} target="_blank">
      <Button bsStyle="primary" style={styles.linkButton}>
        <div style={styles.linkIcon}><i className={finalFaIconClass}/></div>
        <div><span>{text}</span></div>
      </Button>
    </a>
  );
};

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  faIconClass: PropTypes.string.isRequired
};

export default LinkButton;
