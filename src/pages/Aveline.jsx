import { personajes } from './data';
import './estilos.css';

function Aveline(){
    const aveline = personajes.find(p => p.id === 'aveline');
    
    return (
        <div className='Contenido'>
            <div className='hea'>
                <h1> {aveline.nombre} </h1>
                <img src={aveline.imagen} alt={aveline.nombre} />
            </div>
            
            <div className='article'>
                <div className='article1'>
                      <h2> Historia </h2>
                      <p> {aveline.historia} </p>
                </div>
                <div className='article2'>
                    <h2> juegos </h2>
                    <p> {aveline.juegos} </p>
            </div>
            <div className='article3'>
                    <h2> Consolas </h2>
                    <p> {aveline.consolas} </p>
            </div>
        </div>
        </div>
    );
}

export default Aveline;