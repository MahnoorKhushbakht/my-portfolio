"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBars } from "react-icons/fa";
import ResumeButton from "./ResumeButton";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Navbar expand="lg" className="bg-indigo-400 md:p-1 p-2">
      <Container className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <Navbar.Brand href="/">
            <Image
              src="/images/mk.png"
              width="35"
              height="35"
              className="d-inline-block align-top"
              alt="avatar"
            />
          </Navbar.Brand>
        </div>

        <div className="hidden md:flex justify-center">
          <Nav className="flex space-x-4">
            <Nav.Item>
              <Link href="/" passHref legacyBehavior>
                <a className="nav-link text-white">Home</a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/about" passHref legacyBehavior>
                <a className="nav-link text-white">About</a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/contact" passHref legacyBehavior>
                <a className="nav-link text-white">Contact</a>
              </Link>
            </Nav.Item>

            <div
              className="relative cursor-pointer text-indigo-100"
            >
                              <button
                  className="nav-link text-white"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Dropdown ▼
                </button>
            
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 bg-indigo-500 text-white text-center shadow-lg rounded-md p-2 w-40"
                >
                  <Link href="/career" passHref legacyBehavior>
                    <a className="block py-1 px-2 hover:bg-indigo-600 text-white no-underline rounded">Career</a>
                  </Link>
                  <Link href="/portfolio" passHref legacyBehavior>
                    <a className="block py-1 px-2 hover:bg-indigo-600 text-white no-underline rounded">Portfolio</a>
                  </Link>
                  <div className="border-t border-indigo-300 my-1"></div>
                  <Link href="/testimonials" passHref legacyBehavior>
                    <a className="block py-1 px-2 hover:bg-indigo-600 text-white no-underline rounded">Testimonials</a>
                  </Link>
                </motion.div>
              )}
            </div>
          </Nav>
        </div>

        <div className="flex items-center justify-end space-x-3">
          <div className="hidden md:block">
            <ResumeButton />
          </div>
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars />
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed top-14 left-0 w-full backdrop-blur-md bg-indigo-500/50 p-3 z-50 rounded-sm"
          >
            <Nav className="flex flex-col space-y-3 text-center">
              <Nav.Item>
                <Link href="/" passHref legacyBehavior>
                  <a className="nav-link text-white" onClick={() => setIsOpen(false)}>Home</a>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/about" passHref legacyBehavior>
                  <a className="nav-link text-white" onClick={() => setIsOpen(false)}>About</a>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/contact" passHref legacyBehavior>
                  <a className="nav-link text-white" onClick={() => setIsOpen(false)}>Contact</a>
                </Link>
              </Nav.Item>

              <div className="relative">
                <button
                  className="text-white"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Dropdown ▼
                </button>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="bg-indigo-600 text-white rounded-md p-2 mt-2"
                  >
                    <Link href="/career" passHref legacyBehavior>
                      <a className="block py-1 px-2 text-white rounded no-underline">Career</a>
                    </Link>
                    <Link href="/portfolio" passHref legacyBehavior>
                      <a className="block py-1 px-2 text-white rounded no-underline">Portfolio</a>
                    </Link>
                    <div className="border-t border-indigo-400 my-1"></div>
                    <Link href="/testimonials" passHref legacyBehavior>
                      <a className="block py-1 px-2 text-white rounded no-underline">Testimonials</a>
                    </Link>
                  </motion.div>
                )}
              </div>

              <div className="mt-3 flex justify-center">
                <ResumeButton />
              </div>
            </Nav>
          </motion.div>
        )}
      </AnimatePresence>
    </Navbar>
  );
}

export default Header;
