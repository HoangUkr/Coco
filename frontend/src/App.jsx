import './App.css'

import { useState, React } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home'; 
import Products from '../Pages/Products'; 
import LikeProduct from '../Pages/LikeProduct'; 
import Cart from '../Pages/Cart'; 
import Profile from '../Pages/Profile';
import Navigation from '../Components/Navigation'
import Login from '../Pages/Login';
import Registration from '../Pages/Registration';

function App() {
  debugger;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/products" element={<Products />} /> 
        <Route path="/liked-products" element={<LikeProduct />} /> 
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/signin" element={<Login setLoggedIn={setIsLoggedIn}/>} />
        <Route path="/register" element={<Registration isLoggedIn={isLoggedIn}/>} />
      </Routes>
    </div>
  )
}

export default App
