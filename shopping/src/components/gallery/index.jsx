import React from 'react';
import { Products } from '../../constants/products';

function Gallery() {
  return (
    <main>
      <ul>
        {Products.map((product) => (
          <h2 key={product.id}>{product.ntf}</h2>
        ))}
      </ul>
    </main>
  );
}

export default Gallery;
