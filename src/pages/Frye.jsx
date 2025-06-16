import { personajes } from './data';
import './estilos.css';

function Frye(){
    const frye = personajes.find(p => p.id === 'frye');
    
    return (
        <div className='Contenido'>
            <div className='hea'>
                <h1> {frye.nombre} </h1>
                <img src={frye.imagen} alt={frye.nombre} />
            </div>
            
            <div className='article'>
                <div className='article1'>
                      <h2> Historia </h2>
                      <p> {frye.historia} </p>
                </div>
                <div className='article2'>
                    <h2> juegos </h2>
                    <p> {frye.juegos} </p>
            </div>
            <div className='article3'>
                    <h2> Consolas </h2>
                    <p> {frye.consolas} </p>
            </div>
        </div>
        </div>
    );
}

export default Frye;