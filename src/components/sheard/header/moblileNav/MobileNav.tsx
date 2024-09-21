"use client";

import { useCart } from "@/context/CartContext";
import { navItems } from "@/lib/variable";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const MobileNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);


  const { cartItems } = useCart();
  const totalQuantities = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu on clicking or scrolling outside
  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  const handleScrollOutside = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      window.addEventListener("scroll", handleScrollOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScrollOutside);
    }

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScrollOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Mobile navigation header */}
      <div className="flex items-center justify-between h-16 px-6 bg-custom-white">
        <button
          onClick={toggleMenu}
          className="text-3xl"
          aria-label="Toggle Menu"
        >
          <HiOutlineMenuAlt2 />
        </button>
        <Link href="/" className="text-2xl font-bold font-serif">
          ChipCraze
        </Link>

        <div className="flex items-center gap-3">
          <FaSearch className="text-black cursor-pointer" aria-label="Search" />

          <Link href="/Cart">
          <div className="relative">
              <FaShoppingCart className="text-gray-600 cursor-pointer w-6 h-6" aria-label="Shopping Cart" />
              {totalQuantities > 0 && (
                <div className="absolute -top-2 -right-2 bg-orange-500 text-gray-700 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalQuantities}
                </div>
              )}
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile navigation menu */}
      <nav
        ref={navRef}
        className={`fixed top-16 left-0 w-1/2 bg-slate-300 min-h-screen border px-6 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navItems.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="block text-lg relative overflow-hidden group py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
            <span
              className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-500 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"
            ></span>
          </Link>
        ))}
        <div className="flex pt-5 gap-3">
          <Link href="/login">
            <button className="px-4 py-2 rounded-md bg-custom-white text-black">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-2 rounded-md bg-blue-500 text-white">
              Signup
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
