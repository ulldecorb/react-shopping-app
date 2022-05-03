import React from 'react';

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
    </header>
  );
};

export default Header;
