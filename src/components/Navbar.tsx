import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/logo.png" // Replace with actual image path
          alt="Logo"
          className="h-10 w-auto"
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-gray-800 font-medium">
        {/* <li className="text-green-700"><button>Home<button/></li> */}
        <li><button>Our Services</button></li>
        <li><button>Blog</button></li>
        <li><button>About Us</button></li>
        {/* <li><button>Contact Us<button/></li> */}
      </ul>

      {/* Auth Buttons */}
      <div className="flex space-x-4">
        <button className="bg-green-700 text-white px-4 py-2 rounded-lg">
          Login
        </button>
        <button className="bg-green-700 text-white px-4 py-2 rounded-lg">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
