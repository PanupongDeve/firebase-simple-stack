import React, { useEffect, useState } from 'react';
import { Test } from '../components/Test';
import { counterUsecase } from '../domain/usecases/counterUsecase';

export const Page1 = () => {
    const [count, setCount] = useState(counterUsecase.getValue())

    useEffect(() => {
        counterUsecase.increase(1)
        counterUsecase.subscribeValue((value) => {
            setCount(value)
        })
 
    }, [])

    const data = [];

    for(let i=0; i<= count; i++) {
        data.push("test")
    }

    return (
        <>
            {count}
            <Test />
            { data.map((e) => {
                return (
                    <>
                        <br />
                        {e}
                    </>
                )
            }) }
        </>
    )
}

