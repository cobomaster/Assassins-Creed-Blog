import { personajes } from './data';
import './estilos.css';

function Basim(){
    const basim = personajes.find(p => p.id === 'basim');
    
    return (
        <div className='Contenido'>
            <div className='hea'>
                <h1> {basim.nombre} </h1>
                <img src={basim.imagen} alt={basim.nombre} />
            </div>
            
            <div className='article'>
                <div className='article1'>
                      <h2> Historia </h2>
                      <p> {basim.historia} </p>
                </div>
                <div className='article2'>
                    <h2> juegos </h2>
                    <p> {basim.juegos} </p>
            </div>
            <div className='article3'>
                    <h2> Consolas </h2>
                    <p> {basim.consolas} </p>
            </div>
        </div>
        </div>
    );
}

export default Basim;