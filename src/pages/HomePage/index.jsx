import { useContext, useState } from 'react';
import PokemonList from '../../components/PokemonList';
import { PokemonContext } from '../../context/PokemonContext';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import Poupup from '../../components/Popup';

const HomePage = () => {
  const { setOffset, offset, setBtnRegion, loadMore, loading } =
    useContext(PokemonContext);

  const locations = [
    {
      name: 'Kanto',
      value: 0,
    },
    {
      name: 'Johto',
      value: 151,
    },
    {
      name: 'Hoenn',
      value: 251,
    },
    {
      name: 'Sinnoh',
      value: 386,
    },
    {
      name: 'Unova',
      value: 493,
    },
    {
      name: 'Kalos',
      value: 649,
    },
    {
      name: 'Alola',
      value: 721,
    },
    {
      name: 'Galar & Hisui',
      value: 809,
    },
    {
      name: 'Paldea',
      value: 905,
    },
  ];

  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  function changeLocation(location) {
    setBtnRegion(true);
    setOffset(location);
  }
  return (
    <>
      <div className="container-btn-load-more container btn-location ">
        {locations.map(location => (
          <button
            onClick={() => changeLocation(location.value)}
            className={`location ${
              offset == location.value ? 'location-active' : ''
            }`}
            key={location.value}
          >
            {location.name}
          </button>
        ))}
        <span className="info-location" onClick={handleOpenPopup}>
          <AiOutlineQuestionCircle fontSize={25} color="rgb(163, 132, 29)" />
        </span>
      </div>

      {showPopup && <Poupup onclose={handleClosePopup} showPopup={showPopup}/>}

      <PokemonList />

      <div className="container-btn-load-more container" onClick={loadMore}>
        <button
          className="btn-load-more"
          style={{ display: loading ? 'none' : 'block' }}
        >
          Carregar Mais
        </button>
      </div>
    </>
  );
};

export default HomePage;
