import React, { useState, useEffect } from 'react'
import { counterUsecase } from './domain/usecases/counterUsecase';


export const CounterExample = () => {

    const [count, setCount] = useState()
    
    useEffect(() => {
        counterUsecase.subscribeValue((value) => {
            setCount(value)
        })

       
    })

    return (
        <div className="App">
            <button onClick={() => { counterUsecase.increase(1) }}>+</button>
            { count }
            <button onClick={() => { counterUsecase.decrease(1) }}>-</button>
        </div>
    )
}

