import React from 'react';
import { Jumbotron, Navbar, NavbarBrand, Nav } from 'react-bootstrap';
import jumbotronBackground from '../../src/jumbotron.jpg';
import NavBarComponent from './NavBarComponent';

function Home() {
  return (
    <div>
      <NavBarComponent />
      <Jumbotron style={jumbotronStyle}>
        <h1 style={centerText}>Chris Warner</h1>
        <p style={centerText}> My name is Chris Warner. I am a Full Stack Developer as well and a graduate of Columbia University. I have a strong commitment to teamwork and highly motivated to help others succeed. I started programming c# in the 7th grade and worked in the computer repair industry. I am also a musician and have worked on ambitious music productions and indie films. I am Highly creative in regards to problem-solving and innovation development, and I have taken my creativity and applied it to my programming.
    My skills include HTML5, CSS, M.E.R.N development stack, MySQL, MongoDB, React, JavaScript, HandleBars, MVC, as well as the ability to learn new languages quickly. During my studies, I have developed an app that generates a personalized investing strategy (mindstock) and another that allows you find top notch restaurants (ZipCrunch). For my final project I developed a platform that allows you to rent dogs from local shelter’s.</p>
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