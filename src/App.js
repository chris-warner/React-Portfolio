import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Portfolio from './components/Pages/Portfolio/portfolio';
import About from './components/Pages/About/about';
import Home from './components/Pages/Home/home';
import './App.css';

function App() {
  return (
    <HashRouter basename='/'>
   <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/index" component={Home} />
    <Route exact path="/#" component={Home} />
    <Route exact path="/portfolio" component={Portfolio} />
    <Route path="/about" component={About} />
   </div>
  </HashRouter>
  );
}

export default App;