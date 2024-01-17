import React from 'react';
import header from './header_image.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="header-container">
      <img src={header} alt="Header" className="header-image" />
      <div className="header-content">
        <p>Premium posters</p>
        <h1>SECUNDARIUS</h1>
      </div>
    </div>
  );
};

export default Home;
