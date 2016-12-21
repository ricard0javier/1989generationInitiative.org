import React, {PropTypes} from "react";
import {NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

/**
* Renders a Link element which is colored to 'cyan' when the Link is active
*/
export const NavLink = ({to, value, eventKey}) => (
  <LinkContainer to={to}>
    <NavItem eventKey={eventKey}>{value}</NavItem>
  </LinkContainer>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  eventKey: PropTypes.string.isRequired
};
