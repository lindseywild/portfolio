import React from "react"
import styled from "styled-components"
import texture from "../images/texture.png"

const Header = () => (
  <HeaderContainer>
    <Headline>Lindsey Wild <span>Front End Engineer</span></Headline>
  </HeaderContainer>
)

const HeaderContainer = styled.header`
  text-align: center;
  padding: 2rem;
  background-image: url(${texture});
`

const Headline = styled.h1`
  font-size: 2rem;
  margin: 0 auto;
  max-width: 500px;

  span {
    font-size: 1.5rem;
    display: block;
    font-weight: 300;
    margin-top: 0.5rem;
    padding-top: 0.5rem;
  }
`
export default Header
