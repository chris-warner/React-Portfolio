import React from 'react';
import NavBarComponent from '../../NavBar/NavBarComponent';
import FooterComponent from '../../Footer/FooterComponent';
import me from '../../../assets/img/me.png';
import './home.css';

function Home() {
  return (
    <div>

      <NavBarComponent />
      <div class="container d-flex align-items-center flex-column">
        <br></br>
        <img class="masthead-avatar mb-5" src={me} alt="" />
        <h1 class="masthead-heading text-uppercase mb-0">Chris Warner</h1>
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>

        <p class="masthead-subheading font-weight-light mb-0">Chris Warner - Web Designer - Full Stack Development</p>
        <p style={centerText}> My name is Chris Warner. I am a Full Stack Developer as well and a graduate of Columbia University. I have a strong commitment to teamwork and highly motivated to help others succeed. I started programming c# in the 7th grade and worked in the computer repair industry. I am also a musician and have worked on ambitious music productions and indie films. I am Highly creative in regards to problem-solving and innovation development, and I have taken my creativity and applied it to my programming.
    My skills include HTML5, CSS, M.E.R.N development stack, MySQL, MongoDB, React, JavaScript, HandleBars, MVC, as well as the ability to learn new languages quickly. During my studies, I have developed an app that generates a personalized investing strategy (mindstock) and another that allows you find top notch restaurants (ZipCrunch). For my final project I developed a platform that allows you to rent dogs from local shelter’s.</p><br></br><br></br><br></br>
        {/* <Button style={btnStyle}>Portfolio</Button> */}
      </div>
      <FooterComponent />
    </div>

  );
}

const btnStyle = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  margin: '-20px -50px',
  position: 'relative',
  top: '50%',
  left: '50%',
  alignText: 'center'

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
  height: '500px',
  // backgroundImage: 'url(' + background + ')',
  backgroundSize: 'cover',
  align: 'center',
  backgroundColor: 'white',
  //backgroundImage: 'url(' + jumbotronBackground + ')'
}


const navbarTextStyle = {
  color: 'black',
  marginRight: '12px',
  alignText: 'center'
}
export default Home;