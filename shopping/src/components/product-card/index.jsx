import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ product }) {
  const {
    productName, ntf, price, stock, category
  } = product;

  return (
    <article className="h-48 w-48 m-8 rounded-md bg-slate-800 shadow-md text-slate-50 flex flex-col items-center">
      <h2 className="text-xl w-full text-center">{productName.toUpperCase()}</h2>
      <p className="w-20 h-20 bg-slate-200 rounded-md text-2xl flex justify-center items-center ">{ntf}</p>
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
