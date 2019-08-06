import React from 'react';
import { Jumbotron, Navbar, NavbarBrand, Nav,NavDropdown } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement,WorkIcon }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '../assets/icons/html5/html5-original.svg'
import StarIcon from '../assets/icons/html5/html5-original.svg'


function VerticleTimeline() {
    return (
    <div>

<VerticalTimeline>
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