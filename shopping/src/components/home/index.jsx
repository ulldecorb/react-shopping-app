import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCard from '../product-card';

function Home({ products, handleToggleFavorites }) {
  return (
    <main className="w-full h-full pt-12 pb-12 bg-slate-600 flex flex-wrap justify-center content-start ">
      {products.map((product) => (
        <Link to={`/${product.id}`}>
          <ProductCard
            key={product.id}
            product={product}
            handleToggleFavorites={handleToggleFavorites}
          />
        </Link>
      ))}
    </main>
  );
}

Home.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  handleToggleFavorites: PropTypes.func.isRequired
};

export default Home;
