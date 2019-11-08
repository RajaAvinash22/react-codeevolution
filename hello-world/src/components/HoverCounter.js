import React, { Component } from 'react'
import withCounter from './withCounter'

export class HoverCounter extends Component {
    
  render() {
      const {count,increementCount}=this.props
    return (
      <div>
        <h2 onMouseOver={increementCount}>
    Hover {count}times</h2>
      </div>
    )
  }
}

export default withCounter(HoverCounter,10)
