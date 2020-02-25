import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import Portfolio from './components/Pages/Portfolio/portfolio';
import About from './components/Pages/About/about';
import Home from './components/Pages/Home/home';
import './App.css';

function App() {
  return (
    <BrowserRouter basename='/'>
   <div>
    <Route path="/" component={Home} exact />
    <Route path="/portfolio" component={Portfolio} exact/>
    <Route path="/about" component={About}exact />
   </div>
  </BrowserRouter>
  );
}

export default App;