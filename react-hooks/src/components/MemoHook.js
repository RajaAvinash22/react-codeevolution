import React, { useState, useMemo } from 'react'

function MemoHook() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const increementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const increementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }
    const isEven = useMemo(() => {
        let i = 0
        while(i< 20000)i++
        return counterOne % 2 == 0
    },[counterOne])

    
    return (
        <div>
            <div>
                <button onClick={increementOne}>Count One -{counterOne}</button>
                <span>{isEven ?'Even':'Odd'}</span>
            </div>
            <div><button onClick={increementTwo}>Count Two -{counterTwo}</button>
            </div>
        </div>
    )
}

export default MemoHook
