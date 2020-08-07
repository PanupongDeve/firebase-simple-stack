import React, { useEffect, useState }  from 'react';
import { counterUsecase } from '../domain/usecases/counterUsecase';

export const Page2 = (props) => {
    const [count, setCount] = useState(counterUsecase.getValue())

    useEffect(() => {
        counterUsecase.subscribeValue((value) => {
            setCount(value)
        })
 
    }, [])


    return (
        <>
            Hello Page2 { count }
        </>
    )
}

