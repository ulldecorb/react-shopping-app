import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../product-card';

function CartProductCard({
  product, handleToggleFavorites, checkFavorites, handleQuanty
}) {
  const [counterQuanty, setCounterQuanty] = useState(product.quanty);
  // const [id] = product;
  function handleQuantyClick(event) {
  // function handleQuantyClick(event, productId) {
    // const prop = { productId, newQuanty: parseInt(event.target.value, 10) };
    // handleQuanty(prop);

    setCounterQuanty(parseInt(event.target.value, 10));
  }

  const sendQuanty = () => {
    const getId = product.id;
    const prop = { id: getId, newQuanty: counterQuanty };
    handleQuanty(prop);
    // setCounterQuanty(4);
  };

  return (
    <article key={product.id}>
      <ProductCard
        product={product}
        handleToggleFavorites={handleToggleFavorites}
        checkFavorites={checkFavorites}
      />
      <p>
        Quanty:
        {' '}
        {product.quanty}
      </p>
      <input
        className="out-of-range:border-red-500 "
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
