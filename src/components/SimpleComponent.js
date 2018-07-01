// Code SimpleComponentHere Here
import React, { Component } from 'react'

class SimpleComponent extends Component {
  constructor() {
    super()
    this.state = {
      mood: 'happy'
    }
  }

  handleClick = () => {
    let newmood
    if(this.state.mood === 'happy') {
      newmood = 'sad'
    } else {
      newmood = 'happy'
    }

    this.setState({
      mood: newmood
    })
  }

  render() {
    return(
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent;
