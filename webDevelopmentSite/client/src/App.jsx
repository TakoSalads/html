import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/frontspread/HeroSection";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ContactPage from "./components/contact page/ContactPage";
import PricingPlans from "./components/pricing/PricingPlan";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pricing" element={<PricingPlans />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

