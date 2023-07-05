import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonContext } from '../../context/PokemonContext';
import Loader from '../../assets/Loader';

const PokemonPage = () => {
  const { getPokemonById } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});
  const [corEscrito, setCorEscrito] = useState({});

  const { id } = useParams();

  const fetchPokemon = async id => {
    const data = await getPokemonById(id);
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  useEffect(() => {
    if (pokemon.types && pokemon.types[0]) {
      const color = `var(--color-${pokemon.types[0].type.name})`;
      setCorEscrito({ color });
    }
  }, [pokemon]);

  return (
    <main className="container main-pokemon">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="header-main-pokemon">
            <span style={corEscrito} className="number-pokemon">
              #{pokemon.id}
            </span>
            <div className="container-img-pokemon">
              <img
                src={pokemon.sprites.other.dream_world.front_default ? `${pokemon.sprites.other.dream_world.front_default}` : `${pokemon.sprites.other["official-artwork"].front_default}`}
                alt={`Pokemon ${pokemon?.name}`}
              />
            </div>

            <div className="container-info-pokemon">
              <h1 style={corEscrito}>{pokemon.name}</h1>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
                className="pokemon-gif container"
                alt=""
              />
              <div className="card-types info-pokemon-type">
                {pokemon.types.map(type => (
                  <span key={type.type.name} className={`${type.type.name}`}>
                    {type.type.name}
                  </span>
                ))}
              </div>
              <div className="info-pokemon">
                <div className="group-info">
                  <p>Altura</p>
                  <span>{pokemon.height}</span>
                </div>
                <div className="group-info">
                  <p>Peso</p>
                  <span>{pokemon.weight}KG</span>
                </div>
              </div>
            </div>
          </div>

          <div className="container-stats">
            <h1>Estatisticas</h1>
            <div className="stats">
              <div className="stat-group">
                <span>Hp</span>
                <div className="progress-bar">
                  <div
                    className={`progress-pokemon ${pokemon.types[0].type.name}`}
                    style={{
                      width: `${
                        (parseFloat(pokemon.stats[0].base_stat) * 10) / 4.1
                      }px`,
                    }}
                  ></div>
                </div>
                <span className="counter-stat">
                  {pokemon.stats[0].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Attack</span>
                <div className="progress-bar">
                  <div
                    className={`progress-pokemon ${pokemon.types[0].type.name}`}
                    style={{
                      width: `${
                        (parseFloat(pokemon.stats[1].base_stat) * 10) / 4.1
                      }px`,
                    }}
                  ></div>
                </div>
                <span className="counter-stat">
                  {pokemon.stats[1].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Defense</span>
                <div className="progress-bar">
                  <div
                    className={`progress-pokemon ${pokemon.types[0].type.name}`}
                    style={{
                      width: `${
                        (parseFloat(pokemon.stats[2].base_stat) * 10) / 4.1
                      }px`,
                    }}
                  ></div>
                </div>
                <span className="counter-stat">
                  {pokemon.stats[2].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Special Attack</span>
                <div className="progress-bar">
                  <div
                    className={`progress-pokemon ${pokemon.types[0].type.name}`}
                    style={{
                      width: `${
                        (parseFloat(pokemon.stats[3].base_stat) * 10) / 4.1
                      }px`,
                    }}
                  ></div>
                </div>
                <span className="counter-stat">
                  {pokemon.stats[3].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Special Defense</span>
                <div className="progress-bar">
                  <div
                    className={`progress-pokemon ${pokemon.types[0].type.name}`}
                    style={{
                      width: `${
                        (parseFloat(pokemon.stats[4].base_stat) * 10) / 4.1
                      }px`,
                    }}
                  ></div>
                </div>
                <span className="counter-stat">
                  {pokemon.stats[4].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Speed</span>
                <div className="progress-bar">
                  <div
                    className={`progress-pokemon ${pokemon.types[0].type.name}`}
                    style={{
                      width: `${
                        (parseFloat(pokemon.stats[5].base_stat) * 10) / 4.1
                      }px`,
                    }}
                  ></div>
                </div>
                <span className="counter-stat">
                  {pokemon.stats[5].base_stat}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default PokemonPage;
