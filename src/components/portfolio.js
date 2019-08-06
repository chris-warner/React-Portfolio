import React from 'react';
import jumbotronBackground from '../../src/jumbotron.jpg';
import NavBarComponent from './NavBarComponent';
import { Jumbotron, Navbar, NavbarBrand, Nav,NavDropdown } from 'react-bootstrap';

function Portfolio() {
    return (     
    <div>
      <NavBarComponent />
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