// src/components/ThreeBox&Image.jsx

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css"; 

const CarDetailingSections = () => {
    const sections = [
        {
            textFirst: true,
            image: '/images/Banner01.png',
            heading: 'Mobile Car Detailing Service that Comes to You',
            description: 'Revitalize Your Ride: Experience the Convenience and Safety of Our Mobile Car Detailing Services.',
        },
        {
            textFirst: false,
            image: '/images/Banner02.jpg',
            heading: 'Premium Quality Products for a Showroom Shine',
            description: 'We use top-tier cleaning products to ensure your vehicle looks its absolute best.',
        },
        {
            textFirst: true,
            image: '/images/Banner03.JPG',
            heading: 'Convenient, Affordable, and Reliable',
            description: 'Book our mobile car detailing service at a time and place that suits you best.',
        }
    ];

    return (
        <Container fluid>
            {sections.map((section, index) => (
                <Row key={index} className="d-flex align-items-center" style={{ height: '50vh', backgroundColor: 'SlateGrey', color: 'white' }}>
                    {section.textFirst && (
                        <Col md={6} className="text-center text-md-start p-3">
                            <h1 className="display-5 fw-bold">{section.heading}</h1>
                            <p className="lead">{section.description}</p>
                            <Button variant="primary" size="md" href="/pricing">Get Started</Button>
                        </Col>
                    )}
                    <Col md={6} className="d-none d-md-block">
                        <div className="image-container" style={{ height: '50vh', overflow: 'hidden', borderRadius: '20px' }}>
                            <img 
                                src={section.image} 
                                alt="Car Detailing" 
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}
                            />
                        </div>
                    </Col>
                    {!section.textFirst && (
                        <Col md={6} className="text-center text-md-start p-3">
                            <h1 className="display-5 fw-bold">{section.heading}</h1>
                            <p className="lead">{section.description}</p>
                            <Button variant="primary" size="md" href="/pricing">Get Started</Button>
                        </Col>
                    )}
                </Row>
            ))}
        </Container>
    );
};

export default CarDetailingSections;
