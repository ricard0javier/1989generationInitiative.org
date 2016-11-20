import React from "react";

import Header from './header';

const styles = {
  container: {
    background: '#02274A'
  }
};

/**
* Renders a Footer div element which contains:
* - The author name linking to the Linkedin profile
*/
const Footer = () => (
  <div style={styles.container}>
    <Header/>
  </div>
);

export default Footer;
