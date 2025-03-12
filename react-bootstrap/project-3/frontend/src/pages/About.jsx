import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import OneBoxText from '../components/OneBoxText'
import Footer from '../components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <>
    <Header />
    <OneBoxText />
    <Footer />
    </>
  );
};

export default About;
