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
    padding: '5px',
    color: '#B19D64'
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
    <div className="container-fluid">
      <div className="row" style={styles.containerBottom}>
        <div className="col-sm-8">
          <span>2.13 Cowdray House</span><br/>
          <span>European Institute</span><br/>
          <span>London School of Economics</span><br/>
          <span>and Political Science</span><br/>
          <span>London WC2A 2AE</span><br/>
        </div>
        <div className="col-sm-4">
          <img className="img-responsive" src="http://static.1989generationinitiative.org/images/logo_european_institute.png"/>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
