import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Total({ cart }) {
  const [subtotal, setSubtotal] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  const getSubtotalPrice = () => cart.reduce(
    (arr, cur) => arr + (cur.price * cur.quanty),
    0
  );

  const getTotalProduts = () => cart.reduce((arr, cur) => arr + cur.quanty, 0);

  const getFinalPrice = () => {
    const newTotal = cart.reduce((arr, cur) => arr + (cur.price * cur.quanty), 0);
    return newTotal + newTotal * 0.12;
  };

  useEffect(() => {
    setSubtotal(getSubtotalPrice());
    setTotalProducts(getTotalProduts());
    setFinalPrice(getFinalPrice());
  }, [cart]);

  return (
    <div className="w-full m-6 text-center text-slate-200">
      Subtotal (
      {totalProducts}
      {' '}
      products):
      {' '}
      {subtotal}
      €
      <br />
      Total:
      {' '}
      <strong
        data-testid="finalPrice"
        className="text-lg"
      >
        {finalPrice}
      </strong>
      €
    </div>
  );
}

Total.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Total;
