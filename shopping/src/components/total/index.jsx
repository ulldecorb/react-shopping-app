import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Total({ cart }) {
  const [totalPrice, setTotalPrice] = useState(0);

  const getTotalPrice = () => cart.reduce(
    (arr, cur) => arr + (cur.price * cur.quanty),
    0
  );

  useEffect(() => {
    setTotalPrice(getTotalPrice());
  }, []);

  return (
    <div>
      Total:
      {' '}
      {totalPrice}
      €
    </div>
  );
}

Total.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Total;
