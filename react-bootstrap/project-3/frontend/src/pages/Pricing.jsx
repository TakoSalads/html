import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import PricingPage from "../components/Pricingpage";
import Footer from "../components/Footer";


const Pricing = () => {
    return (
        <>
        <Header />
        <PricingPage />
        <Footer />
        </>
    )
}

export default Pricing;