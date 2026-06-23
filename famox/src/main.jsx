import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './i18n';
//import { initReactI18next } from "react-i18next";
import './styles/main.scss'; 

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


