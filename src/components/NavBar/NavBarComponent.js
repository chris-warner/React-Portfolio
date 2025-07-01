import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './NavBarComponent.css';

function NavBarComponent() {
  return (
    <div>
      <Navbar className="navbarStyle" expand="md" variant="light" sticky="top">
        <Navbar.Brand as={Link} to="/">Chris Warner</Navbar.Brand> {/* Use Link component for internal navigation */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Use Link component for internal navigation */}
            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link> {/* Use Link component for internal navigation */}
            <Nav.Link href="/Christopher_Warner_Resume_2025.pdf" download>
              Resume
            </Nav.Link>
            <NavDropdown
              title="Social"
              id="collasible-nav-dropdown"
              align="end"
              popperConfig={{
                strategy: "fixed"
              }}
            >
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
