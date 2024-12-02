import React from 'react';
import '../styles/Guidebook.css';

const Guidebook = () => {
  return (
    <div className="guidebook">
      <h2>Guidebook</h2>
      <p>Access helpful resources to improve your farming practices.</p>
      <ul>
        <li><a href="/guidebook1.pdf" download>Farming Basics</a></li>
        <li><a href="/guidebook2.pdf" download>Advanced Techniques</a></li>
      </ul>
    </div>
  );
};

export default Guidebook;