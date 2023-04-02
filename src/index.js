import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './classes/index.css'
import favicon from './IMAGES/icons8-morty-smith-32.png';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <link rel="icon" type="image/png" href={favicon} />
    <App />
  </React.StrictMode>
);


