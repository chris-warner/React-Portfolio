import React from 'react';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './NavBarComponent.css';

function NavBarComponent() {
  return (
    <div>
      <Navbar className="navbarStyle" collapseOnSelect bg="#2c3e50" variant="light">
        <Navbar.Brand className="navbarStyle" href="/index">React-Portfolio</Navbar.Brand>
        <Navbar.Toggle className="navbarStyle" bg="#2c3e50" aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse className="navbarStyle" >
          <Nav className="navbarStyle">
            <Nav.Link className="navbarStyle" href="/">Home</Nav.Link>
            <Nav.Link className="navbarStyle"  href="portfolio">Portfolio</Nav.Link>
            <NavDropdown className="navbarStyle" color="white" bg="#2c3e50" title="Social" variant="light">
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