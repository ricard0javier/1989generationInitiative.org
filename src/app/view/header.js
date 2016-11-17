import React from "react";
import NavLink from "./navLink";

/**
* Renders a Header div element which contains:
* - App Logo
* - Main Links
* - Menu Button (TODO)
* - Login/Logout Button (TODO)
*/
const Header = () => (
  <div className="header">
    <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div className="container">
        <div className="navbar-header">

          <a href="#menu" className="navbar-toggle collapsed">
            <span className="sr-only">Menu</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </a>

          <div className="navbar-brand">
            <a className="menu-bars" href="#menu"><i className="fa fa-bars fa-1x" aria-hidden="true"></i></a>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <span>The Codestein</span>
          </div>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><NavLink to="/articles" value="Articles"/></li>
            <li><NavLink to="/about" value="About"/></li>
            <li><NavLink to="/user" value="User"/></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
