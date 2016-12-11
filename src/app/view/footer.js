import React from "react";

import HeaderResponsive from './headerResponsive';

const styles = {
  container: {
    background: '#02274A',
    padding: '1em 0 1em 0',
    color: '#B19D64'
  },
  containerBottom: {
    background: '#02274A',
    padding: '1em 1em 1em 0',
    color: '#B19D64',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  link: {
    textDecoration: 'none',
    display: 'block',
    paddingLeft: '1em',
    color: 'white'
  }
};

/**
* Renders a Footer div element which contains:
* - The author name linking to the Linkedin profile
*/
const Footer = () => (
  <div>
    <div style={styles.container}>
      <HeaderResponsive/>
    </div>
    <div style={styles.containerBottom}>
      <div><span/></div>
      <div>
        <span>2.13 Cowdray House</span><br/>
        <span>European Institute</span><br/>
        <span>London School of Economics</span><br/>
        <span>and Political Science</span><br/>
        <span>London WC2A 2AE</span><br/>
      </div>
      <div>
        <img src="images/logo_european_institute.png"/>
      </div>
    </div>
  </div>
);

export default Footer;
