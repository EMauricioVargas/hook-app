import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter';


const heaveStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('ahi vamos...');
    }

    return `${iterationNumber} iteraciones realizadas`;
}


export const MemoHook = () => {


    const { counter, increment, decrement } = useCounter(4000);
    const messageMemorizedVlaue = useMemo(() => heaveStuff(counter), [counter]);

    const [show, setShow] = useState(true);

    return (
        <>
            <h1>Counter: <small> {counter} </small>  </h1>
            <hr></hr>
            <h4>{messageMemorizedVlaue}</h4>
            <button className='btn btn-primary' onClick={() => increment()}>+1</button>
            <button className='btn btn-outline-primary' onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>

        </>
    )
}
