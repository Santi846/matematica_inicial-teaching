// src/pages/Home.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => {
  return <>
    <h1>🏠 Página de Inicio</h1>
    <nav>
          {/* <Link to="/">Inicio</Link> */}
            <br></br>
          <Link to="/materias/matematica_inicial">Mátematica Inicial</Link>
      </nav>
      </>;
};

export default Home;

