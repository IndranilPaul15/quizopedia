import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { StrictMode } from 'react'
import './index.css'
import './App.css';
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter  >
      <App />
    </HashRouter >
  </StrictMode>,
)
