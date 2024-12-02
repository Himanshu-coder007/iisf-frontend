import React, { useEffect, useState } from 'react';
import './WelcomePage.css'; // Add styling for animations here

const WelcomePage = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(); // Callback to move to the Home page after animation
    }, 3000); // Animation duration (3 seconds)

    return () => clearTimeout(timer); // Cleanup
  }, [onComplete]);

  return (
    <div className="welcome-page">
      <div className="logo-container">
        <img src="/images/LOGO.png" alt="Website Logo" className="logo" />
        <h1>Welcome to Millet Portal</h1>
      </div>
    </div>
  );
};

export default WelcomePage;