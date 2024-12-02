import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSignIn = () => {
    navigate('/login'); // Navigate to /login route
  };

  const handleSignUp = () => {
    navigate('/signup'); // Navigate to /signup route
  };

  return (
    <nav className="bg-orange-500">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link className="text-white text-lg font-semibold" to="/">
          Millet's Info
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="text-white block lg:hidden focus:outline-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Menu Items */}
        <div className="hidden lg:flex space-x-6 items-center" id="navbarNav">
          <ul className="flex space-x-6 text-white">
            <li>
              <Link
                className="text-white text-sm font-medium px-3 py-2 rounded-md hover:bg-orange-600 hover:text-white transition duration-300"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-sm font-medium px-3 py-2 rounded-md hover:bg-orange-600 hover:text-white transition duration-300"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-sm font-medium px-3 py-2 rounded-md hover:bg-orange-600 hover:text-white transition duration-300"
                to="/recipes"
              >
                Recipes
              </Link>
            </li>
          </ul>

          {/* Sign In/Sign Up Buttons */}
          <div className="space-x-4">
            <button
              className="bg-white text-orange-500 px-4 py-2 rounded-md hover:bg-gray-100"
              onClick={handleSignIn}
            >
              Sign In
            </button>
            <button
              className="bg-white text-orange-500 px-4 py-2 rounded-md hover:bg-gray-100"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
