import React from 'react';
import { Link } from 'react-router-dom';

export const Header = function Header() {
  return (
    <header className="z-10 fixed top-0 left-0 right-0 w-full h-12 bg-slate-800 text-sky-100 flex flex-row justify-center items-center">
      <Link to="/">
        <h1 className="text-3xl text-sky-100 font-bold font-koulen flex justify-center hover:text-sky-300">SHOP CENTER</h1>
      </Link>
      <div className="ml-10 flex absolute right-0">
        <div className="flex justify-center items-center mr-4 h-8 w-8 bg-sky-100 rounded-full hover:bg-sky-300 ">
          👤
        </div>
        <Link to="/favorites" className="flex justify-center items-center mr-4 h-8 w-8 bg-sky-100 rounded-full hover:bg-sky-300 ">
          <p>🧡</p>
        </Link>
        <Link to="/cart" className="flex justify-center items-center mr-4 h-8 w-8 bg-sky-100 rounded-full hover:bg-sky-300 ">
          <p>🛒</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
