"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

// Reusable NavLink Component
const NavLink = ({ href, text, onClick }) => (
  <a
    href={href}
    className="block px-3 py-2 text-lg md:text-xl text-green-400 hover:text-white flex items-center space-x-2 font-semibold"
    onClick={(e) => {
      e.preventDefault();
      scrollToSection(href.slice(1)); // Pass the id to the scrollToSection function
      onClick && onClick(); // Call the onClick handler if provided
    }}
  >
    {text}
  </a>
);

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);

  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 left-0 w-full bg-black bg-opacity-90 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <div className="relative">
          <Image src="./images/Logo.svg" alt="Logo" height={60} width={60} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#about" text="🌟 About" />
          <NavLink href="#experience" text="👨‍💼 Experience" />
          <NavLink href="#work" text="💼 Work" />
          <NavLink href="#contact" text="✉️ Contact" />
          <a
            href="./files/Wasif-Hossain-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border text-green-400 border-green-400 px-4 py-2 rounded hover:bg-green-400 hover:text-black flex items-center space-x-2 font-semibold text-lg md:text-xl"
          >
            📄 Resume
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={handleMenuToggle}
            className="text-green-400 text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 absolute top-full left-0 w-full">
          <NavLink href="#about" text="🌟 About" onClick={handleCloseMenu} />
          <NavLink href="#experience" text="👨‍💼 Experience" onClick={handleCloseMenu} />
          <NavLink href="#work" text="💼 Work" onClick={handleCloseMenu} />
          <NavLink href="#contact" text="✉️ Contact" onClick={handleCloseMenu} />
          <a
            href="./files/Wasif-Hossain-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 text-green-400 hover:text-white flex items-center space-x-2 font-semibold text-lg"
            onClick={handleCloseMenu}
          >
            📄 Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
