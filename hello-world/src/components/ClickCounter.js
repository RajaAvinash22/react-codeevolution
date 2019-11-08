import React, { Component } from 'react'
import withCounter from './withCounter'
class ClickCounter extends Component {
   
  render() {
      const {count, increementCount} = this.props

    return (
      <button onClick={increementCount}>
        {this.props.name}
        Clicked {count} times</button>
    )
  }
}

export default withCounter(ClickCounter,5)
