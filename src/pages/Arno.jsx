import { personajes } from './data';
import './estilos.css';

function Arno(){
    const arno = personajes.find (p => p.id === 'arno');

   return (
       <div className='Contenido'>
            <div className='hea'>
                <h1> {arno.nombre} </h1>
                <img src={arno.imagen} alt={arno.nombre} />
            </div>
            
            <div className='article'>
                <div className='article1'>
                      <h2> Historia </h2>
                      <p> {arno.historia} </p>
                </div>
                <div className='article2'>
                    <h2> juegos </h2>
                    <p> {arno.juegos} </p>
            </div>
            <div className='article3'>
                    <h2> Consolas </h2>
                    <p> {arno.consolas} </p>
            </div>
        </div>
        </div>
    );
}

export default Arno;