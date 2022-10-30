import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import { CartProvider } from './context/CartContext';

//import "./utils/bdd.js"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>   
      <App/>
    </CartProvider>
);

