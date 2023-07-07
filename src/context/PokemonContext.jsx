
import { createContext, useEffect, useState } from "react";
import { useForm } from "../hook/useForm";

export const PokemonContext = createContext();

export const PokemonProvider = ({children}) => {

    const [offset, setOffset] = useState(0);
    const [btnRegion, setBtnRegion] = useState(false);
    const [allPokemons, setAllPokemons] = useState([]);
    const [globalPokemons, setGlobalPokemons] = useState([]);

    const { valueSearch, onInputChange, onResetForm } = useForm({
        valueSearch: ''
    })


    const [loading, setLoading] = useState(true);

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
        if(btnRegion){
            setAllPokemons([ ...results ])
            setBtnRegion(false)
        } else{
            setAllPokemons([...allPokemons, ...results ])
        }
        
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

    const getPokemonById = async(id) =>{
        const URLbase = 'https://pokeapi.co/api/v2/';
        const resp = await fetch(`${URLbase}pokemon/${id}`);
        const data = await resp.json();
        return data;
    }

    useEffect(()=> {
        getAllPokemons()
    },[offset])

    useEffect(()=> {
        getGlobalPokemons()
    }, [])

    const loadMore = () => {
            setOffset(offset + 50)
    }
    

    return (
        <PokemonContext.Provider 
        value={{
            setOffset,
            offset,
            setBtnRegion,
            valueSearch,
            onInputChange,
            onResetForm,
            allPokemons,
            globalPokemons,
            getPokemonById,
            loadMore,
            loading,
            setLoading,
        }}>
            {children}
        </PokemonContext.Provider>
    )
}