import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-transparent py-4 px-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="lg:text-2xl text-sm font-bold">
          <Link
            className="nav-link text-black hover:scale-125 transition-transform duration-300"
            to="/"
          >
            Solos
          </Link>
        </div>
        {/* Navigation Links */}
        <div className="flex space-x-8">
          <Link
            className="lg:text-lg text-[10px] text-black hover:scale-125 transition-transform will-change-transform duration-300 transform-gpu"
            to="/home"
          >
            Home
          </Link>
          <Link
            className="lg:text-lg text-[10px] texct-black hover:scale-125 transition-transform will-change-transform duration-300"
            to="/about"
          >
            About us
          </Link>
          <Link
            className="lg:text-lg text-[10px] text-black hover:scale-125 transition-transform will-change-transform duration-300"
            to="/case-studies"
          >
            Services
          </Link>
          <Link
            className="lg:text-lg text-[10px] text-black hover:scale-125 transition-transform will-change-transform duration-300"
            to="/contact"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
