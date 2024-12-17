import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter';
import { Small } from './small';
export const Memorize = () => {

    const { counter, increment, decrement } = useCounter(10);

    const [show, setShow] = useState(true);

    return (
        <>
            <h1>Counter: <Small value={counter}></Small>  </h1>
            <hr></hr>
            <button className='btn btn-primary' onClick={() => increment()}>+1</button>
            <button className='btn btn-outline-primary' onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>

        </>
    )
}
