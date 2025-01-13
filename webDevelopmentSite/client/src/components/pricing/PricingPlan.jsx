import React from "react";
import "./PricingPlan.css";

function PricingPage() {
  return (
    <div className="pricing-container">
      <div className="pricing-card">
        <h2>Basic Plan</h2>
        <div className="price">$10</div>
        <div className="duration">Per Month</div>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
        <button>Choose Plan</button>
      </div>

      <div className="pricing-card">
        <h2>Pro Plan</h2>
        <div className="price">$25</div>
        <div className="duration">Per Month</div>
        <ul>
          <li>Feature A</li>
          <li>Feature B</li>
          <li>Feature C</li>
        </ul>
        <button>Choose Plan</button>
      </div>

      <div className="pricing-card">
        <h2>Premium Plan</h2>
        <div className="price">$50</div>
        <div className="duration">Per Month</div>
        <ul>
          <li>All Features</li>
          <li>Priority Support</li>
          <li>Custom Solutions</li>
        </ul>
        <button>Choose Plan</button>
      </div>
    </div>
  );
}

export default PricingPage;
