import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Portfolio from './components/Pages/Portfolio/portfolio';
import Home from './components/Pages/Home/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;