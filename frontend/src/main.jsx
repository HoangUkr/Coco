import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App_alt from './App_alt.jsx'
const rootElement = document.getElementById('root'); 
const root = createRoot(rootElement); 
root.render( 
  <React.StrictMode> 
    <Router> 
      <App_alt /> 
    </Router> 
  </React.StrictMode> 
);