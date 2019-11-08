import React, { Component } from 'react'

 class HoverCounter2 extends Component {
     
     
  render() {
      const {count,increement} = this.state
    return (
      <h2 onMouseOver={increement}>Moved {count} </h2>
    )
  }
}

export default HoverCounter2
