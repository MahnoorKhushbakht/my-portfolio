"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBars, FaChevronDown } from "react-icons/fa";
import ResumeButton from "./ResumeButton";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const desktopDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {

      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target)) {
        setDesktopDropdownOpen(false);
      }
      
    
      if (mobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const portfolioLinks = [
    { href: "/career", label: "Career" },
    { href: "/portfolio", label: "Projects" },
    { href: "/testimonials", label: "Testimonials" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/10 dark:bg-gray-900/10 backdrop-blur-lg border-b border-white/20 dark:border-gray-700/20" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2 no-underline">
          <Image
            src="/images/mk.png"
            width="40"
            height="40"
            alt="Logo"
            className="rounded-full"
          />
        </Link>

     
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-gray-300 transition-colors duration-200 no-underline"
            >
              {link.label}
            </Link>
          ))}

       
          <div className="relative" ref={desktopDropdownRef}>
            <button
              onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
              className="text-white hover:text-gray-300 transition-colors duration-200 flex items-center space-x-1 no-underline"
            >
              <span>Portfolio</span>
              <motion.div
                animate={{ rotate: desktopDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaChevronDown className="text-sm" />
              </motion.div>
            </button>
            
            {desktopDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 w-48 bg-gray-900/90 backdrop-blur-md rounded-lg shadow-xl border border-gray-700 overflow-hidden"
              >
                {portfolioLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setDesktopDropdownOpen(false)}
                    className="block px-4 py-3 text-white hover:bg-gray-800/50 transition-all duration-200 no-underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>

          <div className="ml-4">
            <ResumeButton />
          </div>
        </div>

       
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden text-white text-2xl hover:opacity-80 transition-all duration-300 p-2 rounded-lg backdrop-blur-md ${
            isScrolled 
              ? "bg-white/20 dark:bg-black/30" 
              : "bg-black/30"
          }`}
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <FaBars />
        </button>
      </div>

      
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-gray-900/90 backdrop-blur-md border-t border-gray-700 overflow-hidden"
          ref={mobileMenuRef}
        >
          <div className="p-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 no-underline"
              >
                {link.label}
              </Link>
            ))}

         
            <div className="pt-2 border-t border-gray-700">
              <p className="px-4 py-2 text-gray-400 text-sm font-medium">Portfolio</p>
              {portfolioLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-6 py-3 text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>

           
            <div className="pt-4 border-t border-gray-700">
              <ResumeButton />
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}

export default Header;