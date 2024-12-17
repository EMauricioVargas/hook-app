import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {

    const { counter, decrement, increment } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
        <>
            <div>Información de pokémon</div>
            <hr></hr>

            {isLoading && <LoadingMessage></LoadingMessage>}
            {!isLoading && <PokemonCard id={counter} name={data.name} sprites={
                [
                    data.sprites.front_default,
                    data.sprites.back_default,
                    data.sprites.back_shiny
                ]
            }></PokemonCard>}

            <button onClick={() => decrement()} className='btn btn-primary mt-2'>Anteriores</button>
            <button onClick={() => increment()} className="btn btn-primary mt-2">Siguiente</button>
        </>
    )
}
