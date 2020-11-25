import styled from 'styled-components'

export const Container = styled.div`
  padding: 80px 60px;
  background: radial-gradient(
    circle,
    rgba(92, 39, 251, 1) 0%,
    rgba(112, 71, 247, 1) 100%
  );

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;

  @media (max-width: 470px) {
    margin: 0 auto;
  }
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;

  @media (max-width: 470px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`

export const Link = styled.a`
  color: #fafafa;
  font-size: 15px;
  margin-bottom: 9px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
  }
`

export const Title = styled.h4`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #fafafa;
  text-shadow: 1px 1px 2px black;
`

export const Icon = styled.i`
  font-size: 18px;
  margin-right: 16px;
`

export const Heading = styled.h1`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans - serif;
  font-size: 2.4rem;
  margin-bottom: 1.5rem;
  color: #fafafa;
`
export const SubHeading = styled.p`
  margin-bottom: 2.4rem;
  font-size: 2rem;
  color: #fafafa;
`
export const Form = styled.form`
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & > button {
    @media screen and (max-width: 960px) {
      width: auto;
    }
  }
`
export const FormInput = styled.input`
  padding: 1rem 2rem;
  border-radius: 2px;
  margin-right: 1rem;
  outline: none;
  font-size: 1.6rem;
  border: 1px solid #fff;
  width: 250px;
  max-width: 250px;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
  }
`
