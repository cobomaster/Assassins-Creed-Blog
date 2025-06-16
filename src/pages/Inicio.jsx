import './Inicio.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ArticuloForm({ onCrear }) {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCrear({ titulo, contenido });
    setTitulo('');
    setContenido('');
  };

  return (
    <form onSubmit={handleSubmit} className="articulo-form">
      <h3>Crear nuevo artículo</h3>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={e => setTitulo(e.target.value)}
        required
      />
      <textarea
        placeholder="Contenido"
        value={contenido}
        onChange={e => setContenido(e.target.value)}
        required
      />
      <button type="submit">Crear</button>
    </form>
  );
}

function Inicio() {
  const [articulos, setArticulos] = useState([]);
  const navigate = useNavigate();

  // Cargar artículos desde localStorage al iniciar
  useEffect(() => {
    const guardados = localStorage.getItem('articulos');
    if (guardados) {
      setArticulos(JSON.parse(guardados));
    }
  }, []);

  // Guardar artículos en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('articulos', JSON.stringify(articulos));
  }, [articulos]);

  // Generar un id único para cada artículo
  const agregarArticulo = (articulo) => {
    const nuevo = { ...articulo, id: Date.now() };
    setArticulos([nuevo, ...articulos]);
  };

  const borrarArticulo = (id) => {
    setArticulos(articulos.filter((art) => art.id !== id));
  };

  const verArticulo = (id) => {
    navigate(`/articulo/${id}`);
  };

  return (
    <div className="Contenido">
      <div className="hea">
        <h1>Inicio</h1>
        <img src="/logo.png" alt="logo" />
      </div>
      <br />
      <div className="article">
        <h2>Página de Inicio</h2>
      </div>
      <ArticuloForm onCrear={agregarArticulo} />
      <div style={{ marginTop: 32 }}>
        {articulos.length > 0 && <h3>Artículos creados</h3>}
        {articulos.map((art) => (
          <div key={art.id} className="article" style={{ marginTop: 16 }}>
            <h4>{art.titulo}</h4>
            <p>{art.contenido}</p>
            <button
              style={{
                background: '#3498db',
                color: '#fff',
                border: 'none',
                borderRadius: 4,
                padding: '6px 12px',
                cursor: 'pointer',
                marginRight: 8
              }}
              onClick={() => verArticulo(art.id)}
            >
              Ver
            </button>
            <button
              style={{
                background: '#e74c3c',
                color: '#fff',
                border: 'none',
                borderRadius: 4,
                padding: '6px 12px',
                cursor: 'pointer',
                marginTop: 8
              }}
              onClick={() => borrarArticulo(art.id)}
            >
              Borrar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inicio;