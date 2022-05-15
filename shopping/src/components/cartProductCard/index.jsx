import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../product-card';

function CartProductCard({
  product, handleToggleFavorites, checkFavorites, handleQuanty
}) {
  const [counterQuanty, setCounterQuanty] = useState(product.quanty);
  function handleQuantyClick(event) {
    setCounterQuanty(parseInt(event.target.value, 10));
  }

  const sendQuanty = () => {
    const getId = product.id;
    const prop = { id: getId, newQuanty: counterQuanty };
    handleQuanty(prop);
  };

  return (
    <article key={product.id}>
      <ProductCard
        product={product}
        handleToggleFavorites={handleToggleFavorites}
        checkFavorites={checkFavorites}
      />
      <p className="mb-2">
        Quanty:
        {' '}
        {product.quanty}
      </p>
      <input
        className="out-of-range:border-red-500 text-center text-slate-800 bg-slate-100 rounded-full mr-4"
        value={counterQuanty}
        type="number"
        id="quantity"
        name="quantity"
        min="0"
        max={product.stock}
        onChange={(e) => handleQuantyClick(e)}
      />
      <button type="button" onClick={sendQuanty}>Add to cart</button>
    </article>
  );
}

CartProductCard.propTypes = {
  product: PropTypes.shape(PropTypes.object).isRequired,
  handleToggleFavorites: PropTypes.func.isRequired,
  checkFavorites: PropTypes.func.isRequired,
  handleQuanty: PropTypes.func.isRequired
};

export default CartProductCard;
