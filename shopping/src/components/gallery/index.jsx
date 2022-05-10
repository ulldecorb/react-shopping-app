import React from 'react';
import PropTypes from 'prop-types';

function Gallery({ products }) {
  return (
    <main>
      <ul>
        {products.map((product) => (
          <h2 key={product.id}>{product.ntf}</h2>
        ))}
      </ul>
    </main>
  );
}

Gallery.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Gallery;
