import React, { useContext } from 'react'
import { CountContext } from '../App'

function CompoA() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Component A
            <button onClick={() => countContext.countDispatch('increement')}>Increement</button>
            <button onClick={() => countContext.countDispatch('decreement')}>Decreement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default CompoA
