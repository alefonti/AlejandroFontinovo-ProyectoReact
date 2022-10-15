import '../styles/App.css';
import Header from './content/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
import Navbar from './content/Navbar';
import Footer from './content/Footer';
import ItemListContainer from './content/ItemListContainer';
import ItemList from './content/ItemList';
import Carrito from './content/Carrito';
import Contacto from './content/Contacto';
import About from './content/About';
import Categoria from './content/Categoria';

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
          <Route path="/carrito" element= {<Carrito/>} />
        </Routes>
        <Footer/> 
      </BrowserRouter>
    </>
  );
}

export default App;
