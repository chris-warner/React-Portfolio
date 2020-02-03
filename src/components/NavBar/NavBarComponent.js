import React from 'react';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './NavBarComponent.css';

function NavBarComponent() {
  return (
    <div>
      <Navbar className="navbarStyle" collapseOnSelect expand="lg" bg="#2c3e50" variant="light">
        <Navbar.Brand classNamelass="navbarStyle" href="/React-Portfolio/#/">React-Portfolio</Navbar.Brand>
        <Navbar.Toggle className="navbarStyle" bg="#2c3e50" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="navbarStyle" id="responsive-navbar-nav">
          <Nav className="navbarStyle" className="mr-auto">
            <Nav.Link className="navbarStyle" href="/React-Portfolio/#/">Home</Nav.Link>
            <Nav.Link className="navbarStyle"  href="/React-Portfolio/#/portfolio">Portfolio</Nav.Link>
            <NavDropdown className="navbarStyle" color="white" bg="#2c3e50" title="Social" variant="light" id="basic-nav-dropdown-light">
              <NavDropdown.Item href="https://github.com/chris-warner/">GitHub</NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/chris-warner-developer/">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="chriswarnertech@gmail.com">Email</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  ); 
}

export default NavBarComponent;