import styled, { css } from 'styled-components'

export const InfoSec = styled.div`
  ${({ bgColor }) => css`
    color: #fafafa;
    padding: 16rem 0;
    background: ${bgColor};
  `}
`

export const Row = styled.div`
  ${({ imgStart }) => css`
    display: flex;
    margin: 0 -1.5rem -1.5rem -1.5rem;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${imgStart} !important;
  `}
`

export const Collumn = styled.div`
  margin: 0 1.5rem 1.5rem 1.5rem;
  flex: 1;
  /* max-width: 50%;
  flex-basis: 50%; */

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`

export const TextWrapper = styled.div`
  padding-top: 0;
  max-width: 540px;
  padding-bottom: 6rem;

  @media screen and (max-width: 768px) {
    padding-bottom: 6.5rem;
  }
`
export const TopLine = styled.div`
  ${({ lightTopLine }) => css`
    color: ${lightTopLine};
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.6rem;
    letter-spacing: 1.4px;
    margin-bottom: 1.6rem;
  `}
`

export const Heading = styled.h1`
  ${({ lightText }) => css`
    font-size: 4.5rem;
    color: ${lightText};
    line-height: 1.1;
    font-weight: 600;
    margin-bottom: 2.4rem;
  `}
`
export const Subtitle = styled.p`
  ${({ lightTextDesc }) => css`
    font-size: 1.8rem;
    color: ${lightTextDesc};
    line-height: 2.4rem;
    max-width: 440px;
    margin-bottom: 3.5rem;
  `}
`

export const ImgWrapper = styled.div`
  ${({ start }) => css`
    max-width: 555px;
    display: flex;
    justify-content: ${start};
  `}
`

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`
