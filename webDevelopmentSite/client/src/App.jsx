import React from "react";
import HeroSection from "./components/frontspread/HeroSection";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ContactPage from "./components/contact page/ContactPage";
import Gallery from "./components/gallery/Gallery";

function App() {
  return (
    <div>
      <Header />

      <main>
      <div className="App">
        <HeroSection />
      </div>

      <ContactPage />

      <Gallery />

      </main>

      <Footer />
    </div>
  );  
}

export default App;
