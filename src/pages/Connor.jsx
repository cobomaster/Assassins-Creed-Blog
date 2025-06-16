import { personajes } from './data';
import './estilos.css';

function Connor(){
    const connor = personajes.find(p => p.id === 'connor');
    
    return (
        <div className='Contenido'>
            <div className='hea'>
                <h1> {connor.nombre} </h1>
                <img src={connor.imagen} alt={connor.nombre} />
            </div>
            
            <div className='article'>
                <div className='article1'>
                      <h2> Historia </h2>
                      <p> {connor.historia} </p>
                </div>
                <div className='article2'>
                    <h2> juegos </h2>
                    <p> {connor.juegos} </p>
            </div>
            <div className='article3'>
                    <h2> Consolas </h2>
                    <p> {connor.consolas} </p>
            </div>
        </div>
        </div>
    );
}

export default Connor;