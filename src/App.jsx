import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Importa tu layout y páginas
import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import Altair from './pages/Altair';
import Arno from './pages/Arno';
import Aveline from './pages/Aveline';
import Basim from './pages/Basim';
import Bayek from './pages/Bayek';
import Connor from './pages/Connor';
import Edward from './pages/Edward';
import Eivor from './pages/Eivor';
import Ezio from './pages/Ezio';
import Frye from './pages/Frye';
import Odyssey from './pages/Odyssey';
import Shay from './pages/Shay';
import Articulo from './pages/Articulos'


function App() {
  return (
    <div className='Contenedor_Principal'>
      <div className='Hea'>
        <img src='/logo_general.gif'/>
        <p>Assassins Creed Fan Page</p>
      </div>

      <div className='Menu'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="altair" element={<Altair />} />
          <Route path="arno" element={<Arno />} />
          <Route path="aveline" element={<Aveline />} />
          <Route path="basim" element={<Basim />} />
          <Route path="bayek" element={<Bayek />} />
          <Route path="connor" element={<Connor />} />
          <Route path="edward" element={<Edward />} />
          <Route path="eivor" element={<Eivor />} />
          <Route path="ezio" element={<Ezio />} />
          <Route path="frye" element={<Frye />} />
          <Route path="odyssey" element={<Odyssey />} />
          <Route path="shay" element={<Shay />} />
          <Route path="/articulo/:id" element={<Articulo />} />
        </Route>
      </Routes>
    </div>

    <div className='footer'>
      <p> Pagina Fan </p>
    </div>
    </div>
  );
}

export default App;
