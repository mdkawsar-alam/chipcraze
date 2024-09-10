"use client";

import { navItems } from "@/lib/valiable";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null); // Reference for the nav menu

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
      <div className="flex items-center justify-between h-16 px-6 bg-gray-800 text-white">
        <Link href="/" className="text-2xl font-bold font-serif">
          KAWSAR
        </Link>
        <button
          onClick={toggleMenu}
          className="text-3xl"
          aria-label="Toggle Menu"
        >
          <HiOutlineMenuAlt2 />
        </button>
      </div>

      {/* Mobile navigation menu */}
      <nav
        ref={navRef}
        className={`fixed top-16 left-0 w-3/4 min-h-screen bg-gray-900 text-white px-6 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button
            onClick={toggleMenu}
            className="text-3xl mt-4"
            aria-label="Close Menu"
          >
            &times;
          </button>
        </div>
        {navItems.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="block my-3 text-lg relative overflow-hidden group p-4 rounded-lg hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-500 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default MobileNav;
