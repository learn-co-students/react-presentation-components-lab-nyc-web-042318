// Code SimpleComponentHere Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      mood: 'happy'
    }
  }

  handleClick = () => {
    if (this.state.mood === 'happy') {
      console.log(this.state.mood)
      this.setState({
        mood: 'sad'
      })
    } else {
      this.setState({
        mood: 'happy'
      })
    }
  }

  render () {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}
