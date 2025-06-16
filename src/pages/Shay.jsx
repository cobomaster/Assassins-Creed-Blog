import { personajes } from './data';
import './estilos.css';

function Shay(){
    const shay = personajes.find(p => p.id === 'shay');
    
    return (
        <div className='Contenido'>
            <div className='hea'>
                <h1> {shay.nombre} </h1>
                <img src={shay.imagen} alt={shay.nombre} />
            </div>
            
            <div className='article'>
                <div className='article1'>
                      <h2> Historia </h2>
                      <p> {shay.historia} </p>
                </div>
                <div className='article2'>
                    <h2> juegos </h2>
                    <p> {shay.juegos} </p>
            </div>
            <div className='article3'>
                    <h2> Consolas </h2>
                    <p> {shay.consolas} </p>
            </div>
        </div>
        </div>
    );
}

export default Shay;

