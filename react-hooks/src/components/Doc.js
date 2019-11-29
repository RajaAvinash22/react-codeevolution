import React,{useState } from 'react'
import useDoc from '../hooks/useDoc'

function Doc() {
    const [count,setCount] = useState(0)

    useDoc(count)
  return (
    <div>
       <button onClick={() => setCount(count + 1)}>
                Clicked{count}</button>
    </div>
  )
}

export default Doc
