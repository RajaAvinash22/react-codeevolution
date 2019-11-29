import React, { useState, useEffect } from 'react'
import useCounter from '../hooks/useCounter'

function Counter2() {
    const [count,increement,decreement,reset]=useCounter(10,5)

    return (
        <div>
            <h2> Count = {count}</h2>
            <button onClick={increement}>Increement</button>
            <button onClick={decreement}>Decreement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter2
