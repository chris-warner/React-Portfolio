import React from 'react';
import { Jumbotron, Navbar, NavbarBrand, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Portfolio from './components/portfolio';
import About from './components/about';
import Home from './components/home';
import './App.css';

function App() {
  return (
    <HashRouter basename='/'>
   <div>
    <ul>
     <li><Link to="/">Home</Link></li>
     <li><Link to="/portfolio">About</Link></li>
    </ul>
    <hr />
   </div>
  </HashRouter>
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
