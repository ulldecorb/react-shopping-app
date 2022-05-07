import React, { useState, useEffect } from 'react';
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
import Detail from './components/detail';
import { Products, User } from './constants/products';

function App() {
  const [user, setUser] = useState(User);
  const getCart = () => {
    const { cart } = User;
    const cartId = cart.map((product) => product.productId);
    const checkCardId = (x) => cartId.filter((productId) => productId === x);
    const newCart = Products.filter((product) => product.id === checkCardId(product.id));
    return newCart;
  };

  const [cart, setcart] = useState(getCart());

  useEffect((setCart) => () => {
    setCart(getCart());
  }, [User]);

  const handleCliker = () => {
    const newCart = { ...user };
    newCart.cart.push({ productId: '9', quanty: 1 });
    setUser(newCart);
    setcart(getCart());
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/gallery" element={<Gallery products={Products} />} />
        <Route path="/" element={<Home products={Products} handleCliker={handleCliker} />} />
        <Route path="/cart" element={<Cart cart={cart} user={User} />} />
        <Route path="/:productId" element={<Detail products={Products} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </Router>
  );
}

export default App;
