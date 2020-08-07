import React from 'react';
import { useHistory } from "react-router-dom";
import { counterUsecase } from '../domain/usecases/counterUsecase';


export const Test = (props) => {

    let history = useHistory();
 
    return (
        <>
            Hello Test
            <button onClick={() => { counterUsecase.increase(1) }}>+</button>

            <button onClick={() => { counterUsecase.decrease(1) }}>-</button>
            <button onClick={() => { history.push('/page2')}}>next</button>
        </>
    )
}

