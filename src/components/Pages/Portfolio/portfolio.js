import React from 'react';
import NavBarComponent from '../../NavBar/NavBarComponent';
import VerticleTimeline from '../../VerticleTimeline/VerticleTimeline';
import FooterComponent from '../../Footer/FooterComponent';
import ViewToggle from '../../ViewToggle/ViewToggleComponent';
import './portfolio.css';

function Portfolio() {
    return (     
    <div>
      <NavBarComponent />
      <center><h1 style={titleStyle}>Projects and Development</h1></center>
      <ViewToggle />
      <div className="portfolio-timeline-container">
        <VerticleTimeline />
      </div>
      <FooterComponent />
    </div>
  );
}

  const titleStyle = {
    marginTop:'32px'
  }
  
export default Portfolio;