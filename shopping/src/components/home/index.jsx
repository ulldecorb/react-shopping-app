import React from 'react';
import PropTypes from 'prop-types';
import ProductDetail from '../product-card';

function Home({ products }) {
  return (
    <main className="mt-20">
      {products.map((product) => (
        <ProductDetail key={product.id} product={product} />
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
