"use client";

import { navItems } from "@/lib/valiable";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null); 

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
      <div className="flex items-center justify-between h-16 px-6 bg-custom-white ">
        <button
          onClick={toggleMenu}
          className="text-3xl"
          aria-label="Toggle Menu"
        >
          <HiOutlineMenuAlt2 />
        </button>
        <Link href="/" className="text-2xl font-bold font-serif">
          Chipraze
        </Link>

        <div className="flex items-center gap-3">
          <FaSearch className="text-black2 cursor-pointer" />

          <FaShoppingCart className="text-black2 cursor-pointer" />
        </div>
      </div>

      {/* Mobile navigation menu */}
      <nav
        ref={navRef}
        className={`fixed top-16 left-0 w-1/2  bg-slate-300 min-h-screen  border 
           px-6 transition-transform duration-300 ease-in-out ${
             isMenuOpen ? "translate-x-0" : "-translate-x-full"
           }`}
      >
        {navItems.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="block  text-lg relative
             overflow-hidden group py-2 
            "
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
            <span
              className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-500 transition-transform 
            duration-300 transform scale-x-0 group-hover:scale-x-100"
            ></span>
          </Link>
        ))}
        <div className=" flex pt-5 gap-3">
          {" "}
          <button className="px-4 py-2 rounded-md  bg-custom-white text-black2 ">Loing</button>
          <button className="px-4 py-2 rounded-md bg-blue-500 text-custom-white ">Signup</button>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
