import { useContext } from "react";
import PokemonList from "../../components/PokemonList";
import { PokemonContext } from "../../context/PokemonContext";

const HomePage = () => {
    const {loadMore, loading} = useContext(PokemonContext)
    return ( 
    <>
        <PokemonList/>
        <div className="container-btn-load-more container" onClick={loadMore}>
            <button className="btn-load-more" style={{ display: loading ? 'none' : 'block' }}>
                Carregar Mais
            </button>
            <span className="end-region" style={{ display: endRegion ? 'block' : 'none' }}>Os Pokemons dessa região acabaram 😒 tente a próxima no nosso cabeçalho</span>
        </div>
    </> 
    );
}
 
export default HomePage;