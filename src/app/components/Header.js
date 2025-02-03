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

  const linkStyles = {
    color: "#c7d2fe",
  };

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
                <a className="nav-link" style={linkStyles}>Home</a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/career" passHref legacyBehavior>
                <a className="nav-link" style={linkStyles}>Career</a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/portfolio" passHref legacyBehavior>
                <a className="nav-link" style={linkStyles}>Portfolio</a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/testimonials" passHref legacyBehavior>
                <a className="nav-link" style={linkStyles}>Testimonials</a>
              </Link>
            </Nav.Item>
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
            className="md:hidden fixed top-16 left-0 w-full backdrop-blur-md bg-indigo-500/50 p-3 z-50"
          >
            <Nav className="flex flex-col space-y-3 text-center">
              <Nav.Item>
                <Link href="/" passHref legacyBehavior>
                  <a className="nav-link text-white" onClick={() => setIsOpen(false)}>Home</a>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/career" passHref legacyBehavior>
                  <a className="nav-link text-white" onClick={() => setIsOpen(false)}>Career</a>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/portfolio" passHref legacyBehavior>
                  <a className="nav-link text-white" onClick={() => setIsOpen(false)}>Portfolio</a>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/testimonials" passHref legacyBehavior>
                  <a className="nav-link text-white" onClick={() => setIsOpen(false)}>Testimonials</a>
                </Link>
              </Nav.Item>
          
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
