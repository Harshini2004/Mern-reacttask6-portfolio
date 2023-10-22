import React from 'react';
import './protfolio.css';
import './pic.png';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="profile">
        <img src='pic.png' alt='your pic'></img>
        <h1>Harshini Maram Reddy</h1>
        <p>Age: 19</p>
        <p>Email: mharshini69@gmail.com</p>
        <p>Currently pursuing Btech in VIT-AP</p>
      </div>
      <div className="quote">
        <p>"The purpose of our lives is to be happy."</p>
      </div>
    </div>
  );
};

export default Portfolio;
