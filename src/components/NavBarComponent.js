import React from 'react';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavBarComponent() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">React-Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <NavDropdown title="Social" id="collasible-nav-dropdown">
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