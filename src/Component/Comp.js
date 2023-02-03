import React, { Component } from 'react'

class Comp extends Component {
  render() {
    console.log("Component Render");
    return (
      <h3>Component {this.props.name} </h3>
    )
  }
}

export default Comp