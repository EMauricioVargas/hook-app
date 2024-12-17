import React, { useEffect } from 'react'

export const Message = () => {

    const onMouseMove = ({ x, y }) => {
        console.log(x, y);
    }

    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, [])

    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    )
}
