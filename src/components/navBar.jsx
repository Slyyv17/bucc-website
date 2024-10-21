import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/bucc-logo.svg";

export default function NavBar() {
  const navLinks = [
    { path: "/", text: "Home" },
    { path: "/programs", text: "Programs" },
    { path: "/events", text: "Events" },
    { path: "/#about-us", text: "About" },
    { path: "/#contact-us", text: "Contact Us" },
  ];

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <nav className="relative flex items-center justify-between w-full px-5 py-4 bg-white font-primaryFF">

        {/* Container for Logo and Menu Icon */}
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo - Left aligned */}
          <img src={logo} alt="Bucc Logo" className="h-10" />

          {/* Menu Toggle Icon - Right aligned (only visible on mobile) */}
          <FontAwesomeIcon
            icon={faBars}
            className="ml-auto text-2xl cursor-pointer text-primary md:hidden"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>

        {/* Navigation Links - Centered */}
        <div
          className={`${
            showMenu
              ? "flex flex-col items-center gap-5 bg-white py-5 absolute top-16 left-0 w-full z-50 transition-transform transform translate-y-0 duration-300 ease-in-out"
              : "hidden transform -translate-y-full transition-transform duration-500 ease-in-out md:transform-none md:flex"
          } flex-grow md:flex-row md:justify-center md:gap-10 md:static md:bg-transparent`}
        >
          {navLinks.map((link) =>
            link.path.includes("#") ? (
              <HashLink
                smooth
                key={link.path}
                to={link.path}
                className="py-2 font-semibold text-primary hover:border-b-2 hover:border-primary md:py-0"
              >
                {link.text}
              </HashLink>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className="py-2 font-semibold text-primary hover:border-b-2 hover:border-primary md:py-0"
              >
                {link.text}
              </Link>
            )
          )}
        </div>
      </nav>
    </div>
  );
}
