import styled, { css } from 'styled-components'
import { Container } from 'global-styles'
import { Link } from 'react-router-dom'
import { FaMagento } from 'react-icons/fa'

export const Nav = styled.nav`
  background: #101522;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  position: sticky;
  top: 0;
  z-index: 999;
`
export const NavBarWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  ${Container}
`
export const NavLogo = styled(Link)`
  color: #fafafa;
  display: flex;
  justify-self: flex-start;
  font-size: 3rem;
  align-items: center;
  justify-items: center;
  cursor: pointer;
  text-decoration: none;
`

export const NavIcon = styled(FaMagento)`
  margin-right: 1rem;
`
export const MobileIcon = styled.div`
  display: none;
  color: #fafafa;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 3rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  height: 10vh;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 10vh;
    background: #101522;
    opacity: 1;
    left: ${({ click }) => (click ? 0 : '-100%')};
    justify-content: center;
  }
`
export const NavItem = styled.li`
  @media screen and (max-width: 960px) {
    width: 50%;
    height: 80px;
    margin-bottom: 2.5rem;
  }
`
export const NavLinks = styled(Link)`
  ${({ btnHover }) => css`
    color: #fafafa;
    text-decoration: none;
    padding: 1rem 2.5rem;
    margin: 1rem;
    height: 100%;

    &:hover {
      border-bottom: ${btnHover ? 'none' : '2px solid #4b59f7'};
    }

    @media screen and (max-width: 960px) {
      display: flex;
      text-align: center;
      height: 100%;
      width: 100%;
      margin: 0 auto;
      align-items: center;
      justify-content: center;

      &:hover {
        color: #4b59f7;
        transition: all 0.3s ease;
        border: none;
      }
    }
  `}
`
