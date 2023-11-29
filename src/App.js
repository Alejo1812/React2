import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // para exportación por defecto
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <Navbar />
      <Cart />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
