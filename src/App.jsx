import React from "react";
import Navbar from "./Components/Navbar";
import Hiro from "./Components/Hiro";
import Services from "./Components/Service";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hiro />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
