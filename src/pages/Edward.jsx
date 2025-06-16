import { personajes } from './data';
import './estilos.css';

function Edward(){
    const edward = personajes.find(p => p.id === 'edward');
    
    return (
        <div className='Contenido'>
            <div className='hea'>
                <h1> {edward.nombre} </h1>
                <img src={edward.imagen} alt={edward.nombre} />
            </div>
            
            <div className='article'>
                <div className='article1'>
                      <h2> Historia </h2>
                      <p> {edward.historia} </p>
                </div>
                <div className='article2'>
                    <h2> juegos </h2>
                    <p> {edward.juegos} </p>
            </div>
            <div className='article3'>
                    <h2> Consolas </h2>
                    <p> {edward.consolas} </p>
            </div>
        </div>
        </div>
    );
}

export default Edward;