// src/pages/Home.jsx

import React from "react";
import "../App.css";
import Header from "../components/Header";
import Card from "../components/Card";
import DataTable from "../components/DataTable";
import Footer from "../components/Footer";
import SplashPage from "../components/SplashPage";
import MessageUs from "../components/MessageUs";
import ContactForm from "../components/MessageUsWText";
import HeroSection from "../components/HeroSection";
import ThreeBoxandImage from "../components/ThreeBox&Image";
import "bootstrap/dist/css/bootstrap.min.css";


const Home = () => {
    return (
        <>
        <Header />
        <HeroSection />
        <ThreeBoxandImage/>
        <SplashPage />
            <Card 
              title="Hello World" 
              text="This is a reusable Bootstrap card component." 
              btnText="Click Me" 
              btnType="primary" 
            />
        <MessageUs />
        <ContactForm />
        <DataTable />
        <Footer />
      </>
    );
}

export default Home;