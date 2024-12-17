import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const TodoForm = ({ onNewTodo }) => {

    const { formState, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (formState.description?.length >= 1) {

            const newTodo = {
                id: new Date().getTime(),
                description: formState.description,
                done: false
            }

            onNewTodo(newTodo);
            onResetForm();
        }
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input type='text' placeholder='¿Que hay pa hacer?' className='form-control' name='description' value={formState.description} onChange={onInputChange}>
            </input>
            <button className='btn btn-primary mt-2' type='submit'>Agregar</button>
        </form>
    )
}
