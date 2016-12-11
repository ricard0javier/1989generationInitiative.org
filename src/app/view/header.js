import React from "react";
import NavLink from "./navLink";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100px',
    padding: '5px'
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
    padding: '0.5em',
    color: '#B19D64',
    fontSize: '1.5em'
  },
  leftGroup: {
    textAlign: 'center',
    width: '20%'
  },
  rightGroup: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    borderBottom: 'solid 1px #B19D64',
    justifyContent: 'space-between'
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
    <div style={styles.leftGroup}>
      <img src="http://static.1989generationinitiative.org/images/logo_1989initiative.png" width="127px" height="80px"/>
    </div>
    <div style={styles.rightGroup}>
      <div>
        <ul style={styles.list}>
          <li><NavLink to="/home" value="Home"/></li>
          <li><NavLink to="/blog" value="Blog" isExternalLink="true"/></li>
          <li><NavLink to="/events" value="Events"/></li>
          <li><NavLink to="/who_we_are" value="Who We Are"/></li>
          <li><NavLink to="/collaborators" value="Collaborators"/></li>
        </ul>
      </div>
      <div>
        <ul style={styles.list}>
          <li><a style={styles.link} target="_blank" href="mailto:social@1989generationinitiative.org"><i className="fa fa-envelope-o"/></a></li>
          <li><a style={styles.link} target="_blank" href="https://www.linkedin.com/company/9387318"><i className="fa fa-linkedin-square"/></a></li>
          <li><a style={styles.link} target="_blank" href="https://www.facebook.com/1989generationinitiative"><i className="fa fa-facebook-square"/></a></li>
          <li><a style={styles.link} target="_blank" href="https://twitter.com/1989_Generation"><i className="fa fa-twitter"/></a></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
