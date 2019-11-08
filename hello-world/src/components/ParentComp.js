import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'
 class ParentComp extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name: "Avinash"
       }
     }
     componentDidMount() {
         setInterval(()=>{
             this.setState({
                name: "Avinash"
             }) 
         },2000)
         
     }
     
     
  render() {
      console.log(' @@@@@@@@@@@@@@@Parent compo render')
    return (
      <div>
        Parent Compo
        {/* <RegComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp
