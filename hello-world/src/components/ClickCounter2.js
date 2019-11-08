import React, { Component } from 'react'

class ClickCounter2 extends Component {
    
    
  render() {
      const {count, increement} = this.props
    return (
      <div>
        <button onClick={increement}> Clicked {count} </button>
      </div>
    )
  }
}

export default ClickCounter2
