import React from 'react';
import { Products } from '../../constants/products';

function Home() {
  return (
    <main>
      {Products.map((product) => (
        <article key={product.id}>
          <h2>{product.productName}</h2>
          <p>{product.ntf}</p>
          <p>{product.stock}</p>
          <p>{product.category}</p>
        </article>
      ))}
    </main>
  );
}

export default Home;
