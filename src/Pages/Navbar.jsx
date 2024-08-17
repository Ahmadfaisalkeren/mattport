import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="p-2 bg-primary fixed top-0 left-0 w-full z-50">
      <div className="container flex mx-auto justify-between">
        <h1 className="text-2xl font-bold text-quaternary">Matt Portfolio</h1>
        <ul className="hidden xl:flex items-center gap-4">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer text-quaternary">
            Home
          </Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer text-quaternary">
            Projects
          </Link>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer text-quaternary">
            Skills
          </Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer text-quaternary">
            Contact
          </Link>
        </ul>
        <div className="xl:hidden md:hidden flex items-center text-2xl text-quaternary mt-1">
          {isMenuOpen ? (
            <FaTimes
              className="w-7 h-7 ml-2 text-white cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          ) : (
            <FaBars
              className="w-7 h-7 ml-2 text-white cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          )}
        </div>
        <div
          className={`md:hidden absolute top-12 left-0 w-full bg-white flex flex-col items-center gap-3 font-semibold z-10 overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="p-1 list-none w-full text-center hover:bg-tertiary hover:text-quaternary transition-all duration-300 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="p-1 list-none w-full text-center hover:bg-tertiary hover:text-quaternary transition-all duration-300 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="p-1 list-none w-full text-center hover:bg-tertiary hover:text-quaternary transition-all duration-300 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="p-1 list-none w-full text-center hover:bg-tertiary hover:text-quaternary transition-all duration-300 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
