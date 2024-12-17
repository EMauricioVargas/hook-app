import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
        () => {
            setCounter((value) => value + 1);
        }, []
    )
    return (
        <>
            <h1>useCallbackHook: {counter}</h1>
            <hr></hr>
            <ShowIncrement increment={incrementFather}></ShowIncrement>
        </>
    )
}
