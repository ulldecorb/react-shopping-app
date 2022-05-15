import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function Detail({ products, handleQuanty, cart }) {
  const params = useParams();

  function getProduct() {
    const productOnCart = params.productId === cart.find((x) => x.id === params.productId)?.id;
    let newProduct = {};
    if (productOnCart) {
      newProduct = cart.find((x) => x.id === params.productId);
    } else {
      newProduct = { ...products.find((x) => x.id === params.productId), quanty: 0 };
    }
    return newProduct;
  }
  const [product, setProduct] = useState(getProduct());

  const [counterQuanty, setCounterQuanty] = useState(product.quanty);
  function handleQuantyClick(event) {
    setCounterQuanty(parseInt(event.target.value, 10));
  }

  useEffect(() => {
    setProduct(getProduct());
    // setCounterQuanty(product.quanty);
  }, [cart]);

  const sendQuanty = () => {
    const getId = product.id;
    const prop = { id: getId, newQuanty: counterQuanty };
    handleQuanty(prop);
  };

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
              className="text-gray-900 "
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
