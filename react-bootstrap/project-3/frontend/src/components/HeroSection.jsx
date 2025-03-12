// src/componets/HeroSection.jsx
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const HeroSection = () => {
    return (
        <div className='bg-image d-flex flex-column align-items-center justify-content-center text-white' style={{
            backgroundImage: "url('/images/01.jpg')",
            backgroundSize:"cover",
            height: "100vh"
        }}>
            <h1 className='display-4'>Welcome to Project-3<br /></h1>
            <h2 className='lead'>These are some basic modular react components</h2>
            <div className='text-center mt-3'>
                <Button variant ="primary" size='lg' href='/null'>Get Started</Button>
            </div>
        </div>
    );
}

export default HeroSection;