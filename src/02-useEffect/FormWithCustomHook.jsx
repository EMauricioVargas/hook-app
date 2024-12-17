import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm } = useForm({
        userName: '',
        email: '',
        password: ''
    });

    const { userName, email, password } = formState;


    return (
        <>
            <h1>Form with custom hook</h1>
            <hr></hr>
            <input type="text" className='form-control' placeholder='Username' name='userName' value={userName} onChange={onInputChange}></input>
            <input type="email" className='form-control mt-2' placeholder='96@gmail.com' name='email' value={email} onChange={onInputChange}></input>
            <input type="password" className='form-control mt-2' placeholder='Contraseña' name='password' value={password} onChange={onInputChange}></input>
            <button onClick={onResetForm} className='btn btn-primary mt-2'>Borrar</button>
        </>
    )
}
