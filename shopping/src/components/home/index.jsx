import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../product-card';

function Home({ products, handleCliker }) {
  return (
    <main className="w-full h-screen pt-12 pb-12 bg-slate-600 flex flex-wrap justify-center content-start ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} handleCliker={handleCliker} />
      ))}
    </main>
  );
}

Home.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  handleCliker: PropTypes.func.isRequired
};

export default Home;
