import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { XIcon, SearchIcon } from "lucide-react";
import { products } from "@/lib/variable";
import { useRouter } from "next/navigation";

interface SearchResult {
  id: string;
  name: string;
  description: string;
}

export default function SearchModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    const performSearch = () => {
      setSearchResults(
        products.filter(
          (result) =>
            result.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            result.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    };

    if (searchTerm) {
      const debounce = setTimeout(() => {
        performSearch();
      }, 300);

      return () => clearTimeout(debounce);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleClickOutside = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  const handleProductClick = (productId: string) => {
    router.push(`/product/${productId}`);
    onClose();
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-20"
      onClick={handleClickOutside}
    >
      <div
        ref={modalRef}
        className="bg-white w-full max-w-2xl rounded-lg shadow-lg"
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-modal-title"
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 id="search-modal-title" className="text-xl font-semibold">
            Search Products
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-label="Close search"
          >
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
            <SearchIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
          </div>
          <div className="mt-4 max-h-96 overflow-y-auto">
            {searchResults.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {searchResults.map((result) => (
                  <li
                    key={result.id}
                    className="py-4 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleProductClick(result.id)}
                  >
                    <h3 className="text-lg font-medium text-gray-900">
                      {result.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {result.description}
                    </p>
                  </li>
                ))}
              </ul>
            ) : searchTerm ? (
              <p className="text-center text-gray-500 py-4">No results found</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
