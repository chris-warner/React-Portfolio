import React from 'react';
import { Jumbotron, Navbar, NavbarBrand, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Portfolio from './components/portfolio';
import About from './components/about';
import Home from './components/home';
import './App.css';

function App() {
  return (
    <div fluid bg="light">
      <h1>Website</h1>
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        </Router>
    </div>

  );
}

const centerText = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop:'50px',
  textAlign:'center'
}

const jumbotronStyle = {
  height: '400px',
  // backgroundImage: 'url(' + background + ')',
  backgroundSize: 'cover',
  align: 'center',
  color: 'white',
  backgroundColor:'silver'
}

const navbarStyle = {
  height: '100px',
}

const navbarTextStyle = {
  color: 'black',
  marginRight: '12px',
  alignText: 'center'
}
export default App;
