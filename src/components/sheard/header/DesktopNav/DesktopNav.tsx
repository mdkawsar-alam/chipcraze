"use client"
import React, { useContext } from "react";
import Link from "next/link";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { navItems } from "@/lib/variable";
import { CartContext } from "@/context/context"; 

const DesktopNav = () => {
  
  const { quantities } = useContext(CartContext);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Homepage">
              <h1 className="text-2xl font-bold text-gray-800">ChipCraze</h1>
            </Link>
          </div>

          {/* Dynamic Navigation Items */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block text-lg relative overflow-hidden group py-2"
                aria-label={item.label}
              >
                {item.label}
                <span
                  className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-500 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"
                ></span>
              </Link>
            ))}
          </div>

          {/* Search, Cart, and Auth Buttons */}
          <div className="flex items-center space-x-4">
            <FaSearch className=" size-5 text-gray-600 cursor-pointer" aria-label="Search" />

            {/* Shopping Cart Icon */}
            <div className="relative">
              <FaShoppingCart className= "size-6 text-gray-600 cursor-pointer" aria-label="Shopping Cart" />
              {Object.values(quantities).reduce((a, b) => a + b, 0) > 0 && (
                <div className="absolute -top-4 -right-4 bg-orange-500 text-gray-700 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {Object.values(quantities).reduce((a, b) => a + b, 0)}
                </div>
              )}
            </div>

            {/* Login and Signup Buttons */}
            <Link href="/login" aria-label="Login">
              <div className="text-gray-800 hover:text-blue-600">Login</div>
            </Link>
            <Link href="/signup" aria-label="Signup">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Signup
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
