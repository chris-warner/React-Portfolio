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
                <div className="home-hero">
                    <img src={me} alt="Chris Warner" className="home-avatar" />
                    <div className="home-title">CHRIS WARNER</div>
                    <div className="home-subtitle">Web Designer &ndash; Full Stack Development</div>
                    <div className="home-description">
                        My name is Chris Warner. I am a Full Stack Developer as well as a graduate of Columbia University. I have a strong commitment to teamwork and highly motivated to help others succeed. I started programming C# in the 7th grade and worked in the computer repair industry. I am also a musician and have worked on ambitious music productions and indie films. I am highly creative in regards to problem-solving and innovation development, and I have taken my creativity and applied it to my programming. My skills include HTML5, CSS, M.E.R.N development stack, MySQL, MongoDB, React, JavaScript, HandleBars, MVC, as well as the ability to learn new languages quickly. During my studies, I have developed an app that generates a personalized investing strategy (Mindstock) and another that allows you to find top notch restaurants (ZipCrunch). For my final project I developed a platform that allows you to rent dogs from local shelters.
                    </div>
                </div>
            </div>
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
