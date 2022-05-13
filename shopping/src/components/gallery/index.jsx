import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../product-card';

function Gallery({ products, handleToggleFavorites, checkFavorites }) {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const getCategoryProducts = () => products.filter((product) => product.category === 'animal');

  useEffect(() => {
    setCategoryProducts(getCategoryProducts());
  }, []);

  return (
    <main className="pt-20">
      <h2 className="mt-20">hola</h2>
      <ul>
        {categoryProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleToggleFavorites={handleToggleFavorites}
            checkFavorites={checkFavorites}
          />
        ))}
      </ul>
    </main>
  );
}

Gallery.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  checkFavorites: PropTypes.func.isRequired,
  handleToggleFavorites: PropTypes.func.isRequired
};

export default Gallery;
