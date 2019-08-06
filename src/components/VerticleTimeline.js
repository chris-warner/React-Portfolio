import React from 'react';
import { Jumbotron, Navbar, NavbarBrand, Nav,NavDropdown } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement,WorkIcon }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function VerticleTimeline() {
    return (
    <div>
<center><h1>Portfolio</h1></center>
<VerticalTimeline>

<VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="May 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Trivia Game</h3>
    <h4 className="vertical-timeline-element-subtitle"> Technologies used in this project: HTML, CSS, javascript and JQuery.</h4>
    <p>Technologies used in this project: html, css, javascript and jquery. You have 30 seconds to answer the trivia questions. When the timer counts down to zero, you will be presented with the score displaying how many questions you answered correctly, how many you answered incorrectly and how many questions you didn't answer. </p>
         <a href="https://github.com/chris-warner/TriviaGame">GitHub </a><a href="https://chris-warner.github.io/TriviaGame/">Demo</a>
  </VerticalTimelineElement>

<VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="May 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">GifTastic</h3>
    <h4 className="vertical-timeline-element-subtitle"> Technologies used in this project: HTML, CSS, Giphy API, javascript and JQuery.</h4>
    <p>This program displays animal gifs based on the selected animal button. If the animal you would like to search for doesn't exist, type in the name of the animal in the text field and hit submit. This will add the animal to the list of animal buttons. Click the buttons search giphy for animated images! </p>
         <a href="https://github.com/chris-warner/GifTastic">GitHub </a><a href="https://chris-warner.github.io/GifTastic/">Demo</a>
  </VerticalTimelineElement>

<VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="May 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">New York Times Search</h3>
    <h4 className="vertical-timeline-element-subtitle"> Technologies used in this project: HTML, CSS, Yelp API, New York City Department of Health API, Google Maps API, javascript and JQuery.</h4>
    <p>This project utilized the New York Times API to search there archive. You can a start and date to narrow down your search results.</p>
         <a href="https://github.com/chris-warner/New-York-Times-Search/">GitHub </a><a href="https://chris-warner.github.io/New-York-Times-Search/">Demo</a>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Feburary 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">ZipCrunch</h3>
    <h4 className="vertical-timeline-element-subtitle">Technologies used in this project: html, css, Yelp API, New York City Department of Health API, Google Maps API, javascript and JQuery.</h4>
    <p>
    Technologies used in this project: html, css, Yelp API, New York City Department of Health API, Google Maps API, javascript and jquery. ZipCrunch consists of a fully functional application that specializes in the process of finding restaurants with the additional feature of rating and review. The eclectic system that is utilized is initiated with a maps api and another review system that remains to be determined. Our product is a proud conglomerate of swift performance and mobile friendly screens. The benefit of a nutritious meal is just a click away! Live Demo <a href="https://chris-warner.github.io/ZipCrunch/">GitHub </a><a href="https://chris-warner.github.io/ZipCru…">Demo</a></p>
  </VerticalTimelineElement>

  
</VerticalTimeline>
    </div>
    );

}

export default VerticleTimeline;