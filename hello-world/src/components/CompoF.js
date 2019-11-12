import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class CompoF extends Component {
  render() {
    return (
     
        <UserConsumer>
             {
                 (userName) =>{
                     return <div>Hello {userName}</div>
                 }
             }
        </UserConsumer>
      
    )
  }
}

export default CompoF
