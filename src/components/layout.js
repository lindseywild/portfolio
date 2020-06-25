/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import Social from "./social"
import texture from "../images/texture.png"

// global styles - FOR AMERICA 🇺🇸
import "../scss/main.scss";

const Container = styled.div`
  margin: 2rem auto;
  padding: 0 1rem;
  max-width: 1024px;
`

const Footer = styled.footer`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background-image: url(${texture});
  background-color: ${props => props.theme.primaryColor};
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>{children}</Container>
      <Footer>
        <Social />
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
