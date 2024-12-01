import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const menuLinks = [
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/recipes', label: 'Recipes' },
  ];

  return (
    <nav className="bg-orange-500">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link className="text-white text-xl font-bold" to="/">
          Millet's Info
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {menuLinks.map((link) => (
            <Link
              key={link.to}
              className="text-white hover:text-gray-200 transition"
              to={link.to}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Auth Links */}
        <div className="hidden lg:flex space-x-4">
          <Link
            className="bg-white text-orange-500 font-medium py-2 px-4 rounded hover:bg-gray-100 transition"
            to="/login"
          >
            Sign In
          </Link>
          <Link
            className="bg-white text-orange-500 font-medium py-2 px-4 rounded hover:bg-gray-100 transition"
            to="/signup"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="flex flex-col space-y-2 px-6 py-4 bg-orange-600">
            {menuLinks.map((link) => (
              <Link
                key={link.to}
                className="text-white hover:text-gray-200 transition"
                to={link.to}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2">
              <a
                className="bg-white text-orange-500 font-medium py-2 px-4 rounded hover:bg-gray-100 transition text-center"
                href="http://localhost:3000/login"
              >
                Sign In
              </a>
              
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
