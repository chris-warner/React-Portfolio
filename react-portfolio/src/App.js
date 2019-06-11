import React from 'react';
import { Jumbotron, Navbar, NavbarBrand, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div fluid bg="light">
      <Navbar fluid bg="light">
        <Navbar.Brand href="#home">Chris Warner</Navbar.Brand>
        <Nav style={navbarTextStyle}>Home</Nav>
        <Nav style={navbarTextStyle}>Portfolio</Nav>
        <Nav style={navbarTextStyle}>Contact</Nav>
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
  textAlign:'center'
}

const jumbotronStyle = {
  height: '400px',
  // backgroundImage: 'url(' + background + ')',
  backgroundSize: 'cover',
  align: 'center',
  color: 'white',
  backgroundColor:'silver'
}

const navbarStyle = {
  height: '100px',
}

const navbarTextStyle = {
  color: 'black',
  marginRight: '12px',
  alignText: 'center'
}
export default App;
