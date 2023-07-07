import { RaceBy } from '@uiball/loaders';

const InitialScreen = ({index}) => {
    console.log(index)
    const imgBack = {
        backgroundImage: `url('gif/${index}.gif')`,
        backgroundSize: `cover`,
        backgroundPosition: `center`
    }
  return (
    <div style={imgBack} className='InitialScreen'>
      <div className='glass-efect'>
        <img src="Pokédex_logo.png" alt="" />
      <RaceBy size={80} lineWeight={5} speed={1.4} color="#1d00d6" />
      <h4>Produzido por Gabriel Moreira</h4>
      </div>
    </div>
  );
};

export default InitialScreen;
