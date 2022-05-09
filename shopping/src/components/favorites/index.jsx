import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../product-card';

function Favorites({ favorites, handleCliker }) {
  return (
    <main className="bg-yellow-600 mt-12 w-full h-screen">
      <h2 className="w-full text-center text-4xl text-lime-400 font-koulen flex flex-wrap justify-center content-start ">
        Favorites
      </h2>
      {favorites.map((product) => (
        <ProductCard key={product.id} product={product} handleCliker={handleCliker} />
      ))}
    </main>
  );
}

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  handleCliker: PropTypes.func.isRequired
};

export default Favorites;
