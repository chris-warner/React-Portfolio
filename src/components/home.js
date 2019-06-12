import React from 'react';
import { Jumbotron, Navbar, NavbarBrand, Nav } from 'react-bootstrap';
import jumbotronBackground from '../../src/jumbotron.jpg';
 
function Home() {
    return (     
        <div>
    <Navbar fluid bg="light">
    <Navbar.Brand href="#home">Chris Warner</Navbar.Brand>
    <Nav.Link href="/" style={navbarTextStyle}>Home</Nav.Link>
    <Nav.Link href="/portfolio" style={navbarTextStyle}>Portfolio</Nav.Link>
    <Nav.Link href="/about" style={navbarTextStyle}>Contact</Nav.Link>
  </Navbar>
  <Jumbotron style={jumbotronStyle}>
    <h1 style={centerText}>Chris Warner</h1>
    <p style={centerText}>Hello, my name is Christopher Warner. I am a web developer and designer from New York City.I am a full stack developer educated student currently studying at Columbia University. I have been exposed to programming since the 7th grade, having developed many creative projects.</p>
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
export default Home;