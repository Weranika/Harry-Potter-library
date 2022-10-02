import * as React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/img/logo.png';
import Input from 'components/input/input';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo__container">
          <Link to="/">
            <img className="logo-img" alt="logo" src={logo} />
          </Link>
          <div className="logo">
            <Link to="/">
              <h1 className="logo__title">Harry Potter</h1>
            </Link>
            <h3 className="logo__subtitle">library for true fans!</h3>
          </div>
        </div>
        <Input />
        <nav className="navbar">
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
        </nav>
      </div>
    </header>
  );
}

export default Header;
