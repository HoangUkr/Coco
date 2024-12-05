/* React Modules */
import React from "react";
import { Route, Routes } from 'react-router-dom';

/* Component */
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

/* Pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";

function App_alt() {
  return (
    <div>
      <Navigation />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/service" element={<Service />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App_alt;
