/* React Modules */
import { useState, React, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import api from './api';

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
import { ACCESS_TOKEN, REFRESH_TOKEN, AUTO_LOGOUT_TIME } from './constants';

function App_alt() {
  // Declare state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    auth().catch(() => setIsLoggedIn(false));

    // Inactivity timer
    const handleActivity = () => {
      clearTimeout(window.inactivityTimer);
      window.inactivityTimer = setTimeout(() => {
        localStorage.clear();
        setIsLoggedIn(false);
      }, AUTO_LOGOUT_TIME);
    };

    // Add event to handle activity
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keypress', handleActivity);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keypress', handleActivity);
    };
  }, []);

  // Logout
  function Logout(){
    localStorage.clear();
    return <Navigate to="/"></Navigate>
  }

  // Refresh the token
  const refreshToken = async() => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try{
      const res = await api.post("/api/token/refresh/", {
        refresh: refreshToken
      });
      if(res.status === 200){
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        setIsLoggedIn(true);
      }
      else{
        setIsLoggedIn(false);
      }
    }
    catch(error){
      console.log(error);
      setIsLoggedIn(false);
    }
  };

  // Check the current user role
  const checkUserRole = async() => {
    try{
      const result = await api.get('/api/check_user_role/', 
        {}
      );
      return result.data.is_admin;
    }
    catch(error) {
      console.error('Error checking user role: ', error);
      return false;
    }
  };

  // Authorisation
  const auth = async() => {
    debugger;
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token){
      setIsLoggedIn(false);
      return;
    }
    const decoded = jwtDecode(token);
    const tokenExpiration = decoded.exp;
    const now = Date.now()/1000;
    if(tokenExpiration < now) {
      const refresh = await refreshToken();
      if(refresh){
        const isAdmin = await checkUserRole();
        setIsAdmin(isAdmin);
        setIsLoggedIn(true);
      }
      else{
        setIsLoggedIn(true);
      }
    }
    else{
      const isAdmin = await checkUserRole();
      setIsAdmin(isAdmin);
      setIsLoggedIn(true);
    }
  }
  return (
    <div>
      <Navigation isLoggedIn = { isLoggedIn } isAdmin = { isAdmin }/>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/service" element={<Service />} /> 
        <Route path="/menu" element={<Menu />} /> 
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/login" element={<Login setLoggedIn={setIsLoggedIn} />} /> 
        <Route path="/logout" element={<Logout />} /> 
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
