// src/pages/Materias.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Materias = () => {
  return <>
    <h1>📚 Materias</h1>
    <nav>
          <Link to="/">Home</Link>
            <br></br>
          <Link to="/materias/matematica_inicial/">Mátematica Inicial</Link>
      </nav>
      </>;
};

export default Materias;
