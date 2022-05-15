import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import ProductCard from '../product-card';

function Gallery({ products, handleToggleFavorites, checkFavorites }) {
  const gallery = useParams();

  const categoryProducts = products.filter((product) => product.category === gallery.gallery);
  console.log(categoryProducts);
  console.log(gallery.gallery);

  return (
    <main className="bg-slate-600 pt-12 w-full h-screen flex flex-wrap justify-center content-start ">
      <h2 className="w-full text-center text-4xl
      text-lime-400 font-koulen flex flex-wrap justify-center content-start "
      >
        {gallery.gallery}
      </h2>
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
