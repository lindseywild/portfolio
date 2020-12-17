import React from "react"
import styled from "styled-components"
import texture from "../images/texture.png"

const HeaderContainer = styled.header`
  text-align: center;
  padding: 2rem;
  background-image: url(${texture});
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.dark};
`

const Headline = styled.h1`
  font-size: 2rem;
  margin: 0 auto;
  max-width: 500px;
  font-family: ${props => props.theme.headingFontStack};

  span {
    font-size: 1.5rem;
    display: block;
    font-weight: 300;
    margin-top: 0.5rem;
    padding-top: 0.5rem;
    font-family: ${props => props.theme.bodyFontStack};
    border-top: 1px solid ${props => props.theme.secondaryColor};
  }
`

const Header = () => (
  <HeaderContainer>
    <Headline>Lindsey Wild <span>Senior Front End Engineer</span></Headline>
  </HeaderContainer>
)

export default Header
