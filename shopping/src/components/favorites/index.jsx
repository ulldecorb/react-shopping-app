import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../product-card';

function Favorites({ cart, handleCliker }) {
  return (
    <main>
      <h2>Favorites</h2>
      {cart.map((product) => (
        <ProductCard key={product.id} product={product} handleCliker={handleCliker} />
      ))}

    </main>
  );
}

Favorites.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.obj.isRequired).isRequired,
  handleCliker: PropTypes.func.isRequired
};

export default Favorites;
