import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './NavBarComponent.css';

function NavBarComponent() {
  return (
    <div>
      <Navbar className="navbarStyle" collapseOnSelect bg="#2c3e50" variant="light">
        <Navbar.Brand className="navbarStyle" as={Link} to="/">React-Portfolio</Navbar.Brand> {/* Use Link component for internal navigation */}
        <Navbar.Toggle className="navbarStyle" bg="#2c3e50" aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbarStyle">
            <Nav.Link className="navbarStyle" as={Link} to="/">Home</Nav.Link> {/* Use Link component for internal navigation */}
            <Nav.Link className="navbarStyle" as={Link} to="/portfolio">Portfolio</Nav.Link> {/* Use Link component for internal navigation */}
            <Nav.Link className="navbarStyle" href="/Christopher_Warner_Resume_2024.pdf" download>
              Resume
            </Nav.Link>
            <NavDropdown className="navbarStyle" color="white" bg="#2c3e50" title="Social" variant="light">
              <NavDropdown.Item href="https://github.com/chris-warner/" target="_blank" rel="noopener noreferrer">GitHub</NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/chris-warner-developer/" target="_blank" rel="noopener noreferrer">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="mailto:chriswarnertech@gmail.com">Email</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarComponent;
