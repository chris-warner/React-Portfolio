import React from 'react';
import jumbotronBackground from '../../src/components/react.png';
import NavBarComponent from './NavBarComponent';
import VerticleTimeline from './VerticleTimeline';
import FooterComponent from './FooterComponent';
import { Jumbotron } from 'react-bootstrap';

function Portfolio() {
    return (     
    <div>
      <NavBarComponent />
      <center><h1 style={titleStyle}>Projects and development.</h1></center>
      <VerticleTimeline />
      <FooterComponent />
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
    height: '300px',
    // backgroundImage: 'url(' + background + ')',
    align: 'center',
    color: 'black',
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '90px',
    paddingTop:'100px'
}
  
  
  const navbarStyle = {
    height: '100px',
  }
  
  const navbarTextStyle = {
    color: 'black',
    marginRight: '12px',
    alignText: 'center'
  }

  const titleStyle = {
    marginTop:'32px'
  }
export default Portfolio;