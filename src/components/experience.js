import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ExperienceItem = styled.section`
  margin-top: 3rem;
  max-width: 750px;

  h3 {
    display: inline;
  }
`

const Dates = styled.p`
  margin-top: 0.5rem;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 0.75rem;
  }
`

const ListItem = styled.li`
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    margin-bottom: 0.25rem;
  }
`

class Experience extends React.Component {
  render() {
    const { company, website, title, dates, experience } = this.props.position;

    const experienceItem = experience.map((item, key) => {
      return <ListItem key={key}>{item}</ListItem>
    });

    return (
      <ExperienceItem>
        <h3>
          <span>{title} @ </span>
          <a href={website}>{company}</a>
        </h3>
        <Dates><em>{dates}</em></Dates>
        <ul>
          {experienceItem}
        </ul>
      </ExperienceItem>
    )
  }
}

Experience.propTypes = {
  position: PropTypes.object,
}

export default Experience
