import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Farmer Dashboard</h1>
      <ul>
        <li><Link to="/farmer/home">Dashboard</Link></li>
        <li><Link to="/farmer/training">Training Sessions</Link></li>
        <li><Link to="/farmer/ecommerce">Millet E-Commerce</Link></li>
        <li><Link to="/farmer/guidebook">Guidebook</Link></li>
        <li><a href="http://localhost:5173/login">Community</a></li> {/* External link remains as <a> */}
      </ul>
    </nav>
  );
};

export default Navbar;
