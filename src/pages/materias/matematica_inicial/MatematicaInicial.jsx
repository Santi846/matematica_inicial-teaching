import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Tema1 from './temario/Tema1/Tema1';

function MatematicaInicial() {

  return (
    <>  
      <h2>Matemática Inicial</h2>
      <Link to="/">Home</Link>
      <Tema1></Tema1>
    </>
  )
}

export default MatematicaInicial
