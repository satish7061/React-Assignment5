import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log("Pure Component Render");
    return (
      <h3>Pure Component {this.props.name} </h3>
    )
  }
}

export default PureComp