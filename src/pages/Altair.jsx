import { personajes } from './data';
import './estilos.css';

function Altair(){
    const altair = personajes.find(p => p.id === 'altair');
    
    return (
        <div className='Contenido'>
            <div className='hea'>
                <h1> {altair.nombre} </h1>
                <img src={altair.imagen} alt={altair.nombre} />
            </div>
            
            <div className='article'>
                <div className='article1'>
                      <h2> Historia </h2>
                      <p> {altair.historia} </p>
                </div>
                <div className='article2'>
                    <h2> juegos </h2>
                    <p> {altair.juegos} </p>
            </div>
            <div className='article3'>
                    <h2> Consolas </h2>
                    <p> {altair.consolas} </p>
            </div>
        </div>
        </div>
    );
}

export default Altair;