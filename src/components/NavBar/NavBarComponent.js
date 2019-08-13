import React from 'react';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './NavBarComponent.css';

function NavBarComponent() {
  return (
    <div>
      <Navbar style={navbarStyle} collapseOnSelect expand="lg" bg="#2c3e50" variant="light">
        <Navbar.Brand style={navbarStyle} href="/react-portfolio/#/">React-Portfolio</Navbar.Brand>
        <Navbar.Toggle style={navbarStyle} bg="#2c3e50" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse style={navbarStyle} id="responsive-navbar-nav">
          <Nav style={navbarStyle} className="mr-auto">
            <Nav.Link  style={navbarStyle} href="/react-portfolio/#/">Home</Nav.Link>
            <Nav.Link style={navbarStyle}  href="/react-portfolio/#/portfolio">Portfolio</Nav.Link>
            <NavDropdown style={navbarStyle} color="white" bg="#2c3e50" title="Social" variant="light" id="basic-nav-dropdown-light">
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

const navbarStyle = {
 color:"white",
 bg:"#4285f4",
 backgroundColor:"#4285f4"
}



export default NavBarComponent;