import styled, { css, createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-family: 'Source Sans Pro', Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans','Helvetica Neue', sans-serif;
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.8rem;
  }
`

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 991px) {
    padding: 0 30px;
  }
`
export const Button = styled.button`
  ${({ primary, wide, fontBig }) => css`
    border-radius: 4px;
    white-space: nowrap;
    color: #fafafa;
    background: ${primary ? '#4B59F7' : '#0467FB'};
    padding: ${wide ? '1.2rem 6.4rem' : '1rem 2rem'};
    font-size: ${fontBig ? '2rem' : '1.6rem'};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
      transition: all 0.3s ease-out;
      background: #fafafa;
      background-color: ${primary ? '#0467FB' : '#4B59F7'};
    }

    @media screen and (max-width: 960px) {
      width: 100%;
    }
  `}
`

export default GlobalStyles
