import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {NavLink} from "./NavLink";

const styles = {
  list: {
    listStyle: 'none',
    display: 'flex'
  },
  link: {
    textDecoration: 'none',
    display: 'block',
    paddingRight: '0.5em',
    color: '#B19D64',
    fontSize: '1.2em'
  },
  header: {
    paddingTop: "3em"
  }
};

const Header = () => (
  <div style={styles.header}>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="//www.1989generationinitiative.org">
            <img src="http://static.1989generationinitiative.org/images/logo_1989initiative.png"/>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavLink eventKey="1" to="/home" value="Home"/>
          <NavLink eventKey="2" to="/events" value="Events"/>
          <NavLink eventKey="2" to="/chapters" value="Chapters"/>
          <NavLink eventKey="3" to="/about" value="Who We Are"/>
          <NavLink eventKey="4" to="/collaborators" value="Collaborators"/>
        </Nav>
        <Nav>
          <li><a target="_blank" href="http://89ers.blogactiv.eu">Blog</a></li>
        </Nav>
        <Nav pullRight>
          <div>
            <ul style={styles.list}>
              <li><a style={styles.link} target="_blank" href="mailto:social@1989generationinitiative.org"><i className="fa fa-envelope-o"/></a></li>
              <li><a style={styles.link} target="_blank" href="https://www.linkedin.com/company/9387318"><i className="fa fa-linkedin-square"/></a></li>
              <li><a style={styles.link} target="_blank" href="https://www.facebook.com/1989generationinitiative"><i className="fa fa-facebook-square"/></a></li>
              <li><a style={styles.link} target="_blank" href="https://twitter.com/1989_Generation"><i className="fa fa-twitter"/></a></li>
            </ul>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Header;
