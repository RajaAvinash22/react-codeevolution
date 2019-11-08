import React, { Component } from 'react'


 class UserGreeting extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          isLoggedIn : false
       }
     }
     
  render() {

    // short circuit operator
   return this.state.isLoggedIn && <div>Welcome avinash</div>


// Ternary conditional rendering
    // return(
    //     this.state.isLoggedIn ?(
    // <div>welcome avinash</div>):
    // (
    //     <div>welcome guest</div>)
    // );



    // Using Environment variable
    //   let messsage;
    //   if(this.state.isLoggedIn){
    //       messsage = <div>welcome avinash</div>
    //   }else{
    //       messsage = <div>Welcome guest</div>
    //   }
    //   return<div>{messsage}</div>
    
    //   ifelse rendering always outside JSX
    //   if(this.state.isLoggedIn){
    //       return(
    //           <div>Welcome Vishwas</div>
    //       )
    //   }else{
    //       return(
    //           <div>Welcome guest</div>
    //       )
    //   }
    
  }
}

export default UserGreeting
