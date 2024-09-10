import React from "react";
import Link from "next/link";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { navItems } from "@/lib/valiable";
import "../styles/globals.css"; // Adjust the path based on where your CSS file is

const DesktopNav: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <a className="text-2xl font-bold text-gray-800">ChipCraze</a>
            </Link>
          </div>

          {/* Dynamic Navigation Items */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <a className="nav-link text-gray-800 hover:text-blue-600">
                  {item.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Search, Cart, and Auth Buttons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <FaSearch className="text-gray-600 cursor-pointer" />

            {/* Shopping Cart Icon */}
            <FaShoppingCart className="text-gray-600 cursor-pointer" />

            {/* Login and Signup Buttons */}
            <Link href="/login">
              <a className="text-gray-800 hover:text-blue-600">Login</a>
            </Link>
            <Link href="/signup">
              <a className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Signup
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
