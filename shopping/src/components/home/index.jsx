import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../product-card';

function Home({ products }) {
  return (
    <main className="w-full pt-12 pb-12 bg-slate-600 flex flex-wrap">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}

Home.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired
};

export default Home;
