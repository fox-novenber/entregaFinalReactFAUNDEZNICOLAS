import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart';
import React from 'react';
import CartProvider from './context/CartContext';



function App() {
  return (
    <>
      <BrowserRouter>
          <CartProvider>
          <NavBar/>
            <Routes>
              <Route path='/' element = {<ItemListContainer/>} ></Route>
              <Route path='/categoria/:categoriaId' element = {<ItemListContainer/>} ></Route>
              <Route path='/cart' element = {<Cart/>} ></Route>
              <Route path='/detalle/:detalleId' element = {<ItemDetailContainer/>} ></Route>
            </Routes>
            </CartProvider>
      </BrowserRouter>  
    </>

  );
}

export default App;
