import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import ProductCard from '../product-card';

function Gallery({ products, handleToggleFavorites, checkFavorites }) {
  const gallery = useParams();

  const categoryProducts = products.filter((product) => product.category === gallery.gallery);

  return (
    <main className="bg-slate-600 pt-12 w-full h-screen flex flex-wrap justify-center content-start ">
      <h2
        className="w-full text-center text-4xl
      text-lime-400 font-koulen flex flex-wrap justify-center content-start "
        data-testid="galleryTitle"
      >
        {gallery.gallery}
      </h2>
      <section
        data-testid="galleryListBox"
        className="flex flex-wrap justify-center content-start "
      >
        {categoryProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleToggleFavorites={handleToggleFavorites}
            checkFavorites={checkFavorites}
          />
        ))}
      </section>
    </main>
  );
}

Gallery.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  checkFavorites: PropTypes.func.isRequired,
  handleToggleFavorites: PropTypes.func.isRequired
};

export default Gallery;
