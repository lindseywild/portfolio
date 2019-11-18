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
    return (
      <p>
        {this.props.position.company}
        {this.props.position.title}
      </p>
    )
  }
}
  // Object.keys(positions).map((position, i) => (
  //   <div key={i}>
  //   <p>{position.title}</p>
  //   <p>{position.name}</p>
  // </div>

// Experience.propTypes = {
//   positions: PropTypes.object,
// }

export default Experience
