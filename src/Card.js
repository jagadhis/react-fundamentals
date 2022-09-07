import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.description}</p>
      </div>
    )
  }
}
