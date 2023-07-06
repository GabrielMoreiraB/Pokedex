import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import CardPokemon from "../CardPokemon";
import Loader from "../../assets/Loader";

const PokemonList = () => {
    const{allPokemons, loading} =useContext(PokemonContext)
    return ( 
        <>
        {
            loading? (
                <Loader/>
            ) : (
                <div className="card-list-pokemon container">
            {allPokemons.map(pokemon=> <CardPokemon pokemon={pokemon} key={pokemon.id}/> )}
        </div>
            )
        }
        </>
     );
}
 
export default PokemonList;