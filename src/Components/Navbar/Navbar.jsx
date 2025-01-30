import React, { useState, useContext } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { UilBars, UilTimes } from "@iconscout/react-unicons"; 
import { themeContext } from "../../Context"; // Import the theme context

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu visibility
  const theme = useContext(themeContext); // Access the theme context
  const darkMode = theme.state.darkMode; // Get the darkMode state from the context

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="n-wrapper" id="Navbar">
      {/* Left */}
      <div className="n-left">
        <div className="n-name">Ankana</div>
        <Toggle />
      </div>

      {/* Right */}
      <div className="n-right">
        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? (
            <UilTimes size="30" color={darkMode ? "white" : "#000"} /> // White if darkMode is true
          ) : (
            <UilBars size="30" color={darkMode ? "white" : "#000"} /> // White if darkMode is true
          )}
        </div>

        {/* Navigation List */}
        <div className={`n-list ${menuOpen ? "open" : ""}`}>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link
                activeClass="active"
                to="Navbar"
                spy={true}
                smooth={true}
                onClick={toggleMenu} // Close menu when clicked
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true} onClick={toggleMenu}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true} onClick={toggleMenu}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true} onClick={toggleMenu}>
                Project
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
