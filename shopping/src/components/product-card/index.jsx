import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ product }) {
  const {
    productName, ntf, price, stock, category
  } = product;

  return (
    <article className="relative h-48 w-48 m-8 rounded-md bg-slate-800 shadow-md  shadow-stone-800  cursor-pointer hover:outline outline-offset-2 outline-2 text-slate-50 flex flex-col items-center">
      <h2 className="text-xl w-full text-center font-koulen">{productName.toUpperCase()}</h2>
      <p className="w-20 h-20 bg-slate-200 rounded-md text-5xl hover:text-6xl flex justify-center items-center ">{ntf}</p>
      <p>
        Price:
        {' '}
        {price}
        €
      </p>
      <p>{stock}</p>
      <h3>
        Category:
        {' '}
        {category}
      </h3>
      <div className="h-12 w-12 absolute -top-4 -right-4 bg-slate-400 hover:bg-slate-50 rounded-full flex justify-center items-center">
        <p className="text-2xl">🧡</p>

      </div>
    </article>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    ntf: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default ProductCard;
