import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../product-card';

// function Cart() {
function Cart({ products, user }) {
  const productCartId = user.cart.map((product) => product.productId);
  const productId = products.map((product) => product.id);
  const productCart = 'Reduce para obtener los productor a mapear';
  console.log(productCartId);
  console.log(productId);
  console.log(productCart);
  return (
    <main className="bg-yellow-600 mt-12 w-full h-full">
      <h2 className="w-full text-center text-4xl text-lime-400 ">Cart</h2>
      <h3>{user.userName}</h3>
      {products.filter((product) => product.id === productCartId[0]).map((product) => (
        <article key={product.id}>
          <ProductCard product={product} />
          <p>
            Quanty:
            {' '}
            {user.cart[0].quanty}
          </p>
        </article>
      ))}

    </main>
  );
}

Cart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    cart: PropTypes.arrayOf(PropTypes.object).isRequired,
    favoritesId: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default Cart;
