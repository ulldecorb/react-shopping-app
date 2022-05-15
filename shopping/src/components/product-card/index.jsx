import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProductCard({ product, handleToggleFavorites, checkFavorites }) {
  const [favoriteFlag, setFavoriteFlag] = useState(false);
  const {
    productName, id, ntf, price, stock, category
  } = product;

  const handleToggleFavoritesClick = (productId) => {
    handleToggleFavorites(productId);
    setFavoriteFlag(!favoriteFlag);
  };

  useEffect(() => {
    setFavoriteFlag(checkFavorites(id));
  }, []);

  return (
    <article
      className="relative h-48 w-48 m-8 rounded-md bg-slate-800 shadow-md  shadow-stone-800  cursor-pointer hover:outline outline-offset-2 outline-2 text-slate-50 flex flex-col items-center"
    >
      <Link className="h-48 w-48 flex flex-col items-center" to={`/${product.category}/${product.id}`}>
        <h2 className="text-xl w-full text-center font-koulen">{productName.toUpperCase()}</h2>
        <p className="w-20 h-20 bg-slate-200 rounded-md text-5xl hover:text-6xl flex justify-center items-center ">{ntf}</p>
        <p>
          Price:
          {' '}
          {price}
          €
        </p>
        <p>{stock}</p>
        <Link className="nav-link" to={`/${product.category}`}>
          <h3>
            Category:
            {' '}
            {category}
          </h3>
        </Link>
      </Link>
      <div
        className="h-12 w-12 absolute -top-4 -right-4 bg-slate-400 hover:bg-slate-50 rounded-full flex justify-center items-center"
        onClick={() => handleToggleFavoritesClick(id)}
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
        role="button"
        aria-hidden
      >
        {favoriteFlag
          ? <p className="text-2xl">🧡</p>
          : <p className="text-2xl">🤍</p>}
      </div>
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
  }).isRequired,
  handleToggleFavorites: PropTypes.func.isRequired,
  checkFavorites: PropTypes.func.isRequired
};

export default ProductCard;
