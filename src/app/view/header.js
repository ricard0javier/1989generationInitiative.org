import React from "react";
import NavLink from "./navLink";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100px',
    padding: '5px',
    borderBottom: 'solid 1px #B19D64'
  },
  list: {
    listStyle: 'none',
    margin: '0',
    display: 'flex',
    flexDirection: 'row'
  },
  link: {
    textDecoration: 'none',
    display: 'block',
    padding: '1em',
    color: '#B19D64'
  },
  leftMarginSize: {
    width: '130px'
  }
};

/**
* Renders a Header div element which contains:
* - App Logo
* - Main Links
* - Social media Links
* - TODO rescale the source image to the size decided in the html to prevent client computation
*/
const Header = () => (
  <div style={styles.container}>
    <div style={styles.leftMarginSize}>
      <img src="images/logo_1989_initiative.png" width="127px" height="80px"/>
    </div>
    <div>
      <ul style={styles.list}>
        <li><NavLink to="/home" value="Home"/></li>
        <li><NavLink to="/updates" value="Updates"/></li>
        <li><NavLink to="/collaborators" value="Collaborators"/></li>
        <li><NavLink to="/who_we_are" value="Who We Are"/></li>
        <li><NavLink to="/events" value="Events"/></li>
      </ul>
    </div>
    <div>
      <ul style={styles.list}>
        <li><a style={styles.link} href="mailto:social@1989generationinitiative.org"><i className="fa fa-envelope-o"/></a></li>
        <li><a style={styles.link} href="https://www.linkedin.com/company/9387318"><i className="fa fa-linkedin-square"/></a></li>
        <li><a style={styles.link} href="https://www.facebook.com/1989generationinitiative"><i className="fa fa-facebook-square"/></a></li>
        <li><a style={styles.link} href="https://twitter.com/1989_Generation"><i className="fa fa-twitter"/></a></li>
      </ul>
    </div>
  </div>
);

export default Header;
