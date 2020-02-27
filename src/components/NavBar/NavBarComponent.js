import React from 'react';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './NavBarComponent.css';

function NavBarComponent() {
  return (
    <div>
      <Navbar className="navbarStyle" collapseOnSelect bg="#2c3e50" variant="light">
        <Navbar.Brand className="navbarStyle" href="/">React-Portfolio</Navbar.Brand>
        <Navbar.Toggle className="navbarStyle" bg="#2c3e50" aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse className="navbarStyle" >
          <Nav className="navbarStyle">
            <Nav.Link className="navbarStyle" href="/">Home</Nav.Link>
            <Nav.Link className="navbarStyle" href="#/portfolio">Portfolio</Nav.Link>
            <NavDropdown className="navbarStyle" color="white" bg="#2c3e50" title="Social" variant="light">
              <a class="dropdown-item" target="_blank" rel="noopener noreferrer" href="https://github.com/chris-warner/">GitHub</a> 
            <a class="dropdown-item" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chris-warner-developer/">LinkedIn</a>
          <a class="dropdown-item" target="_blank" rel="noopener noreferrer" href="chriswarnertech@gmail.com"> Email</a>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  ); 
}

export default NavBarComponent;