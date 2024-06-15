import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';


const Navbar = () => {

  const [selectedItem, setSelectedItem] = useState(null); // State to keep track of the selected item

  const handleItemClick = (item) => {
    console.log('Clicked item:', item);
    setSelectedItem(item); // Update the selected item state
  };

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-links">
          <li className={selectedItem === 'home' ? 'selected' : ''} onClick={() => handleItemClick('home')}>
            <Link to="/">Home</Link>
          </li>
          <li className={selectedItem === 'compare' ? 'selected' : ''} onClick={() => handleItemClick('compare')}>
            <Link to="/compare">Compare</Link>
          </li>
          <li className={selectedItem === 'tariff' ? 'selected' : ''} onClick={() => handleItemClick('tariff')}>
            <Link to="/tariff">Tariff</Link>
          </li>
          <li className={selectedItem === 'about' ? 'selected' : ''} onClick={() => handleItemClick('about')}>
            <Link to="/about">About</Link>
          </li>
          <li className={selectedItem === 'share' ? 'selected' : ''} onClick={() => handleItemClick('share')}>
            <Link to="/share">Share</Link>
          </li>
          <li className={selectedItem === 'feedback' ? 'selected' : ''} onClick={() => handleItemClick('feedback')}>
            <Link to="/feedback">Feedback</Link>
          </li>
        </ul>
      </nav>
    </>

  );
};

export default Navbar;