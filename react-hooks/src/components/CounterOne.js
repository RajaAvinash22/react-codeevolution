import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increement':
            return state + 1
        case 'decreement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state

    }
}

function CounterOne() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={()=> dispatch('increement')}>Increement</button>
            <button onClick={()=> dispatch('decreement')}>Decreement</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne
