import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter(0);

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr></hr>
            <button className='btn btn-primary' onClick={() => increment(2)}>+1</button  >
            <button className='btn btn-primary' onClick={reset}>Reset</button>
            <button className='btn btn-primary' onClick={() => decrement(2)}>-1</button>
        </>
    )
}
