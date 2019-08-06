import React from 'react';
import { Jumbotron, Navbar, NavbarBrand, Nav } from 'react-bootstrap';
import jumbotronBackground from '../../src/jumbotron.jpg';
import NavBarComponent from './NavBarComponent';

function Home() {
  return (
    <div>
      <header className="App-header">
        <NavBarComponent />
      </header>

      <Jumbotron style={jumbotronStyle}>
        <h1 style={centerText}>Chris Warner</h1>
        <p style={centerText}>Hello, my name is Christopher Warner. I am a web developer and designer from New York City.I am a full stack developer educated student currently studying at Columbia University. I have been exposed to programming since the 7th grade, having developed many creative projects.</p>
      </Jumbotron>

    </div>
  );
}

const centerText = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '50px',
  textAlign: 'center',
  color: 'black'
}

const jumbotronStyle = {
  height: '400px',
  // backgroundImage: 'url(' + background + ')',
  backgroundSize: 'cover',
  align: 'center',
  color: 'white',
  backgroundColor: 'silver',
  backgroundImage: 'url(' + jumbotronBackground + ')'
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