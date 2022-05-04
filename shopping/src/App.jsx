import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Header } from './components/header';
import Home from './components/home';
import Gallery from './components/gallery';
import Cart from './components/cart';
import NotFound from './components/not-found';
import { Products } from './constants/products';

// import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/" element={<Home products={Products} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </Router>
  );
}

export default App;
