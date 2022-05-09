import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function Detail({ products }) {
  const paramsId = useParams();
  const getProductByParams = () => products.find((product) => product.id === paramsId.productId);
  const {
    productName, ntf, price, stock, category
  } = getProductByParams();

  return (
    <main className="mt-12 flex justify-center items-center">
      {getProductByParams()
        ? (
          <article className="h-screen w-full bg-slate-800 shadow-md text-slate-50 flex flex-col justify-start items-center">
            <p className="w-1/2 h-1/2 bg-slate-200 rounded-md text-[30vmin] flex justify-center items-center ">{ntf}</p>
            <h3>
              Category:
              {' '}
              {category}
            </h3>
            <h2 className="text-6xl w-full text-center">{productName.toUpperCase()}</h2>
            <p>
              Price:
              {' '}
              {price}
              €
            </p>
            <p>{stock}</p>
          </article>
        )
        : (<h2> No articles available</h2>)}
    </main>
  );
}

Detail.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired
};

export default Detail;
