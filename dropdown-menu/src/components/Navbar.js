import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart, FaTimes, FaBars, FaCaretDown } from 'react-icons/fa'
import Dropdown from './Dropdown'

import './Navbar.css'
import './Button.css'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click)

  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () =>
    window.innerWidth < 960 ? setDropdown(false) : setDropdown(true)

  const onMouseLeave = () =>
    window.innerWidth < 960 ? setDropdown(false) : setDropdown(false)

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        WE <FaHeart className="heart" /> CORK
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        {click ? (
          <FaTimes className="fa-times" />
        ) : (
          <FaBars className="fa-bars" />
        )}
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>

        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
            Services <FaCaretDown className="fa-caretdown" />
          </Link>

          {dropdown && <Dropdown />}
        </li>

        <li className="nav-item">
          <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
            Products
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/contact-us"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>
        </li>

        <li>
          <Link
            to="/sign-up"
            className="nav-links-mobile"
            onClick={closeMobileMenu}
          >
            <button className="btn">Sign Up</button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
