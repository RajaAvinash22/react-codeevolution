import React , {useState,useEffect}from 'react'

function IntervalHookCounter() {
 const [count,setState]=useState(0)
 const tick = () =>{
    setState(prev =>prev + 1)
}
useEffect(()=>{
    // function doSomething(){
    //     console.log(someProp)
    // }
    // doSomething()
    const interval = setInterval(tick,1000)

    return(()=>
    {clearInterval(interval)})
},[])
  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHookCounter
