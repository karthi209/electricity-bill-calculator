import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';
import GoBack from './GoBack';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/" onClick={GoBack}>Home</Link></li>
        <li><Link to="/compare">Compare</Link></li>
        <li><Link to="/tariff">Tariff</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;