"use client";
import React, { useState } from "react";
import ThemeToggle from './ThemeToggle'; 
import Link from "next/link";
import {
  FaFilter,
  FaStar,
  FaBell,
  FaUserCircle,
  FaPowerOff,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    "HOME", "CRM", "UTILITIES", "INSURANCE", "ASSETS", "MUTUAL",
    "RESEARCH", "TRANSACT ONLINE", "GOAL GPS", "FINANCIAL PLANNING",
    "WEALTH RESPORT", "OTHER",
  ];

  return (
    <header className="bg-white dark:bg-slate-800 shadow-md w-full">
      
      <div className="container mx-auto px-4 py-3 border-b border-gray-200 dark:border-slate-700">
        <div className="flex justify-between items-center gap-4">
          {/* Logo */}
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-400 whitespace-nowrap">
            Wealth Elite
          </h1>

          {/* Search box (hidden on small screens) */}
          <div className="hidden md:flex flex-grow">
            <input
              type="text"
              placeholder="Search..."
              className="w-full text-black px-3 py-1.5 border border-gray-300 rounded-md text-sm
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex items-center space-x-4 text-gray-500 shrink-0">
            <ThemeToggle /> {/* 2. ThemeToggle को आइकन्स के साथ यहाँ जोड़ा गया है */}
            <FaFilter className="cursor-pointer hover:text-blue-600 hidden md:block" />
            <FaStar className="cursor-pointer hover:text-blue-600 hidden md:block" />
            <FaBell className="cursor-pointer hover:text-blue-600" />
            <FaUserCircle className="cursor-pointer hover:text-blue-600" />
            <FaPowerOff className="cursor-pointer hover:text-blue-600 hidden md:block" />

            {/* Hamburger for mobile */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        <div className="mt-2 md:hidden">
          <input
            type="text"
            placeholder="Search..."
            className="w-full text-black px-3 py-1.5 border border-gray-300 rounded-md text-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <nav className="container mx-auto px-4 hidden md:block">
        <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 py-2">
          {menuItems.map((item) => (
            <li key={item}>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-300 font-semibold hover:text-red-600 text-xs transition-colors duration-300 whitespace-nowrap"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-50 dark:bg-slate-700 border-t border-gray-200 dark:border-slate-600">
          <ul className="flex flex-col items-start px-6 py-4 space-y-3">
            {menuItems.map((item) => (
              <li key={item} className="w-full">
                <Link
                  href="#"
                  className="block w-full text-gray-700 dark:text-gray-200 font-medium hover:text-red-600 text-sm transition-colors duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;