import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { useLocation } from "react-router-dom";
import CardPokemon from "../../components/CardPokemon";


const SearchPage = () => {
    const location = useLocation()
    console.log(location.state)

    const {globalPokemons} = useContext(PokemonContext);

    const filterPokemon = globalPokemons.filter(pokemon=> pokemon.name.includes(location.state.toLowerCase()));
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