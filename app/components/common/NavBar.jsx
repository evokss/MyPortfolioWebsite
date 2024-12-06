"use client";

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand Icon */}
          <div className="flex items-center">
            <a href="/">
              <img
                src="/icons/rocket.png"
                className="size-7"
                alt="Header Logo"
              />
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="text-gray-800 hover:text-rose-600 transition duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-800 hover:text-rose-600 transition duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-800 hover:text-rose-600 transition duration-300"
            >
              Projects
            </a>
            <a
              href="#cv"
              className="text-gray-800 hover:text-rose-600 transition duration-300"
            >
              CV
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-rose-600 transition duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <a
            href="#home"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            About
          </a>
          <a
            href="#projects"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Projects
          </a>
          <a
            href="#cv"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            CV
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
