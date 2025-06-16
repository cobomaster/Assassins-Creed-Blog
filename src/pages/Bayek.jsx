import { personajes } from './data';
import './estilos.css';

function Bayek(){
    const bayek = personajes.find(p => p.id === 'bayek');
    return (
        <div className='Contenido'>
            <div className='hea'>
                <h1> {bayek.nombre} </h1>
                <img src={bayek.imagen} alt={bayek.nombre} />
            </div>
            
            <div className='article'>
                <div className='article1'>
                      <h2> Historia </h2>
                      <p> {bayek.historia} </p>
                </div>
                <div className='article2'>
                    <h2> juegos </h2>
                    <p> {bayek.juegos} </p>
            </div>
            <div className='article3'>
                    <h2> Consolas </h2>
                    <p> {bayek.consolas} </p>
            </div>
        </div>
        </div>
    );
}
export default Bayek;