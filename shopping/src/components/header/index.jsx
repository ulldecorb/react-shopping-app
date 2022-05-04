import React from 'react';
import { Link } from 'react-router-dom';

export const Header = function Header() {
  return (
    <header className="w-full h-12 bg-slate-200 flex flex-row justify-center basis-1/1">
      <Link to="/">
        <h1 className="text-3xl text-blue-600/100 font-bold underline flex justify-center basis-1/2">SHOP CENTER</h1>
      </Link>
      <div className="flex flex-row">
        <div className="flex flex-row justify-center mr-4">
          LogIn or SignIn
        </div>
        <Link to="/cart" className="flex justify-center mr-4">
          Cart
        </Link>
      </div>
    </header>
  );
};

export default Header;
