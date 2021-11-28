import React from "react"
import styled from "styled-components"

const SocialIcons = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;

  a {
    background-color: transparent;
    border-color: #EAD2AC;
    margin: 0 0.75rem;
    padding: 0.5rem;
  }

  i {
    font-size: 1.5rem;
    color: #1D201F;
  }
`

const Social = () => (
  <SocialIcons>
    <li><a href="https://twitter.com/lindseywild_"><i className="fa fa-twitter" aria-label="Lindsey Wild on Twitter"></i></a></li>
    <li><a href="https://www.linkedin.com/in/lindseywild/"><i className="fa fa-linkedin" aria-label="Lindsey Wild on LinkedIn"></i></a></li>
    <li><a href="https://github.com/lindseywild"><i className="fa fa-github" aria-label="Lindsey Wild on GitHub"></i></a></li>
    <li><a href="https://codepen.io/lindseywild"><i className="fa fa-codepen" aria-label="Lindsey Wild on CodePen"></i></a></li>
  </SocialIcons>
)


export default Social
