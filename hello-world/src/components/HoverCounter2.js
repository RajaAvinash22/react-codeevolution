import React, { Component } from 'react'

 class HoverCounter2 extends Component {
     
     
  render() {
      const {count,increement} = this.props
    return (
      <h2 onMouseOver={increement}>Moved {count} times</h2>
    )
  }
}

export default HoverCounter2
