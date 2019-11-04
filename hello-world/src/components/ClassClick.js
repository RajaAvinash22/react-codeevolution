import React, { Component } from 'react'

 class ClassClick extends Component {
     clickHandler(){
         console.log("Class Component Button clicked")
     }
  render() {
    return (
      <div>
        <button onClick = {this.clickHandler}>Clicked</button>
      </div>
    )
  }
}

export default ClassClick
