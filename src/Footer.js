import React from 'react';
import { Link } from 'react-router-dom';
import logo from './s_logo_1_transparent.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <img src={logo} alt="Company Logo" />
        </div>
        <div className="footer-section">
          <h3>SECUNDARIUS</h3>
          <Link to="/erbjudande">Om oss</Link>
        </div>
        <div className="footer-section">
          <h3>HJÄLP</h3>
          <Link to="/customer-service">Kundservice</Link>
          <Link to="/track-order">Spåra din order</Link>
          <Link to="/purchase-conditions">Köpvillkor</Link>
          <Link to="/privacy-policy">Integritetspolicy</Link>
          <Link to="/cookies">Cookies</Link>
          <Link to="/manage-cookies">Hantera cookies</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Developed By <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Alex Web Agency</a></p>
        <p>Copyright © 2024, SECUNDARIUS</p>
      </div>
    </footer>
  );
};

export default Footer;
