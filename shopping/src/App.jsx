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
  const [user, setUser] = useState(User);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const getCartList = () => {
    const { userCart } = User;
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

  const listById = () => {
    const { favoritesId } = User;
    const favoritesIdList = favoritesId.reduce(
      (arr, cur) => {
        const newProduct = Products.find((x) => x.id === cur);
        return [...arr, newProduct];
      },
      []
    );
    console.log('favoritesIdList : ', favoritesIdList);
    setFavorites(favoritesIdList);
  };

  useEffect(() => {
    getCartList();
    listById();
    console.log('cart : ', cart);
    console.log('Products : ', Products);
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
        <Route path="/favorites" element={<Favorites favorites={favorites} user={User} />} />
        <Route path="/:productId" element={<Detail products={Products} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
