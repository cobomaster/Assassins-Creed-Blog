import { personajes } from './data';
import './estilos.css';

function Odyssey(){
    const odyssey = personajes.find(p => p.id === 'odyssey');
    
    return (
        <div className='Contenido'>
            <div className='hea'>
                <h1> {odyssey.nombre} </h1>
                <img src={odyssey.imagen} alt={odyssey.nombre} />
            </div>
            
            <div className='article'>
                <div className='article1'>
                      <h2> Historia </h2>
                      <p> {odyssey.historia} </p>
                </div>
                <div className='article2'>
                    <h2> juegos </h2>
                    <p> {odyssey.juegos} </p>
            </div>
            <div className='article3'>
                    <h2> Consolas </h2>
                    <p> {odyssey.consolas} </p>
            </div>
        </div>
        </div>
    );
}

export default Odyssey;