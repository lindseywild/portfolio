import React from "react"
import styled from "styled-components"

const Social = () => (
  <SocialIcons>
    <li><a href="https://twitter.com/stananick"><i class="fa fa-twitter"></i></a></li>
    <li><a href="https://www.linkedin.com/in/lindseywild/"><i class="fa fa-linkedin"></i></a></li>
    <li><a href="https://github.com/lindseywild"><i class="fa fa-github"></i></a></li>
    <li><a href="https://codepen.io/stananick"><i class="fa fa-codepen"></i></a></li>
  </SocialIcons>
)

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

export default Social
