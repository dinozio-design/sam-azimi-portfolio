import React, { useState } from 'react';
import './test.css';

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };
  return (
    <div className={`navbar ${isNavOpen ? 'open' : ''}`}>
      <div className="hamburger" onClick={toggleNav}>
        {isNavOpen ? <span>&larr; Close</span> : <span>&#9776; Open</span>}
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        {/* Add more links as needed */}
      </div>
    </div>
  );
};

export default Navbar;
