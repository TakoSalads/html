import React from "react";
import "./HeroSection.css"; // Import custom styles

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="content">
        <p className="tagline">FEELING LOST IN THE ONLINE WORLD?</p>
        <h1 className="title">STRUGGLING TO GROW YOUR BUSINESS ONLINE?</h1>
        <p className="description">
          Your business deserves a marketing team that understands your needs. We help businesses like yours attract more customers and boost sales with powerful marketing strategies.
        </p>
        <a href="#consultation" className="cta-button">
          SCHEDULE YOUR FREE CONSULTATION TODAY! ✈
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
