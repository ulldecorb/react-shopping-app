import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../product-card';

function Favorites({ favorites, handleCliker }) {
  return (
    <main>
      <h2>Favorites</h2>
      {favorites.map((product) => (
        <ProductCard key={product.id} product={product} handleCliker={handleCliker} />
      ))}

    </main>
  );
}

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.obj
  ).isRequired,
  handleCliker: PropTypes.func.isRequired
};

export default Favorites;
