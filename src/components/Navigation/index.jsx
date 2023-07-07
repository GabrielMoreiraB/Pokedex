import { useContext, useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { PokemonContext } from '../../context/PokemonContext';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import InitialScreen from '../InitialScreen';

const Navigation = () => {
  const { valueSearch, onInputChange, onResetForm } =
    useContext(PokemonContext);

  const navigate = useNavigate();

  const onSearchSubmit = e => {
    e.preventDefault();
    navigate('/search', {
      state: valueSearch,
    });
    onResetForm();
  };

  const [showLoading, setShowLoading] = useState(true);
  const [indexImg, setIndexImg] = useState(0);

  useEffect(()=> {
    const randomIndex = Math.ceil(Math.random()*5);
    setIndexImg(randomIndex);

    setTimeout( ()=> {
      setShowLoading(false)
    },3000)
  }, [])
  return (
    <>
    {showLoading ? 
    <InitialScreen index={indexImg}/>
    : (
      <>
      <header className="container">
        <div className="logo-flex">
          <Link to="/" className="logo">
            <img src="Pokédex_logo.png" alt="Logo da Pokedex" />
          </Link>
          <div>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif`}
              className="pokemon-gif"
              alt=""
            />
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif`}
              className="pokemon-gif"
              alt=""
            />
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif`}
              className="pokemon-gif"
              alt=""
            />
            <a className="span-contact" target="_blank" href="https://github.com/GabrielMoreiraB">
                <BsGithub />
              </a>
              <a
              className="span-contact"
                target="_blank"
                href="https://www.linkedin.com/in/gabriel-moreira-b2189416b/"
              >
                <BsLinkedin /></a>
          </div>
        </div>

        <form onSubmit={onSearchSubmit}>
          <div className="form-group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon-search"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="search"
              name="valueSearch"
              id=""
              value={valueSearch}
              onChange={onInputChange}
              placeholder="Busque por nome ou ID do Pokemon"
            />
          </div>

          <button className="btn-search">Buscar</button>
        </form>
      </header>

      <Outlet />
      <footer className="footer-info">
        <div className="footer-info-espaco"></div>
        <span>
          Orgulhosamente produzido por{' '}
          <a target="_blank" href="https://github.com/GabrielMoreiraB">
            Gabriel Moreira
          </a>
        </span>
      </footer>
      </>
    )
    
    }
      
    </>
  );
};

export default Navigation;
