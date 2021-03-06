import React from 'react';
import NavBarComponent from '../../NavBar/NavBarComponent';
import FooterComponent from '../../Footer/FooterComponent';
import me from '../../../assets/images/me.png';
import './home.css';

function Home() {
    return (
        <div>
            <NavBarComponent/>
            <div className="container d-flex align-items-center flex-column">
                <br></br>
                <img className="masthead-avatar mb-5"
                    src={me}
                    alt=""/>
                <h1 className="masthead-heading text-uppercase mb-0">Chris Warner</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0">Chris Warner - Web Designer - Full Stack Development</p>
                <p style={centerText}>
                    My name is Chris Warner. I am a Full Stack Developer as well and a graduate of Columbia University. I have a strong commitment to teamwork and highly motivated to help others succeed. I started programming c# in the 7th grade and worked in the computer repair industry. I am also a musician and have worked on ambitious music productions and indie films. I am Highly creative in regards to problem-solving and innovation development, and I have taken my creativity and applied it to my programming.
                        My skills include HTML5, CSS, M.E.R.N development stack, MySQL, MongoDB, React, JavaScript, HandleBars, MVC, as well as the ability to learn new languages quickly. During my studies, I have developed an app that generates a personalized investing strategy (mindstock) and another that allows you find top notch restaurants (ZipCrunch). For my final project I developed a platform that allows you to rent dogs from local shelter’s.</p>
                <br></br>
                <br></br>
                <br></br>
                {/* <Button style={btnStyle}>Portfolio</Button> */} </div>
            <FooterComponent/>
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

export default Home;
