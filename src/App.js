import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Portfolio from './components/Pages/Portfolio/portfolio';
import About from './components/Pages/About/about';
import Home from './components/Pages/Home/home';
import './App.css';

function App() {
  return (
    <Router>
      <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/about" component={About} />
            <Route component={Home} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;