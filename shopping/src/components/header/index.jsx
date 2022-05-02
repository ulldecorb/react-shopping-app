import React from 'react';

export const Header = function Header() {
  return (
    <header className="flex flex-row">
      <h1 className="header__title">SHOP CENTER</h1>
      <div className="header__box">
        <div className="header__loggin">
          LogIn or SignIn
        </div>
        <div className="header__chart">
          chart
        </div>
      </div>
    </header>
  );
};

export default Header;
