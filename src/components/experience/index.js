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
    const { company, title } = this.props.position;

    return (
      <p>
        {company}
        {title}
      </p>
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
