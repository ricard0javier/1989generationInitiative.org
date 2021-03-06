import React, {PropTypes} from "react";
import {Button} from "react-bootstrap";

import Header from './Header';

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
const Footer = ({loginText, handleLogin}) => (
  <div>
    <div style={styles.container}>
      <Header isFooter/>
    </div>
    <div className="container-fluid">
      <div className="row" style={styles.containerBottom}>
        <div className="col-sm-8">
          <span>2.13 Cowdray House</span><br/>
          <span>European Institute</span><br/>
          <span>London School of Economics</span><br/>
          <span>and Political Science</span><br/>
          <span>London WC2A 2AE</span><br/>
          <Button bsStyle="primary" onClick={handleLogin}>{loginText}</Button>
        </div>
        <div className="col-sm-4">
          <img className="img-responsive" src="http://static.1989generationinitiative.org/images/logo_european_institute.png"/>
        </div>
      </div>
    </div>
  </div>
);

Footer.propTypes = {
  loginText: PropTypes.string,
  handleLogin: PropTypes.func.isRequired
};

export default Footer;
