import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src='logo.png' // Replace with actual image path
          alt="Logo"
          className="h-20 w-auto"
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-gray-800 font-medium">
        <li className="hover:text-green-700"><button>Home</button></li>
        <li className="hover:text-green-700"><button>Our Services</button></li>
        <li className="hover:text-green-700"><button>Blog</button></li>
        <li className="hover:text-green-700"><button >About Us</button></li>
        <li className="hover:text-green-700"><button>Contact Us</button></li>
      </ul>

      {/* Auth Buttons */}
      <div className="flex space-x-4">
        <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600">
          Login
        </button>
        <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
