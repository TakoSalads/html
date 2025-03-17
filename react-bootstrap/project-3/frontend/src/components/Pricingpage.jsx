import React from 'react';
import '../styles/pricingpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function PricingPage() {
  return (
    <div className="container mt-5 py-5">
      <h2 className="text-center mb-4">Choose the Plan that’s Right for You</h2>

      <div className="row justify-content-center">
        {/* Basic Plan */}
        <div className="col-md-4 mb-4">
          <div className="card pricing-card shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-center">Basic</h3>
              <h4 className="price text-center">
                <span className="currency">$</span> 19.99
                <span className="per-month">/month</span>
              </h4>
              <ul className="list-unstyled">
                <li>10 Users</li>
                <li>5GB Storage</li>
                <li>Email Support</li>
                <li>Basic Features</li>
              </ul>
              <div className="text-center">
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>

        {/* Standard Plan */}
        <div className="col-md-4 mb-4">
          <div className="card pricing-card shadow-lg highlighted">
            <div className="card-body">
              <h3 className="card-title text-center">Standard</h3>
              <h4 className="price text-center">
                <span className="currency">$</span> 49.99
                <span className="per-month">/month</span>
              </h4>
              <ul className="list-unstyled">
                <li>50 Users</li>
                <li>20GB Storage</li>
                <li>Priority Support</li>
                <li>Advanced Features</li>
              </ul>
              <div className="text-center">
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="col-md-4 mb-4">
          <div className="card pricing-card shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-center">Premium</h3>
              <h4 className="price text-center">
                <span className="currency">$</span> 99.99
                <span className="per-month">/month</span>
              </h4>
              <ul className="list-unstyled">
                <li>Unlimited Users</li>
                <li>100GB Storage</li>
                <li>24/7 Support</li>
                <li>All Features</li>
              </ul>
              <div className="text-center">
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
