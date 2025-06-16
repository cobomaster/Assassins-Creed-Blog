import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './inicio.css';

function Articulo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [articulo, setArticulo] = useState(null);
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState('');

  // Cargar artículo y comentarios al montar
  useEffect(() => {
    const articulos = JSON.parse(localStorage.getItem('articulos')) || [];
    const encontrado = articulos.find(a => a.id === Number(id));
    setArticulo(encontrado);

    // Cargar comentarios del localStorage
    const comentariosGuardados = JSON.parse(localStorage.getItem(`comentarios_${id}`)) || [];
    setComentarios(comentariosGuardados);
  }, [id]);

  // Guardar comentarios en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem(`comentarios_${id}`, JSON.stringify(comentarios));
  }, [comentarios, id]);

  const handleComentar = (e) => {
    e.preventDefault();
    if (nuevoComentario.trim() === '') return;
    setComentarios([...comentarios, nuevoComentario]);
    setNuevoComentario('');
  };

  if (!articulo) {
    return (
      <div className="Contenido">
        <div className="article">
          <h2>Artículo no encontrado</h2>
          <button onClick={() => navigate('/')} className="articulo-form button">
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="Contenido">
      <div className="hea">
        <h1>{articulo.titulo}</h1>
      </div>
      <div className="article">
        <p>{articulo.contenido}</p>
        <button onClick={() => navigate('/')} className="articulo-form button" style={{ marginBottom: 24 }}>
          Volver al inicio
        </button>
        <div style={{ marginTop: 32 }}>
          <h3>Comentarios</h3>
          <form onSubmit={handleComentar} className="articulo-form" style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Escribe un comentario..."
              value={nuevoComentario}
              onChange={e => setNuevoComentario(e.target.value)}
              style={{ flex: 1 }}
            />
            <button type="submit" style={{ marginTop: 0 }}>
              Comentar
            </button>
          </form>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: 16 }}>
            {comentarios.map((coment, idx) => (
              <li key={idx} className="article" style={{ marginTop: 8, background: '#f4f4f4' }}>
                {coment}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Articulo;