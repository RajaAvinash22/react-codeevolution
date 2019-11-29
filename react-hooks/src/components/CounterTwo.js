import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increement':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decreement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increement2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decreement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state

    }
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count - {count.firstCounter}</div>
            <div>Count - {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increement', value: 5 })}>Increement</button>
            <button onClick={() => dispatch({ type: 'decreement', value: 5 })}>Decreement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <div>
                <button onClick={() => dispatch({ type: 'increement2', value: 5 })}>Increement 2</button>
                <button onClick={() => dispatch({ type: 'decreement2', value: 5 })}>Decreement 2</button>
            </div>
        </div>
    )
}

export default CounterTwo
