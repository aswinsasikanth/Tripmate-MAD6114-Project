import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "../../constants/MenuItems";
import "./NavbarStyles.css";

const Navbar = () => {
  // State to handle the menu toggle
  const [clicked, setClicked] = useState(false);

  // Function to toggle the menu state
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="NavbarItems obj-width">
      {/* Logo part of the Navbar */}
      <h1>
        <Link className="navbar-logo" to={"/"}>
          TripMate
        </Link>
      </h1>

      {/* Menu icon for toggling the menu in mobile view */}
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      {/* Navigation menu items */}
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
