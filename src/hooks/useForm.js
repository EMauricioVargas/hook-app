import React, { useState } from 'react'

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }
    const onResetForm = () => {
        const aux = {};
        Object.keys(formState).forEach((key) => {
            aux[key] = ''
        });
        setFormState(aux)
    }

    return {
        formState,
        onInputChange,
        onResetForm
    }
}
