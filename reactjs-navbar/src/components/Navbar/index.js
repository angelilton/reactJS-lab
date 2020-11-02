import { Button } from 'components/Button'
import React, { useState } from 'react'
import { MenuItems } from './MenuItems'

import './Navbar.css'

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handClick = () => setClick(!click)

  return (
    <div className="navbar-items">
      <h1 className="navbar-logo">
        React<i className="fab fa-react"></i>
      </h1>
      <div className="menu-icon" onClick={handClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <a className={item.cName} href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
        <li>
          <Button>Sign UP</Button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
