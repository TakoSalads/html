// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-3 mt-auto border-top">
            <div className='container text-center'>
                <div className='row d-flex justify-content-center gap-2'>
                    {/* Branding */}
                    <div className='col-md-4 mb-3'>
                        <h5>Project-3</h5>
                        <p className='small'>Bringing the boom since 2025!</p>
                    </div>
                    {/* Navigation */}
                    <div className='col-md-4 mb-3'>
                        <h5>Follow us!</h5>
                        <a href="https://twitter.com" className="text-light me-2"><i className="bi bi-twitter"></i></a>
                        <a href="https://facebook.com" className="text-light me-2"><i className="bi bi-facebook"></i></a>
                        <a href="https://instagram.com" className="text-light"><i className="bi bi-instagram"></i></a>
                    </div>
                </div>
                {/* Copyright */}
                <div className='mt-3'>
                    <p className='small mb-0'>&copy; {new Date().getFullYear()} Project-3. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;