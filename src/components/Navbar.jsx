import React from "react";
import { FaGem, FaSearch, FaOpencart, FaRegUser } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <h1>
            <FaGem className="logo-icon" />
            Zestara<span>.</span>
          </h1>
        </div>

        <div className="navbar__search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search here..."
          />
          <button type="button">
            <FaSearch />
          </button>
        </div>
        <div className="navbar__icons">
          <div className="navbar__icon-item">
            <span>
              <FaOpencart />
            </span>
            <span className="navbar__badge">0</span>
          </div>
          <div className="navbar__icon-item">
            <span>
              <FaRegUser />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
