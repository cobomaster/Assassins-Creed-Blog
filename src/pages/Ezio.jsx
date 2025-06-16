import { personajes } from './data';
import './estilos.css';

function Ezio(){
    const ezio = personajes.find(p => p.id === 'ezio');
    
    return (
        <div className='Contenido'>
            <div className='hea'>
                <h1> {ezio.nombre} </h1>
                <img src={ezio.imagen} alt={ezio.nombre} />
            </div>
            
            <div className='article'>
                <div className='article1'>
                      <h2> Historia </h2>
                      <p> {ezio.historia} </p>
                </div>
                <div className='article2'>
                    <h2> juegos </h2>
                    <p> {ezio.juegos} </p>
            </div>
            <div className='article3'>
                    <h2> Consolas </h2>
                    <p> {ezio.consolas} </p>
            </div>
        </div>
        </div>
    );
}

export default Ezio;