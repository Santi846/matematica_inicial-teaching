// src/pages/Home.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => {
  return <>
    <h1>Aprender Ingeniería - FING Uruguay</h1>
    <nav>
          {/* <Link to="/">Inicio</Link> */}
            {/* <br></br>
          <Link to="/materias/matematica_inicial">Mátematica Inicial</Link> */}
          <Link to="/materias/">Materias</Link>
      </nav>
      <p>Te voy a explicar cada tema, de manera modular, a lo mamushka</p>
      </>;
};

export default Home;

