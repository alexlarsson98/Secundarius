import React from 'react';
import { Link } from 'react-router-dom';
import logo from './s_logo_1_transparent.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Company Logo" />
      </Link>
      <div className="links">
        <a href="/">Home</a>
        <a href="/om-oss">About</a>
        <a href="/kontakt">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;