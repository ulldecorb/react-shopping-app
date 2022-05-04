import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function Detail({ products }) {
  const paramsId = useParams();
  const getProductByParams = () => products.find((product) => product.id === paramsId.productId);
  const {
    productName, ntf, price, stock, category
  } = getProductByParams();

  console.log('paramsId: ', paramsId.productId);
  console.log(getProductByParams());
  return (
    <main className="mt-12">
      {getProductByParams()
        ? (
          <article className="h-full w-full bg-slate-800 shadow-md text-slate-50">
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
