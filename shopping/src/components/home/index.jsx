import React from 'react';
import { Products } from '../../constants/products';

function Home() {
  return (
    <main>
      {Products.map((product) => (
        <article key={product.id}>
          <h2>{product.productNamename}</h2>
          <p>{product.stock}</p>
          <p>{product.stock}</p>
          <p>{product.ntf}</p>
        </article>
      ))}
    </main>
  );
}

export default Home;
