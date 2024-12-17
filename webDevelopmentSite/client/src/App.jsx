import React from "react";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <div>
      <Header />
      <main>
      <div className="App">
        <HeroSection />
      </div>
      <ContactPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
