// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = () => (
  <HeaderContainer>
    <Headline>Lindsey Wild <span>Front End Engineer</span></Headline>
  </HeaderContainer>
)

const HeaderContainer = styled.header`
  text-align: center;
  padding: 2rem;
`

const Headline = styled.h1`
  font-size: 2rem;
  margin-bottom: 0;
  letter-spacing: 0.15rem;

  span {
    font-size: 1.5rem;
    display: block;
    font-weight: 300;
    letter-spacing: 0;
    margin-top: 0.5rem;
    padding-top: 0.5rem;
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
