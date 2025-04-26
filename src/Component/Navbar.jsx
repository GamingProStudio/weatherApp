// Navbar.jsx
import React from 'react';
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="absolute bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-xl shadow-md mt-2 text-center w-full z-[1]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          GPWeather
        </div>

        {/* Menu Items */}
        <div className="space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/today" className="text-white hover:text-gray-300">Today</Link>
          <Link to="#" className="text-white hover:text-gray-300">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;