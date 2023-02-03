import React, { Component } from 'react'
import Comp from './Comp';
import PureComp from './PureComp';

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Meenakshi"
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:"Meenakshi"
            })
        }, 5000);
    }
  render() {
    console.log("---------------------------Parent Component Render------------------------------");
    return (
      <>
      <h3>Parent Component</h3>
      <Comp name={this.state.name} />
        <PureComp name={this.state.name} />
      </>
      

    )
  }
}

export default ParentComp