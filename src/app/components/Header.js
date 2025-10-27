"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaHome, FaUser, FaEnvelope, FaChevronDown, FaBriefcase, FaFolder, FaStar } from "react-icons/fa";
import ResumeButton from "./ResumeButton";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
    };
  }, [isOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-gray-900/90 backdrop-blur-md" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 z-[60]">
          <Image
            src="/images/mk.png"
            width="40"
            height="40"
            alt="Logo"
            className="rounded-full"
          />
        </Link>

        {/* Drawer Icon */}
        <button
          onClick={() => setIsOpen(true)}
          className={`text-white text-2xl hover:opacity-80 transition-all duration-300 p-2 rounded-lg z-[60] ${
            isScrolled 
              ? "bg-black/30 backdrop-blur-sm" 
              : "bg-black/30 backdrop-blur-sm"
          }`}
          aria-label="Open Menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop - Higher z-index */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-lg z-[100]"
            />
            
            {/* Drawer Panel - Highest z-index */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                duration: 0.3, 
                ease: "easeOut" 
              }}
              className="fixed top-0 right-0 w-80 h-full bg-gradient-to-b from-gray-900 to-gray-800 text-white z-[101] shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-700 bg-gray-900">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/images/mk.png"
                    width="40"
                    height="40"
                    alt="Logo"
                    className="rounded-full"
                  />
                  <h2 className="text-xl font-bold text-white">
                    Menu
                  </h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Menu"
                  className="text-gray-400 hover:text-white transition-all duration-200 p-2 hover:bg-gray-700 rounded-lg"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700/50 transition-all duration-200 group no-underline"
                >
                  <FaHome className="text-gray-400 group-hover:text-white transition-colors" />
                  <span className="font-medium text-white">Home</span>
                </Link>

                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700/50 transition-all duration-200 group no-underline"
                >
                  <FaUser className="text-gray-400 group-hover:text-white transition-colors" />
                  <span className="font-medium text-white">About</span>
                </Link>

                {/* Portfolio Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-700/50 transition-all duration-200 group"
                  >
                    <div className="flex items-center space-x-3">
                      <FaBriefcase className="text-gray-400 group-hover:text-white transition-colors" />
                      <span className="font-medium text-white">Portfolio</span>
                    </div>
                    <motion.div
                      animate={{ rotate: dropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaChevronDown className="text-gray-400 text-sm" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-8 mt-1 space-y-1 overflow-hidden"
                      >
                        <Link
                          href="/career"
                          onClick={() => {
                            setIsOpen(false);
                            setDropdownOpen(false);
                          }}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700/30 transition-all duration-200 group no-underline"
                        >
                          <FaBriefcase className="text-gray-400 group-hover:text-white transition-colors text-sm" />
                          <span className="text-white">Career</span>
                        </Link>
                        <Link
                          href="/portfolio"
                          onClick={() => {
                            setIsOpen(false);
                            setDropdownOpen(false);
                          }}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700/30 transition-all duration-200 group no-underline"
                        >
                          <FaFolder className="text-gray-400 group-hover:text-white transition-colors text-sm" />
                          <span className="text-white">Projects</span>
                        </Link>
                        <Link
                          href="/testimonials"
                          onClick={() => {
                            setIsOpen(false);
                            setDropdownOpen(false);
                          }}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700/30 transition-all duration-200 group no-underline"
                        >
                          <FaStar className="text-gray-400 group-hover:text-white transition-colors text-sm" />
                          <span className="text-white">Testimonials</span>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700/50 transition-all duration-200 group no-underline"
                >
                  <FaEnvelope className="text-gray-400 group-hover:text-white transition-colors" />
                  <span className="font-medium text-white">Contact</span>
                </Link>
              </nav>

              {/* Resume Button */}
              <div className="p-6 border-t border-gray-700 bg-gray-900">
                <ResumeButton />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;