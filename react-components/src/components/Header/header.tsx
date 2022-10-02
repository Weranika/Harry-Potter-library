import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/icons/hogwarts-express-logo.png';
import Input from 'components/input/input';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo__container">
          <NavLink to="/">
            <img className="logo-img" alt="logo" src={logo} />
          </NavLink>
          <div className="logo">
            <NavLink to="/">
              <h1 className="logo__title">Harry Potter</h1>
            </NavLink>
            <h3 className="logo__subtitle">library for true fans!</h3>
          </div>
        </div>
        <Input />
        <nav className="navbar">
          <li>
            <NavLink to="/" end>
              Main
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About us</NavLink>
          </li>
        </nav>
      </div>
    </header>
  );
}

export default Header;
