import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS file
import backgroundImage from '../assets/hero-bg.jpg'; // Import the image

function LandingPage() {
  return (
    <div 
      className="landing-page" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="landing-content">
        <h1>Welcome to The Green Shelf</h1>
        <p>Your one-stop shop for beautiful houseplants to bring nature indoors.</p>
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;