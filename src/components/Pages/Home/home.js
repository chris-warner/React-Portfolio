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
I’m a Full Stack Developer with a strong background in React, Next.js, Vue, and modern web technologies. I’ve led development projects at ConcentricLife and Accenture Song, working across front-end, back-end, and everything in between. My experience includes building full-scale websites, email campaigns, and interactive banner ads, along with mentoring junior developers and collaborating with cross-functional teams.
<br></br><br></br>
I’ve worked with tools like AWS, WordPress, MySQL, MongoDB, Node.js, AEM, and Tailwind, and I’m comfortable exporting assets from Figma, Photoshop, and Sketch for seamless integration into projects. I focus on clean, efficient code and building solutions that help teams move faster and deliver great work.                    </div>
                </div>
            </div>
            <FooterComponent/>
        </div>
    );
}

export default Home;
