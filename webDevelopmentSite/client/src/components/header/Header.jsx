import React from "react";
import "./Header.css";


function Header() {
    return (
    <header>
    <div class="header" id="myHeader">
      <a href="index.html" class="logo">MYLOGO</a>
      <div class="header-right">
        <a href="index.html">Home</a>
        <a href="pricing.html">Pricing</a>
        <a href="aboutus.html">About us</a>
        <a href="book-now">Book Now!</a>
        <a href="contactus.html">+1 613 240-7469</a>
      </div>
    </div>
  </header>
  );
}

export default Header;