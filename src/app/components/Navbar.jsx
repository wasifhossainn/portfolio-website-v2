"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

// Reusable NavLink Component
const NavLink = ({ href, text, onClick }) => (
  <a
    href={href}
    className="block px-3 py-2 text-green-400 hover:text-white"
    onClick={onClick}
  >
    {text}
  </a>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 left-0 w-full bg-black bg-opacity-90 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <div className="relative">
          <Image src="/images/Logo.svg" alt="Logo" height={60} width={60} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#about" text="1. About" />
          <NavLink href="#experience" text="2. Experience" />
          <NavLink href="#work" text="3. Work" />
          <NavLink href="#contact" text="4. Contact" />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border text-white border-green-400 px-4 py-2 rounded hover:bg-green-400 hover:text-white"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={handleMenuToggle}
            className="text-green-400 text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 absolute top-full left-0 w-full">
          <NavLink href="#about" text="1. About" onClick={handleCloseMenu} />
          <NavLink
            href="#experience"
            text="2. Experience"
            onClick={handleCloseMenu}
          />
          <NavLink href="#work" text="3. Work" onClick={handleCloseMenu} />
          <NavLink href="#contact" text="4. Contact" onClick={handleCloseMenu} />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 text-green-400 hover:text-white border-t border-gray-700"
            onClick={handleCloseMenu}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
