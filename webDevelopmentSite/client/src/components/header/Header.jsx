import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header" id="myHeader">
        <Link to="/" className="logo">
          MYLOGO
        </Link>
        <div className="header-right">
          <Link to="/">Home</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/about">About Us</Link>
          <Link to="/book-now">Book Now!</Link>
          <a href="tel:+16132407469">+1 613 240-7469</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
