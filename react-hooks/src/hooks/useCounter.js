import {useState} from 'react'

function useCounter(initialCount = 0,value) {
    const [count, setCount] = useState(initialCount)

    const increement = () => {
        setCount(prevCount => prevCount + value)
    }
    
    const decreement = () => {
        setCount(prevCount => prevCount - value)
    }
    const reset = () => {
        setCount(initialCount)
    }
    return [count,increement,decreement,reset]
}

export default useCounter
