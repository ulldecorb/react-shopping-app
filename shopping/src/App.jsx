// import React, { useState } from 'react';
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
  const [cart, setCart] = useState([
    // {
    //   ntf: '☠', id: '9', productName: 'death', category: 'human', stock: 1, price: 666, quanty: 8
    // }
  ]);

  const getCartList = () => {
    const { userCart } = User;
    const cartList = userCart.reduce(
      (arr, cur) => {
        const newProduct = Products.find((x) => x.id === cur.productId);
        newProduct.quanty = userCart.find((x) => x.productId === cur.productId).quanty;
        return [...arr, newProduct];
      },
      []
    );
    setCart(cartList);
    console.log(Products);
  };

  useEffect(() => {
    console.log(cart);
    getCartList();
    console.log(cart);
  }, []);

  const handleCliker = () => {
    const newCart = { ...user };
    newCart.cart.push({ productId: '9', quanty: 1 });
    setUser(newCart);

    getCartList();
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
