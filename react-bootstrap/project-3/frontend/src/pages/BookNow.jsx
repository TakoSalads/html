import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../components/Header';
import ContactUs from '../components/contactus';
import Footer from '../components/Footer';

const BookNow = () => {
   return (
    <>
    <Header />
    <ContactUs />
    <Footer />
    </>
   );
};

export default BookNow;