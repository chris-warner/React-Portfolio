import React from 'react';
import { Jumbotron, Navbar, NavbarBrand, Nav } from 'react-bootstrap';
import jumbotronBackground from '../../src/jumbotron.jpg';

function Portfolio() {
    return (     
        <div>
    <Navbar fluid bg="light">
    <Navbar.Brand href="#home">Chris Warner</Navbar.Brand>
    <Nav.Link href="/" style={navbarTextStyle}>Home</Nav.Link>
    <Nav.Link href="/portfolio" style={navbarTextStyle}>Portfolio</Nav.Link>
    <Nav.Link href="/about" style={navbarTextStyle}>Contact</Nav.Link>
  </Navbar>
  <Jumbotron style={jumbotronStyle}>
    <h1 style={centerText}>Portfolio</h1>
    <p style={centerText}></p>
  </Jumbotron>
  <header className="App-header">
  </header>
  </div> 
  );
}

const centerText = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'50px',
    textAlign:'center',
    color:'black'
  }
  
  const jumbotronStyle = {
    height: '400px',
    // backgroundImage: 'url(' + background + ')',
    backgroundSize: 'cover',
    align: 'center',
    color: 'white',
    backgroundColor:'silver',
    backgroundImage: 'url('+jumbotronBackground+')'
  }
  
  const navbarStyle = {
    height: '100px',
  }
  
  const navbarTextStyle = {
    color: 'black',
    marginRight: '12px',
    alignText: 'center'
  }
export default Portfolio;