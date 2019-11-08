import React, { Component } from 'react'

 class Counter extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
       count: 0, 
     }
   }
   increement=()=>{
     this.setState ({
       count : this.state.count +1
     })
    // , () =>{
    //   console.log('Callback value', this.state.count)
    //  })

    // pass function as argument
  //   this.setState(prevState =>({
  //     count: prevState.count + 1
  //   }))
  //    console.log(this.state.count)
  //  }
  //  increementFive(){
  //   this.increement()
  //   this.increement()
  //   this.increement()
  //   this.increement()
  //   this.increement()
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        {/* Event handler */}
        <button onClick ={this.increement}>Increement</button>
      </div>
    )
  }

  
}

export default Counter;
