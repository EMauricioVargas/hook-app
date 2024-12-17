import React, { useState } from 'react';
import { UserContext } from './UserContext';

/* const user = {
    id: 123,
    name: 'Mauricio Vargas',
    email: 'vargas_mauricio@outlook.es'
} */


export const UserProvider = ({ children }) => {

    const [user, setuser] = useState();

    return (
        <UserContext.Provider value={{ user, setuser }}>
            {children}
        </UserContext.Provider>
    )
}
