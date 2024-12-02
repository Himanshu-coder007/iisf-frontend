import React from "react";
import { Link, useNavigate } from "react-router-dom";

const UserNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here
    console.log("User logged out");
    navigate("/");
  };

  return (
    <nav className="bg-orange-500 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link className="text-white text-2xl font-semibold" to="/">
          Millet's Info
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="text-white lg:hidden focus:outline-none"
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

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-8" id="navbarNav">
          <ul className="flex space-x-6 text-white">
            <li>
              <Link
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-600 hover:text-white transition duration-300"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-600 hover:text-white transition duration-300"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-600 hover:text-white transition duration-300"
                to="/recipes"
              >
                Recipes
              </Link>
            </li>
            <li>
              <Link
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-600 hover:text-white transition duration-300"
                to="/diet-plan"
              >
                Diet Plan
              </Link>
            </li>
            <li>
              <Link
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-600 hover:text-white transition duration-300"
                to="https://www.nutritionvalue.org/nutritioncalculator.php"
              >
              Nutritional Calculator
              </Link>
            </li>
            <li>
              <Link
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-600 hover:text-white transition duration-300"
                to="/millet-market"
              >
                Millet Market
              </Link>
            </li>
          </ul>

          {/* Profile Section */}
          <div className="relative">
            <button
              className="text-white font-medium hover:bg-orange-600 px-4 py-2 rounded-md focus:outline-none"
              id="profileDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Profile
            </button>
            <ul
              className="dropdown-menu absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg border border-gray-200"
              aria-labelledby="profileDropdown"
            >
              <li>
                <Link className="block px-4 py-2 text-sm hover:bg-gray-100" to="/profile">
                  View Profile
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 text-sm hover:bg-gray-100" to="/settings">
                  Settings
                </Link>
              </li>
              <li>
                <hr className="my-2" />
              </li>
              <li>
                <button
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserNav;
