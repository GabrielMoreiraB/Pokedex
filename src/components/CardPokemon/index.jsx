import { Link } from 'react-router-dom';

const CardPokemon = ({ pokemon }) => {
    const CorEscrito = {
        color: `var(--color-${pokemon.types[0].type.name})`
    }
  return (
    <>
      <Link to={`/pokemon/${pokemon.id}`} className="card-pokemon">
        <div className="card-img">
            <div  className={`bg-color ${pokemon.types[0].type.name}`}></div>
           <span style={CorEscrito} className="pokemon-id">N° {pokemon.id}</span>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`Pokemon ${pokemon.name}`}
          />

        </div>
        <div className="card-info">
          
          <div className='card-name'>
            <h3 style={CorEscrito}>{pokemon.name}</h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`} className='pokemon-gif' alt="" />
          </div>
          

          <div className="card-types">
            {pokemon.types.map(type => (
              <span key={type.type.name} className={type.type.name}>
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardPokemon;
