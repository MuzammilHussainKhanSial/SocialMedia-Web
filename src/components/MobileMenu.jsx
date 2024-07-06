import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Hamburger menu for smaller screens */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="">
          <FaBars />
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-white">
            <FaTimes />
          </button>
        </div>
        <NavLink to="#" className="block px-4 py-2">HOME</NavLink>
        <div className="relative group">
          <NavLink to="#" className="block px-4 py-2">COMMUNITY</NavLink>
          <div className="bg-gray-700 mt-1 rounded shadow-lg">
            <NavLink to="#" className="block px-4 py-2">Submenu 1</NavLink>
            <NavLink to="#" className="block px-4 py-2">Submenu 2</NavLink>
          </div>
        </div>
        <div className="relative group">
          <NavLink to="#" className="block px-4 py-2">PAGES</NavLink>
          <div className="bg-gray-700 mt-1 rounded shadow-lg">
            <NavLink to="#" className="block px-4 py-2">Submenu 1</NavLink>
            <NavLink to="#" className="block px-4 py-2">Submenu 2</NavLink>
          </div>
        </div>
        <div className="relative group">
          <NavLink to="#" className="block px-4 py-2">BLOG</NavLink>
          <div className="bg-gray-700 mt-1 rounded shadow-lg">
            <NavLink to="#" className="block px-4 py-2">Submenu 1</NavLink>
            <NavLink to="#" className="block px-4 py-2">Submenu 2</NavLink>
          </div>
        </div>
        <div className="relative group">
          <NavLink to="#" className="block px-4 py-2">SHOP</NavLink>
          <div className="bg-gray-700 mt-1 rounded shadow-lg">
            <NavLink to="#" className="block px-4 py-2">Submenu 1</NavLink>
            <NavLink to="#" className="block px-4 py-2">Submenu 2</NavLink>
          </div>
        </div>
        <NavLink to="#" className="block px-4 py-2">COURSES</NavLink>
      </div>
    </div>
  );
};

export default MobileMenu;
