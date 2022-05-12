import React from 'react';
import PropTypes from 'prop-types';
import CartProductCard from '../cartProductCard';
import Total from '../total';

function Cart({
  cart, handleToggleFavorites, handleQuanty, checkFavorites
}) {
  return (
    <main className="bg-yellow-600 pt-12 w-full h-screen">
      <h2 className="w-full text-center text-4xl text-lime-400 font-koulen flex flex-wrap justify-center content-start ">Cart</h2>
      <section className="flex flex-wrap justify-center content-start ">

        {cart.length > 0
          ? cart.map((product) => (
            <CartProductCard
              key={product.id}
              product={product}
              handleToggleFavorites={handleToggleFavorites}
              checkFavorites={checkFavorites}
              handleQuanty={handleQuanty}
            />
          ))
          : (
            <h2 className="mt-40 text-4xl text-orange-400">No products on cart</h2>
          )}
      </section>
      <Total cart={cart} />
    </main>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleToggleFavorites: PropTypes.func.isRequired,
  handleQuanty: PropTypes.func.isRequired,
  checkFavorites: PropTypes.func.isRequired
  // user: PropTypes.shape({
  //   userName: PropTypes.string.isRequired,
  //   userCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  //   favoritesId: PropTypes.arrayOf(PropTypes.string).isRequired
  // }).isRequired
};

export default Cart;
