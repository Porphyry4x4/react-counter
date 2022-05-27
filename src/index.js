import React from 'react';
import { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import  App from './App.js';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');


const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

reportWebVitals();
