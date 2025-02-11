import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-color text-color px-6 py-3 flex flex-wrap items-center justify-between shadow-md fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold">CERM</h1>

      {/* Search Bar */}
      <div className="w-full sm:w-[450px] flex justify-center my-2 sm:my-0">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded-lg border border-gray-300 bg-white text-black outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-wrap gap-4">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/browse-equipment" className="hover:underline">
            Browse Equipment
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </li>

        <li>
          <Link to="/contact" className="hover:underline">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="hover:underline">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
