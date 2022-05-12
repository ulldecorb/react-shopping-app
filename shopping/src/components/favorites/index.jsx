import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../product-card';

function Favorites({ favorites, handleToggleFavorites, checkFavorites }) {
  return (
    <main className="bg-yellow-600 pt-12 w-full h-screen flex flex-wrap justify-center content-start ">
      <h2 className="w-full text-center text-4xl
      text-lime-400 font-koulen flex flex-wrap justify-center content-start "
      >
        Favorites
      </h2>
      {favorites.length > 0
        ? favorites.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleToggleFavorites={handleToggleFavorites}
            checkFavorites={checkFavorites}
          />
        ))
        : <h2 className="mt-40 text-4xl text-orange-400">No Favorites Products yet</h2>}
    </main>
  );
}

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  handleToggleFavorites: PropTypes.func.isRequired,
  checkFavorites: PropTypes.func.isRequired
};

export default Favorites;
