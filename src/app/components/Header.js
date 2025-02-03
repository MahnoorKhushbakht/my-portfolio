"use client";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <Navbar expand="lg" className="bg-indigo-300 md:p-0 p-2">
      <Container>
        <Navbar.Brand href="/">
          <Image
            src="/images/mk.png"
            width="35"
            height="35"
            className="d-inline-block align-top"
            alt="avatar"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto flex items-center space-x-4">
            <Nav.Item>
              <Link href="/" passHref legacyBehavior>
                <a className="nav-link">Home</a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/career" passHref legacyBehavior>
                <a className="nav-link">Career</a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/about" passHref legacyBehavior>
                <a className="nav-link">Behind the Code</a>
              </Link>
            </Nav.Item>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
