import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Website Name */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">ChipCraze</h2>
            <p className="text-sm">Your go-to site for tech deals!</p>
          </div>

          {/* Links */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-md font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2 md:space-y-0 md:space-x-4 md:flex">
              <li>
                <Link href="/about" className="hover:text-yellow-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-yellow-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-md font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="hover:text-yellow-400"
              >
                Facebook
              </Link>
              <Link
                href="https://twitter.com"
                className="hover:text-yellow-400"
              >
                Twitter
              </Link>
              <Link
                href="https://instagram.com"
                className="hover:text-yellow-400"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-gray-600 pt-4 text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} ChipCraze. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
