import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Foods from "./components/Foods";
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Foods />
      <Footer />
    </div>
  );
}

export default App;
