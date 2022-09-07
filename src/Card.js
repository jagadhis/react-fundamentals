import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const {name,description} = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>{description}</p>
      </div>
    )
  }
}
