import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility on small screens
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Close dropdown when clicking a link
  const handleLinkClick = () => setDropdownOpen(false);

  return (
    <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Main Link */}
        <Link to="/" className="text-2xl font-bold hover:text-yellow-300 transition-colors">
          Ash Garments
        </Link>
        
        {/* Navigation Links */}
        <ul className="flex space-x-4 items-center">
          <li><Link to="/" className="hover:text-yellow-300 transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-300 transition-colors">About</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-300 transition-colors">Contact</Link></li>

          {/* Categories Dropdown */}
          <li className="relative">
            <button 
              onClick={toggleDropdown} 
              className="hover:text-yellow-300 transition-colors cursor-pointer">
              Categories
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 bg-white text-gray-800 p-2 rounded-md shadow-lg w-48 z-10">
                <li><Link to="/category/men" className="block py-1 hover:text-purple-500 transition-colors" onClick={handleLinkClick}>Men</Link></li>
                <li><Link to="/category/women" className="block py-1 hover:text-purple-500 transition-colors" onClick={handleLinkClick}>Women</Link></li>
                <li><Link to="/category/boys" className="block py-1 hover:text-purple-500 transition-colors" onClick={handleLinkClick}>Boys</Link></li>
                <li><Link to="/category/girls" className="block py-1 hover:text-purple-500 transition-colors" onClick={handleLinkClick}>Girls</Link></li>
              </ul>
            )}
          </li>
        </ul>

        {/* Mobile Menu (Optional) */}
        <div className="block lg:hidden">
          {/* Optional: Add Hamburger Icon to toggle mobile view */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
