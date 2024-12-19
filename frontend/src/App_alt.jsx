/* React Modules */
import { useState, React } from 'react';
import { Route, Routes } from 'react-router-dom';

/* Component */
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

/* Pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import AddProduct from "./pages/AddProduct";
import ViewOrder from "./pages/ViewOrder";
import Registration from "./pages/Registration";
import Page404 from "./pages/Page404";

function App_alt() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Navigation />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/service" element={<Service />} /> 
        <Route path="/menu" element={<Menu />} /> 
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/login" element={<Login setLoggedIn={setIsLoggedIn} />} /> 
        <Route path="/registration" element={<Registration />} /> 
        <Route path="/addproduct" element={<AddProduct />} /> 
        <Route path="/vieworder" element={<ViewOrder />} /> 
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App_alt;
