import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        userName: 'strider',
        email: 'emauro96@gmail.com'
    });

    const { userName, email } = formState

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }


    useEffect(
        () => {
/*             console.log('useEffect called!')
 */        }, []
    );

    useEffect(
        () => {
/*             console.log('useEffect changed');
 */        }, [formState]
    )

    return (
        <>
            <h1>SimpleForm</h1>
            <hr></hr>
            <input type="text" className='form-control' placeholder='Username' name='userName' value={userName} onChange={onInputChange}></input>
            <input type="email" className='form-control mt-2' placeholder='96@gmail.com' name='email' value={email} onChange={onInputChange}></input>
            {userName === 'strider2' ? <Message /> : null}
        </>
    )
}
