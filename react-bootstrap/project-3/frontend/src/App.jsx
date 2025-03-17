/// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import BookNow from './pages/BookNow.jsx';
import Pricing from './pages/Pricing.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<BookNow/>} />
        <Route path="/pricing" element={<Pricing/>} />
      </Routes>
    </Router>
  );
};

export default App;

