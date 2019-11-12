import React, { Component } from 'react'

 class RenderCounter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count: 0
        }
        this.increement = this.increement.bind(this)
      }
      increement(){
          this.setState(prevState =>{
              return{count: prevState.count +1}
          })
      }
  render() {
    return (
      <div>
        {this.props.children(this.state.count, this.increement)}
      </div>
    )
  }
}

export default RenderCounter
