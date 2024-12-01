import React from "react";
import {
  FaClipboardList,
  FaBullhorn,
  FaMoneyBill,
  FaSeedling,
} from "react-icons/fa";

const Navbar = ({ setActiveTab }) => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gov Dashboard</h1>
        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => setActiveTab("schemes")}
              className="flex items-center hover:scale-105 transform transition"
              title="Schemes"
            >
              <FaClipboardList className="mr-2" /> Schemes
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("campaigns")}
              className="flex items-center hover:scale-105 transform transition"
              title="Campaigns"
            >
              <FaBullhorn className="mr-2" /> Campaigns
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("subsidies")}
              className="flex items-center hover:scale-105 transform transition"
              title="Subsidies"
            >
              <FaMoneyBill className="mr-2" /> Subsidies
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("pricing")}
              className="flex items-center hover:scale-105 transform transition"
              title="Millet Pricing"
            >
              <FaSeedling className="mr-2" /> Millet Marketing And Pricing
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
