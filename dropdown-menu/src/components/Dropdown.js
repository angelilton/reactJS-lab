import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuData } from './MenuData'

import './Dropdown.css'

const Dropdown = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeDropMenu = () => setClick(false)
  return (
    <ul
      onClick={handleClick}
      className={click ? 'dropdown-menu active' : 'dropdown-menu'}
    >
      {MenuData.map((item, index) => (
        <li key={index}>
          <Link className={item.cName} to={item.path} onClick={closeDropMenu}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Dropdown
