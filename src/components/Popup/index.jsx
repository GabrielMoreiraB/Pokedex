import { FaRegTimesCircle } from "react-icons/fa";

const Poupup = ({onclose, showPopup}) => {
    return ( 
        <div className={`popup ${showPopup ? 'open' : ''}`}>
            <div className="popup-content">
                <span className="close" onClick={onclose}><FaRegTimesCircle/></span>
                <h1>Procure pelos seus Pokemons a partir da região!</h1>
                <p>O mundo de Pokemon é colossal, como todos sabem, com esse mundo enorme há uma gigantesca fauna e flora disponível para ser encontrada. Pensando nisso separamos os pokemons endêmicos de cada região.
                </p>
                <div className="flex-popup">
                <p><strong>Curiosidade:</strong>Todas as Regiões onde se passa o anime são baseadas em regiões reais do Japão, apenas  Unova foi baseada na região metropolitana da cidade de Nova Iorque. Kalos foi baseada no Norte da França. </p>
                <img className="img-popup" src="mapa-japan.jpg" alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Poupup;