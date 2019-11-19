import React,{useState} from 'react'

function HookCounter2() {
    const initialCount = 0;
    const [count, setCount]=useState(initialCount);

   const increementByFive = () => {
        for(let i=0;i<5;i++){
            setCount(prevState => prevState+1)
        }
        
    }
   const decrementByFive = () =>{
       for(let i=5;i>0;i--){
        setCount(prevState => prevState-1)
       }
   }
    

  return (
    <div>
      Count: {count}
      <button onClick={()=>setCount(initialCount)}>Reset</button>
      <button onClick={()=>setCount(prevState => prevState+1)}>Increement</button>
      <button onClick={()=>setCount(prevState => prevState-1)}>Decrement</button>
      <button onClick={increementByFive}>IncreementByFive</button>
      <button onClick={decrementByFive}>DecrementByFive</button>
    </div>
  )
}

export default HookCounter2
