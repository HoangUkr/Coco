/* React Modules */
import React from "react";
import { Route, Routes } from 'react-router-dom';

/* Component */
import Navigation from "./components/Navigation";

/* Pages */
import Home from "./pages/Home";

function App_alt() {
  return (
    <div>
      <Navigation />
      <Routes> 
        <Route path="/" element={<Home />} /> 
      </Routes>
    </div>
  );
}

export default App_alt;
