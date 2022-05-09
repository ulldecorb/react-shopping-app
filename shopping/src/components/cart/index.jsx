import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../product-card';

function Cart({ cart, handleToggleFavorites }) {
  console.log(cart);
  return (
    <main className="bg-yellow-600 pt-12 w-full h-screen flex flex-wrap justify-center content-start ">
      <h2 className="w-full text-center text-4xl text-lime-400 font-koulen flex flex-wrap justify-center content-start ">Cart</h2>
      {/* <h3>{user.userName}</h3> */}
      {cart.map((product) => (
        <article key={product.id}>
          <ProductCard product={product} handleToggleFavorites={handleToggleFavorites} />
          <p>
            Quanty:
            {' '}
            {/* {user.cart[0].quanty} */}
            {product.quanty}
          </p>
        </article>
      ))}

    </main>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleToggleFavorites: PropTypes.func.isRequired
  // user: PropTypes.shape({
  //   userName: PropTypes.string.isRequired,
  //   userCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  //   favoritesId: PropTypes.arrayOf(PropTypes.string).isRequired
  // }).isRequired
};

export default Cart;
