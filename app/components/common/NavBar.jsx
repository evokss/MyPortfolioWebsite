"use client";

import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  // State to track if the component has mounted
  const [isMounted, setIsMounted] = useState(false);

  // State to manage the theme, set the default theme
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Mark as mounted to enable client-side-only logic
    setIsMounted(true);

    // Access localStorage safely on the client side
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "dark";
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.body.classList.add("dark");
      }
    }
  }, []);

  useEffect(() => {
    // Apply the theme change
    if (isMounted) {
      theme === "dark"
        ? document.body.classList.add("dark")
        : document.body.classList.remove("dark");
    }
  }, [theme, isMounted]);

  const themeSwitchHandler = (newTheme) => {
    if (newTheme === "light" || newTheme === "dark") {
      setTheme(newTheme);
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme);
      }
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to determine if the link is active
  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md dark:shadow-sm dark:shadow-slate-800 sticky top-0 z-50">
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
            {theme === "light" ? (
              <img
                src="/icons/moon.png"
                className="size-6 transition ease-in-out delay-125 hover:scale-125 cursor-pointer"
                onClick={() => themeSwitchHandler("dark")}
                alt="Header Logo"
              />
            ) : (
              <img
                src="/icons/sun.png"
                className="size-6 transition ease-in-out delay-125 hover:scale-125 cursor-pointer"
                onClick={() => themeSwitchHandler("light")}
                alt="Header Logo"
              />
            )}

            <Link
              href="/"
              className={`
                ${
                  isActive("/")
                    ? "text-rose-600"
                    : "text-gray-800 dark:text-white hover:text-rose-600 transition duration-300"
                }
              `}
            >
              Home
            </Link>
            <Link
              href="/development"
              className="text-gray-800 dark:text-white hover:text-rose-600 transition duration-300"
            >
              About
            </Link>
            <Link
              href="/development"
              className="text-gray-800 dark:text-white hover:text-rose-600 transition duration-300"
            >
              Projects
            </Link>
            <Link
              href="/development"
              className="text-gray-800 dark:text-white hover:text-rose-600 transition duration-300"
            >
              CV
            </Link>
            <Link
              href="/contact"
              className={`
                ${
                  isActive("/contact")
                    ? "text-rose-600"
                    : "text-gray-800 dark:text-white hover:text-rose-600 transition duration-300"
                }
              `}
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {theme === "light" ? (
              <img
                src="/icons/moon.png"
                className="size-6 transition ease-in-out delay-125 hover:scale-125 mr-5 cursor-pointer"
                onClick={() => themeSwitchHandler("dark")}
                alt="Header Logo"
              />
            ) : (
              <img
                src="/icons/sun.png"
                className="size-6 transition ease-in-out delay-125 hover:scale-125 mr-5 cursor-pointer"
                onClick={() => themeSwitchHandler("light")}
                alt="Header Logo"
              />
            )}
            <button
              onClick={toggleMenu}
              className="text-gray-800 dark:text-white focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200">
          <Link
            href="/"
            className={`
              block px-4 py-2 
              ${
                isActive("/")
                  ? "text-rose-600 bg-gray-100 dark:bg-gray-900"
                  : "text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              }
            `}
          >
            Home
          </Link>
          <Link
            href="/development"
            className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            About
          </Link>
          <Link
            href="/development"
            className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Projects
          </Link>
          <Link
            href="/development"
            className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            CV
          </Link>
          <Link
            href="/contact"
            className={`
              block px-4 py-2 
              ${
                isActive("/contact")
                  ? "text-rose-600 bg-gray-100 dark:bg-gray-900"
                  : "text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              }
            `}
          >
            Contact Me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
