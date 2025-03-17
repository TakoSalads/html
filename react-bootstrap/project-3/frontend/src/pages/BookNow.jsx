import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const BookNow = () => {
   return (
    <>
    <Header />
    <ContactForm />
    <Footer />
    </>
   );
};

export default BookNow;