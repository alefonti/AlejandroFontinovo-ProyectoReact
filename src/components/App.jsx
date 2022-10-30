import '../styles/App.css';
import Header from './content/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
import Navbar from './content/Navbar';
import Footer from './content/Footer';
import ItemListContainer from './content/ItemListContainer';
import ItemList from './content/ItemList';
import CartWidget from './content/CartWidget';
import Contacto from './content/Contacto';
import About from './content/About';
import Categoria from './content/Categoria';
import Checkout from './content/Checkout';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path="/" element= {<ItemListContainer/>} />
          <Route path="/producto/:id" element={<ItemList/>}/>
          <Route path="/categoria/:id" element={<Categoria/>}/>
          <Route path="/about" element= {<About/>} />
          <Route path="/contacto" element= {<Contacto/>} />
          <Route path="/carrito" element= {<CartWidget/>} />
          <Route path="/checkout" element= {<Checkout/>}/>
          <Route path="*" element= {<h1>Error 404</h1>}/>
        </Routes>
        <Footer/> 
      </BrowserRouter>
    </>
  );
}

export default App;
