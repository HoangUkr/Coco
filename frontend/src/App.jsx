import './App.css'

import { useState, React } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home'; 
import Products from '../Pages/Products'; 
import LikeProduct from '../Pages/LikeProduct'; 
import Cart from '../Pages/Cart'; 
import Profile from '../Pages/Profile';
import Navigation from '../Components/Navigation'


function App() {

  return (
    <div>
      <Navigation />
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/products" element={<Products />} /> 
        <Route path="/liked-products" element={<LikeProduct />} /> 
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/profile" element={<Profile />} /> 
      </Routes>
    </div>
  )
}

export default App
