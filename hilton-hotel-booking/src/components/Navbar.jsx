import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  return (
    <header>
      <div className="header-container">
        <nav className="header-nav-bar">
          <div className="header-nav-logo">
            <Link to="/">
              <img
                src="https://www.hilton.com/modules/assets/svgs/logos/HI.svg"
                alt="star hotels logo"
              />
            </Link>
          </div>
          <ul className={`header-nav-lists ${isHamburgerOpen && "show"} `}>
            <li className="header-nav-list">
              <Link to="/">
                <span className="header-nav-link header-active">Home</span>
              </Link>
            </li>
            <li
              className="header-nav-list"
              onClick={() =>
                isHamburgerOpen &&
                setIsHamburgerOpen((previousValue) => !previousValue)
              }>
              <NavHashLink to="/#rooms-section">
                <span className="header-nav-link">Rooms and Suites</span>
              </NavHashLink>
            </li>
            <li
              className="header-nav-list"
              onClick={() =>
                isHamburgerOpen &&
                setIsHamburgerOpen((previousValue) => !previousValue)
              }>
              <NavHashLink to="/#facilities-section">
                <span className="header-nav-link">Facilities</span>
              </NavHashLink>
            </li>

            <li className="header-nav-list">
              <Link to="/booking">
                <span className="header-btn header-btn-custom">BOOK NOW</span>
              </Link>
            </li>
            <li className="header-nav-list">
              <Link to="/my-bookings">
                <span className="header-nav-link">My Bookings</span>
              </Link>
            </li>
          </ul>

          <div
            className={`header-hamburger-icon ${isHamburgerOpen && "show"} `}
            onClick={() =>
              setIsHamburgerOpen((previousValue) => !previousValue)
            }>
            <div className="header-hamburger-line-1" />
            <div className="header-hamburger-line-2" />
            <div className="header-hamburger-line-3" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
