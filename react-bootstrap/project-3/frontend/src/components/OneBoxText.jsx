import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const OneBoxText = () => {
    return (
        <Container fluid className="hero-section d-flex align-items-center vh-75 bg-dark text-white">
        <Row className="w-100 align-items-center" >
          {/* Left Side: Text Content */}
          <Col md={6} className="text-center text-md-start p-5">
            <h1 className="display-5 py-4">
              We aim for excellence in all aspects.
            </h1>
            <p className="lead">
              Experience first class service and Convenience of creating random projects! 
            </p>
            <p className='lead'>
              The best projects start with projects, and as more projects are crafted the better the projects get
            </p>
          </Col>
  
          {/* Right Side: Auto-Switching Image */}
          <Col md={6} className="d-none d-md-block">
            <div className="image-container">
              <img src='/images/Banner04.jpg' alt="Car Detailing" className="img-fluid fade-in w-100 h-75 object-fit-cover" />
            </div>
          </Col>
        </Row>
      </Container>
    );
};

export default OneBoxText;