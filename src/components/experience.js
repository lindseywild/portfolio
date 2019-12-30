import React from "react"
import PropTypes from "prop-types"

// const Experience = ({ positions }) => (
//   Object.keys(positions).map((position, i) => (
//     <div key={i}>
//     <p>{position.title}</p>
//     <p>{position.name}</p>
//   </div>
//   ))
// )

class Experience extends React.Component {
  render() {
    const { company, title, dates, experience } = this.props.position;

    const experienceItem = experience.map((item, key) => {
      return <li key={key}>{item}</li>
    });

    return (
      <section>
        <h3>
          <strong>{title}</strong> &mdash; {company}
        </h3>
        <p>{dates}</p>
        <ul>
          {experienceItem}
        </ul>
      </section>
    )
  }
}
  // Object.keys(positions).map((position, i) => (
  //   <div key={i}>
  //   <p>{position.title}</p>
  //   <p>{position.name}</p>
  // </div>

Experience.propTypes = {
  position: PropTypes.object,
}

export default Experience
