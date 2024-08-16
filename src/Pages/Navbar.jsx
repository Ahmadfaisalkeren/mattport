import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="p-2 bg-primary">
      <div className="container flex mx-auto justify-between">
        <h1 className="text-2xl font-bold text-quaternary">Matt Portfolio</h1>
        <ul className="hidden xl:flex items-center gap-4">
          <a href="#" className="text-quaternary">
            Home
          </a>
          <a href="#" className="text-quaternary">
            Projects
          </a>
          <a href="#" className="text-quaternary">
            Skills
          </a>
          <a href="#" className="text-quaternary">
            Contact
          </a>
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
          <li className="p-1 list-none w-full text-center hover:bg-tertiary hover:text-quaternary transition-all duration-300 cursor-pointer">
            Home
          </li>
          <li className="p-1 list-none w-full text-center hover:bg-tertiary hover:text-quaternary transition-all duration-300 cursor-pointer">
            Projects
          </li>
          <li className="p-1 list-none w-full text-center hover:bg-tertiary hover:text-quaternary transition-all duration-300 cursor-pointer">
            Skills
          </li>
          <li className="p-1 list-none w-full text-center hover:bg-tertiary hover:text-quaternary transition-all duration-300 cursor-pointer">
            Contacts
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
