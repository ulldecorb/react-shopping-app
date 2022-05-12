import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function Detail({ products, handleQuanty, cart }) {
  const paramsId = useParams();

  function getProduct() {
    const productOnCart = paramsId.productId === cart.find((x) => x.id === paramsId.productId)?.id;
    let newProduct = {};
    if (productOnCart) {
      newProduct = cart.find((x) => x.id === paramsId.productId);
    } else {
      newProduct = { ...products.find((x) => x.id === paramsId.productId), quanty: 0 };
    }
    return newProduct;
  }
  const [product, setProduct] = useState(getProduct());

  useEffect(() => {
    setProduct(getProduct());
  }, [cart]);

  function handleQuantyClick(event, productId) {
    const prop = { productId, newQuanty: parseInt(event.target.value, 10) };
    handleQuanty(prop);
  }

  return (
    <main className="mt-12 flex justify-center items-center">
      {product
        ? (
          <article className="h-screen w-full bg-slate-800 shadow-md text-slate-50 flex flex-col justify-start items-center">
            <p className="w-1/2 h-1/2 bg-slate-200 rounded-md text-[30vmin] flex justify-center items-center ">{product.ntf}</p>
            <h3>
              Category:
              {' '}
              {product.category}
            </h3>
            <h2 className="text-6xl w-full text-center">{product.productName.toUpperCase()}</h2>
            <p>
              Price:
              {' '}
              {product.price}
              €
            </p>
            <p>{product.stock}</p>
            <input
              className="out-of-range:border-red-500 "
              value={product.quanty}
              type="number"
              id="quantity"
              name="quantity"
              min="0"
              max={product.stock}
              onChange={(e) => handleQuantyClick(e, product.id)}
            />
          </article>
        )
        : (<h2> No articles available</h2>)}
    </main>
  );
}

Detail.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  handleQuanty: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired
};

export default Detail;
