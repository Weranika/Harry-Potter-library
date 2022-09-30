import * as React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="main">
      <div className="logo">
        <h1 className="logo__title">Harry Potter</h1>
        <h3 className="logo__subtitle">library for true fans!</h3>
      </div>
      <nav className="navbar">
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/about-us">About us</Link>
        </li>
        <li>
          <Link to="/404">404</Link>
        </li>
      </nav>
    </header>
  );
}

export default Header;
