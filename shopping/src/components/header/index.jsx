import React from 'react';
import { Link } from 'react-router-dom';

export const Header = function Header() {
  return (
    <header className="flex flex-row justify-center basis-1/1">
      <h1 className="text-3xl font-bold underline flex justify-center basis-1/2">SHOP CENTER</h1>
      <div className="flex flex-row">
        <div className="flex flex-row justify-center mr-4">
          LogIn or SignIn
        </div>
        <div className="flex justify-center mr-4">
          chart
        </div>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
