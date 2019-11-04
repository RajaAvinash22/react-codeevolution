import React from 'react'

function FuncClick() {
   function  clickHandler(){
    console.log('Function Component Button Clicked');
    }
  return (
    <div>
     <button onClick = {clickHandler}>Click Me</button>
    </div>
  );
}


export default FuncClick
