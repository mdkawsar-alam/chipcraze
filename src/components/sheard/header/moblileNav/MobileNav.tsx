"use client";

import SearchModal from "@/components/modal/search/Search";
import { useCart } from "@/context/CartContext";
import { navItems } from "@/lib/variable";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    if (isOpen) {
      document.addEventListener("click", closeMenu);
      window.addEventListener("scroll", closeMenu);
    }
    return () => {
      document.removeEventListener("click", closeMenu);
      window.removeEventListener("scroll", closeMenu);
    };
  }, [isOpen]);

  return (
    <>
      <div className="flex items-center justify-between h-16 px-6 bg-custom-white">
        <HiOutlineMenuAlt2 
          className="text-3xl cursor-pointer" 
          onClick={() => setIsOpen(!isOpen)} 
        />
        <Link href="/" className="text-2xl font-bold font-serif">ChipCraze</Link>
        <div className="flex items-center gap-3">
          <button onClick={() => setIsSearchOpen(true)}>
          <FaSearch className="text-black cursor-pointer" />
          </button>
         
          <Link href="/Cart" className="relative">
            <FaShoppingCart className="text-gray-600 w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-gray-700 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      <nav className={`fixed top-16 z-40 left-0 min-w-60  bg-slate-300 min-h-screen border px-6 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        {navItems.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="block text-lg relative overflow-hidden group py-2"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-500 transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
          </Link>
        ))}
        <div className="flex pt-5 gap-3">
          <Link href="/login">
            <button className="px-4 py-2 rounded-md bg-custom-white text-black">Login</button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-2 rounded-md bg-blue-500 text-white">Signup</button>
          </Link>
        </div>
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </nav>
    </>
  );
};

export default MobileNav;