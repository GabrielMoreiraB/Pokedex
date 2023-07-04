
import { createContext, useEffect, useState } from "react";
import { useForm } from "../hook/useForm";

export const PokemonContext = createContext();

export const PokemonProvider = ({children}) => {

    const [offset, setOffset] = useState(0);
    const [allPokemons, setAllPokemons] = useState([]);
    const [globalPokemons, setGlobalPokemons] = useState([]);

    const { valueSearch, onInputChange, onResetForm } = useForm({
        valueSearch: ''
    })


    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(false);

    //chamar os 50 primeiros pokemons

    const getAllPokemons = async(limit = 50) => {
        const URLbase = 'https://pokeapi.co/api/v2/'

        const resp = await fetch(`${URLbase}pokemon?limit=${limit}&offset=${offset}`)
        const data = await resp.json();
        
        const promisses = data.results.map(async(pokemon)=> {
            const resp = await fetch(pokemon.url)
            const data = await resp.json();
            return data
        })

        const results = await Promise.all(promisses)
        setAllPokemons([...allPokemons, ...results ])
        setLoading(false);
    }

    //chamar todos os pokemons para a busca 
    const getGlobalPokemons = async() =>{
        const URLbase = 'https://pokeapi.co/api/v2/'

        const resp = await fetch(`${URLbase}pokemon?limit=100000&offset=0`)
        const data = await resp.json();
        
        const promisses = data.results.map(async(pokemon)=> {
            const resp = await fetch(pokemon.url)
            const data = await resp.json();
            return data
        })

        const results = await Promise.all(promisses)
        setGlobalPokemons(results)
        setLoading(false);
    }

    //chamar pokemon por id

    const getPokemonsById = async(id) =>{
        const URLbase = 'https://pokeapi.co/api/v2/';
        const resp = await fetch(`${URLbase}pokemon/${id}`);
        const data = await resp.json();
        return data;
    }

    useEffect(()=> {
        getAllPokemons()
    },[])

    useEffect(()=> {
        getGlobalPokemons()
    }, [])


    return (
        <PokemonContext.Provider 
        value={{
            valueSearch,
            onInputChange,
            onResetForm,
            allPokemons,
            globalPokemons,
            getPokemonsById

        }}>
            {children}
        </PokemonContext.Provider>
    )
}