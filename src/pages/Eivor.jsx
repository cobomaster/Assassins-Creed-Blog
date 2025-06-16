import { personajes } from './data';
import './estilos.css';

function Eivor(){
    const eivor = personajes.find(p => p.id === 'eivor');
    
    return (
        <div className='Contenido'>
            <div className='hea'>
                <h1> {eivor.nombre} </h1>
                <img src={eivor.imagen} alt={eivor.nombre} />
            </div>
            
            <div className='article'>
                <div className='article1'>
                      <h2> Historia </h2>
                      <p> {eivor.historia} </p>
                </div>
                <div className='article2'>
                    <h2> juegos </h2>
                    <p> {eivor.juegos} </p>
            </div>
            <div className='article3'>
                    <h2> Consolas </h2>
                    <p> {eivor.consolas} </p>
            </div>
        </div>
        </div>
    );
}

export default Eivor;