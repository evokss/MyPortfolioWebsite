"use client";

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

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
            <Link href="/">
              <img
                src="/icons/rocket.png"
                className="size-6 transition ease-in-out delay-125 hover:scale-125"
                alt="Header Logo"
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-gray-800 hover:text-rose-600 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/development"
              className="text-gray-800 hover:text-rose-600 transition duration-300"
            >
              About
            </Link>
            <Link
              href="/development"
              className="text-gray-800 hover:text-rose-600 transition duration-300"
            >
              Projects
            </Link>
            <Link
              href="/development"
              className="text-gray-800 hover:text-rose-600 transition duration-300"
            >
              CV
            </Link>
            <Link
              href="/development"
              className="text-gray-800 hover:text-rose-600 transition duration-300"
            >
              Contact Me
            </Link>
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
          <Link
            href="/"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            href="/development"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            About
          </Link>
          <Link
            href="/development"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Projects
          </Link>
          <Link
            href="/development"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            CV
          </Link>
          <Link
            href="/development"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Contact Me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
