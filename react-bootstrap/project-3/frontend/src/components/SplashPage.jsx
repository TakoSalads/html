import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css"; // Ensure global styles are applied

const SplashPage = () => {
  const imgArray = ["/images/Banner01.png", "/images/Banner02.jpg"]; // Correct path from the public folder
  const [currentImage, setCurrentImage] = useState(imgArray[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = imgArray.indexOf(prevImage);
        return imgArray[(currentIndex + 1) % imgArray.length];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container fluid className="hero-section d-flex align-items-center vh-100 bg-dark text-white">
      <Row className="w-100 align-items-center">
        {/* Left Side: Text Content */}
        <Col md={6} className="text-center text-md-start p-5">
          <h1 className="display-4 fw-bold">
            Mobile Car Detailing Service that Comes to You
          </h1>
          <p className="lead">
            Revitalize Your Ride: Experience the Convenience and Safety of Our Mobile Car Detailing Services.
          </p>
          <Button variant="primary" size="lg" href="/pricing">
            Get Started
          </Button>
        </Col>

        {/* Right Side: Auto-Switching Image */}
        <Col md={6} className="d-none d-md-block">
          <div className="image-container">
            <img src={currentImage} alt="Car Detailing" className="img-fluid fade-in w-100 h-100 object-fit-cover" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SplashPage;
