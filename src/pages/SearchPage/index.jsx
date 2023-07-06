import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { useLocation } from "react-router-dom";
import CardPokemon from "../../components/CardPokemon";


const SearchPage = () => {
    const location = useLocation()
    const inputValue = location.state.toLowerCase();
    const {globalPokemons} = useContext(PokemonContext);
    console.log(globalPokemons)
    let filterPokemon =[]
    if(isNaN(inputValue)){
        filterPokemon = globalPokemons.filter(pokemon => pokemon.name.includes(inputValue));
    } else {
        const searchID = parseInt(inputValue);
        filterPokemon = globalPokemons.filter(pokemon => pokemon.id === searchID)
    }

    console.log(filterPokemon)
    return ( 
        <div className="container">
            <p className="p-search">
                Encontramos <span>{filterPokemon.length}</span> resultados:
            </p>
            <div className="card-list-pokemon container">
                {filterPokemon.map(pokemon=> <CardPokemon key={pokemon.id} pokemon={pokemon}/>)}
            </div>
        </div>
     );
}
 
export default SearchPage;