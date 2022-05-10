import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Gallery({ products }) {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const getCategoryProducts = () => products.filter((product) => product.category === 'flower');

  useEffect(() => {
    setCategoryProducts(getCategoryProducts());
  }, []);
  return (
    <main className="pt-20">
      <ul>
        {categoryProducts.map((product) => (
          <h2 key={product.id}>
            {product.ntf}
            {' '}
            {product.productName}
            {' '}
            {product.category}
          </h2>
        ))}
      </ul>
    </main>
  );
}

Gallery.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Gallery;
