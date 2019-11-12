import React, { Component } from 'react'
import CompoF from './CompoF'
import UserContext from './userContext'


class CompoE extends Component {
  // static contextType = UserContext
  render() {
    return (
      <div>
       Default Context value in Component E = {this.context}
        <CompoF />
      </div>
    )
  }
}
CompoE.contextType = UserContext
export default CompoE
