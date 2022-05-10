import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../product-card';
import Total from '../total';

function Cart({ cart, handleToggleFavorites, handleQuanty }) {
  function getNumber(event) {
    console.log(parseInt(event.target.value, 10));
    const prop = { id: 'product.id', quanty: parseInt(event.target.value, 10) };
    handleQuanty(prop);
  }

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

          <input
            placeHolder="0"
            type="number"
            id="quantity"
            name="quantity"
            min="0"
            max={product.stock}
            onChange={getNumber}
          />
        </article>
      ))}
      <Total cart={cart} />
    </main>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleToggleFavorites: PropTypes.func.isRequired,
  handleQuanty: PropTypes.func.isRequired
  // user: PropTypes.shape({
  //   userName: PropTypes.string.isRequired,
  //   userCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  //   favoritesId: PropTypes.arrayOf(PropTypes.string).isRequired
  // }).isRequired
};

export default Cart;
