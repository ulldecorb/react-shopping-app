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
import Favorites from './components/favorites';
import NotFound from './components/not-found';
import Detail from './components/detail';
import { Products, User } from './constants/products';

function App() {
  const [user, setUser] = useState({ ...User });
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  const getCartList = () => {
    const { userCart } = user;
    const cartList = userCart.reduce(
      (arr, cur) => {
        let newProduct = Products.find((x) => x.id === cur.productId);
        newProduct = {
          ...newProduct,
          quanty: userCart.find((x) => x.productId === cur.productId).quanty
        };
        return [...arr, newProduct];
      },
      []
    );
    setCart(cartList);
  };

  const getfavoriteList = () => {
    const { favoritesId } = user;
    const favoritesIdList = favoritesId.reduce(
      (arr, cur) => {
        const newProduct = Products.find((x) => x.id === cur);
        return [...arr, newProduct];
      },
      []
    );
    setFavorites(favoritesIdList);
  };

  useEffect(() => {
    getCartList();
    getfavoriteList();
  }, [user]);

  const handleToggleFavorites = (id) => {
    const newUser = { ...user };
    const { favoritesId } = newUser;
    const newFavorites = favoritesId.some((x) => x === id)
      ? favoritesId.filter((x) => x !== id)
      : [...favoritesId, id];
    newUser.favoritesId = newFavorites;
    setUser(newUser);
  };

  const handleQuanty = (prop) => {
    const { id, newQuanty } = prop;
    const newUser = { ...user };
    const { userCart } = newUser;
    let finalUser = {};

    if (newQuanty === 0) {
      const newUserCart = userCart.filter((x) => x.productId !== id);
      finalUser = { ...newUser, userCart: newUserCart };
    } else {
      const newUserCart = userCart.map((x) => (x.productId === id
        ? { ...x, quanty: newQuanty }
        : x));
      finalUser = { ...newUser, userCart: newUserCart };
    }
    setUser(finalUser);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/gallery" element={<Gallery products={products} />} />
        <Route path="/" element={<Home products={products} handleToggleFavorites={handleToggleFavorites} />} />
        <Route path="/cart" element={<Cart cart={cart} handleToggleFavorites={handleToggleFavorites} handleQuanty={handleQuanty} />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} handleToggleFavorites={handleToggleFavorites} />} />
        <Route path="/:productId" element={<Detail products={Products} handleQuanty={handleQuanty} cart={cart} />} />
        <Route path="/error" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
