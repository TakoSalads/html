// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-secondary fixed-top align-items-center text-light py-3 px-4 d-flex mt-auto">
      <h1 className='m-0 fw-bold'>React + Flask + Vite + Bootstrap</h1>

      {/* Right Side - Navigation */}
      <nav className='ms-auto'>
        <a className="text-light mx-3 text-decoration-none" href="/">Home</a>
        <a className="text-light mx-3 text-decoration-none" href="pricing">Pricing</a>
        <a className="text-light mx-3 text-decoration-none" href="about">About</a>
        <a className="text-light mx-3 text-decoration-none btn btn-primary" href="contact-us">Book Now</a> 
      </nav>
    </header>
  );
};

export default Header;