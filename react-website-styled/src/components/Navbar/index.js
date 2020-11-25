import * as G from 'global-styles'
import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import * as S from './styles'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showMobileButton = () =>
    window.innerWidth <= 960 ? setButton(false) : setButton(true)

  useEffect(() => {
    showMobileButton()
  }, [])

  window.addEventListener('resize', showMobileButton)

  return (
    <>
      <S.Nav>
        <S.NavBarWrapper>
          <S.NavLogo to="/">
            <S.NavIcon />
            ULTRA
          </S.NavLogo>
          <S.MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </S.MobileIcon>
          <S.NavMenu onClick={handleClick} click={click}>
            <S.NavItem>
              <S.NavLinks to="/" onClick={closeMobileMenu}>
                Home
              </S.NavLinks>
            </S.NavItem>

            <S.NavItem>
              <S.NavLinks to="/services" onClick={closeMobileMenu}>
                Services
              </S.NavLinks>
            </S.NavItem>

            <S.NavItem>
              <S.NavLinks to="/products" onClick={closeMobileMenu}>
                Products
              </S.NavLinks>
            </S.NavItem>

            <S.NavItem>
              <S.NavLinks btnHover to="/sign-up" onClick={closeMobileMenu}>
                {button ? (
                  <G.Button primary>SIGN UP</G.Button>
                ) : (
                  <G.Button primary fontBig>
                    SIGN UP-
                  </G.Button>
                )}
              </S.NavLinks>
            </S.NavItem>
          </S.NavMenu>
        </S.NavBarWrapper>
      </S.Nav>
    </>
  )
}

export default Navbar
