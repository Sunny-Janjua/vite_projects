"use client";
import { useState } from "react";
import Link from "next/link";
import { SlBasket } from "react-icons/sl";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-4 b shadow-md fixed top-0 left-0 w-full z-50">
      <h1 className="text-2xl font-bold text-orange-600">CW SUNNY</h1>
      <button
        className="lg:hidden cursor-pointer text-white focus:outline-none z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <div
          className={`w-6 h-0.5 bg-orange-700 mb-1 transition-transform duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-orange-700 mb-1 transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-orange-700 transition-transform duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </button>

      {/* Full-Screen Transparent Navigation Menu */}
      <nav
        className={`fixed inset-0 bg-black bg-opacity-90 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out flex flex-col items-center justify-center lg:static lg:translate-x-0 lg:flex lg:flex-row lg:space-x-6 lg:bg-transparent`}
      >
        <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0 text-center lg:text-left">
          <li className="list-none">
            <Link
              href={"/"}
              className="text-orange-600 text-2xl lg:text-base font-semibold hover:text-white transition-colors hover:bg-black hover:px-4 hover:rounded-full hover:py-1"
              onClick={() => setMenuOpen(false)} // Close the menu after clicking a link
            >
              Home
            </Link>
          </li>
          <li className="list-none">
            <Link
              href={"/about"}
              className="text-orange-600 text-2xl lg:text-base font-semibold hover:text-white transition-colors hover:bg-black hover:px-4 hover:rounded-full hover:py-1"
              onClick={() => setMenuOpen(false)} // Close the menu after clicking a link
            >
              About
            </Link>
          </li>
          <li className="list-none">
            <Link
              href={"/shop"}
              className="text-orange-600 text-2xl lg:text-base font-semibold hover:text-white transition-colors hover:bg-black hover:px-4 hover:rounded-full hover:py-1"
              onClick={() => setMenuOpen(false)} // Close the menu after clicking a link
            >
              Shop
            </Link>
          </li>
          <li className="list-none">
            <Link
              href={"/contact"}
              className="text-orange-600 text-2xl lg:text-base font-semibold hover:text-white transition-colors hover:bg-black hover:px-4 hover:rounded-full hover:py-1"
              onClick={() => setMenuOpen(false)} // Close the menu after clicking a link
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Action Buttons */}
      <div className="hidden lg:flex space-x-4">
        <Link href={"#"}>
          <button className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">
            Sign In
          </button>
        </Link>
        <button className="p-2 rounded-full">
          <SlBasket size={20} className="text-orange-600"/>
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="absolute inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)} // Close the menu when the overlay is clicked
        ></div>
      )}
    </header>
  );
}
