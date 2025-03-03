import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NotFound from './pages/NotFound';
import MatematicaInicial from './pages/materias/matematica_inicial/MatematicaInicial';
import Home from './pages/Home';
import Materias from './pages/materias/Materias.jsx';

function App() {

  return (
    <>
      <h1>Aprender Ingeniería - FING Uruguay</h1>

      <Router>  
      <nav>
          <Link to="/">Inicio</Link>
          <br></br>
          <Link to="/materias/">Materias</Link>
      </nav>

      <Routes>
        <Route path="/home/" element={<Home />} />
        <Route path="/" />
        <Route path="/materias/matematica_inicial/" element={<MatematicaInicial />} />
        <Route path="/materias/" element={<Materias />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
