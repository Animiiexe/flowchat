"use client";

import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react"; // Import Lucide Icons
import clsx from "clsx"; // For conditional classNames

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Glassmorphic Navbar */}
      <div className="backdrop-blur-lg bg-white/5  ">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo with Icon */}
          <Link href="/" className="text-2xl font-extrabold tracking-wide flex items-center text-white space-x-2">
            <MessageCircle className="h-7 w-7 text-white" /> {/* Icon */}
            <span>FlowChat</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-lg font-medium text-white">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/forums">Forums</NavItem>
            <NavItem href="/chat">UserChat</NavItem>
            <UserButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          "fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-64 bg-white/10 backdrop-blur-lg border-l border-white/20 shadow-lg transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6 p-6 text-white">
          <MobileNavItem href="/" onClick={() => setIsOpen(false)}>Home</MobileNavItem>
          <MobileNavItem href="/forums" onClick={() => setIsOpen(false)}>Forums</MobileNavItem>
          <MobileNavItem href="/chat" onClick={() => setIsOpen(false)}>UserChat</MobileNavItem>
          <div className="mt-4">
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// Reusable NavLink Components
const NavItem = ({ href, children }) => (
  <Link
    href={href}
    className="hover:text-gray-300 transition duration-200 ease-in-out"
  >
    {children}
  </Link>
);

const MobileNavItem = ({ href, children, onClick }) => (
  <Link
    href={href}
    className="block text-lg font-medium hover:text-gray-300 transition duration-200"
    onClick={onClick}
  >
    {children}
  </Link>
);
