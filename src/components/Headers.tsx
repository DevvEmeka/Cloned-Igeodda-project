import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="flex justify-between items-center p-5 border-b-2 relative">
      <div className="text-xl font-bold">CLONED IGEODDA Inc</div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden lg:hidden absolute right-4 top-4">
        <button onClick={toggleMenu} aria-label="Toggle menu" className="text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 justify-center">
        {/* Static Navigation Links */}
        <Link
          to="/"
          className="pb-1 border-b-2 border-transparent hover:border-red-500 hover:pb-2 transition-all duration-300"
        >
          Home
        </Link>
        <Link
          to="/about-us"
          className="pb-1 border-b-2 border-transparent hover:border-red-500 hover:pb-2 transition-all duration-300"
        >
          About Us
        </Link>
        <Link
          to="/services"
          className="pb-1 border-b-2 border-transparent hover:border-red-500 hover:pb-2 transition-all duration-300"
        >
          Services
        </Link>
        <Link
          to="/resources"
          className="pb-1 border-b-2 border-transparent hover:border-red-500 hover:pb-2 transition-all duration-300"
        >
          Resources
        </Link>
        <Link
          to="/careers"
          className="pb-1 border-b-2 border-transparent hover:border-red-500 hover:pb-2 transition-all duration-300"
        >
          Careers
        </Link>
        <Link
          to="/contact-us"
          className="pb-1 border-b-2 border-transparent hover:border-red-500 hover:pb-2 transition-all duration-300"
        >
          Contact Us
        </Link>
        <Link
          to="/gallery"
          className="pb-1 border-b-2 border-transparent hover:border-red-500 hover:pb-2 transition-all duration-300"
        >
          Gallery
        </Link>
        <Link
          to="/blog"
          className="pb-1 border-b-2 border-transparent hover:border-red-500 hover:pb-2 transition-all duration-300"
        >
          Blog
        </Link>
        <Link
          to="/faq"
          className="pb-1 border-b-2 border-transparent hover:border-red-500 hover:pb-2 transition-all duration-300"
        >
          FAQ
        </Link>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <nav className="md:hidden lg:hidden bg-white shadow-lg absolute top-12 left-0 right-0 p-4">
          <ul className="space-y-4 text-center">
            {/* Mobile Navigation Links */}
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block pb-1 border-b-2 border-transparent hover:border-red-500 hover:pb-2 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                onClick={() => setIsOpen(false)}
                className="block pb-1 border-b-2 border-transparent hover:border-red-500 hover:pb-2 transition-all duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className="block pb-1 border-b-2 border-transparent hover:border-red-500 hover:pb-2 transition-all duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                onClick={() => setIsOpen(false)}
                className="block pb-1 border-b-2 border-transparent hover:border-red-500 hover:pb-2 transition-all duration-300"
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                onClick={() => setIsOpen(false)}
                className="block pb-1 border-b-2 border-transparent hover:border-red-500 hover:pb-2 transition-all duration-300"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                onClick={() => setIsOpen(false)}
                className="block pb-1 border-b-2 border-transparent hover:border-red-500 hover:pb-2 transition-all duration-300"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                onClick={() => setIsOpen(false)}
                className="block pb-1 border-b-2 border-transparent hover:border-red-500 hover:pb-2 transition-all duration-300"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                onClick={() => setIsOpen(false)}
                className="block pb-1 border-b-2 border-transparent hover:border-red-500 hover:pb-2 transition-all duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                onClick={() => setIsOpen(false)}
                className="block pb-1 border-b-2 border-transparent hover:border-red-500 hover:pb-2 transition-all duration-300"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
